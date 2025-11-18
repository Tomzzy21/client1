import React from 'react';
import { aboutUsItems } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutUs: React.FC = () => {
    const sectionRef = useScrollAnimation();

    return (
        <section id="about-us" ref={sectionRef} className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-4">
                        Our Story
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-slate-900">
                        Crafting Brand <span className="bg-gradient-to-r from-[#2A59A7] to-[#3CA642] bg-clip-text text-transparent">Experiences</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        We transform ordinary items into powerful brand ambassadors that tell your unique story.
                    </p>
                </div>
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
                                <p className="text-slate-600">
                                    To deliver innovative branding solutions that create lasting impressions and drive meaningful connections between businesses and their audiences.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-600 to-emerald-500 p-8 rounded-2xl text-white">
                                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                                <p className="text-blue-50">
                                    To be the most trusted partner for businesses seeking to elevate their brand presence through creative and impactful promotional solutions.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            {aboutUsItems.map((item, index) => (
                                <div key={index} className="group">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                                <span className="text-lg font-bold">{index + 1}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                                                {item.question}
                                            </h3>
                                            <p className="text-slate-600">{item.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
