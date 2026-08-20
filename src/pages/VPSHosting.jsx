import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import FAQ from '../components/FAQ';
import VPSOrderModal from '../components/VPSOrderModal';
import { Server, HardDrive, Network, Shield, MapPin, Globe, Cpu, Zap, Lock, Check } from 'lucide-react';

const VPSHosting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openOrderModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <>
      <VPSOrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        plan={selectedPlan} 
      />
      <div className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 opacity-90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Premium <span className="text-blue-500">VPS</span> Hosting
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Full root access, guaranteed resources, and total control. Powered by high-performance hardware.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#plans" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-lg shadow-lg hover:shadow-blue-500/30">
                View Plans
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-slate-400 text-sm font-medium">
               <div className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-2" /> Instant Deployment</div>
               <div className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-2" /> 99.9% Uptime</div>
               <div className="flex items-center"><Check className="w-5 h-5 text-green-400 mr-2" /> 24/7 Support</div>
            </div>
          </div>

          {/* Right Content - Terminal Visual */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end z-10">
             <div className="relative w-full max-w-lg">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute bottom-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
                
                <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
                   <div className="flex items-center justify-between px-4 py-3 bg-slate-900/50 border-b border-slate-700">
                      <div className="flex space-x-2">
                         <div className="w-3 h-3 rounded-full bg-red-500"></div>
                         <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                         <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-slate-500 text-xs font-mono">root@server:~</div>
                   </div>
                   <div className="p-6 space-y-4 font-mono text-sm">
                      <div className="flex">
                         <span className="text-green-400 mr-2">➜</span>
                         <span className="text-blue-400">~</span>
                         <span className="text-slate-300 ml-2">neofetch</span>
                      </div>
                      <div className="text-slate-300 pl-4 space-y-1">
                         <p>OS: <span className="text-white">Ubuntu 22.04 LTS</span></p>
                         <p>Host: <span className="text-white">KVM Virtual Machine</span></p>
                         <p>Kernel: <span className="text-white">5.15.0-76-generic</span></p>
                         <p>Uptime: <span className="text-white">128 days, 4 hours</span></p>
                         <p>CPU: <span className="text-white">AMD EPYC 7003 (4) @ 3.5GHz</span></p>
                         <p>Memory: <span className="text-white">8192MiB / 16384MiB</span></p>
                      </div>
                      <div className="flex items-center">
                         <span className="text-green-400 mr-2">➜</span>
                         <span className="text-blue-400">~</span>
                         <span className="w-2 h-4 bg-slate-400 ml-2 animate-pulse"></span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <Section id="plans">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Budget Virtual Servers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">High-performance SSD VPS with root access.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card
            title="Silver"
            price="R69.00"
            billingPeriod="Monthly"
            icon={Server}
            description="Perfect for starters"
            center={true}
            features={[
              "1 vCore CPU",
              "1 GB RAM",
              "20 GB SSD Storage",
              "200 GB Monthly Traffic"
            ]}
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: 'Silver', price: 'R69.00' })}
          />
          <Card
            title="Palladium"
            price="R129.00"
            billingPeriod="Monthly"
            icon={Server}
            description="For growing sites"
            center={true}
            features={[
              "2 vCore CPU",
              "2 GB RAM",
              "40 GB SSD Storage",
              "400 GB Monthly Traffic"
            ]}
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: 'Palladium', price: 'R129.00' })}
          />
          <Card
            title="Osmium"
            price="R259.00"
            billingPeriod="Monthly"
            icon={Server}
            description="Best value for business"
            center={true}
            features={[
              "4 vCore CPU",
              "4 GB RAM",
              "80 GB SSD Storage",
              "800 GB Monthly Traffic"
            ]}
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: 'Osmium', price: 'R259.00' })}
            popular={true}
          />
          <Card
            title="Iridium"
            price="R379.00"
            billingPeriod="Monthly"
            icon={Server}
            description="Maximum performance"
            center={true}
            features={[
              "6 vCore CPU",
              "6 GB RAM",
              "120 GB SSD Storage",
              "1.2 TB Monthly Traffic"
            ]}
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: 'Iridium', price: 'R379.00' })}
          />
        </div>

        <div className="text-center mb-12 mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Included with all Budget Plans</h2>
          <p className="text-gray-600">Standard features available on all our VPS packages.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-md font-bold mb-1">Hosted at Digital Parks Africa</h3>
            <p className="text-gray-500 text-xs">Samrand South Africa</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <HardDrive className="w-6 h-6" />
            </div>
            <h3 className="text-md font-bold mb-1">SSD Powered VPS Servers</h3>
            <p className="text-gray-500 text-xs">High-speed storage</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-md font-bold mb-1">PTR Record Management</h3>
            <p className="text-gray-500 text-xs">DNS control</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-md font-bold mb-1">Full Root Access</h3>
            <p className="text-gray-500 text-xs">Total control</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <Network className="w-6 h-6" />
            </div>
            <h3 className="text-md font-bold mb-1">NAP & JINX Peering</h3>
            <p className="text-gray-500 text-xs">Low latency</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">AMD Ryzen VPS Servers</h2>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">South Africa's Fastest AMD Ryzen VPS Servers</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">Powered by AMD Ryzen 9 9900X CPU's with Gen 5 NVMe Disks & Unlimited Bandwidth</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card
            title="Ryzen VPS Silver"
            price="R195.00"
            billingPeriod="Monthly"
            icon={Cpu}
            description="Starting from"
            center={true}
            features={[
              "2 CPU vCores",
              "4 GB DDR5 RAM",
              "50 GB NVMe Gen 5 Storage",
              "Unlimited Bandwidth",
              "Up to 800 Mbps",
              "1 Free Backup Slot",
              "Subject to AUP"
            ]}
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: 'Ryzen VPS Silver', price: 'R195.00' })}
          />
          <Card
            title="Windows Ryzen VPS Silver"
            price="R354.00"
            billingPeriod="Monthly"
            icon={Cpu}
            description="Starting from"
            center={true}
            features={[
              "2 CPU vCores",
              "4 GB DDR5 RAM",
              "50 GB NVMe Gen 5 Storage",
              "Unlimited Bandwidth",
              "Up to 800 Mbps",
              "1 Free Backup Slot",
              "Subject to AUP"
            ]}
            ctaText="Order Now"
            ctaOnClick={() => openOrderModal({ title: 'Windows Ryzen VPS Silver', price: 'R354.00' })}
          />
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Included with every AMD Ryzen VPS</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-md font-bold mb-1">Hosted at Digital Parks Africa</h3>
            <p className="text-gray-500 text-xs">Samrand South Africa</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-md font-bold mb-1">PTR Record Management</h3>
            <p className="text-gray-500 text-xs">DNS control</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-md font-bold mb-1">Full Root Access</h3>
            <p className="text-gray-500 text-xs">Total control</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-md font-bold mb-1">Up to 800 mbps</h3>
            <p className="text-gray-500 text-xs">High speed</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-md font-bold mb-1">Self Managed Firewall</h3>
            <p className="text-gray-500 text-xs">Security</p>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <FAQ items={[
          { question: "What operating systems are available?", answer: "We offer a wide range of operating systems including Ubuntu, CentOS, Debian, AlmaLinux, and Rocky Linux. Windows Server is also available on selected plans." },
          { question: "Where are your servers located?", answer: "Our servers are hosted in the state-of-the-art Digital Parks Africa data center in Samrand, South Africa, ensuring low latency for local users." },
          { question: "What is the difference between Budget and Ryzen VPS?", answer: "Budget VPS uses enterprise Intel Xeon processors suitable for general workloads. Ryzen VPS uses high-performance AMD Ryzen 9 9900X processors with Gen 5 NVMe storage, ideal for game servers, high-traffic databases, and compilation tasks." },
          { question: "Do I get full root access?", answer: "Yes, every VPS plan comes with full root (administrator) access, allowing you complete control to install and configure any software you need." },
          { question: "Can I upgrade my plan later?", answer: "Absolutely. You can scale your resources (CPU, RAM, Storage) instantly through our client area without data loss." },
          { question: "Are backups included?", answer: "We include 1 free backup slot with our AMD Ryzen plans. For other plans, we recommend configuring your own remote backups, though we do maintain disaster recovery snapshots." },
          { question: "How long does provisioning take?", answer: "Most VPS orders are provisioned automatically and are ready within minutes after payment confirmation." }
        ]} />
      </Section>
    </>
  );
};

export default VPSHosting;
