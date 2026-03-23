import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import {
  Monitor, Brush, Sparkles, ArrowRight, Layout, MousePointer, Smartphone,
  Rocket, Briefcase, Gem, Search, Zap, Clock, HeartHandshake, Globe,
  PenTool, CheckCircle, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import WebDesignModal from '../components/WebDesignModal';

const WebsiteDesign = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    { icon: Layout,       bg: 'bg-cyan-50',    color: 'text-cyan-600',   label: 'Custom Layouts',         desc: 'Unique page structures tailored to your brand — no stock templates.' },
    { icon: Smartphone,   bg: 'bg-blue-50',    color: 'text-blue-600',   label: 'Mobile-First Design',    desc: 'Designed for phones first so every visitor gets a perfect experience.' },
    { icon: Search,       bg: 'bg-indigo-50',  color: 'text-indigo-600', label: 'SEO Optimised',          desc: 'Clean markup, proper heading structure and fast load times from day one.' },
    { icon: Brush,        bg: 'bg-purple-50',  color: 'text-purple-600', label: 'Brand Alignment',        desc: 'Colours, typography and imagery chosen to reflect your brand identity.' },
    { icon: Zap,          bg: 'bg-orange-50',  color: 'text-orange-600', label: 'Fast Load Times',        desc: 'Optimised images and lightweight code to keep your Lighthouse score high.' },
    { icon: MousePointer, bg: 'bg-teal-50',    color: 'text-teal-600',   label: 'Clear Calls-to-Action',  desc: 'Every page guides visitors toward the action you want them to take.' },
  ];

  return (
    <>
      <WebDesignModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-900/25" />
          <div className="absolute -top-20 -left-20 w-[50rem] h-[50rem] rounded-full bg-cyan-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] rounded-full bg-blue-600/10 blur-3xl animate-pulse delay-700" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-8 backdrop-blur-sm">
            <Monitor className="w-4 h-4" />
            Responsive Business Websites
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-none">
            Stunning Design.<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Flawless Function.
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Your website is your 24/7 salesperson. We craft professional, high-converting websites
            that look amazing on every device and drive real business results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white transition-all"
            >
              Talk to a Designer
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: '500+',   label: 'Sites Delivered' },
              { value: '2–4 wks', label: 'Avg Turnaround' },
              { value: '3',      label: 'Revision Rounds' },
              { value: '100%',   label: 'Mobile Responsive' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl px-6 py-5">
                <p className="text-3xl font-extrabold text-white mb-1">{value}</p>
                <p className="text-slate-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── What's Included ───────────────────────────────────── */}
      <Section background="gray">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Every Website Includes
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Design That Drives Results
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We combine clean aesthetics with thoughtful user experience to convert visitors into customers.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, bg, color, label, desc }) => (
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

      {/* ── Pricing ───────────────────────────────────────────── */}
      <Section id="plans">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Web Design Packages</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Transparent pricing for every stage of your business growth.</p>
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
              "Setup on your hosting",
              "Basic on-page SEO",
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
              "Setup on hosting",
              "Basic analytics integration",
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
              "Option for extra pages as add-ons",
            ]}
          />
        </div>
      </Section>

      {/* ── Bottom CTA ─────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-cyan-900/20 to-slate-900" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[60rem] h-[20rem] rounded-full bg-cyan-600/10 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-6">
            <MessageSquare className="w-4 h-4" />
            Free Consultation
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to launch your new site?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Tell us about your project and we will send you a free quote within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-full shadow-lg shadow-cyan-500/25 transition-all text-base"
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

export default WebsiteDesign;
