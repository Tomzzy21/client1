
import React from 'react';
import { faqItems } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FAQ: React.FC = () => {
    const sectionRef = useScrollAnimation();

    return (
        <section id="faq" ref={sectionRef} className="py-20 md:py-32 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-slate-900">
                        Frequently Asked <span className="bg-gradient-to-r from-blue-700 to-emerald-500 bg-clip-text text-transparent">Questions</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Everything you need to know about our services and company.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                        {faqItems.map((item, index) => (
                            <div key={index}>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.question}</h3>
                                <div className="text-slate-600 space-y-2">{item.answer}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
