import React from 'react';
import Section from '../components/Section';
import {
  Server, Cpu, Shield, ArrowRight, Zap, Database, Lock, Globe, Layers,
  Cloud, Terminal, HardDrive, MessageCircle, MapPin, Activity, ShieldCheck,
  Gauge, Network, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Servers = () => {
  const features = [
    { icon: Zap,      bg: 'bg-blue-50',   color: 'text-blue-600',   label: 'NVMe Storage',        desc: 'Gen 4 and Gen 5 NVMe drives for blazing fast read/write on every plan.' },
    { icon: Cpu,      bg: 'bg-cyan-50',   color: 'text-cyan-600',   label: 'Latest Hardware',     desc: 'Powered by Intel Xeon and AMD EPYC processors — enterprise grade, every server.' },
    { icon: Shield,   bg: 'bg-indigo-50', color: 'text-indigo-600', label: 'DDoS Protection',     desc: 'Advanced traffic mitigation to keep your services online during volumetric attacks.' },
    { icon: MapPin,   bg: 'bg-green-50',  color: 'text-green-600',  label: 'SA Data Centre',      desc: 'Hosted at Digital Parks Africa in Samrand — low latency for South African users.' },
    { icon: Activity, bg: 'bg-orange-50', color: 'text-orange-600', label: '99.9% Uptime SLA',    desc: 'Redundant power, cooling and network with a guaranteed uptime commitment.' },
    { icon: Network,  bg: 'bg-purple-50', color: 'text-purple-600', label: '10 Gbps Uplinks',     desc: 'High-throughput network connectivity with NAP and JINX peering for local speed.' },
  ];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900/25" />
          <div className="absolute top-1/4 left-1/4 w-[50rem] h-[50rem] rounded-full bg-blue-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-cyan-600/10 blur-3xl animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-8 backdrop-blur-sm">
            <Server className="w-4 h-4" />
            High Performance Server Solutions
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-none">
            Power. Control.<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Reliability.
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Enterprise-grade infrastructure for your mission-critical applications. VPS, bare metal,
            and cloud clusters — all hosted in South Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/servers/vps"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/25 transition-all"
            >
              View VPS Plans <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white transition-all"
            >
              Talk to an Expert
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: '99.9%',   label: 'Uptime SLA' },
              { value: '10Gbps',  label: 'Network Uplinks' },
              { value: '24/7',    label: 'Tech Support' },
              { value: 'Tier III+', label: 'Data Centre' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl px-6 py-5">
                <p className="text-2xl font-extrabold text-white mb-1">{value}</p>
                <p className="text-slate-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Infrastructure Features ───────────────────────────── */}
      <Section background="gray">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            Enterprise Infrastructure
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Built for Demanding Workloads
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Every server runs on enterprise hardware in a Tier III+ data centre — with redundant power, cooling and network connectivity.
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

      {/* ── Server Products (dark) ───────────────────────────── */}
      <Section id="plans" background="dark" className="overflow-hidden">
        <div className="relative mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl tracking-tight">Enterprise Server Solutions</h2>
          <p className="mx-auto max-w-2xl text-slate-400 text-lg">Scalable, high-performance infrastructure tailored for your mission-critical applications.</p>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] -z-10" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Cloud VPS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-slate-800/50 shadow-xl"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
              <Database className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">Cloud VPS</h3>
            <p className="mb-8 text-slate-400">Flexible, scalable virtual private servers with full root access and dedicated resources.</p>
            <ul className="mb-10 flex-1 space-y-4 text-sm text-slate-300">
              <li className="flex items-center gap-3"><Zap className="h-4 w-4 text-blue-500" /> KVM Virtualization</li>
              <li className="flex items-center gap-3"><HardDrive className="h-4 w-4 text-blue-500" /> Pure NVMe Storage</li>
              <li className="flex items-center gap-3"><Terminal className="h-4 w-4 text-blue-500" /> Full Root Access</li>
              <li className="flex items-center gap-3"><Layers className="h-4 w-4 text-blue-500" /> Instant Deployment</li>
            </ul>
            <Link
              to="/servers/vps"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl px-5 py-3 transition-all"
            >
              View VPS Plans <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Bare Metal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col rounded-2xl border border-blue-500/50 bg-slate-900/80 p-8 backdrop-blur-sm ring-1 ring-blue-500/30 transition-all shadow-2xl shadow-blue-500/10"
          >
            <div className="absolute -top-3 right-8 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-600/20">
              Raw Power
            </div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xl shadow-blue-600/20 transition-all">
              <Server className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">Bare Metal</h3>
            <p className="mb-8 text-slate-400">Dedicated physical servers for workloads that require uncompromising performance.</p>
            <ul className="mb-10 flex-1 space-y-4 text-sm text-slate-300">
              <li className="flex items-center gap-3"><Cpu className="h-4 w-4 text-blue-400" /> Dedicated CPU Cores</li>
              <li className="flex items-center gap-3"><Database className="h-4 w-4 text-blue-400" /> 10Gbps Uplink</li>
              <li className="flex items-center gap-3"><Shield className="h-4 w-4 text-blue-400" /> DDoS Protection</li>
              <li className="flex items-center gap-3"><Lock className="h-4 w-4 text-blue-400" /> Isolated Environment</li>
            </ul>
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl px-5 py-3 transition-all"
            >
              Request Quote <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Cloud Clusters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-slate-800/50 shadow-xl"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-inner">
              <Cloud className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">Cloud Clusters</h3>
            <p className="mb-8 text-slate-400">Highly available multi-node clusters with automatic failover and load balancing.</p>
            <ul className="mb-10 flex-1 space-y-4 text-sm text-slate-300">
              <li className="flex items-center gap-3"><Globe className="h-4 w-4 text-cyan-500" /> High Availability</li>
              <li className="flex items-center gap-3"><Layers className="h-4 w-4 text-cyan-500" /> Load Balancing</li>
              <li className="flex items-center gap-3"><Zap className="h-4 w-4 text-cyan-500" /> Auto-Scaling</li>
              <li className="flex items-center gap-3"><Shield className="h-4 w-4 text-cyan-500" /> Managed Security</li>
            </ul>
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 font-semibold rounded-xl px-5 py-3 transition-all"
            >
              Contact Sales <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* ── Bottom CTA ─────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[60rem] h-[20rem] rounded-full bg-blue-600/10 blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              Enterprise-grade infrastructure, SA-hosted
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Our servers are housed in Tier III+ data centres with redundant power, cooling and network connectivity.
              We use only enterprise-grade hardware to guarantee the performance your business demands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full shadow-lg shadow-blue-600/20 transition-all"
              >
                Contact Sales Team <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/27836000152"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold rounded-full transition-all"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Support
              </a>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-10 grid grid-cols-2 gap-8">
            {[
              { value: '99.9%',   sub: 'Uptime',    desc: 'Network Reliability' },
              { value: '24/7',    sub: 'Support',   desc: 'Technical Experts' },
              { value: '10Gbps',  sub: 'Network',   desc: 'Ultra-Fast Uplinks' },
              { value: 'Tier III+', sub: 'Certified', desc: 'Data Centre Facilities' },
            ].map(({ value, sub, desc }) => (
              <div key={sub}>
                <p className="text-3xl font-black text-blue-400">{value}</p>
                <p className="text-white font-bold text-xs uppercase tracking-wider mt-1">{sub}</p>
                <p className="text-slate-400 text-sm mt-0.5">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Servers;
