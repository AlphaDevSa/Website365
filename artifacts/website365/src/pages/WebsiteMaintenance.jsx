import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { Wrench, Shield, Clock, CheckCircle, Zap, Activity } from 'lucide-react';

const WebsiteMaintenance = () => {
  return (
    <>
      <SEO 
        title="Website Maintenance Plans" 
        description="Professional website maintenance packages to keep your site secure, updated, and running smoothly. Starting from R199/pm."
        canonical="https://website365.co.za/web-design/maintenance"
      />

      {/* Hero Section */}
      <div className="relative bg-slate-900 overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-900/20" />
          <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] rounded-full bg-emerald-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] rounded-full bg-blue-600/10 blur-3xl animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <Wrench className="w-4 h-4" />
            <span>Proactive Website Care</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            We Handle The Tech. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">You Focus On Business.</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Secure, reliable, and worry-free website maintenance plans designed to keep your digital presence performing at its best.
          </p>

          <div className="flex justify-center">
            <Button to="#plans" className="rounded-full px-8 py-4 text-lg font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-emerald-500/25 transition-all">
              View Care Plans
            </Button>
          </div>
        </div>
      </div>

      <Section id="plans" background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Website Maintenance Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose the level of care that suits your business needs.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Care Basic"
            price="R199"
            yearlyPrice="per month"
            description="Essential security and updates."
            ctaText="Get Care Basic"
            ctaLink="/contact?plan=care-basic"
            features={[
              "Monthly WordPress core, theme and plugin updates",
              "Monthly backup verification",
              "Basic uptime monitoring",
              "Monthly security scan and basic hardening",
              "Email support"
            ]}
          />
          
          <Card
            title="Care Plus"
            price="R399"
            yearlyPrice="per month"
            description="Perfect for growing businesses."
            ctaText="Get Care Plus"
            ctaLink="/contact?plan=care-plus"
            popular={true}
            features={[
              "Everything in Care Basic",
              "Up to 1 hour of small content updates per month",
              "Quarterly performance review (page speed and basic fixes)",
              "Priority email support"
            ]}
          />
          
          <Card
            title="Care Pro"
            price="R699"
            yearlyPrice="per month"
            description="Comprehensive care for serious websites."
            ctaText="Get Care Pro"
            ctaLink="/contact?plan=care-pro"
            features={[
              "Everything in Care Plus",
              "Up to 2.5 hours of content or small feature updates per month",
              "Ecommerce-specific checks (test orders, checkout flow review)",
              "Monthly analytics snapshot",
              "Higher-priority response times"
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Do You Need Maintenance?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Security First</h3>
                  <p className="text-gray-600">Outdated software is the #1 reason websites get hacked. We keep your site locked down and secure.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Save Time</h3>
                  <p className="text-gray-600">Don't waste hours fighting with technical issues. Let us handle the updates while you run your business.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Peak Performance</h3>
                  <p className="text-gray-600">Regular maintenance ensures your site stays fast, providing the best experience for your visitors.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-8 shadow-2xl lg:p-10">
            {/* Decorative gradients */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"></div>
            
            <div className="relative flex flex-col items-start">
              <div className="mb-6 rounded-lg bg-slate-800/50 p-3 ring-1 ring-white/10">
                <Activity className="h-6 w-6 text-emerald-400" />
              </div>
              
              <h3 className="mb-3 text-2xl font-bold text-white">
                Not sure what you need?
              </h3>
              
              <p className="mb-8 text-slate-400 leading-relaxed">
                Our team can audit your website performance and security to recommend the perfect maintenance strategy for your business.
              </p>
              
              <Button 
                to="/contact" 
                className="w-full justify-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400"
              >
                Schedule Free Audit
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default WebsiteMaintenance;
