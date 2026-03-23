import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart } from 'lucide-react';
import { submitForm } from '../utils/formSubmit';

import { useNavigate } from 'react-router-dom';

const EcommerceModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    productCount: '',
    budget: '',
    payment: '',
    courier: '',
    requirements: '',
    designRequirements: ''
  });

  const handleChange = (e) => {
    const { id, name, value } = e.target;
    const fieldId = id || name;
    setFormData(prev => ({ ...prev, [fieldId]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const submissionData = { 
      ...formData, 
      form_type: 'eCommerce Quote Request'
    };
    
    const result = await submitForm(submissionData);
    
    setIsSubmitting(false);
    
    if (result.success) {
      onClose();
      navigate('/thank-you');
    } else {
      alert('Sorry, there was an error submitting your request. Please try again later.');
    }
  };

  if (!isOpen) return null;

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

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-green-50/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Launch Your Store</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form className="p-6 space-y-4 max-h-[80vh] overflow-y-auto" onSubmit={handleSubmit}>
            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
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
                  placeholder="Doe"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+27 12 345 6789"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                  required
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Store Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="productCount" className="text-sm font-medium text-gray-700">How many products do you have?</label>
                <select
                  id="productCount"
                  value={formData.productCount}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                >
                  <option value="">Select range</option>
                  <option value="1-10">1 - 10</option>
                  <option value="11-50">11 - 50</option>
                  <option value="51-200">51 - 200</option>
                  <option value="200-plus">200+</option>
                </select>
              </div>
              <div className="space-y-1">
                <label htmlFor="budget" className="text-sm font-medium text-gray-700">Friendly Budget?</label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                >
                  <option value="">Select range</option>
                  <option value="under-10k">Under R10,000</option>
                  <option value="10k-25k">R10,000 - R25,000</option>
                  <option value="25k-50k">R25,000 - R50,000</option>
                  <option value="50k-plus">R50,000+</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">Online Payment integration?</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="payment" value="yes" checked={formData.payment === 'yes'} onChange={handleChange} className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="payment" value="no" checked={formData.payment === 'no'} onChange={handleChange} className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">No</span>
                  </label>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">Online Courier Integration?</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="courier" value="yes" checked={formData.courier === 'yes'} onChange={handleChange} className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="courier" value="no" checked={formData.courier === 'no'} onChange={handleChange} className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">No</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="requirements" className="text-sm font-medium text-gray-700">Requirements</label>
              <textarea
                id="requirements"
                rows="2"
                value={formData.requirements}
                onChange={handleChange}
                placeholder="Briefly describe your general requirements..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <div className="space-y-1">
              <label htmlFor="designRequirements" className="text-sm font-medium text-gray-700">Specific Design requirements</label>
              <textarea
                id="designRequirements"
                rows="2"
                value={formData.designRequirements}
                onChange={handleChange}
                placeholder="Any specific design preferences or styles?"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-green-500/25 transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Get My eCommerce Quote'}
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EcommerceModal;
