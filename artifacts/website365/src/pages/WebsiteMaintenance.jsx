import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import MaintenanceOrderModal from '../components/MaintenanceOrderModal';
import { Link } from 'react-router-dom';
import {
  Wrench, Shield, Clock, Activity, ArrowRight, RefreshCw, BarChart2,
  Bell, CheckCircle, HeartHandshake, MessageSquare, Zap, Lock, HardDrive
} from 'lucide-react';

const WebsiteMaintenance = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };
  const features = [
    { icon: Shield,    bg: 'bg-red-50',     color: 'text-red-600',    label: 'Security Hardening',    desc: 'Outdated plugins are the #1 cause of hacks. We keep everything patched and locked.' },
    { icon: RefreshCw, bg: 'bg-blue-50',    color: 'text-blue-600',   label: 'Plugin & Theme Updates', desc: 'WordPress core, themes and plugins updated and tested every month.' },
    { icon: HardDrive, bg: 'bg-emerald-50', color: 'text-emerald-600',label: 'Daily Backups',          desc: 'Automated daily backups with one-click restore if anything goes wrong.' },
    { icon: Bell,      bg: 'bg-orange-50',  color: 'text-orange-600', label: 'Uptime Monitoring',     desc: '24/7 uptime checks — we know if your site goes down before you do.' },
    { icon: Zap,       bg: 'bg-purple-50',  color: 'text-purple-600', label: 'Performance Reviews',   desc: 'Quarterly speed and performance checks with basic fixes included.' },
    { icon: BarChart2, bg: 'bg-teal-50',    color: 'text-teal-600',   label: 'Monthly Reports',       desc: 'A clear monthly snapshot of your site health, traffic and key metrics.' },
  ];

  return (
    <>
      <MaintenanceOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        plan={selectedPlan}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-900/25" />
          <div className="absolute top-1/4 left-1/4 w-[50rem] h-[50rem] rounded-full bg-emerald-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] rounded-full bg-teal-600/10 blur-3xl animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-300 text-sm font-semibold mb-8 backdrop-blur-sm">
            <Wrench className="w-4 h-4" />
            Proactive Website Care
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-none">
            We Handle The Tech.<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              You Focus On Business.
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Secure, reliable, and worry-free website maintenance plans designed to keep your digital
            presence performing at its best — month after month.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="#plans"
              onClick={(e) => { e.preventDefault(); document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-emerald-500/25 transition-all"
            >
              View Care Plans <ArrowRight className="w-5 h-5" />
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
              { value: 'R199',  label: 'Starting From' },
              { value: '24/7',  label: 'Uptime Monitoring' },
              { value: 'Daily', label: 'Automated Backups' },
              { value: 'Local', label: 'SA Support Team' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl px-6 py-5">
                <p className="text-3xl font-extrabold text-white mb-1">{value}</p>
                <p className="text-slate-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Why Maintenance Matters ───────────────────────────── */}
      <Section background="gray">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            <HeartHandshake className="w-4 h-4" />
            What We Take Care Of
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Everything Your Site Needs to Stay Healthy
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            An unmaintained website is a liability. Our care plans handle all the technical work so you never have to worry.
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

      {/* ── Pricing ───────────────────────────────────────────── */}
      <Section id="plans">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Website Maintenance Plans</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Choose the level of care that suits your business needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Care Basic"
            price="R199"
            yearlyPrice="per month"
            description="Essential security and updates."
            ctaText="Order Care Basic"
            ctaOnClick={() => openModal({ title: 'Care Basic', price: 'R199' })}
            features={[
              "Monthly WordPress core, theme and plugin updates",
              "Monthly backup verification",
              "Basic uptime monitoring",
              "Monthly security scan and basic hardening",
              "Email support",
            ]}
          />
          <Card
            title="Care Plus"
            price="R399"
            yearlyPrice="per month"
            description="Perfect for growing businesses."
            ctaText="Order Care Plus"
            ctaOnClick={() => openModal({ title: 'Care Plus', price: 'R399' })}
            popular={true}
            features={[
              "Everything in Care Basic",
              "Up to 1 hour of small content updates per month",
              "Quarterly performance review (page speed and basic fixes)",
              "Priority email support",
            ]}
          />
          <Card
            title="Care Pro"
            price="R699"
            yearlyPrice="per month"
            description="Comprehensive care for serious websites."
            ctaText="Order Care Pro"
            ctaOnClick={() => openModal({ title: 'Care Pro', price: 'R699' })}
            features={[
              "Everything in Care Plus",
              "Up to 2.5 hours of content or small feature updates per month",
              "Ecommerce-specific checks (test orders, checkout flow review)",
              "Monthly analytics snapshot",
              "Higher-priority response times",
            ]}
          />
        </div>
      </Section>

      {/* ── Bottom CTA ─────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[60rem] h-[20rem] rounded-full bg-emerald-600/10 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-300 text-sm font-semibold mb-6">
            <Activity className="w-4 h-4" />
            Free Site Audit
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Not sure what your site needs?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            We will audit your website for security vulnerabilities and performance issues and recommend the right plan — for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full shadow-lg shadow-emerald-500/25 transition-all text-base"
            >
              Schedule Free Audit <ArrowRight className="w-5 h-5" />
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

export default WebsiteMaintenance;
