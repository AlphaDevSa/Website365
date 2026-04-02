import React, { useState } from 'react';
import Section from '../components/Section';
import PlanOrderModal from '../components/PlanOrderModal';
import { Link } from 'react-router-dom';
import {
  Server, Cpu, Shield, ArrowRight, Zap, HardDrive,
  MapPin, Network, CheckCircle, Terminal, Globe
} from 'lucide-react';

const PLANS = [
  {
    name: 'VPS HP One Server',
    price: 'R159',
    features: ['1 CPU vCore', '1GB ECC RAM', '20GB NVMe SSD Storage', 'Unlimited Traffic', '1 Static IPv4 address', 'Ubuntu, Debian, AlmaLinux'],
  },
  {
    name: 'VPS HP Two Server',
    price: 'R259',
    features: ['1 CPU vCore', '2GB ECC RAM', '50GB NVMe SSD Storage', 'Unlimited Traffic', '1 Static IPv4 address', 'Ubuntu, Debian, AlmaLinux'],
  },
  {
    name: 'VPS HP Three Server',
    price: 'R359',
    features: ['2 CPU vCore', '2GB ECC RAM', '80GB NVMe SSD Storage', 'Unlimited Traffic', '1 Static IPv4 address', 'Ubuntu, Debian, AlmaLinux'],
  },
  {
    name: 'VPS HP Four Server',
    price: 'R519',
    popular: true,
    features: ['2 CPU vCore', '4GB ECC RAM', '100GB NVMe SSD Storage', 'Unlimited Traffic', '1 Static IPv4 address', 'Ubuntu, Debian, AlmaLinux'],
  },
  {
    name: 'VPS HP Five Server',
    price: 'R1,029',
    features: ['4 CPU vCore', '8GB ECC RAM', '200GB NVMe SSD Storage', 'Unlimited Traffic', '1 Static IPv4 address', 'Ubuntu, Debian, AlmaLinux'],
  },
  {
    name: 'VPS HP Six Server',
    price: 'R1,549',
    features: ['6 CPU vCore', '12GB ECC RAM', '300GB NVMe SSD Storage', 'Unlimited Traffic', '1 Static IPv4 address', 'Ubuntu, Debian, AlmaLinux'],
  },
  {
    name: 'VPS HP Seven Server',
    price: 'R2,069',
    features: ['8 CPU vCore', '16GB ECC RAM', '400GB NVMe SSD Storage', 'Unlimited Traffic', '1 Static IPv4 address', 'Ubuntu, Debian, AlmaLinux'],
  },
  {
    name: 'VPS HP Eight Server',
    price: 'R3,509',
    features: ['12 CPU vCore', '32GB ECC RAM', '500GB NVMe SSD Storage', 'Unlimited Traffic', '1 Static IPv4 address', 'Ubuntu, Debian, AlmaLinux'],
  },
  {
    name: 'VPS HP Nine Server',
    price: 'R5,879',
    features: ['16 CPU vCore', '64GB ECC RAM', '500GB NVMe SSD Storage', 'Unlimited Traffic', '1 Static IPv4 address', 'Ubuntu, Debian, AlmaLinux'],
  },
];

const INCLUDES = [
  { icon: Cpu,      bg: 'bg-blue-50',   color: 'text-blue-600',   label: 'ECC RAM',               desc: 'Error-correcting RAM for maximum stability and data integrity.' },
  { icon: HardDrive,bg: 'bg-cyan-50',   color: 'text-cyan-600',   label: 'NVMe SSD Storage',      desc: 'Ultra-fast NVMe drives for lightning-quick read/write speeds.' },
  { icon: Globe,    bg: 'bg-indigo-50', color: 'text-indigo-600', label: 'Unlimited Traffic',      desc: 'No bandwidth caps or throttling on any High Performance VPS plan.' },
  { icon: Shield,   bg: 'bg-green-50',  color: 'text-green-600',  label: 'Static IPv4 Address',   desc: 'Dedicated static IP included on every plan.' },
  { icon: Network,  bg: 'bg-purple-50', color: 'text-purple-600', label: 'KVM Virtualisation',    desc: 'Fully isolated environment — your resources are exclusively yours.' },
  { icon: Terminal, bg: 'bg-orange-50', color: 'text-orange-600', label: 'Full Root Access',      desc: 'Install Ubuntu, Debian, or AlmaLinux and configure everything.' },
];

