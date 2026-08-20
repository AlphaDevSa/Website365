
import React from 'react';
import Section from '../components/Section';
import { Shield, Lock, Eye, Bell, Globe, FileText } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>Your Privacy Matters</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            At Website365, we are committed to protecting your personal information and your right to privacy.
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-slate lg:prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-12">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Introduction</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  This Privacy Policy describes how Website365 ("we," "us," or "our") collects, uses, and shares your personal information when you visit our website (https://website365.co.za) or use our web hosting, domain registration, and web design services. We are committed to complying with the Protection of Personal Information Act (POPIA) of South Africa.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Information We Collect</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We collect information that you provide directly to us when you:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Register for an account or purchase our services.</li>
                  <li>Sign up for our newsletter or marketing communications.</li>
                  <li>Contact our support team or request information.</li>
                  <li>Participate in surveys or promotions.</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  This information may include your name, email address, phone number, billing address, and payment information.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">How We Use Your Information</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Provide, maintain, and improve our services.</li>
                  <li>Process transactions and send related information, including confirmations and invoices.</li>
                  <li>Send technical notices, updates, security alerts, and support messages.</li>
                  <li>Respond to your comments, questions, and requests.</li>
                  <li>Communicate with you about products, services, offers, and events.</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Data Security</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. We use industry-standard encryption (SSL/TLS) for all data transfers and secure our servers with advanced security protocols.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                    <Bell className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Your Rights</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Under POPIA, you have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Access the personal information we hold about you.</li>
                  <li>Request the correction or deletion of your personal information.</li>
                  <li>Object to the processing of your personal information for direct marketing.</li>
                  <li>Withdraw your consent at any time where we rely on consent to process your data.</li>
                </ul>
              </section>

              <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-0">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact our Information Officer at:
                  <br /><br />
                  <strong>Email:</strong> privacy@website365.co.za<br />
                  <strong>Phone:</strong> +27 83 600 0152<br />
                  <strong>Address:</strong> Cape Town, South Africa
                </p>
              </section>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Privacy;
