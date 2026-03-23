import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Users, Handshake, Globe, ArrowRight, Award, Zap, Shield, CheckCircle } from 'lucide-react';
import { submitForm } from '../utils/formSubmit';

const partnerLogos = [
  { name: 'cPanel', src: '/images/partners/CPanel_logo.svg.png' },
  { name: 'CloudLinux', src: '/images/partners/CloudLinux-icon-1.webp' },
  { name: 'DirectAdmin', src: '/images/partners/DirectAdmin-icon-1.webp' },
  { name: 'Imunify360', src: '/images/partners/Imunify360-icon.webp' },
  { name: 'LiteSpeed', src: '/images/partners/LiteSpeed-icon.webp' },
  { name: 'Softaculous', src: '/images/partners/Softaculous-Icon.webp' },
  { name: 'Sectigo', src: '/images/partners/sectigo_logo_color_small.png' },
  { name: 'WordPress', src: '/images/partners/WordPress.png' },
  { name: 'GeoTrust', src: '/images/partners/geotrust-tab.png' },
  { name: 'RapidSSL', src: '/images/partners/rapidssl.gif' },
  { name: 'Thawte', src: '/images/partners/thawte-ssl-certificate-logo.png' },
  { name: 'WHMCS', src: '/images/partners/Whmcs-icon.webp' },
];

import { useNavigate } from 'react-router-dom';

