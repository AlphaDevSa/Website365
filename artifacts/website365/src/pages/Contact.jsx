import React, { useState } from 'react';
import Section from '../components/Section';
import {
  Mail, Phone, MapPin, Clock, MessageCircle, HelpCircle, ArrowRight,
  User, Settings, MessageSquare, ChevronRight, AlertCircle,
  ExternalLink, Globe, CheckCircle, HeadphonesIcon
} from 'lucide-react';
import { submitForm } from '../utils/formSubmit';
import { useNavigate, Link } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    const result = await submitForm({ ...formData, form_type: 'Contact Page Message' });
    setIsSubmitting(false);
    if (result.success) {
      navigate('/thank-you');
    } else {
      setSubmitError('Sorry, there was an error sending your message. Please try again later.');
    }
  };

  const channels = [
    {
      icon: Phone,
      bg: 'bg-blue-50', color: 'text-blue-600',
      accentFrom: 'from-blue-500', accentTo: 'to-cyan-400',
      border: 'border-blue-100',
      label: 'Call Us',
      value: '086 199 5070',
      sub: 'Mon – Fri, 8am – 5pm',
      href: 'tel:0861995070',
    },
    {
      icon: MessageCircle,
      bg: 'bg-green-50', color: 'text-green-600',
      accentFrom: 'from-green-500', accentTo: 'to-emerald-400',
      border: 'border-green-100',
      label: 'WhatsApp',
      value: '+27 83 600 0152',
      sub: 'Fastest response channel',
      href: 'https://wa.me/27836000152',
    },
    {
      icon: Mail,
      bg: 'bg-indigo-50', color: 'text-indigo-600',
      accentFrom: 'from-indigo-500', accentTo: 'to-blue-400',
      border: 'border-indigo-100',
      label: 'Email Us',
      value: 'support@website365.co.za',
      sub: 'Reply within 24 hours',
      href: 'mailto:support@website365.co.za',
    },
    {
      icon: HelpCircle,
      bg: 'bg-purple-50', color: 'text-purple-600',
      accentFrom: 'from-purple-500', accentTo: 'to-violet-400',
      border: 'border-purple-100',
      label: 'Support Ticket',
      value: 'Open a Ticket',
      sub: '24/7 Technical Assistance',
      href: 'https://support.website365.co.za',
      external: true,
    },
  ];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900/25" />
          <div className="absolute top-1/4 right-1/4 w-[50rem] h-[50rem] rounded-full bg-blue-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 -left-20 w-[40rem] h-[40rem] rounded-full bg-indigo-600/10 blur-3xl animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-8 backdrop-blur-sm">
            <MessageCircle className="w-4 h-4" />
            We Would Love to Hear From You
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-none">
            Let's Start a<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Conversation.
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether you have a question about services, pricing or technical support — our SA-based team is ready to help you right now.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="#contact-form"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/25 transition-all"
            >
              Send a Message <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/27836000152"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold border border-slate-600 hover:border-green-500/60 text-slate-300 hover:text-green-400 transition-all"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: '&lt;1hr',  label: 'WhatsApp Response' },
              { value: '24/7',   label: 'Tech Support' },
              { value: 'SA',     label: 'Based Team' },
              { value: '4',      label: 'Contact Channels' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl px-6 py-5">
                <p className="text-3xl font-extrabold text-white mb-1" dangerouslySetInnerHTML={{ __html: value }} />
                <p className="text-slate-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Contact Channels ──────────────────────────────────── */}
      <Section background="gray">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-4">
            <HeadphonesIcon className="w-4 h-4" />
            How to Reach Us
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Choose Your Channel</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Pick whichever works best for you — we are available across all of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((c) => {
            const Icon = c.icon;
            const inner = (
              <div className={`group bg-white rounded-2xl border ${c.border} shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col text-left`}>
                <div className={`h-1.5 w-full bg-gradient-to-r ${c.accentFrom} ${c.accentTo}`} />
                <div className="p-6 flex flex-col flex-1">
                  <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center ${c.color} mb-4 shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{c.label}</p>
                  <p className={`text-base font-extrabold text-gray-900 mb-1 ${c.label === 'Email Us' ? 'break-all' : ''}`}>{c.value}</p>
                  <p className="text-sm text-gray-400 mt-auto pt-3 flex items-center gap-1">
                    {c.sub}
                    {c.external && <ExternalLink className="w-3 h-3" />}
                  </p>
                </div>
              </div>
            );

            return c.external ? (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer">{inner}</a>
            ) : (
              <a key={c.label} href={c.href}>{inner}</a>
            );
          })}
        </div>
      </Section>

      {/* ── Form + Info ───────────────────────────────────────── */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Get in Touch</h2>
              <p className="text-gray-500 leading-relaxed">
                Our team is based right here in South Africa. Reach out and we will get back to you as quickly as possible.
              </p>
            </div>

            {[
              { icon: Phone,  bg: 'bg-blue-50',   color: 'text-blue-600',   title: 'Phone',           line1: '086 199 5070',            line2: 'Mon – Fri, 8am – 5pm' },
              { icon: Phone,  bg: 'bg-blue-50',   color: 'text-blue-600',   title: 'Mobile',          line1: '+27 83 600 0152',         line2: 'Also on WhatsApp' },
              { icon: Mail,   bg: 'bg-indigo-50', color: 'text-indigo-600', title: 'Email',           line1: 'support@website365.co.za', line2: 'Reply within 24 hours' },
              { icon: MapPin, bg: 'bg-green-50',  color: 'text-green-600',  title: 'Location',        line1: 'Pretoria, South Africa',  line2: '' },
              { icon: Clock,  bg: 'bg-orange-50', color: 'text-orange-600', title: 'Business Hours',  line1: 'Mon – Fri: 08:00 – 17:00', line2: 'Sat: 09:00 – 13:00' },
            ].map(({ icon: Icon, bg, color, title, line1, line2 }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex gap-4 items-start">
                <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center ${color} shrink-0`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">{title}</p>
                  <p className="text-sm font-semibold text-gray-900">{line1}</p>
                  {line2 && <p className="text-xs text-gray-400 mt-0.5">{line2}</p>}
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-blue-200 shrink-0" />
                <p className="font-bold">SA-based, human support</p>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-blue-200 shrink-0" />
                <p className="font-bold">No bots or overseas call centres</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-200 shrink-0" />
                <p className="font-bold">Real people who know hosting</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div id="contact-form" className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Send us a Message</h2>
            <p className="text-gray-400 text-sm mb-8">Fill in the form and we will get back to you within one business day.</p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name <span className="text-red-400">*</span></label>
                  <div className="relative group/input">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-blue-500 transition-colors">
                      <User className="w-4 h-4" />
                    </div>
                    <input type="text" id="name" required value={formData.name} onChange={handleChange} className="block w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-gray-300 text-sm" placeholder="Your Name" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone <span className="text-red-400">*</span></label>
                  <div className="relative group/input">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-blue-500 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input type="text" id="phone" required value={formData.phone} onChange={handleChange} className="block w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-gray-300 text-sm" placeholder="Phone Number" />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email <span className="text-red-400">*</span></label>
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-blue-500 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input type="email" id="email" required value={formData.email} onChange={handleChange} className="block w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-gray-300 text-sm" placeholder="you@company.com" />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">Service Interest</label>
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-blue-500 transition-colors">
                    <Settings className="w-4 h-4" />
                  </div>
                  <select id="subject" value={formData.subject} onChange={handleChange} className="block w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none bg-white text-sm">
                    <option value="">Select a Service</option>
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
                    <optgroup label="Other">
                      <option>General Inquiry</option>
                      <option>Billing</option>
                      <option>Technical Support</option>
                    </optgroup>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                    <ChevronRight className="w-4 h-4 rotate-90" />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message <span className="text-red-400">*</span></label>
                <div className="relative group/input">
                  <div className="absolute top-3 left-3 pointer-events-none text-gray-400 group-focus-within/input:text-blue-500 transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <textarea id="message" rows={5} required value={formData.message} onChange={handleChange} className="block w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-gray-300 text-sm" placeholder="How can we help you? Include as much detail as possible." />
                </div>
              </div>

              {submitError && (
                <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 text-base font-bold bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white rounded-xl shadow-lg shadow-blue-600/20 transition-all"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-center text-xs text-gray-400">
                We respect your privacy. Your information is never shared with third parties.
              </p>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
