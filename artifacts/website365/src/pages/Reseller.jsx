import React from 'react';
import Section from '../components/Section';
import {
  LayoutGrid, Crown, ArrowRight, Briefcase, TrendingUp, Globe, Server,
  Users, DollarSign, ShieldCheck, Tag, Settings2, CheckCircle, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Reseller = () => {
  const features = [
    { icon: Globe,       bg: 'bg-purple-50',  color: 'text-purple-600', label: '100% White Label',      desc: 'Your clients never know we exist. Use your own brand on cPanel, WHM and nameservers.' },
    { icon: Tag,         bg: 'bg-indigo-50',  color: 'text-indigo-600', label: 'Your Pricing, Your Profit', desc: 'Set your own package prices. Keep 100% of the revenue from every client you sign up.' },
    { icon: Settings2,   bg: 'bg-blue-50',    color: 'text-blue-600',   label: 'Full WHM Control',      desc: 'Create packages, manage DNS zones, configure resource limits — all from one login.' },
    { icon: TrendingUp,  bg: 'bg-pink-50',    color: 'text-pink-600',   label: 'Scalable Income',       desc: 'Start with a small plan and upgrade instantly as your client base grows.' },
    { icon: Server,      bg: 'bg-teal-50',    color: 'text-teal-600',   label: 'Custom Nameservers',    desc: 'Set up branded nameservers (e.g. ns1.yourbrand.co.za) for a fully professional look.' },
    { icon: Users,       bg: 'bg-orange-50',  color: 'text-orange-600', label: 'Unlimited Accounts',    desc: 'Create as many cPanel accounts as your plan allows — one per client, perfectly isolated.' },
  ];

  const platforms = [
    {
      to: '/hosting/reseller/cpanel',
      icon: LayoutGrid,
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600',
      accentFrom: 'from-orange-500',
      accentTo: 'to-amber-400',
      ctaColor: 'text-orange-600',
      border: 'border-orange-100',
      label: 'cPanel Reseller',
      tagline: 'Industry standard, trusted worldwide',
      desc: 'Create and manage multiple cPanel accounts under one WHM login. Perfect for web designers, developers and small agencies.',
      bullets: [
        'White-label WHM dashboard',
        'Create unlimited cPanel accounts',
        'Overselling allowed',
        'Full DNS zone management',
      ],
      pricePill: 'From R149/mo',
    },
    {
      to: '/hosting/reseller/master',
      icon: Crown,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      accentFrom: 'from-purple-500',
      accentTo: 'to-violet-400',
      ctaColor: 'text-purple-600',
      border: 'border-purple-100',
      label: 'Master Reseller',
      tagline: 'Sell your own reseller packages',
      desc: 'Take it a step further — sell reseller accounts to other hosting companies. The ultimate tier for hosting entrepreneurs.',
      bullets: [
        'Create sub-reseller accounts',
        'All cPanel Reseller features',
        'Root-level WHM tools',
        'Oversell on multiple levels',
      ],
      pricePill: 'Custom pricing',
      popular: true,
    },
  ];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-slate-900 to-purple-900/25" />
          <div className="absolute -top-40 -right-40 w-[60rem] h-[60rem] rounded-full bg-purple-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] rounded-full bg-indigo-600/10 blur-3xl animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-semibold mb-8 backdrop-blur-sm">
            <Briefcase className="w-4 h-4" />
            Launch Your Own Hosting Business
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-none">
            Your Brand.<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Our Infrastructure.
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Start your own web hosting company today. Create custom packages, set your own prices,
            and keep 100% of the profits. We handle the servers — you handle the clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="#options"
              onClick={(e) => { e.preventDefault(); document.getElementById('options')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold bg-purple-600 hover:bg-purple-500 text-white shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Choose Your Platform <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white transition-all"
            >
              Talk to Sales
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: '100%',    label: 'White Label' },
              { value: '2',       label: 'Reseller Tiers' },
              { value: 'WHM',     label: 'Full Control' },
              { value: 'SA',      label: 'Hosted Locally' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl px-6 py-5">
                <p className="text-3xl font-extrabold text-white mb-1">{value}</p>
                <p className="text-slate-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Features ─────────────────────────────────────────── */}
      <Section background="gray">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-sm font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            Why Reseller Hosting
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Everything You Need to Run a Hosting Business
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Stop paying for individual hosting accounts for each client. Manage everything from one place and bill clients directly.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, bg, color, label, desc }) => (
            <div key={label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow flex gap-4 items-start">
              <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center ${color} shrink-0`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-gray-900 mb-1">{label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Platform Choice ───────────────────────────────────── */}
      <Section id="options">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Choose Your Reseller Platform</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Whether you are just starting out or scaling up, we have the right reseller solution for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {platforms.map((p) => {
            const Icon = p.icon;
            return (
              <Link key={p.to} to={p.to} className={`group relative bg-white rounded-2xl border ${p.border} shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col`}>
                <div className={`h-1.5 w-full bg-gradient-to-r ${p.accentFrom} ${p.accentTo}`} />

                {p.popular && (
                  <div className="absolute top-5 right-5 flex items-center gap-1 bg-purple-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl ${p.iconBg} flex items-center justify-center ${p.iconColor} shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-extrabold text-gray-900 group-hover:${p.ctaColor} transition-colors`}>{p.label}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">{p.tagline}</p>
                    </div>
                  </div>

                  <p className="text-gray-500 mb-6 leading-relaxed">{p.desc}</p>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className={`w-4 h-4 shrink-0 ${p.iconColor}`} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mt-auto">
                    <span className={`text-sm font-semibold ${p.iconColor} bg-opacity-10 px-3 py-1 rounded-lg ${p.iconBg}`}>{p.pricePill}</span>
                    <div className={`flex items-center font-semibold text-sm ${p.ctaColor}`}>
                      View Plans <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* ── Bottom CTA ─────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[60rem] h-[20rem] rounded-full bg-purple-600/10 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-semibold mb-6">
            <MessageSquare className="w-4 h-4" />
            Talk to Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to start your hosting business?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Not sure which tier is right for you? Our team will help you pick the best plan and get you set up fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/hosting/reseller/cpanel"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full shadow-lg shadow-purple-500/25 transition-all text-base"
            >
              cPanel Reseller Plans <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold rounded-full transition-all text-base"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reseller;
