import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import SEO from '../components/SEO';
import ProjectModal from '../components/ProjectModal';
import { Code, Database, Smartphone, Layout, Zap, ArrowRight, Settings, Globe } from 'lucide-react';

const Development = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SEO 
        title="Custom Web Development" 
        description="Tailored web development solutions. From custom web applications to API integrations, we build scalable digital products."
        canonical="https://website365.co.za/web-design/development"
      />

      {/* Hero Section */}
      <div className="relative bg-slate-900 overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-900/20" />
          <div className="absolute top-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-indigo-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] rounded-full bg-purple-600/10 blur-3xl animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <Code className="w-4 h-4" />
            <span>Custom Engineering Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Built For Scale. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Engineered For Growth.</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            We go beyond templates. Our team architects robust, scalable custom web applications tailored to your unique business processes.
          </p>

          <div className="flex justify-center">
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="rounded-full px-8 py-4 text-lg font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg hover:shadow-indigo-500/25 transition-all group"
            >
              Discuss Your Project <Zap className="w-5 h-5 ml-2 group-hover:fill-current transition-all" />
            </Button>
          </div>
        </div>
      </div>

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Capabilities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Full-stack expertise to bring your most complex ideas to life.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Custom Web Apps"
            description="Bespoke web applications built with React, Node.js, and modern frameworks tailored to your specific workflow."
            icon={Layout}
          />
          <Card
            title="API Integration"
            description="Seamlessly connect your website with third-party services like CRMs, payment gateways, and ERP systems."
            icon={Settings}
          />
          <Card
            title="Database Design"
            description="Optimized database architecture ensuring data integrity, speed, and scalability for growing datasets."
            icon={Database}
          />
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Development Process</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery & Architecture</h3>
                  <p className="text-gray-600">We analyze your requirements and design a technical blueprint that ensures scalability and performance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Agile Development</h3>
                  <p className="text-gray-600">We build in sprints, keeping you involved with regular updates and feedback loops to ensure alignment.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">3</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Testing & Deployment</h3>
                  <p className="text-gray-600">Rigorous QA testing across devices and browsers before a smooth, zero-downtime deployment.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 rounded-2xl p-1 border border-slate-800 shadow-2xl">
             <div className="bg-slate-800 rounded-xl overflow-hidden">
                <div className="flex items-center px-4 py-2 border-b border-slate-700 bg-slate-900">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-xs text-slate-400 font-mono">server.js</div>
                </div>
                <div className="p-6 font-mono text-sm text-blue-300">
                  <div className="text-purple-400">const</div> <div className="text-white inline">app</div> = <div className="text-yellow-300 inline">express</div>();<br/>
                  <br/>
                  <div className="text-purple-400">app</div>.<div className="text-blue-400 inline">listen</div>(3000, () ={'>'} {'{'}<br/>
                  &nbsp;&nbsp;<div className="text-white inline">console</div>.<div className="text-blue-400 inline">log</div>(<span className="text-green-400">'Server running on port 3000'</span>);<br/>
                  {'}'});<br/>
                  <br/>
                  <div className="text-slate-500">// Custom logic tailored to your business</div>
                  <div className="text-purple-400">async function</div> <div className="text-blue-400 inline">processData</div>(input) {'{'}<br/>
                  &nbsp;&nbsp;<div className="text-purple-400">const</div> result = <div className="text-purple-400">await</div> <div className="text-blue-400 inline">optimize</div>(input);<br/>
                  &nbsp;&nbsp;<div className="text-purple-400">return</div> result;<br/>
                  {'}'}
                </div>
             </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Development;
