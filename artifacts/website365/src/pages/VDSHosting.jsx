import React, { useState } from 'react';
import Section from '../components/Section';
import PlanOrderModal from '../components/PlanOrderModal';
import { Link } from 'react-router-dom';
import {
  Server, Cpu, Shield, ArrowRight, Zap, Database, Lock, Globe,
  HardDrive, MapPin, Activity, Network, CheckCircle, Terminal,
  Clock, RefreshCw, Wifi, LayoutDashboard, CloudCog, Headphones,
  Building2, MonitorSmartphone
} from 'lucide-react';

const PLANS = [
  {
    name: 'Premium Linux VDS S',
    price: 'R1,239',
    cpu: '3 Dedicated Intel Xeon CPU',
    ram: '24 GB RAM',
    storage: '450 GB NVMe SSD',
    features: [
      '3 Dedicated Intel Xeon CPU',
      '24 GB RAM',
      '450 GB NVMe SSD',
      'Unlimited Bandwidth',
      'All Major Linux Distros',
      'Full Root Access',
      'Modern Control Panel',
      'Full DNS & rDNS Control',
      'Free Static IP Address',
      'Isolated KVM Virtualisation',
      'Dedicated Resources',
      '99.9% Uptime Guarantee',
      'Optional Backup Plans',
    ],
  },
  {
    name: 'Premium Linux VDS M',
    price: 'R1,659',
    cpu: '4 Dedicated Intel Xeon CPU',
    ram: '32 GB RAM',
    storage: '600 GB NVMe SSD',
    popular: true,
    features: [
      '4 Dedicated Intel Xeon CPU',
      '32 GB RAM',
      '600 GB NVMe SSD',
      'Unlimited Bandwidth',
      'All Major Linux Distros',
      'Full Root Access',
      'Modern Control Panel',
      'Full DNS & rDNS Control',
      'Free Static IP Address',
      'Isolated KVM Virtualisation',
      'Dedicated Resources',
      '99.9% Uptime Guarantee',
      'Optional Backup Plans',
    ],
  },
  {
    name: 'Premium Linux VDS L',
    price: 'R2,489',
    cpu: '6 Dedicated Intel Xeon CPU',
    ram: '48 GB RAM',
    storage: '900 GB NVMe SSD',
    features: [
      '6 Dedicated Intel Xeon CPU',
      '48 GB RAM',
      '900 GB NVMe SSD',
      'Unlimited Bandwidth',
      'All Major Linux Distros',
      'Full Root Access',
      'Modern Control Panel',
      'Full DNS & rDNS Control',
      'Free Static IP Address',
      'Isolated KVM Virtualisation',
      'Dedicated Resources',
      '99.9% Uptime Guarantee',
      'Optional Backup Plans',
    ],
  },
  {
    name: 'Premium Linux VDS XL',
    price: 'R3,309',
    cpu: '8 Dedicated Intel Xeon CPU',
    ram: '64 GB RAM',
    storage: '1200 GB NVMe SSD',
    features: [
      '8 Dedicated Intel Xeon CPU',
      '64 GB RAM',
      '1200 GB NVMe SSD',
      'Unlimited Bandwidth',
      'All Major Linux Distros',
      'Full Root Access',
      'Modern Control Panel',
      'Full DNS & rDNS Control',
      'Free Static IP Address',
      'Isolated KVM Virtualisation',
      'Dedicated Resources',
      '99.9% Uptime Guarantee',
      'Optional Backup Plans',
    ],
  },
  {
    name: 'Premium Linux VDS XXL',
    price: 'R4,969',
    cpu: '12 Dedicated Intel Xeon CPU',
    ram: '96 GB RAM',
    storage: '1800 GB NVMe SSD',
    features: [
      '12 Dedicated Intel Xeon CPU',
      '96 GB RAM',
      '1800 GB NVMe SSD',
      'Unlimited Bandwidth',
      'All Major Linux Distros',
      'Full Root Access',
      'Modern Control Panel',
      'Full DNS & rDNS Control',
      'Free Static IP Address',
      'Isolated KVM Virtualisation',
      'Dedicated Resources',
      '99.9% Uptime Guarantee',
      'Optional Backup Plans',
    ],
  },
];

