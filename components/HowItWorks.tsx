
import React from 'react';
import { howItWorksSteps } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HowItWorks: React.FC = () => {
    const sectionRef = useScrollAnimation();

    return (
        <section id="how-it-works" ref={sectionRef} className="py-20 md:py-32 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-slate-900">
                        How It <span className="bg-gradient-to-r from-blue-700 to-emerald-500 bg-clip-text text-transparent">Works</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        A simple, streamlined process to bring your branding needs to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-6 xl:gap-8">
                    {howItWorksSteps.map((step) => (
                        <div key={step.step} className={`transition-transform duration-300 ease-in-out hover:!rotate-0 hover:scale-105 ${step.rotation}`}>
                            <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col h-full border border-gray-100">
                                <div className="bg-gray-100 rounded-2xl flex-grow flex items-center justify-center p-8 mb-6 min-h-[256px]">
                                    {step.image}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-400 tracking-widest mb-2">STEP {step.step}</p>
                                    <p className="text-slate-600 font-medium text-lg">{step.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
