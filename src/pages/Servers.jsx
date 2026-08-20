import Section from '../components/Section';
import Card from '../components/Card';
import { Server, Cpu, Shield, ArrowRight, Zap, Database, Lock, Globe, Layers, Cloud, Terminal, HardDrive, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const Servers = () => {
  return (
    <>
      {/* Magnificent Hero */}
      <div className="relative bg-slate-900 overflow-hidden py-16 lg:py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900/20" />
          <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] rounded-full bg-blue-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-cyan-600/10 blur-3xl animate-pulse delay-700" />
          
          {/* Creative Pattern */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <Server className="w-4 h-4" />
            <span>High Performance Server Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Power. Control. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Reliability.</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Enterprise-grade infrastructure for your mission-critical applications. Scalable VPS solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button to="/contact" className="rounded-full px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/25 transition-all">
              Talk to an Expert <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button to="/servers/vps" variant="ghost" className="rounded-full px-8 py-4 text-lg font-semibold transition-all backdrop-blur-sm">
              View VPS Plans
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">NVMe Storage</h3>
              </div>
              <p className="text-slate-400 text-sm">Blazing fast read/write speeds for your most demanding applications.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Latest Hardware</h3>
              </div>
              <p className="text-slate-400 text-sm">Powered by the latest generation Intel and AMD processors.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">DDoS Protection</h3>
              </div>
              <p className="text-slate-400 text-sm">Advanced mitigation to keep your services online during attacks.</p>
            </div>
          </div>
        </div>
      </div>

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
              <li className="flex items-center gap-3">
                <Zap className="h-4 w-4 text-blue-500" /> KVM Virtualization
              </li>
              <li className="flex items-center gap-3">
                <HardDrive className="h-4 w-4 text-blue-500" /> Pure NVMe Storage
              </li>
              <li className="flex items-center gap-3">
                <Terminal className="h-4 w-4 text-blue-500" /> Full Root Access
              </li>
              <li className="flex items-center gap-3">
                <Layers className="h-4 w-4 text-blue-500" /> Instant Deployment
              </li>
            </ul>
            <Button to="/servers/vps" variant="primary" className="w-full group/btn">
              View VPS Plans <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
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
              <li className="flex items-center gap-3">
                <Cpu className="h-4 w-4 text-blue-400" /> Dedicated CPU Cores
              </li>
              <li className="flex items-center gap-3">
                <Database className="h-4 w-4 text-blue-400" /> 10Gbps Uplink
              </li>
              <li className="flex items-center gap-3">
                <Shield className="h-4 w-4 text-blue-400" /> DDoS Protection
              </li>
              <li className="flex items-center gap-3">
                <Lock className="h-4 w-4 text-blue-400" /> Isolated Environment
              </li>
            </ul>
            <Button to="/contact" className="w-full bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/10 group/btn">
              Request Quote <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
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
              <li className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-cyan-500" /> High Availability
              </li>
              <li className="flex items-center gap-3">
                <Layers className="h-4 w-4 text-cyan-500" /> Load Balancing
              </li>
              <li className="flex items-center gap-3">
                <Zap className="h-4 w-4 text-cyan-500" /> Auto-Scaling
              </li>
              <li className="flex items-center gap-3">
                <Shield className="h-4 w-4 text-cyan-500" /> Managed Security
              </li>
            </ul>
            <Button to="/contact" variant="ghost" className="w-full border-slate-700 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 group/btn">
              Contact Sales <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </Section>

      <Section background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Enterprise Grade Infrastructure</h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">Our servers are housed in Tier III+ data centers with redundant power, cooling, and network connectivity, ensuring your data is always safe and accessible. We use only enterprise-grade hardware to guarantee the performance your business demands.</p>
            <div className="flex flex-wrap gap-4">
              <Button to="/contact" className="rounded-full px-8 py-4 bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20">
                Contact Sales Team
              </Button>
              <Button to="https://wa.me/27836000152" variant="whatsapp" className="rounded-full px-8 py-4 shadow-sm group">
                 <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" /> WhatsApp Support
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-10 border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full -mr-20 -mt-20 transition-transform group-hover:scale-110 -z-0" />
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              <div>
                <div className="text-4xl font-black text-blue-600">99.9%</div>
                <div className="text-gray-900 font-bold mt-1 uppercase tracking-wider text-xs">Uptime</div>
                <div className="text-gray-500 text-sm mt-1">Network Reliability</div>
              </div>
              <div>
                <div className="text-4xl font-black text-blue-600">24/7</div>
                <div className="text-gray-900 font-bold mt-1 uppercase tracking-wider text-xs">Support</div>
                <div className="text-gray-500 text-sm mt-1">Technical Experts</div>
              </div>
              <div>
                <div className="text-4xl font-black text-blue-600">10Gbps</div>
                <div className="text-gray-900 font-bold mt-1 uppercase tracking-wider text-xs">Network</div>
                <div className="text-gray-500 text-sm mt-1">Ultra-Fast Uplinks</div>
              </div>
              <div>
                <div className="text-4xl font-black text-blue-600">Secure</div>
                <div className="text-gray-900 font-bold mt-1 uppercase tracking-wider text-xs">Certified</div>
                <div className="text-gray-500 text-sm mt-1">Tier III+ Facilities</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Servers;
