import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Section from '../components/Section';
import SEO from '../components/SEO';
import DomainTransferOrderModal from '../components/DomainTransferOrderModal';
import {
  CheckCircle, RefreshCw, ShieldCheck, Zap, Lock,
  Search, Loader2, AlertCircle
} from 'lucide-react';

const DomainTransfer = () => {
  const location = useLocation();

  const [query, setQuery] = useState('');
  const [domainCheck, setDomainCheck] = useState({ status: 'idle', result: null, error: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resultRef = useRef(null);

  // Pre-fill from ?domain= query param
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
      setDomainCheck({ status: 'error', result: null, error: 'Please enter a full domain name, e.g. mybusiness.co.za' });
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

  return (
    <>
      <SEO
        title="Domain Transfer | Website365"
        description="Transfer your domain to Website365. Zero downtime, free 1-year extension on most TLDs, and local support."
      />

      <DomainTransferOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        domain={query.trim().toLowerCase()}
      />

      {/* Hero */}
      <div className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-[100rem] h-[100rem] rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[60rem] h-[60rem] rounded-full bg-indigo-600/10 blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-700" />
        </div>

        <div className="relative max-w-5xl mx-auto py-16 px-4 lg:py-24 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <RefreshCw className="w-4 h-4" />
            <span>Seamless Migration Guaranteed</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            Transfer Your Domain<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"> to Website365</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Enter your domain below to check its status and start a transfer — zero downtime, free 1-year extension on most TLDs.
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
                className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white font-semibold rounded-xl shadow-lg transition-all whitespace-nowrap"
              >
                {domainCheck.status === 'checking'
                  ? <><Loader2 className="w-5 h-5 animate-spin" /> Checking…</>
                  : <><Search className="w-5 h-5" /> Check Domain</>}
              </button>
            </form>

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
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                      >
                        Transfer Domain
                      </button>
                    )}
                    {domainCheck.result.available && (
                      <a
                        href={`/domains?domain=${encodeURIComponent(query.trim())}`}
                        className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                      >
                        Register Instead
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
            </div>

            <p className="mt-4 text-sm text-slate-400 flex justify-center items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Free 1-year extension included with most transfers
            </p>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <Section background="gray">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <Zap className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Zero Downtime</h3>
            <p className="text-gray-600 text-sm">Your website stays 100% online throughout the entire transfer process.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <Lock className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Secure Transfer</h3>
            <p className="text-gray-600 text-sm">We ensure your domain is safely locked against unauthorised transfers.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <ShieldCheck className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Auto-Renewal</h3>
            <p className="text-gray-600 text-sm">Never lose your domain — we'll remind you well before expiration.</p>
          </div>
        </div>
      </Section>

      {/* How it Works + Checklist */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why transfer to us?</h2>
            <ul className="space-y-4">
              {[
                ['No downtime', 'Your website stays online during the transfer.'],
                ['One-year extension', 'We add a year to your domain registration (for most TLDs).'],
                ['Easy management', 'Manage everything from one dashboard.'],
                ['Local support', 'Real humans based in South Africa ready to help.'],
              ].map(([title, desc]) => (
                <li key={title} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>{title}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold mb-4">Transfer Checklist</h3>
            <p className="text-gray-600 mb-6">Before you start, make sure you have:</p>
            <ul className="space-y-3 mb-8">
              {[
                'Unlocked your domain at your current registrar',
                'Obtained the Auth / EPP Code',
                'Access to the administrative email address',
                'Disabled ID Protection / Privacy',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" /> Start Transfer
            </button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default DomainTransfer;
