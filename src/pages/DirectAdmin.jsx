import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import FAQ from '../components/FAQ';
import Button from '../components/Button';
import { Server, Zap, Shield, Cpu, ArrowRight, Gauge, Check } from 'lucide-react';
import PlanOrderModal from '../components/PlanOrderModal';

const DirectAdmin = () => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openOrderModal = (plan) => {
    setSelectedPlan(plan);
    setIsOrderOpen(true);
  };

  return (
    <>
      <PlanOrderModal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        plan={selectedPlan}
        formType="Web Hosting Order"
      />

      {/* Magnificent Hero */}
      <div className="relative bg-slate-900 overflow-hidden py-16 lg:py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-slate-900 to-blue-900/20" />
          {/* Hexagon Pattern */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
          
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span>Lightweight & Blazing Fast</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Maximum Speed. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Minimal Overhead.</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Get the full power of your hosting without the bloat. DirectAdmin offers a clean, ultra-fast interface that consumes fewer resources, leaving more performance for your website.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button to="#plans" className="rounded-full px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/25 transition-all">
              View Plans <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Gauge className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Ultra-Efficient</h3>
              </div>
              <p className="text-slate-400 text-sm">Designed to be lightweight, ensuring your server resources go to your site, not the control panel.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Cost-Effective</h3>
              </div>
              <p className="text-slate-400 text-sm">Lower licensing costs mean we pass the savings directly to you without compromising on features.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-green-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Stable & Secure</h3>
              </div>
              <p className="text-slate-400 text-sm">Rock-solid stability with automatic updates and integrated security features to keep you safe.</p>
            </div>
          </div>
        </div>
      </div>

      <Section id="plans">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Pricing, Powerful Hosting</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="500MB - DirectAdmin"
            price="R39.00"
            billingPeriod="Monthly"
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: '500MB - DirectAdmin', price: 'R39.00', billingPeriod: 'Monthly', category: 'DirectAdmin Hosting' })}
            features={[
              "500MB Disk space",
              "3 Email Accounts",
              "1 MySQL Databases",
              "FTP Account"
            ]}
          />
          <Card
            title="1GB - DirectAdmin"
            price="R45.00"
            billingPeriod="Monthly"
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: '1GB - DirectAdmin', price: 'R45.00', billingPeriod: 'Monthly', category: 'DirectAdmin Hosting' })}
            features={[
              "1GB Disk space",
              "50 Email Accounts",
              "1 MySQL Databases",
              "FTP Account"
            ]}
          />
          <Card
            title="2GB - DirectAdmin"
            price="R55.00"
            billingPeriod="Monthly"
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: '2GB - DirectAdmin', price: 'R55.00', billingPeriod: 'Monthly', category: 'DirectAdmin Hosting' })}
            features={[
              "2GB Disk space",
              "75 Email Accounts",
              "2 MySQL Databases",
              "2 FTP Accounts"
            ]}
          />
          <Card
            title="3GB - DirectAdmin"
            price="R65.00"
            billingPeriod="Monthly"
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: '3GB - DirectAdmin', price: 'R65.00', billingPeriod: 'Monthly', category: 'DirectAdmin Hosting' })}
            features={[
              "3GB Disk space",
              "100 Email Accounts",
              "5 MySQL Databases",
              "5 FTP Accounts"
            ]}
          />
          <Card
            title="4GB - DirectAdmin"
            price="R75.00"
            billingPeriod="Monthly"
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: '4GB - DirectAdmin', price: 'R75.00', billingPeriod: 'Monthly', category: 'DirectAdmin Hosting' })}
            features={[
              "4GB Disk space",
              "150 Email Accounts",
              "20 MySQL Databases",
              "5 FTP Accounts"
            ]}
          />
          <Card
            title="10GB - DirectAdmin"
            price="R80.00"
            billingPeriod="Monthly"
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: '10GB - DirectAdmin', price: 'R80.00', billingPeriod: 'Monthly', category: 'DirectAdmin Hosting' })}
            features={[
              "10GB Disk space",
              "200 Email Accounts",
              "20 MySQL Databases",
              "5 FTP Accounts"
            ]}
          />
          <Card
            title="20GB - DirectAdmin"
            price="R90.00"
            billingPeriod="Monthly"
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: '20GB - DirectAdmin', price: 'R90.00', billingPeriod: 'Monthly', category: 'DirectAdmin Hosting' })}
            features={[
              "20GB Disk space",
              "200 Email Accounts",
              "20 MySQL Databases",
              "10 FTP Accounts"
            ]}
          />
          <Card
            title="50GB - DirectAdmin"
            price="R120.00"
            billingPeriod="Monthly"
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: '50GB - DirectAdmin', price: 'R120.00', billingPeriod: 'Monthly', category: 'DirectAdmin Hosting' })}
            features={[
              "50GB Disk Space",
              "200 Email Accounts",
              "20 MySQL Databases",
              "10 FTP Accounts"
            ]}
          />
          <Card
            title="100GB - DirectAdmin"
            price="R150.00"
            billingPeriod="Monthly"
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: '100GB - DirectAdmin', price: 'R150.00', billingPeriod: 'Monthly', category: 'DirectAdmin Hosting' })}
            features={[
              "100GB Disk Space",
              "200 Email Accounts",
              "20 MySQL Databases",
              "10 FTP Accounts"
            ]}
          />
        </div>
      </Section>

      <Section background="gray">
        <FAQ items={[
          { question: "What is DirectAdmin?", answer: "DirectAdmin is a graphical web hosting control panel designed to make administration of websites easier." },
          { question: "Is DirectAdmin compatible with WordPress?", answer: "Yes, absolutely! You can install WordPress with one click using Softaculous within DirectAdmin." },
          { question: "Can I upgrade my plan later?", answer: "Yes, you can upgrade your plan at any time instantly." }
        ]} />
      </Section>
    </>
  );
};

export default DirectAdmin;
