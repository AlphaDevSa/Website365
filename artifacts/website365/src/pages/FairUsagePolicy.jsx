import React from 'react';
import Section from '../components/Section';
import { FileText, ShieldAlert, HardDrive, MailOpen, Activity, Cpu, Lock, HelpCircle, CheckCircle, RefreshCw } from 'lucide-react';

const FairUsagePolicy = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <ShieldAlert className="w-4 h-4" />
            <span>Fair &amp; Acceptable Usage</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Fair Usage Policy (FUP)</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Our acceptable and fair usage guidelines for reseller and master reseller hosting services.
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-slate lg:prose-lg max-w-none">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-6 mb-8 gap-4">
              <p className="text-gray-500 m-0">
                Effective Date: <strong>28 May 2026</strong>
              </p>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                AUP / FUP Agreement
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              This Fair Usage Policy ("FUP") and Acceptable Usage Policy ("AUP") governs the use of all Website365 hosting services, including Reseller Hosting and Master Reseller Hosting services. By using Website365 services, you agree to comply with this policy.
            </p>

            <div className="space-y-12">
              {/* Section 1 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">1. Purpose of Service</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Website365 Reseller Hosting and Master Reseller Hosting services are designed and optimized solely for legitimate web hosting environments, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1.5 mb-4">
                  <li>Website hosting</li>
                  <li>Web application hosting</li>
                  <li>Business email hosting</li>
                  <li>Reseller hosting services</li>
                  <li>Website-related databases and content</li>
                </ul>
                <div className="bg-red-50/50 border border-red-100 rounded-xl p-4 mt-4">
                  <p className="text-sm text-red-800 font-semibold m-0 flex items-center gap-1.5">
                    <Lock className="w-4 h-4 shrink-0 text-red-600" /> These services are NOT intended for:
                  </p>
                  <ul className="list-disc pl-5 text-sm text-red-700 space-y-1 mt-2 mb-0">
                    <li>High-volume file storage</li>
                    <li>Online backup repositories</li>
                    <li>Personal cloud storage</li>
                    <li>File archival systems</li>
                    <li>Media warehousing</li>
                    <li>Bulk download repositories</li>
                    <li>Data storage unrelated to active hosted websites</li>
                  </ul>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <HardDrive className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">2. Unlimited Disk Space Policy</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Certain Website365 hosting packages may advertise or reference "Unlimited Disk Space" or "Unlimited Hosting." All unlimited hosting allocations remain strictly subject to this Fair Usage Policy and Acceptable Usage Policy.
                </p>
                
                <p className="text-gray-600 font-semibold mb-2">The following maximum storage allocations apply:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-1">Reseller Hosting</h3>
                    <p className="text-sm text-gray-500 mb-3">Where "Unlimited" storage is advertised, usage is subject to a Fair Usage maximum of:</p>
                    <span className="inline-flex items-center justify-center px-3 py-1 bg-blue-600 text-white text-lg font-extrabold rounded-lg">
                      250GB total disk usage
                    </span>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-1">Master Reseller Hosting</h3>
                    <p className="text-sm text-gray-500 mb-3">Where "Unlimited" storage is advertised, usage is subject to a Fair Usage maximum of:</p>
                    <span className="inline-flex items-center justify-center px-3 py-1 bg-indigo-600 text-white text-lg font-extrabold rounded-lg">
                      350GB total disk usage
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  The advertised "Unlimited" offering is intended to accommodate normal web hosting requirements and reasonable website growth within standard hosting operations.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Unlimited hosting may not be used for bulk data storage, backup storage, archival purposes, large inactive file collections, non-website-related storage, file dumping, or media storage unrelated to hosted websites. Website365 reserves the right to review, restrict, suspend, or terminate accounts found to be using services outside the intended web hosting purpose.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">3. Fair Usage Requirements</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Customers are expected to use hosting resources responsibly and in a manner consistent with normal website hosting operations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-emerald-100 rounded-xl p-4 bg-emerald-50/20">
                    <h4 className="text-sm font-bold text-emerald-800 uppercase tracking-wider mt-0 mb-2">✓ Acceptable Usage Includes</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1 mb-0">
                      <li>Website files</li>
                      <li>Website images and media</li>
                      <li>Website databases</li>
                      <li>CMS systems</li>
                      <li>Customer business email</li>
                      <li>Active website-related content</li>
                    </ul>
                  </div>
                  <div className="border border-red-100 rounded-xl p-4 bg-red-50/20">
                    <h4 className="text-sm font-bold text-red-800 uppercase tracking-wider mt-0 mb-2">✗ Excessive or Abusive Usage</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1 mb-0">
                      <li>Extremely large inactive websites</li>
                      <li>Excessive backup archives</li>
                      <li>Mass file storage</li>
                      <li>Storage of unrelated personal or business files</li>
                      <li>High inode consumption</li>
                      <li>Excessive email storage</li>
                      <li>Continuous resource-intensive operations</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Website365 may request customers reduce resource usage where it negatively impacts server performance or exceeds fair operational thresholds.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                    <MailOpen className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">4. Email Storage Policy</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Email inboxes form part of the total storage allocation assigned to reseller hosting and master reseller hosting accounts. All email storage contributes toward the applicable Fair Usage allocation limits. Website365 does not recommend prolonged or excessive email storage on hosting servers.
                </p>
                <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-5 mb-4">
                  <p className="text-sm text-slate-800 font-bold mt-0 mb-2">Customers are strongly encouraged to:</p>
                  <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1 mb-0">
                    <li>Regularly download email using an email client</li>
                    <li>Archive important email locally on their computers or external systems</li>
                    <li>Maintain independent email backups</li>
                  </ul>
                  <p className="text-xs text-slate-400 mt-3 mb-0">
                    Recommended email clients include Microsoft Outlook, Mozilla Thunderbird, Apple Mail, and mobile mail applications using IMAP or POP3.
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Website365 hosting servers are intended for active email communication services and not long-term email archiving or storage. Excessive email storage may result in performance degradation, account warnings, requests for cleanup, suspension of email services, or hosting account restrictions.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">5. Inode &amp; Resource Usage</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Website365 may enforce inode and system resource limitations to maintain overall server stability. Inodes include:
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Files', 'Folders', 'Emails', 'Attachments', 'Cache files', 'Logs'].map((item) => (
                    <span key={item} className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Excessive inode usage may negatively affect server performance and may require corrective action.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">6. Reseller &amp; Master Reseller Responsibilities</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Resellers and Master Resellers remain fully responsible for their own accounts, sub-reseller accounts, customer accounts, resource monitoring, and compliance enforcement.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Resellers may not knowingly permit abuse of unlimited hosting allocations, illegal content, spam operations, malware hosting, or high-volume storage usage unrelated to web hosting.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">7. Prohibited Activities</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The following activities are strictly prohibited on all Website365 services:
                </p>
                <div className="bg-red-50/20 border border-red-100 rounded-2xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    {[
                      'Illegal content hosting',
                      'Malware distribution',
                      'Spam and unsolicited bulk email',
                      'Phishing or fraud',
                      'Network abuse',
                      'DDoS attacks',
                      'Unauthorized access attempts',
                      'Cryptocurrency mining',
                      'Torrent hosting',
                      'Large-scale file storage',
                      'Backup repository hosting',
                      'Use of hosting services as storage infrastructure',
                    ].map((act) => (
                      <div key={act} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-red-500 font-bold shrink-0">•</span>
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">8. Enforcement &amp; Suspension</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Website365 reserves the right to investigate suspected abuse, limit resource usage, remove prohibited content, suspend services, or terminate accounts without notice in severe cases.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Immediate action may be taken where activities threaten server stability, security, network integrity, other customers, or legal compliance.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">9. Backups</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Customers are solely responsible for maintaining independent backups of their data. Website365 may provide courtesy backups where applicable, however:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                  <li>Backups are not guaranteed</li>
                  <li>Backup availability is not permanent</li>
                  <li>Website365 is not responsible for data loss</li>
                </ul>
                <p className="text-gray-600 leading-relaxed font-semibold">
                  Customers should maintain their own local and remote backups at all times.
                </p>
              </section>

              {/* Section 10 */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">10. Policy Amendments</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Website365 reserves the right to amend or update this policy at any time without prior notice. Continued use of Website365 services constitutes acceptance of the latest version of this policy.
                </p>
              </section>

              {/* Section 11 - Contact Info Box */}
              <section className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">11. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed mb-0">
                  <strong>Website365</strong><br />
                  Website: <a href="https://website365.co.za" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://website365.co.za</a>
                  <br /><br />
                  For abuse reports or policy inquiries, please contact Website365 support at support@website365.co.za.
                </p>
              </section>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FairUsagePolicy;
