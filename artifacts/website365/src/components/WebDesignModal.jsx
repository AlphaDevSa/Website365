import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Palette, AlertCircle } from 'lucide-react';
import { submitForm } from '../utils/formSubmit';

import { useNavigate } from 'react-router-dom';

const WebDesignModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    pageCount: '',
    budget: '',
    requirements: '',
    designRequirements: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    const submissionData = { 
      ...formData, 
      form_type: 'Web Design Quote Request'
    };
    
    const result = await submitForm(submissionData);
    
    setIsSubmitting(false);
    
    if (result.success) {
      onClose();
      navigate('/thank-you');
    } else {
      setSubmitError('Sorry, there was an error submitting your request. Please try again later.');
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
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-blue-50/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Palette className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Start Your Project</h2>
            </div>
            <button
              aria-label="Close"
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
                  placeholder="Doe"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
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
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
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
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="pageCount" className="text-sm font-medium text-gray-700">How many pages do you require?</label>
                <select
                  id="pageCount"
                  value={formData.pageCount}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                >
                  <option value="">Select pages</option>
                  <option value="1">1 Page (Landing Page)</option>
                  <option value="2-5">2 - 5 Pages</option>
                  <option value="6-10">6 - 10 Pages</option>
                  <option value="10-plus">10+ Pages</option>
                </select>
              </div>
              <div className="space-y-1">
                <label htmlFor="budget" className="text-sm font-medium text-gray-700">Friendly Budget?</label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                >
                  <option value="">Select range</option>
                  <option value="under-5k">Under R5,000</option>
                  <option value="5k-10k">R5,000 - R10,000</option>
                  <option value="10k-20k">R10,000 - R20,000</option>
                  <option value="20k-plus">R20,000+</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="requirements" className="text-sm font-medium text-gray-700">Requirements</label>
              <textarea
                id="requirements"
                rows="3"
                value={formData.requirements}
                onChange={handleChange}
                placeholder="Briefly describe your project requirements..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <div className="space-y-1">
              <label htmlFor="designRequirements" className="text-sm font-medium text-gray-700">Specific Design requirements</label>
              <textarea
                id="designRequirements"
                rows="3"
                value={formData.designRequirements}
                onChange={handleChange}
                placeholder="List any specific design styles, colors or websites you like..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
              ></textarea>
            </div>

            {submitError && (
              <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Get My Web Design Quote'}
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default WebDesignModal;
