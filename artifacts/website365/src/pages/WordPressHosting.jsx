import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import Button from '../components/Button';
import {
  CheckCircle, Zap, Shield, Database, Layout, Smartphone, Globe, ArrowRight, Star,
  Server, FolderOpen, Upload, Clock, Mail, Lock, Filter, AtSign, RefreshCw,
  HardDrive, RotateCcw, Cloud, BarChart2, Code, Package, Key, ShieldCheck,
  Layers, Settings
} from 'lucide-react';
import PlanOrderModal from '../components/PlanOrderModal';

const WordPressHosting = () => {
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

      {/* Magnificent Hero */}
      <div className="relative bg-slate-900 overflow-hidden py-16 lg:py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900/30" />
          <div className="absolute -top-40 right-0 w-[50rem] h-[50rem] rounded-full bg-blue-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 -left-20 w-[40rem] h-[40rem] rounded-full bg-indigo-600/10 blur-3xl animate-pulse delay-700" />
          
          {/* WordPress Logo Watermark */}
          <div className="absolute right-10 top-1/4 opacity-[0.03] rotate-12 pointer-events-none">
             <svg className="w-96 h-96" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 0C5.41 0 .04 5.37.04 12c0 5.09 3.2 9.44 7.74 11.23-.23-.88-.43-2.24-.09-3.21l1.72-6.52s-.43-.87-.43-2.15c0-2.02 1.17-3.52 2.62-3.52 1.24 0 1.83.93 1.83 2.05 0 1.25-.8 3.12-1.21 4.85-.34 1.45.73 2.63 2.16 2.63 2.59 0 4.58-2.73 4.58-6.66 0-3.48-2.5-5.91-6.07-5.91-4.42 0-7.02 3.31-7.02 6.74 0 1.33.51 2.76 1.15 3.54.13.15.15.29.11.44l-.43 1.77c-.07.28-.23.34-.53.21-1.97-.92-3.2-3.8-3.2-6.11 0-4.97 3.61-9.52 10.41-9.52 5.46 0 9.71 3.89 9.71 9.08 0 5.42-3.41 9.78-8.15 9.78-1.59 0-3.09-.83-3.6-1.81l-.98 3.73c-.35 1.35-1.31 3.04-1.95 4.07 1.46.43 3.01.66 4.62.66 6.63 0 12-5.37 12-12C24.04 5.37 18.67 0 12.04 0z"/></svg>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>Fully Managed WordPress Hosting</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Build Better. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Launch Faster.</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            The perfect environment for your WordPress site. Pre-configured with LiteSpeed caching, enhanced security, and automatic updates for ultimate peace of mind.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button to="#plans" className="rounded-full px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/25 transition-all">
              See WordPress Plans <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button to="#features" variant="ghost" className="rounded-full px-8 py-4 text-lg font-semibold transition-all backdrop-blur-sm">
              View Features
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">20x Faster</h3>
              </div>
              <p className="text-slate-400 text-sm">LiteSpeed Cache comes pre-installed to make your site fly.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <Layout className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">WP Toolkit</h3>
              </div>
              <p className="text-slate-400 text-sm">Clone, stage, and update your site with a single click.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-green-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Secure</h3>
              </div>
              <p className="text-slate-400 text-sm">Hardened security rules specifically for WordPress sites.</p>
            </div>
          </div>
        </div>
      </div>

      <Section id="plans">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">WordPress Hosting Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose the perfect plan for your WordPress journey. All plans include free SSL, LiteSpeed caching, and 24/7 support.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="WP Starter"
            price="R49"
            yearlyPrice="R559 / year (5% discount)"
            description="Perfect for your first WordPress site."
            ctaText="Get WP Starter"
            ctaOnClick={() => openOrderModal({ title: 'WP Starter', price: 'R49', yearlyPrice: 'R559', billingPeriod: 'Monthly', category: 'WordPress Hosting' })}
            features={[
              "1 WordPress website",
              "Unlimited disk space",
              "Unlimited bandwidth",
              "Unlimited subdomains",
              "10 email accounts",
              "Softaculous auto installer",
              "Free SSL certificate",
              "CloudLinux OS",
              "LiteSpeed Elite",
              "WordPress",
              "cPanel control panel",
              "SiteJet builder"
            ]}
          />
          <Card
            title="WP Growth"
            price="R79"
            yearlyPrice="R869 / year (8.33% discount)"
            description="More power for growing sites."
            ctaText="Get WP Growth"
            ctaOnClick={() => openOrderModal({ title: 'WP Growth', price: 'R79', yearlyPrice: 'R869', billingPeriod: 'Monthly', category: 'WordPress Hosting' })}
            popular={true}
            features={[
              "3 WordPress websites",
              "Unlimited disk space",
              "Unlimited bandwidth",
              "Unlimited subdomains",
              "50 email accounts",
              "Softaculous auto installer",
              "Free SSL certificate",
              "CloudLinux OS",
              "LiteSpeed Elite",
              "WordPress",
              "cPanel control panel",
              "SiteJet builder"
            ]}
          />
          <Card
            title="WP Power"
            price="R999"
            yearlyPrice="R10490 / year (12.5% discount)"
            description="Ultimate performance for professionals."
            ctaText="Get WP Power"
            ctaOnClick={() => openOrderModal({ title: 'WP Power', price: 'R999', yearlyPrice: 'R10490', billingPeriod: 'Monthly', category: 'WordPress Hosting' })}
            features={[
              "5 WordPress websites",
              "Unlimited disk space",
              "Unlimited bandwidth",
              "Unlimited subdomains",
              "1000 email accounts",
              "Softaculous auto installer",
              "Free SSL certificate",
              "CloudLinux OS",
              "LiteSpeed Elite",
              "WordPress",
              "cPanel control panel",
              "SiteJet builder"
            ]}
          />
        </div>
      </Section>

      {/* ── WordPress Features ───────────────────────────────── */}
      <Section id="features" background="gray">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold mb-4">
            <Package className="w-4 h-4" />
            Everything Included
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Built for WordPress. Built to Perform.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Every plan is pre-configured with the tools and technology your WordPress site needs to load fast, stay secure, and scale effortlessly.
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
                { icon: Zap,      label: 'LiteSpeed Elite Web Server', desc: 'Up to 20× faster than standard hosting' },
                { icon: Layers,   label: 'CloudLinux OS',              desc: 'Isolated, stable hosting environment' },
                { icon: Cloud,    label: 'SSD NVMe Storage',           desc: 'Ultra-fast read/write for every plan' },
                { icon: BarChart2,label: 'HTTP/3 & QUIC Support',      desc: 'Next-gen protocol for faster loads' },
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

          {/* WordPress Tools */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">WordPress Tools</h3>
            </div>
            <ul className="space-y-3">
              {[
                { icon: Layout,   label: 'WP Toolkit',              desc: 'Manage, clone & stage WP sites' },
                { icon: Package,  label: 'One-Click Installer',     desc: 'WordPress up in minutes via Softaculous' },
                { icon: RefreshCw,label: 'Automatic WP Updates',    desc: 'Core, plugin & theme updates managed' },
                { icon: Globe,    label: 'SiteJet Website Builder', desc: 'Drag-and-drop builder included free' },
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
                { icon: ShieldCheck, label: 'Imunify360 Protection',    desc: 'AI malware & intrusion prevention' },
                { icon: Lock,        label: 'Free SSL Certificates',     desc: "Let's Encrypt auto-renew for all domains" },
                { icon: Shield,      label: 'WP-Specific Firewall Rules',desc: 'Hardened against WP attack vectors' },
                { icon: Key,         label: 'Two-Factor Authentication', desc: 'Protect your cPanel login' },
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
                <Settings className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">Management</h3>
            </div>
            <ul className="space-y-3">
              {[
                { icon: Server,     label: 'cPanel Control Panel',   desc: 'Industry-standard hosting management' },
                { icon: FolderOpen, label: 'Visual File Manager',    desc: 'Browse, edit & upload with ease' },
                { icon: Upload,     label: 'FTP / SFTP Access',      desc: 'Unlimited FTP accounts' },
                { icon: Clock,      label: 'Cron Job Scheduler',     desc: 'Automate recurring WP tasks' },
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
                { icon: Mail,      label: 'Webmail Access',              desc: 'Roundcube & Horde included' },
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

          {/* Backups */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                <HardDrive className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">Backups</h3>
            </div>
            <ul className="space-y-3">
              {[
                { icon: HardDrive,  label: 'Daily Automated Backups',  desc: 'Multiple restore points kept' },
                { icon: RotateCcw,  label: 'One-Click Restore',         desc: 'Roll back your site in seconds' },
                { icon: Cloud,      label: 'Offsite Backup Storage',    desc: 'Data stored safely off-server' },
                { icon: Database,   label: 'MySQL Database Backups',    desc: 'Database snapshots included' },
              ].map(({ icon: Icon, label, desc }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
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
            Choose a WordPress Plan <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </Section>

      <Section background="blue" className="relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/30 border border-blue-400/30 text-blue-100 text-sm font-medium mb-6 backdrop-blur-sm">
              <Star className="w-4 h-4 text-yellow-300" />
              <span>Premium WordPress Experience</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Why Our WordPress <br />
              <span className="text-blue-200">Hosting is Different</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-xl">
              We've engineered the ultimate WordPress environment. From server-level caching to hardened security, every detail is optimized for your success.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "LiteSpeed Caching", desc: "Blazing fast load times for every visitor.", icon: Zap },
                { title: "Hardened Security", desc: "Proactive defense against WordPress-specific attacks.", icon: Shield },
                { title: "WP Toolkit", desc: "Effortless staging, cloning, and site management.", icon: Layout }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-5 group cursor-default">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-blue-200 group-hover:bg-blue-500/40 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">{feature.title}</h4>
                    <p className="text-blue-200 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            {/* Interactive Visual Card */}
            <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 shadow-2xl flex flex-col items-center text-center max-w-sm w-full">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
                <div className="relative w-36 h-36 bg-white rounded-full flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/images/productlogos/wordpresslogo.png" 
                    alt="WordPress Logo" 
                    className="w-24 h-auto" 
                    onError={(e) => e.target.src = 'https://s.w.org/style/images/about/WordPress-logotype-standard.png'} 
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">100% Optimized</h3>
              <p className="text-blue-100 text-sm mb-8">Built on enterprise-grade NVMe architecture for maximum reliability.</p>
              
              <div className="w-full space-y-4">
                <div className="bg-blue-900/40 rounded-2xl p-5 border border-white/5 text-left">
                  <div className="flex items-center justify-between text-xs font-bold text-blue-300 mb-2 uppercase tracking-tighter">
                    <span>Server Uptime</span>
                    <span className="text-green-400">99.9%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-green-400 w-[99.9%] rounded-full shadow-[0_0_15px_rgba(74,222,128,0.4)]" />
                  </div>
                </div>
                
                <div className="bg-blue-900/40 rounded-2xl p-5 border border-white/5 text-left">
                  <div className="flex items-center justify-between text-xs font-bold text-blue-300 mb-2 uppercase tracking-tighter">
                    <span>Loading Speed</span>
                    <span className="text-blue-400">&lt; 0.5s</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 w-[95%] rounded-full shadow-[0_0_15px_rgba(34,211,238,0.4)]" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Powerful features included with every WordPress plan.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow border border-gray-100">
            <Zap className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">LiteSpeed Speed</h3>
            <p className="text-gray-600">Up to 20x faster than standard hosting with server-level caching.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow border border-gray-100">
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Imunify360 Security</h3>
            <p className="text-gray-600">Proactive defense against malware, attacks, and vulnerabilities.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow border border-gray-100">
            <Layout className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">WP Toolkit</h3>
            <p className="text-gray-600">Clone, stage, and update your WordPress sites with a single click.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow border border-gray-100">
            <Database className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Daily Backups</h3>
            <p className="text-gray-600">Rest easy knowing your data is backed up automatically every day.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow border border-gray-100">
            <Smartphone className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Mobile Optimized</h3>
            <p className="text-gray-600">Servers tuned to deliver your content fast to mobile devices.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow border border-gray-100">
            <Globe className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Free Domain</h3>
            <p className="text-gray-600">Get a free .co.za domain registration on annual plans.</p>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <FAQ items={[
          { question: "Is WordPress pre-installed?", answer: "You can install WordPress in seconds using our Softaculous auto-installer, or we can help you set it up." },
          { question: "Can I migrate my existing WordPress site?", answer: "Yes! We offer free migration assistance to move your site from your current host to us." },
          { question: "What is LiteSpeed?", answer: "LiteSpeed is a high-performance web server that is fully compatible with Apache but much faster. It includes a powerful cache engine for WordPress." },
          { question: "How many visitors can I handle?", answer: "Our plans are designed to handle thousands of visitors. If you outgrow your plan, upgrading is instant." },
          { question: "Do you provide SSL certificates?", answer: "Yes, unlimited free Let's Encrypt SSL certificates are included for all your domains and subdomains." }
        ]} />
      </Section>

      <Section background="white" className="pt-0">
        <CTASection 
          title="Ready to launch your WordPress site?"
          description="Join thousands of satisfied customers hosting with Website365."
          buttonText="Get Started Now"
          buttonLink="#plans"
        />
      </Section>
    </>
  );
};

export default WordPressHosting;
