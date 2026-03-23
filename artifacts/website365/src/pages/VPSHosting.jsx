import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import FAQ from '../components/FAQ';
import VPSOrderModal from '../components/VPSOrderModal';
import { Link } from 'react-router-dom';
import {
  Server, HardDrive, Network, Shield, MapPin, Globe, Cpu, Zap, Lock,
  Check, ArrowRight, Terminal, Activity, MessageSquare, Database
} from 'lucide-react';

const VPSHosting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openOrderModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const budgetIncludes = [
    { icon: MapPin,   bg: 'bg-blue-50',   color: 'text-blue-600',   label: 'Digital Parks Africa',   desc: 'Samrand, South Africa — low latency for local users.' },
    { icon: HardDrive,bg: 'bg-cyan-50',   color: 'text-cyan-600',   label: 'SSD Storage',            desc: 'High-speed SSD drives powering every Budget VPS plan.' },
    { icon: Globe,    bg: 'bg-indigo-50', color: 'text-indigo-600', label: 'PTR Record Management',  desc: 'Full DNS control including reverse DNS records.' },
    { icon: Shield,   bg: 'bg-green-50',  color: 'text-green-600',  label: 'Full Root Access',       desc: 'Install any software with complete administrator control.' },
    { icon: Network,  bg: 'bg-purple-50', color: 'text-purple-600', label: 'NAP & JINX Peering',     desc: 'Reduced latency on local traffic for South African users.' },
    { icon: Terminal, bg: 'bg-orange-50', color: 'text-orange-600', label: 'Instant Deployment',     desc: 'Your VPS is ready within minutes after payment confirmation.' },
  ];

  const ryzenIncludes = [
    { icon: MapPin,   bg: 'bg-blue-50',   color: 'text-blue-600',   label: 'Digital Parks Africa',   desc: 'Hosted in Samrand, South Africa for low-latency local access.' },
    { icon: Globe,    bg: 'bg-indigo-50', color: 'text-indigo-600', label: 'PTR Record Management',  desc: 'Full DNS and reverse DNS control included.' },
    { icon: Shield,   bg: 'bg-green-50',  color: 'text-green-600',  label: 'Full Root Access',       desc: 'Complete administrator control over your server environment.' },
    { icon: Zap,      bg: 'bg-orange-50', color: 'text-orange-600', label: 'Up to 800 Mbps',         desc: 'High-throughput network for fast data transfer rates.' },
    { icon: Lock,     bg: 'bg-red-50',    color: 'text-red-600',    label: 'Self-Managed Firewall',  desc: 'Configure your own firewall rules for complete security control.' },
    { icon: HardDrive,bg: 'bg-cyan-50',   color: 'text-cyan-600',   label: '1 Free Backup Slot',     desc: 'One complimentary backup slot included with every Ryzen plan.' },
  ];

  return (
    <>
      <VPSOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        plan={selectedPlan}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900/25" />
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
          <div className="absolute bottom-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Text */}
          <div className="lg:w-1/2 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-8 backdrop-blur-sm">
              <Server className="w-4 h-4" />
              South African VPS Hosting
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">VPS</span> Hosting
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Full root access, guaranteed resources, and total control.
              Powered by enterprise hardware — hosted right here in South Africa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link
                to="#plans"
                onClick={(e) => { e.preventDefault(); document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full shadow-lg hover:shadow-blue-500/30 transition-all text-lg"
              >
                View Plans <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold rounded-full transition-all text-lg"
              >
                Talk to an Expert
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-slate-400 text-sm font-medium">
              <div className="flex items-center gap-2"><Check className="w-5 h-5 text-green-400" /> Instant Deployment</div>
              <div className="flex items-center gap-2"><Check className="w-5 h-5 text-green-400" /> 99.9% Uptime</div>
              <div className="flex items-center gap-2"><Check className="w-5 h-5 text-green-400" /> 24/7 Support</div>
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end z-10 w-full">
            <div className="relative w-full max-w-lg">
              <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/50 border-b border-slate-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-slate-500 text-xs font-mono">root@server:~</div>
                </div>
                <div className="p-6 space-y-4 font-mono text-sm">
                  <div className="flex">
                    <span className="text-green-400 mr-2">&#x27A1;</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-slate-300 ml-2">neofetch</span>
                  </div>
                  <div className="text-slate-300 pl-4 space-y-1">
                    <p>OS: <span className="text-white">Ubuntu 22.04 LTS</span></p>
                    <p>Host: <span className="text-white">KVM Virtual Machine</span></p>
                    <p>Kernel: <span className="text-white">5.15.0-76-generic</span></p>
                    <p>Uptime: <span className="text-white">128 days, 4 hours</span></p>
                    <p>CPU: <span className="text-white">AMD EPYC 7003 (4) @ 3.5GHz</span></p>
                    <p>Memory: <span className="text-white">8192MiB / 16384MiB</span></p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-2">&#x27A1;</span>
                    <span className="text-blue-400">~</span>
                    <span className="w-2 h-4 bg-slate-400 ml-2 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Budget VPS Plans ─────────────────────────────────── */}
      <Section id="plans">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-4">
            <Database className="w-4 h-4" />
            Budget Virtual Servers
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Budget VPS Plans</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">High-performance SSD VPS with full root access — starting from R69/month.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card title="Silver"    price="R69.00"  billingPeriod="Monthly" icon={Server} description="Perfect for starters"       center={true} features={["1 vCore CPU","1 GB RAM","20 GB SSD Storage","200 GB Monthly Traffic"]}          ctaText="Order Now" ctaOnClick={() => openOrderModal({ title: 'Silver', price: 'R69.00' })} />
          <Card title="Palladium" price="R129.00" billingPeriod="Monthly" icon={Server} description="For growing sites"           center={true} features={["2 vCore CPU","2 GB RAM","40 GB SSD Storage","400 GB Monthly Traffic"]}          ctaText="Order Now" ctaOnClick={() => openOrderModal({ title: 'Palladium', price: 'R129.00' })} />
          <Card title="Osmium"    price="R259.00" billingPeriod="Monthly" icon={Server} description="Best value for business"    center={true} features={["4 vCore CPU","4 GB RAM","80 GB SSD Storage","800 GB Monthly Traffic"]}          ctaText="Order Now" ctaOnClick={() => openOrderModal({ title: 'Osmium', price: 'R259.00' })} popular={true} />
          <Card title="Iridium"   price="R379.00" billingPeriod="Monthly" icon={Server} description="Maximum performance"        center={true} features={["6 vCore CPU","6 GB RAM","120 GB SSD Storage","1.2 TB Monthly Traffic"]}         ctaText="Order Now" ctaOnClick={() => openOrderModal({ title: 'Iridium', price: 'R379.00' })} />
        </div>

        {/* Budget Included Features */}
        <div className="text-center mt-16 mb-10">
          <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Included with all Budget Plans</h3>
          <p className="text-gray-500">Standard features available on every Budget VPS package.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {budgetIncludes.map(({ icon: Icon, bg, color, label, desc }) => (
            <div key={label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow flex gap-4 items-start">
              <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center ${color} shrink-0`}>
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-gray-900 mb-0.5">{label}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── AMD Ryzen VPS ─────────────────────────────────────── */}
      <Section background="gray">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold mb-4">
            <Cpu className="w-4 h-4" />
            AMD Ryzen VPS Servers
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            South Africa's Fastest VPS Servers
          </h2>
          <p className="text-lg font-semibold text-blue-600 mb-3">Powered by AMD Ryzen 9 9900X</p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Gen 5 NVMe storage and unlimited bandwidth — ideal for game servers, high-traffic databases and intensive workloads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-14">
          <Card
            title="Ryzen VPS Silver"
            price="R195.00"
            billingPeriod="Monthly"
            icon={Cpu}
            description="Starting from"
            center={true}
            features={["2 CPU vCores","4 GB DDR5 RAM","50 GB NVMe Gen 5 Storage","Unlimited Bandwidth","Up to 800 Mbps","1 Free Backup Slot","Subject to AUP"]}
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: 'Ryzen VPS Silver', price: 'R195.00' })}
          />
          <Card
            title="Windows Ryzen VPS Silver"
            price="R354.00"
            billingPeriod="Monthly"
            icon={Cpu}
            description="Starting from"
            center={true}
            features={["2 CPU vCores","4 GB DDR5 RAM","50 GB NVMe Gen 5 Storage","Unlimited Bandwidth","Up to 800 Mbps","1 Free Backup Slot","Subject to AUP"]}
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: 'Windows Ryzen VPS Silver', price: 'R354.00' })}
          />
        </div>

        {/* Ryzen Included Features */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Included with every AMD Ryzen VPS</h3>
          <p className="text-gray-500">Everything you need from day one — no hidden extras.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ryzenIncludes.map(({ icon: Icon, bg, color, label, desc }) => (
            <div key={label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow flex gap-4 items-start">
              <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center ${color} shrink-0`}>
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-gray-900 mb-0.5">{label}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">Everything you need to know before spinning up your VPS.</p>
        </div>
        <FAQ items={[
          { question: "What operating systems are available?", answer: "We offer Ubuntu, CentOS, Debian, AlmaLinux, and Rocky Linux. Windows Server is also available on selected plans." },
          { question: "Where are your servers located?", answer: "Our servers are hosted at the Digital Parks Africa data centre in Samrand, South Africa, ensuring low latency for local users." },
          { question: "What is the difference between Budget and Ryzen VPS?", answer: "Budget VPS uses enterprise Intel Xeon processors suitable for general workloads. Ryzen VPS uses AMD Ryzen 9 9900X processors with Gen 5 NVMe storage — ideal for game servers, high-traffic databases and compilation tasks." },
          { question: "Do I get full root access?", answer: "Yes. Every VPS plan includes full root (administrator) access, giving you complete control to install and configure any software." },
          { question: "Can I upgrade my plan later?", answer: "Absolutely. You can scale CPU, RAM and storage instantly through our client area without any data loss." },
          { question: "Are backups included?", answer: "AMD Ryzen plans include one free backup slot. For Budget plans, we recommend configuring your own remote backups, though disaster recovery snapshots are maintained." },
          { question: "How long does provisioning take?", answer: "Most VPS orders are provisioned automatically and are ready within minutes after payment confirmation." },
        ]} />
      </Section>

      {/* ── Bottom CTA ─────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[60rem] h-[20rem] rounded-full bg-blue-600/10 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-6">
            <MessageSquare className="w-4 h-4" />
            Need Help Choosing?
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Not sure which VPS is right for you?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Our team will help you pick the right plan for your workload and get you up and running fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full shadow-lg shadow-blue-500/25 transition-all text-base"
            >
              Talk to an Expert <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="#plans"
              onClick={(e) => { e.preventDefault(); document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold rounded-full transition-all text-base"
            >
              View Plans
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default VPSHosting;
