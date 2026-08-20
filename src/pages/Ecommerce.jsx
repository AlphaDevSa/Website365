import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import { ShoppingCart, CreditCard, Truck, ArrowRight, TrendingUp, ShieldCheck, Smartphone, Package, Store, Award, ArrowUpRight } from 'lucide-react';
import Button from '../components/Button';
import EcommerceModal from '../components/EcommerceModal';

const Ecommerce = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Magnificent Hero */}
      <div className="relative bg-slate-900 overflow-hidden py-16 lg:py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-green-900/20" />
          <div className="absolute top-1/4 -right-20 w-[50rem] h-[50rem] rounded-full bg-green-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-[40rem] h-[40rem] rounded-full bg-emerald-600/10 blur-3xl animate-pulse delay-700" />
          
          {/* Commerce Pattern */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-500/30 text-green-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <ShoppingCart className="w-4 h-4" />
            <span>Complete Online Store Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Sell Everywhere. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Grow Faster.</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Turn your passion into profit with a powerful, secure online store. Manage products, payments, and shipping from one easy-to-use dashboard.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="rounded-full px-8 py-4 text-lg font-semibold bg-green-600 hover:bg-green-500 text-white shadow-lg hover:shadow-green-500/25 transition-all"
            >
              Launch Your Store <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-green-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Easy Payments</h3>
              </div>
              <p className="text-slate-400 text-sm">Accept credit cards, EFT, and more with integrated South African payment gateways.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Package className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Inventory Control</h3>
              </div>
              <p className="text-slate-400 text-sm">Track stock levels, variants, and categories effortlessly as you sell.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-teal-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Marketing Tools</h3>
              </div>
              <p className="text-slate-400 text-sm">Built-in SEO, discount codes, and abandoned cart recovery to boost sales.</p>
            </div>
          </div>
        </div>
      </div>

      <EcommerceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-white rounded-2xl shadow border border-gray-100">
            <ShoppingCart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Product Management</h3>
            <p className="text-gray-600">Organize products, categories, variants and inventory with ease.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow border border-gray-100">
            <CreditCard className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
            <p className="text-gray-600">Integrations for popular South African gateways and global providers.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow border border-gray-100">
            <Truck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Shipping & Fulfillment</h3>
            <p className="text-gray-600">Flexible shipping rules, courier options and order tracking.</p>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">eCommerce Deliverables</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose the option that fits your goals today and grows with you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Starter Store"
            description="Launch quickly with essentials."
            ctaText="Contact Us"
            ctaOnClick={() => setIsModalOpen(true)}
            features={["Core pages", "Basic catalog", "Payment integration", "Shipping setup"]}
          />
          <Card
            title="Growth Store"
            description="Scale with marketing features."
            ctaText="Contact Us"
            ctaOnClick={() => setIsModalOpen(true)}
            popular={true}
            features={["Coupons", "Abandoned cart", "Analytics", "Email integrations"]}
          />
          <Card
            title="Custom Commerce"
            description="Tailored functionality for unique needs."
            ctaText="Contact Us"
            ctaOnClick={() => setIsModalOpen(true)}
            features={["Custom workflows", "3rd-party integrations", "Performance tuning", "Launch support"]}
          />
        </div>
      </Section>

      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">eCommerce Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">All-inclusive packages to get your store up and running.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Store Starter"
            price="R6499"
            billingPeriod="once-off"
            description="Perfect for new online shops."
            icon={Store}
            ctaText="Request Quote"
            ctaOnClick={() => setIsModalOpen(true)}
            features={[
              "Setup of WooCommerce or similar",
              "Up to 20 products added",
              "1 payment gateway configured",
              "Basic shipping options",
              "Up to 5 core pages",
              "Mobile-responsive design",
              "1 round of revisions",
              "Basic on-page SEO"
            ]}
          />
          <Card
            title="Store Growth"
            price="R9499"
            billingPeriod="once-off"
            description="Scale your business faster."
            icon={TrendingUp}
            popular={true}
            ctaText="Request Quote"
            ctaOnClick={() => setIsModalOpen(true)}
            features={[
              "Up to 100 products added",
              "2 payment gateways configured",
              "Detailed shipping setup",
              "Up to 8 pages",
              "Mobile-responsive design",
              "2 rounds of revisions",
              "On-page SEO for key pages",
              "Email notification templates",
              "Analytics & conversion tracking"
            ]}
          />
          <Card
            title="Store Pro"
            price="R13999"
            billingPeriod="once-off"
            description="Advanced features for power sellers."
            icon={Award}
            ctaText="Request Quote"
            ctaOnClick={() => setIsModalOpen(true)}
            features={[
              "Larger/complex product catalogues",
              "Advanced shipping rules",
              "Coupons & promotional workflows",
              "3 rounds of revisions",
              "Deeper analytics & tracking",
              "Optional integrations scoped separately",
              "Strategy & planning call"
            ]}
          />
        </div>
      </Section>
    </>
  );
};

export default Ecommerce;
