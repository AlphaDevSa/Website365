import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Mail, Check, AlertCircle, Loader2, ArrowRight, Shield, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { submitForm } from '../utils/formSubmit';

const formatZar = (amount) => `R${Number(amount).toFixed(2)}`;

const PLANS = [
  {
    id: 'email-starter',
    name: 'Starter – Business Email',
    monthly: 29,
    yearly: 348,
    accounts: 10,
    storage: '10 GB',
    features: ['10 email accounts', '10 GB disk space', 'Unlimited bandwidth', 'Free SSL certificate', 'IMAP(s)', 'POP3', 'Webmail'],
    color: 'blue',
  },
  {
    id: 'email-growth',
    name: 'Growth – Business Email',
    monthly: 59,
    yearly: 708,
    accounts: 50,
    storage: '50 GB',
    popular: true,
    features: ['50 email accounts', '50 GB disk space', 'Unlimited bandwidth', 'Free SSL certificate', 'IMAP(s)', 'POP3', 'Webmail'],
    color: 'teal',
  },
  {
    id: 'email-enterprise',
    name: 'Enterprise – Business Email',
    monthly: 129,
    yearly: 1548,
    accounts: 200,
    storage: '200 GB',
    features: ['200 email accounts', '200 GB disk space', 'Unlimited bandwidth', 'Free SSL certificate', 'IMAP(s)', 'POP3', 'Webmail'],
    color: 'purple',
  },
];

const colorMap = {
  blue:   { badge: 'bg-blue-100 text-blue-700',   ring: 'ring-blue-500', accent: 'bg-blue-600',   light: 'bg-blue-50',   icon: 'text-blue-600',  border: 'border-blue-200' },
  teal:   { badge: 'bg-teal-100 text-teal-700',   ring: 'ring-teal-500', accent: 'bg-teal-600',   light: 'bg-teal-50',   icon: 'text-teal-600',  border: 'border-teal-200' },
  purple: { badge: 'bg-purple-100 text-purple-700', ring: 'ring-purple-500', accent: 'bg-purple-600', light: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200' },
};

const EmailHostingOrderModal = ({ isOpen, onClose, planId }) => {
  const navigate = useNavigate();
  const plan = PLANS.find(p => p.id === planId) ?? PLANS[0];
  const c = colorMap[plan.color];

  const [billing, setBilling] = useState('monthly');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', domain: '' });

  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', company: '', email: '', phone: '', domain: '' });
      setBilling('monthly');
      setSubmitError('');
    }
  }, [isOpen, planId]);

  const price = billing === 'monthly' ? plan.monthly : plan.yearly;
  const billingLabel = billing === 'monthly' ? '/month' : '/year';
  const saving = billing === 'yearly' ? Math.round(plan.monthly * 12 - plan.yearly) : 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const payload = {
      form_type: 'Email Hosting Order',
      plan: plan.name,
      billing_cycle: billing,
      price: `${formatZar(price)}${billingLabel}`,
      ...formData,
    };

    const result = await submitForm(payload, navigate);
    if (result?.error) {
      setSubmitError(result.error);
      setIsSubmitting(false);
    }
  };

  const field = (key, label, type = 'text', placeholder = '', required = true) => (
    <div>
      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      <input
        type={type}
        value={formData[key]}
        onChange={e => setFormData(f => ({ ...f, [key]: e.target.value }))}
        placeholder={placeholder}
        required={required}
        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
      />
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-hidden flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`flex items-center justify-between px-6 py-4 border-b border-gray-100 ${c.light}`}>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl ${c.accent} flex items-center justify-center shadow`}>
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-bold text-gray-900 text-base leading-tight">{plan.name}</h2>
                  <p className="text-xs text-gray-500">{plan.accounts} accounts · {plan.storage}</p>
                </div>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1">
              <div className="grid grid-cols-1 md:grid-cols-5 min-h-0">

                {/* Left — Plan Summary */}
                <div className={`md:col-span-2 ${c.light} p-6 border-r border-gray-100`}>
                  {/* Billing toggle */}
                  <div className="mb-5">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Billing Cycle</p>
                    <div className="flex rounded-lg border border-gray-200 overflow-hidden bg-white">
                      {['monthly', 'yearly'].map(b => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBilling(b)}
                          className={`flex-1 py-2 text-xs font-semibold transition-colors capitalize ${billing === b ? `${c.accent} text-white` : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                    {saving > 0 && (
                      <p className="text-xs text-green-600 font-medium mt-1.5 text-center">
                        Save {formatZar(saving)}/year on annual billing
                      </p>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mb-5 bg-white rounded-xl border border-gray-100 p-4 shadow-sm text-center">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-extrabold text-gray-900">{formatZar(price)}</span>
                      <span className="text-sm text-gray-500">{billingLabel}</span>
                    </div>
                    {billing === 'yearly' && (
                      <p className="text-xs text-gray-400 mt-0.5">{formatZar(Math.round(plan.yearly / 12))}/month billed annually</p>
                    )}
                  </div>

                  {/* Features */}
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Included</p>
                    <ul className="space-y-2">
                      {plan.features.map(f => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                          <Check className={`w-4 h-4 shrink-0 ${c.icon}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-200 flex items-center gap-2 text-xs text-gray-500">
                    <Shield className="w-3.5 h-3.5 text-green-500 shrink-0" />
                    Secure — no payment info collected here
                  </div>
                </div>

                {/* Right — Order Form */}
                <form onSubmit={handleSubmit} className="md:col-span-3 p-6 space-y-4">
                  <h3 className="text-sm font-bold text-gray-800 mb-1">Your Details</h3>

                  <div className="grid grid-cols-2 gap-3">
                    {field('name', 'Full Name', 'text', 'Jane Smith')}
                    {field('company', 'Company', 'text', 'My Business (Pty) Ltd', false)}
                  </div>
                  {field('email', 'Email Address', 'email', 'jane@yourbusiness.co.za')}
                  {field('phone', 'Phone / WhatsApp', 'tel', '+27 83 123 4567')}

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                      Domain Name <span className="text-gray-400 font-normal normal-case">(optional — we can register one)</span>
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <input
                        type="text"
                        value={formData.domain}
                        onChange={e => setFormData(f => ({ ...f, domain: e.target.value }))}
                        placeholder="yourbusiness.co.za"
                        className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  {/* Order summary */}
                  <div className={`rounded-xl border ${c.border} ${c.light} p-3 text-sm`}>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">{plan.name}</span>
                      <span className="font-bold text-gray-900">{formatZar(price)}{billingLabel}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5 capitalize">{billing} billing · {plan.accounts} accounts · {plan.storage}</p>
                  </div>

                  {submitError && (
                    <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg px-3 py-2 text-sm">
                      <AlertCircle className="w-4 h-4 shrink-0" /> {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full ${c.accent} hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg`}
                  >
                    {isSubmitting
                      ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
                      : <>Get {plan.name} <ArrowRight className="w-4 h-4" /></>}
                  </button>

                  <p className="text-xs text-gray-400 text-center leading-relaxed">
                    Our team will contact you to complete setup and payment. No card details required now.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EmailHostingOrderModal;
