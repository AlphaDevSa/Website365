import Section from '../components/Section';
import Button from '../components/Button';
import TrustBar from '../components/TrustBar';
import {
  Server, LayoutGrid, Users, Mail, ArrowRight, Zap, Shield, Globe,
  Cpu, Cloud, CheckCircle, Star, Lock, HardDrive, RotateCcw,
  Headphones, Clock, Check, X
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Hosting = () => {
  const hostingTypes = [
    {
      slug: '/hosting/directadmin',
      label: 'DirectAdmin Hosting',
      tagline: 'Fast, lightweight & affordable',
      icon: Server,
      accentFrom: 'from-blue-500',
      accentTo: 'to-cyan-400',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      badgeBg: 'bg-blue-50',
      badgeText: 'text-blue-700',
      border: 'border-blue-100',
      ctaColor: 'text-blue-600',
      startingPrice: 'R29',
      period: '/mo',
      popular: false,
      features: [
        'DirectAdmin control panel',
        'Unlimited disk & bandwidth',
        'Free SSL certificate',
        'LiteSpeed web server',
      ],
    },
    {
      slug: '/hosting/cpanel',
      label: 'cPanel Hosting',
      tagline: 'The industry-standard control panel',
      icon: LayoutGrid,
      accentFrom: 'from-orange-500',
      accentTo: 'to-amber-400',
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600',
      badgeBg: 'bg-orange-50',
      badgeText: 'text-orange-700',
      border: 'border-orange-100',
      ctaColor: 'text-orange-600',
      startingPrice: 'R59',
      period: '/mo',
      popular: true,
      features: [
        'Full cPanel access',
        'Unlimited disk & bandwidth',
        'Free SSL certificate',
        'Softaculous auto installer',
      ],
    },
    {
      slug: '/hosting/wordpress',
      label: 'WordPress Hosting',
      tagline: 'Supercharged for WordPress',
      icon: Globe,
      accentFrom: 'from-indigo-500',
      accentTo: 'to-blue-400',
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      badgeBg: 'bg-indigo-50',
      badgeText: 'text-indigo-700',
      border: 'border-indigo-100',
      ctaColor: 'text-indigo-600',
      startingPrice: 'R79',
      period: '/mo',
      popular: false,
      features: [
        'WP Toolkit + one-click staging',
        'LiteSpeed & LSCache',
        'Automatic WP updates',
        'Enhanced WP security rules',
      ],
    },
    {
      slug: '/hosting/reseller/cpanel',
      label: 'Reseller Hosting',
      tagline: 'Launch your own hosting business',
      icon: Users,
      accentFrom: 'from-purple-500',
      accentTo: 'to-violet-400',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      badgeBg: 'bg-purple-50',
      badgeText: 'text-purple-700',
      border: 'border-purple-100',
      ctaColor: 'text-purple-600',
      startingPrice: 'R125',
      period: '/mo',
      popular: false,
      features: [
        'WHM + cPanel panel',
        'White-label branding',
        'Free private nameservers',
        'CloudLinux OS',
      ],
    },
    {
      slug: '/hosting/email',
      label: 'Email Hosting',
      tagline: 'Professional email for your domain',
      icon: Mail,
      accentFrom: 'from-teal-500',
      accentTo: 'to-green-400',
      iconBg: 'bg-teal-50',
      iconColor: 'text-teal-600',
      badgeBg: 'bg-teal-50',
      badgeText: 'text-teal-700',
      border: 'border-teal-100',
      ctaColor: 'text-teal-600',
      startingPrice: 'R29',
      period: '/mo',
      popular: false,
      features: [
        'Up to 200 email accounts',
        'Spam & virus protection',
        'Webmail + IMAP/POP3',
        'Free SSL for all mailboxes',
      ],
    },
  ];

  const infrastructure = [
    {
      icon: Zap,
      label: 'LiteSpeed Elite',
      desc: 'Up to 40× faster than Apache — full-page cache built in',
      bg: 'bg-blue-50', color: 'text-blue-600',
    },
    {
      icon: HardDrive,
      label: 'NVMe SSD Storage',
      desc: 'Ultra-fast local solid-state drives across all plans',
      bg: 'bg-orange-50', color: 'text-orange-600',
    },
    {
      icon: Shield,
      label: 'Imunify360 Security',
      desc: 'AI-powered firewall and malware scanner always on',
      bg: 'bg-green-50', color: 'text-green-600',
    },
    {
      icon: Lock,
      label: 'Free SSL Certificates',
      desc: "Let's Encrypt auto-renew, every plan, every domain",
      bg: 'bg-teal-50', color: 'text-teal-600',
    },
    {
      icon: RotateCcw,
      label: 'Daily Backups',
      desc: 'Automated offsite backups with one-click restore',
      bg: 'bg-purple-50', color: 'text-purple-600',
    },
    {
      icon: Headphones,
      label: '24/7 SA Support',
      desc: 'Local support team available around the clock',
      bg: 'bg-rose-50', color: 'text-rose-600',
    },
  ];

  const comparisonRows = [
    { label: 'Ideal For',       da: 'Personal / Small Biz', cp: 'Business / Corporate', wp: 'WordPress Sites',      rs: 'Agencies / Devs' },
    { label: 'Control Panel',   da: 'DirectAdmin',           cp: 'cPanel',               wp: 'cPanel + WP Toolkit', rs: 'cPanel / WHM' },
    { label: 'Ease of Use',     da: 'High',                  cp: 'High',                 wp: 'Very High',           rs: 'Medium' },
    { label: 'Performance',     da: 'High',                  cp: 'High',                 wp: 'Ultra (LiteSpeed)',   rs: 'High' },
    { label: 'Free SSL',        da: true,                    cp: true,                   wp: true,                  rs: true },
    { label: 'White-Label',     da: false,                   cp: false,                  wp: false,                 rs: true },
    { label: 'Multi-Account',   da: false,                   cp: false,                  wp: false,                 rs: true },
    { label: 'Starting Price',  da: 'R29/mo',                cp: 'R59/mo',               wp: 'R79/mo',             rs: 'R125/mo' },
  ];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-900/30" />
          <div className="absolute -top-40 -right-20 w-[70rem] h-[70rem] rounded-full bg-indigo-600/10 blur-3xl animate-pulse" />
          <div className="absolute top-1/3 -left-20 w-[50rem] h-[50rem] rounded-full bg-blue-600/10 blur-3xl animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-sm font-semibold mb-8 backdrop-blur-sm">
            <Cloud className="w-4 h-4" />
            South African Cloud Hosting
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-none">
            Hosting Built for<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              South African Business.
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            LiteSpeed-powered, locally supported, and priced for the South African market.
            From a personal blog to a full hosting business — we have the plan for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              to="#plans"
              className="rounded-full px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/25 transition-all"
            >
              Find My Plan <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button to="/contact" variant="ghost" className="rounded-full px-8 py-4 text-lg font-semibold transition-all backdrop-blur-sm">
              Talk to an Expert
            </Button>
          </div>

          {/* Hero stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: '10 000+', label: 'Sites Hosted' },
              { value: '99.9%',   label: 'Uptime SLA' },
              { value: 'R29',     label: 'Starting Price' },
              { value: '24/7',    label: 'SA Support' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl px-6 py-5">
                <p className="text-3xl font-extrabold text-white mb-1">{value}</p>
                <p className="text-slate-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TrustBar />

      {/* ── Hosting Types ─────────────────────────────────────── */}
      <Section id="plans" background="gray">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Choose Your Hosting Platform
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Every plan runs on the same enterprise infrastructure. Pick the control panel and features that suit you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hostingTypes.map((h) => {
            const Icon = h.icon;
            return (
              <Link
                key={h.slug}
                to={h.slug}
                className={`group relative bg-white rounded-2xl border ${h.border} shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col`}
              >
                {/* Gradient accent top bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${h.accentFrom} ${h.accentTo}`} />

                {h.popular && (
                  <div className="absolute top-5 right-5 flex items-center gap-1 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
                    <Star className="w-3 h-3" /> Most Popular
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl ${h.iconBg} flex items-center justify-center ${h.iconColor} shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                        {h.label}
                      </h3>
                      <p className="text-xs text-gray-400 mt-0.5">{h.tagline}</p>
                    </div>
                  </div>

                  {/* Starting price */}
                  <div className={`inline-flex items-baseline gap-0.5 mb-5 px-3 py-1.5 rounded-lg ${h.badgeBg} self-start`}>
                    <span className={`text-2xl font-extrabold ${h.badgeText}`}>{h.startingPrice}</span>
                    <span className={`text-sm font-medium ${h.badgeText} opacity-70`}>{h.period}</span>
                    <span className={`text-xs ml-1 ${h.badgeText} opacity-60`}>starting from</span>
                  </div>

                  {/* Feature bullets */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {h.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${h.iconColor}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className={`flex items-center font-semibold text-sm ${h.ctaColor} mt-auto`}>
                    View Plans <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* ── Infrastructure Highlights ──────────────────────────── */}
      <Section>
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-4">
            <Cpu className="w-4 h-4" />
            Enterprise Infrastructure
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Every Plan Runs on the Same Powerful Stack
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            No tiered server quality. Every Website365 plan shares the same high-performance infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {infrastructure.map(({ icon: Icon, label, desc, bg, color }) => (
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

      {/* ── Comparison Table ───────────────────────────────────── */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Not Sure Which Plan to Pick?</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Use this quick comparison to find the right fit for your needs.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-sm overflow-hidden text-sm">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="px-6 py-4 text-left font-semibold w-40">Feature</th>
                <th className="px-6 py-4 text-center font-semibold">
                  <div className="flex flex-col items-center gap-1">
                    <Server className="w-4 h-4 text-blue-400" />
                    DirectAdmin
                  </div>
                </th>
                <th className="px-6 py-4 text-center font-semibold bg-orange-600/20">
                  <div className="flex flex-col items-center gap-1">
                    <LayoutGrid className="w-4 h-4 text-orange-400" />
                    cPanel
                  </div>
                </th>
                <th className="px-6 py-4 text-center font-semibold">
                  <div className="flex flex-col items-center gap-1">
                    <Globe className="w-4 h-4 text-indigo-400" />
                    WordPress
                  </div>
                </th>
                <th className="px-6 py-4 text-center font-semibold">
                  <div className="flex flex-col items-center gap-1">
                    <Users className="w-4 h-4 text-purple-400" />
                    Reseller
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonRows.map((row, idx) => (
                <tr key={row.label} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 font-semibold text-gray-700">{row.label}</td>
                  {[row.da, row.cp, row.wp, row.rs].map((val, i) => (
                    <td key={i} className={`px-6 py-4 text-center ${i === 1 ? 'bg-orange-50/50' : ''}`}>
                      {typeof val === 'boolean' ? (
                        val
                          ? <Check className="w-5 h-5 text-green-500 mx-auto" />
                          : <X className="w-4 h-4 text-gray-300 mx-auto" />
                      ) : (
                        <span className="text-gray-700">{val}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── Bottom CTA ─────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-indigo-900/30 to-slate-900" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[60rem] h-[20rem] rounded-full bg-blue-600/10 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-6">
            <Clock className="w-4 h-4" />
            Get Online in Minutes
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to launch your website?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Every plan includes free SSL, daily backups, and local South African support.
            No hidden fees, no contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="#plans"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full shadow-lg shadow-blue-500/25 transition-all text-base"
            >
              Choose a Plan <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold rounded-full transition-all text-base"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hosting;
