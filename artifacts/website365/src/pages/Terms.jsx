import React from 'react';
import Section from '../components/Section';
import {
  FileText,
  Users,
  ShieldAlert,
  AlertOctagon,
  HardDrive,
  Lock,
  Cpu,
  Server,
  Key,
  Mail,
  Activity,
  CreditCard,
  XCircle,
  RefreshCw,
} from 'lucide-react';

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
            These terms and conditions govern your use of Web Hosting, Cloud Hosting, and Reseller Hosting services provided by Website365.
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-slate lg:prose-lg max-w-none">
            {/* Effective Date Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-6 mb-8 gap-4">
              <p className="text-gray-500 m-0">
                Effective Date: <strong>1 June 2026</strong>
              </p>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                TOS Agreement
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              This Terms of Service Agreement (“Agreement”) sets forth the terms and conditions governing your use of web hosting, cloud hosting, and reseller hosting services provided by Website365 (“we,” “us,” or “our”). By registering for or using our services, you agree to be bound by this Agreement.
            </p>

            <div className="space-y-12">
              {/* Section 1 */}
              <section className="scroll-mt-20" id="account-eligibility">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">1. Account Eligibility</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-1">1.1 Minimum Age Requirement</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">You must be at least 18 years old to use our services. Accounts associated with users under this age may be suspended or terminated.</p>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-1">1.2 Third-Party Registrations</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">If you register an account on behalf of another person or entity, you represent that you have the authority to bind them to this Agreement.</p>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-1">1.3 Account Security</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">You are responsible for maintaining the confidentiality of your account credentials. We are not liable for any loss or damage resulting from unauthorized access due to weak or compromised passwords.</p>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-1">1.4 Accurate Information</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">You agree to provide accurate, current, and complete information during registration. Failure to do so may result in suspension or termination of your account.</p>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-1">1.5 Verification</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">We may request identity or payment verification to prevent fraud, including photo identification or credit card confirmation. Failure to comply may result in service denial or cancellation.</p>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-1">1.6 Compliance with Laws</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">You agree to use our services in compliance with all applicable local, national, and international laws. Illegal, abusive, or unethical use of our services is strictly prohibited.</p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section className="scroll-mt-20" id="prohibited-activities">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                    <AlertOctagon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">2. Prohibited Activities</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  The following activities are strictly prohibited. Violations may result in immediate suspension or termination of your account:
                </p>
                
                <div className="bg-red-50/20 border border-red-100 rounded-2xl p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-700">
                    <div className="flex items-start gap-2">
                      <span className="text-red-500 font-bold shrink-0">•</span>
                      <span>Running IRC servers or related services</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-500 font-bold shrink-0">•</span>
                      <span>Using automated browsing tools, bots, or traffic exchanges</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-500 font-bold shrink-0">•</span>
                      <span>Hosting pirated software, illegal downloads/uploads, or warez</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-500 font-bold shrink-0">•</span>
                      <span>Using hacking tools, brute-force programs, port scanners, or IP scanners</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-500 font-bold shrink-0">•</span>
                      <span>Engaging in fraudulent activities (e.g., Ponzi schemes, HYIPs)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-500 font-bold shrink-0">•</span>
                      <span>Operating gambling, lottery, or betting websites</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-500 font-bold shrink-0">•</span>
                      <span>Running public VPNs, proxies, anonymizers, or TOR exit nodes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-500 font-bold shrink-0">•</span>
                      <span>Cryptocurrency mining or similar high-resource activities</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-500 font-bold shrink-0">•</span>
                      <span>Hosting phishing pages, malware, or fake login portals</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-500 font-bold shrink-0">•</span>
                      <span>Illegal file hosting or unauthorized streaming services</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-500 font-bold shrink-0">•</span>
                      <span>Hosting adult content or sexually explicit material</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-500 font-bold shrink-0">•</span>
                      <span>Any activity that overloads servers or disrupts network stability</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-500 font-bold shrink-0">•</span>
                      <span>Attempting to bypass security measures or gain unauthorized access</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-5 mb-6">
                  <h4 className="text-sm font-bold text-gray-900 mt-0 mb-2 flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-red-500" /> Specific Email &amp; Media Restraints:
                  </h4>
                  <ul className="list-disc pl-5 text-xs text-gray-600 space-y-2 mb-0">
                    <li><strong>No Bulk Mail:</strong> Using the hosting service or mail servers for email marketing, bulk email sending, newsletters, or any form of unsolicited communication is strictly forbidden.</li>
                    <li><strong>Standard Correspondence Only:</strong> Emails should only be used for regular business or personal correspondence (e.g., client communication, notifications, or order updates).</li>
                    <li><strong>Shared Hosting Media Restrictions:</strong> Hosting or operating streaming websites, media streaming platforms, or any service designed to deliver continuous audio/video content (e.g., movies, series, IPTV, live streams) on Shared Hosting packages is prohibited.</li>
                    <li><strong>No Cloud File Archiving:</strong> Using Website Hosting packages for cloud storage, personal data storage, file archiving, remote backups, media libraries, or storing files not directly required for the functioning of a publicly accessible website.</li>
                  </ul>
                </div>

                <p className="text-xs text-slate-500 italic mt-2">
                  <strong>Note:</strong> Website365 reserves the right to determine what constitutes abuse or violation and may update this list as needed.
                </p>
              </section>

              {/* Section 2.1 */}
              <section className="bg-amber-50/40 p-8 rounded-2xl border border-amber-200/60 scroll-mt-20" id="file-storage-prohibition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                    <HardDrive className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-amber-950 m-0">2.1 File Storage &amp; Cloud Storage Prohibition</h2>
                </div>
                <p className="text-amber-900 text-sm leading-relaxed mb-4">
                  Website Hosting packages may not be used as cloud storage, personal file storage, or for any purpose other than hosting functional website content.
                </p>
                <p className="text-amber-950 font-bold text-sm mb-3">
                  Website Hosting is intended solely for the operation of publicly accessible websites and the files directly required for those websites to function. Any other type of storage use is strictly prohibited.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-amber-950 uppercase tracking-wider mb-2">The following activities are expressly forbidden:</h4>
                    <ul className="list-disc pl-5 text-xs text-amber-900 space-y-1.5">
                      <li>Storing personal files, documents, media, videos, backups, archives, or any data not directly used by the hosted website</li>
                      <li>Using hosting services as a cloud drive, personal cloud, remote backup solution, NAS, or general file repository</li>
                      <li>Uploading or storing files that are not actively and directly used by the website’s frontend or backend</li>
                      <li>Using hosting as a private storage vault, synchronization folder, file dump, or data warehouse</li>
                      <li>Storing large volumes of data unrelated to website functionality or website operations</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white/70 border border-amber-200 rounded-xl">
                    <h5 className="text-xs font-extrabold text-amber-950 uppercase tracking-wider mt-0 mb-1">Compliance &amp; Enforcement</h5>
                    <p className="text-xs text-amber-900 mb-2 leading-relaxed">
                      If a file is not an active, functional component of the hosted website, it may not be stored on our Website Hosting platform. Any account found using Website Hosting for cloud storage, personal storage, unrelated data storage, or any non-website purpose will be <strong>immediately suspended</strong> and may be permanently terminated for continued misuse.
                    </p>
                    <p className="text-xs text-amber-850 m-0 leading-relaxed font-semibold">
                      Customers requiring high-capacity storage, off-site backups, media archiving, or non-website storage purposes must upgrade to a VPS or another appropriate service designed for such use. Website365 retains sole discretion in determining what constitutes “website-related content”.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="scroll-mt-20" id="usage-policy">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">3. Usage Policy</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-1">3.1 Fair Use &amp; Unlimited Resources</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      “Unlimited” bandwidth and storage apply to standard business and personal websites only. Excessive usage (e.g., exceeding 15GB/day of bandwidth or using hosting as a file storage system) may result in suspension or the need to upgrade to VPS or dedicated hosting.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-1">3.2 Resource Limits</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Activities negatively affecting server performance or network stability may result in throttling, restrictions, or account termination. Migration to a more suitable plan may be recommended if usage is excessive.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section className="scroll-mt-20" id="reseller-obligations">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                    <Server className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">4. Reseller Obligations &amp; Technical Requirements</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Special provisions, training limitations, and server management standards applying strictly to all Reseller packages:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div className="border border-slate-100 rounded-xl p-5 hover:bg-slate-50/50 transition-colors">
                    <h4 className="text-sm font-bold text-gray-950 mt-0 mb-2">4.1 Independent Operator Status</h4>
                    <p className="text-xs text-gray-600 leading-relaxed mb-0">The Client acknowledges that by purchasing a Reseller Hosting package, they are operating as an independent entity (“Reseller”). The Reseller is solely responsible for the operation of their business, including but not limited to technical support for their customers (“End Users”), billing, and account management.</p>
                  </div>

                  <div className="border border-slate-100 rounded-xl p-5 hover:bg-slate-50/50 transition-colors">
                    <h4 className="text-sm font-bold text-gray-950 mt-0 mb-2">4.2 Technical Proficiency Requirement</h4>
                    <p className="text-xs text-gray-600 leading-relaxed mb-0">The Reseller represents and warrants that they possess the requisite technical knowledge to administer a server environment using Web Host Manager (WHM) and cPanel. Website365 provides the Reseller Hosting service on an “as-is” basis regarding management software. The Reseller agrees that Website365 is not obligated to provide training, coaching, or instruction on the usage of WHM, cPanel, or general server administration.</p>
                  </div>

                  <div className="border border-slate-100 rounded-xl p-5 hover:bg-slate-50/50 transition-colors">
                    <h4 className="text-sm font-bold text-gray-950 mt-0 mb-2">4.3 Scope of Support</h4>
                    <p className="text-xs text-gray-600 leading-relaxed mb-0">Support provided by Website365 is strictly limited to the maintenance of server hardware, network uptime, and the operating system level (“Infrastructure Support”). Website365 explicitly declines any obligation to provide support for the Reseller’s End Users; scripting, coding, or web development; configuration of individual cPanel accounts; or general "how-to" questions.</p>
                  </div>

                  <div className="border border-slate-100 rounded-xl p-5 hover:bg-slate-50/50 transition-colors bg-red-50/30">
                    <h4 className="text-sm font-bold text-gray-950 mt-0 mb-2 text-red-950">4.4 Termination for Lack of Competence</h4>
                    <p className="text-xs text-red-900 leading-relaxed mb-0">Website365 reserves the right to terminate reseller services, at its sole discretion, if the Reseller's lack of technical expertise results in repeated support requests outside Infrastructure Support, server stability risks, or an excessive burden on support staff. Such termination may be executed immediately without liability for loss of business or data.</p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-3">
                  <p className="text-xs text-gray-600 m-0"><strong>4.5 Policy Compliance:</strong> Resellers must ensure their clients comply with all Website365 policies.</p>
                  <p className="text-xs text-gray-600 m-0"><strong>4.6 Shared Hosting Restrictions:</strong> Reselling shared hosting accounts is strictly prohibited; resellers must use proper reseller plans.</p>
                  <p className="text-xs text-gray-600 m-0"><strong>4.7 Reseller Responsibilities:</strong> Resellers are responsible for their own billing, technical support, and client communications.</p>
                  <p className="text-xs text-gray-600 m-0"><strong>4.8 End-User Support:</strong> Website365 does not provide end-user support for reseller clients.</p>
                  <p className="text-xs text-gray-600 m-0"><strong>4.9 Compliance Monitoring:</strong> Website365 reserves the right to audit, review, or modify reseller services to ensure compliance and may intervene in cases of illegal activity or abuse by reseller clients.</p>
                  <p className="text-xs text-blue-900 m-0 font-semibold bg-blue-50 p-2.5 rounded-lg"><strong>4.10 Acceptance of Reseller Hosting Policy:</strong> By agreeing to Website365’s Terms of Service, you expressly acknowledge and agree to be bound by our Reseller Hosting Policy.</p>
                </div>
              </section>

              {/* Section 5 */}
              <section className="scroll-mt-20" id="ssh-access">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                    <Key className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">5. Secure Shell (SSH) Access</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-0">
                  SSH access is disabled by default and may only be enabled upon request with valid justification. Abuse of SSH privileges, including attempts to compromise server security, will result in immediate termination.
                </p>
              </section>

              {/* Section 6 */}
              <section className="scroll-mt-20" id="email-spam-policy">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">6. Outgoing Email &amp; Spam Policy</h2>
                </div>
                
                <div className="space-y-4 mb-4">
                  <div className="p-4 border border-slate-100 rounded-xl">
                    <h4 className="text-sm font-bold text-gray-950 mt-0 mb-1">6.1 Intended Use of Email Services</h4>
                    <p className="text-xs text-gray-600 mb-0 leading-relaxed">Email services provided with our hosting are intended solely for regular business or personal correspondence (e.g., client communication, order confirmations, notifications, etc.).</p>
                  </div>
                  <div className="p-4 border border-slate-100 rounded-xl">
                    <h4 className="text-sm font-bold text-gray-950 mt-0 mb-1">6.2 Bulk Email Restrictions</h4>
                    <p className="text-xs text-gray-600 mb-0 leading-relaxed">Our servers must not be used for email marketing, bulk email sending, newsletters, or mass mailing of any kind.</p>
                  </div>
                  <div className="p-4 border border-slate-100 rounded-xl">
                    <h4 className="text-sm font-bold text-gray-950 mt-0 mb-1">6.3 Immediate Restrictions</h4>
                    <p className="text-xs text-gray-600 mb-0 leading-relaxed">Any account found sending marketing emails, bulk mail, or spam will have its email functionality immediately restricted or suspended without prior notice.</p>
                  </div>
                  <div className="p-4 border border-slate-100 rounded-xl">
                    <h4 className="text-sm font-bold text-gray-950 mt-0 mb-1">6.4 Repeated Violations</h4>
                    <p className="text-xs text-gray-600 mb-0 leading-relaxed">Repeated or severe violations may lead to full account suspension or termination.</p>
                  </div>
                  <div className="p-4 border border-slate-100 rounded-xl">
                    <h4 className="text-sm font-bold text-gray-950 mt-0 mb-1">6.5 Prohibition of Spam</h4>
                    <p className="text-xs text-gray-600 mb-0 leading-relaxed">Sending spam emails is strictly prohibited. This includes, but is not limited to, unsolicited emails, bulk emails sent without explicit recipient consent, deceptive messaging, or any email activity that violates anti-spam laws, industry best practices, or harms server or IP reputation.</p>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                  <p className="text-xs text-red-950 font-bold m-0 leading-relaxed">
                    <strong>6.6 Determination &amp; Prevention:</strong> Website365 reserves the sole right to determine what constitutes spam, unsolicited communication, or abusive email activity. We further reserve the right to monitor, block, throttle, restrict, or prevent any email from being sent if it is deemed spam or poses a risk to server integrity, IP reputation, or service quality—without prior notice.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section className="scroll-mt-20" id="network-cleanliness">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">7. Network &amp; Server Cleanliness</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-0">
                  Website365 actively monitors servers and networks to maintain a secure, spam-free environment, protect IP reputation, and ensure fair resource availability for all customers.
                </p>
              </section>

              {/* Section 8 */}
              <section className="scroll-mt-20" id="billing-domains">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">8. Payment, Billing &amp; Domain Ownership</h2>
                </div>
                
                <div className="space-y-4 mb-4">
                  <div className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:bg-slate-50/50 transition-colors">
                    <span className="text-sm font-extrabold text-blue-600 w-8 shrink-0">8.1</span>
                    <div>
                      <h4 className="text-sm font-bold text-gray-950 mt-0 mb-1">Advance Payments</h4>
                      <p className="text-xs text-gray-600 mb-0">All payments are due in advance of service activation.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:bg-slate-50/50 transition-colors">
                    <span className="text-sm font-extrabold text-blue-600 w-8 shrink-0">8.2</span>
                    <div>
                      <h4 className="text-sm font-bold text-gray-950 mt-0 mb-1">Non-Payment</h4>
                      <p className="text-xs text-gray-600 mb-0">Failure to pay on time may result in service suspension or cancellation.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:bg-slate-50/50 transition-colors">
                    <span className="text-sm font-extrabold text-blue-600 w-8 shrink-0">8.3</span>
                    <div>
                      <h4 className="text-sm font-bold text-gray-950 mt-0 mb-1">Pricing Changes</h4>
                      <p className="text-xs text-gray-600 mb-0">Website365 reserves the right to revise pricing, plans, and promotions with prior notice.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:bg-slate-50/50 transition-colors">
                    <span className="text-sm font-extrabold text-blue-600 w-8 shrink-0">8.4</span>
                    <div>
                      <h4 className="text-sm font-bold text-gray-950 mt-0 mb-1">Domain Ownership</h4>
                      <p className="text-xs text-gray-600 mb-0">Domains provided free as part of a hosting package remain the property of Website365 until the customer pays for domain renewal. Customers may not transfer, sell, or claim ownership prior to full payment. Non-payment may result in suspension or reclaiming of the domain.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:bg-slate-50/50 transition-colors">
                    <span className="text-sm font-extrabold text-blue-600 w-8 shrink-0">8.5</span>
                    <div>
                      <h4 className="text-sm font-bold text-gray-950 mt-0 mb-1">Domain Grace Period (Newly Registered Domains)</h4>
                      <p className="text-xs text-gray-600 mb-0">All newly registered domains (excluding free promotional domains) include a 3-month grace period from the date of registration. During this period, the customer must maintain active service and settle all applicable fees. Free domains provided through hosting packages do not qualify for a grace period and must be renewed before ownership is transferred.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:bg-slate-50/50 transition-colors">
                    <span className="text-sm font-extrabold text-blue-600 w-8 shrink-0">8.6</span>
                    <div>
                      <h4 className="text-sm font-bold text-gray-950 mt-0 mb-1">Overpayments and Account Credits</h4>
                      <p className="text-xs text-gray-600 mb-0">Any payments made in excess of the required service fees, including additional funds added via EFT, are non-refundable. Such funds will be added to your Website365 account as a credit balance and may be used to pay future hosting invoices, domain registrations, or other Website365 services. These funds cannot be refunded under any circumstances.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-300">
                  <h4 className="text-sm font-extrabold text-white mt-0 mb-3 flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-blue-400" /> 8.7 Subscription Billing &amp; Automatic Payments
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    All hosting services provided by Website365 are subscription-based services billed on a recurring basis unless cancelled. By subscribing to a hosting service using PayFast or any recurring payment method, you authorize automatic recurring charges according to your selected billing cycle (monthly, annually, etc.).
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    Payments may automatically be deducted from your selected payment method unless a cancellation request is submitted through the client area before the next invoice is generated. Customers are solely responsible for submitting cancellation requests if they no longer wish to continue using the service. Failure to submit a cancellation request does not constitute cancellation of the service.
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    Website365 cannot determine whether a customer no longer wishes to use a service unless an official cancellation request has been submitted through the client area. No refunds will be issued for recurring charges processed due to the customer failing to submit a cancellation request before invoice generation or automatic payment processing.
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-0 font-medium">
                    Customers are responsible for ensuring that recurring subscriptions linked to PayFast or any other payment provider are properly cancelled if they no longer wish to continue the service.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section className="scroll-mt-20" id="termination">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600 shrink-0">
                    <XCircle className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">9. Termination</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-1">9.1 By Website365</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">We reserve the right to suspend or terminate any account at our discretion for violations of this Agreement, security threats, or abuse.</p>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-1">9.2 By Customer</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">Customers may cancel services at any time through the client area. Cancellation requests must be submitted at least 7 days before the next billing cycle.</p>
                  </div>
                </div>
              </section>

              {/* Section 10 */}
              <section className="scroll-mt-20" id="backups">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                    <HardDrive className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">10. Backups</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-0">
                  Customers are responsible for maintaining their own website and data backups. Automated backups may be offered in some hosting plans but are not guaranteed.
                </p>
              </section>

              {/* Section 11 */}
              <section className="scroll-mt-20" id="liability-limit">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">11. Limitation of Liability</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To the maximum extent permitted by law, Website365 is not liable for indirect, incidental, special, or consequential damages arising from the use or inability to use our services, including loss of data or revenue.
                </p>
                <p className="text-gray-600 leading-relaxed mb-0 font-semibold">
                  Total liability is limited to the amount paid for the service in the six (6) months preceding the event giving rise to the claim.
                </p>
              </section>

              {/* Section 12 */}
              <section className="scroll-mt-20 bg-slate-50 p-8 rounded-2xl border border-slate-200/60" id="modifications">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">12. Modifications to Terms</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-0">
                  Website365 may update these Terms at any time. Continued use of services constitutes acceptance of the updated terms.
                  <br /><br />
                  <strong>Questions regarding our policies?</strong> Please open a support ticket or contact our legal compliance team at <a href="mailto:support@website365.co.za" className="text-blue-600 hover:underline">support@website365.co.za</a>.
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
