export const STATIC_PRICING = {
  // ZACR Extensions
  'co.za': { register: 99, transfer: 0, renew: 99 },
  'org.za': { register: 99, transfer: 0, renew: 99 },
  'net.za': { register: 99, transfer: 0, renew: 99 },
  'web.za': { register: 99, transfer: 0, renew: 99 },
  'capetown': { register: 295, transfer: 295, renew: 295 },
  'durban': { register: 295, transfer: 295, renew: 295 },
  'joburg': { register: 295, transfer: 295, renew: 295 },
  'africa': { register: 295, transfer: 295, renew: 295 },
  
  // Generic TLDs
  'com': { register: 249, transfer: 249, renew: 249 },
  'net': { register: 289, transfer: 289, renew: 289 },
  'org': { register: 299, transfer: 299, renew: 299 },
  'info': { register: 329, transfer: 329, renew: 329 },
  'biz': { register: 349, transfer: 349, renew: 349 },
  'online': { register: 199, transfer: 199, renew: 199 },
  'site': { register: 149, transfer: 149, renew: 149 },
  'tech': { register: 249, transfer: 249, renew: 249 }
};

export const extractTld = (domain) => {
  const d = String(domain || '').trim().toLowerCase();
  if (!d.includes('.')) return '';
  const parts = d.split('.').filter(Boolean);
  if (parts.length < 2) return '';
  const last = parts[parts.length - 1];
  const secondLast = parts[parts.length - 2];
  
  // Check for second-level ZACR domains
  const candidate2 = `${secondLast}.${last}`;
  if (['co.za', 'org.za', 'net.za', 'web.za'].includes(candidate2)) return candidate2;
  
  return last;
};
