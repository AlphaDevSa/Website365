
import React from 'react';
import Section from '../components/Section';
import { FileText, Gavel, AlertCircle, RefreshCw, Zap, ShieldAlert } from 'lucide-react';

const Terms = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            <span>Standard Service Agreement</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            These terms and conditions govern your use of Website365 products and services.
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
                    <Gavel className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">1. Acceptance of Terms</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our site.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">2. Use License</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Website365 grants you a non-exclusive, non-transferable license to use our web hosting, domain registration, and web design services for your personal or business purposes, subject to these terms.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>You must not use our services for any illegal or unauthorized purpose.</li>
                  <li>You must not transmit any worms or viruses or any code of a destructive nature.</li>
                  <li>You must not attempt to gain unauthorized access to our systems or servers.</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">3. Payments and Billing</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  All payments are due in advance of service delivery. Website365 offers various billing cycles (monthly, quarterly, annually).
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Subscriptions automatically renew unless cancelled 30 days prior to the renewal date.</li>
                  <li>We reserve the right to suspend or terminate accounts with overdue payments.</li>
                  <li>All prices are in South African Rand (ZAR) unless otherwise specified.</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">4. Limitation of Liability</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  In no event shall Website365 be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our services, even if Website365 has been notified of the possibility of such damage.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">5. Service Availability</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We strive to maintain 99.9% uptime for our hosting services. However, we do not guarantee uninterrupted service. Scheduled maintenance and upgrades may cause temporary outages, for which we will provide advance notice whenever possible.
                </p>
              </section>

              <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">6. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed mb-0">
                  Any claim relating to Website365 services shall be governed by the laws of the Republic of South Africa without regard to its conflict of law provisions.
                  <br /><br />
                  <strong>Questions?</strong> Please contact us at legal@website365.co.za
                </p>
              </section>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Terms;
