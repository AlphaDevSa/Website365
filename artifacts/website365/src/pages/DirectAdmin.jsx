import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import FAQ from '../components/FAQ';
import Button from '../components/Button';
import {
  Server, Zap, Shield, Cpu, ArrowRight, Gauge, Check,
  FolderOpen, Upload, Clock, Globe, Database, Mail,
  Lock, Filter, AtSign, RefreshCw, HardDrive, RotateCcw,
  Cloud, BarChart2, Code, Package, Key, ShieldCheck, Layers
} from 'lucide-react';
import PlanOrderModal from '../components/PlanOrderModal';

const DirectAdmin = () => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openOrderModal = (plan) => {
    setSelectedPlan(plan);
    setIsOrderOpen(true);
  };

  return (
    <>
      <PlanOrderModal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        plan={selectedPlan}
        formType="Web Hosting Order"
      />

      {/* Hero */}
      <div className="relative bg-slate-900 overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-slate-900 to-blue-900/20" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span>Lightweight & Blazing Fast</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Maximum Speed. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Minimal Overhead.</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Get the full power of your hosting without the bloat. DirectAdmin offers a clean, ultra-fast interface that consumes fewer resources, leaving more performance for your website.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button to="#plans" className="rounded-full px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/25 transition-all">
              View Plans <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button to="#features" variant="ghost" className="rounded-full px-8 py-4 text-lg font-semibold transition-all backdrop-blur-sm">
              View Features
            </Button>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Gauge className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Ultra-Efficient</h3>
              </div>
              <p className="text-slate-400 text-sm">Designed to be lightweight, ensuring your server resources go to your site, not the control panel.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Cost-Effective</h3>
              </div>
              <p className="text-slate-400 text-sm">Lower licensing costs mean we pass the savings directly to you without compromising on features.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-green-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Stable & Secure</h3>
              </div>
              <p className="text-slate-400 text-sm">Rock-solid stability with automatic updates and integrated security features to keep you safe.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Plans */}
      <Section id="plans">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Pricing, Powerful Hosting</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="500MB - DirectAdmin"
            price="R39.00"
            billingPeriod="Monthly"
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: '500MB - DirectAdmin', price: 'R39.00', billingPeriod: 'Monthly', category: 'DirectAdmin Hosting' })}
            features={["500MB Disk space", "3 Email Accounts", "1 MySQL Databases", "FTP Account"]}
          />
          <Card
            title="1GB - DirectAdmin"
            price="R45.00"
            billingPeriod="Monthly"
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: '1GB - DirectAdmin', price: 'R45.00', billingPeriod: 'Monthly', category: 'DirectAdmin Hosting' })}
            features={["1GB Disk space", "50 Email Accounts", "1 MySQL Databases", "FTP Account"]}
          />
          <Card
            title="2GB - DirectAdmin"
            price="R55.00"
            billingPeriod="Monthly"
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: '2GB - DirectAdmin', price: 'R55.00', billingPeriod: 'Monthly', category: 'DirectAdmin Hosting' })}
            features={["2GB Disk space", "75 Email Accounts", "2 MySQL Databases", "2 FTP Accounts"]}
          />
          <Card
            title="3GB - DirectAdmin"
            price="R65.00"
            billingPeriod="Monthly"
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: '3GB - DirectAdmin', price: 'R65.00', billingPeriod: 'Monthly', category: 'DirectAdmin Hosting' })}
            features={["3GB Disk space", "100 Email Accounts", "5 MySQL Databases", "5 FTP Accounts"]}
          />
          <Card
            title="4GB - DirectAdmin"
            price="R75.00"
            billingPeriod="Monthly"
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: '4GB - DirectAdmin', price: 'R75.00', billingPeriod: 'Monthly', category: 'DirectAdmin Hosting' })}
            features={["4GB Disk space", "150 Email Accounts", "20 MySQL Databases", "5 FTP Accounts"]}
          />
          <Card
            title="10GB - DirectAdmin"
            price="R80.00"
            billingPeriod="Monthly"
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: '10GB - DirectAdmin', price: 'R80.00', billingPeriod: 'Monthly', category: 'DirectAdmin Hosting' })}
            features={["10GB Disk space", "200 Email Accounts", "20 MySQL Databases", "5 FTP Accounts"]}
          />
          <Card
            title="20GB - DirectAdmin"
            price="R90.00"
            billingPeriod="Monthly"
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: '20GB - DirectAdmin', price: 'R90.00', billingPeriod: 'Monthly', category: 'DirectAdmin Hosting' })}
            features={["20GB Disk space", "200 Email Accounts", "20 MySQL Databases", "10 FTP Accounts"]}
          />
          <Card
            title="50GB - DirectAdmin"
            price="R120.00"
            billingPeriod="Monthly"
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: '50GB - DirectAdmin', price: 'R120.00', billingPeriod: 'Monthly', category: 'DirectAdmin Hosting' })}
            features={["50GB Disk Space", "200 Email Accounts", "20 MySQL Databases", "10 FTP Accounts"]}
          />
          <Card
            title="100GB - DirectAdmin"
            price="R150.00"
            billingPeriod="Monthly"
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: '100GB - DirectAdmin', price: 'R150.00', billingPeriod: 'Monthly', category: 'DirectAdmin Hosting' })}
            features={["100GB Disk Space", "200 Email Accounts", "20 MySQL Databases", "10 FTP Accounts"]}
          />
        </div>
      </Section>

      {/* Features Section */}
      <Section id="features" background="gray">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold mb-4">
            <Server className="w-4 h-4" />
            Everything Included
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Full-Featured DirectAdmin Hosting
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A clean, lightweight control panel packed with everything you need — without the overhead. Every plan includes these powerful tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Performance */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">Performance</h3>
            </div>
            <ul className="space-y-3">
              {[
                { icon: Server,    label: 'DirectAdmin Control Panel', desc: 'Lightweight — minimal resource use' },
                { icon: Layers,    label: 'LiteSpeed Web Server',       desc: 'Faster page loads out of the box' },
                { icon: Cloud,     label: 'SSD Disk Storage',           desc: 'Rapid read/write on all plans' },
                { icon: BarChart2, label: 'PHP 7.x – 8.x Support',      desc: 'Latest PHP versions available' },
              ].map(({ icon: Icon, label, desc }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{label}</p>
                    <p className="text-xs text-gray-400">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Security */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">Security</h3>
            </div>
            <ul className="space-y-3">
              {[
                { icon: Lock,        label: 'Free SSL Certificates',    desc: "Let's Encrypt auto-renew" },
                { icon: ShieldCheck, label: 'ModSecurity WAF',          desc: 'Web application firewall built-in' },
                { icon: Key,         label: 'Two-Factor Authentication', desc: 'Protect your admin login' },
                { icon: Filter,      label: 'Brute-Force Protection',   desc: 'Automatic IP blocking on attacks' },
              ].map(({ icon: Icon, label, desc }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{label}</p>
                    <p className="text-xs text-gray-400">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Management */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">Management</h3>
            </div>
            <ul className="space-y-3">
              {[
                { icon: FolderOpen, label: 'Built-in File Manager',    desc: 'Browse, edit & upload files' },
                { icon: Upload,     label: 'FTP / SFTP Access',        desc: 'Multiple FTP accounts supported' },
                { icon: Clock,      label: 'Cron Job Scheduler',       desc: 'Schedule automated tasks' },
                { icon: Globe,      label: 'DNS Management',           desc: 'Full zone control included' },
              ].map(({ icon: Icon, label, desc }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{label}</p>
                    <p className="text-xs text-gray-400">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">Email</h3>
            </div>
            <ul className="space-y-3">
              {[
                { icon: AtSign,    label: 'Professional Email Accounts', desc: 'you@yourdomain.co.za' },
                { icon: Mail,      label: 'Webmail Access',              desc: 'Access from any browser' },
                { icon: Filter,    label: 'SpamAssassin Filtering',      desc: 'Block junk before it arrives' },
                { icon: RefreshCw, label: 'Forwarders & Autoresponders', desc: 'Auto-route and reply to email' },
              ].map(({ icon: Icon, label, desc }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{label}</p>
                    <p className="text-xs text-gray-400">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Databases */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">Databases</h3>
            </div>
            <ul className="space-y-3">
              {[
                { icon: Database, label: 'MySQL / MariaDB Databases',  desc: 'phpMyAdmin included' },
                { icon: Code,     label: 'Remote DB Access',           desc: 'Connect from external apps' },
                { icon: HardDrive,label: 'Database Backups',           desc: 'Included in daily snapshot' },
                { icon: BarChart2,label: 'Resource Usage Monitor',     desc: 'Track disk & bandwidth live' },
              ].map(({ icon: Icon, label, desc }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{label}</p>
                    <p className="text-xs text-gray-400">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Apps & Backups */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">Apps & Backups</h3>
            </div>
            <ul className="space-y-3">
              {[
                { icon: Package,   label: 'Softaculous Installer',      desc: '400+ apps including WordPress' },
                { icon: Globe,     label: 'WordPress Ready',             desc: 'One-click install & management' },
                { icon: RotateCcw, label: 'One-Click Restore',           desc: 'Roll back files or databases' },
                { icon: Cloud,     label: 'Daily Automated Backups',     desc: 'Multiple restore points kept' },
              ].map(({ icon: Icon, label, desc }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{label}</p>
                    <p className="text-xs text-gray-400">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#plans"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full shadow-lg shadow-blue-500/25 transition-all text-base"
          >
            View Hosting Plans <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="gray">
        <FAQ items={[
          { question: "What is DirectAdmin?", answer: "DirectAdmin is a graphical web hosting control panel designed to make administration of websites easier." },
          { question: "Is DirectAdmin compatible with WordPress?", answer: "Yes, absolutely! You can install WordPress with one click using Softaculous within DirectAdmin." },
          { question: "Can I upgrade my plan later?", answer: "Yes, you can upgrade your plan at any time instantly." }
        ]} />
      </Section>
    </>
  );
};

export default DirectAdmin;
