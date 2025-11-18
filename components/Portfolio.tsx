
import React from 'react';
import { portfolioItems } from '../constants';
import type { PortfolioItem } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const cardTransforms = [
  'transform -rotate-3 lg:translate-y-3',
  'transform rotate-2 lg:-translate-y-2',
  'transform rotate-1 lg:translate-y-5',
  'transform -rotate-2 lg:-translate-y-3',
  'transform rotate-2 lg:translate-y-2',
  'transform -rotate-1 lg:translate-y-4',
];

const PortfolioCard: React.FC<{ item: PortfolioItem; transform: string }> = ({ item, transform }) => {
    return (
        <div className={`relative w-56 md:w-64 flex-shrink-0 transition-all duration-300 hover:scale-105 hover:z-20 hover:!rotate-0 hover:!translate-y-0 ${transform}`}>
            {/* The Clip */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 w-8 h-9 bg-black rounded-md flex items-start justify-center pt-2 shadow">
                <div className="w-2 h-2 rounded-full bg-white ring-1 ring-white/20"></div>
            </div>
            
            {/* The Card */}
            <div className="bg-white p-3 pt-6 rounded-2xl shadow-lg border border-gray-100/80 transition-shadow hover:shadow-xl relative z-10">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-xl" />
                <div className="pt-4 pb-2 px-1">
                    <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{item.description}</p>
                </div>
            </div>
        </div>
    );
};


const Portfolio: React.FC = () => {
    const sectionRef = useScrollAnimation();

    return (
        <section id="portfolio" ref={sectionRef} className="py-20 md:py-32 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-slate-900">
                        Our <span className="bg-gradient-to-r from-blue-700 to-emerald-500 bg-clip-text text-transparent">Featured</span> Work
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        A gallery of creative explorations and educational content we've designed.
                    </p>
                </div>
                
                <div className="relative pb-10">
                    {/* The horizontal string for large screens */}
                    <div className="hidden lg:block absolute top-10 left-0 w-full h-48 z-0 overflow-hidden">
                        <svg width="2000" height="100%" viewBox="0 0 2000 120" preserveAspectRatio="none">
                            <path d="M-10,70 C250,140 500,-20 750,80 C1000,40 1250,100 1500,60 C1750,20 1950,90 2010,70" stroke="#000000" strokeWidth="1.5" fill="none" strokeOpacity="0.2"/>
                        </svg>
                    </div>
                    
                    {/* The vertical string for smaller screens */}
                    <div className="block lg:hidden absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-black/20 z-0" />

                    {/* Mobile and tablet layout */}
                    <div className="relative z-10 flex flex-wrap justify-center items-start gap-x-6 gap-y-16 md:gap-x-12 lg:hidden">
                        {portfolioItems.map((item, index) => (
                            <PortfolioCard key={item.id} item={item} transform={cardTransforms[index % cardTransforms.length]}/>
                        ))}
                    </div>

                    {/* Laptop horizontal scroll layout */}
                    <div className="relative z-10 hidden lg:block">
                        <div className="overflow-x-auto overflow-y-visible scrollbar-hide">
                            <div className="flex items-start gap-x-12 py-16 px-16" style={{width: 'max-content', minHeight: '400px'}}>
                                {portfolioItems.map((item, index) => (
                                    <PortfolioCard key={item.id} item={item} transform={cardTransforms[index % cardTransforms.length]}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
