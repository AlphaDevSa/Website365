import React, { useState } from 'react';
import Section from '../components/Section';
import TrustBar from '../components/TrustBar';
import SEO from '../components/SEO';
import LogoTicker from '../components/LogoTicker';
import DomainSearchBar from '../components/DomainSearchBar';
import WebDesignModal from '../components/WebDesignModal';
import { submitForm } from '../utils/formSubmit';
import { useNavigate, Link } from 'react-router-dom';
import {
  Server, Globe, Monitor, Zap, Heart, Shield, CheckCircle,
  ArrowRight, Star, Users, Award, Clock, Mail, Phone,
  MessageSquare, Settings, User, ChevronRight, AlertCircle,
  Rocket, Headphones, Lock, Database, RefreshCw, Cpu,
  ShoppingCart, MailOpen, Package
} from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [domainQuery, setDomainQuery] = useState('');
  const [isWebDesignModalOpen, setIsWebDesignModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', whatsapp: '', service: 'cPanel Hosting'
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    const result = await submitForm({ ...formData, form_type: 'Home Page Quick Contact' });
    setIsSubmitting(false);
    if (result.success) navigate('/thank-you');
    else setSubmitError('Sorry, there was an error submitting your request. Please try again.');
  };

  const handleDomainSearch = () => {
    if (domainQuery.trim()) {
      navigate(`/domains?domain=${encodeURIComponent(domainQuery.trim())}`);
    }
  };

  return (
    <>
      <WebDesignModal isOpen={isWebDesignModalOpen} onClose={() => setIsWebDesignModalOpen(false)} />
      <SEO
        title="Home"
        description="Website365 - Professional Web Hosting, Domain Registration, and Web Design in South Africa. Local NVMe hosting and conversion-focused design."
        canonical="https://website365.co.za/"
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900" />
          <div className="absolute -top-32 -left-32 w-[50rem] h-[50rem] rounded-full bg-blue-600/10 blur-3xl animate-pulse" />
          <div className="absolute -bottom-24 -right-24 w-[40rem] h-[40rem] rounded-full bg-indigo-600/10 blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-cyan-500/5 blur-3xl" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-24">
          <div className="max-w-4xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-8 backdrop-blur-sm">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              South Africa's Trusted Hosting Partner
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-none mb-6">
              Your Business,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                Online. Fast.
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              NVMe hosting, domains, and professional web design — all from one South African company with 24/7 local support.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {[
                { icon: Shield, text: 'Free SSL', color: 'text-green-400' },
                { icon: Zap, text: 'NVMe Speed', color: 'text-yellow-400' },
                { icon: Heart, text: 'SA Support', color: 'text-pink-400' },
                { icon: Clock, text: '99.9% Uptime', color: 'text-blue-400' },
              ].map(({ icon: Icon, text, color }) => (
                <span key={text} className="inline-flex items-center gap-1.5 bg-white/8 border border-white/10 text-slate-300 text-sm px-4 py-2 rounded-full backdrop-blur-sm">
                  <Icon className={`w-4 h-4 ${color}`} /> {text}
                </span>
              ))}
            </div>

            {/* Domain search bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-slate-400 text-sm mb-3 font-medium">Search for your domain name</p>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 pointer-events-none" />
                <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-xl border border-slate-700 p-2 shadow-2xl">
                  <DomainSearchBar
                    value={domainQuery}
                    onChange={setDomainQuery}
                    onSubmit={handleDomainSearch}
                    placeholder="yourbusiness"
                    buttonLabel="Search"
                    buttonClass="bg-blue-600 hover:bg-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/hosting"
                className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-lg font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-0.5"
              >
                Get Hosting <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/web-design"
                className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-lg font-semibold border-2 border-white/20 text-white hover:bg-white/10 transition-all"
              >
                Web Design
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16">
            {[
              { val: '10+', lab: 'Years in Business' },
              { val: '2 000+', lab: 'Happy Clients' },
              { val: '99.9%', lab: 'Uptime Guarantee' },
              { val: '24/7', lab: 'Local SA Support' },
            ].map(({ val, lab }) => (
              <div key={lab} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/40 rounded-2xl px-4 py-5 text-center">
                <p className="text-2xl font-extrabold text-white mb-1">{val}</p>
                <p className="text-xs text-slate-400 leading-tight">{lab}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TRUST BAR ────────────────────────────────────────────────────────── */}
      <TrustBar />

      {/* ── SERVICES ─────────────────────────────────────────────────────────── */}
      <Section id="services">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-4">
            <Package className="w-4 h-4" /> Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Everything You Need to Succeed Online</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">From registering your first domain to hosting a high-traffic e-commerce store — all under one roof.</p>
        </div>

        {/* Primary Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {[
            {
              icon: Server, color: 'bg-blue-600', light: 'bg-blue-50 text-blue-600',
              title: 'Web Hosting', to: '/hosting',
              desc: 'Fast, secure, and reliable South African hosting. NVMe SSD storage, free SSL, and cPanel or DirectAdmin included.',
              features: ['NVMe SSD Storage', 'Free SSL Certificate', '24/7 Local Support', 'One-Click Installers'],
            },
            {
              icon: Globe, color: 'bg-green-600', light: 'bg-green-50 text-green-600',
              title: 'Domain Names', to: '/domains',
              desc: 'Register .co.za, .com, .africa and 100+ other TLDs instantly. Free DNS management included.',
              features: ['Instant Registration', 'Free DNS Management', 'Domain Lock Protection', 'Easy Transfer In'],
            },
            {
              icon: Monitor, color: 'bg-purple-600', light: 'bg-purple-50 text-purple-600',
              title: 'Web Design', to: null, onClick: () => setIsWebDesignModalOpen(true),
              desc: 'Professional mobile-responsive websites built to convert visitors into customers.',
              features: ['Custom Design', 'SEO Optimised', 'Mobile Responsive', 'Content Management'],
            },
          ].map(({ icon: Icon, color, light, title, to, onClick, desc, features }) => (
            <div key={title} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className={`h-1.5 w-full ${color}`} />
              <div className="p-7">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${light}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2 mb-6">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                {to ? (
                  <Link to={to} className={`inline-flex items-center gap-2 text-sm font-bold ${light.includes('blue') ? 'text-blue-600 hover:text-blue-800' : light.includes('green') ? 'text-green-600 hover:text-green-800' : 'text-purple-600 hover:text-purple-800'} transition-colors`}>
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <button onClick={onClick} className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 hover:text-purple-800 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Services */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Cpu, color: 'bg-orange-50 text-orange-600', title: 'VPS Servers', to: '/servers/vps', desc: 'Fully managed VPS with root access' },
            { icon: Users, color: 'bg-teal-50 text-teal-600', title: 'Reseller Hosting', to: '/hosting/reseller', desc: 'Start your own hosting business' },
            { icon: MailOpen, color: 'bg-indigo-50 text-indigo-600', title: 'Email Hosting', to: '/hosting/email', desc: 'Professional @yourdomain email' },
            { icon: ShoppingCart, color: 'bg-pink-50 text-pink-600', title: 'eCommerce', to: '/web-design/ecommerce', desc: 'Online stores that actually sell' },
          ].map(({ icon: Icon, color, title, to, desc }) => (
            <Link key={title} to={to} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all p-5">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-extrabold text-gray-900 mb-1">{title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── WHY WEBSITE365 (dark) ─────────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-blue-600/8 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-indigo-600/8 blur-3xl" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-5">
              <Award className="w-4 h-4" /> Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Built for South African Businesses</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">Everything we build and host is optimised for the SA market — fast local servers, local payment methods, and real local support.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Zap, color: 'bg-yellow-500/20 text-yellow-400', title: 'NVMe Speed', desc: 'Our servers use the latest NVMe flash storage — up to 10× faster than regular SSDs so pages load instantly.' },
              { icon: Heart, color: 'bg-pink-500/20 text-pink-400', title: 'Real SA Support', desc: 'Speak to real humans based in South Africa who understand local needs. No call centres, no bots — just people.' },
              { icon: Shield, color: 'bg-green-500/20 text-green-400', title: 'Free SSL on Every Plan', desc: 'Every hosting plan includes a free SSL certificate. Secure your visitors and boost your Google ranking.' },
              { icon: Lock, color: 'bg-blue-500/20 text-blue-400', title: 'Daily Backups', desc: 'Automatic daily backups kept for 30 days so you can roll back any mistake or hack with one click.' },
              { icon: RefreshCw, color: 'bg-teal-500/20 text-teal-400', title: '99.9% Uptime SLA', desc: 'We guarantee 99.9% uptime backed by redundant infrastructure. Your site stays online when it matters most.' },
              { icon: Database, color: 'bg-purple-500/20 text-purple-400', title: 'Full cPanel / DirectAdmin', desc: 'Industry-standard control panels give you full control over your hosting without needing to write any code.' },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 hover:bg-slate-800 transition-all">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-extrabold text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────────── */}
      <Section background="gray">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-semibold mb-4">
            <CheckCircle className="w-4 h-4" /> Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Get Online in 3 Simple Steps</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">No technical knowledge needed. We guide you from zero to live website.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 z-0" />
          {[
            { step: '01', icon: Globe, color: 'bg-blue-600', title: 'Choose Your Domain', desc: 'Search for your perfect domain name. .co.za from R99/yr. We have 100+ extensions to pick from.' },
            { step: '02', icon: Server, color: 'bg-green-600', title: 'Select Hosting Plan', desc: 'Pick a hosting plan that fits your budget and traffic. All plans include cPanel and free SSL.' },
            { step: '03', icon: Rocket, color: 'bg-purple-600', title: 'Launch Your Site', desc: 'Install WordPress in one click, upload your site, or have our team design it from scratch for you.' },
          ].map(({ step, icon: Icon, color, title, desc }) => (
            <div key={step} className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-sm p-7 text-center hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-xs font-black text-gray-300 uppercase tracking-widest mb-2">Step {step}</p>
              <h3 className="text-lg font-extrabold text-gray-900 mb-3">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <Section>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-100 text-yellow-700 text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> Client Reviews
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Trusted by thousands of South African businesses, developers, and agencies.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Sarah Johnson', role: 'Small Business Owner', text: 'Website365 made getting my business online incredibly easy. The support team was helpful every step of the way.' },
            { name: 'Michael Smit', role: 'Freelance Developer', text: 'The hosting speed is fantastic, and the local support makes a huge difference. Highly recommended for SA devs.' },
            { name: 'Thabo Mokoena', role: 'Agency Director', text: 'We use the reseller hosting for all our clients. Reliable, affordable, and the WHM interface is great.' },
          ].map((t) => (
            <div key={t.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-blue-600">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CONTACT FORM + SIDEBAR ────────────────────────────────────────────── */}
      <Section background="gray" id="get-started">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6">
              <Headphones className="w-4 h-4" /> Talk to Us
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">Ready to Get Started?</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Fill in the quick form and one of our South African consultants will get back to you — usually within 1 business hour.
            </p>
            <div className="space-y-4">
              {[
                { icon: Phone, label: '086 199 5070', sub: 'Mon–Fri, 8am – 5pm' },
                { icon: MessageSquare, label: '+27 83 600 0152', sub: 'WhatsApp anytime' },
                { icon: Mail, label: 'support@website365.co.za', sub: 'Email support' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{label}</p>
                    <p className="text-xs text-gray-400">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick links */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              {[
                { to: '/hosting', label: 'Hosting Plans' },
                { to: '/domains', label: 'Domain Search' },
                { to: '/hosting/reseller', label: 'Reseller Hosting' },
                { to: '/servers/vps', label: 'VPS Servers' },
              ].map(({ to, label }) => (
                <Link key={label} to={to} className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold group">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /> {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-700 pointer-events-none" />
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                  <Rocket className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">Get Started Today</h3>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-600 mb-1 ml-1 uppercase tracking-wide">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <input type="text" id="name" required value={formData.name} onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm placeholder:text-gray-300"
                      placeholder="Your full name" />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-600 mb-1 ml-1 uppercase tracking-wide">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <input type="email" id="email" required value={formData.email} onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm placeholder:text-gray-300"
                      placeholder="you@company.com" />
                  </div>
                </div>

                {/* Phone + WhatsApp */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-gray-600 mb-1 ml-1 uppercase tracking-wide">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <input type="tel" id="phone" required value={formData.phone} onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm placeholder:text-gray-300"
                        placeholder="086 199 5070" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-xs font-semibold text-gray-600 mb-1 ml-1 uppercase tracking-wide">WhatsApp</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <input type="tel" id="whatsapp" value={formData.whatsapp} onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm placeholder:text-gray-300"
                        placeholder="083 600 0152" />
                    </div>
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-gray-600 mb-1 ml-1 uppercase tracking-wide">Service Interest</label>
                  <div className="relative">
                    <Settings className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <select id="service" value={formData.service} onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all appearance-none bg-white text-sm">
                      <optgroup label="Web Hosting">
                        <option>cPanel Hosting</option>
                        <option>DirectAdmin Hosting</option>
                        <option>WordPress Hosting</option>
                        <option>Email Hosting</option>
                      </optgroup>
                      <optgroup label="Reseller Hosting">
                        <option>cPanel Reseller</option>
                        <option>Master Reseller</option>
                      </optgroup>
                      <optgroup label="Servers">
                        <option>VPS Hosting</option>
                      </optgroup>
                      <optgroup label="Web Design">
                        <option>Website Design</option>
                        <option>Website Maintenance</option>
                        <option>Custom Development</option>
                        <option>eCommerce</option>
                      </optgroup>
                      <optgroup label="Domains">
                        <option>Domain Registration</option>
                        <option>Domain Transfer</option>
                      </optgroup>
                    </select>
                    <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 rotate-90 pointer-events-none" />
                  </div>
                </div>

                {submitError && (
                  <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" /><span>{submitError}</span>
                  </div>
                )}

                <button type="submit" disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-blue-600/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed group">
                  {isSubmitting ? 'Sending…' : 'Request a Callback'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-xs text-gray-400">No spam. We usually respond within 1 business hour.</p>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* ── IPT ONE PARTNER BANNER ────────────────────────────────────────────── */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 shadow-2xl">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />
            <div className="relative px-8 py-10 md:px-12 md:py-12">
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
                <div className="shrink-0 flex justify-center md:justify-start">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.15em] mb-2">Our Sister Company</p>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 leading-tight">IPT One Telecoms</h2>
                  <p className="text-blue-100 text-base mb-5 max-w-lg">
                    Need a virtual landline or a fully hosted PBX system? IPT One delivers professional VoIP and telephony solutions across South Africa.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {['Hosted PBX', 'Virtual Numbers', 'VoIP Solutions', 'Call Recording'].map(f => (
                      <span key={f} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-300" /> {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0 flex flex-col items-center md:items-end gap-3">
                  <a href="https://www.iptone.co.za" target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-blue-800 font-bold px-7 py-4 rounded-xl shadow-lg hover:bg-blue-50 transition-all group whitespace-nowrap">
                    Visit IPT One <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <span className="text-blue-300 text-xs">www.iptone.co.za</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────────── */}
      <div className="relative bg-gradient-to-br from-blue-700 via-indigo-700 to-blue-900 overflow-hidden py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Launch?</h2>
          <p className="text-blue-100 text-xl mb-10 leading-relaxed">
            Join thousands of South African businesses who trust Website365 for their online presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/hosting"
              className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-lg font-bold bg-white text-blue-700 hover:bg-blue-50 shadow-xl transition-all">
              View Hosting Plans <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <LogoTicker />
    </>
  );
};

export default Home;
