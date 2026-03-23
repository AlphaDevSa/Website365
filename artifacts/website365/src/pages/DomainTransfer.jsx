import Section from '../components/Section';
import Button from '../components/Button';
import { CheckCircle, ArrowRight, RefreshCw, ShieldCheck, Zap, Lock } from 'lucide-react';

const DomainTransfer = () => {
  return (
    <>
      {/* Magnificent Hero */}
      <div className="relative bg-slate-900 overflow-hidden py-16 md:py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-[100rem] h-[100rem] rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[60rem] h-[60rem] rounded-full bg-indigo-600/10 blur-3xl" />
          {/* Animated Particles/Orbs */}
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-700" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <RefreshCw className="w-4 h-4 animate-spin-slow" />
            <span>Seamless Migration Guaranteed</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Bring Your Domain <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Home to Better Hosting</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Experience zero downtime, superior support, and simple management. We handle the technical heavy lifting so you don't have to.
          </p>

          {/* Transfer Input Form */}
          <div className="max-w-3xl mx-auto relative group z-10">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <form className="relative flex flex-col md:flex-row items-center bg-slate-800/90 backdrop-blur-xl rounded-xl p-2 border border-slate-700 shadow-2xl" action="https://billing.website365.co.za/cart.php?a=add&domainoption=transfer" method="post" target="_blank">
              <div className="pl-4 pr-2 hidden md:block">
                <RefreshCw className="w-6 h-6 text-slate-400" />
              </div>
              <div className="flex w-full md:flex-1 items-center gap-2">
                <input 
                  type="text" 
                  name="sld" 
                  placeholder="example" 
                  className="flex-1 bg-transparent border-none text-white placeholder-slate-500 focus:ring-0 text-lg py-3 px-2 min-w-0" 
                  required 
                />
                <input 
                  type="text" 
                  name="tld" 
                  placeholder=".com" 
                  className="w-24 md:w-32 bg-transparent border-none text-white placeholder-slate-500 focus:ring-0 text-lg py-3 px-2" 
                  required 
                />
              </div>
              <Button type="submit" className="w-full md:w-auto rounded-lg px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-lg hover:shadow-blue-500/25 mt-2 md:mt-0 md:ml-4">
                Transfer <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
            <p className="mt-4 text-sm text-slate-400 flex justify-center items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Free 1-year extension included with most transfers</span>
            </p>
          </div>

        </div>
      </div>

      <Section background="gray">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <Zap className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Zero Downtime</h3>
            <p className="text-gray-600 text-sm">Your website stays 100% online throughout the entire transfer process.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <Lock className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Secure Lock</h3>
            <p className="text-gray-600 text-sm">We ensure your domain is safely locked against unauthorized transfers.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <ShieldCheck className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Auto-Renewal</h3>
            <p className="text-gray-600 text-sm">Never lose your domain. We'll remind you well before expiration.</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why transfer to us?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <span><strong>No downtime:</strong> Your website stays online during the transfer.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <span><strong>One year extension:</strong> We add a year to your domain registration (for most TLDs).</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <span><strong>Easy management:</strong> Manage everything from one dashboard.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <span><strong>Local support:</strong> Get help when you need it.</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-50 p-8 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold mb-4">Transfer Checklist</h3>
            <p className="text-gray-600 mb-6">Before you start, make sure you have:</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm">
                <div className="w-6 h-6 border-2 border-gray-300 rounded mr-3 flex items-center justify-center text-transparent">✓</div>
                Unlocked your domain at current registrar
              </li>
              <li className="flex items-center text-sm">
                <div className="w-6 h-6 border-2 border-gray-300 rounded mr-3 flex items-center justify-center text-transparent">✓</div>
                Obtained the Auth/EPP Code
              </li>
              <li className="flex items-center text-sm">
                <div className="w-6 h-6 border-2 border-gray-300 rounded mr-3 flex items-center justify-center text-transparent">✓</div>
                Access to the administrative email
              </li>
              <li className="flex items-center text-sm">
                <div className="w-6 h-6 border-2 border-gray-300 rounded mr-3 flex items-center justify-center text-transparent">✓</div>
                Disabled ID Protection/Privacy
              </li>
            </ul>
            <Button className="w-full">Check Transfer Status</Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default DomainTransfer;
