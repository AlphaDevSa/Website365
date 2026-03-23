import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Wrench, Globe, CheckCircle2, ArrowRight, AlertCircle, FileText } from 'lucide-react';
import { submitForm } from '../utils/formSubmit';
import { useNavigate } from 'react-router-dom';

const MaintenanceOrderModal = ({ isOpen, onClose, plan }) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    tel: '',
    company: '',
    website_url: '',
    platform: '',
    website_details: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const result = await submitForm({
      ...formData,
      plan_name: plan?.title,
      plan_price: plan?.price,
      form_type: 'Maintenance Order',
    });

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
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Website Care Order</h2>
                <p className="text-sm text-gray-500">{plan.title} — {plan.price}/month</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form */}
          <form className="p-6 space-y-4 max-h-[80vh] overflow-y-auto" onSubmit={handleSubmit}>

            {/* Personal details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-semibold text-gray-700">Name <span className="text-red-400">*</span></label>
                <input
                  type="text" id="name" required
                  value={formData.name} onChange={handleChange}
                  placeholder="John"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="surname" className="text-sm font-semibold text-gray-700">Surname <span className="text-red-400">*</span></label>
                <input
                  type="text" id="surname" required
                  value={formData.surname} onChange={handleChange}
                  placeholder="Doe"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address <span className="text-red-400">*</span></label>
                <input
                  type="email" id="email" required
                  value={formData.email} onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="tel" className="text-sm font-semibold text-gray-700">Phone Number <span className="text-red-400">*</span></label>
                <input
                  type="tel" id="tel" required
                  value={formData.tel} onChange={handleChange}
                  placeholder="+27 12 345 6789"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="company" className="text-sm font-semibold text-gray-700">Company Name <span className="text-gray-400 font-normal">(optional)</span></label>
              <input
                type="text" id="company"
                value={formData.company} onChange={handleChange}
                placeholder="Your Business Name"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
              />
            </div>

            {/* Website details */}
            <div className="pt-2 border-t border-gray-100">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Your Website</p>

              <div className="space-y-1 mb-4">
                <label htmlFor="website_url" className="text-sm font-semibold text-gray-700">
                  Current Website Address <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="url" id="website_url" required
                    value={formData.website_url} onChange={handleChange}
                    placeholder="https://www.yourwebsite.co.za"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                  />
                </div>
                <p className="text-xs text-gray-400 pl-1">Enter the full URL of the website you need maintained.</p>
              </div>

              <div className="space-y-1 mb-4">
                <label htmlFor="platform" className="text-sm font-semibold text-gray-700">Website Platform</label>
                <select
                  id="platform"
                  value={formData.platform} onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm bg-white"
                >
                  <option value="">Select a platform (if known)</option>
                  <option value="WordPress">WordPress</option>
                  <option value="WooCommerce">WooCommerce (WordPress + eCommerce)</option>
                  <option value="Joomla">Joomla</option>
                  <option value="Drupal">Drupal</option>
                  <option value="Shopify">Shopify</option>
                  <option value="Custom HTML/CSS">Custom HTML / CSS</option>
                  <option value="Other CMS">Other CMS</option>
                  <option value="Not sure">Not sure</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="website_details" className="text-sm font-semibold text-gray-700">
                  Website Details <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <textarea
                    id="website_details" rows={4}
                    value={formData.website_details} onChange={handleChange}
                    placeholder="Tell us about your website — e.g. number of pages, any known issues, specific things you would like us to focus on, login credentials we should request separately, etc."
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Order summary */}
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-emerald-900">Selected Plan</span>
                <span className="text-sm font-bold text-emerald-700">{plan.title}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-emerald-200">
                <span className="text-sm font-semibold text-emerald-900">Monthly Cost</span>
                <span className="text-2xl font-black text-emerald-700">{plan.price}<span className="text-sm font-normal text-emerald-600">/mo</span></span>
              </div>
              <p className="text-[10px] text-emerald-600 mt-2 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 shrink-0" />
                Our team will contact you within one business day to get started.
              </p>
            </div>

            {submitError && (
              <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Order'} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default MaintenanceOrderModal;
