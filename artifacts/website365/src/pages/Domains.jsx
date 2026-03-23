import React, { useEffect, useMemo, useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import Button from '../components/Button';
import DomainRegistrationOrderModal from '../components/DomainRegistrationOrderModal';
import { CheckCircle, Globe, Loader2, RefreshCw, Search, Shield, Zap, XCircle, AlertCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const formatZar = (amount) => {
  if (amount == null || Number.isNaN(Number(amount))) return null;
  return `R${Number(amount).toFixed(2)}`;
};

const FEATURED_TLDS = [
  { tld: 'co.za', label: '.co.za', popular: true },
  { tld: 'org.za', label: '.org.za', popular: false },
  { tld: 'net.za', label: '.net.za', popular: false },
  { tld: 'web.za', label: '.web.za', popular: false },
  { tld: 'capetown', label: '.capetown', popular: false },
  { tld: 'durban', label: '.durban', popular: false },
  { tld: 'joburg', label: '.joburg', popular: false },
  { tld: 'africa', label: '.africa', popular: true },
  { tld: 'com', label: '.com', popular: true },
  { tld: 'net', label: '.net', popular: false },
  { tld: 'org', label: '.org', popular: false },
  { tld: 'info', label: '.info', popular: false },
  { tld: 'biz', label: '.biz', popular: false },
  { tld: 'online', label: '.online', popular: false },
  { tld: 'site', label: '.site', popular: false },
  { tld: 'tech', label: '.tech', popular: false },
];

const Domains = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [domainCheck, setDomainCheck] = useState({ status: 'idle', result: null, error: '' });
  const [pricing, setPricing] = useState({ status: 'loading', result: null, error: '' });
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const tlds = useMemo(() => FEATURED_TLDS.map(t => t.tld), []);

  useEffect(() => {
    const run = async () => {
      setPricing({ status: 'loading', result: null, error: '' });
      try {
        const qs = new URLSearchParams({ tlds: tlds.join(',') });
        const res = await fetch(`/api/domain/pricing?${qs}`, { headers: { Accept: 'application/json' } });
        const json = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(json.error || 'Pricing fetch failed');
        setPricing({ status: 'done', result: json, error: '' });
      } catch (err) {
        setPricing({ status: 'error', result: null, error: err?.message || 'Pricing fetch failed' });
      }
    };
    run();
  }, [tlds]);

  const runDomainCheck = async (overriddenQuery) => {
    const domain = (overriddenQuery ?? query).trim().toLowerCase();
    if (!domain || !domain.includes('.') || /\s/.test(domain)) {
      setDomainCheck({ status: 'error', result: null, error: 'Please enter a full domain name like example.co.za' });
      return;
    }
    setDomainCheck({ status: 'checking', result: null, error: '' });
    try {
      const qs = new URLSearchParams({ domain, action: 'register' });
      const res = await fetch(`/api/domain/check?${qs}`, { headers: { Accept: 'application/json' } });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || 'Domain check failed');
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  const getPricingForTld = (tld) => {
    return pricing.result?.tlds?.[tld] ?? null;
  };

  const domainPricingForOrder = useMemo(() => {
    const domain = query.trim().toLowerCase();
    if (!domain) return null;
    const direct = domainCheck.result?.pricing;
    if (direct?.amount != null) return { amount: direct.amount, currencyCode: direct.currencyCode || 'ZAR' };
    const parts = domain.split('.').filter(Boolean);
    if (parts.length < 2) return null;
    const last = parts[parts.length - 1];
    const secondLast = parts[parts.length - 2];
    const tld2 = `${secondLast}.${last}`;
    const tld = ['co.za', 'org.za', 'net.za', 'web.za'].includes(tld2) ? tld2 : last;
    const register = pricing.result?.tlds?.[tld]?.register ?? null;
    if (register == null) return null;
    return { amount: register, currencyCode: pricing.result?.currencyCode || 'ZAR' };
  }, [domainCheck.result?.pricing, pricing.result, query]);

  const transferPageUrl = useMemo(() => {
    const domain = query.trim();
    if (!domain) return null;
    return `/domains/transfer?domain=${encodeURIComponent(domain)}`;
  }, [query]);

  return (
    <>
      <SEO
        title="Domain Names | Website365"
        description="Search and register domain names with Website365. Get .co.za, .com, .africa and more with instant activation and free DNS management."
      />

      <DomainRegistrationOrderModal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        domain={query.trim().toLowerCase()}
        domainPricing={domainPricingForOrder}
        lookup={domainCheck.result?.lookup}
      />

      {/* Hero + Search */}
      <div className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 opacity-90" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative max-w-5xl mx-auto py-16 px-4 lg:py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-4">
            Find Your Perfect Domain
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Search, register and manage domains with instant activation, free DNS management, and local support.
          </p>

          {/* Search Box */}
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-white/20">
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => { e.preventDefault(); runDomainCheck(); }}
            >
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setDomainCheck({ status: 'idle', result: null, error: '' });
                  }}
                  placeholder="e.g. mybusiness.co.za"
                  className="w-full pl-11 pr-4 py-4 bg-slate-800/60 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={domainCheck.status === 'checking'}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 whitespace-nowrap"
              >
                {domainCheck.status === 'checking' ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Checking…</>
                ) : (
                  <><Search className="w-5 h-5" /> Search</>
                )}
              </button>
            </form>

            {/* Result banner */}
            {domainCheck.status === 'done' && domainCheck.result && (
              <div className={`mt-4 flex flex-col sm:flex-row items-center gap-4 px-5 py-4 rounded-xl border ${domainCheck.result.available ? 'bg-green-900/40 border-green-500/40' : 'bg-red-900/40 border-red-500/40'}`}>
                <div className="flex items-center gap-3 flex-1 text-left">
                  {domainCheck.result.available
                    ? <CheckCircle className="w-6 h-6 text-green-400 shrink-0" />
                    : <XCircle className="w-6 h-6 text-red-400 shrink-0" />}
                  <div>
                    <p className="font-bold text-white text-lg">{domainCheck.result.domain}</p>
                    <p className={`text-sm ${domainCheck.result.available ? 'text-green-300' : 'text-red-300'}`}>
                      {domainCheck.result.available
                        ? `Available to register${domainPricingForOrder ? ` — ${formatZar(domainPricingForOrder.amount)}/yr` : ''}`
                        : 'Already registered — you can transfer it to us'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  {domainCheck.result.available && (
                    <button
                      onClick={() => setIsOrderOpen(true)}
                      className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                    >
                      Register Now
                    </button>
                  )}
                  {!domainCheck.result.available && transferPageUrl && (
                    <a
                      href={transferPageUrl}
                      className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                    >
                      Transfer Domain
                    </a>
                  )}
                </div>
              </div>
            )}

            {domainCheck.status === 'error' && (
              <div className="mt-4 flex items-center gap-2 px-4 py-3 bg-yellow-900/30 border border-yellow-500/30 rounded-xl text-yellow-200 text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {domainCheck.error}
              </div>
            )}

            {/* Quick TLD price tags */}
            <div className="mt-5 flex flex-wrap justify-center gap-2 text-sm">
              {FEATURED_TLDS.filter(t => ['co.za', 'com', 'africa', 'org.za', 'net.za', 'capetown'].includes(t.tld)).map(({ tld, label, popular }) => {
                const p = getPricingForTld(tld);
                return (
                  <span
                    key={tld}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border backdrop-blur-sm ${popular ? 'bg-blue-500/20 border-blue-400/40 text-blue-200' : 'bg-white/10 border-white/10 text-slate-300'}`}
                  >
                    {label}
                    <span className="font-bold text-white">
                      {pricing.status === 'loading' ? '…' : (formatZar(p?.register) ?? '—')}
                    </span>
                    {popular && <span className="text-xs bg-blue-600 text-white px-1 rounded">Popular</span>}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Trust row */}
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-slate-400 text-sm">
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Instant Activation</div>
            <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-blue-400" /> Whois Privacy Available</div>
            <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-yellow-400" /> Free DNS Management</div>
          </div>
        </div>
      </div>

      {/* Full Pricing Table */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Domain Pricing</h2>
          <p className="mt-2 text-slate-500">All prices in South African Rand (ZAR), per year including VAT</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Extension</th>
                <th className="px-6 py-4 text-right font-semibold">Register</th>
                <th className="px-6 py-4 text-right font-semibold">Renew</th>
                <th className="px-6 py-4 text-right font-semibold">Transfer</th>
                <th className="px-6 py-4 text-center font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100">
              {FEATURED_TLDS.map(({ tld, label, popular }, i) => {
                const p = getPricingForTld(tld);
                return (
                  <tr key={tld} className={`${i % 2 === 1 ? 'bg-slate-50' : ''} hover:bg-blue-50 transition-colors`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-800">{label}</span>
                        {popular && (
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">Popular</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-slate-900">
                      {pricing.status === 'loading'
                        ? <span className="inline-block w-16 h-4 bg-slate-200 rounded animate-pulse" />
                        : (formatZar(p?.register) ?? <span className="text-slate-400">—</span>)}
                    </td>
                    <td className="px-6 py-4 text-right text-slate-600">
                      {pricing.status === 'loading'
                        ? <span className="inline-block w-16 h-4 bg-slate-200 rounded animate-pulse" />
                        : (formatZar(p?.renew) ?? <span className="text-slate-400">—</span>)}
                    </td>
                    <td className="px-6 py-4 text-right text-slate-600">
                      {pricing.status === 'loading'
                        ? <span className="inline-block w-16 h-4 bg-slate-200 rounded animate-pulse" />
                        : (p?.transfer === 0 ? <span className="text-green-600 font-medium">Free</span> : (formatZar(p?.transfer) ?? <span className="text-slate-400">—</span>))}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => {
                          setQuery(`yourdomain.${tld}`);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-blue-600 hover:text-blue-800 font-medium text-xs underline-offset-2 hover:underline transition-colors"
                      >
                        Search
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {pricing.status === 'error' && (
          <p className="mt-4 text-center text-red-500 text-sm">{pricing.error}</p>
        )}
      </Section>

      {/* Services */}
      <Section background="gray">
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

      {/* FAQ */}
      <Section>
        <FAQ items={[
          { question: 'How long does domain registration take?', answer: 'Domain registration is usually instant. Once payment is confirmed, your domain will be active immediately.' },
          { question: 'Can I transfer my domain later?', answer: 'Yes, you can transfer your domain to any other registrar at any time after the initial 60-day lock period.' },
          { question: 'Do I get free DNS management?', answer: 'Yes, all our domains come with free DNS management tools so you can point your domain anywhere.' },
          { question: 'Is domain privacy included?', answer: 'We offer WHOIS privacy protection for eligible TLDs to keep your personal information private in the public registry.' },
          { question: 'What happens if I forget to renew?', answer: 'We send multiple email reminders before expiration. If it expires there is a grace period, but we strongly recommend enabling auto-renewal.' },
          { question: 'Why is .co.za transfer free?', answer: '.co.za domain transfers through ZACR do not incur a transfer fee — you only pay the renewal cost on transfer.' },
        ]} />
      </Section>
    </>
  );
};

export default Domains;
