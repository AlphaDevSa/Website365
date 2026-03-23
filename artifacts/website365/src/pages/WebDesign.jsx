import React, { useState } from 'react';
import Section from '../components/Section';
import {
  Monitor, ShoppingCart, Wrench, Code, ArrowRight, Layout, Smartphone,
  PenTool, Search, Zap, Users, HeartHandshake, CheckCircle, Clock,
  Star, Globe, Lock, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import WebDesignModal from '../components/WebDesignModal';

const WebDesign = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      slug: '/web-design/website',
      label: 'Website Design',
      tagline: 'Your brand, beautifully online',
      icon: Monitor,
      accentFrom: 'from-pink-500',
      accentTo: 'to-rose-400',
      iconBg: 'bg-pink-50',
      iconColor: 'text-pink-600',
      priceBg: 'bg-pink-50',
      priceText: 'text-pink-700',
      border: 'border-pink-100',
      ctaColor: 'text-pink-600',
      price: 'R3 500',
      priceLabel: 'once off',
      features: [
        'Custom responsive design',
        'Mobile-first build',
        'SEO-ready markup & meta tags',
        'Up to 5 pages included',
      ],
    },
    {
      slug: '/web-design/ecommerce',
      label: 'eCommerce Store',
      tagline: 'Sell online, 24/7',
      icon: ShoppingCart,
      accentFrom: 'from-emerald-500',
      accentTo: 'to-green-400',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      priceBg: 'bg-emerald-50',
      priceText: 'text-emerald-700',
      border: 'border-emerald-100',
      ctaColor: 'text-emerald-600',
      price: 'R6 500',
      priceLabel: 'once off',
      popular: true,
      features: [
        'Full WooCommerce build',
        'Secure payment gateway',
        'Product & inventory management',
        'Coupon & shipping tools',
      ],
    },
    {
      slug: '/web-design/maintenance',
      label: 'Website Maintenance',
      tagline: 'Keep your site fast & secure',
      icon: Wrench,
      accentFrom: 'from-blue-500',
      accentTo: 'to-cyan-400',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      priceBg: 'bg-blue-50',
      priceText: 'text-blue-700',
      border: 'border-blue-100',
      ctaColor: 'text-blue-600',
      price: 'R299',
      priceLabel: '/month',
      features: [
        'Plugin & theme updates',
        'Daily automated backups',
        'Security scanning',
        'Monthly performance report',
      ],
    },
    {
      slug: '/web-design/development',
      label: 'Custom Development',
      tagline: 'Complex problems, clean solutions',
      icon: Code,
      accentFrom: 'from-purple-500',
      accentTo: 'to-violet-400',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      priceBg: 'bg-purple-50',
      priceText: 'text-purple-700',
      border: 'border-purple-100',
      ctaColor: 'text-purple-600',
      price: 'Custom',
      priceLabel: 'quote',
      features: [
        'Custom web applications',
        'API design & integration',
        'Database architecture',
        'Scalable, maintainable code',
      ],
    },
  ];

  const whyUs = [
    { icon: Layout,       color: 'text-pink-600',    bg: 'bg-pink-50',    label: 'Custom Design',       desc: 'Every site is unique — no templates, no shortcuts.' },
    { icon: Smartphone,   color: 'text-purple-600',  bg: 'bg-purple-50',  label: 'Mobile First',        desc: 'Designed for phones first, then desktops.' },
    { icon: Search,       color: 'text-blue-600',    bg: 'bg-blue-50',    label: 'SEO Optimised',       desc: 'Clean code, fast loads, and proper markup from day one.' },
    { icon: Zap,          color: 'text-orange-600',  bg: 'bg-orange-50',  label: 'Fast Delivery',       desc: 'Most sites go live within 2–4 weeks of brief approval.' },
    { icon: HeartHandshake,color: 'text-emerald-600',bg: 'bg-emerald-50', label: 'Local SA Team',       desc: 'Based in South Africa — same time zone, same culture.' },
    { icon: Globe,        color: 'text-teal-600',    bg: 'bg-teal-50',    label: 'Hosted & Secured',    desc: 'We can bundle your hosting so everything just works.' },
  ];

  const process = [
    { step: '01', title: 'Discovery & Brief',        desc: 'We learn about your business, goals, and target audience through a structured briefing session.' },
    { step: '02', title: 'Design & Mockup',          desc: 'Our designers produce wireframes and visual mockups for your approval before a single line of code is written.' },
    { step: '03', title: 'Review & Revisions',       desc: 'You review the design and request changes. We include two revision rounds in every project.' },
    { step: '04', title: 'Development & Testing',    desc: 'We build the site, connect all functionality, and test thoroughly across devices and browsers.' },
    { step: '05', title: 'Launch & Handover',        desc: 'Your site goes live and we hand over everything — credentials, guides, and ongoing support options.' },
  ];

  return (
    <>
      <WebDesignModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-pink-900/25" />
          <div className="absolute top-1/4 left-1/3 w-[50rem] h-[50rem] rounded-full bg-pink-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] rounded-full bg-purple-600/10 blur-3xl animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-900/30 border border-pink-500/30 text-pink-300 text-sm font-semibold mb-8 backdrop-blur-sm">
            <PenTool className="w-4 h-4" />
            South African Web Design Studio
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-none">
            We Design. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400">
              You Convert.
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Beautiful, mobile-first websites built for South African businesses.
            From brochure sites to full eCommerce stores — we design, develop, and deliver.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold bg-pink-600 hover:bg-pink-500 text-white shadow-lg hover:shadow-pink-500/25 transition-all"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white transition-all backdrop-blur-sm"
            >
              Talk to a Designer
            </Link>
          </div>

          {/* Hero stat row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: '500+',    label: 'Sites Delivered' },
              { value: '2–4 wks', label: 'Avg Turnaround' },
              { value: '100%',    label: 'Mobile Responsive' },
              { value: '5★',      label: 'Client Rating' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl px-6 py-5">
                <p className="text-3xl font-extrabold text-white mb-1">{value}</p>
                <p className="text-slate-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services ──────────────────────────────────────────── */}
      <Section id="services" background="gray">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">What We Offer</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Whether you need a stunning brochure site or a fully featured online store, our team delivers on time and on brief.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                to={s.slug}
                className={`group relative bg-white rounded-2xl border ${s.border} shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col`}
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${s.accentFrom} ${s.accentTo}`} />

                {s.popular && (
                  <div className="absolute top-5 right-5 flex items-center gap-1 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
                    <Star className="w-3 h-3" /> Most Popular
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-11 h-11 rounded-xl ${s.iconBg} flex items-center justify-center ${s.iconColor} shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-gray-900 leading-tight group-hover:text-pink-600 transition-colors">
                        {s.label}
                      </h3>
                      <p className="text-xs text-gray-400 mt-0.5">{s.tagline}</p>
                    </div>
                  </div>

                  <div className={`inline-flex items-baseline gap-1 mb-5 px-3 py-1.5 rounded-lg ${s.priceBg} self-start`}>
                    <span className={`text-xl font-extrabold ${s.priceText}`}>{s.price}</span>
                    <span className={`text-xs font-medium ${s.priceText} opacity-70`}>{s.priceLabel}</span>
                  </div>

                  <ul className="space-y-2 mb-6 flex-1">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${s.iconColor}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className={`flex items-center font-semibold text-sm ${s.ctaColor} mt-auto`}>
                    More Info <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* ── Why Choose Us ─────────────────────────────────────── */}
      <Section>
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-pink-700 text-sm font-semibold mb-4">
            <HeartHandshake className="w-4 h-4" />
            Why Website365 Design
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Built to Perform, Designed to Impress
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Every site we design is fast, secure, and built with your customers in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map(({ icon: Icon, color, bg, label, desc }) => (
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

      {/* ── Our Process ───────────────────────────────────────── */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-sm font-semibold mb-4">
              <Clock className="w-4 h-4" />
              How We Work
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              From Brief to Launch in 5 Steps
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              A clear, collaborative process so you always know where your project stands.
            </p>
          </div>

          <div className="space-y-6">
            {process.map(({ step, title, desc }, idx) => (
              <div
                key={step}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex gap-6 items-start hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-extrabold text-lg shrink-0">
                  {step}
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-extrabold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Bottom CTA ─────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-pink-900/20 to-slate-900" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[60rem] h-[20rem] rounded-full bg-pink-600/10 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-900/30 border border-pink-500/30 text-pink-300 text-sm font-semibold mb-6">
            <MessageSquare className="w-4 h-4" />
            Free Consultation
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to build something great?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Tell us about your project. We will send you a free quote within one business day — no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-pink-600 hover:bg-pink-500 text-white font-bold rounded-full shadow-lg shadow-pink-500/25 transition-all text-base"
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

export default WebDesign;
