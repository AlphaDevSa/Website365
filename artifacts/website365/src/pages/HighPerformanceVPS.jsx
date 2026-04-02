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
      <div className="relative bg-slate-900 overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900/25" />
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
          <div className="absolute bottom-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-8 backdrop-blur-sm">
            <Server className="w-4 h-4" />
            High Performance VPS
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-none">
            Maximum Speed.<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Unmatched Control.
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            High Performance VPS servers with ECC RAM, NVMe SSD storage, and unlimited traffic — scaled from entry-level to enterprise workloads.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#plans"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/25 transition-all"
            >
              View Plans <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white transition-all"
            >
              Talk to an Expert
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { val: 'ECC RAM',    lab: 'Error-correcting Memory' },
              { val: 'NVMe SSD',   lab: 'Ultra-fast Storage' },
              { val: 'Unlimited',  lab: 'Traffic Included' },
              { val: '9 Plans',    lab: 'One through Nine' },
            ].map(({ val, lab }) => (
              <div key={lab} className="bg-slate-800/60 border border-slate-700/50 rounded-xl px-4 py-3 text-center">
                <p className="text-lg font-extrabold text-blue-400">{val}</p>
                <p className="text-xs text-slate-400 mt-0.5">{lab}</p>
              </div>
            ))}
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
