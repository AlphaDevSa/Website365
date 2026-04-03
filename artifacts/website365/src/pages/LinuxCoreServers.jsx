import React, { useState } from 'react';
import Section from '../components/Section';
import PlanOrderModal from '../components/PlanOrderModal';
import { Link } from 'react-router-dom';
import {
  Server, Cpu, Shield, ArrowRight, Zap, HardDrive,
  Network, CheckCircle, Globe, Lock, Activity, Database,
  MemoryStick, ChevronRight
} from 'lucide-react';

const PLANS = [
  {
    name: 'Metal Core Linux 6',
    price: 'R2,329',
    cores: '10 Core / 20 Threads',
    ram: '16 GB ECC RAM',
    storage: '1 TB SSD (2 × 500 GB SSD)',
    hardware: 'Dell R640 · Intel Xeon Silver 4110 or similar',
    popular: false,
  },
  {
    name: 'Metal Core Linux 12',
    price: 'R3,629',
    cores: '10 Core / 20 Threads',
    ram: '32 GB ECC RAM',
    storage: '2 TB SSD (2 × 1 TB SSD)',
    hardware: 'Dell R640 · Intel Xeon Silver 4110 or similar',
    popular: false,
  },
  {
    name: 'Metal Core Linux 16',
    price: 'R4,669',
    cores: '16 Core / 36 Threads',
    ram: '64 GB ECC RAM',
    storage: '2 TB SSD (2 × 1 TB SSD)',
    hardware: 'Dell R640 · Intel Xeon Gold 6130 or similar',
    popular: true,
  },
  {
    name: 'Metal Core Linux 20',
    price: 'R5,709',
    cores: '20 Core / 40 Threads',
    ram: '96 GB ECC RAM',
    storage: '2 TB SSD (2 × 1 TB SSD)',
    hardware: 'Dell R640 · Intel Xeon Gold 6230 or similar',
    popular: false,
  },
  {
    name: 'Metal Core Linux 28',
    price: 'R8,179',
    cores: '28 Core / 56 Threads',
    ram: '128 GB ECC RAM',
    storage: '2 TB SSD (2 × 1 TB SSD)',
    hardware: 'Dell R650 · Intel Xeon Gold 6330 or similar',
    popular: false,
  },
];

const FEATURES = [
  { icon: Cpu,        bg: 'bg-blue-50',   color: 'text-blue-600',   label: 'Dedicated Intel Xeon',    desc: 'Enterprise-grade multi-core processors — all cores reserved for you.' },
  { icon: MemoryStick,bg: 'bg-cyan-50',   color: 'text-cyan-600',   label: 'ECC RAM',                 desc: 'Error-correcting memory that silently detects and fixes data corruption.' },
  { icon: HardDrive,  bg: 'bg-teal-50',   color: 'text-teal-600',   label: 'SSD Storage',             desc: 'Enterprise SSD arrays providing fast read/write across all plans.' },
  { icon: Shield,     bg: 'bg-green-50',  color: 'text-green-600',  label: 'DDoS Protection',         desc: 'Always-on DDoS mitigation housed in an ISO Accredited DataCenter.' },
  { icon: Globe,      bg: 'bg-indigo-50', color: 'text-indigo-600', label: 'Static IPv4',             desc: 'Dedicated static IP address included — configure rDNS your way.' },
  { icon: Lock,       bg: 'bg-purple-50', color: 'text-purple-600', label: 'Full Root Access',        desc: 'Install any OS, control panel, or software stack you need.' },
  { icon: Network,    bg: 'bg-orange-50', color: 'text-orange-600', label: 'Premium Uplink',          desc: 'Redundant uplinks in a Tier III+ data centre with 24/7 NOC monitoring.' },
  { icon: Activity,   bg: 'bg-red-50',    color: 'text-red-600',    label: '99.9% Uptime SLA',        desc: 'Enterprise infrastructure with power, cooling and network redundancy.' },
];

