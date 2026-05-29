import React from 'react';
import Section from '../components/Section';
import {
  FileText,
  ShieldAlert,
  Users,
  Server,
  HelpCircle,
  HardDrive,
  Lock,
  CheckCircle,
  RefreshCw,
  Activity,
  AlertOctagon,
} from 'lucide-react';

const ResellerHostingPolicy = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            <span>Reseller Guidelines</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Reseller Hosting Policy</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Roles, responsibilities, limitations, and agreements governing Website365 reseller hosting services.
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-slate lg:prose-lg max-w-none">
            {/* Metadata bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-6 mb-8 gap-4">
              <p className="text-gray-500 m-0">
                Effective Date: <strong>29 May 2026</strong>
              </p>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                Reseller Agreement
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              This Reseller Hosting Policy outlines the operational boundaries, technical expectations, and legal terms between Website365, the Reseller, and their end clients. By purchasing and using Website365 Reseller or Master Reseller hosting services, you agree to comply with this policy.
            </p>

            <div className="space-y-12">
              {/* Section 1 */}
              <section className="scroll-mt-20" id="definition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">1. Definition of a Reseller</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  A reseller is a client who purchases reseller hosting services from Website365 for the purpose of:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1.5 mb-4">
                  <li>Creating and managing hosting accounts for their own customers</li>
                  <li>Selling hosting services under their own brand</li>
                  <li>Managing their clients’ websites, emails, and related services</li>
                </ul>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mt-4">
                  <p className="text-sm text-slate-700 m-0 leading-relaxed">
                    The reseller acts as the <strong>primary service provider</strong> to their own customers. Website365 provides the server infrastructure and control environment only.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section className="scroll-mt-20" id="relationship">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">2. Relationship Details</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  The relationship structure is strictly defined to ensure operational clarity and security boundaries:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1.5 mb-4">
                  <li>The reseller’s customers are <strong>not</strong> direct clients of Website365.</li>
                  <li>Website365 does <strong>not</strong> provide support directly to the reseller’s customers.</li>
                  <li>All communication must go through the reseller.</li>
                </ul>
                <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 mt-4">
                  <p className="text-sm font-semibold text-blue-900 m-0 mb-2">The reseller is exclusively responsible for:</p>
                  <ul className="list-disc pl-5 text-sm text-blue-800 space-y-1 mb-0">
                    <li>Billing their clients</li>
                    <li>Managing client expectations</li>
                    <li>Providing first-line technical support</li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section className="scroll-mt-20" id="responsibilities-reseller">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">3. Responsibilities of the Reseller</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Resellers are required to proactively manage their resources, customers, and financial aspects:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-3 flex items-center gap-1.5">
                      <Server className="w-4 h-4 text-emerald-600" /> Account Mgmt
                    </h3>
                    <ul className="list-disc pl-4 text-xs text-gray-600 space-y-2 mb-0">
                      <li>Creating, suspending, and terminating client accounts</li>
                      <li>Managing disk space, bandwidth, and resource allocation</li>
                      <li>Ensuring clients do not exceed allocated resources</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-3 flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4 text-emerald-600" /> Client Support
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">Providing first-level support and troubleshooting common issues such as:</p>
                    <ul className="list-disc pl-4 text-xs text-gray-600 space-y-1.5 mb-0">
                      <li>Email setup</li>
                      <li>Password resets</li>
                      <li>Website errors</li>
                      <li>DNS settings</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-3 flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-emerald-600" /> Billing &amp; Pay
                    </h3>
                    <ul className="list-disc pl-4 text-xs text-gray-600 space-y-2 mb-0">
                      <li>Billing their own customers</li>
                      <li>Collecting payments from their customers</li>
                      <li>Managing unpaid accounts</li>
                    </ul>
                    <p className="text-[10px] text-gray-400 mt-3 leading-snug">
                      Website365 does not get involved in disputes between the reseller and their customers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section className="scroll-mt-20" id="responsibilities-website365">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                    <Server className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">4. Responsibilities of Website365</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Website365's role focuses on delivering and maintaining a high-performance hosting foundation:
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:bg-slate-50/50 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                      <HardDrive className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-950 mt-0 mb-1">Server Infrastructure</h4>
                      <p className="text-xs text-gray-600 mb-0">Maintaining server hardware, network uptime, operating system and control panel maintenance, security patching, and monitoring overall server performance.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:bg-slate-50/50 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-950 mt-0 mb-1">Core Hosting Environment</h4>
                      <p className="text-xs text-gray-600 mb-0">Ensuring the core hosting environment remains functional, maintaining backups (if included in the specific package), and restoring server-level issues.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:bg-slate-50/50 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-950 mt-0 mb-1">Support to the Reseller Only</h4>
                      <p className="text-xs text-gray-600 mb-0">Providing technical support directly to the reseller, aiding in server-related issues, and investigating outages or performance issues. <strong>Website365 does not support end clients directly.</strong></p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section className="scroll-mt-20" id="white-label">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">5. White-Label Nature of Reseller Hosting</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Reseller hosting is designed to be a fully white-label service, meaning:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1.5 mb-0">
                  <li>The reseller may brand the service entirely as their own.</li>
                  <li>Website365’s name does not need to appear anywhere to end clients.</li>
                  <li>The reseller represents themselves as the direct hosting provider to their clients.</li>
                </ul>
              </section>

              {/* Section 6 */}
              <section className="scroll-mt-20" id="acceptable-use">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">6. Acceptable Use and Client Management</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  The reseller is legally obligated to ensure all of their clients strictly comply with:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1.5 mb-4">
                  <li>Website365’s Terms of Service</li>
                  <li>Anti-spam policies</li>
                  <li>Resource usage limits</li>
                </ul>
                <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mt-4">
                  <p className="text-sm text-orange-950 font-medium m-0 leading-relaxed">
                    If a reseller’s client violates these policies, Website365 reserves the right to suspend that specific sub-account. In severe, repeated, or systemic cases, the reseller's primary account itself may be suspended or terminated.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section className="scroll-mt-20" id="data-responsibility">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                    <HardDrive className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">7. Data Responsibility</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Resellers retain ultimate responsibility for data integrity and user management:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1.5 mb-4">
                  <li>The reseller must ensure their clients regularly maintain independent backups.</li>
                  <li>Managing and protecting website files and email data is the reseller's duty.</li>
                </ul>
                <div className="bg-red-50/50 border border-red-100 rounded-xl p-4">
                  <p className="text-xs text-red-900 font-semibold m-0 mb-1 flex items-center gap-1.5">
                    <Lock className="w-4 h-4 shrink-0 text-red-600" /> Website365 is not liable for:
                  </p>
                  <ul className="list-disc pl-5 text-xs text-red-800 space-y-1 mb-0">
                    <li>Data loss caused by reseller or client actions</li>
                    <li>Malware introduced by client websites</li>
                    <li>Poor website coding, vulnerable plugins, or security exploits</li>
                  </ul>
                </div>
              </section>

              {/* Section 8 */}
              <section className="scroll-mt-20" id="suspension-termination">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600 shrink-0">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">8. Suspension and Termination</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Website365 may suspend or terminate reseller accounts for:
                </p>
                <div className="flex flex-wrap gap-2 mb-0">
                  {[
                    'Abuse of server resources',
                    'Spamming or hosting bulk email tools',
                    'Illegal activity',
                    'Non-payment of reseller plans',
                    'Active security threats to the server',
                  ].map((item) => (
                    <span key={item} className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              {/* Section 9 */}
              <section className="scroll-mt-20" id="liability-limitation">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">9. Liability Limitation</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Website365 acts solely as an infrastructure and environment provider. Website365 is <strong>not liable for:</strong>
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1.5 mb-0">
                  <li>The reseller’s business operations or profits.</li>
                  <li>The reseller’s relationships, agreements, or disputes with their end clients.</li>
                  <li>Any loss of income, business interruption, or reputation damages.</li>
                </ul>
              </section>

              {/* Section 10 */}
              <section className="scroll-mt-20" id="agreement">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">10. Agreement</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-0">
                  By purchasing reseller hosting services from Website365, the reseller explicitly agrees that they operate as an independent hosting provider, they are entirely responsible for their own customers, and Website365 provides core server infrastructure and a technical environment only.
                </p>
              </section>

              {/* Disclaimer 1 */}
              <section className="bg-amber-50/50 p-8 rounded-2xl border border-amber-200/60 scroll-mt-20" id="development-disclaimer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                    <AlertOctagon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-amber-950 mb-0 mt-0 leading-tight">Website Development, Access &amp; Support Disclaimer</h2>
                </div>
                <p className="text-amber-900 font-semibold mb-3">Website365 provides hosting infrastructure only.</p>
                <h3 className="text-base font-bold text-amber-950 mt-4 mb-2">No Website Work or File Access</h3>
                <p className="text-amber-900 text-sm leading-relaxed mb-3">
                  Website365 does <strong>not:</strong>
                </p>
                <ul className="list-disc pl-5 text-sm text-amber-900 space-y-1.5 mb-4">
                  <li>Build, edit, maintain, or manage websites</li>
                  <li>Access website files, databases, or application code</li>
                  <li>Log into WordPress, CMS platforms, or admin panels</li>
                  <li>Make changes to reseller or client websites</li>
                </ul>
                <p className="text-xs text-amber-800 m-0 leading-relaxed font-medium">
                  At no point will Website365 staff access website files unless strictly required for a server-level security incident or platform investigation.
                </p>
              </section>

              {/* Disclaimer 2 */}
              <section className="bg-red-50 p-8 rounded-2xl border border-red-200/60 scroll-mt-20" id="discontinue-services">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-800 shrink-0">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-red-950 mb-0 mt-0 leading-tight">Right to Discontinue Reseller Services</h2>
                </div>
                <p className="text-red-900 leading-relaxed mb-4">
                  Website365 reserves the right to discontinue providing reseller hosting services at its sole discretion.
                </p>
                <p className="text-red-950 font-semibold mb-2">If Website365 determines that the reseller relationship can no longer continue, for any reason, the following will apply:</p>
                <ul className="list-disc pl-5 text-sm text-red-900 space-y-1.5 mb-4">
                  <li>The reseller will be provided with written notice.</li>
                  <li>The reseller will be given reasonable time to migrate their accounts, websites, and data to another provider.</li>
                  <li>This migration period will typically extend until the end of the reseller’s current billing cycle.</li>
                </ul>
                <div className="bg-white/80 rounded-xl p-4 border border-red-100 mb-0">
                  <p className="text-xs font-bold text-red-950 mt-0 mb-2">During this notice period:</p>
                  <ul className="list-disc pl-4 text-xs text-red-900 space-y-1.5 mb-0">
                    <li>The reseller account will remain active, provided there is no abuse, illegal activity, or security risk.</li>
                    <li>The reseller is solely responsible for arranging and completing all migrations.</li>
                    <li>Website365 is not responsible or liable for moving accounts to another provider.</li>
                  </ul>
                  <p className="text-[11px] text-red-800 mt-3 mb-0 font-medium">
                    If the reseller fails to migrate their data before the end of the billing cycle, the account may be suspended or terminated, and data may be permanently removed in accordance with our data retention policy.
                  </p>
                </div>
              </section>

              {/* Disclaimer 3 */}
              <section className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-slate-300 scroll-mt-20" id="immediate-termination">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-0 mt-0 leading-tight">Immediate Termination</h2>
                </div>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Website365 reserves the right to suspend or terminate reseller services immediately, without notice, in cases involving:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-0">
                  {[
                    'Spam or bulk unsolicited email operations',
                    'Illegal or fraudulent activity',
                    'Security threats to the server environment',
                    'Abuse of server resources',
                    'Violations of the Acceptable Use Policy',
                  ].map((caseItem) => (
                    <div key={caseItem} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-red-500 font-bold shrink-0">•</span>
                      <span>{caseItem}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Contact Info Box */}
              <section className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">Contact &amp; Policy Inquiries</h2>
                <p className="text-gray-600 leading-relaxed mb-0">
                  <strong>Website365 Support Department</strong><br />
                  For inquiries regarding hosting policy enforcement, migration coordination, or acceptable use boundaries, please reach out to: <a href="mailto:support@website365.co.za" className="text-blue-600 hover:underline">support@website365.co.za</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ResellerHostingPolicy;