const Partners = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    type: 'Reseller Partner',
    clients: '1 - 10',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const submissionData = { 
      ...formData, 
      form_type: 'Partner Application'
    };
    
    const result = await submitForm(submissionData);
    
    setIsSubmitting(false);
    
    if (result.success) {
      navigate('/thank-you');
    } else {
      alert('Sorry, there was an error submitting your application. Please try again later.');
    }
  };
  // Double the logos for seamless scrolling
  const baseLogos = [...partnerLogos, ...partnerLogos];

  return (
    <>
      {/* Magnificent Hero */}
      <div className="relative bg-slate-900 overflow-hidden py-16 lg:py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-900/20" />
          <div className="absolute top-1/4 left-1/2 w-[60rem] h-[60rem] rounded-full bg-indigo-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 -left-20 w-[40rem] h-[40rem] rounded-full bg-blue-600/10 blur-3xl animate-pulse delay-700" />
          
          {/* Network Pattern */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <Handshake className="w-4 h-4" />
            <span>World-Class Technology Partners</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Powering Your Success <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Together.</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            We collaborate with the industry's best to deliver a hosting experience that is fast, secure, and reliable. When you host with us, you're backed by global leaders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="#partner-program" className="rounded-full px-8 py-4 text-lg font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg hover:shadow-indigo-500/25 transition-all">
              Join Our Network <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Technology Stack Ticker */}
      <div className="bg-white border-y border-slate-100 py-12 overflow-hidden relative">
        <div className="relative w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-lg font-bold text-slate-800 uppercase tracking-widest">
              Our Technology Stack
            </h3>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">We've partnered with the leading names in web hosting technology.</p>
          </div>
          
          <div className="flex overflow-hidden relative w-full mask-linear-gradient">
            {/* Enhanced Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

            <div className="flex animate-scroll hover:pause whitespace-nowrap min-w-full items-center">
              {/* First set of logos */}
              <div className="flex items-center gap-24 pr-24">
                {baseLogos.map((logo, index) => (
                  <div key={`logo-1-${index}`} className="flex-shrink-0 group relative z-0">
                    <div className="h-12 w-auto transition-all duration-300 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transform group-hover:scale-110">
                      <img 
                        src={logo.src} 
                        alt={`${logo.name} logo`} 
                        className="h-full w-auto object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerText = logo.name;
                          e.target.parentElement.className = "text-xl font-bold text-slate-400";
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Duplicate set for seamless scrolling */}
              <div className="flex items-center gap-24 pr-24">
                {baseLogos.map((logo, index) => (
                  <div key={`logo-2-${index}`} className="flex-shrink-0 group relative z-0">
                    <div className="h-12 w-auto transition-all duration-300 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transform group-hover:scale-110">
                      <img 
                        src={logo.src} 
                        alt={logo.name} 
                        className="h-full w-auto object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="partner-program" className="relative py-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
           <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-indigo-900/40 via-slate-900 to-slate-900" />
           <div className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-blue-600/10 blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
                  <Users className="w-4 h-4" />
                  <span>For Professionals</span>
               </div>
               <h2 className="text-4xl font-extrabold text-white mb-6">Grow Your Business With Us</h2>
               <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Join our partner ecosystem designed for web designers, developers, and IT consultants. We handle the infrastructure while you focus on your clients.
               </p>
               
               <div className="space-y-6">
                 <div className="flex gap-4">
                   <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                     <Handshake className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-white mb-2">Referral Program</h3>
                     <p className="text-slate-400">Earn competitive recurring commissions for every client you refer. No caps, no limits.</p>
                   </div>
                 </div>
                 
                 <div className="flex gap-4">
                   <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                     <Award className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-white mb-2">Reseller Discounts</h3>
                     <p className="text-slate-400">Get up to 30% off standard hosting rates. Perfect for agencies managing multiple client sites.</p>
                   </div>
                 </div>
                 
                 <div className="flex gap-4">
                   <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">
                     <Zap className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-white mb-2">Priority Support</h3>
                     <p className="text-slate-400">Skip the queue with a dedicated account manager and priority technical assistance.</p>
                   </div>
                 </div>
               </div>

               <div className="mt-10 flex flex-col sm:flex-row gap-4">
                 <Button to="#application-form" className="rounded-full px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/25 transition-all">
                    Apply Now <ArrowRight className="w-5 h-5 ml-2" />
                 </Button>
               </div>
             </div>
             
             <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-2xl opacity-20 transform rotate-3 scale-105" />
               <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
                 <h3 className="text-2xl font-bold text-white mb-6">Program Benefits</h3>
                 <ul className="space-y-4">
                   <li className="flex items-center text-slate-300">
                     <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                     <span>Recurring revenue share</span>
                   </li>
                   <li className="flex items-center text-slate-300">
                     <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                     <span>White-label marketing materials</span>
                   </li>
                   <li className="flex items-center text-slate-300">
                     <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                     <span>Dedicated Partner Portal</span>
                   </li>
                   <li className="flex items-center text-slate-300">
                     <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                     <span>Early access to beta features</span>
                   </li>
                   <li className="flex items-center text-slate-300">
                     <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                     <span>Free migration assistance</span>
                   </li>
                   <li className="flex items-center text-slate-300">
                     <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                     <span>Quarterly performance bonuses</span>
                   </li>
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
      <Section id="application-form" background="gray">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Application</h2>
             <p className="text-gray-600">Join our network and start growing your business today.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <form className="space-y-6" onSubmit={handleSubmit}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                   <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-3" 
                    required 
                  />
                 </div>
                 <div>
                   <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                   <input 
                    type="text" 
                    id="company" 
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-3" 
                  />
                 </div>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                   <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-3" 
                    required 
                  />
                 </div>
                 <div>
                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                   <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-3" 
                  />
                 </div>
               </div>

               <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
                  <input 
                    type="url" 
                    id="website" 
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-3" 
                    placeholder="https://" 
                  />
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Partnership Type</label>
                    <select 
                      id="type" 
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-3"
                    >
                      <option>Reseller Partner</option>
                      <option>Referral Partner</option>
                      <option>Affiliate</option>
                      <option>Technology Partner</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="clients" className="block text-sm font-medium text-gray-700 mb-1">Estimated Clients</label>
                    <select 
                      id="clients" 
                      value={formData.clients}
                      onChange={handleChange}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-3"
                    >
                      <option>1 - 10</option>
                      <option>11 - 50</option>
                      <option>50+</option>
                      <option>Just starting out</option>
                    </select>
                  </div>
               </div>

               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                 <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-3"
                ></textarea>
               </div>

               <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all"
              >
                 {isSubmitting ? 'Submitting...' : 'Submit Application'}
               </Button>
            </form>
          </div>
        </div>
      </Section>

      <div className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-white mb-4">Why Partner With Us?</h2>
             <p className="text-slate-400 max-w-2xl mx-auto">We provide the tools, support, and infrastructure you need to succeed.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Certified Experts</h3>
              </div>
              <p className="text-slate-400 text-sm">Our team is trained and certified by our partners to provide top-tier support.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Cutting Edge</h3>
              </div>
              <p className="text-slate-400 text-sm">We get early access to new features and updates to keep your site ahead of the curve.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-green-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Enterprise Grade</h3>
              </div>
              <p className="text-slate-400 text-sm">The same technology used by Fortune 500 companies, made accessible to you.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
