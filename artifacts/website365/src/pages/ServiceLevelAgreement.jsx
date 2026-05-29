import React from 'react';
import Section from '../components/Section';
import {
  FileText,
  Activity,
  Clock,
  Percent,
  CheckCircle,
  RefreshCw,
  HelpCircle,
  Mail,
  Shield,
} from 'lucide-react';

const ServiceLevelAgreement = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Activity className="w-4 h-4" />
            <span>Service Uptime Guarantee</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Service Level Agreement (SLA)</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Our uptime commitment, measurement metrics, exclusions, and credit frameworks for Website365 hosting services.
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-slate lg:prose-lg max-w-none">
            {/* Metadata Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-6 mb-8 gap-4">
              <p className="text-gray-500 m-0">
                Last Updated: <strong>May 2026</strong>
              </p>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                SLA Commitment
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              This Service Level Agreement (“SLA”) describes the uptime commitments and remedies for Website365 hosting services.
            </p>

            <div className="space-y-12">
              {/* Section 1 */}
              <section className="scroll-mt-20" id="scope">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">1. Scope of SLA</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  This SLA applies to the following Website365 services:
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    'Web Hosting',
                    'WordPress Hosting',
                    'Reseller Hosting',
                    'Master Reseller Hosting',
                    'Email Hosting',
                  ].map((service) => (
                    <span key={service} className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-sm font-semibold border border-slate-200">
                      {service}
                    </span>
                  ))}
                </div>
                <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-4 mt-2">
                  <p className="text-xs text-slate-500 m-0 leading-relaxed font-medium">
                    This SLA does <strong>not</strong> apply to website design, development, or management services, which are governed by separate project agreements.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section className="scroll-mt-20" id="uptime-commitment">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">2. Uptime Commitment</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Website365 commits to maintaining **99.9% uptime per calendar month** for covered services. This means your hosting services will be available and operational 99.9% of the time in any given month.
                </p>
                <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 mt-4">
                  <h4 className="text-sm font-bold text-blue-900 mt-0 mb-1">Example of downtime allowance:</h4>
                  <p className="text-xs text-blue-800 mb-0 leading-relaxed">
                    In a standard 30-day month (43,200 total minutes), a 99.9% uptime target allows for a maximum of approximately <strong>43 minutes</strong> of unscheduled downtime.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section className="scroll-mt-20" id="measurement-exclusions">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">3. Measurement and Exclusions</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Uptime is measured using our internal and external automated monitoring tools. The following categories of downtime are explicitly <strong>excluded</strong> from uptime calculations:
                </p>
                
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5 text-sm text-gray-700">
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-500 font-bold shrink-0">•</span>
                      <span>Scheduled maintenance (announced at least 48 hours in advance)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-500 font-bold shrink-0">•</span>
                      <span>Emergency maintenance required for security or stability</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-500 font-bold shrink-0">•</span>
                      <span>Downtime caused by your actions, configurations, or uploaded content</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-500 font-bold shrink-0">•</span>
                      <span>Downtime caused by third-party services (such as DNS providers or payment gateways)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-500 font-bold shrink-0">•</span>
                      <span>Force majeure events (natural disasters, wars, pandemics, grid failures)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-500 font-bold shrink-0">•</span>
                      <span>Distributed Denial of Service (DDoS) attacks or other malicious volumetric traffic</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-500 font-bold shrink-0">•</span>
                      <span>Issues with your own localized internet connection or edge routing equipment</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section className="scroll-mt-20" id="service-credits">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <Percent className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">4. Service Credits</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  If we fail to meet our 99.9% uptime commitment, you may be eligible for service credits applied directly to your hosting plan fees:
                </p>

                {/* Styled Table */}
                <div className="overflow-hidden border border-slate-100 rounded-2xl mb-6 shadow-sm">
                  <table className="w-full border-collapse bg-white text-left text-sm text-gray-600">
                    <thead className="bg-slate-50 text-slate-800 font-semibold border-b border-slate-100">
                      <tr>
                        <th className="px-6 py-4">Monthly Uptime Range</th>
                        <th className="px-6 py-4 text-right">Applicable Service Credit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">99.0% – 99.9%</td>
                        <td className="px-6 py-4 text-right font-extrabold text-blue-600">5% of monthly fee</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">95.0% – 98.9%</td>
                        <td className="px-6 py-4 text-right font-extrabold text-indigo-600">10% of monthly fee</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">Below 95.0%</td>
                        <td className="px-6 py-4 text-right font-extrabold text-red-600">25% of monthly fee</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-5">
                  <p className="text-xs text-slate-600 m-0 leading-relaxed font-semibold">
                    Credit Terms &amp; Claim Process:
                  </p>
                  <ul className="list-disc pl-5 text-xs text-slate-500 space-y-1 mt-2 mb-0">
                    <li>Service credits are applied to the subsequent billing cycle only.</li>
                    <li>To claim a credit, you must submit an official support ticket through the client area within 7 days of the end of the month in which the downtime occurred.</li>
                  </ul>
                </div>
              </section>

              {/* Section 5 */}
              <section className="scroll-mt-20" id="customer-responsibilities">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">5. Customer Responsibilities</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To ensure optimal hosting environments and maintain policy eligibility, customers must:
                </p>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2 mb-0">
                    <li>Keep your software, website modules, and CMS applications actively updated.</li>
                    <li>Follow security best practices, including strong passwords and SSL implementation.</li>
                    <li>Utilize appropriate hosting packages scaled to your business traffic levels.</li>
                    <li>Comply fully with our Acceptable Use Policy and Terms of Service.</li>
                    <li>Maintain proper, independent off-server backups of your data.</li>
                  </ul>
                </div>
              </section>

              {/* Section 6 */}
              <section className="scroll-mt-20" id="changes">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">6. Changes to this SLA</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-0">
                  Website365 may update this SLA from time to time. Significant changes will be communicated via email or announced prominently on our website at least 30 days before taking effect.
                </p>
              </section>

              {/* Section 7 */}
              <section className="scroll-mt-20" id="relationship">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">7. Relationship to Other Terms</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-0">
                  This SLA is part of your agreement with Website365 and should be read in conjunction with our Terms of Use. In the event of any conflict, the primary Terms of Use shall prevail.
                </p>
              </section>

              {/* Section 8 / Contact Box */}
              <section className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60" id="contact">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" /> SLA Contact &amp; Inquiries
                </h2>
                <p className="text-gray-600 leading-relaxed mb-0">
                  If you have any questions regarding our service level agreements, or need assistance filing an uptime claim, please contact our support department:
                  <br /><br />
                  Email: <a href="mailto:support@website365.co.za" className="text-blue-600 hover:underline">support@website365.co.za</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ServiceLevelAgreement;