const LinuxCoreServers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openModal = (plan) => {
    setSelectedPlan({ title: plan.name, price: plan.price, billingPeriod: 'Monthly', category: 'Dedicated Server' });
    setIsModalOpen(true);
  };

  return (
    <>
      <PlanOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        plan={selectedPlan}
        formType="Dedicated Server"
      />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <div className="relative bg-[#03080f] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#03080f] via-[#06101a] to-[#0a1825]" />
          <div className="absolute top-0 left-1/3 w-[700px] h-[500px] bg-blue-700/8 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-indigo-500/6 rounded-full blur-[100px]" />
          <div className="absolute top-0 left-[22%] w-px h-full bg-gradient-to-b from-transparent via-blue-500/12 to-transparent" />
          <div className="absolute top-0 right-[22%] w-px h-full bg-gradient-to-b from-transparent via-blue-500/8 to-transparent" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/12 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
            <Link to="/servers" className="hover:text-slate-300 transition-colors">Servers</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-400">Dedicated Servers</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-300">Linux Core Servers</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── Left: Copy ─────────────────────────────────────── */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/8 text-blue-300 text-xs font-bold tracking-widest uppercase mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Dedicated Servers · Linux · South Africa
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
                Bare Metal.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500">
                  Full Power.
                </span><br />
                <span className="text-slate-400 text-3xl lg:text-4xl font-semibold">Metal Core Linux Servers</span>
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
                Enterprise Dell hardware with dedicated Intel Xeon cores, ECC RAM, and SSD storage — yours alone. No hypervisor overhead, no sharing, no compromise.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {['Intel Xeon Gold/Silver', 'ECC RAM', 'Dell R640/R650', 'SSD Storage', 'Static IPv4', 'Full Root Access', 'DDoS Protected'].map((f) => (
                  <span key={f} className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-800/70 border border-slate-700/50 text-slate-300">
                    {f}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#plans"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-700/30 transition-all hover:shadow-blue-500/40 hover:-translate-y-0.5"
                >
                  View Plans <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-white hover:border-slate-500 transition-all"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>

            {/* ── Right: Server Spec Panel ─────────────────────── */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600/5 blur-2xl rounded-3xl scale-110" />
                <div className="relative bg-slate-900/80 border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md">

                  {/* Panel header */}
                  <div className="flex items-center justify-between px-6 py-4 bg-slate-800/60 border-b border-slate-700/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center">
                        <Server className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-bold">Metal Core Linux Server</p>
                        <p className="text-slate-500 text-xs">Dell Enterprise · ISO Accredited DC</p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs text-green-400 font-mono font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      BARE METAL
                    </span>
                  </div>

                  {/* Hardware rows */}
                  <div className="p-6 space-y-3">
                    {[
                      { label: 'CPU', val: 'Intel Xeon Gold/Silver', sub: 'Up to 28 cores / 56 threads', color: 'text-blue-400' },
                      { label: 'RAM', val: 'Up to 128 GB ECC', sub: 'Error-correcting memory', color: 'text-indigo-400' },
                      { label: 'Storage', val: '1 TB – 2 TB SSD', sub: 'RAID enterprise SSD array', color: 'text-cyan-400' },
                      { label: 'Network', val: 'Premium Uplink', sub: 'Tier III+ redundant uplinks', color: 'text-teal-400' },
                      { label: 'Hardware', val: 'Dell R640 / R650', sub: 'Enterprise-class rack servers', color: 'text-purple-400' },
                    ].map(({ label, val, sub, color }) => (
                      <div key={label} className="flex items-start justify-between bg-slate-800/50 border border-slate-700/40 rounded-xl px-4 py-3">
                        <div>
                          <p className="text-slate-500 text-xs mb-0.5">{label}</p>
                          <p className={`text-sm font-bold ${color}`}>{val}</p>
                          <p className="text-slate-500 text-xs mt-0.5">{sub}</p>
                        </div>
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between px-6 py-4 bg-slate-800/40 border-t border-slate-700/50">
                    <div>
                      <p className="text-white text-sm font-bold">5 Plans · Linux 6 to Linux 28</p>
                      <p className="text-slate-400 text-xs">From R2,329/mo · Monthly billing</p>
                    </div>
                    <a href="#plans" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Metal Core Linux Plans</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Five dedicated server tiers — from an entry Linux 6 to the powerhouse Linux 28. All plans run on enterprise Dell hardware with ECC RAM and full root access.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border shadow-sm overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5 ${
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
                <div className="mb-4">
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Dedicated Server</p>
                  <h3 className="text-lg font-extrabold text-gray-900 leading-tight">{plan.name}</h3>
                </div>

                <div className="mb-6">
                  <span className="text-3xl font-black text-gray-900">{plan.price}</span>
                  <span className="text-gray-400 text-sm ml-1">/mo</span>
                </div>

                <ul className="space-y-2.5 flex-1 mb-6 text-sm text-gray-600">
                  {[plan.cores, plan.ram, plan.storage, plan.hardware].map((spec) => (
                    <li key={spec} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openModal(plan)}
                  className={`w-full rounded-xl py-3 text-sm font-bold transition-all ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                      : 'bg-gray-50 hover:bg-blue-600 hover:text-white text-gray-900 border border-gray-200 hover:border-blue-600'
                  }`}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Features ───────────────────────────────────────────── */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose a Dedicated Server?</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Every Metal Core Linux plan gives you the full server — no neighbours, no overcommitment, no limits.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map(({ icon: Icon, bg, color, label, desc }) => (
            <div key={label} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── The Website365 Difference ─────────────────────────── */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">The Website365 Difference</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Locally managed dedicated infrastructure backed by a South African team that picks up the phone.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Globe,    color: 'text-blue-600',   bg: 'bg-blue-50',   label: 'SA-Hosted',          desc: 'Servers physically located in South Africa for low-latency access.' },
              { icon: Database, color: 'text-indigo-600', bg: 'bg-indigo-50', label: 'Enterprise Dell',     desc: 'Dell R640 and R650 rack-mount hardware with full IPMI/iDRAC management.' },
              { icon: Zap,      color: 'text-green-600',  bg: 'bg-green-50',  label: 'Fast Provisioning',  desc: 'Your dedicated server is configured and online within one business day.' },
            ].map(({ icon: Icon, color, bg, label, desc }) => (
              <div key={label} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
                <div className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-7 h-7 ${color}`} />
                </div>
                <h3 className="font-extrabold text-gray-900 mb-2">{label}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready for Bare Metal Performance?</h2>
          <p className="text-slate-400 mb-8">Deploy your Metal Core Linux server today. Our team will have it online within one business day.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#plans"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-700/30 transition-all hover:-translate-y-0.5"
            >
              Choose a Plan <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-white hover:border-slate-500 transition-all"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinuxCoreServers;
