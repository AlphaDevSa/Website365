import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Globe, Loader2, Receipt, X, AlertCircle, Server, Cpu, MonitorDot, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { submitForm } from '../utils/formSubmit';

const VDS_SETUP_FEE = 650;

const DED_SSD_OPTIONS = [
  { label: 'No additional storage', price: 0 },
  { label: '500 GB SSD', price: 439 },
  { label: '1 TB SSD',   price: 759 },
  { label: '2 TB SSD',   price: 1269 },
];
const DED_CPANEL_OPTIONS = [
  { label: 'None', price: 0 },
  { label: '1 cPanel Account',    price: 659 },
  { label: '100 cPanel Accounts', price: 1609 },
  { label: '150 cPanel Accounts', price: 2179 },
  { label: '200 cPanel Accounts', price: 2759 },
  { label: '250 cPanel Accounts', price: 3219 },
  { label: '300 cPanel Accounts', price: 3789 },
  { label: '350 cPanel Accounts', price: 4369 },
  { label: '400 cPanel Accounts', price: 4939 },
  { label: '450 cPanel Accounts', price: 5519 },
  { label: '500 cPanel Accounts', price: 5979 },
];
const DED_SOFTWARE_OPTIONS = [
  { label: 'Softaculous',         price: 59 },
  { label: 'CloudLinux',          price: 339 },
  { label: 'LiteSpeed 8GB',       price: 569 },
  { label: 'LiteSpeed Unlimited', price: 1029 },
  { label: 'Kernelcare',          price: 49 },
  { label: 'Imunify AV+',         price: 169 },
  { label: 'Imunify 360',         price: 539 },
];

const parseZar = (value) => {
  if (!value) return null;
  const cleaned = String(value).replace(/,/g, '');
  const match = cleaned.match(/[\d.]+/);
  if (!match) return null;
  const n = Number.parseFloat(match[0]);
  if (Number.isNaN(n)) return null;
  return n;
};

const formatZar = (amount) => {
  if (amount == null || Number.isNaN(amount)) return '';
  return `R${amount.toFixed(2)}`;
};

const computeProRata = (monthlyAmount, now = new Date()) => {
  if (monthlyAmount == null || Number.isNaN(monthlyAmount)) return null;
  const year = now.getFullYear();
  const month = now.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const day = now.getDate();
  const remainingDays = Math.max(0, daysInMonth - day + 1);
  const prorata = (monthlyAmount * remainingDays) / daysInMonth;
  return {
    daysInMonth,
    remainingDays,
    day,
    dueNow: Math.max(0, prorata),
    monthlyThereafter: monthlyAmount
  };
};

const computeVdsDueNow = (monthlyAmount, now = new Date()) => {
  if (monthlyAmount == null || Number.isNaN(monthlyAmount)) return null;
  const year = now.getFullYear();
  const month = now.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const day = now.getDate();
  const remainingDays = Math.max(0, daysInMonth - day + 1);
  const prorataThisMonth = (monthlyAmount * remainingDays) / daysInMonth;
  const includesNextMonth = day > 21;
  const nextMonthCharge = includesNextMonth ? monthlyAmount : 0;
  return {
    day,
    daysInMonth,
    remainingDays,
    prorataThisMonth,
    includesNextMonth,
    nextMonthCharge,
    setupFee: VDS_SETUP_FEE,
    dueNow: prorataThisMonth + nextMonthCharge + VDS_SETUP_FEE,
    monthlyThereafter: monthlyAmount,
  };
};

