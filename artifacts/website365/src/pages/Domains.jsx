
import React, { useEffect, useMemo, useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import FAQ from '../components/FAQ';
import Card from '../components/Card';
import { CheckCircle, Globe, Loader2, RefreshCw, Search, Shield, Zap } from 'lucide-react';
import DomainRegistrationOrderModal from '../components/DomainRegistrationOrderModal';
import { useLocation } from 'react-router-dom';

const formatZar = (amount) => {
  if (amount == null || Number.isNaN(Number(amount))) return null;
  return `R${Number(amount).toFixed(2)}`;
};

import SEO from '../components/SEO';

const Domains = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [domainCheck, setDomainCheck] = useState({ status: 'idle', result: null, error: '' });
  const [pricing, setPricing] = useState({ status: 'loading', result: null, error: '' });
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const tlds = useMemo(() => ['co.za', 'org.za', 'net.za', 'web.za', 'capetown', 'durban', 'joburg', 'africa', 'com', 'net', 'org'], []);

  useEffect(() => {
    const run = async () => {
      setPricing({ status: 'loading', result: null, error: '' });
      try {
        const qs = new URLSearchParams({ tlds: tlds.join(',') });
        const response = await fetch(`/api/domain/pricing?${qs.toString()}`, { headers: { Accept: 'application/json' } });
        const json = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(json.error || 'Domain pricing failed');
        setPricing({ status: 'done', result: json, error: '' });
      } catch (err) {
        setPricing({ status: 'error', result: null, error: err?.message || 'Domain pricing failed' });
      }
    };
    run();
  }, [tlds]);

  const runDomainCheck = async (overriddenQuery) => {
    const domain = (overriddenQuery || query).trim().toLowerCase();
    if (!domain || !domain.includes('.') || /\s/.test(domain)) {
      setDomainCheck({ status: 'error', result: null, error: 'Enter a full domain like example.co.za' });
      return;
    }

    setDomainCheck({ status: 'checking', result: null, error: '' });
    try {
      const qs = new URLSearchParams({ domain, action: 'register' });
      const response = await fetch(`/api/domain/check?${qs.toString()}`, { headers: { Accept: 'application/json' } });
      const json = await response.json().catch(() => ({}));
      if (!response.ok) {
        const detail = json.detail || json.whoisSnippet || '';
        throw new Error(detail ? `${json.error || 'Domain check failed'}: ${detail}` : (json.error || 'Domain check failed'));
      }
      setDomainCheck({ status: 'done', result: json, error: '' });
    } catch (err) {
      setDomainCheck({ status: 'error', result: null, error: err?.message || 'Domain check failed' });
    }
  };

  useEffect(() => {
    const domainFromQuery = new URLSearchParams(location.search).get('domain');
    if (domainFromQuery && !query) {
      setQuery(domainFromQuery);
      runDomainCheck(domainFromQuery);
    }
  }, [location.search]);

  const checkMessage = useMemo(() => {
    if (domainCheck.status === 'checking') return { tone: 'muted', text: 'Checking...' };
    if (domainCheck.status === 'error') {
      if (domainCheck.error?.includes('timed out')) {
        return { tone: 'muted', text: 'Check timed out (WHOIS is slow). Please try again or you can proceed anyway if you know it is correct.' };
      }
      return { tone: 'error', text: domainCheck.error || 'Domain check failed' };
    }
    if (domainCheck.status !== 'done' || !domainCheck.result) return null;
    if (domainCheck.result.available === true) return { tone: 'success', text: 'Available to register' };
    if (domainCheck.result.available === false) return { tone: 'error', text: 'Ready to Transfer' };
    return { tone: 'muted', text: `Check returned: ${domainCheck.result.status || 'unknown'}` };
  }, [domainCheck]);

  const domainPricingForOrder = useMemo(() => {
    const domain = query.trim().toLowerCase();
    if (!domain) return null;

    const direct = domainCheck.result?.pricing;
    if (direct?.amount != null) {
      return {
        amount: direct.amount,
        currencyCode: direct.currencyCode || pricing.result?.currencyCode || ''
      };
    }

    const parts = domain.split('.').filter(Boolean);
    if (parts.length < 2) return null;
    const last = parts[parts.length - 1];
    const secondLast = parts[parts.length - 2];
    const tld2 = `${secondLast}.${last}`;
    const tld = ['co.za', 'org.za', 'net.za', 'web.za'].includes(tld2) ? tld2 : last;
    const register = pricing.result?.tlds?.[tld]?.register ?? null;
    if (register == null) return null;
    return {
      amount: register,
      currencyCode: pricing.result?.currencyCode || ''
    };
  }, [domainCheck.result?.pricing, pricing.result, query]);

  const transferPageUrl = useMemo(() => {
    const domain = query.trim();
    if (!domain) return null;
    return `/domains/transfer?domain=${encodeURIComponent(domain)}`;
  }, [query]);

  return (
    <>
      <SEO />
      <DomainRegistrationOrderModal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        domain={query.trim().toLowerCase()}
        domainPricing={domainPricingForOrder}
        lookup={domainCheck.result?.lookup}
      />

      {/* Magnificent Hero Section */}
      <div className="relative bg-slate-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-purple-900 opacity-90" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto py-16 px-4 lg:py-20 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-6">
            Find the Perfect Domain
          </h1>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Start your online journey with a domain that defines your brand. Instant registration, full control, and local support.
          </p>

          {/* Integrated Search Box */}
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/20">
            <form
              className="flex flex-col md:flex-row gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                runDomainCheck();
              }}
            >
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-6 w-6 text-slate-400" />
                </div>
                <input 
                  type="text" 
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setDomainCheck({ status: 'idle', result: null, error: '' });
                  }}
                  placeholder="Find your Domain..." 
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg transition-all"
                  size="20"
                />
              </div>
              <Button type="submit" className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                {domainCheck.status === 'checking' ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Checking
                  </>
                ) : (
                  'Check'
                )}
              </Button>
            </form>

            {checkMessage ? (
              <div className={`mt-4 text-sm ${checkMessage.tone === 'success' ? 'text-green-300' : checkMessage.tone === 'error' ? 'text-red-300' : 'text-slate-300'}`}>
                {checkMessage.text}
              </div>
            ) : null}

            {domainCheck.status === 'done' && domainCheck.result ? (
              <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
                {domainCheck.result.available === true ? (
                  <Button type="button" onClick={() => setIsOrderOpen(true)} className="px-8 py-3 text-lg bg-green-600 hover:bg-green-700 text-white">
                    Register Now
                  </Button>
                ) : null}
                {domainCheck.result.available === false && transferPageUrl ? (
                  <Button to={transferPageUrl} className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700 text-white">
                    Transfer Domain
                  </Button>
                ) : null}
              </div>
            ) : null}
            
            {/* Domain Pricing Tags (No Hover) */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
              {tlds.map((tld) => {
                const register = pricing.result?.tlds?.[tld]?.register ?? null;
                return (
                  <span key={tld} className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm transition-none">
                    .{tld}{' '}
                    <span className="ml-2 font-bold text-blue-300">
                      {pricing.status === 'loading' ? '...' : (formatZar(register) || '—')}
                    </span>
                  </span>
                );
              })}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Instant Activation</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span>Whois Privacy Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>DNS Management Included</span>
            </div>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Register a New Domain"
            description="Get your new website address today. Instant registration and full DNS control."
            icon={Globe}
            ctaText="Register Domain"
            ctaLink="/domains/registration"
          />
          <Card
            title="Transfer Your Domain"
            description="Already have a domain? Move it to Website365 for better support and pricing."
            icon={RefreshCw}
            ctaText="Transfer Domain"
            ctaLink="/domains/transfer"
          />
        </div>
      </Section>

      <Section background="gray">
        <FAQ items={[
          { question: "How long does domain registration take?", answer: "Domain registration is usually instant. Once payment is confirmed, your domain will be registered immediately." },
          { question: "Can I transfer my domain later?", answer: "Yes, you can transfer your domain to any other registrar at any time." },
          { question: "Do I get free DNS management?", answer: "Yes, all our domains come with free DNS management tools." },
          { question: "Is domain privacy included?", answer: "We offer ID protection for eligible TLDs to keep your personal information private." },
          { question: "What happens if I forget to renew?", answer: "We send multiple reminders before expiration. If it expires, there is a grace period, but we recommend auto-renewal." }
        ]} />
      </Section>
    </>
  );
};

export default Domains;
