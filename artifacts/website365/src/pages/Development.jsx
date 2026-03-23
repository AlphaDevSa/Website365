import React, { useState } from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import ProjectModal from '../components/ProjectModal';
import { Link } from 'react-router-dom';
import {
  Code, Database, Layout, Settings, Zap, ArrowRight, Globe, Shield,
  GitBranch, Terminal, Server, Layers, MessageSquare, CheckCircle, Clock
} from 'lucide-react';

const Development = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const capabilities = [
    { icon: Layout,    bg: 'bg-indigo-50',  color: 'text-indigo-600',  label: 'Custom Web Apps',       desc: 'Bespoke React & Node.js applications built around your exact business workflow.' },
    { icon: Settings,  bg: 'bg-purple-50',  color: 'text-purple-600',  label: 'API Integration',       desc: 'Connect your site to CRMs, payment gateways, ERPs and any third-party service.' },
    { icon: Database,  bg: 'bg-blue-50',    color: 'text-blue-600',    label: 'Database Design',       desc: 'Optimised data architecture for speed, integrity and scalability as you grow.' },
    { icon: Globe,     bg: 'bg-teal-50',    color: 'text-teal-600',    label: 'Progressive Web Apps',  desc: 'App-like experiences in the browser — offline support, push notifications, fast loads.' },
    { icon: Shield,    bg: 'bg-green-50',   color: 'text-green-600',   label: 'Secure Development',    desc: 'Security-first code review, input validation, and authentication best practices.' },
    { icon: Zap,       bg: 'bg-orange-50',  color: 'text-orange-600',  label: 'Performance Tuning',    desc: 'Profiling, query optimisation and caching to keep your application blazing fast.' },
  ];

  const process = [
    { step: '01', icon: MessageSquare, title: 'Discovery & Architecture', desc: 'We analyse your requirements and design a technical blueprint that ensures scalability and long-term performance.' },
    { step: '02', icon: GitBranch,     title: 'Agile Development',        desc: 'We build in sprints with regular updates and feedback loops so you always know where your project stands.' },
    { step: '03', icon: Terminal,      title: 'Testing & QA',             desc: 'Rigorous testing across devices, browsers, and edge cases before anything goes near production.' },
    { step: '04', icon: Server,        title: 'Deployment & Handover',    desc: 'Zero-downtime deployment, full documentation, and a handover session so your team can confidently manage the system.' },
  ];

  return (
    <>
      <SEO
        title="Custom Web Development"
        description="Tailored web development solutions. From custom web applications to API integrations, we build scalable digital products."
        canonical="https://website365.co.za/web-design/development"
      />
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-900/25" />
          <div className="absolute top-1/4 right-1/4 w-[50rem] h-[50rem] rounded-full bg-indigo-600/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] rounded-full bg-purple-600/10 blur-3xl animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-sm font-semibold mb-8 backdrop-blur-sm">
            <Code className="w-4 h-4" />
            Custom Engineering Solutions
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-none">
            Built For Scale.<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Engineered For Growth.
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            We go beyond templates. Our team architects robust, scalable custom web applications
            tailored to your unique business processes — built to last.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg hover:shadow-indigo-500/25 transition-all"
            >
              Discuss Your Project <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white transition-all"
            >
              Get a Custom Quote
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: '100+',    label: 'Apps Delivered' },
              { value: 'Custom',  label: 'Quote Always' },
              { value: 'Full',    label: 'Stack Capability' },
              { value: 'Local',   label: 'SA Dev Team' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl px-6 py-5">
                <p className="text-3xl font-extrabold text-white mb-1">{value}</p>
                <p className="text-slate-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Capabilities ─────────────────────────────────────── */}
      <Section background="gray">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
            <Layers className="w-4 h-4" />
            Our Development Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Full-Stack Expertise
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From front-end interfaces to back-end architecture — we bring your most complex ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map(({ icon: Icon, bg, color, label, desc }) => (
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

      {/* ── Process ───────────────────────────────────────────── */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-sm font-semibold mb-4">
              <Clock className="w-4 h-4" />
              The Development Process
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              From Brief to Production in 4 Steps
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              A transparent, collaborative process — you always know where your build stands.
            </p>
          </div>

          <div className="space-y-6">
            {process.map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex gap-6 items-start hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-extrabold text-lg shrink-0">
                  {step}
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-extrabold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Code Visual + CTA ─────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-indigo-900/20 to-slate-900" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[60rem] h-[20rem] rounded-full bg-indigo-600/10 blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Code snippet */}
          <div className="bg-slate-800 rounded-2xl p-1 border border-slate-700 shadow-2xl">
            <div className="flex items-center px-4 py-2 border-b border-slate-700 bg-slate-900 rounded-t-xl">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="ml-4 text-xs text-slate-400 font-mono">app.js</div>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <p><span className="text-purple-400">const</span> <span className="text-white">app</span> = <span className="text-yellow-300">express</span>();</p>
              <p className="mt-2"><span className="text-purple-400">app</span>.<span className="text-blue-400">use</span>(<span className="text-green-400">'/api'</span>, apiRouter);</p>
              <p className="mt-2"><span className="text-purple-400">app</span>.<span className="text-blue-400">listen</span>(<span className="text-orange-400">PORT</span>, () =&gt; {'{'}</p>
              <p className="ml-4"><span className="text-white">console</span>.<span className="text-blue-400">log</span>(<span className="text-green-400">`Server on port ${'{'}PORT{'}'}`</span>);</p>
              <p>{'}'});</p>
              <p className="mt-4 text-slate-500">{'// Scalable. Maintainable. Yours.'}</p>
              <p className="mt-2"><span className="text-purple-400">async function</span> <span className="text-blue-400">processData</span>(input) {'{'}</p>
              <p className="ml-4"><span className="text-purple-400">const</span> result = <span className="text-purple-400">await</span> <span className="text-blue-400">optimize</span>(input);</p>
              <p className="ml-4"><span className="text-purple-400">return</span> result;</p>
              <p>{'}'}</p>
            </div>
          </div>

          {/* CTA text */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-sm font-semibold mb-6">
              <Code className="w-4 h-4" />
              Custom Quote
            </div>
            <h2 className="text-4xl font-extrabold text-white mb-6">
              Have a complex project in mind?
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Tell us what you are trying to build. We will come back with a technical approach and a transparent quote — no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full shadow-lg shadow-indigo-500/25 transition-all text-base"
              >
                Discuss Your Project <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Development;
