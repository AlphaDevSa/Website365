import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import {
  CheckCircle, ArrowRight, LayoutGrid, Settings, ShieldCheck, Zap, Globe, Database, Rocket,
  FolderOpen, Mail, Lock, Upload, Clock, Code, Package, RotateCcw, HardDrive,
  Filter, AtSign, Key, Server, BarChart2, Layers, RefreshCw, Cloud
} from 'lucide-react';
import Button from '../components/Button';
import PlanOrderModal from '../components/PlanOrderModal';

const CPanel = () => {
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
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-orange-900/20" />
          <div className="absolute -top-40 -left-40 w-[50rem] h-[50rem] rounded-full bg-orange-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] rounded-full bg-blue-600/10 blur-3xl animate-pulse delay-1000" />
          
          {/* Abstract UI Pattern */}
          <div className="absolute right-0 top-1/4 w-1/3 h-1/2 opacity-[0.03] rotate-12">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-32 bg-white rounded-xl"></div>
              <div className="h-32 bg-white rounded-xl"></div>
              <div className="h-32 bg-white rounded-xl col-span-2"></div>
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-900/30 border border-orange-500/30 text-orange-300 text-sm font-medium mb-8 backdrop-blur-sm">
                <LayoutGrid className="w-4 h-4" />
                <span>The World's #1 Control Panel</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
                Control Your Web <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">With Confidence</span>
              </h1>

              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Experience the industry standard in web hosting. Powerful, intuitive, and feature-rich cPanel hosting designed for pros and beginners alike.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button to="#plans" className="rounded-full px-8 py-4 text-lg font-semibold bg-orange-600 hover:bg-orange-500 text-white shadow-lg hover:shadow-orange-500/25 transition-all">
                  Choose Your Plan <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button to="#features" variant="ghost" className="rounded-full px-8 py-4 text-lg font-semibold transition-all backdrop-blur-sm">
                  View Features
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-slate-400 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>CloudLinux OS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>LiteSpeed Elite</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>Imunify360</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              {/* Floating Feature Cards */}
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 shadow-2xl transform translate-y-8">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-4">
                    <Settings className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Easy Management</h3>
                  <p className="text-slate-400 text-sm">Manage files, databases, and emails with a few clicks.</p>
                </div>

                <div className="bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 shadow-2xl">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 mb-4">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Built-in Security</h3>
                  <p className="text-slate-400 text-sm">Free SSLs and virus scanning keep you safe.</p>
                </div>

                <div className="bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 shadow-2xl transform translate-y-8">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-4">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">One-Click Apps</h3>
                  <p className="text-slate-400 text-sm">Install WordPress, Joomla, and 400+ apps instantly.</p>
                </div>

                <div className="bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 shadow-2xl">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 mb-4">
                    <Database className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Daily Backups</h3>
                  <p className="text-slate-400 text-sm">Your data is backed up automatically every day.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section id="plans">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium cPanel Hosting</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Starter"
            price="R49"
            yearlyPrice="R559 / year (5% discount)"
            description="Great for starting out."
            ctaText="Get Starter"
            ctaOnClick={() => openOrderModal({ title: 'Starter', price: 'R49', yearlyPrice: 'R559', billingPeriod: 'Monthly', category: 'cPanel Hosting' })}
            features={[
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
              "SiteJet builder",
              "Free Basic Website bonus"
            ]}
          />
          <Card
            title="Growth"
            price="R79"
            yearlyPrice="R869 / year (8.33% discount)"
            description="Our most popular plan."
            ctaText="Get Growth"
            ctaOnClick={() => openOrderModal({ title: 'Growth', price: 'R79', yearlyPrice: 'R869', billingPeriod: 'Monthly', category: 'cPanel Hosting' })}
            popular={true}
            features={[
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
              "SiteJet builder",
              "Free Basic Website bonus"
            ]}
          />
          <Card
            title="Enterprise"
            price="R99"
            yearlyPrice="R10490 / year (12.5% discount)"
            description="Maximum resources for large sites."
            ctaText="Get Enterprise"
            ctaOnClick={() => openOrderModal({ title: 'Enterprise', price: 'R99', yearlyPrice: 'R10490', billingPeriod: 'Monthly', category: 'cPanel Hosting' })}
            features={[
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
              "SiteJet builder",
              "Free Basic Website bonus"
            ]}
          />
        </div>
      </Section>

      {/* ── cPanel Features ──────────────────────────────────── */}
      <Section id="features" background="gray">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-sm font-semibold mb-4">
            <LayoutGrid className="w-4 h-4" />
            Everything Included
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Full-Featured cPanel Hosting
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Every plan comes loaded with the tools you need to build, manage, and grow your web presence — no hidden extras.
          </p>
        </div>

        {/* Feature category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Performance */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">Performance</h3>
            </div>
            <ul className="space-y-3">
              {[
                { icon: Server,    label: 'LiteSpeed Elite Web Server',   desc: 'Up to 40× faster than Apache' },
                { icon: Layers,    label: 'CloudLinux OS',                desc: 'Isolated hosting environment' },
                { icon: Cloud,     label: 'SSD NVMe Storage',             desc: 'Ultra-fast read/write speeds' },
                { icon: BarChart2, label: 'HTTP/3 & QUIC Support',        desc: 'Next-gen protocol ready' },
              ].map(({ icon: Icon, label, desc }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
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
                { icon: ShieldCheck, label: 'Imunify360 Firewall',       desc: 'AI-powered malware protection' },
                { icon: Lock,        label: 'Free SSL Certificates',      desc: "Let's Encrypt auto-renew" },
                { icon: Key,         label: 'Two-Factor Authentication',  desc: 'Secure your cPanel login' },
                { icon: Filter,      label: 'Spam & Virus Filtering',     desc: 'Powered by SpamAssassin' },
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
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                <Settings className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">Management</h3>
            </div>
            <ul className="space-y-3">
              {[
                { icon: FolderOpen, label: 'Visual File Manager',         desc: 'Drag-and-drop file editing' },
                { icon: Upload,     label: 'FTP / SFTP Access',           desc: 'Unlimited FTP accounts' },
                { icon: Clock,      label: 'Cron Job Scheduler',          desc: 'Automate recurring tasks' },
                { icon: Globe,      label: 'Addon & Subdomains',          desc: 'Unlimited subdomains supported' },
              ].map(({ icon: Icon, label, desc }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{label}</p>
                    <p className="text-xs text-gray-400">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Apps & Development */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">Apps & Dev</h3>
            </div>
            <ul className="space-y-3">
              {[
                { icon: Package, label: 'Softaculous Auto Installer',   desc: '400+ apps in one click' },
                { icon: Rocket,  label: 'WordPress & WP Toolkit',       desc: 'Manage multiple WP sites' },
                { icon: Code,    label: 'PHP Version Selector',         desc: 'PHP 7.x – 8.x switchable' },
                { icon: Database,label: 'MySQL / MariaDB Databases',    desc: 'phpMyAdmin included' },
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
                { icon: RefreshCw, label: 'Email Autoresponders',        desc: 'Auto-reply when you\'re away' },
                { icon: Filter,    label: 'Email Forwarders & Lists',    desc: 'Route email with ease' },
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
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                <HardDrive className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">Backups</h3>
            </div>
            <ul className="space-y-3">
              {[
                { icon: HardDrive,  label: 'Daily Automated Backups',   desc: 'Multiple restore points kept' },
                { icon: RotateCcw,  label: 'One-Click Restore',         desc: 'Roll back in seconds' },
                { icon: Cloud,      label: 'Offsite Backup Storage',     desc: 'Data stored separately' },
                { icon: BarChart2,  label: 'Resource Usage Stats',       desc: 'Track bandwidth & disk live' },
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full shadow-lg shadow-orange-500/25 transition-all text-base"
          >
            Choose Your Plan <ArrowRight className="w-5 h-5" />
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
              <Zap className="w-4 h-4 text-yellow-300" />
              <span>Optimized for Performance</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              The Perfect Home for <br />
              <span className="text-blue-200">Your WordPress Site</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-xl">
              Experience blazing-fast speeds and rock-solid security. Our cPanel environment is fine-tuned specifically for WordPress, giving you the ultimate edge.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "1-Click Install", desc: "Get online in seconds", icon: Zap },
                { title: "Auto Updates", desc: "Stay secure automatically", icon: ShieldCheck },
                { title: "WP Toolkit", desc: "Manage sites with ease", icon: Settings },
                { title: "LiteSpeed", desc: "Superior caching built-in", icon: Rocket }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 group cursor-default">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-blue-200 group-hover:bg-blue-500/40 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{feature.title}</h4>
                    <p className="text-blue-200 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Main Visual */}
            <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-inner mb-6 transform hover:rotate-12 transition-transform duration-500">
                <img 
                  src="/images/productlogos/wordpresslogo.png" 
                  alt="WordPress Logo" 
                  className="w-24 h-auto" 
                  onError={(e) => e.target.src = 'https://s.w.org/style/images/about/WordPress-logotype-standard.png'} 
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">WordPress Ready</h3>
              <p className="text-blue-100 text-sm mb-6">Optimized PHP, MariaDB, and HTTP/3 support.</p>
              
              <div className="w-full bg-blue-900/40 rounded-2xl p-4 border border-white/5">
                <div className="flex items-center justify-between text-xs font-medium text-blue-300 mb-3 uppercase tracking-wider">
                  <span>Performance Score</span>
                  <span className="text-green-400">100/100</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-400 to-green-400 w-full rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                </div>
              </div>
            </div>
            
            {/* Decorative Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl animate-pulse delay-700" />
          </div>
        </div>
      </Section>
    </>
  );
};

export default CPanel;
