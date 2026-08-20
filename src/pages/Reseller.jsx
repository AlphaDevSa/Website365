import Section from '../components/Section';
import { LayoutGrid, Crown, ArrowRight, Briefcase, TrendingUp, Users, Server, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Reseller = () => {
  return (
    <>
      {/* Magnificent Hero */}
      <div className="relative bg-slate-900 overflow-hidden py-16 lg:py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-slate-900 to-purple-900/30" />
          <div className="absolute -top-40 -right-40 w-[60rem] h-[60rem] rounded-full bg-purple-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] rounded-full bg-indigo-600/10 blur-3xl animate-pulse delay-1000" />
          
          {/* Network Pattern */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <Briefcase className="w-4 h-4" />
            <span>Launch Your Own Hosting Business</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Your Brand. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Our Infrastructure.</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Start your own web hosting company today. Create custom packages, set your own prices, and keep 100% of the profits. We handle the servers, you handle the clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button to="#options" className="rounded-full px-8 py-4 text-lg font-semibold bg-purple-600 hover:bg-purple-500 text-white shadow-lg hover:shadow-purple-500/25 transition-all">
              Choose Your Platform <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">100% White Label</h3>
              </div>
              <p className="text-slate-400 text-sm">Your clients will never know we exist. Use your own branding for cPanel and nameservers.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Scalable Income</h3>
              </div>
              <p className="text-slate-400 text-sm">Start small and upgrade instantly as you grow. Keep all the profit from your clients.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Total Control</h3>
              </div>
              <p className="text-slate-400 text-sm">Full access to Web Host Manager (WHM) to create packages, manage zones, and more.</p>
            </div>
          </div>
        </div>
      </div>

      <Section id="options">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Reseller Platform</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Whether you're just starting out or scaling up, we have the right reseller solution for you.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link to="/hosting/reseller/cpanel" className="group block h-full">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mr-4">
                  <LayoutGrid className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">cPanel Reseller</h3>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                The industry standard. Create and manage multiple cPanel accounts under one WHM login. Perfect for web designers and agencies.
              </p>
              <ul className="text-gray-600 space-y-2 mb-8 text-sm">
                 <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>White-label WHM</li>
                 <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Create cPanel Accounts</li>
                 <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Overselling Allowed</li>
              </ul>
              <div className="flex items-center text-blue-600 font-medium mt-auto">
                View Plans <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <Link to="/hosting/reseller/master" className="group block h-full">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-4">
                  <Crown className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Master Reseller</h3>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Take it a step further. Create and sell your own Reseller packages. The ultimate tier for hosting entrepreneurs.
              </p>
              <ul className="text-gray-600 space-y-2 mb-8 text-sm">
                 <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>Create Reseller Accounts</li>
                 <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>All cPanel Reseller Features</li>
                 <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>Root-level Tools</li>
              </ul>
              <div className="flex items-center text-blue-600 font-medium mt-auto">
                View Plans <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100">
             <Briefcase className="w-16 h-16 text-blue-600 mx-auto mb-6" />
             <h2 className="text-3xl font-bold mb-4">Why Choose Reseller Hosting?</h2>
             <p className="text-lg text-gray-600 mb-8">
               Stop paying for individual hosting accounts for each client. With our reseller hosting, you can create separate cPanel accounts for each client, allocate resources as needed, and bill them directly.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
               <div>
                 <h3 className="font-bold mb-2">100% White Label</h3>
                 <p className="text-sm text-gray-500">Your clients will never know we exist. Use your own branding for control panels and nameservers.</p>
               </div>
               <div>
                 <h3 className="font-bold mb-2">Total Control</h3>
                 <p className="text-sm text-gray-500">Full access to Web Host Manager (WHM) to create packages, manage zones, and more.</p>
               </div>
               <div>
                 <h3 className="font-bold mb-2">Scalable Income</h3>
                 <p className="text-sm text-gray-500">Start small and upgrade instantly as you sign up more clients. Keep 100% of your profits.</p>
               </div>
             </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Reseller;
