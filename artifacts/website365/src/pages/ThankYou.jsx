import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, Home, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const ThankYou = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white py-20 px-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
        >
          Submission Successful!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-slate-600 mb-10 leading-relaxed"
        >
          Thank you for your inquiry / order. <br />
          One of our friendly service champions will be in touch soon!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button to="/" variant="primary" className="rounded-full px-8 py-4 flex items-center gap-2">
            <Home className="w-5 h-5" /> Back to Home
          </Button>
          <Button to="/contact" variant="outline" className="rounded-full px-8 py-4 flex items-center gap-2">
            <MessageCircle className="w-5 h-5" /> Contact Support
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-slate-400 text-sm"
        >
          Need urgent assistance? Call us on <span className="font-semibold text-slate-600">086 199 5070</span>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYou;
