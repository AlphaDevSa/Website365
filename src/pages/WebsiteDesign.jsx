import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import { Monitor, Brush, Sparkles, ArrowRight, Layout, MousePointer, Smartphone, Rocket, Briefcase, Gem } from 'lucide-react';
import Button from '../components/Button';
import WebDesignModal from '../components/WebDesignModal';

const WebsiteDesign = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <WebDesignModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* Magnificent Hero */}
      <div className="relative bg-slate-900 overflow-hidden py-16 lg:py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-900/20" />
          <div className="absolute -top-20 -left-20 w-[40rem] h-[40rem] rounded-full bg-cyan-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] rounded-full bg-blue-600/10 blur-3xl animate-pulse delay-700" />
          
          {/* Wireframe Pattern */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <Monitor className="w-4 h-4" />
            <span>Responsive Business Websites</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Stunning Design. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Flawless Function.</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Your website is your 24/7 salesperson. We craft professional, high-converting websites that look amazing on every device and drive real business results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="rounded-full px-8 py-4 text-lg font-semibold bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              Get a Quote <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Layout className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Modern Layouts</h3>
              </div>
              <p className="text-slate-400 text-sm">Clean, contemporary designs that build trust and authority with your visitors.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <MousePointer className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">User Centric</h3>
              </div>
              <p className="text-slate-400 text-sm">Intuitive navigation and clear calls-to-action to guide visitors to convert.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Fully Responsive</h3>
              </div>
              <p className="text-slate-400 text-sm">Looks perfectly polished on phones, tablets, and desktops automatically.</p>
            </div>
          </div>
        </div>
      </div>

      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Design That Drives Results</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We combine clean aesthetics with thoughtful user experience to convert visitors into customers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow border border-gray-100 text-center">
            <Monitor className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Responsive Layouts</h3>
            <p className="text-gray-600">Looks great on phones, tablets and desktops with mobile-first design.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow border border-gray-100 text-center">
            <Brush className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Custom Branding</h3>
            <p className="text-gray-600">Color, typography and layout aligned to your brand identity.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow border border-gray-100 text-center">
            <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Performance & SEO</h3>
            <p className="text-gray-600">Fast-loading pages with clean structure for better rankings.</p>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Web Design Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Transparent pricing for every stage of your business growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Launch"
            price="R699"
            billingPeriod="once-off"
            description="Perfect for startups and personal profiles."
            icon={Rocket}
            ctaText="Request Quote"
            ctaOnClick={() => setIsModalOpen(true)}
            features={[
              "1-page website (Hero, About, Services, Contact)",
              "Customised to your brand style",
              "Mobile-responsive design",
              "Basic contact form or WhatsApp CTA",
              "1 round of revisions",
              "Setup on your HostExceed hosting",
              "Basic on-page SEO"
            ]}
          />
          <Card
            title="Business"
            price="R1999"
            billingPeriod="once-off"
            description="Our most popular package for growing businesses."
            icon={Briefcase}
            popular={true}
            ctaText="Request Quote"
            ctaOnClick={() => setIsModalOpen(true)}
            features={[
              "Up to 5 pages (Home, About, Services, etc.)",
              "Custom layout tailored to your goals",
              "Mobile-responsive design",
              "Contact form and lead capture",
              "2 rounds of revisions",
              "Basic on-page SEO for key pages",
              "Setup on HostExceed hosting",
              "Basic analytics integration"
            ]}
          />
          <Card
            title="Premium"
            price="R3499"
            billingPeriod="once-off"
            description="Advanced features for established brands."
            icon={Gem}
            ctaText="Request Quote"
            ctaOnClick={() => setIsModalOpen(true)}
            features={[
              "Up to 10 pages with custom layouts",
              "Advanced visual design & structuring",
              "Mobile-responsive design",
              "Multiple call-to-action entry points",
              "3 rounds of revisions",
              "On-page SEO across core pages",
              "Analytics and conversion tracking",
              "Strategy call to align design with goals",
              "Option for extra pages as add-ons"
            ]}
          />
        </div>
      </Section>

{/* Old Typical Deliverables removed */}
    </>
  );
};

export default WebsiteDesign;
