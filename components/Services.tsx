import React from 'react';
import { services } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SectionHeader: React.FC<{ title: React.ReactNode; subtitle: string }> = ({ title, subtitle }) => (
    <div className="text-center mb-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-slate-900">{title}</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">{subtitle}</p>
    </div>
);

const Services: React.FC = () => {
    const sectionRef = useScrollAnimation();

    return (
        <section id="services" ref={sectionRef} className="py-20 md:py-32 bg-white" style={{paddingTop: '6rem'}}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader 
                    title={<>
                        Solutions to{' '}
                        <span className="relative inline-block align-middle w-20 h-16 mx-2" style={{overflow: 'visible', marginTop: '1rem'}}>
                            <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-700 to-emerald-500 bg-clip-text text-transparent italic -rotate-3 whitespace-nowrap px-2" style={{minWidth: 'max-content', display: 'block'}}>
                                Elevate
                            </span>
                            <svg className="w-full h-full text-emerald-400 opacity-70" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l7-7 7 7" />
                            </svg>
                        </span>{' '}
                        Your Brand
                    </>}
                    subtitle="Comprehensive branding solutions that transform your business vision into a powerful market presence."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:bg-white hover:-translate-y-2 border border-gray-100 group">
                            <div className="mb-6 bg-gradient-to-br from-blue-100 to-emerald-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-700 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;