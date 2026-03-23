import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import TrustBar from '../components/TrustBar';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { Server, Globe, Monitor, Zap, Heart, Shield, CheckCircle, Search, User, Mail, Phone, MessageSquare, Settings, ArrowRight, Rocket, ChevronRight, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import WebDesignModal from '../components/WebDesignModal';
import LogoTicker from '../components/LogoTicker';
import { submitForm } from '../utils/formSubmit';

import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [isWebDesignModalOpen, setIsWebDesignModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    service: 'cPanel Hosting'
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    const submissionData = { 
      ...formData, 
      form_type: 'Home Page Quick Contact'
    };
    
    const result = await submitForm(submissionData);
    
    setIsSubmitting(false);
    
    if (result.success) {
      navigate('/thank-you');
    } else {
      setSubmitError('Sorry, there was an error submitting your request. Please try again later.');
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('why-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
      <div className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 opacity-90" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
                Launch Fast in South Africa
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl">
                Local NVMe hosting, easy domains, and conversion-focused web design. Everything you need to get online and grow.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center text-slate-300 text-sm bg-white/10 px-3 py-2 rounded-md">
                  <Shield className="w-4 h-4 text-green-400 mr-2" /> Free SSL
                </span>
                <span className="inline-flex items-center text-slate-300 text-sm bg-white/10 px-3 py-2 rounded-md">
                  <Zap className="w-4 h-4 text-yellow-300 mr-2" /> NVMe Speed
                </span>
                <span className="inline-flex items-center text-slate-300 text-sm bg-white/10 px-3 py-2 rounded-md">
                  <Heart className="w-4 h-4 text-pink-300 mr-2" /> Local Support
                </span>
              </div>
              <div className="flex gap-4">
                <Button to="/hosting" variant="primary" className="text-lg px-8 py-4 rounded-full shadow-lg shadow-blue-500/20">Get Hosting</Button>
                <Button onClick={scrollToContact} variant="ghost" className="text-lg px-8 py-4 rounded-full hover:border-blue-500/50 hover:text-blue-400 transition-all backdrop-blur-sm group">
                  Check Domain <Search className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </div>
            <div>
              <img 
                src="/images/Web-Design-PNG-Image.png" 
                alt="Modern website design on a laptop and smartphone" 
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>


      <TrustBar />

      <Section id="services">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Succeed Online</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">From registering your first domain to hosting a high-traffic e-commerce store, we have the tools you need.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Web Hosting"
            description="Fast, secure, and reliable hosting for your website. 99.9% uptime guarantee."
            icon={Server}
            ctaText="View Plans"
            ctaLink="/hosting"
            features={["NVMe SSD Storage", "Free SSL Certificate", "24/7 Local Support", "One-Click Installers"]}
          />
          <Card
            title="Domain Registration"
            description="Secure your perfect domain name today. .co.za, .com, and more available."
            icon={Globe}
            ctaText="Search Domains"
            ctaLink="/domains"
            features={["Instant Registration", "DNS Management", "Domain Theft Protection", "Easy Transfer"]}
          />
          <Card
            title="Web Design"
            description="Professional, mobile-responsive websites designed to convert visitors into customers."
            icon={Monitor}
            ctaText="Learn More"
            ctaOnClick={() => setIsWebDesignModalOpen(true)}
            features={["Custom Design", "SEO Optimized", "Mobile Responsive", "Content Management"]}
          />
        </div>
      </Section>

      <Section background="gray" id="why-us">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Website365?</h2>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Zap className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Fast SSD/NVMe Hosting</h3>
                  <p className="mt-2 text-gray-500">Our servers use the latest NVMe technology to ensure your website loads instantly.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Heart className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Local Support</h3>
                  <p className="mt-2 text-gray-500">Speak to real humans based in South Africa who understand your needs.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Shield className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Secure & Reliable</h3>
                  <p className="mt-2 text-gray-500">Advanced security measures and daily backups keep your data safe.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Simple Setup</h3>
                  <p className="mt-2 text-gray-500">Get started in minutes with our easy-to-use control panels and instant activation.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
             <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                   <Rocket className="w-5 h-5" />
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900">Get Started Today</h3>
               </div>
               
               <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                  <div className="relative group/input">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-blue-500 transition-colors">
                      <User className="w-5 h-5" />
                    </div>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-4 py-3 rounded-xl border-gray-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 border transition-all placeholder:text-gray-400" 
                      placeholder="Your Full Name" 
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                  <div className="relative group/input">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-blue-500 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-4 py-3 rounded-xl border-gray-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 border transition-all placeholder:text-gray-400" 
                      placeholder="you@company.com" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                    <div className="relative group/input">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-blue-500 transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-4 py-3 rounded-xl border-gray-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 border transition-all placeholder:text-gray-400" 
                        placeholder="086 199 5070" 
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 ml-1">Whatsapp</label>
                    <div className="relative group/input">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-blue-500 transition-colors">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <input 
                        type="tel" 
                        id="whatsapp" 
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-4 py-3 rounded-xl border-gray-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 border transition-all placeholder:text-gray-400" 
                        placeholder="083 600 0152" 
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 ml-1">Service Interest</label>
                  <div className="relative group/input">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-blue-500 transition-colors">
                      <Settings className="w-5 h-5" />
                    </div>
                    <select 
                      id="service" 
                      value={formData.service}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-4 py-3 rounded-xl border-gray-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 border transition-all appearance-none bg-white"
                    >
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
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                      <ChevronRight className="w-4 h-4 transform rotate-90" />
                    </div>
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
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl transition-all font-bold text-lg shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? 'Processing...' : 'Request Info'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
             </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
        </div>
        <Testimonials />
      </Section>

      <Section background="gray">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 shadow-2xl">
            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-blue-400/10 rounded-full pointer-events-none" />

            <div className="relative px-8 py-10 md:px-12 md:py-12">
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">

                {/* Icon badge */}
                <div className="shrink-0 flex justify-center md:justify-start">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Text content */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.15em] mb-2">Our Sister Company</p>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 leading-tight">
                    IPT One Telecoms
                  </h2>
                  <p className="text-blue-100 text-base mb-5 max-w-lg">
                    Need a virtual landline or a fully hosted PBX system for your business? IPT One delivers professional VoIP &amp; telephony solutions across South Africa.
                  </p>
                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {['Hosted PBX', 'Virtual Numbers', 'VoIP Solutions', 'Call Recording'].map((f) => (
                      <span key={f} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-300 shrink-0" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="shrink-0 flex flex-col items-center md:items-end gap-3">
                  <a
                    href="https://www.iptone.co.za"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-blue-800 font-bold px-7 py-4 rounded-xl shadow-lg hover:bg-blue-50 transition-all group text-base whitespace-nowrap"
                  >
                    Visit IPT One
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <span className="text-blue-300 text-xs">www.iptone.co.za</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Section>

      <LogoTicker />
    </>
  );
};

export default Home;
