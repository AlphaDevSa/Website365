import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import { Monitor, ShoppingCart, Palette, ArrowRight, Layout, Smartphone, PenTool, Image, Code, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import WebDesignModal from '../components/WebDesignModal';

const WebDesign = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <WebDesignModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* Magnificent Hero */}
      <div className="relative bg-slate-900 overflow-hidden py-16 lg:py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-pink-900/20" />
          <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] rounded-full bg-pink-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-purple-600/10 blur-3xl animate-pulse delay-700" />
          
          {/* Creative Pattern */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-900/30 border border-pink-500/30 text-pink-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <PenTool className="w-4 h-4" />
            <span>Pixel-Perfect Web Design</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            We Design. You <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Convert.</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Beautiful, mobile-first websites that turn visitors into loyal customers. From stunning brochures to powerful eCommerce stores, we build it all.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="rounded-full px-8 py-4 text-lg font-semibold bg-pink-600 hover:bg-pink-500 text-white shadow-lg hover:shadow-pink-500/25 transition-all"
            >
              Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-pink-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                  <Layout className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Custom Design</h3>
              </div>
              <p className="text-slate-400 text-sm">Unique layouts tailored to your brand, not cookie-cutter templates.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Mobile First</h3>
              </div>
              <p className="text-slate-400 text-sm">Responsive designs that look and function perfectly on any device.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">SEO Optimized</h3>
              </div>
              <p className="text-slate-400 text-sm">Clean code and fast loading speeds to help you rank higher on Google.</p>
            </div>
          </div>
        </div>
      </div>

      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Whether you need a professional business website or a full-featured online store, our team delivers fast, secure and SEO-friendly solutions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card
            title="Website Design"
            description="Custom-designed, responsive websites tailored to your brand."
            icon={Monitor}
            ctaText="More Info"
            ctaLink="/web-design/website"
            features={["Responsive Layouts", "SEO Best Practices", "Fast Performance", "Easy Editing"]}
          />
          <Card
            title="eCommerce"
            description="Sell online with secure payments, inventory and shipping tools."
            icon={ShoppingCart}
            ctaText="More Info"
            ctaLink="/web-design/ecommerce"
            features={["Product Catalog", "Online Payments", "Order Management", "Coupons"]}
          />
          <Card
            title="Maintenance"
            description="Secure, reliable care plans to keep your site running smoothly."
            icon={Wrench}
            ctaText="More Info"
            ctaLink="/web-design/maintenance"
            features={["Security Scans", "Daily Backups", "Plugin Updates", "Uptime Monitoring"]}
          />
          <Card
            title="Development"
            description="Custom web applications and complex API integrations."
            icon={Code}
            ctaText="More Info"
            ctaLink="/web-design/development"
            features={["Custom Web Apps", "API Integration", "Database Design", "Scalable Code"]}
          />
        </div>
      </Section>

      <Section background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Built For South African Businesses</h3>
            <p className="text-gray-600 mb-6">We host locally for speed, design for clarity, and optimize for search so your customers find you quickly.</p>
            <div className="flex gap-4">
              <Link to="/web-design/website" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">Website Design</Link>
              <Link to="/web-design/ecommerce" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50">eCommerce</Link>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-extrabold text-gray-900">Mobile-first</div>
                <div className="text-gray-600">Responsive layouts that feel native on phones.</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-gray-900">SEO-ready</div>
                <div className="text-gray-600">Clean markup and fast performance.</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-gray-900">Secure</div>
                <div className="text-gray-600">Best practices and free SSL certificates.</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-gray-900">Editable</div>
                <div className="text-gray-600">Simple content updates without headaches.</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default WebDesign;
