
import React, { useState } from 'react';
import { faqItems } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FAQ: React.FC = () => {
    const sectionRef = useScrollAnimation();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" ref={sectionRef} className="py-20 md:py-32 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 text-sm font-semibold text-emerald-700 bg-emerald-100 rounded-full mb-4">
                        Need Help?
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-slate-900">
                        Common <span className="bg-gradient-to-r from-[#278DCD] to-[#3CA642] bg-clip-text text-transparent">Questions</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Find quick answers to the most frequently asked questions about our services and processes.
                    </p>
                </div>
                
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
                            >
                                <button
                                    className={`w-full px-6 py-5 text-left focus:outline-none flex justify-between items-center ${openIndex === index ? 'bg-gray-50' : ''}`}
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={openIndex === index}
                                    aria-controls={`faq-${index}`}
                                >
                                    <span className="text-lg font-semibold text-slate-800">{item.question}</span>
                                    <svg 
                                        className={`w-5 h-5 text-slate-500 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div 
                                    id={`faq-${index}`}
                                    className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'}`}
                                    aria-hidden={openIndex !== index}
                                >
                                    <div className="text-slate-600 space-y-3">
                                        {typeof item.answer === 'string' ? (
                                            <p>{item.answer}</p>
                                        ) : (
                                            item.answer
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#278DCD] to-[#3CA642] text-white font-medium rounded-full hover:opacity-90 transition-opacity">
                            <span>Still have questions?</span>
                            <a href="#contact" className="ml-2 font-semibold underline underline-offset-4 hover:no-underline">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
