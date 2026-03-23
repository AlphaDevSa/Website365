import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import {
  Users, Handshake, Globe, ArrowRight, Award, Zap, Shield,
  CheckCircle, AlertCircle, TrendingUp, DollarSign, Tag,
  HeartHandshake, Megaphone, LayoutGrid, Star, MessageSquare
} from 'lucide-react';
import { submitForm } from '../utils/formSubmit';
import { useNavigate, Link } from 'react-router-dom';

const partnerLogos = [
  { name: 'cPanel',      src: '/images/partners/CPanel_logo.svg.png' },
  { name: 'CloudLinux',  src: '/images/partners/CloudLinux-icon-1.webp' },
  { name: 'DirectAdmin', src: '/images/partners/DirectAdmin-icon-1.webp' },
  { name: 'Imunify360',  src: '/images/partners/Imunify360-icon.webp' },
  { name: 'LiteSpeed',   src: '/images/partners/LiteSpeed-icon.webp' },
  { name: 'Softaculous', src: '/images/partners/Softaculous-Icon.webp' },
  { name: 'Sectigo',     src: '/images/partners/sectigo_logo_color_small.png' },
  { name: 'WordPress',   src: '/images/partners/WordPress.png' },
  { name: 'GeoTrust',    src: '/images/partners/geotrust-tab.png' },
  { name: 'RapidSSL',    src: '/images/partners/rapidssl.gif' },
  { name: 'Thawte',      src: '/images/partners/thawte-ssl-certificate-logo.png' },
  { name: 'WHMCS',       src: '/images/partners/Whmcs-icon.webp' },
];