const PlanOrderModal = ({ isOpen, onClose, plan, formType = 'Order' }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [domainAction, setDomainAction] = useState('register');
  const [domainCheck, setDomainCheck] = useState({ status: 'idle', result: null, error: '' });
  const [addonRam, setAddonRam] = useState(false);
  const [addonSsd, setAddonSsd] = useState('No additional storage');
  const [addonCpanel, setAddonCpanel] = useState('None');
  const [addonSoftware, setAddonSoftware] = useState([]);
  const [addonIp, setAddonIp] = useState(false);
  const [addonVlan, setAddonVlan] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    company: '',
    email: '',
    tel: '',
    whatsapp: '',
    domain: '',
    hostname: '',
    os: 'Ubuntu'
  });

  const isVds = formType === 'VDS Server';
  const isDedicated = formType === 'Dedicated Server';

  const monthlyAmount = useMemo(() => parseZar(plan?.price), [plan?.price]);
  const yearlyAmount = useMemo(() => parseZar(plan?.yearlyPrice), [plan?.yearlyPrice]);
  const prorata = useMemo(() => computeProRata(monthlyAmount), [monthlyAmount]);
  const vdsBilling = useMemo(() => isVds ? computeVdsDueNow(monthlyAmount) : null, [isVds, monthlyAmount]);

  useEffect(() => {
    if (!isOpen) return;
    setBillingCycle('monthly');
    setDomainAction('register');
    setDomainCheck({ status: 'idle', result: null, error: '' });
    setAddonRam(false);
    setAddonSsd('No additional storage');
    setAddonCpanel('None');
    setAddonSoftware([]);
    setAddonIp(false);
    setAddonVlan(false);
    setFormData({
      name: '',
      surname: '',
      company: '',
      email: '',
      tel: '',
      whatsapp: '',
      domain: '',
      hostname: '',
      os: 'Ubuntu'
    });
  }, [isOpen, plan?.title]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (id === 'domain') {
      setDomainCheck({ status: 'idle', result: null, error: '' });
    }
  };

  const canCheckDomain = useMemo(() => {
    if (!formData.domain || !formData.domain.trim()) return false;
    if (!formData.domain.trim().includes('.')) return false;
    return domainAction !== 'existing';
  }, [domainAction, formData.domain]);

  const domainStatus = useMemo(() => {
    if (domainAction === 'existing') return { label: '', tone: 'muted' };
    if (domainCheck.status === 'checking') return { label: 'Checking...', tone: 'muted' };
    if (domainCheck.status === 'error') {
      if (domainCheck.error?.includes('timed out')) {
        return { label: 'Check timed out (WHOIS is slow). Please try again or you can proceed anyway if you know it is correct.', tone: 'muted' };
      }
      return { label: domainCheck.error || 'Domain check failed', tone: 'error' };
    }
    if (domainCheck.status !== 'done' || !domainCheck.result) return { label: '', tone: 'muted' };

    const { available, status } = domainCheck.result;
    if (domainAction === 'register') {
      if (available === true) {
        const price = domainCheck.result.pricing?.amount;
        const text = price ? `Available to register for ${formatZar(price)}/yr` : 'Available to register';
        return { label: text, tone: 'success' };
      }
      if (available === false) return { label: 'Unavailable for Registration', tone: 'error' };
      return { label: `Check returned: ${status || 'unknown'}`, tone: 'muted' };
    }
    if (domainAction === 'transfer') {
      if (available === false) {
        const price = domainCheck.result.pricing?.amount;
        const text = price != null ? `Ready to Transfer (${formatZar(price)})` : 'Ready to Transfer';
        return { label: text, tone: 'success' };
      }
      if (available === true) return { label: 'Not Registered (Registration Required)', tone: 'error' };
      return { label: `Check returned: ${status || 'unknown'}`, tone: 'muted' };
    }
    return { label: '', tone: 'muted' };
  }, [domainAction, domainCheck]);

  const domainCost = useMemo(() => {
    if (domainAction === 'existing') return 0;
    if (domainCheck.status !== 'done' || !domainCheck.result?.pricing) return 0;
    const amount = Number(domainCheck.result.pricing.amount);
    return Number.isFinite(amount) ? amount : 0;
  }, [domainAction, domainCheck]);

  const planCost = useMemo(() => {
    if (billingCycle === 'yearly') return yearlyAmount;
    return monthlyAmount;
  }, [billingCycle, monthlyAmount, yearlyAmount]);

  const planDueNow = useMemo(() => {
    if (billingCycle === 'yearly') return yearlyAmount;
    return prorata?.dueNow ?? monthlyAmount;
  }, [billingCycle, monthlyAmount, prorata, yearlyAmount]);

  const addonTotal = useMemo(() => {
    if (!isDedicated) return 0;
    let total = 0;
    if (addonRam) total += 289;
    const ssd = DED_SSD_OPTIONS.find(s => s.label === addonSsd);
    if (ssd) total += ssd.price;
    const cpanel = DED_CPANEL_OPTIONS.find(c => c.label === addonCpanel);
    if (cpanel) total += cpanel.price;
    addonSoftware.forEach(label => {
      const sw = DED_SOFTWARE_OPTIONS.find(s => s.label === label);
      if (sw) total += sw.price;
    });
    if (addonIp) total += 69;
    if (addonVlan) total += 229;
    return total;
  }, [isDedicated, addonRam, addonSsd, addonCpanel, addonSoftware, addonIp, addonVlan]);

  const dueNowTotal = useMemo(() => {
    const planPart = Number.isFinite(planDueNow) ? planDueNow : 0;
    return planPart + domainCost + addonTotal;
  }, [domainCost, planDueNow, addonTotal]);

  const runDomainCheck = async () => {
    if (!canCheckDomain) return;
    setDomainCheck({ status: 'checking', result: null, error: '' });
    try {
      const domain = formData.domain.trim();
      if (!domain.includes('.') || /\s/.test(domain)) {
        throw new Error('Enter a full domain like example.co.za');
      }
      const qs = new URLSearchParams({ domain, action: domainAction });
      const response = await fetch(`/api/domain/check?${qs.toString()}`, {
        headers: { 'Accept': 'application/json' }
      });
      const json = await response.json().catch(() => ({}));
      if (!response.ok) {
        const detail = json.detail || json.whoisSnippet || '';
        throw new Error(detail ? `${json.error || 'Domain check failed'}: ${detail}` : (json.error || 'Domain check failed'));
      }
      setDomainCheck({ status: 'done', result: json, error: '' });
    } catch (err) {
      setDomainCheck({ status: 'error', result: null, error: err?.message || 'Domain check failed' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!plan) return;

    setIsSubmitting(true);
    setSubmitError('');

    const submissionData = {
      ...formData,
      billing_cycle: billingCycle,
      domain_action: isVds ? 'n/a' : domainAction,
      domain_check_status: domainCheck?.result?.status || '',
      domain_check_available: typeof domainCheck?.result?.available === 'boolean' ? String(domainCheck.result.available) : '',
      domain_check_transferable: typeof domainCheck?.result?.transferable === 'boolean' ? String(domainCheck.result.transferable) : '',
      domain_price: domainCheck?.result?.pricing?.amount != null ? String(domainCheck.result.pricing.amount) : '',
      domain_price_currency: domainCheck?.result?.pricing?.currencyCode || '',
      order_due_now_total: formatZar(dueNowTotal),
      plan_name: plan.title,
      plan_price: plan.price,
      plan_yearly_price: plan.yearlyPrice || '',
      billing_period: plan.billingPeriod,
      form_type: formType,
      prorata_due_now: billingCycle === 'monthly' && prorata ? formatZar(prorata.dueNow) : '',
      monthly_thereafter: billingCycle === 'monthly' && prorata ? formatZar(prorata.monthlyThereafter) : '',
      yearly_due_now: billingCycle === 'yearly' && yearlyAmount != null ? formatZar(yearlyAmount) : '',
      vds_prorata_this_month: vdsBilling ? formatZar(vdsBilling.prorataThisMonth) : '',
      vds_next_month_advance: vdsBilling ? formatZar(vdsBilling.nextMonthCharge) : '',
      vds_setup_fee: vdsBilling ? formatZar(vdsBilling.setupFee) : '',
      vds_due_now_total: vdsBilling ? formatZar(vdsBilling.dueNow) : '',
      ...(isDedicated && {
        addon_ram: addonRam ? 'Yes — R289/16GB' : 'No',
        addon_ssd: addonSsd !== 'No additional storage' ? addonSsd : 'None',
        addon_cpanel: addonCpanel !== 'None' ? addonCpanel : 'None',
        addon_software: addonSoftware.length > 0 ? addonSoftware.join(', ') : 'None',
        addon_ip: addonIp ? 'Yes — R69/mo' : 'No',
        addon_vlan: addonVlan ? 'Yes — R229/mo' : 'No',
        addon_monthly_total: addonTotal > 0 ? formatZar(addonTotal) : 'R0.00',
      }),
    };

    const result = await submitForm(submissionData);
    setIsSubmitting(false);
    
    if (result.success) {
      onClose();
      navigate('/thank-you');
    } else {
      setSubmitError('Sorry, there was an error submitting your order. Please try again later.');
    }
  };

  if (!isOpen || !plan) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Receipt className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Place Your Order</h2>
                <p className="text-sm text-gray-500">{plan.title}</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form className="grid grid-cols-1 lg:grid-cols-3 gap-0" onSubmit={handleSubmit}>
            <div className="lg:col-span-2 p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              {yearlyAmount != null ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="billingCycle" className="text-sm font-medium text-gray-700">Billing Cycle</label>
                    <select
                      id="billingCycle"
                      value={billingCycle}
                      onChange={(e) => setBillingCycle(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                    >
                      <option value="monthly">Monthly</option>
                      <option value="yearly">Yearly</option>
                    </select>
                  </div>
                </div>
              ) : null}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="surname" className="text-sm font-medium text-gray-700">Surname</label>
                  <input
                    type="text"
                    id="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="company" className="text-sm font-medium text-gray-700">Company</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="tel" className="text-sm font-medium text-gray-700">Telephone Number</label>
                  <input
                    type="tel"
                    id="tel"
                    value={formData.tel}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="whatsapp" className="text-sm font-medium text-gray-700">WhatsApp Number</label>
                  <input
                    type="tel"
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>

              {isVds ? (
                <div className="pt-2 space-y-4">
                  <div className="flex items-center gap-2 mb-1 text-gray-900 font-semibold">
                    <Globe className="w-5 h-5 text-blue-600" />
                    Server Configuration
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="hostname" className="text-sm font-medium text-gray-700">Hostname <span className="text-gray-400 font-normal">(e.g. server.yourdomain.co.za)</span></label>
                    <input
                      type="text"
                      id="hostname"
                      value={formData.hostname}
                      onChange={handleChange}
                      placeholder="server.yourdomain.co.za"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="os" className="text-sm font-medium text-gray-700">Operating System</label>
                    <select
                      id="os"
                      value={formData.os}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                    >
                      <option value="Ubuntu">Ubuntu</option>
                      <option value="Debian">Debian</option>
                      <option value="AlmaLinux">AlmaLinux</option>
                    </select>
                  </div>
                </div>
              ) : isDedicated ? (
                <div className="pt-2 space-y-5">
                  {/* ── Hostname ── */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-gray-900 font-semibold">
                      <Server className="w-5 h-5 text-blue-600" />
                      Hostname
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label htmlFor="hostname" className="text-sm font-medium text-gray-700">Hostname <span className="text-gray-400 font-normal">(e.g. server.yourdomain.co.za)</span></label>
                        <input
                          type="text"
                          id="hostname"
                          value={formData.hostname}
                          onChange={handleChange}
                          placeholder="server.yourdomain.co.za"
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="os" className="text-sm font-medium text-gray-700">Operating System</label>
                        <select
                          id="os"
                          value={formData.os}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                        >
                          <option value="Ubuntu">Ubuntu</option>
                          <option value="Debian">Debian</option>
                          <option value="AlmaLinux">AlmaLinux</option>
                          <option value="CentOS">CentOS</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* ── Hardware Add-ons ── */}
                  <div className="rounded-xl border border-gray-200 overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 bg-blue-50 border-b border-blue-100">
                      <Cpu className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-bold text-blue-800">Hardware Add-ons</span>
                      <span className="ml-auto text-xs text-blue-500 font-medium">Optional</span>
                    </div>
                    <div className="p-4 space-y-4">
                      <label className="flex items-center justify-between gap-3 cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={addonRam}
                            onChange={e => setAddonRam(e.target.checked)}
                            className="w-4 h-4 rounded text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">RAM upgrade (+16 GB ECC)</span>
                        </div>
                        <span className="text-sm font-bold text-gray-800 shrink-0">+R289/mo</span>
                      </label>
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Additional Storage</label>
                        <select
                          value={addonSsd}
                          onChange={e => setAddonSsd(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white text-sm"
                        >
                          {DED_SSD_OPTIONS.map(o => (
                            <option key={o.label} value={o.label}>{o.label}{o.price > 0 ? ` — +R${o.price}/mo` : ''}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* ── cPanel Accounts ── */}
                  <div className="rounded-xl border border-gray-200 overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 bg-indigo-50 border-b border-indigo-100">
                      <MonitorDot className="w-4 h-4 text-indigo-600" />
                      <span className="text-sm font-bold text-indigo-800">cPanel Accounts</span>
                      <span className="ml-auto text-xs text-indigo-500 font-medium">Optional</span>
                    </div>
                    <div className="p-4 space-y-1">
                      <label className="text-sm font-medium text-gray-700">Account Tier</label>
                      <select
                        value={addonCpanel}
                        onChange={e => setAddonCpanel(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white text-sm"
                      >
                        {DED_CPANEL_OPTIONS.map(o => (
                          <option key={o.label} value={o.label}>{o.label}{o.price > 0 ? ` — R${o.price}/mo` : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* ── cPanel Add-ons ── */}
                  <div className="rounded-xl border border-gray-200 overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 bg-violet-50 border-b border-violet-100">
                      <MonitorDot className="w-4 h-4 text-violet-600" />
                      <span className="text-sm font-bold text-violet-800">cPanel Add-ons</span>
                      <span className="ml-auto text-xs text-violet-500 font-medium">Optional</span>
                    </div>
                    <div className="p-4 space-y-2">
                      {DED_SOFTWARE_OPTIONS.map(o => (
                        <label key={o.label} className="flex items-center justify-between gap-3 cursor-pointer group">
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={addonSoftware.includes(o.label)}
                              onChange={e => setAddonSoftware(prev =>
                                e.target.checked ? [...prev, o.label] : prev.filter(l => l !== o.label)
                              )}
                              className="w-4 h-4 rounded text-violet-600 border-gray-300 focus:ring-violet-500"
                            />
                            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{o.label}</span>
                          </div>
                          <span className="text-sm font-bold text-gray-800 shrink-0">+R{o.price}/mo</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* ── Extras ── */}
                  <div className="rounded-xl border border-gray-200 overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 bg-purple-50 border-b border-purple-100">
                      <Layers className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-bold text-purple-800">Extras</span>
                      <span className="ml-auto text-xs text-purple-500 font-medium">Optional</span>
                    </div>
                    <div className="p-4 space-y-2">
                      <label className="flex items-center justify-between gap-3 cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={addonIp}
                            onChange={e => setAddonIp(e.target.checked)}
                            className="w-4 h-4 rounded text-purple-600 border-gray-300 focus:ring-purple-500"
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">IP Address</p>
                            <p className="text-xs text-gray-400">Additional IPs require motivation</p>
                          </div>
                        </div>
                        <span className="text-sm font-bold text-gray-800 shrink-0">+R69/mo</span>
                      </label>
                      <label className="flex items-center justify-between gap-3 cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={addonVlan}
                            onChange={e => setAddonVlan(e.target.checked)}
                            className="w-4 h-4 rounded text-purple-600 border-gray-300 focus:ring-purple-500"
                          />
                          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">VLAN</span>
                        </div>
                        <span className="text-sm font-bold text-gray-800 shrink-0">+R229/mo</span>
                      </label>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="pt-2">
                  <div className="flex items-center gap-2 mb-2 text-gray-900 font-semibold">
                    <Globe className="w-5 h-5 text-blue-600" />
                    Domain
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-1 space-y-1">
                      <label htmlFor="domainAction" className="text-sm font-medium text-gray-700">Action</label>
                      <select
                        id="domainAction"
                        value={domainAction}
                        onChange={(e) => {
                          setDomainAction(e.target.value);
                          setDomainCheck({ status: 'idle', result: null, error: '' });
                        }}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                      >
                        <option value="register">Register new</option>
                        <option value="transfer">Transfer</option>
                        <option value="existing">I already have one</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2 space-y-1">
                      <label htmlFor="domain" className="text-sm font-medium text-gray-700">Domain Name</label>
                      <div className="flex gap-3">
                        <input
                          type="text"
                          id="domain"
                          value={formData.domain}
                          onChange={handleChange}
                          placeholder="example.co.za"
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        />
                        {canCheckDomain ? (
                          <button
                            type="button"
                            onClick={runDomainCheck}
                            disabled={domainCheck.status === 'checking'}
                            className={`px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors whitespace-nowrap flex items-center gap-2 ${domainCheck.status === 'checking' ? 'opacity-70 cursor-not-allowed' : ''}`}
                          >
                            {domainCheck.status === 'checking' ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                            Check
                          </button>
                        ) : null}
                      </div>
                      {domainStatus.label ? (
                        <div className={`mt-2 text-sm ${domainStatus.tone === 'success' ? 'text-green-600' : domainStatus.tone === 'error' ? 'text-red-600' : 'text-gray-500'}`}>
                          {domainStatus.label}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Order'} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-gray-100 bg-slate-50/70 p-6">
              <div className="sticky top-6 space-y-4">
                <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Plan</span>
                    <span className="text-sm font-semibold text-gray-900">{plan.title}</span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm font-medium text-gray-600">
                      {billingCycle === 'yearly' ? 'Yearly' : 'Monthly'}
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      {billingCycle === 'yearly' ? (plan.yearlyPrice || formatZar(planCost)) : plan.price}
                    </span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                    {isVds && vdsBilling ? (
                      <>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            Pro-rata ({vdsBilling.remainingDays} of {vdsBilling.daysInMonth} days)
                          </span>
                          <span className="text-sm font-semibold text-gray-900">{formatZar(vdsBilling.prorataThisMonth)}</span>
                        </div>
                        {vdsBilling.includesNextMonth && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Next month (in advance)</span>
                            <span className="text-sm font-semibold text-gray-900">{formatZar(vdsBilling.nextMonthCharge)}</span>
                          </div>
                        )}
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Setup fee (once-off)</span>
                          <span className="text-sm font-semibold text-gray-900">{formatZar(vdsBilling.setupFee)}</span>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                          <span className="text-sm font-semibold text-gray-700">Due now</span>
                          <span className="text-xl font-black text-blue-600">{formatZar(vdsBilling.dueNow)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Monthly thereafter</span>
                          <span className="text-sm font-semibold text-gray-900">{formatZar(vdsBilling.monthlyThereafter)}</span>
                        </div>
                        <div className="mt-2 text-xs text-gray-500 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          {vdsBilling.includesNextMonth
                            ? 'Orders placed after the 21st are billed pro-rata for the remainder of this month plus the following month in advance.'
                            : 'Pro-rata is calculated based on days remaining this month.'}
                        </div>
                      </>
                    ) : (
                      <>
                        {isDedicated && addonTotal > 0 && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-600">Add-ons</span>
                            <span className="text-sm font-semibold text-gray-900">+{formatZar(addonTotal)}/mo</span>
                          </div>
                        )}
                        {!isVds && !isDedicated && (
                          domainAction !== 'existing' ? (
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-600">
                                {domainAction === 'transfer' ? 'Domain transfer' : 'Domain registration'}
                              </span>
                              <span className="text-sm font-semibold text-gray-900">
                                {domainCheck.status === 'done' && domainCheck.result?.pricing
                                  ? formatZar(domainCost)
                                  : 'Check domain'}
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-600">Domain</span>
                              <span className="text-sm font-semibold text-gray-900">R0.00</span>
                            </div>
                          )
                        )}
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-gray-700">Due now</span>
                          <span className="text-xl font-black text-blue-600">
                            {billingCycle === 'yearly' ? formatZar(yearlyAmount) : formatZar(dueNowTotal)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm font-medium text-gray-600">
                            {billingCycle === 'yearly' ? 'Yearly thereafter' : 'Monthly thereafter'}
                          </span>
                          <span className="text-sm font-semibold text-gray-900">
                            {billingCycle === 'yearly'
                              ? (yearlyAmount != null ? formatZar(yearlyAmount) : (plan.yearlyPrice || ''))
                              : (prorata ? formatZar(prorata.monthlyThereafter) : plan.price)}
                          </span>
                        </div>
                        {billingCycle === 'monthly' && (
                          <div className="mt-3 text-xs text-gray-500 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            Pro-rata is calculated based on days remaining this month.
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                  <div className="text-sm font-semibold text-gray-900 mb-2">What happens next?</div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                      We confirm your details and domain choice.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                      We send an invoice and activation details.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                      You go live with Website365.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PlanOrderModal;
