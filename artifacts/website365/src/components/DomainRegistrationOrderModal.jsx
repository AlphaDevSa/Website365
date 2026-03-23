import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Globe, Receipt, X, ChevronDown, ChevronUp, Server, LayoutGrid, Mail, Shield, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { submitForm } from '../utils/formSubmit';

const formatZar = (amount) => {
  if (amount == null || Number.isNaN(Number(amount))) return '';
  return `R${Number(amount).toFixed(2)}`;
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
    dueNow: Math.max(0, prorata),
    monthlyThereafter: monthlyAmount
  };
};

const hostingCategories = [
  {
    id: 'cpanel',
    label: 'cPanel Hosting',
    icon: LayoutGrid,
    plans: [
      { id: 'cpanel-starter', label: 'cPanel Starter', monthly: 49, yearly: 559 },
      { id: 'cpanel-growth', label: 'cPanel Growth', monthly: 79, yearly: 869 },
      { id: 'cpanel-enterprise', label: 'cPanel Enterprise', monthly: 999, yearly: 10400 }
    ]
  },
  {
    id: 'wordpress',
    label: 'WordPress Hosting',
    icon: Globe,
    plans: [
      { id: 'wordpress-starter', label: 'WordPress Starter', monthly: 49, yearly: 559 },
      { id: 'wordpress-growth', label: 'WordPress Growth', monthly: 79, yearly: 869 },
      { id: 'wordpress-power', label: 'WordPress Power', monthly: 999, yearly: 10400 }
    ]
  },
  {
    id: 'directadmin',
    label: 'DirectAdmin Hosting',
    icon: Server,
    plans: [
      { id: 'da-500mb', label: '500MB DirectAdmin', monthly: 39, yearly: 468 },
      { id: 'da-1gb', label: '1GB DirectAdmin', monthly: 45, yearly: 540 },
      { id: 'da-2gb', label: '2GB DirectAdmin', monthly: 55, yearly: 660 },
      { id: 'da-10gb', label: '10GB DirectAdmin', monthly: 80, yearly: 960 }
    ]
  },
  {
    id: 'email',
    label: 'Email Hosting',
    icon: Mail,
    plans: [
      { id: 'email-starter', label: 'Email Starter', monthly: 29, yearly: 348 },
      { id: 'email-growth', label: 'Email Growth', monthly: 59, yearly: 708 },
      { id: 'email-enterprise', label: 'Email Enterprise', monthly: 129, yearly: 1548 }
    ]
  },
  {
    id: 'reseller',
    label: 'cPanel Reseller Hosting',
    icon: Shield,
    plans: [
      { id: 'reseller-1', label: 'Reseller 1', monthly: 125, yearly: 1425 },
      { id: 'reseller-2', label: 'Reseller 2', monthly: 175, yearly: 1925 },
      { id: 'reseller-3', label: 'Reseller 3', monthly: 225, yearly: 2360 }
    ]
  },
  {
    id: 'master-reseller',
    label: 'Master Reseller Hosting',
    icon: Crown,
    plans: [
      { id: 'master-1', label: 'Master Reseller 1', monthly: 325, yearly: 3705 },
      { id: 'master-2', label: 'Master Reseller 2', monthly: 425, yearly: 4675 },
      { id: 'master-3', label: 'Master Reseller 3', monthly: 999, yearly: 10400 }
    ]
  }
];

