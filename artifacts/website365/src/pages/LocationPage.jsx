import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { locationMap } from '../utils/saLocations';
import {
  generateLocationServiceData,
  generateFAQData,
} from '../utils/structuredData';
import DomainSearchBar from '../components/DomainSearchBar';
import SEO from '../components/SEO';
import { submitForm } from '../utils/formSubmit';
import {
  Server, Globe, Monitor, Zap, Shield, Heart, CheckCircle, Star,
  ArrowRight, Phone, Mail, MessageSquare, User, Settings, AlertCircle,
  ChevronRight, Rocket, Clock, Lock, Database, Cpu,
} from 'lucide-react';

const NotFound = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Location Not Found</h1>
    <p className="text-gray-500 mb-8">We could not find that location. Please check the URL or browse our services below.</p>
    <Link to="/" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all">
      Back to Home <ArrowRight className="w-5 h-5" />
    </Link>
  </div>
);

const LocationPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const locationData = locationMap[slug];

  const [domainQuery, setDomainQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', whatsapp: '', service: 'cPanel Hosting',
  });

  if (!locationData) return <NotFound />;

  const { name: cityName, province, provinceSlug } = locationData;

  const title = `Web Hosting & Web Design in ${cityName} | Website365`;
  const description = `Website365 offers fast NVMe web hosting, domain registration, and professional web design services for businesses in ${cityName}, ${province}, South Africa. 24/7 local support included.`;
  const canonicalUrl = `https://website365.co.za/location/${slug}`;

  const keywords = [
    `web hosting ${cityName.toLowerCase()}`,
    `web design ${cityName.toLowerCase()}`,
    `domain registration ${cityName.toLowerCase()}`,
    `website design ${cityName.toLowerCase()}`,
    `business hosting ${cityName.toLowerCase()}`,
    `cpanel hosting ${cityName.toLowerCase()}`,
    `wordpress hosting ${cityName.toLowerCase()}`,
    `vps hosting ${cityName.toLowerCase()}`,
    `email hosting ${cityName.toLowerCase()}`,
    `web design ${province.toLowerCase()}`,
    `web hosting ${province.toLowerCase()}`,
    `south africa web hosting`,
    `website365`,
  ].join(', ');

  const locationSchema = generateLocationServiceData(cityName, province);
  const faqSchema = generateFAQData([
    {
      question: `Does Website365 offer web hosting for businesses in ${cityName}?`,
      answer: `Yes! Website365 provides fast NVMe SSD web hosting to all businesses in ${cityName}, ${province}. All plans include a free SSL certificate, cPanel or DirectAdmin, and 24/7 South African support.`,
    },
    {
      question: `Can I register a .co.za domain for my ${cityName} business?`,
      answer: `Absolutely. Website365 is an accredited .co.za domain registrar. You can register .co.za, .com, .africa, and 100+ other TLD extensions online instantly. Pricing starts from R99/year.`,
    },
    {
      question: `Do you offer web design services in ${cityName}?`,
      answer: `Yes, we design and develop professional websites for businesses across ${cityName} and all of ${province}. Our designs are mobile-responsive, SEO-optimised, and built to convert visitors into customers.`,
    },
    {
      question: `How fast is Website365 hosting for a ${cityName} based website?`,
      answer: `Our servers use NVMe SSD storage and LiteSpeed web server technology, which is up to 10× faster than standard hosting. This means fast page load times for your visitors in ${cityName} and across South Africa.`,
    },
  ]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    const result = await submitForm({
      ...formData,
      form_type: `Location Page - ${cityName}`,
      location: cityName,
    });
    setIsSubmitting(false);
    if (result.success) navigate('/thank-you');
    else setSubmitError('Sorry, there was an error sending your request. Please try again.');
  };

  const handleDomainSearch = () => {
    if (domainQuery.trim()) {
      navigate(`/domains?domain=${encodeURIComponent(domainQuery.trim())}`);
    }
  };

  return (
    <>
      <SEO
        titleOverride={title}
        descriptionOverride={description}
        keywordsOverride={keywords}
        canonicalOverride={canonicalUrl}
        robotsOverride="index, follow"
        geoPlacenameOverride={cityName}
        breadcrumbItemsOverride={[
          { name: 'Home', path: '/' },
          { name: 'Hosting', path: '/hosting' },
          { name: cityName, path: `/location/${slug}` },
        ]}
        extraSchemas={[locationSchema, faqSchema]}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900" />
          <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-[35rem] h-[35rem] rounded-full bg-indigo-600/10 blur-3xl" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-24 lg:pb-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-slate-500 text-sm mb-8">
            <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/hosting" className="hover:text-slate-300 transition-colors">Hosting</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-300">{cityName}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              Serving {cityName}, {province}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none mb-5">
              Web Hosting &amp; Web Design<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                in {cityName}
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Fast NVMe hosting, domain registration, and professional web design for businesses in {cityName}, {province}. 24/7 South African support included.
            </p>

            {/* Domain search */}
            <div className="max-w-xl mb-8">
              <p className="text-slate-400 text-sm mb-3 font-medium">Search for a domain for your {cityName} business</p>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 pointer-events-none" />
                <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-xl border border-slate-700 p-2">
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

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/hosting"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/30 transition-all">
                View Hosting Plans <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold border-2 border-white/20 text-white hover:bg-white/10 transition-all">
                Get a Free Quote
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mt-14">
            {[
              { val: '99.9%', lab: 'Uptime Guarantee' },
              { val: '24/7', lab: 'SA Local Support' },
              { val: 'NVMe', lab: 'SSD Storage' },
              { val: 'Free', lab: 'SSL Certificate' },
            ].map(({ val, lab }) => (
              <div key={lab} className="bg-slate-800/50 border border-slate-700/40 rounded-2xl px-4 py-5 text-center">
                <p className="text-2xl font-extrabold text-white mb-1">{val}</p>
                <p className="text-xs text-slate-400">{lab}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Services Available in {cityName}
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Everything you need to establish and grow your online presence — all serviced by a South African team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Server, color: 'bg-blue-50 text-blue-600', accent: 'bg-blue-600',
                title: `Web Hosting in ${cityName}`, to: '/hosting',
                desc: `Fast, reliable cPanel or DirectAdmin hosting for your ${cityName} business. NVMe SSD, free SSL, and instant setup.`,
                features: ['NVMe SSD Storage', 'Free SSL Certificate', 'cPanel or DirectAdmin', '99.9% Uptime SLA'],
              },
              {
                icon: Globe, color: 'bg-green-50 text-green-600', accent: 'bg-green-600',
                title: `Domain Registration in ${cityName}`, to: '/domains',
                desc: `Register .co.za, .com, .africa and 100+ other domain extensions. Instant activation, free DNS management.`,
                features: ['Instant Registration', 'Free DNS Management', 'Domain Lock Protection', 'Easy Transfer In'],
              },
              {
                icon: Monitor, color: 'bg-purple-50 text-purple-600', accent: 'bg-purple-600',
                title: `Web Design in ${cityName}`, to: '/web-design',
                desc: `Professional, mobile-responsive websites built for ${cityName} businesses. SEO-optimised and conversion-focused.`,
                features: ['Custom Design', 'Mobile Responsive', 'SEO Optimised', 'Content Management'],
              },
            ].map(({ icon: Icon, color, accent, title, to, desc, features }) => (
              <div key={title} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden">
                <div className={`h-1.5 ${accent}`} />
                <div className="p-7">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{desc}</p>
                  <ul className="space-y-2 mb-6">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to={to} className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY WEBSITE365 (dark) ─────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/8 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Why {cityName} Businesses Choose Website365
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              We have been helping South African businesses get online since 2014. Here is why thousands trust us.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Zap, color: 'bg-yellow-500/20 text-yellow-400', title: 'NVMe Speed', desc: `Your ${cityName} website will load fast on our NVMe SSD servers — up to 10× faster than traditional hosting.` },
              { icon: Heart, color: 'bg-pink-500/20 text-pink-400', title: 'Real SA Support', desc: 'Our team is based in South Africa. No call centres, no bots — just people who understand your needs.' },
              { icon: Shield, color: 'bg-green-500/20 text-green-400', title: 'Free SSL Always', desc: 'Every hosting plan includes a free SSL certificate. Secure your ${cityName} website and boost your rankings.' },
              { icon: Lock, color: 'bg-blue-500/20 text-blue-400', title: 'Daily Backups', desc: 'Automatic daily backups for 30 days. Restore your website in one click if anything goes wrong.' },
              { icon: Clock, color: 'bg-teal-500/20 text-teal-400', title: '99.9% Uptime SLA', desc: `Your ${cityName} website stays online. We back it with a 99.9% uptime service level agreement.` },
              { icon: Database, color: 'bg-purple-500/20 text-purple-400', title: 'cPanel / DirectAdmin', desc: 'Full control panel access. Manage your hosting, email, domains, and databases with ease.' },
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

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions — {cityName}
            </h2>
            <p className="text-gray-500">Common questions from businesses in {cityName} about our services.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: `Does Website365 provide web hosting for businesses in ${cityName}?`,
                a: `Yes! Website365 provides fast NVMe SSD web hosting to all businesses in ${cityName}, ${province}. All plans include a free SSL certificate, cPanel or DirectAdmin, and 24/7 South African support. You can sign up and get online today.`,
              },
              {
                q: `Can I register a .co.za domain for my ${cityName} business?`,
                a: `Absolutely. Website365 is an accredited .co.za domain registrar. You can instantly register .co.za, .com, .africa, and 100+ other domain extensions online. Pricing starts from as little as R99 per year for a .co.za domain.`,
              },
              {
                q: `Do you offer web design services in ${cityName}?`,
                a: `Yes, we design and develop professional websites for businesses across ${cityName} and the broader ${province} region. Our websites are mobile-responsive, SEO-optimised, and built to convert visitors into real customers.`,
              },
              {
                q: `How fast is Website365 hosting for a website serving ${cityName}?`,
                a: `Our servers use NVMe SSD storage and LiteSpeed web server technology — up to 10× faster than standard shared hosting. This means fast page load times for all visitors in ${cityName} and across South Africa.`,
              },
              {
                q: `What is the cost of web hosting for a ${cityName} small business?`,
                a: `We have hosting plans starting from as little as R75/month for a basic shared hosting plan, all the way up to dedicated VPS servers. All plans include free SSL, NVMe storage, and 24/7 support. Visit our hosting page for full pricing.`,
              },
            ].map(({ q, a }, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer text-gray-900 font-semibold list-none">
                  {q}
                  <ChevronRight className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">
                Get a Free Quote for Your {cityName} Business
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Tell us about your {cityName} business and what you need — hosting, domains, or a website. One of our South African consultants will get back to you within 1 business hour.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: '086 199 5070', sub: 'Mon–Fri, 8am–5pm' },
                  { icon: MessageSquare, label: '+27 83 600 0152', sub: 'WhatsApp anytime' },
                  { icon: Mail, label: 'support@website365.co.za', sub: 'Email support' },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{label}</p>
                      <p className="text-xs text-gray-400">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Other locations in same province */}
              <div className="mt-10">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">More {province} locations</p>
                <div className="flex flex-wrap gap-2">
                  {Object.values(locationMap)
                    .filter((l) => l.province === province && l.slug !== slug)
                    .slice(0, 10)
                    .map((l) => (
                      <Link key={l.slug} to={`/location/${l.slug}`}
                        className="text-xs font-semibold text-blue-600 hover:text-blue-800 bg-blue-50 px-3 py-1.5 rounded-full transition-colors">
                        {l.name}
                      </Link>
                    ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-700 pointer-events-none" />
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900">Request a Free Quote</h3>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-600 mb-1 ml-1 uppercase tracking-wide">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <input type="text" id="name" required value={formData.name} onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm placeholder:text-gray-300"
                        placeholder="Your full name" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-600 mb-1 ml-1 uppercase tracking-wide">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <input type="email" id="email" required value={formData.email} onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm placeholder:text-gray-300"
                        placeholder="you@company.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-gray-600 mb-1 ml-1 uppercase tracking-wide">Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        <input type="tel" id="phone" required value={formData.phone} onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm placeholder:text-gray-300"
                          placeholder="086 199 5070" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="whatsapp" className="block text-xs font-semibold text-gray-600 mb-1 ml-1 uppercase tracking-wide">WhatsApp</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        <input type="tel" id="whatsapp" value={formData.whatsapp} onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm placeholder:text-gray-300"
                          placeholder="083 600 0152" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-gray-600 mb-1 ml-1 uppercase tracking-wide">Service Interest</label>
                    <div className="relative">
                      <Settings className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <select id="service" value={formData.service} onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all appearance-none bg-white text-sm">
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
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-blue-600/20 transition-all disabled:opacity-50 group">
                    {isSubmitting ? 'Sending…' : 'Request a Free Quote'}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-xs text-gray-400">No spam. We usually respond within 1 business hour.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROVINCE LOCATIONS FOOTER ─────────────────────────────────────── */}
      <section className="bg-gray-50 border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
            We also serve businesses in these areas:
          </p>
          <div className="flex flex-wrap gap-2">
            {Object.values(locationMap)
              .filter((l) => l.slug !== slug)
              .slice(0, 60)
              .map((l) => (
                <Link key={l.slug} to={`/location/${l.slug}`}
                  className="text-xs text-gray-600 hover:text-blue-600 bg-white border border-gray-200 hover:border-blue-200 px-3 py-1.5 rounded-full transition-colors">
                  {l.name}, {l.province}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationPage;
