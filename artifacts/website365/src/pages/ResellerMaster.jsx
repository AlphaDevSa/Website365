import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import {
  Crown, Layers, Server, Globe, ArrowRight, ShieldCheck, Zap, CheckCircle,
  Users, Tag, Lock, Key, Filter, HardDrive, RotateCcw, Cloud,
  Database, Code, Package, BarChart2, Building, Network,
  ChevronDown, DollarSign, TrendingUp, User, Star
} from 'lucide-react';
import Button from '../components/Button';
import FAQ from '../components/FAQ';
import PlanOrderModal from '../components/PlanOrderModal';

const ResellerMaster = () => {
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
        formType="Reseller Hosting Order"
      />

      {/* Magnificent Hero */}
      <div className="relative bg-slate-900 overflow-hidden py-16 lg:py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-yellow-900/20" />
          <div className="absolute -top-40 left-1/3 w-[50rem] h-[50rem] rounded-full bg-yellow-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[60rem] h-[60rem] rounded-full bg-purple-600/10 blur-3xl animate-pulse delay-1000" />
          
          {/* Hexagon Pattern */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-900/30 border border-yellow-500/30 text-yellow-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <Crown className="w-4 h-4" />
            <span>The Ultimate Hosting Tier</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Build Your Hosting <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-200">Empire.</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Take total command. Sell both standard hosting AND reseller accounts. Create a multi-tier hosting business with Master-level WHM privileges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button to="#plans" className="rounded-full px-8 py-4 text-lg font-semibold bg-yellow-600 hover:bg-yellow-500 text-white shadow-lg hover:shadow-yellow-500/25 transition-all">
              View Master Plans <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button to="#features" variant="ghost" className="rounded-full px-8 py-4 text-lg font-semibold transition-all backdrop-blur-sm">
              View Features
            </Button>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-yellow-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Multi-Tier Sales</h3>
              </div>
              <p className="text-slate-400 text-sm">Sell reseller packages to others, who can then sell shared hosting. Double your revenue streams.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <Crown className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Root-Level Tools</h3>
              </div>
              <p className="text-slate-400 text-sm">Access powerful WHM tools normally reserved for server owners, without the server management headache.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Massive Resources</h3>
              </div>
              <p className="text-slate-400 text-sm">Huge disk space and bandwidth allocations designed to support hundreds of sub-accounts.</p>
            </div>
          </div>
        </div>
      </div>

      <Section id="plans">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Master Reseller Plans</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Master Reseller 1"
            price="R325"
            yearlyPrice="R3705 / year (5% discount)"
            description="Start your master reseller business."
            ctaText="Get Master Reseller 1"
            ctaOnClick={() => openOrderModal({ title: 'Master Reseller 1', price: 'R325', yearlyPrice: 'R3705', billingPeriod: 'Monthly', category: 'Master Reseller Hosting' })}
            features={[
              "5 WHM accounts",
              "500 cPanel accounts",
              "Unlimited disk space",
              "Unlimited bandwidth",
              "Unlimited email accounts",
              "100% white label and branding",
              "Free private nameservers",
              "Softaculous auto installer",
              "Free SSL certificate",
              "CloudLinux OS",
              "LiteSpeed Elite",
              "WordPress",
              "cPanel/WHM panel",
              "SiteJet builder"
            ]}
          />
          <Card
            title="Master Reseller 2"
            price="R425"
            yearlyPrice="R4675 / year (8.33% discount)"
            description="Our most popular master reseller plan."
            ctaText="Get Master Reseller 2"
            ctaOnClick={() => openOrderModal({ title: 'Master Reseller 2', price: 'R425', yearlyPrice: 'R4675', billingPeriod: 'Monthly', category: 'Master Reseller Hosting' })}
            popular={true}
            features={[
              "10 WHM accounts",
              "1000 cPanel accounts",
              "Unlimited disk space",
              "Unlimited bandwidth",
              "Unlimited email accounts",
              "100% white label and branding",
              "Free private nameservers",
              "Softaculous auto installer",
              "Free SSL certificate",
              "CloudLinux OS",
              "LiteSpeed Elite",
              "WordPress",
              "cPanel/WHM panel",
              "SiteJet builder"
            ]}
          />
          <Card
            title="Master Reseller 3"
            price="R999"
            yearlyPrice="R10400 / year (12.5% discount)"
            description="Maximum capacity for large enterprises."
            ctaText="Get Master Reseller 3"
            ctaOnClick={() => openOrderModal({ title: 'Master Reseller 3', price: 'R999', yearlyPrice: 'R10400', billingPeriod: 'Monthly', category: 'Master Reseller Hosting' })}
            features={[
              "500 WHM accounts",
              "5000 cPanel accounts",
              "Unlimited disk space",
              "Unlimited bandwidth",
              "Unlimited email accounts",
              "100% white label and branding",
              "Free private nameservers",
              "Softaculous auto installer",
              "Free SSL certificate",
              "CloudLinux OS",
              "LiteSpeed Elite",
              "WordPress",
              "cPanel/WHM panel",
              "SiteJet builder"
            ]}
          />
        </div>
      </Section>

      {/* ── Master Reseller Features ─────────────────────────── */}
      <Section id="features" background="gray">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 border border-yellow-300 text-yellow-700 text-sm font-semibold mb-4">
            <Crown className="w-4 h-4" />
            The Ultimate Toolkit
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Everything You Need to Run a Multi-Tier Hosting Empire
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Master Reseller plans unlock the full stack — sell reseller accounts, manage hundreds of WHM instances, and keep everything white-label under your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Master WHM Tools */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-600">
                <Crown className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">Master WHM Tools</h3>
            </div>
            <ul className="space-y-3">
              {[
                { icon: Crown,   label: 'Master WHM Access',            desc: 'Root-level tools without managing a server' },
                { icon: Network, label: 'Create Reseller WHM Accounts', desc: 'Give each partner their own WHM instance' },
                { icon: Globe,   label: 'Private Nameservers',          desc: 'Free ns1 & ns2 under your domain' },
                { icon: Tag,     label: '100% White-Label at Every Tier',desc: "Your brand flows all the way down to end clients" },
              ].map(({ icon: Icon, label, desc }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{label}</p>
                    <p className="text-xs text-gray-400">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

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
                { icon: Zap,      label: 'LiteSpeed Elite Web Server',  desc: 'Up to 40× faster than Apache' },
                { icon: Layers,   label: 'CloudLinux OS',               desc: 'Isolated environments across all tiers' },
                { icon: Cloud,    label: 'SSD NVMe Storage',            desc: 'Ultra-fast storage for every account' },
                { icon: BarChart2,label: 'Unlimited Disk & Bandwidth',  desc: 'Scale your resellers without limits' },
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
                { icon: ShieldCheck, label: 'Imunify360 Firewall',       desc: 'AI-powered malware protection for all accounts' },
                { icon: Lock,        label: 'Free SSL for All Accounts', desc: "Let's Encrypt auto-renew at every level" },
                { icon: Layers,      label: 'CloudLinux Isolation',      desc: 'Each account sandboxed from the rest' },
                { icon: Key,         label: 'Two-Factor Authentication', desc: 'Secured logins for master & sub-WHM' },
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

          {/* Multi-Tier Management */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">Multi-Tier Management</h3>
            </div>
            <ul className="space-y-3">
              {[
                { icon: Users,     label: 'Sell Reseller Accounts',     desc: 'Your resellers can create & sell cPanel hosting' },
                { icon: Building,  label: 'Custom Packages Per Tier',   desc: 'Define plans for your resellers to offer clients' },
                { icon: BarChart2, label: 'Resource Allocation Control',desc: 'Set disk, bandwidth & email per reseller' },
                { icon: Network,   label: 'Nested Account Hierarchy',   desc: 'Master → Reseller → End Client, fully managed' },
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

          {/* Apps & Dev */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">Apps & Dev</h3>
            </div>
            <ul className="space-y-3">
              {[
                { icon: Package, label: 'Softaculous Auto Installer',   desc: '400+ apps including WordPress' },
                { icon: Globe,   label: 'WordPress & WP Toolkit',       desc: 'One-click WP for every account at every tier' },
                { icon: Code,    label: 'PHP Version Selector',         desc: 'PHP 7.x – 8.x configurable per account' },
                { icon: Database,label: 'MySQL / MariaDB Databases',    desc: 'phpMyAdmin included per cPanel' },
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
                { icon: HardDrive, label: 'Daily Automated Backups',    desc: 'All reseller & client accounts backed up daily' },
                { icon: RotateCcw, label: 'One-Click Restore',          desc: 'Roll back any account instantly' },
                { icon: Cloud,     label: 'Offsite Backup Storage',     desc: 'Data kept safely off the primary server' },
                { icon: Filter,    label: 'Spam & Virus Filtering',     desc: 'Clean inboxes across every tier' },
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-full shadow-lg shadow-yellow-500/25 transition-all text-base"
          >
            Choose a Master Plan <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </Section>

      {/* ── Grow With Tiers ──────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-yellow-900/10 to-purple-900/15" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] rounded-full bg-yellow-600/5 blur-3xl" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-900/30 border border-yellow-500/30 text-yellow-300 text-sm font-semibold mb-6 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4" />
              Multi-Tier Revenue Model
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              Grow With Tiers.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">
                Earn From Every Level.
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              As a Master Reseller you sit at the top of a three-tier ecosystem. Every tier below you is a new revenue stream — all under your brand.
            </p>
          </div>

          {/* Tier Diagram + Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

            {/* Tier Flow — 3 cols */}
            <div className="lg:col-span-3 flex flex-col items-center gap-0">

              {/* Tier 1 — You */}
              <div className="w-full relative">
                <div className="relative bg-gradient-to-br from-yellow-500/20 to-amber-600/10 border border-yellow-500/40 rounded-2xl p-6 shadow-xl shadow-yellow-500/5 hover:border-yellow-400/60 transition-all">
                  <div className="absolute -top-3 left-6">
                    <span className="inline-flex items-center gap-1.5 bg-yellow-500 text-slate-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      <Star className="w-3 h-3" /> Tier 1 — You
                    </span>
                  </div>
                  <div className="flex items-start gap-5 mt-2">
                    <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center text-yellow-400 shrink-0">
                      <Crown className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-extrabold text-white mb-1">Master Reseller (You)</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">You purchase one Master Reseller plan and gain root-level WHM access. From here you build and manage your entire hosting empire.</p>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { val: '1',     lab: 'Master WHM' },
                          { val: '500+',  lab: 'WHM Slots' },
                          { val: '100%',  lab: 'White-Label' },
                        ].map(({ val, lab }) => (
                          <div key={lab} className="bg-slate-800/60 rounded-xl px-3 py-2.5 text-center border border-slate-700/50">
                            <p className="text-lg font-extrabold text-yellow-400">{val}</p>
                            <p className="text-[10px] text-slate-400 mt-0.5">{lab}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="flex flex-col items-center py-2 gap-1 my-1">
                <div className="w-px h-6 bg-gradient-to-b from-yellow-500/60 to-purple-500/60" />
                <ChevronDown className="w-5 h-5 text-purple-400 animate-bounce" />
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest">You sell reseller accounts to</p>
                <ChevronDown className="w-5 h-5 text-purple-400 animate-bounce" />
                <div className="w-px h-6 bg-gradient-to-b from-purple-500/60 to-blue-500/60" />
              </div>

              {/* Tier 2 — Your Resellers */}
              <div className="w-full relative">
                <div className="relative bg-gradient-to-br from-purple-500/15 to-violet-600/10 border border-purple-500/30 rounded-2xl p-6 shadow-xl shadow-purple-500/5 hover:border-purple-400/50 transition-all">
                  <div className="absolute -top-3 left-6">
                    <span className="inline-flex items-center gap-1.5 bg-purple-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      <Users className="w-3 h-3" /> Tier 2 — Your Resellers
                    </span>
                  </div>
                  <div className="flex items-start gap-5 mt-2">
                    <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                      <Users className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-extrabold text-white mb-1">Your Reseller Partners</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">Each partner you create gets their own WHM account where they can create packages and sell hosting under their own brand — while you profit from their subscription.</p>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { val: 'Up to 500', lab: 'Resellers' },
                          { val: 'Own WHM',   lab: 'Per Reseller' },
                          { val: 'Your Price', lab: 'You Set It' },
                        ].map(({ val, lab }) => (
                          <div key={lab} className="bg-slate-800/60 rounded-xl px-3 py-2.5 text-center border border-slate-700/50">
                            <p className="text-sm font-extrabold text-purple-400 leading-tight">{val}</p>
                            <p className="text-[10px] text-slate-400 mt-0.5">{lab}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="flex flex-col items-center py-2 gap-1 my-1">
                <div className="w-px h-6 bg-gradient-to-b from-purple-500/60 to-blue-500/60" />
                <ChevronDown className="w-5 h-5 text-blue-400 animate-bounce delay-150" />
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest">Your resellers sell to</p>
                <ChevronDown className="w-5 h-5 text-blue-400 animate-bounce delay-150" />
                <div className="w-px h-6 bg-gradient-to-b from-blue-500/60 to-cyan-500/30" />
              </div>

              {/* Tier 3 — End Clients */}
              <div className="w-full relative">
                <div className="relative bg-gradient-to-br from-blue-500/15 to-cyan-600/10 border border-blue-500/30 rounded-2xl p-6 shadow-xl shadow-blue-500/5 hover:border-blue-400/50 transition-all">
                  <div className="absolute -top-3 left-6">
                    <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      <User className="w-3 h-3" /> Tier 3 — End Clients
                    </span>
                  </div>
                  <div className="flex items-start gap-5 mt-2">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                      <User className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-extrabold text-white mb-1">Their Hosting Clients</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">Each of your resellers can create and manage thousands of cPanel accounts for their own end clients. You never deal with them — your resellers do. You just collect.</p>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { val: '5,000+', lab: 'cPanel Accounts' },
                          { val: 'Isolated', lab: 'Per Client' },
                          { val: 'Passive',  lab: 'Income for You' },
                        ].map(({ val, lab }) => (
                          <div key={lab} className="bg-slate-800/60 rounded-xl px-3 py-2.5 text-center border border-slate-700/50">
                            <p className="text-sm font-extrabold text-blue-400 leading-tight">{val}</p>
                            <p className="text-[10px] text-slate-400 mt-0.5">{lab}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Callouts — 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-6 lg:sticky lg:top-8">
              <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6">
                <h4 className="text-white font-extrabold text-lg mb-5 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-yellow-400" /> Why 3 Tiers Win
                </h4>
                <ul className="space-y-4">
                  {[
                    { icon: TrendingUp, color: 'text-yellow-400', label: 'Multiple Revenue Streams',    desc: 'Earn from your resellers every month regardless of how many clients they sign up.' },
                    { icon: Users,      color: 'text-purple-400', label: 'Exponential Scale',            desc: 'One reseller can bring in 50 clients. 20 resellers means 1,000 potential clients.' },
                    { icon: Tag,        color: 'text-blue-400',   label: 'Zero Overhead per Client',     desc: 'Resellers handle their own client support. You manage resellers, not end users.' },
                    { icon: Crown,      color: 'text-amber-400',  label: 'Full White-Label at All Tiers', desc: 'Your brand appears at every level. Clients never know who built the infrastructure.' },
                  ].map(({ icon: Icon, color, label, desc }) => (
                    <li key={label} className="flex gap-3 items-start">
                      <div className={`w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center ${color} shrink-0 mt-0.5`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{label}</p>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-600/20 to-amber-700/10 border border-yellow-500/30 rounded-2xl p-6">
                <p className="text-yellow-300 text-xs font-bold uppercase tracking-widest mb-3">Quick Comparison</p>
                <div className="space-y-3">
                  {[
                    { label: 'Standard Reseller', tiers: 1, desc: 'You → End Clients',               dot: 'bg-slate-500' },
                    { label: 'Master Reseller',   tiers: 3, desc: 'You → Resellers → End Clients',   dot: 'bg-yellow-500' },
                  ].map(({ label, tiers, desc, dot }) => (
                    <div key={label} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/40">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white text-sm font-bold">{label}</span>
                        <div className="flex gap-1">
                          {Array.from({ length: tiers }).map((_, i) => (
                            <div key={i} className={`w-2.5 h-2.5 rounded-full ${dot}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-400">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#plans"
                className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-yellow-600 hover:bg-yellow-500 text-slate-900 font-extrabold rounded-xl shadow-lg shadow-yellow-600/20 transition-all text-base"
              >
                Start Building Your Empire <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Master Reseller Hosting is Different</h2>
            <p className="text-lg text-gray-600 mb-12">Reseller Hosting lets you sell hosting to end clients. Master Reseller Hosting goes a step further by allowing you to create and sell Reseller Hosting accounts to other agencies, freelancers and entrepreneurs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <ArrowRight className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-700 font-medium">Create multiple reseller accounts, each with their own WHM access</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <ArrowRight className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-700 font-medium">Let your resellers create their own hosting packages and cPanel accounts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <ArrowRight className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-700 font-medium">Earn from multiple layers of customers, not just direct clients</p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Is Master Reseller Hosting right for you?</h2>
            <p className="text-lg text-gray-600 mb-12">Master Reseller Hosting is designed for operators who are ready to think beyond a single layer of clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <p className="text-gray-700 font-medium">Hosting businesses expanding into new regions or niches</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <p className="text-gray-700 font-medium">Agencies that want to empower partner agencies with their own hosting</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <p className="text-gray-700 font-medium">Entrepreneurs building a network of resellers under a central brand</p>
            </div>
          </div>

          <FAQ 
            title="Master Reseller Hosting FAQ"
            items={[
              {
                question: "What's the difference between Reseller and Master Reseller?",
                answer: "Reseller Hosting lets you sell hosting directly to end clients. Master Reseller Hosting lets you sell Reseller Hosting accounts, so your customers can become resellers themselves. You effectively manage a small hosting ecosystem, not just a single customer tier."
              },
              {
                question: "Do I need to know server administration?",
                answer: "No. You don't manage the physical servers directly. Website365 takes care of the infrastructure, network and hardware. You focus on creating reseller packages, supporting your customers and growing your network."
              },
              {
                question: "Can I mix Reseller and Master Reseller plans?",
                answer: "Yes. Some operators use a Reseller account for their direct clients and a Master Reseller account for their reseller partners. We can help you plan a setup that makes sense for how you sell."
              },
              {
                question: "What if I start small and grow into a larger Master Reseller plan?",
                answer: "You can upgrade between Master Reseller plans as your network grows. We'll work with you to make the transition as smooth as possible."
              },
              {
                question: "Can my resellers be fully white-label as well?",
                answer: "Yes. Your resellers can brand their own hosting businesses with their own names, logos and client relationships. Website365 remains invisible in the background."
              }
            ]}
          />
        </div>
      </Section>
    </>
  );
};

export default ResellerMaster;
