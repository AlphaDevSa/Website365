import { createRequire } from 'module';
import whois from 'whois-json';
import dns from 'dns';
import { promisify } from 'util';

const resolve4 = promisify(dns.resolve4);
const resolveNs = promisify(dns.resolveNs);

const require = createRequire(import.meta.url);
const { Domain } = require('domain-check');

const lookup = typeof whois === 'function' ? whois : whois.lookup;

const withTimeout = async (promise, ms) => {
  let timeoutId;
  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => reject(new Error('WHOIS lookup timed out')), ms);
  });
  try {
    return await Promise.race([promise, timeoutPromise]);
  } finally {
    clearTimeout(timeoutId);
  }
};

/**
 * Checks if a domain has any DNS records (A or NS).
 * If it does, it's definitely NOT available.
 */
const hasDnsRecords = async (domain) => {
  try {
    const results = await Promise.allSettled([
      resolve4(domain),
      resolveNs(domain)
    ]);
    return results.some(r => r.status === 'fulfilled');
  } catch (err) {
    return false;
  }
};

/**
 * WHOIS server overrides for specific TLDs
 */
const WHOIS_SERVERS = {
  'africa': 'whois.nic.africa',
  'capetown': 'whois.nic.capetown',
  'durban': 'whois.nic.durban',
  'joburg': 'whois.nic.joburg',
  'co.za': 'whois.registry.net.za',
  'org.za': 'whois.registry.net.za',
  'net.za': 'whois.registry.net.za',
  'web.za': 'whois.registry.net.za'
};

/**
 * Checks domain availability using whois-json as a more direct fallback
 * when domain-check might be timing out or failing.
 */
const directWhoisCheck = async (domain) => {
  try {
    // Layer 1: Quick DNS Check
    // If it has NS records, it's definitely taken
    const isDefinitelyTaken = await hasDnsRecords(domain);
    if (isDefinitelyTaken) {
      return false; // Registered
    }

    // Layer 2: Direct WHOIS
    const parts = domain.split('.');
    let tld = parts[parts.length - 1];
    
    // Handle second-level ZACR domains
    if (parts.length >= 2) {
      const candidate2 = `${parts[parts.length - 2]}.${parts[parts.length - 1]}`;
      if (['co.za', 'org.za', 'net.za', 'web.za'].includes(candidate2)) {
        tld = candidate2;
      }
    }
    
    const options = {
      timeout: 20000,
      follow: 3
    };
    
    if (WHOIS_SERVERS[tld]) {
      options.server = WHOIS_SERVERS[tld];
    }

    const results = await lookup(domain, options);
    const output = JSON.stringify(results).toLowerCase();
    
    // Check for clear "Registered" indicators
    const registeredIndicators = [
      'domain name:',
      'registrant:',
      'creation date:',
      'expiry date:',
      'status: active',
      'nameserver:',
      'admin id:',
      'tech id:',
      'registry domain id:',
      'dnssec:'
    ];
    
    const hasRegisteredInfo = registeredIndicators.some(indicator => output.includes(indicator));
    if (hasRegisteredInfo) return false;

    const availableMarkers = [
      'not found',
      'no entries found',
      'no match',
      'available',
      'no data found',
      'does not exist',
      'free',
      'no object found',
      'no matching record',
      'no data was found',
      'no entries for'
    ];
    
    const isAvailable = availableMarkers.some(marker => output.includes(marker));
    if (isAvailable) return true;
    
    // Special handling for ZACR domains which often return very little for "not found"
    // If the response is extremely minimal and no registered info, it's likely available
    if (['africa', 'capetown', 'durban', 'joburg', 'co.za', 'org.za', 'net.za', 'web.za'].includes(tld)) {
      if (output.length < 500 && !hasRegisteredInfo) {
        return true;
      }
    }

    return null; 
  } catch (err) {
    console.error(`Direct WHOIS check failed for ${domain}:`, err.message, err.code);
    return null; 
  }
};

export const fallbackWhoisAvailability = async ({ domain, timeoutMs = 15000 } = {}) => {
  const normalizedDomain = String(domain || '').trim().toLowerCase();
  if (!normalizedDomain) throw new Error('Missing domain');
  
  console.log(`Checking availability for: ${normalizedDomain}`);
  
  try {
    // Try domain-check first
    const isFree = await withTimeout(Domain.isFree(normalizedDomain), timeoutMs);
    console.log(`domain-check result for ${normalizedDomain}: ${isFree}`);
    return { domain: normalizedDomain, available: Boolean(isFree) };
  } catch (err) {
    console.log(`domain-check failed for ${normalizedDomain}: ${err.message}. Trying direct WHOIS fallback...`);
    
    // Secondary attempt with direct whois-json for ANY error (timeout, unknown TLD, etc.)
    try {
      const isAvailable = await directWhoisCheck(normalizedDomain);
      console.log(`directWhoisCheck result for ${normalizedDomain}: ${isAvailable}`);
      if (isAvailable !== null) {
        return { domain: normalizedDomain, available: isAvailable };
      }
    } catch (fallbackErr) {
      console.error(`Direct WHOIS fallback also failed for ${normalizedDomain}:`, fallbackErr.message);
    }
    
    console.log(`Both checks failed for ${normalizedDomain}. Treating as unavailable for registration.`);
    // Instead of throwing a technical error that breaks the UI, 
    // return available: false which shows "Ready to Transfer"
    return { domain: normalizedDomain, available: false, indeterminate: true };
  }
};
