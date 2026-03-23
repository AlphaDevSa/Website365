import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import SEO from '../components/SEO';
import Button from '../components/Button';
import DomainResellerModal from '../components/DomainResellerModal';
import { Globe, ShieldCheck, Zap, ArrowRight, Settings, Users, Database, Percent } from 'lucide-react';

const DomainReseller = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <DomainResellerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <SEO 
        title="Domain Reseller Program" 
        description="Launch your own domain registration business. Wholesale pricing on .co.za, .com and hundreds of other TLDs with full API access."
        canonical="https://website365.co.za/domains/reseller"
      />

      {/* Hero Section */}
      <div className="relative bg-slate-900 overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900/20" />
          <div className="absolute top-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-blue-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] rounded-full bg-indigo-600/10 blur-3xl animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <Globe className="w-4 h-4" />
            <span>Wholesale Domain Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Your Domain. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Your Business.</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Start selling domains under your own brand. Our reseller program provides the infrastructure, you provide the vision. Wholesale pricing and full API control.
          </p>

          <div className="flex justify-center">
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="rounded-full px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/25 transition-all"
            >
              Become a Reseller <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">The tools and pricing you need to succeed in the competitive domain market.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Wholesale Pricing"
            description="Access tiered pricing models that ensure healthy margins for your business on all popular TLDs."
            icon={Percent}
          />
          <Card
            title="Full API Access"
            description="Seamlessly integrate domain registration into your own applications with our robust, documented API."
            icon={Settings}
          />
          <Card
            title="White-Label"
            description="Completely unbranded infrastructure. Your customers will only see your brand throughout the process."
            icon={Users}
          />
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Powerful Management Tools</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Automated Provisioning</h3>
                  <p className="text-gray-600">Instant registration and activation of domains. No manual intervention required.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Domain Theft Protection</h3>
                  <p className="text-gray-600">Advanced security features to keep your clients' digital assets safe from unauthorized transfers.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">High-Performance DNS</h3>
                  <p className="text-gray-600">Reliable, fast DNS clusters ensuring your clients' websites are always reachable.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Ready to Scale?</h3>
            <p className="text-slate-400 mb-8">Join hundreds of agencies and entrepreneurs who trust our domain infrastructure.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white">✓</div>
                No hidden setup fees
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white">✓</div>
                Low deposit requirements
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white">✓</div>
                24/7 Expert support
              </li>
            </ul>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-white text-slate-900 hover:bg-slate-100 py-4"
            >
              Contact Sales Team
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default DomainReseller;
