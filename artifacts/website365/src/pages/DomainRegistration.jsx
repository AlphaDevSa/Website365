
import React, { useEffect, useMemo, useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Check, Globe, Loader2, Search, Shield, Star, Zap, MousePointer2, CreditCard, Sparkles } from 'lucide-react';
import DomainRegistrationOrderModal from '../components/DomainRegistrationOrderModal';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const formatZar = (amount) => {
  if (amount == null || Number.isNaN(Number(amount))) return null;
  return `R${Number(amount).toFixed(2)}`;
};

import SEO from '../components/SEO';

const DomainRegistration = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [domainCheck, setDomainCheck] = useState({ status: 'idle', result: null, error: '' });
  const [pricing, setPricing] = useState({ status: 'loading', result: null, error: '' });
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [autoFilled, setAutoFilled] = useState(false);

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
    if (autoFilled) return;
    const domainFromQuery = new URLSearchParams(location.search).get('domain');
    if (!domainFromQuery) return;
    if (query) return;
    setQuery(domainFromQuery);
    setAutoFilled(true);
    runDomainCheck(domainFromQuery);
  }, [autoFilled, location.search, query]);

  const checkMessage = useMemo(() => {
    if (domainCheck.status === 'checking') return { tone: 'muted', text: 'Checking...' };
    if (domainCheck.status === 'error') {
      if (domainCheck.error?.includes('timed out')) {
        return { tone: 'muted', text: 'Check timed out (WHOIS is slow). Please try again or you can proceed anyway if you know it is correct.' };
      }
      return { tone: 'error', text: domainCheck.error || 'Domain check failed' };
    }
    if (domainCheck.status !== 'done' || !domainCheck.result) return null;
    if (domainCheck.result.available === true) {
      const price = domainCheck.result.pricing?.amount;
      const text = price ? `Available to register for ${formatZar(price)}/yr` : 'Available to register';
      return { tone: 'success', text };
    }
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

  const pricingRows = useMemo(() => {
    return tlds.map((tld) => {
      const row = pricing.result?.tlds?.[tld] || {};
      return {
        tld,
        register: row.register ?? null,
        renew: row.renew ?? null,
        transfer: row.transfer ?? null
      };
    });
  }, [pricing.result, tlds]);

  return (
    <div className="bg-white">
      <SEO />
      <DomainRegistrationOrderModal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        domain={query.trim().toLowerCase()}
        domainPricing={domainPricingForOrder}
        lookup={domainCheck.result?.lookup}
      />

      {/* Magnificent Hero */}
      <div className="relative bg-slate-900 overflow-hidden py-16 md:py-20">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/2 w-[100rem] h-[100rem] rounded-full bg-blue-600/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] rounded-full bg-purple-600/10 blur-3xl" />
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>Official Accredited Registrar</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6"
          >
            Claim Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Digital Identity</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Your name is your brand. Secure it today with South Africa's most trusted domain registrar. Instant activation, zero hidden fees.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto relative group z-20"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 pointer-events-none" />
            <form
              className="relative flex flex-col md:flex-row items-center bg-slate-800/90 backdrop-blur-xl rounded-xl p-2 border border-slate-700 shadow-2xl"
              onSubmit={(e) => {
                e.preventDefault();
                runDomainCheck();
              }}
            >
              <div className="pl-4 pr-2 hidden md:block">
                <Globe className="w-6 h-6 text-slate-400" />
              </div>
              <input 
                type="text" 
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setDomainCheck({ status: 'idle', result: null, error: '' });
                }}
                placeholder="Find your Domain..." 
                className="w-full md:flex-1 bg-transparent border-none text-white placeholder-slate-500 focus:ring-0 text-lg py-3 px-4 md:px-0"
                size="20"
              />
              <Button type="submit" className="w-full md:w-auto rounded-lg px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-lg hover:shadow-blue-500/25 mt-2 md:mt-0">
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
              <div className={`mt-3 text-sm font-medium ${checkMessage.tone === 'success' ? 'text-green-300' : checkMessage.tone === 'error' ? 'text-red-300' : 'text-slate-300'}`}>
                {checkMessage.text}
              </div>
            ) : null}

            {domainCheck.status === 'done' && domainCheck.result?.available === true ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-4 flex justify-center"
              >
                <Button type="button" onClick={() => setIsOrderOpen(true)} className="rounded-lg px-8 py-3 text-lg font-semibold bg-green-600 hover:bg-green-500 text-white transition-all shadow-lg hover:shadow-green-500/25">
                  Register Now
                </Button>
              </motion.div>
            ) : null}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-400 text-sm font-medium"
          >
            <span className="flex items-center"><Zap className="w-4 h-4 text-yellow-400 mr-2" /> Instant Registration</span>
            <span className="flex items-center"><Shield className="w-4 h-4 text-blue-400 mr-2" /> Whois Privacy</span>
            <span className="flex items-center"><Check className="w-4 h-4 text-green-400 mr-2" /> 24/7 Support</span>
          </motion.div>
        </div>
      </div>

      <Section id="steps" background="white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Launch in 3 Simple Steps</h2>
            <p className="text-gray-500 text-lg">Getting your business online has never been easier.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
            
            {[
              { 
                step: 1, 
                title: 'Search', 
                desc: 'Find the perfect domain name that represents your brand.', 
                icon: Search,
                color: 'blue'
              },
              { 
                step: 2, 
                title: 'Customize', 
                desc: 'Select extensions and choose if you want to add web hosting.', 
                icon: MousePointer2,
                color: 'purple'
              },
              { 
                step: 3, 
                title: 'Activate', 
                desc: 'Complete your registration and get online instantly.', 
                icon: Sparkles,
                color: 'green'
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="relative z-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col items-center text-center group"
              >
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-300 ${
                  item.color === 'blue' ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' :
                  item.color === 'purple' ? 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white' :
                  'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white'
                }`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="absolute top-4 right-4 text-4xl font-black text-gray-50 group-hover:text-gray-100 transition-colors">0{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="pricing" background="gray">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-gray-500">No hidden fees. What you see is what you pay.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-8 py-6 text-sm font-bold uppercase tracking-wider">Extension</th>
                    <th className="px-8 py-6 text-sm font-bold uppercase tracking-wider text-center">Registration</th>
                    <th className="px-8 py-6 text-sm font-bold uppercase tracking-wider text-center">Renewal</th>
                    <th className="px-8 py-6 text-sm font-bold uppercase tracking-wider text-center">Transfer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pricingRows.map((row) => (
                    <tr key={row.tld}>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center font-black text-slate-600 text-sm">
                            .{row.tld}
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <span className="text-lg font-bold text-slate-900">
                          {pricing.status === 'loading' ? '...' : (formatZar(row.register) || '—')}
                        </span>
                        <div className="text-xs text-slate-400 mt-1">/ 1st year</div>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <span className="text-lg font-medium text-slate-600">
                          {pricing.status === 'loading' ? '...' : (formatZar(row.renew) || '—')}
                        </span>
                        <div className="text-xs text-slate-400 mt-1">/ year</div>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <div className={`inline-flex px-4 py-1.5 rounded-full text-sm font-bold ${
                          row.transfer === 0 ? 'bg-green-600 text-white shadow-sm' : 'bg-blue-600 text-white shadow-sm'
                        }`}>
                          {pricing.status === 'loading'
                            ? '...'
                            : row.transfer === 0
                              ? 'FREE'
                              : (formatZar(row.transfer) || '—')}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <CreditCard className="w-8 h-8 text-blue-600" />
              <div>
                <h4 className="font-bold text-slate-900">Secure Payments</h4>
                <p className="text-xs text-slate-500">All major cards & EFT</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <Zap className="w-8 h-8 text-yellow-500" />
              <div>
                <h4 className="font-bold text-slate-900">Instant Setup</h4>
                <p className="text-xs text-slate-500">Live within minutes</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <Check className="w-8 h-8 text-green-600" />
              <div>
                <h4 className="font-bold text-slate-900">No Hidden Fees</h4>
                <p className="text-xs text-slate-500">Transparent billing</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="blue" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Need expert assistance?</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Not sure which domain or extension is right for you? Our local experts are standing by to help you make the best choice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" className="rounded-full px-10 py-4 font-bold text-lg bg-blue-600 text-white hover:bg-blue-500 shadow-xl shadow-blue-900/20">
              Talk to an Expert
            </Button>
            <Button to="/hosting" variant="outline" className="rounded-full px-10 py-4 font-bold text-lg border-white text-white hover:bg-white/10">
              View Hosting Plans
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default DomainRegistration;