const Partners = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    type: 'Reseller Partner',
    clients: '1 - 10',
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
    const result = await submitForm({ ...formData, form_type: 'Partner Application' });
    setIsSubmitting(false);
    if (result.success) {
      navigate('/thank-you');
    } else {
      setSubmitError('Sorry, there was an error submitting your application. Please try again later.');
    }
  };

  const baseLogos = [...partnerLogos, ...partnerLogos];

  const partnerTypes = [
    {
      icon: LayoutGrid,
      bg: 'bg-indigo-50', color: 'text-indigo-600',
      accentFrom: 'from-indigo-500', accentTo: 'to-blue-400',
      border: 'border-indigo-100',
      label: 'Reseller Partner',
      desc: 'White-label our hosting infrastructure and sell it under your own brand. Keep 100% of your margin.',
      bullets: ['Custom pricing & packages', 'White-label cPanel & WHM', 'Full client management'],
    },
    {
      icon: Megaphone,
      bg: 'bg-green-50', color: 'text-green-600',
      accentFrom: 'from-green-500', accentTo: 'to-emerald-400',
      border: 'border-green-100',
      label: 'Referral Partner',
      desc: 'Refer clients to us and earn recurring commissions for the lifetime of that account. No cap.',
      bullets: ['Recurring monthly commissions', 'Dedicated referral tracking', 'No minimum referrals'],
    },
    {
      icon: DollarSign,
      bg: 'bg-orange-50', color: 'text-orange-600',
      accentFrom: 'from-orange-500', accentTo: 'to-amber-400',
      border: 'border-orange-100',
      label: 'Affiliate',
      desc: 'Promote our services via your website, blog or social media and earn a commission on every signup.',
      bullets: ['Unique affiliate link', 'Real-time reporting dashboard', 'Payout from 1st referral'],
    },
    {
      icon: HeartHandshake,
      bg: 'bg-purple-50', color: 'text-purple-600',
      accentFrom: 'from-purple-500', accentTo: 'to-violet-400',
      border: 'border-purple-100',
      label: 'Technology Partner',
      desc: 'Integrate your product or platform with ours. Get early access, co-marketing, and a listing on our site.',
      bullets: ['API & integration access', 'Co-branded marketing', 'Partner directory listing'],
    },
  ];

  const whyUs = [
    { icon: Award,      bg: 'bg-indigo-50', color: 'text-indigo-600', label: 'Certified Experts',  desc: 'Our team is trained and certified by our technology partners to deliver top-tier support.' },
    { icon: Zap,        bg: 'bg-yellow-50', color: 'text-yellow-600', label: 'Cutting-Edge Stack', desc: 'Early access to new features and platform updates — always ahead of the curve.' },
    { icon: Shield,     bg: 'bg-green-50',  color: 'text-green-600',  label: 'Enterprise Grade',   desc: 'The same infrastructure used by enterprise customers — made accessible to your clients.' },
    { icon: TrendingUp, bg: 'bg-blue-50',   color: 'text-blue-600',   label: 'Proven Growth',      desc: 'Our active partners see an average earnings growth of 24% year-on-year.' },
    { icon: Star,       bg: 'bg-pink-50',   color: 'text-pink-600',   label: 'Priority Support',   desc: 'Skip the queue. Partners get a dedicated account manager and priority technical response.' },
    { icon: Globe,      bg: 'bg-teal-50',   color: 'text-teal-600',   label: 'Local SA Network',   desc: 'SA-hosted infrastructure and a local team that understands your market.' },
  ];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-900/25" />
          <div className="absolute top-1/4 left-1/2 w-[60rem] h-[60rem] rounded-full bg-indigo-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 -left-20 w-[40rem] h-[40rem] rounded-full bg-blue-600/10 blur-3xl animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-sm font-semibold mb-8 backdrop-blur-sm">
            <Handshake className="w-4 h-4" />
            World-Class Technology Partners
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-none">
            Powering Your Success<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              Together.
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            We collaborate with the industry's best to deliver a hosting experience that is fast, secure and reliable.
            Join our partner programme and build a business on world-class infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="#partner-program"
              onClick={(e) => { e.preventDefault(); document.getElementById('partner-program')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg hover:shadow-indigo-500/25 transition-all"
            >
              Join Our Network <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="#application-form"
              onClick={(e) => { e.preventDefault(); document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white transition-all"
            >
              Apply Now
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: '4',     label: 'Partner Types' },
              { value: '30%',   label: 'Max Discount' },
              { value: 'R∞',    label: 'No Earning Cap' },
              { value: '24/7',  label: 'Partner Support' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl px-6 py-5">
                <p className="text-3xl font-extrabold text-white mb-1">{value}</p>
                <p className="text-slate-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Technology Stack Ticker ───────────────────────────── */}
      <div className="bg-white border-y border-slate-100 py-12 overflow-hidden relative">
        <div className="relative w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-lg font-bold text-slate-800 uppercase tracking-widest">Our Technology Stack</h3>
            <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">We have partnered with the leading names in web hosting technology to power our platform.</p>
          </div>

          <div className="flex overflow-hidden relative w-full">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="flex animate-scroll hover:pause whitespace-nowrap min-w-full items-center">
              <div className="flex items-center gap-24 pr-24">
                {baseLogos.map((logo, index) => (
                  <div key={`logo-1-${index}`} className="flex-shrink-0 group relative z-0">
                    <div className="h-12 w-auto transition-all duration-300 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transform">
                      <img
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        className="h-full w-auto object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerText = logo.name;
                          e.target.parentElement.className = 'text-xl font-bold text-slate-400';
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-24 pr-24">
                {baseLogos.map((logo, index) => (
                  <div key={`logo-2-${index}`} className="flex-shrink-0 group relative z-0">
                    <div className="h-12 w-auto transition-all duration-300 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transform">
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="h-full w-auto object-contain"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Partner Types ─────────────────────────────────────── */}
      <Section>
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
            <Users className="w-4 h-4" />
            Choose How You Partner
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            4 Ways to Grow With Us
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Whether you want to resell hosting, refer clients or integrate your product — there is a programme built for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerTypes.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.label} className={`bg-white rounded-2xl border ${p.border} shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col`}>
                <div className={`h-1.5 w-full bg-gradient-to-r ${p.accentFrom} ${p.accentTo}`} />
                <div className="p-6 flex flex-col flex-1">
                  <div className={`w-11 h-11 rounded-xl ${p.bg} flex items-center justify-center ${p.color} mb-4 shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-gray-900 mb-2">{p.label}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs text-gray-500">
                        <CheckCircle className={`w-3.5 h-3.5 shrink-0 ${p.color}`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── Partner Programme Benefits (dark) ─────────────────── */}
      <div id="partner-program" className="relative py-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-indigo-900/40 via-slate-900 to-slate-900" />
          <div className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-blue-600/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-6 backdrop-blur-sm">
                <Users className="w-4 h-4" />
                For Professionals
              </div>
              <h2 className="text-4xl font-extrabold text-white mb-6">Grow Your Business With Us</h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Join our partner ecosystem designed for web designers, developers and IT consultants.
                We handle the infrastructure while you focus on your clients.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Handshake, bg: 'bg-indigo-500/20', color: 'text-indigo-400', title: 'Referral Programme',   desc: 'Earn competitive recurring commissions for every client you refer. No caps, no limits.' },
                  { icon: Award,     bg: 'bg-blue-500/20',   color: 'text-blue-400',   title: 'Reseller Discounts',   desc: 'Get up to 30% off standard hosting rates — perfect for agencies managing multiple client sites.' },
                  { icon: Zap,       bg: 'bg-green-500/20',  color: 'text-green-400',  title: 'Priority Support',     desc: 'Skip the queue with a dedicated account manager and priority technical assistance.' },
                ].map(({ icon: Icon, bg, color, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${bg} flex items-center justify-center ${color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                      <p className="text-slate-400">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  to="#application-form"
                  onClick={(e) => { e.preventDefault(); document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  Apply Now <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-2xl opacity-20 transform rotate-3 scale-105" />
              <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Programme Benefits</h3>
                <ul className="space-y-4">
                  {[
                    'Recurring revenue share',
                    'White-label marketing materials',
                    'Dedicated Partner Portal',
                    'Early access to beta features',
                    'Free migration assistance',
                    'Quarterly performance bonuses',
                  ].map((item) => (
                    <li key={item} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Average Partner Earnings</span>
                    <span className="text-green-400 text-sm font-bold">+24% YoY</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-green-500 w-3/4 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Application Form ─────────────────────────────────── */}
      <Section id="application-form" background="gray">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
              <MessageSquare className="w-4 h-4" />
              Get Started Today
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Partner Application</h2>
            <p className="text-lg text-gray-500">Join our network and start growing your business today. We will be in touch within one business day.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full rounded-xl border border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-sm" required />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1.5">Company Name</label>
                  <input type="text" id="company" value={formData.company} onChange={handleChange} className="w-full rounded-xl border border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full rounded-xl border border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-sm" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                  <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-xl border border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-sm" />
                </div>
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-1.5">Website URL</label>
                <input type="url" id="website" value={formData.website} onChange={handleChange} className="w-full rounded-xl border border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-sm" placeholder="https://" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-1.5">Partnership Type</label>
                  <select id="type" value={formData.type} onChange={handleChange} className="w-full rounded-xl border border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-sm">
                    <option>Reseller Partner</option>
                    <option>Referral Partner</option>
                    <option>Affiliate</option>
                    <option>Technology Partner</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="clients" className="block text-sm font-semibold text-gray-700 mb-1.5">Estimated Clients</label>
                  <select id="clients" value={formData.clients} onChange={handleChange} className="w-full rounded-xl border border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-sm">
                    <option>1 - 10</option>
                    <option>11 - 50</option>
                    <option>50+</option>
                    <option>Just starting out</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">Tell us about yourself (optional)</label>
                <textarea id="message" rows={4} value={formData.message} onChange={handleChange} className="w-full rounded-xl border border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-sm" placeholder="What kind of clients do you work with? What are your goals?" />
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
                className="w-full py-4 px-6 text-lg font-bold bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white rounded-xl shadow-lg transition-all"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* ── Why Partner With Us ───────────────────────────────── */}
      <Section>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Why Partner With Website365?</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We provide the tools, support and infrastructure you need to build a successful hosting business in South Africa.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map(({ icon: Icon, bg, color, label, desc }) => (
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
    </>
  );
};

export default Partners;