const HighPerformanceVPS = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openModal = (plan) => {
    setSelectedPlan({ title: plan.name, price: plan.price, billingPeriod: 'Monthly', category: 'High Performance VPS' });
    setIsModalOpen(true);
  };

  return (
    <>
      <PlanOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        plan={selectedPlan}
        formType="VPS Hosting Order"
      />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <div className="relative bg-[#050c1a] overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050c1a] via-[#071428] to-[#0a1f3d]" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
          {/* Horizontal scan line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── Left: Copy ──────────────────────────────────────── */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                High Performance VPS · South Africa
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
                Built for<br />
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                    Raw Speed.
                  </span>
                </span><br />
                <span className="text-slate-300 text-4xl lg:text-5xl font-bold">Zero Compromise.</span>
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
                ECC RAM that protects your data. NVMe SSD that never blinks. Unlimited traffic that never throttles.
                Nine plans — from lean to dominant.
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2 mb-10">
                {['ECC RAM', 'NVMe SSD', 'KVM Isolated', 'Unlimited Traffic', 'Static IPv4', 'Full Root Access'].map((f) => (
                  <span key={f} className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300">
                    {f}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#plans"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-700/30 transition-all hover:shadow-blue-500/40 hover:-translate-y-0.5"
                >
                  See All Plans <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-white hover:border-slate-500 transition-all"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>

            {/* ── Right: Server Metrics Panel ─────────────────────── */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Glow behind panel */}
                <div className="absolute inset-0 bg-blue-600/5 blur-2xl rounded-3xl scale-110" />

                <div className="relative bg-slate-900/80 border border-slate-700/60 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 mb-5 pb-4 border-b border-slate-700/50">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    <span className="ml-3 text-xs font-mono text-slate-500">server-metrics — bash</span>
                    <span className="ml-auto flex items-center gap-1.5 text-xs text-green-400 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      ONLINE
                    </span>
                  </div>

                  {/* Metric rows */}
                  <div className="space-y-4 font-mono text-sm mb-5">
                    {[
                      { label: 'CPU Usage',    val: '12%',   bar: 12,   color: 'bg-blue-500' },
                      { label: 'RAM',          val: '3.1 / 8 GB', bar: 39, color: 'bg-cyan-500' },
                      { label: 'Disk I/O',     val: '2.4 GB/s', bar: 80, color: 'bg-indigo-400' },
                      { label: 'Network',      val: '450 Mbps', bar: 56,  color: 'bg-purple-500' },
                      { label: 'Uptime',       val: '99.98%', bar: 100,  color: 'bg-green-500' },
                    ].map(({ label, val, bar, color }) => (
                      <div key={label}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-400">{label}</span>
                          <span className="text-slate-200 font-semibold">{val}</span>
                        </div>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div className={`h-full ${color} rounded-full`} style={{ width: `${bar}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-slate-700/50 pt-4 mt-2">
                    <div className="grid grid-cols-3 gap-3 text-center">
                      {[
                        { val: '< 1ms',   lab: 'Local Latency' },
                        { val: 'NVMe',    lab: 'Storage Type' },
                        { val: 'ECC',     lab: 'Memory Grade' },
                      ].map(({ val, lab }) => (
                        <div key={lab} className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/40">
                          <p className="text-blue-400 font-black text-base">{val}</p>
                          <p className="text-slate-500 text-xs mt-0.5">{lab}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Plans count badge */}
                  <div className="mt-4 flex items-center justify-between bg-blue-600/10 border border-blue-500/20 rounded-xl px-4 py-3">
                    <div>
                      <p className="text-white font-bold text-sm">9 Plans Available</p>
                      <p className="text-blue-300 text-xs mt-0.5">VPS HP One → Nine · From R159/mo</p>
                    </div>
                    <a href="#plans" className="text-blue-400 hover:text-blue-300 transition-colors">
                      <ArrowRight className="w-5 h-5" />
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
          <h2 className="text-3xl font-bold text-gray-900 mb-3">High Performance VPS Plans</h2>
          <p className="text-gray-500 max-w-xl mx-auto">From VPS HP One to Nine — choose the right power level for your application. All plans include ECC RAM, NVMe SSD storage, and unlimited traffic.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border shadow-sm overflow-hidden transition-all hover:shadow-lg ${
                plan.popular ? 'border-blue-500 shadow-blue-500/10' : 'border-gray-100'
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
          <p className="text-gray-500 max-w-xl mx-auto">Every High Performance VPS ships with the same enterprise-grade stack — only the resources change.</p>
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

      {/* ── CTA ────────────────────────────────────────────────── */}
      <div className="relative bg-slate-900 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Scale Your Infrastructure?</h2>
          <p className="text-slate-400 mb-8">Get your High Performance VPS running today. Need help picking the right plan? Our team is here.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#plans"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 transition-all"
            >
              Choose a Plan <ArrowRight className="w-5 h-5" />
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

export default HighPerformanceVPS;
