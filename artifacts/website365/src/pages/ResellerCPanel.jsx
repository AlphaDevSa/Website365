import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import {
  Server, ShieldCheck, LayoutGrid, CheckCircle, ArrowRight, Database, Cloud,
  Zap, Layers, FolderOpen, Upload, Clock, Globe, Mail, Lock, Filter, Key,
  HardDrive, RotateCcw, BarChart2, Code, Package, Users, Building, Tag
} from 'lucide-react';
import Button from '../components/Button';
import FAQ from '../components/FAQ';
import PlanOrderModal from '../components/PlanOrderModal';

const ResellerCPanel = () => {
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
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-orange-900/20" />
          <div className="absolute top-1/4 -right-20 w-[50rem] h-[50rem] rounded-full bg-orange-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-[40rem] h-[40rem] rounded-full bg-blue-600/10 blur-3xl animate-pulse delay-700" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-900/30 border border-orange-500/30 text-orange-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <LayoutGrid className="w-4 h-4" />
            <span>Standard Reseller Hosting</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Empower Your Clients <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">With cPanel Power.</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            The perfect starting point for web designers and agencies. Create and manage separate cPanel accounts for each of your clients under one easy-to-use WHM interface.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button to="#plans" className="rounded-full px-8 py-4 text-lg font-semibold bg-orange-600 hover:bg-orange-500 text-white shadow-lg hover:shadow-orange-500/25 transition-all">
              View Reseller Plans <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button to="#features" variant="ghost" className="rounded-full px-8 py-4 text-lg font-semibold transition-all backdrop-blur-sm">
              View Features
            </Button>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-orange-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">WHM Access</h3>
              </div>
              <p className="text-slate-400 text-sm">Create, suspend, and manage hosting accounts instantly with Web Host Manager.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Client cPanels</h3>
              </div>
              <p className="text-slate-400 text-sm">Give each client their own cPanel login to manage email, files, and databases.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-green-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Fully Secured</h3>
              </div>
              <p className="text-slate-400 text-sm">Each account is isolated with CloudLinux, ensuring one client can't affect others.</p>
            </div>
          </div>
        </div>
      </div>

      <Section id="plans">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">cPanel Reseller Plans</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Reseller 1"
            price="R125"
            yearlyPrice="R1425 / year (5% discount)"
            description="Ideal for starting your hosting business."
            ctaText="Get Reseller 1"
            ctaOnClick={() => openOrderModal({ title: 'Reseller 1', price: 'R125', yearlyPrice: 'R1425', billingPeriod: 'Monthly', category: 'cPanel Reseller Hosting' })}
            features={[
              "50 cPanel accounts",
              "Unlimited disk space",
              "Unlimited bandwidth",
              "5000 email accounts",
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
            title="Reseller 2"
            price="R175"
            yearlyPrice="R1925 / year (8.33% discount)"
            description="Our most popular reseller option."
            ctaText="Get Reseller 2"
            ctaOnClick={() => openOrderModal({ title: 'Reseller 2', price: 'R175', yearlyPrice: 'R1925', billingPeriod: 'Monthly', category: 'cPanel Reseller Hosting' })}
            popular={true}
            features={[
              "100 cPanel accounts",
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
            title="Reseller 3"
            price="R225"
            yearlyPrice="R2360 / year (12.5% discount)"
            description="Maximum power for large agencies."
            ctaText="Get Reseller 3"
            ctaOnClick={() => openOrderModal({ title: 'Reseller 3', price: 'R225', yearlyPrice: 'R2360', billingPeriod: 'Monthly', category: 'cPanel Reseller Hosting' })}
            features={[
              "250 cPanel accounts",
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

      {/* ── Reseller Features ────────────────────────────────── */}
      <Section id="features" background="gray">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-sm font-semibold mb-4">
            <LayoutGrid className="w-4 h-4" />
            Everything Included
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Everything You Need to Run a Hosting Business
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Every cPanel Reseller plan includes the full toolkit to create, manage and brand hosting accounts for your clients — white-label from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Reseller Tools */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">Reseller Tools</h3>
            </div>
            <ul className="space-y-3">
              {[
                { icon: Server,   label: 'WHM (Web Host Manager)',      desc: 'Full reseller control panel access' },
                { icon: Users,    label: 'Multiple cPanel Accounts',    desc: 'One account per client, managed from WHM' },
                { icon: Globe,    label: 'Private Nameservers',         desc: 'Free ns1 & ns2 under your domain' },
                { icon: Tag,      label: '100% White-Label Branding',   desc: 'Your logo and brand, not ours' },
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
                { icon: Layers,   label: 'CloudLinux OS',               desc: 'Isolated environment per account' },
                { icon: Cloud,    label: 'SSD NVMe Storage',            desc: 'Ultra-fast read/write for all clients' },
                { icon: BarChart2,label: 'Unlimited Disk & Bandwidth',  desc: 'No throttling for you or your clients' },
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
                { icon: ShieldCheck, label: 'Imunify360 Firewall',       desc: 'AI-powered malware protection per account' },
                { icon: Lock,        label: 'Free SSL for All Accounts', desc: "Let's Encrypt auto-renew per client" },
                { icon: Layers,      label: 'CloudLinux Isolation',      desc: 'One client can\'t affect another' },
                { icon: Key,         label: 'Two-Factor Authentication', desc: 'Secure your WHM & cPanel logins' },
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

          {/* Client Management */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">Client Management</h3>
            </div>
            <ul className="space-y-3">
              {[
                { icon: Users,     label: 'Create & Suspend Accounts',  desc: 'Full lifecycle control from WHM' },
                { icon: BarChart2, label: 'Resource Allocation',        desc: 'Set disk, bandwidth & email quotas per client' },
                { icon: Building,  label: 'Custom Hosting Packages',    desc: 'Define your own plans to sell to clients' },
                { icon: Clock,     label: 'Account Usage Reports',      desc: 'Monitor usage across all client accounts' },
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
                { icon: Globe,   label: 'WordPress & WP Toolkit',       desc: 'One-click WP for every client' },
                { icon: Code,    label: 'PHP Version Selector',         desc: 'PHP 7.x – 8.x per account' },
                { icon: Database,label: 'MySQL / MariaDB Databases',    desc: 'phpMyAdmin included per client' },
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
                { icon: HardDrive, label: 'Daily Automated Backups',    desc: 'All client accounts backed up daily' },
                { icon: RotateCcw, label: 'One-Click Restore',          desc: 'Roll back any account in seconds' },
                { icon: Cloud,     label: 'Offsite Backup Storage',     desc: 'Data stored safely off primary server' },
                { icon: Filter,    label: 'Spam & Virus Filtering',     desc: 'Protected inboxes for every client' },
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
            Choose a Reseller Plan <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
            <Server className="w-14 h-14 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">WHM + cPanel</h3>
            <p className="text-gray-600 mb-6">Industry-standard tools your clients already know. Create, manage, and brand accounts easily.</p>
            <div className="flex justify-center items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-green-600" /> Free SSL</div>
              <div className="flex items-center gap-2"><Cloud className="w-5 h-5 text-blue-600" /> Daily Backups</div>
              <div className="flex items-center gap-2"><Database className="w-5 h-5 text-orange-600" /> Local NVMe</div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Reseller Hosting works</h2>
            <p className="text-lg text-gray-600">Follow these simple steps to start your own hosting brand.</p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: "Step 1",
                title: "Choose your Reseller plan",
                desc: "Pick the number of accounts and resources that match the size of your client base or your growth plans."
              },
              {
                step: "Step 2",
                title: "Brand your hosting business",
                desc: "Set up your own brand name, logo and private nameservers so your clients see you as their hosting provider."
              },
              {
                step: "Step 3",
                title: "Create hosting packages",
                desc: "Use WHM to define your own hosting packages, including disk space, bandwidth and features."
              },
              {
                step: "Step 4",
                title: "Onboard your clients",
                desc: "Create cPanel accounts for each client and give them their login details. They'll manage their sites under your brand."
              },
              {
                step: "Step 5",
                title: "We handle the infrastructure",
                desc: "Behind the scenes, Website365 manages the servers, network and hardware so you can focus on sales and support."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.step}: {item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Is Reseller Hosting right for you?</h2>
            <p className="text-lg text-gray-600">Reseller Hosting is ideal if you already work with websites or clients and want to add hosting as an additional revenue stream.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Web designers and developers who want to offer hosting to their clients",
              "Digital agencies that want ongoing recurring revenue",
              "Freelancers who want more control over their clients' hosting environment",
              "Entrepreneurs who want to start a hosting brand without managing servers"
            ].map((text, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
                <ArrowRight className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <FAQ 
          title="Reseller Hosting FAQ"
          items={[
            {
              question: "Do my clients know I'm using Website365?",
              answer: "No. Reseller Hosting is fully white-label. Your clients log into cPanel using your brand and your private nameservers. Website365 operates behind the scenes to keep the infrastructure running."
            },
            {
              question: "How do I bill my clients?",
              answer: "You set your own prices and billing cycles for your clients. You can use any invoicing or billing tool you prefer. Your cost for Reseller Hosting is the plan you choose with Website365; the margin between that and what you charge your clients is your profit."
            },
            {
              question: "What happens if I outgrow my Reseller plan?",
              answer: "If you reach the limits of your current plan, you can upgrade to a larger Reseller or Master Reseller plan. We'll help you plan the transition so your existing client accounts continue working."
            },
            {
              question: "Can I sell domains and email too?",
              answer: "Yes. You can bundle domain registration and email hosting with your hosting packages. You can either resell through our systems or use your own arrangements with registrars and DNS providers."
            },
            {
              question: "Can I move existing client sites into my Reseller account?",
              answer: "Absolutely. We can help you migrate multiple client sites from other hosts into your Reseller account, then set them up with individual cPanel logins under your brand."
            }
          ]}
        />
      </Section>
    </>
  );
};

export default ResellerCPanel;
