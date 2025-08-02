
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
    const sectionRef = useScrollAnimation();

    return (
        <section id="hero" ref={sectionRef} className="relative bg-gray-50 pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(to_bottom,white__0%,transparent_100%)]"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-slate-900">
                        Brand Excellence,
                        <br />
                        <span className="bg-gradient-to-r from-blue-700 to-emerald-500 bg-clip-text text-transparent">Redefined.</span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-600">
                        We craft extraordinary brand experiences that captivate audiences and drive business success through innovative design and strategic thinking.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#contact" className="inline-flex items-center justify-center bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg hover:bg-slate-700 transition-all duration-300 shadow-lg transform hover:scale-105 w-full sm:w-auto">
                            Start Your Project
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                        <a href="#portfolio" className="inline-block bg-white text-slate-700 font-semibold px-8 py-4 rounded-lg ring-1 ring-slate-200 hover:bg-slate-100 hover:ring-slate-300 transition-all duration-300 shadow-sm transform hover:scale-105 w-full sm:w-auto">
                            View Our Work
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
