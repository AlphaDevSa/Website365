import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import TrustBar from '../components/TrustBar';
import { Server, LayoutGrid, Users, Mail, ArrowRight, Zap, Shield, Globe, Cpu, Cloud, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hosting = () => {
  const scrollToPlans = (e) => {
    e.preventDefault();
    const plansSection = document.getElementById('plans');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="relative bg-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-900/20" />
          <div className="absolute -top-[20%] -right-[10%] w-[80rem] h-[80rem] rounded-full bg-indigo-600/10 blur-3xl animate-pulse" />
          <div className="absolute top-[20%] -left-[10%] w-[60rem] h-[60rem] rounded-full bg-blue-600/10 blur-3xl animate-pulse delay-1000" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        </div>

        <div className="relative max-w-7xl mx-auto py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-sm">
              <Cloud className="w-4 h-4" />
              <span>Next-Generation Cloud Infrastructure</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
              Hosting That <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Simply Works</span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              From personal blogs to high-traffic business portals, we provide the speed, security, and scalability you need to succeed online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                to="#plans" 
                onClick={scrollToPlans}
                className="rounded-full px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                View Hosting Plans
              </Button>
              <Button to="/contact" variant="ghost" className="rounded-full px-8 py-4 text-lg font-semibold transition-all backdrop-blur-sm">
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      </div>

      <TrustBar />

      <Section background="gray">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Blazing Fast Speed"
            description="Powered by NVMe SSDs and LiteSpeed web servers for up to 20x faster page loads."
            icon={Zap}
          />
          <Card
            title="Unbreakable Security"
            description="Imunify360 protection, free SSL certificates, and daily automated backups included."
            icon={Shield}
          />
          <Card
            title="99.9% Uptime"
            description="Enterprise-grade hardware and redundant network connections keep you online."
            icon={Cpu}
          />
        </div>
      </Section>

      <Section id="plans">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Hosting Platform</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">We offer a variety of hosting platforms to suit your specific requirements and budget.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Link to="/hosting/directadmin" className="group block h-full">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">DirectAdmin Hosting</h3>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">Lightweight, fast, and affordable. Perfect for personal websites and small businesses who want performance on a budget.</p>
              <div className="flex items-center text-blue-600 font-medium">
                View Plans <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <Link to="/hosting/cpanel" className="group block h-full">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mr-4">
                  <LayoutGrid className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">cPanel Hosting</h3>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">The industry standard control panel. Feature-rich, familiar interface, and extensive compatibility for all types of websites.</p>
              <div className="flex items-center text-blue-600 font-medium">
                View Plans <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
          
          <Link to="/hosting/wordpress" className="group block h-full">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-white mr-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">WordPress Hosting</h3>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">Optimized specifically for WordPress. Includes one-click staging, automatic updates, and enhanced security rules.</p>
              <div className="flex items-center text-blue-600 font-medium">
                View Plans <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <Link to="/hosting/reseller" className="group block h-full">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Reseller Hosting</h3>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">Start your own hosting business or manage multiple client sites. White-label WHM access included.</p>
              <div className="flex items-center text-blue-600 font-medium">
                View Plans <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <Link to="/hosting/email" className="group block h-full">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Email Hosting</h3>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">Professional email for your domain. Secure, spam-free, and accessible from any device.</p>
              <div className="flex items-center text-blue-600 font-medium">
                View Plans <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who is this for?</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-sm rounded-lg overflow-hidden">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-center">DirectAdmin</th>
                  <th className="px-6 py-4 text-center">cPanel</th>
                  <th className="px-6 py-4 text-center">WordPress</th>
                  <th className="px-6 py-4 text-center">Reseller</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Ideal For</td>
                  <td className="px-6 py-4 text-center">Personal / Small Biz</td>
                  <td className="px-6 py-4 text-center">Business / Corporate</td>
                  <td className="px-6 py-4 text-center">WordPress Sites</td>
                  <td className="px-6 py-4 text-center">Agencies / Devs</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Control Panel</td>
                  <td className="px-6 py-4 text-center">DirectAdmin</td>
                  <td className="px-6 py-4 text-center">cPanel</td>
                  <td className="px-6 py-4 text-center">cPanel + WP Toolkit</td>
                  <td className="px-6 py-4 text-center">cPanel/WHM</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Ease of Use</td>
                  <td className="px-6 py-4 text-center">High</td>
                  <td className="px-6 py-4 text-center">High</td>
                  <td className="px-6 py-4 text-center">Very High</td>
                  <td className="px-6 py-4 text-center">Medium</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Performance</td>
                  <td className="px-6 py-4 text-center">High</td>
                  <td className="px-6 py-4 text-center">High</td>
                  <td className="px-6 py-4 text-center">Ultra High (LiteSpeed)</td>
                  <td className="px-6 py-4 text-center">High</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Cost</td>
                  <td className="px-6 py-4 text-center">$$</td>
                  <td className="px-6 py-4 text-center">$$$</td>
                  <td className="px-6 py-4 text-center">$$$</td>
                  <td className="px-6 py-4 text-center">$$$$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Hosting;
