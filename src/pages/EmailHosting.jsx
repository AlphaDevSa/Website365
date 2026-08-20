import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import FAQ from '../components/FAQ';
import { Mail, Shield, Smartphone, ArrowRight, Check, AtSign, Globe, Lock, CheckCircle, User, Users, Building } from 'lucide-react';

const EmailHosting = () => {
  return (
    <>
      {/* Magnificent Hero */}
      <div className="relative bg-slate-900 overflow-hidden py-16 lg:py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-teal-900/30" />
          <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] rounded-full bg-teal-500/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-blue-500/10 blur-3xl animate-pulse delay-700" />
          
          {/* Abstract Email Pattern */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/30 border border-teal-500/30 text-teal-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <Mail className="w-4 h-4" />
            <span>Professional Business Email</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Build Trust With <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Every Message.</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Stop using free email addresses for your business. Look professional with <span className="text-white font-semibold">you@yourbusiness.co.za</span>. Secure, ad-free, and synced across all your devices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button to="#plans" className="rounded-full px-8 py-4 text-lg font-semibold bg-teal-600 hover:bg-teal-500 text-white shadow-lg hover:shadow-teal-500/25 transition-all">
              See Email Plans <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-teal-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Spam Protection</h3>
              </div>
              <p className="text-slate-400 text-sm">Advanced filtering keeps your inbox clean and secure from phishing and junk.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Mobile Sync</h3>
              </div>
              <p className="text-slate-400 text-sm">Seamlessly sync emails, contacts, and calendars with Outlook, Apple Mail, and mobile devices.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-green-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Webmail Access</h3>
              </div>
              <p className="text-slate-400 text-sm">Access your email securely from any web browser, anywhere in the world.</p>
            </div>
          </div>
        </div>
      </div>

      <Section id="plans" background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Email-Only Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Reliable business email hosting without the need for a website.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card
            title="Starter – Business Email"
            price="R29"
            yearlyPrice="R348 / year (0% discount)"
            description="Essential email for your business."
            ctaText="Get Starter – Business Email"
            ctaLink="/contact"
            features={[
              "10 email accounts",
              "10 GB disk space",
              "Unlimited bandwidth",
              "Free SSL certificate",
              "IMAP(s)",
              "POP3",
              "Webmail"
            ]}
          />
          <Card
            title="Growth – Business Email"
            price="R59"
            yearlyPrice="R708 / year (0% discount)"
            description="Perfect for growing teams."
            ctaText="Get Growth – Business Email"
            ctaLink="/contact"
            popular={true}
            features={[
              "50 email accounts",
              "50 GB disk space",
              "Unlimited bandwidth",
              "Free SSL certificate",
              "IMAP(s)",
              "POP3",
              "Webmail"
            ]}
          />
          <Card
            title="Enterprise – Business Email"
            price="R129"
            yearlyPrice="R1548 / year (0% discount)"
            description="Maximum power for large organizations."
            ctaText="Get Enterprise – Business Email"
            ctaLink="/contact"
            features={[
              "200 email accounts",
              "200 GB disk space",
              "Unlimited bandwidth",
              "Free SSL certificate",
              "IMAP(s)",
              "POP3",
              "Webmail"
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why professional email matters</h2>
            <p className="text-lg text-gray-600">An email address like you@yourbusiness.co.za sends a very different message from a free generic account. It signals that you're serious, established and reachable at a real brand.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              "Build trust with clients and partners",
              "Keep your brand consistent across website, email and social",
              "Separate personal and business communication cleanly",
              "Look professional from day one"
            ].map((text, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">{text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Which Business Email plan should you choose?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                <User className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600">Choose Starter if you're a solo founder, freelancer or very small team that just needs a few professional inboxes at your own domain.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-teal-500" />
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 text-teal-600">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-600">Pick Growth if you have a small but growing team and want space for everyone to have their own mailbox, plus shared addresses for departments like sales and support.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600">Go for Enterprise if email is central to how your organisation runs, you have many inboxes to manage, or you need extra storage and flexibility.</p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Business Email setup works</h2>
          </div>

          <div className="space-y-8 mb-16">
            {[
              {
                step: "Step 1",
                title: "Choose an email plan",
                desc: "Select the plan that matches how many accounts and how much storage you need."
              },
              {
                step: "Step 2",
                title: "Connect or register your domain",
                desc: "Use a domain you already own or register a new one. We'll guide you through the DNS tweaks needed."
              },
              {
                step: "Step 3",
                title: "Create mailboxes and log in",
                desc: "Create your users and start sending and receiving email using webmail or your preferred email apps."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 items-start bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-teal-500/30">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="gray">
        <FAQ 
          title="Business Email FAQ"
          items={[
            {
              question: "Do I need hosting to use Business Email?",
              answer: "No. You can use Business Email on its own with your domain, or combine it with Web or WordPress Hosting for a unified setup. Many customers use both together."
            },
            {
              question: "Can I access my email on my phone and desktop?",
              answer: "Yes. Business Email supports IMAP(s) and POP3, so you can connect from most email apps on phones, tablets and computers. You can also use webmail from any browser."
            },
            {
              question: "Can I upgrade or downgrade my plan later?",
              answer: "Yes. As your team grows or shrinks, you can move between plans. We're happy to help you choose the right size for your current usage."
            },
            {
              question: "Do you provide spam and virus protection?",
              answer: "Yes. All Business Email plans include spam and virus filtering. You can also adjust settings to suit how strict you want filtering to be."
            },
            {
              question: "What happens if I reach my storage limit?",
              answer: "If you're close to your storage limit, you can delete older messages, archive them locally or upgrade to a larger plan. We'll notify you if usage becomes an issue."
            }
          ]}
        />
      </Section>
    </>
  );
};

export default EmailHosting;
