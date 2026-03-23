import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Clock, MessageCircle, HelpCircle, ArrowRight, User, Settings, MessageSquare, ChevronRight, AlertCircle } from 'lucide-react';
import { submitForm } from '../utils/formSubmit';

import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
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
      form_type: 'Contact Page Message'
    };
    
    const result = await submitForm(submissionData);
    
    setIsSubmitting(false);
    
    if (result.success) {
      navigate('/thank-you');
    } else {
      setSubmitError('Sorry, there was an error sending your message. Please try again later.');
    }
  };
  return (
    <>
      {/* Magnificent Hero */}
      <div className="relative bg-slate-900 overflow-hidden py-16 lg:py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900/20" />
          <div className="absolute top-1/4 right-1/4 w-[50rem] h-[50rem] rounded-full bg-blue-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 -left-20 w-[40rem] h-[40rem] rounded-full bg-indigo-600/10 blur-3xl animate-pulse delay-700" />
          
          {/* Dot Pattern */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <MessageCircle className="w-4 h-4" />
            <span>We'd Love to Hear From You</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Let's Start a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Conversation.</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether you have a question about our services, pricing, or need technical support, our team is ready to answer all your questions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button to="#contact-form" className="rounded-full px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/25 transition-all">
              Send a Message <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button to="https://wa.me/27836000152" variant="whatsapp" className="rounded-full px-8 py-4 text-lg font-semibold transition-all backdrop-blur-sm group">
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" /> WhatsApp Us
            </Button>
          </div>

          {/* Quick Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Call Us</h3>
              </div>
              <p className="text-slate-400 text-sm">086 199 5070</p>
              <p className="text-slate-500 text-xs mt-1">Mon-Fri, 8am-5pm</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Email Us</h3>
              </div>
              <p className="text-slate-400 text-sm">support@website365.co.za</p>
              <p className="text-slate-500 text-xs mt-1">We reply within 24 hours</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-green-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Support</h3>
              </div>
              <p className="text-slate-400 text-sm">Open a Ticket</p>
              <p className="text-slate-500 text-xs mt-1">24/7 Technical Assistance</p>
            </div>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <Phone className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-500">086 199 5070</p>
                  <p className="text-sm text-gray-400">Mon-Fri from 8am to 5pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <Mail className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-500">support@website365.co.za</p>
                  <p className="text-sm text-gray-400">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900">Location</h3>
                  <p className="mt-1 text-gray-500">Pretoria, South Africa</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <Clock className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                  <p className="mt-1 text-gray-500">Monday - Friday: 08:00 - 17:00</p>
                  <p className="text-gray-500">Saturday: 09:00 - 13:00</p>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div id="contact-form" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 ml-1">Name</label>
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
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 ml-1">Phone</label>
                  <div className="relative group/input">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-blue-500 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input 
                      type="text" 
                      id="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-4 py-3 rounded-xl border-gray-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 border transition-all placeholder:text-gray-400" 
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 ml-1">Email</label>
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
              <div className="space-y-1">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 ml-1">Service Interest</label>
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-blue-500 transition-colors">
                    <Settings className="w-5 h-5" />
                  </div>
                  <select 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-10 py-3 rounded-xl border-gray-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 border transition-all appearance-none bg-white"
                  >
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
                    <ChevronRight className="w-4 h-4 transform rotate-90" />
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 ml-1">Message</label>
                <div className="relative group/input">
                  <div className="absolute top-3 left-3 pointer-events-none text-gray-400 group-focus-within/input:text-blue-500 transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <textarea 
                    id="message" 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-4 py-3 rounded-xl border-gray-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 border transition-all placeholder:text-gray-400"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
              </div>
              {submitError && (
                <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}
              <Button type="submit" disabled={isSubmitting} className="w-full py-4 font-bold text-lg rounded-xl shadow-lg shadow-blue-600/20">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;