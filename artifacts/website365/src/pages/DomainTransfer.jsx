import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Section from '../components/Section';
import SEO from '../components/SEO';
import DomainSearchBar from '../components/DomainSearchBar';
import DomainTransferOrderModal from '../components/DomainTransferOrderModal';
import {
  CheckCircle, RefreshCw, ShieldCheck, Zap, Lock,
  AlertCircle, ArrowRight, Key, Globe, Clock, Headphones,
  Star, ChevronDown, ChevronUp
} from 'lucide-react';

const DomainTransfer = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [domainCheck, setDomainCheck] = useState({ status: 'idle', result: null, error: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const resultRef = useRef(null);

  useEffect(() => {
    const param = new URLSearchParams(location.search).get('domain');
    if (param && !query) {
      setQuery(param);
      runDomainCheck(param);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  const runDomainCheck = async (overrideQuery) => {
    const domain = (overrideQuery ?? query).trim().toLowerCase();
    if (!domain || !domain.includes('.') || /\s/.test(domain)) {
      setDomainCheck({ status: 'error', result: null, error: 'Please enter a domain name and select an extension' });
      return;
    }
    setDomainCheck({ status: 'checking', result: null, error: '' });
    try {
      const qs = new URLSearchParams({ domain, action: 'transfer' });
      const res = await fetch(`/api/domain/check?${qs}`, { headers: { Accept: 'application/json' } });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || 'Domain check failed');
      setDomainCheck({ status: 'done', result: json, error: '' });
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
    } catch (err) {
      setDomainCheck({ status: 'error', result: null, error: err?.message || 'Domain check failed' });
    }
  };

  const faqs = [
    { q: 'How long does a domain transfer take?', a: 'Most transfers complete within 5–7 days. .co.za transfers are often faster — sometimes within 24 hours. We keep you updated every step of the way.' },
    { q: 'Will my website go down during the transfer?', a: 'No. We preserve your existing DNS records throughout the transfer. Your website, email and all services stay online with zero interruption.' },
    { q: 'What is an EPP/Auth code?', a: 'An EPP code (also called an Auth code or transfer key) is a password issued by your current registrar to authorise the transfer. You request it from them before starting.' },
    { q: 'Do I get a free extra year when I transfer?', a: 'Yes, for most TLDs (including .com, .net, .org) the transfer adds one year to your existing registration — effectively free. .co.za transfers renew for one year from the transfer date.' },
    { q: 'Can I transfer a recently registered domain?', a: 'ICANN rules require a 60-day lock after registration or a previous transfer. After that window your domain is freely transferable.' },
  ];

  return (
    <>
      <SEO
        title="Domain Transfer | Website365"
        description="Transfer your domain to Website365. Zero downtime, free 1-year extension on most TLDs, and local SA support."
      />
      <DomainTransferOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        domain={query.trim().toLowerCase()}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-green-950/20 to-slate-900" />
          <div className="absolute -top-20 left-1/4 w-[50rem] h-[50rem] rounded-full bg-green-600/8 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] rounded-full bg-blue-600/8 blur-3xl animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" />
        </div>

        <div className="relative max-w-5xl mx-auto py-0 px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-500/30 text-green-300 text-sm font-semibold mb-8 backdrop-blur-sm">
            <RefreshCw className="w-4 h-4" />
            Seamless Migration Guaranteed
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-5 leading-none">
            Transfer Your Domain<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">to Website365</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Enter your domain to check its transfer status. Zero downtime, free 1-year extension on most TLDs, and local support throughout.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-20 pointer-events-none" />
              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-xl border border-slate-700 p-3 shadow-2xl">
                <DomainSearchBar
                  value={query}
                  onChange={(v) => { setQuery(v); setDomainCheck({ status: 'idle', result: null, error: '' }); }}
                  onSubmit={runDomainCheck}
                  status={domainCheck.status}
                  placeholder="yourbusiness"
                  buttonLabel="Check Domain"
                  buttonClass="bg-green-600 hover:bg-green-500"
                  inputClass="border-none bg-transparent"
                />
              </div>
            </div>

            {/* Result banner */}
            <div ref={resultRef}>
              {domainCheck.status === 'done' && domainCheck.result && (
                <div className={`mt-4 flex flex-col sm:flex-row items-center gap-4 px-5 py-4 rounded-xl border ${!domainCheck.result.available ? 'bg-green-900/40 border-green-500/40' : 'bg-yellow-900/30 border-yellow-500/30'}`}>
                  <div className="flex items-center gap-3 flex-1 text-left">
                    {!domainCheck.result.available
                      ? <CheckCircle className="w-6 h-6 text-green-400 shrink-0" />
                      : <AlertCircle className="w-6 h-6 text-yellow-400 shrink-0" />}
                    <div>
                      <p className="font-bold text-white text-lg">{domainCheck.result.domain}</p>
                      <p className={`text-sm ${!domainCheck.result.available ? 'text-green-300' : 'text-yellow-300'}`}>
                        {!domainCheck.result.available
                          ? 'Registered — eligible for transfer to Website365'
                          : 'Not yet registered — you can register it instead'}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    {!domainCheck.result.available && (
                      <button onClick={() => setIsModalOpen(true)} className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
                        Transfer Domain
                      </button>
                    )}
                    {domainCheck.result.available && (
                      <a href={`/domains?domain=${encodeURIComponent(query.trim())}`} className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                        Register Instead
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
            </div>

            <p className="mt-4 text-sm text-slate-400 flex justify-center items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Free 1-year extension included with most transfers
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-14">
            {[
              { val: '0', lab: 'Downtime During Transfer' },
              { val: '+1 yr', lab: 'Free Extension (most TLDs)' },
              { val: '24/7', lab: 'SA Support' },
              { val: 'Free', lab: '.co.za Transfer' },
            ].map(({ val, lab }) => (
              <div key={lab} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/40 rounded-2xl px-3 py-4 text-center">
                <p className="text-xl font-extrabold text-white">{val}</p>
                <p className="text-[11px] text-slate-400 mt-1 leading-tight">{lab}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Feature Cards ─────────────────────────────────────── */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Why Transfer to Website365?</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Everything you gain when you move your domain to us.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Zap, color: 'bg-yellow-100 text-yellow-600', title: 'Zero Downtime', desc: 'Your website, email and DNS stay online throughout the entire transfer process — no interruptions, guaranteed.' },
            { icon: Star, color: 'bg-blue-100 text-blue-600', title: 'Free 1-Year Extension', desc: 'Most TLDs get an extra year added to your registration automatically at no extra cost when you transfer.' },
            { icon: Lock, color: 'bg-green-100 text-green-600', title: 'Domain Lock Protection', desc: 'Once transferred, your domain is locked against unauthorised further transfers until you request a move.' },
            { icon: Globe, color: 'bg-purple-100 text-purple-600', title: 'Free DNS Management', desc: 'Full DNS control panel — point your domain to any host, update records, configure subdomains — all free.' },
            { icon: RefreshCw, color: 'bg-teal-100 text-teal-600', title: 'Smart Auto-Renewal', desc: 'Enable auto-renewal and we handle everything. Multiple email reminders keep you in the loop either way.' },
            { icon: Headphones, color: 'bg-orange-100 text-orange-600', title: 'SA Support Throughout', desc: 'Local experts guide you through each step of the transfer. Real people, real help, real fast.' },
          ].map(({ icon: Icon, color, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${color}`}><Icon className="w-5 h-5" /></div>
              <h3 className="text-base font-extrabold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── How It Works + Checklist ───────────────────────────── */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Steps */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">How to Transfer in 4 Steps</h2>
            <div className="space-y-6">
              {[
                { step: '01', icon: Key, color: 'bg-blue-600', title: 'Get Your Auth Code', desc: 'Log in to your current registrar, unlock the domain and request your EPP / Auth code by email.' },
                { step: '02', icon: Globe, color: 'bg-green-600', title: 'Search & Request Transfer', desc: 'Enter your domain in the search above, click "Transfer Domain" and complete the order form with your Auth code.' },
                { step: '03', icon: ShieldCheck, color: 'bg-purple-600', title: 'Approve the Transfer', desc: 'You will receive a confirmation email. Approve it to authorise the transfer to Website365.' },
                { step: '04', icon: CheckCircle, color: 'bg-teal-600', title: 'Transfer Complete', desc: 'Your domain moves to us within 5–7 days. We notify you as soon as it lands. DNS stays intact.' },
              ].map(({ step, icon: Icon, color, title, desc }) => (
                <div key={step} className="flex gap-4 items-start">
                  <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center text-white shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-300 uppercase tracking-widest mb-0.5">Step {step}</p>
                    <h3 className="text-base font-extrabold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-600/20 flex items-center justify-center text-green-400">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="text-white text-xl font-extrabold">Before You Start</h3>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">Make sure you have completed these steps at your current registrar before beginning the transfer:</p>
            <ul className="space-y-4 mb-8">
              {[
                { icon: Lock,       item: 'Unlock your domain at your current registrar' },
                { icon: Key,        item: 'Obtain the Auth / EPP Code from your registrar' },
                { icon: Clock,      item: 'Ensure domain was registered more than 60 days ago' },
                { icon: ShieldCheck,item: 'Disable ID protection / WHOIS privacy temporarily' },
                { icon: Globe,      item: 'Confirm your administrative email address is accessible' },
              ].map(({ icon: Icon, item }) => (
                <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                  <div className="w-6 h-6 rounded-full bg-green-700/30 border border-green-600/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-3 h-3 text-green-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full flex items-center justify-center gap-2 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all"
            >
              <RefreshCw className="w-4 h-4" /> Start My Transfer
            </button>
          </div>
        </div>
      </Section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Transfer FAQs</h2>
            <p className="text-gray-500">Common questions about domain transfers answered.</p>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-gray-900 text-sm pr-4">{q}</span>
                  {openFaq === i
                    ? <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                    : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Bottom CTA ─────────────────────────────────────────── */}
      <div className="relative bg-gradient-to-br from-green-700 via-teal-700 to-blue-800 overflow-hidden py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Transfer?</h2>
          <p className="text-green-100 text-xl mb-10 leading-relaxed">
            Move your domain to Website365 and get better pricing, better tools, and better support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-lg font-bold bg-white text-green-700 hover:bg-green-50 shadow-xl transition-all"
            >
              Transfer My Domain <ArrowRight className="w-5 h-5" />
            </button>
            <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all">
              Talk to Support
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DomainTransfer;
