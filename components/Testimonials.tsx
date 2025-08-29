
import React, { useState, useEffect, useRef } from 'react';
import { testimonials } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Testimonial } from '../types';

const TestimonialCard: React.FC<Testimonial> = ({ quote, author, color, pointer }) => {
    const pointerClasses = {
        left: 'after:left-12',
        center: 'after:left-1/2 after:-translate-x-1/2',
        right: 'after:right-12',
    };

    const [displayedQuote, setDisplayedQuote] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cardRef.current) return;
        let typingInterval: number;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsTyping(true);
                    setDisplayedQuote(''); // Reset before typing
                    let i = 0;
                    
                    typingInterval = window.setInterval(() => {
                        if (i < quote.length) {
                            setDisplayedQuote(prev => prev + quote.charAt(i));
                            i++;
                        } else {
                            clearInterval(typingInterval);
                            setIsTyping(false);
                        }
                    }, 50); // Slower typing animation
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );

        const currentRef = cardRef.current;
        observer.observe(currentRef);

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
            clearInterval(typingInterval);
        };
    }, [quote]);


    return (
        <div ref={cardRef}>
             <style>
                {`
                @keyframes blink {
                    50% { opacity: 0; }
                }
                .animate-blink {
                    animation: blink 1s step-end infinite;
                }
                `}
            </style>
            <div className="space-y-2">
                <div className="relative w-full">
                    {/* Speech Bubble */}
                    <div className={`
                        relative p-6 rounded-2xl max-w-xs mx-auto
                        bg-white border-2 border-black
                        before:absolute before:content-[''] before:w-4 before:h-4 before:bg-white before:border-b-2 before:border-r-2 before:border-black
                        before:bottom-0 before:left-1/2 before:-mb-2 before:-translate-x-1/2
                        before:rotate-45
                        ${color}
                    `}>
                        <p className="text-black text-center text-sm leading-relaxed font-medium">
                            "{displayedQuote}"
                            {isTyping && <span className="inline-block w-0.5 h-5 bg-slate-700 animate-blink align-text-bottom ml-1"></span>}
                        </p>
                    </div>
                    
                    {/* Name Container */}
                    <div className="mt-6 flex flex-col items-center">
                        <div className="px-5 py-1.5 rounded-full bg-white border-2 border-black">
                            <div className="flex flex-col items-center">
                                <h4 className="font-bold text-black text-sm">{author.name}</h4>
                                <p className="text-gray-600 text-[10px] uppercase tracking-wider mt-0.5">{author.title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Testimonials: React.FC = () => {
    const sectionRef = useScrollAnimation();

    return (
        <section id="testimonials" ref={sectionRef} className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Loved by <span className="bg-gradient-to-r from-blue-700 to-emerald-500 bg-clip-text text-transparent">clients</span>
                        <br />
                        and teams
                    </h2>
                </div>

                {/* Responsive layout: stacked on mobile, absolute on desktop */}
                <div className="relative xl:h-[650px]">
                    {/* Mobile & Tablet Layout */}
                    <div className="xl:hidden w-full">
                        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="flex-shrink-0 w-72 px-2 snap-center">
                                    <TestimonialCard {...testimonial} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden xl:block">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className={testimonial.className}>
                               <TestimonialCard {...testimonial} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