const DomainRegistrationOrderModal = ({
  isOpen,
  onClose,
  domain,
  domainPricing,
  lookup
}) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [addHosting, setAddHosting] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState('cpanel');
  const [hostingPlanId, setHostingPlanId] = useState('cpanel-starter');
  const [hostingBillingCycle, setHostingBillingCycle] = useState('monthly');
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    company: '',
    email: '',
    tel: '',
    whatsapp: ''
  });

  useEffect(() => {
    if (!isOpen) return;
    setIsSubmitting(false);
    setAddHosting(false);
    setExpandedCategory('cpanel');
    setHostingPlanId('cpanel-starter');
    setHostingBillingCycle('monthly');
    setFormData({
      name: '',
      surname: '',
      company: '',
      email: '',
      tel: '',
      whatsapp: ''
    });
  }, [isOpen, domain]);

  const hostingPlan = useMemo(() => {
    for (const cat of hostingCategories) {
      const p = cat.plans.find((plan) => plan.id === hostingPlanId);
      if (p) return { ...p, categoryLabel: cat.label };
    }
    return null;
  }, [hostingPlanId]);

  const domainDueNow = useMemo(() => {
    const amount = Number(domainPricing?.amount);
    return Number.isFinite(amount) ? amount : 0;
  }, [domainPricing?.amount]);

  const hostingProrata = useMemo(() => {
    if (!addHosting || !hostingPlan) return null;
    return computeProRata(hostingPlan.monthly);
  }, [addHosting, hostingPlan]);

  const hostingDueNow = useMemo(() => {
    if (!addHosting || !hostingPlan) return 0;
    if (hostingBillingCycle === 'yearly') return hostingPlan.yearly;
    return hostingProrata?.dueNow ?? hostingPlan.monthly;
  }, [addHosting, hostingBillingCycle, hostingPlan, hostingProrata]);

  const dueNowTotal = useMemo(() => domainDueNow + hostingDueNow, [domainDueNow, hostingDueNow]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!domain) return;

    setIsSubmitting(true);

    const payload = {
      ...formData,
      form_type: 'Domain Registration Order',
      domain,
      domain_register_years: 1,
      domain_price: domainPricing?.amount != null ? String(domainPricing.amount) : '',
      domain_price_currency: domainPricing?.currencyCode || '',
      add_hosting: String(addHosting),
      hosting_plan: addHosting ? (hostingPlan?.label || '') : '',
      hosting_category: addHosting ? (hostingPlan?.categoryLabel || '') : '',
      hosting_billing_cycle: addHosting ? hostingBillingCycle : '',
      hosting_price_monthly: addHosting && hostingPlan ? String(hostingPlan.monthly) : '',
      hosting_price_yearly: addHosting && hostingPlan ? String(hostingPlan.yearly) : '',
      hosting_due_now: addHosting ? formatZar(hostingDueNow) : '',
      hosting_monthly_thereafter: addHosting && hostingBillingCycle === 'monthly' && hostingPlan ? formatZar(hostingPlan.monthly) : '',
      hosting_yearly_thereafter: addHosting && hostingBillingCycle === 'yearly' && hostingPlan ? formatZar(hostingPlan.yearly) : '',
      order_due_now_total: formatZar(dueNowTotal),
      lookup_source: lookup?.source || '',
      lookup_detail: lookup?.detail || ''
    };

    const result = await submitForm(payload);
    setIsSubmitting(false);
    
    if (result.success) {
      onClose();
      navigate('/thank-you');
    } else {
      alert('Sorry, there was an error submitting your order. Please try again later.');
    }
  };

  if (!isOpen) return null;

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
          className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Receipt className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Complete Your Registration</h2>
                <p className="text-sm text-gray-500">{domain}</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form className="grid grid-cols-1 lg:grid-cols-3 gap-0 overflow-hidden" onSubmit={handleSubmit}>
            <div className="lg:col-span-2 p-6 space-y-6 overflow-y-auto">
              {/* Customer Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Customer Details</h3>
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
                    <label htmlFor="company" className="text-sm font-medium text-gray-700">Company (Optional)</label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
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
                    <label htmlFor="whatsapp" className="text-sm font-medium text-gray-700">WhatsApp Number (Optional)</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Hosting Preference */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <div>
                    <h3 className="text-lg font-bold text-blue-900">Add Web Hosting?</h3>
                    <p className="text-sm text-blue-700">Get 1 year free domain registration on selected annual plans.</p>
                  </div>
                  <div className="flex bg-white p-1 rounded-lg border border-blue-200">
                    <button
                      type="button"
                      onClick={() => setAddHosting(true)}
                      className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${addHosting ? 'bg-blue-600 text-white shadow-md' : 'text-blue-600 hover:bg-blue-50'}`}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setAddHosting(false)}
                      className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${!addHosting ? 'bg-slate-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'}`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {addHosting && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-4 overflow-hidden"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Select a Hosting Category</label>
                      <div className="space-y-2">
                        {hostingCategories.map((category) => (
                          <div key={category.id} className="border border-gray-200 rounded-xl overflow-hidden">
                            <button
                              type="button"
                              onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                              className={`w-full flex items-center justify-between p-4 transition-colors ${expandedCategory === category.id ? 'bg-blue-50' : 'bg-white hover:bg-slate-50'}`}
                            >
                              <div className="flex items-center gap-3">
                                <category.icon className={`w-5 h-5 ${expandedCategory === category.id ? 'text-blue-600' : 'text-gray-400'}`} />
                                <span className={`font-bold ${expandedCategory === category.id ? 'text-blue-900' : 'text-gray-700'}`}>{category.label}</span>
                              </div>
                              {expandedCategory === category.id ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                            </button>
                            
                            <AnimatePresence>
                              {expandedCategory === category.id && (
                                <motion.div
                                  initial={{ height: 0 }}
                                  animate={{ height: 'auto' }}
                                  exit={{ height: 0 }}
                                  className="overflow-hidden bg-white"
                                >
                                  <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {category.plans.map((plan) => (
                                      <label
                                        key={plan.id}
                                        className={`relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all ${hostingPlanId === plan.id ? 'border-blue-600 bg-blue-50' : 'border-gray-100 hover:border-blue-200'}`}
                                      >
                                        <input
                                          type="radio"
                                          name="hostingPlan"
                                          className="sr-only"
                                          checked={hostingPlanId === plan.id}
                                          onChange={() => setHostingPlanId(plan.id)}
                                        />
                                        <div className="flex justify-between items-start mb-1">
                                          <span className={`font-bold ${hostingPlanId === plan.id ? 'text-blue-900' : 'text-gray-900'}`}>{plan.label}</span>
                                          {hostingPlanId === plan.id && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                          {formatZar(plan.monthly)}/mo
                                        </div>
                                        <div className="text-xs text-gray-400">
                                          or {formatZar(plan.yearly)}/yr
                                        </div>
                                      </label>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="hostingBillingCycle" className="text-sm font-medium text-gray-700">Billing Cycle</label>
                      <select
                        id="hostingBillingCycle"
                        value={hostingBillingCycle}
                        onChange={(e) => setHostingBillingCycle(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white font-medium"
                      >
                        <option value="monthly">Monthly Billing</option>
                        <option value="yearly">Yearly Billing (Save up to 15%)</option>
                      </select>
                    </div>
                  </motion.div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Processing Your Order...' : 'Complete My Registration'} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Sidebar / Order Summary */}
            <div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-gray-100 bg-slate-50/70 p-6 overflow-y-auto">
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                  <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Order Summary</h3>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-800">Domain Registration</span>
                        <span className="text-xs text-gray-500">{domain} (1 Year)</span>
                      </div>
                      <span className="text-sm font-bold text-gray-900">{formatZar(domainDueNow) || '—'}</span>
                    </div>

                    {addHosting && hostingPlan && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="pt-3 border-t border-gray-100 space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-gray-800">{hostingPlan.label}</span>
                            <span className="text-xs text-gray-500">{hostingPlan.categoryLabel}</span>
                          </div>
                          <span className="text-sm font-bold text-gray-900">{formatZar(hostingDueNow)}</span>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500 italic">
                          <span>Billing Cycle:</span>
                          <span className="capitalize">{hostingBillingCycle}</span>
                        </div>

                        {hostingBillingCycle === 'monthly' && (
                          <div className="bg-green-50 text-[10px] text-green-700 p-2 rounded-lg flex items-start gap-2">
                            <CheckCircle2 className="w-3 h-3 flex-shrink-0 mt-0.5" />
                            Pro-rata calculated based on remaining days this month.
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t-2 border-dashed border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-base font-bold text-gray-900">Total Due Now</span>
                      <span className="text-2xl font-black text-blue-600">{formatZar(dueNowTotal)}</span>
                    </div>
                    <p className="text-[10px] text-gray-400 text-center">
                      * All prices include VAT where applicable.
                    </p>
                  </div>
                </div>

                {lookup?.source && (
                  <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                    <div className="text-[10px] font-bold text-gray-400 uppercase mb-1">Lookup Metadata</div>
                    <div className="text-[10px] text-gray-500 truncate">
                      Source: {lookup.source} | Status: {lookup.status}
                    </div>
                  </div>
                )}
                
                <div className="px-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-xs font-bold text-gray-700">100% Secure Checkout</span>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-relaxed">
                    By completing this order, you agree to our Terms of Service and Privacy Policy. Your domain will be registered instantly upon payment confirmation.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DomainRegistrationOrderModal;