const INCLUDES = [
  { icon: Cpu,      bg: 'bg-blue-50',   color: 'text-blue-600',   label: 'Dedicated Intel Xeon CPU',   desc: 'Real dedicated cores — not shared, not virtualised. Guaranteed performance.' },
  { icon: HardDrive,bg: 'bg-cyan-50',   color: 'text-cyan-600',   label: 'NVMe SSD Storage',            desc: 'Ultra-fast NVMe drives ensure lightning-quick read/write speeds.' },
  { icon: Globe,    bg: 'bg-indigo-50', color: 'text-indigo-600', label: 'Full DNS & rDNS Control',     desc: 'Manage forward and reverse DNS records for your server.' },
  { icon: Shield,   bg: 'bg-green-50',  color: 'text-green-600',  label: 'KVM Virtualisation',          desc: 'Isolated KVM environment — your resources are truly yours.' },
  { icon: Network,  bg: 'bg-purple-50', color: 'text-purple-600', label: 'Unlimited Bandwidth',         desc: 'No bandwidth caps or throttling on any VDS plan.' },
  { icon: Terminal, bg: 'bg-orange-50', color: 'text-orange-600', label: 'Full Root Access',            desc: 'Complete control — install any OS, software, or control panel.' },
];

const VDSHosting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openModal = (plan) => {
    setSelectedPlan({ title: plan.name, price: plan.price, billingPeriod: 'Monthly', category: 'VDS Server' });
    setIsModalOpen(true);
  };

  return (
    <>
      <PlanOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        plan={selectedPlan}
        formType="VDS Server"
      />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <div className="relative bg-[#030d14] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#030d14] via-[#051520] to-[#071e2e]" />
          <div className="absolute top-0 right-1/3 w-[700px] h-[500px] bg-cyan-600/8 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-teal-500/6 rounded-full blur-[100px]" />
          {/* Vertical light bars */}
          <div className="absolute top-0 left-[18%] w-px h-full bg-gradient-to-b from-transparent via-cyan-500/15 to-transparent" />
          <div className="absolute top-0 right-[18%] w-px h-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.025]" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── Left: Copy ─────────────────────────────────────── */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/8 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Virtual Dedicated Servers · SA Hosted
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
                Your Resources.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400">
                  Only Yours.
                </span><br />
                <span className="text-slate-400 text-3xl lg:text-4xl font-semibold">Dedicated Intel Xeon · KVM</span>
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
                Unlike shared VPS, every VDS gives you physically partitioned CPU cores, ECC-grade NVMe storage in RAID 10, and a fully isolated KVM environment — no noisy neighbours, ever.
              </p>

              {/* Differentiator pills */}
              <div className="flex flex-wrap gap-2 mb-10">
                {['Dedicated Xeon Cores', 'RAID 10 NVMe', 'KVM Isolated', 'Static IPv4', 'Full Root Access', 'rDNS Control'].map((f) => (
                  <span key={f} className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-800/70 border border-slate-700/50 text-slate-300">
                    {f}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#plans"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-bold bg-cyan-600 hover:bg-cyan-500 text-white shadow-xl shadow-cyan-700/30 transition-all hover:shadow-cyan-500/40 hover:-translate-y-0.5"
                >
                  View VDS Plans <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-white hover:border-slate-500 transition-all"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>

            {/* ── Right: Dedicated Resource Panel ────────────────── */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-600/5 blur-2xl rounded-3xl scale-110" />

                <div className="relative bg-slate-900/80 border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md">
                  {/* Panel header */}
                  <div className="flex items-center justify-between px-6 py-4 bg-slate-800/60 border-b border-slate-700/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
                        <Cpu className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-bold">Dedicated Resource Allocation</p>
                        <p className="text-slate-500 text-xs">Premium Linux VDS · ISO Accredited DC</p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      DEDICATED
                    </span>
                  </div>

                  {/* Resource blocks */}
                  <div className="p-6 space-y-4">
                    {/* CPU */}
                    <div className="bg-slate-800/50 border border-slate-700/40 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300 text-sm font-semibold">Intel Xeon CPU</span>
                        </div>
                        <span className="text-xs bg-cyan-500/15 text-cyan-300 border border-cyan-500/25 px-2 py-0.5 rounded-full font-semibold">Dedicated</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1.5">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div key={i} className={`h-6 rounded ${i < 8 ? 'bg-cyan-500/70' : 'bg-slate-700/60'} transition-all`} />
                        ))}
                      </div>
                      <p className="text-slate-500 text-xs mt-2">3–12 dedicated cores · no sharing</p>
                    </div>

                    {/* RAM */}
                    <div className="bg-slate-800/50 border border-slate-700/40 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <HardDrive className="w-4 h-4 text-teal-400" />
                          <span className="text-slate-300 text-sm font-semibold">NVMe SSD · RAID 10</span>
                        </div>
                        <span className="text-xs bg-teal-500/15 text-teal-300 border border-teal-500/25 px-2 py-0.5 rounded-full font-semibold">Usable</span>
                      </div>
                      <div className="flex gap-1.5 items-end h-8">
                        {[40, 55, 70, 85, 100].map((h, i) => (
                          <div key={i} className="flex-1 rounded-sm bg-teal-500/60" style={{ height: `${h}%` }} />
                        ))}
                        {[100, 85, 70, 55, 40].map((h, i) => (
                          <div key={i + 5} className="flex-1 rounded-sm bg-teal-400/30" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                      <p className="text-slate-500 text-xs mt-2">450 GB → 1800 GB · all usable storage</p>
                    </div>

                    {/* KVM isolation badge */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { icon: Shield,  color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20', label: 'KVM', sub: 'Isolated' },
                        { icon: Globe,   color: 'text-blue-400',  bg: 'bg-blue-500/10 border-blue-500/20',   label: 'rDNS', sub: 'Full Control' },
                        { icon: Network, color: 'text-purple-400',bg: 'bg-purple-500/10 border-purple-500/20',label: '300 Mbps', sub: 'Bandwidth' },
                      ].map(({ icon: Icon, color, bg, label, sub }) => (
                        <div key={label} className={`rounded-xl border ${bg} p-3 text-center`}>
                          <Icon className={`w-4 h-4 ${color} mx-auto mb-1`} />
                          <p className={`text-sm font-black ${color}`}>{label}</p>
                          <p className="text-slate-500 text-xs">{sub}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between px-6 py-4 bg-slate-800/40 border-t border-slate-700/50">
                    <div>
                      <p className="text-white text-sm font-bold">5 Plans · S to XXL</p>
                      <p className="text-slate-400 text-xs">From R1,239/mo · Monthly billing</p>
                    </div>
                    <a href="#plans" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
                      See Plans <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Plans ──────────────────────────────────────────────── */}
      <Section id="plans">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Premium Linux VDS Plans</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Choose the right dedicated resources for your workload. All plans include full root access and isolated KVM virtualisation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border shadow-sm overflow-hidden transition-all hover:shadow-lg ${
                plan.popular
                  ? 'border-blue-500 shadow-blue-500/10'
                  : 'border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-xs font-bold text-center py-1.5 tracking-wider uppercase">
                  Most Popular
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-base font-extrabold text-gray-900 mb-1">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-sm text-gray-500 ml-1">/mo</span>
                </div>

                <ul className="space-y-2 flex-1 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openModal(plan)}
                  className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20'
                      : 'bg-gray-900 hover:bg-gray-700 text-white'
                  }`}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── What's Included ────────────────────────────────────── */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Everything Included on Every Plan</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Every VDS plan ships with the same enterprise-grade infrastructure — only the resources change.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INCLUDES.map(({ icon: Icon, bg, color, label, desc }) => (
            <div key={label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center ${color} shrink-0`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm mb-1">{label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Why Choose VDS ─────────────────────────────────────── */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose Our VDS Servers?</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Monthly contract, monthly billing — cancel anytime. ZAR billing with regional payment options.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Cpu,           bg: 'bg-blue-50',   color: 'text-blue-600',   label: 'Dedicated Resources',              desc: 'CPU and RAM exclusively yours, just like with a physical server.' },
            { icon: Zap,           bg: 'bg-yellow-50', color: 'text-yellow-600', label: 'Lightning-fast NVMe Enterprise Storage', desc: 'Already in RAID 10. All your storage is usable storage.' },
            { icon: RefreshCw,     bg: 'bg-cyan-50',   color: 'text-cyan-600',   label: 'Simple Upgrade Flexibility',       desc: 'Scale between VDS tiers with a seamless upgrade path.' },
            { icon: Wifi,          bg: 'bg-indigo-50', color: 'text-indigo-600', label: 'Superior VDS Bandwidth',           desc: '300 Mbps performance, built to handle heavy traffic.' },
            { icon: Clock,         bg: 'bg-green-50',  color: 'text-green-600',  label: 'Instant Setup',                    desc: 'Get your server running in minutes with our automated provisioning.' },
            { icon: LayoutDashboard,bg: 'bg-purple-50',color: 'text-purple-600', label: 'Modern Control Panel',            desc: 'Simple VNC console, SSH and full root access included.' },
            { icon: CloudCog,      bg: 'bg-orange-50', color: 'text-orange-600', label: 'Backup Management',               desc: 'Optional backup add-on: simple, cost-effective, and self-managed. Handle full or incremental backups with restore on demand.' },
          ].map(({ icon: Icon, bg, color, label, desc }) => (
            <div key={label} className="rounded-2xl border border-gray-100 shadow-sm p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center ${color} shrink-0`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm mb-1">{label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── The Website365 Difference ───────────────────────────── */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">The Website365 Difference</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Built for South African businesses, developers and domain resellers — with enterprise-grade infrastructure behind every server.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Shield,
              bg: 'bg-red-50',
              color: 'text-red-600',
              label: 'Security',
              desc: 'Your VDS is protected with DDoS mitigation, 24/7 monitoring, and housed in an ISO Accredited DataCenter.',
            },
            {
              icon: Headphones,
              bg: 'bg-blue-50',
              color: 'text-blue-600',
              label: 'Expert Support',
              desc: 'Our specialists are available around-the-clock to assist with any technical issues or questions.',
            },
            {
              icon: Building2,
              bg: 'bg-green-50',
              color: 'text-green-600',
              label: 'Locally Hosted in a World-Class Data Center',
              desc: 'Tier 3, ISO-accredited facility for enterprise-grade reliability — low-latency performance for South African users.',
            },
            {
              icon: Globe,
              bg: 'bg-indigo-50',
              color: 'text-indigo-600',
              label: 'Built for SA Businesses, Developers & Domain Resellers',
              desc: 'Whether you\'re launching SaaS products, managing eCommerce platforms, or bundling hosting with .ZA domain sales — we\'ve got you covered.',
            },
          ].map(({ icon: Icon, bg, color, label, desc }) => (
            <div key={label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center ${color} shrink-0`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm mb-1">{label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── OS Choice ───────────────────────────────────────────── */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Your Choice of Operating System</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Install the operating system of your choice. Many templates are available to suit your needs.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            {
              label: 'Ubuntu',
              color: 'text-orange-600',
              bg: 'bg-orange-50',
              border: 'border-orange-100',
              desc: 'A popular Linux distribution known for its user-friendliness and strong community support.',
            },
            {
              label: 'Debian',
              color: 'text-blue-600',
              bg: 'bg-blue-50',
              border: 'border-blue-100',
              desc: 'A stable and reliable Linux distribution, well-known for its emphasis on free software and security.',
            },
            {
              label: 'AlmaLinux',
              color: 'text-indigo-600',
              bg: 'bg-indigo-50',
              border: 'border-indigo-100',
              desc: 'A community-driven, open-source Linux distribution designed as a CentOS replacement, providing enterprise-grade stability.',
            },
          ].map(({ label, color, bg, border, desc }) => (
            <div key={label} className={`rounded-2xl border ${border} shadow-sm p-6 text-center hover:shadow-md transition-shadow`}>
              <div className={`w-12 h-12 rounded-2xl ${bg} flex items-center justify-center ${color} mx-auto mb-4`}>
                <MonitorSmartphone className="w-6 h-6" />
              </div>
              <h3 className={`font-extrabold text-lg mb-2 ${color}`}>{label}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <div className="relative bg-slate-900 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready for Dedicated Performance?</h2>
          <p className="text-slate-400 mb-8">Get your Premium Linux VDS server live today. Need help choosing? Our team is standing by.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#plans"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 transition-all"
            >
              Choose a VDS Plan <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default VDSHosting;
