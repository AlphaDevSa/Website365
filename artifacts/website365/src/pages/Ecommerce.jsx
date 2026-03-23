import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import {
  ShoppingCart, CreditCard, Truck, ArrowRight, TrendingUp, ShieldCheck,
  Smartphone, Package, Store, Award, BarChart2, Tag, Search, RefreshCw,
  Headphones, CheckCircle, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import EcommerceModal from '../components/EcommerceModal';

const Ecommerce = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    { icon: ShoppingCart, bg: 'bg-green-50',   color: 'text-green-600',   label: 'Product Management',     desc: 'Unlimited products, variants, categories and stock tracking from one dashboard.' },
    { icon: CreditCard,   bg: 'bg-emerald-50', color: 'text-emerald-600', label: 'SA Payment Gateways',    desc: 'PayFast, Peach Payments and EFT — all the South African payment options, ready to go.' },
    { icon: Truck,        bg: 'bg-teal-50',    color: 'text-teal-600',    label: 'Shipping & Fulfilment',  desc: 'Flexible flat-rate or courier-linked shipping rules with automated order notifications.' },
    { icon: Tag,          bg: 'bg-orange-50',  color: 'text-orange-600',  label: 'Discounts & Coupons',    desc: 'Percentage, fixed, and free-shipping coupons with expiry and usage limits.' },
    { icon: RefreshCw,    bg: 'bg-purple-50',  color: 'text-purple-600',  label: 'Abandoned Cart Recovery',desc: 'Automated emails that bring customers back to complete their purchase.' },
    { icon: BarChart2,    bg: 'bg-blue-50',    color: 'text-blue-600',    label: 'Analytics & Reporting',  desc: 'Sales reports, conversion tracking and Google Analytics integration built in.' },
    { icon: Search,       bg: 'bg-indigo-50',  color: 'text-indigo-600',  label: 'eCommerce SEO',          desc: 'Schema markup, fast load times and proper product URLs for better rankings.' },
    { icon: Smartphone,   bg: 'bg-cyan-50',    color: 'text-cyan-600',    label: 'Mobile Shopping',        desc: 'Fully responsive checkout optimised for mobile buyers — fast and frustration-free.' },
    { icon: Headphones,   bg: 'bg-rose-50',    color: 'text-rose-600',    label: 'Post-Launch Support',    desc: 'We are here after launch — for troubleshooting, updates and growing your store.' },
  ];

  return (
    <>
      <EcommerceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-green-900/25" />
          <div className="absolute top-1/4 -right-20 w-[50rem] h-[50rem] rounded-full bg-green-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-[40rem] h-[40rem] rounded-full bg-emerald-600/10 blur-3xl animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-500/30 text-green-300 text-sm font-semibold mb-8 backdrop-blur-sm">
            <ShoppingCart className="w-4 h-4" />
            Complete Online Store Solutions
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-none">
            Sell Everywhere.<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Grow Faster.
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Turn your passion into profit with a powerful, secure online store built for South African
            buyers. Manage products, payments and shipping from one easy dashboard.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold bg-green-600 hover:bg-green-500 text-white shadow-lg hover:shadow-green-500/25 transition-all"
            >
              Launch Your Store <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white transition-all"
            >
              Talk to an Expert
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: '500+',        label: 'Stores Launched' },
              { value: 'R6 499',      label: 'Starting From' },
              { value: 'WooCommerce', label: 'Platform' },
              { value: 'SA',          label: 'Payment Gateways' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl px-6 py-5">
                <p className="text-2xl font-extrabold text-white mb-1">{value}</p>
                <p className="text-slate-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Features ─────────────────────────────────────────── */}
      <Section background="gray">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-semibold mb-4">
            <CheckCircle className="w-4 h-4" />
            Everything Your Store Needs
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            A Complete eCommerce Toolkit
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Every store we build includes the full set of tools to attract customers, close sales and keep them coming back.
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">eCommerce Packages</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">All-inclusive packages to get your store up, running and selling.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Store Starter"
            price="R6499"
            billingPeriod="once-off"
            description="Perfect for new online shops."
            icon={Store}
            ctaText="Request Quote"
            ctaOnClick={() => setIsModalOpen(true)}
            features={[
              "Setup of WooCommerce",
              "Up to 20 products added",
              "1 payment gateway configured",
              "Basic shipping options",
              "Up to 5 core pages",
              "Mobile-responsive design",
              "1 round of revisions",
              "Basic on-page SEO",
            ]}
          />
          <Card
            title="Store Growth"
            price="R9499"
            billingPeriod="once-off"
            description="Scale your business faster."
            icon={TrendingUp}
            popular={true}
            ctaText="Request Quote"
            ctaOnClick={() => setIsModalOpen(true)}
            features={[
              "Up to 100 products added",
              "2 payment gateways configured",
              "Detailed shipping setup",
              "Up to 8 pages",
              "Mobile-responsive design",
              "2 rounds of revisions",
              "On-page SEO for key pages",
              "Email notification templates",
              "Analytics & conversion tracking",
            ]}
          />
          <Card
            title="Store Pro"
            price="R13999"
            billingPeriod="once-off"
            description="Advanced features for power sellers."
            icon={Award}
            ctaText="Request Quote"
            ctaOnClick={() => setIsModalOpen(true)}
            features={[
              "Larger/complex product catalogues",
              "Advanced shipping rules",
              "Coupons & promotional workflows",
              "3 rounds of revisions",
              "Deeper analytics & tracking",
              "Optional integrations scoped separately",
              "Strategy & planning call",
            ]}
          />
        </div>
      </Section>

      {/* ── Bottom CTA ─────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[60rem] h-[20rem] rounded-full bg-green-600/10 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-500/30 text-green-300 text-sm font-semibold mb-6">
            <MessageSquare className="w-4 h-4" />
            Free Consultation
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to start selling online?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Tell us about your products and goals. We will send you a free, detailed quote within one business day — no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-full shadow-lg shadow-green-500/25 transition-all text-base"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold rounded-full transition-all text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ecommerce;
