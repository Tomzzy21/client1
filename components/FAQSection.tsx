import React, { useState } from 'react';
import { faqItems } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const sectionRef = useScrollAnimation();

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Split FAQs into two columns for desktop
    const leftColumn = faqItems.slice(0, Math.ceil(faqItems.length / 2));
    const rightColumn = faqItems.slice(Math.ceil(faqItems.length / 2));

    return (
        <section id="faq" ref={sectionRef} className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="text-center mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
                        Need Help?
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
                        Frequently <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Asked Questions</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-slate-600">
                        Everything you need to know about our services and how we can help your business grow.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-6">
                            {leftColumn.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div 
                                        className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-100 cursor-pointer ${openIndex === index ? 'ring-2 ring-blue-500' : ''}`}
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <div className="p-6 md:p-8">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-lg md:text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                                                    {item.question}
                                                </h3>
                                                <motion.div
                                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="text-blue-500"
                                                >
                                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </motion.div>
                                            </div>
                                            <AnimatePresence>
                                                {openIndex === index && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pt-4 mt-4 border-t border-gray-100 text-slate-600">
                                                            {typeof item.answer === 'string' ? (
                                                                <p className="leading-relaxed">{item.answer}</p>
                                                            ) : (
                                                                item.answer
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            {rightColumn.map((item, index) => {
                                const actualIndex = index + leftColumn.length;
                                return (
                                    <motion.div
                                        key={actualIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="group"
                                    >
                                        <div 
                                            className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-emerald-100 cursor-pointer ${openIndex === actualIndex ? 'ring-2 ring-emerald-500' : ''}`}
                                            onClick={() => toggleFAQ(actualIndex)}
                                        >
                                            <div className="p-6 md:p-8">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-lg md:text-xl font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                                                        {item.question}
                                                    </h3>
                                                    <motion.div
                                                        animate={{ rotate: openIndex === actualIndex ? 180 : 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="text-emerald-500"
                                                    >
                                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </motion.div>
                                                </div>
                                                <AnimatePresence>
                                                    {openIndex === actualIndex && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pt-4 mt-4 border-t border-gray-100 text-slate-600">
                                                                {typeof item.answer === 'string' ? (
                                                                    <p className="leading-relaxed">{item.answer}</p>
                                                                ) : (
                                                                    item.answer
                                                                )}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* CTA at the bottom */}
                    <motion.div 
                        className="mt-16 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="text-lg text-slate-600 mb-6">Still have questions? We're here to help!</p>
                        <a 
                            href="#contact" 
                            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-semibold rounded-full hover:opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Contact Us
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
