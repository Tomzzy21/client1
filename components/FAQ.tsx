import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'How long does the branding process take?',
    answer: 'Our branding process typically takes 4-6 weeks from initial consultation to final delivery. The exact timeline depends on the complexity of your project and the number of revisions needed.'
  },
  {
    question: 'What makes your branding services unique?',
    answer: 'We combine strategic thinking with creative excellence to create brands that not only look great but also resonate with your target audience. Our data-driven approach ensures your brand stands out in the market.'
  },
  {
    question: 'Do you offer ongoing support after the project?',
    answer: 'Yes, we provide various support packages to help maintain and evolve your brand. From brand guidelines to marketing collateral, we\'re here to support your brand\'s growth.'
  },
  {
    question: 'Can you help with trademarking our brand?',
    answer: 'While we don\'t provide legal services, we can recommend trusted intellectual property attorneys and guide you through the process of trademarking your new brand identity.'
  },
  {
    question: 'What information do you need to start our project?',
    answer: 'We\'ll start with a discovery session to understand your business, target audience, and goals. Having your business plan, existing branding materials (if any), and competitor information will be helpful.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useScrollAnimation();

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={sectionRef} className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-slate-900 mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-blue-700 to-emerald-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-slate-600">
            Find answers to common questions about our branding process, services, and what you can expect when working with us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100"
              initial={false}
              animate={{ opacity: 1 }}
            >
              <motion.button
                className={`w-full px-6 py-5 text-left flex justify-between items-center ${openIndex === index ? 'bg-slate-50' : 'hover:bg-slate-50'}`}
                onClick={() => toggleItem(index)}
              >
                <span className="text-lg font-semibold text-slate-800">{item.question}</span>
                <motion.span
                  className="text-blue-600 ml-4 flex-shrink-0"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-slate-600">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-6">Still have questions? We're here to help!</p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 transition-colors duration-200 md:py-4 md:text-lg md:px-10"
          >
            Contact Us
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
