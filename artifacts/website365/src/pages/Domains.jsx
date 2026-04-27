import React, { useEffect, useMemo, useState } from 'react';
import Section from '../components/Section';
import FAQ from '../components/FAQ';
import DomainRegistrationOrderModal from '../components/DomainRegistrationOrderModal';
import DomainSearchBar from '../components/DomainSearchBar';
import {
  CheckCircle, Globe, RefreshCw, Search, Shield, Zap, XCircle,
  AlertCircle, Star, ArrowRight, Lock, Headphones
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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

  const runDomainCheck = async () => {
    const domain = query.trim().toLowerCase();
    if (!domain || !domain.includes('.') || /\s/.test(domain)) {
      setDomainCheck({ status: 'error', result: null, error: 'Please enter a domain name and select an extension' });
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
      const domain = domainFromQuery.trim().toLowerCase();
      if (domain && domain.includes('.')) {
        setDomainCheck({ status: 'checking', result: null, error: '' });
        const qs = new URLSearchParams({ domain, action: 'register' });
        fetch(`/api/domain/check?${qs}`, { headers: { Accept: 'application/json' } })
          .then(r => r.json())
          .then(json => setDomainCheck({ status: 'done', result: json, error: '' }))
          .catch(() => setDomainCheck({ status: 'error', result: null, error: 'Domain check failed' }));
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  const getPricingForTld = (tld) => pricing.result?.tlds?.[tld] ?? null;

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
      <DomainRegistrationOrderModal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        domain={query.trim().toLowerCase()}
        domainPricing={domainPricingForOrder}
        lookup={domainCheck.result?.lookup}
      />

      {/* ── Hero + Search ──────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-900" />
          <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] rounded-full bg-purple-500/8 blur-3xl animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-8 backdrop-blur-sm">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            Official Accredited Registrar
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-5 leading-none">
            Find Your Perfect<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Domain Name</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Search, register and manage domains with instant activation, free DNS management, and South African support.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 pointer-events-none" />
              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-xl border border-slate-700 p-3 shadow-2xl">
                <DomainSearchBar
                  value={query}
                  onChange={(v) => { setQuery(v); setDomainCheck({ status: 'idle', result: null, error: '' }); }}
                  onSubmit={runDomainCheck}
                  status={domainCheck.status}
                  placeholder="yourbusiness"
                  buttonLabel="Search"
                  buttonClass="bg-blue-600 hover:bg-blue-500"
                  inputClass="border-none bg-transparent"
                />
              </div>
            </div>

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
                    <button onClick={() => setIsOrderOpen(true)} className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
                      Register Now
                    </button>
                  )}
                  {!domainCheck.result.available && transferPageUrl && (
                    <a href={transferPageUrl} className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                      Transfer Domain
                    </a>
                  )}
                </div>
              </div>
            )}

            {domainCheck.status === 'error' && (
              <div className="mt-4 flex items-center gap-2 px-4 py-3 bg-yellow-900/30 border border-yellow-500/30 rounded-xl text-yellow-200 text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />{domainCheck.error}
              </div>
            )}

            {/* Quick TLD price tags */}
            <div className="mt-5 flex flex-wrap justify-center gap-2 text-sm">
              {FEATURED_TLDS.filter(t => ['co.za', 'com', 'africa', 'org.za', 'net.za', 'capetown'].includes(t.tld)).map(({ tld, label, popular }) => {
                const p = getPricingForTld(tld);
                return (
                  <span key={tld} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border backdrop-blur-sm cursor-pointer hover:opacity-80 transition-opacity ${popular ? 'bg-blue-500/20 border-blue-400/40 text-blue-200' : 'bg-white/10 border-white/10 text-slate-300'}`}
                    onClick={() => { setQuery(`yourdomain.${tld}`); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                    {label}
                    <span className="font-bold text-white">{pricing.status === 'loading' ? '…' : (formatZar(p?.register) ?? '—')}</span>
                    {popular && <span className="text-[10px] bg-blue-600 text-white px-1 rounded">Popular</span>}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Trust row */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-slate-400 text-sm">
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Instant Activation</span>
            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-blue-400" /> Whois Privacy Available</span>
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-yellow-400" /> Free DNS Management</span>
          </div>
        </div>
      </div>

      {/* ── Quick Services ─────────────────────────────────────── */}
      <Section background="gray">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Globe, color: 'bg-blue-100 text-blue-600', title: 'Register a Domain', desc: 'Secure your brand name with instant domain registration. SA and international TLDs from R99/yr.', to: '/domains/registration', cta: 'Register Now' },
            { icon: RefreshCw, color: 'bg-green-100 text-green-600', title: 'Transfer Your Domain', desc: 'Move your existing domain to Website365. Free 1-year extension on most TLDs, zero downtime.', to: '/domains/transfer', cta: 'Start Transfer' },
            { icon: Search, color: 'bg-purple-100 text-purple-600', title: 'Domain Reseller', desc: 'Sell domains under your brand. Wholesale pricing on 100+ TLDs with full API access.', to: '/domains/reseller', cta: 'Become a Reseller' },
          ].map(({ icon: Icon, color, title, desc, to, cta }) => (
            <div key={title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${color}`}><Icon className="w-5 h-5" /></div>
              <h3 className="text-base font-extrabold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{desc}</p>
              <Link to={to} className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 text-sm font-semibold">
                {cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Full Pricing Table ─────────────────────────────────── */}
      <Section id="pricing">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Domain Pricing</h2>
          <p className="text-slate-500">All prices in South African Rand (ZAR), per year including VAT</p>
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
                        {popular && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">Popular</span>}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-slate-900">
                      {pricing.status === 'loading' ? <span className="inline-block w-16 h-4 bg-slate-200 rounded animate-pulse" /> : (formatZar(p?.register) ?? <span className="text-slate-400">—</span>)}
                    </td>
                    <td className="px-6 py-4 text-right text-slate-600">
                      {pricing.status === 'loading' ? <span className="inline-block w-16 h-4 bg-slate-200 rounded animate-pulse" /> : (formatZar(p?.renew) ?? <span className="text-slate-400">—</span>)}
                    </td>
                    <td className="px-6 py-4 text-right text-slate-600">
                      {pricing.status === 'loading' ? <span className="inline-block w-16 h-4 bg-slate-200 rounded animate-pulse" /> : (p?.transfer === 0 ? <span className="text-green-600 font-medium">Free</span> : (formatZar(p?.transfer) ?? <span className="text-slate-400">—</span>))}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button onClick={() => { setQuery(`yourdomain.${tld}`); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="text-blue-600 hover:text-blue-800 font-medium text-xs underline-offset-2 hover:underline transition-colors">
                        Search
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {pricing.status === 'error' && <p className="mt-4 text-center text-red-500 text-sm">{pricing.error}</p>}
      </Section>

      {/* ── Why Website365 ─────────────────────────────────────── */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Why Register with Website365?</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">More than just a domain — everything you need to get online and stay there.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Zap, color: 'bg-yellow-100 text-yellow-600', title: 'Instant Activation', desc: 'Domains go live within minutes of payment confirmation. No waiting.' },
            { icon: Shield, color: 'bg-blue-100 text-blue-600', title: 'WHOIS Privacy', desc: 'Keep your personal details private in the public domain registry.' },
            { icon: Lock, color: 'bg-green-100 text-green-600', title: 'Domain Lock', desc: 'Registrar lock protects against accidental or malicious transfers.' },
            { icon: Globe, color: 'bg-purple-100 text-purple-600', title: 'Free DNS Management', desc: 'Full DNS control — point your domain to any host, anywhere in the world.' },
            { icon: RefreshCw, color: 'bg-teal-100 text-teal-600', title: 'Auto-Renewal', desc: 'Never lose your domain. Enable auto-renewal and relax.' },
            { icon: Headphones, color: 'bg-orange-100 text-orange-600', title: 'SA-Based Support', desc: 'Local experts available 24/7 to help with any domain question.' },
          ].map(({ icon: Icon, color, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${color}`}><Icon className="w-5 h-5" /></div>
              <h3 className="text-sm font-extrabold text-gray-900 mb-1">{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
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
