import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-blue-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = ({ items, title = "Frequently Asked Questions" }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">{title}</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
        {items.map((item, index) => (
          <FAQItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
