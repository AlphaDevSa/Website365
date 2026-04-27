import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import DomainResellerModal from '../components/DomainResellerModal';
import {
  Globe, ShieldCheck, Zap, ArrowRight, Settings, Users, Database,
  Percent, Tag, Code, Check, Headphones, TrendingUp, Star,
  BarChart2, Lock, ChevronRight, Building, Package, Layers
} from 'lucide-react';

const DomainReseller = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <DomainResellerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-blue-950/40 to-indigo-900/20" />
          <div className="absolute -top-40 right-1/4 w-[55rem] h-[55rem] rounded-full bg-blue-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] rounded-full bg-indigo-600/8 blur-3xl animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-8 backdrop-blur-sm">
            <Globe className="w-4 h-4" />
            <span>Domain Reseller Program</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-none">
            Sell Domains.<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Keep The Margin.
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Launch your own domain registration business under your brand. Wholesale pricing on 100+ TLDs, full API access, and zero infrastructure headaches.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-lg font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/25 transition-all"
            >
              Become a Reseller <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-lg font-semibold border border-white/20 text-white hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              See How It Works
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { val: '100+', lab: 'TLDs Available' },
              { val: 'Wholesale', lab: 'Pricing Model' },
              { val: '100%', lab: 'White-Label' },
              { val: '24/7', lab: 'SA-Based Support' },
            ].map(({ val, lab }) => (
              <div key={lab} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/40 rounded-2xl px-4 py-5 text-center">
                <p className="text-2xl font-extrabold text-white">{val}</p>
                <p className="text-xs text-slate-400 mt-1">{lab}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Features Grid ─────────────────────────────────────────── */}
      <Section background="gray" id="features">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            Everything Included
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Built for Serious Domain Resellers
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Everything you need to run a profitable domain business from day one — infrastructure, tools, pricing, and branding, all handled.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Percent,
              color: 'bg-blue-100 text-blue-600',
              title: 'True Wholesale Pricing',
              desc: 'Access .co.za, .com, .net and 100+ other TLDs at wholesale rates. Set your own retail price and keep the difference — no restrictions on margin.',
            },
            {
              icon: Tag,
              color: 'bg-indigo-100 text-indigo-600',
              title: '100% White-Label',
              desc: 'Your brand at every touchpoint. Your clients complete their entire journey — from search to checkout — without ever seeing our name.',
            },
            {
              icon: Code,
              color: 'bg-violet-100 text-violet-600',
              title: 'Full API Access',
              desc: 'RESTful API for automated domain registration, transfers, renewals and DNS management. Integrate seamlessly into your own billing or CRM platform.',
            },
            {
              icon: Globe,
              color: 'bg-green-100 text-green-600',
              title: '100+ TLD Portfolio',
              desc: 'All major South African extensions (.co.za, .org.za, .net.za, .web.za) plus popular globals (.com, .net, .org, .io, .store, .shop) and country codes.',
            },
            {
              icon: ShieldCheck,
              color: 'bg-teal-100 text-teal-600',
              title: 'Domain Security Suite',
              desc: 'Registrar lock, WHOIS privacy, theft protection and domain transfer alerts — protecting your clients at no extra cost.',
            },
            {
              icon: Headphones,
              color: 'bg-orange-100 text-orange-600',
              title: '24/7 SA-Based Support',
              desc: 'Our South African team is on call round the clock to support both you and your clients. Local knowledge, local time zones, fast response.',
            },
          ].map(({ icon: Icon, color, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── How It Works ─────────────────────────────────────────── */}
      <Section id="how-it-works">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Up and Selling in 3 Steps
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            No complex setup. We handle the infrastructure — you focus on finding clients.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-blue-200 via-indigo-200 to-violet-200 z-0" />
            {[
              {
                step: '01',
                icon: Package,
                color: 'bg-blue-600 text-white',
                ring: 'ring-blue-100',
                title: 'Apply Online',
                desc: 'Fill out the short reseller application. Our team reviews it within one business day and sets up your wholesale account.',
              },
              {
                step: '02',
                icon: Settings,
                color: 'bg-indigo-600 text-white',
                ring: 'ring-indigo-100',
                title: 'Configure & Brand',
                desc: 'Set your retail prices, upload your logo, configure private nameservers and connect the API to your platform.',
              },
              {
                step: '03',
                icon: TrendingUp,
                color: 'bg-violet-600 text-white',
                ring: 'ring-violet-100',
                title: 'Start Selling',
                desc: 'Your branded domain storefront is live. Sell to clients, manage renewals and grow your revenue — all from one dashboard.',
              },
            ].map(({ step, icon: Icon, color, ring, title, desc }) => (
              <div key={step} className="relative z-10 flex flex-col items-center text-center bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition-shadow">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ring-4 ${color} ${ring}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <span className="text-xs font-black text-gray-300 uppercase tracking-widest mb-2">Step {step}</span>
                <h3 className="text-lg font-extrabold text-gray-900 mb-3">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Why Resell Domains ───────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900" />
          <div className="absolute top-1/2 right-0 w-[40rem] h-[40rem] rounded-full bg-blue-600/5 blur-3xl" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Left — Why resell */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-6">
                <BarChart2 className="w-4 h-4" />
                The Business Case
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                Why Add Domains<br />to Your Business?
              </h2>
              <p className="text-slate-400 mb-10 leading-relaxed text-lg">
                Domains are the foundation of every digital business. Every client you work with needs one — and renews one every year. That makes them the perfect recurring revenue stream.
              </p>

              <ul className="space-y-5">
                {[
                  { icon: TrendingUp, color: 'text-blue-400', label: 'Recurring Annual Revenue', desc: 'Domain renewals happen every 12 months without you lifting a finger. Set it and earn it.' },
                  { icon: Users, color: 'text-indigo-400', label: 'Upsell to Existing Clients', desc: 'Every hosting, design or development client needs a domain. Selling them together is an easy win.' },
                  { icon: Layers, color: 'text-violet-400', label: 'Strengthen Client Retention', desc: 'When you manage a client\'s domain, they\'re far less likely to move their hosting or services elsewhere.' },
                  { icon: Building, color: 'text-teal-400', label: 'Build a Real Brand', desc: 'White-label everything. You own the client relationship. We stay invisible in the background.' },
                ].map(({ icon: Icon, color, label, desc }) => (
                  <li key={label} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className={`w-4 h-4 ${color}`} />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{label}</p>
                      <p className="text-slate-400 text-sm mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — Reseller vs Standard comparison */}
            <div className="flex flex-col gap-5">
              <div className="bg-slate-800/60 border border-slate-700/40 rounded-2xl p-6">
                <h3 className="text-white font-extrabold text-lg mb-5 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  What You Get as a Reseller
                </h3>
                <ul className="space-y-3">
                  {[
                    'Wholesale prices on all TLDs — you set retail',
                    '100% white-label — your name, your brand',
                    'Full API for automated registrations & renewals',
                    'Private nameservers under your domain',
                    'Dedicated reseller dashboard & reporting',
                    'Priority support from our SA team',
                    'No minimum order volume required',
                    'No monthly fees — pay only per domain sold',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-600/20 to-indigo-700/10 border border-blue-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-5 h-5 text-blue-400" />
                  <p className="text-blue-200 font-bold text-sm">No Minimum Volume</p>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  Start small, scale fast. Whether you register 5 or 5,000 domains a month, the same wholesale pricing applies from day one.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all text-sm"
                >
                  Apply for Reseller Access <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── TLD Showcase ─────────────────────────────────────────── */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Popular TLDs You Can Sell
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            From South African extensions to global powerhouses — all at wholesale.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-10">
          {[
            { tld: '.co.za', note: 'SA Business', color: 'bg-green-50 border-green-200 text-green-700' },
            { tld: '.com', note: 'Global Leader', color: 'bg-blue-50 border-blue-200 text-blue-700' },
            { tld: '.net', note: 'Tech & Network', color: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
            { tld: '.org', note: 'Non-Profits', color: 'bg-violet-50 border-violet-200 text-violet-700' },
            { tld: '.org.za', note: 'SA Non-Profits', color: 'bg-teal-50 border-teal-200 text-teal-700' },
            { tld: '.net.za', note: 'SA Networks', color: 'bg-cyan-50 border-cyan-200 text-cyan-700' },
            { tld: '.web.za', note: 'SA Web', color: 'bg-orange-50 border-orange-200 text-orange-700' },
            { tld: '.africa', note: 'African Market', color: 'bg-amber-50 border-amber-200 text-amber-700' },
            { tld: '.capetown', note: 'City Extension', color: 'bg-rose-50 border-rose-200 text-rose-700' },
            { tld: '.joburg', note: 'City Extension', color: 'bg-pink-50 border-pink-200 text-pink-700' },
            { tld: '.durban', note: 'City Extension', color: 'bg-purple-50 border-purple-200 text-purple-700' },
            { tld: '+ 90 more', note: 'TLDs available', color: 'bg-slate-50 border-slate-200 text-slate-600' },
          ].map(({ tld, note, color }) => (
            <div
              key={tld}
              className={`border rounded-xl p-3 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm ${color}`}
            >
              <p className="font-extrabold text-base leading-tight">{tld}</p>
              <p className="text-[10px] opacity-70 mt-0.5">{note}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full shadow-lg shadow-blue-600/20 transition-all"
          >
            Get Wholesale Access to All TLDs <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </Section>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <div className="relative bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 overflow-hidden py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-6">
            <Zap className="w-4 h-4 text-yellow-300" />
            Ready to Start?
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Start Your Domain<br />Reseller Business Today
          </h2>
          <p className="text-blue-100 text-xl mb-10 leading-relaxed">
            No setup fees. No minimum volume. Just wholesale pricing and everything you need to sell domains under your own brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-lg font-bold bg-white text-blue-700 hover:bg-blue-50 shadow-xl transition-all"
            >
              Apply Now — It's Free <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DomainReseller;
