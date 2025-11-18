
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    const sectionRef = useScrollAnimation();

    return (
        <section id="hero" ref={sectionRef} className="relative bg-gray-50 pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(to_bottom,white__0%,transparent_100%)]"></div>
            
            {/* Doodle Elements - First Set */}
            {[
                { top: '15%', left: '5%', size: 'w-16 h-16', color: 'text-blue-400', delay: 0, duration: 12, type: 'circle' },
                { top: '70%', left: '8%', size: 'w-20 h-20', color: 'text-emerald-300', delay: 1, duration: 15, type: 'square' },
                { top: '25%', left: '85%', size: 'w-14 h-14', color: 'text-slate-400', delay: 2, duration: 18, type: 'triangle' },
                { top: '75%', left: '82%', size: 'w-24 h-24', color: 'text-blue-300', delay: 0.5, duration: 20, type: 'dashed-circle' },
                { top: '50%', left: '15%', size: 'w-12 h-12', color: 'text-emerald-400', delay: 1.5, duration: 14, type: 'diamond' },
                { top: '60%', left: '75%', size: 'w-16 h-16', color: 'text-blue-500', delay: 0.8, duration: 16, type: 'hexagon' },
                { top: '20%', left: '25%', size: 'w-10 h-10', color: 'text-slate-500', delay: 0.3, duration: 13, type: 'star' },
                { top: '80%', left: '25%', size: 'w-28 h-28', color: 'text-emerald-200', delay: 1.2, duration: 22, type: 'oval' },
                { top: '30%', left: '65%', size: 'w-18 h-18', color: 'text-blue-200', delay: 0.7, duration: 17, type: 'rectangle' },
                { top: '65%', left: '50%', size: 'w-14 h-14', color: 'text-slate-300', delay: 0.4, duration: 19, type: 'plus' },
                { top: '40%', left: '10%', size: 'w-20 h-20', color: 'text-emerald-500', delay: 1.1, duration: 21, type: 'circle' },
                { top: '45%', left: '80%', size: 'w-16 h-16', color: 'text-blue-400', delay: 0.9, duration: 15, type: 'triangle' },
                { top: '85%', left: '15%', size: 'w-12 h-12', color: 'text-slate-400', delay: 0.6, duration: 14, type: 'square' },
                { top: '15%', left: '45%', size: 'w-22 h-22', color: 'text-emerald-300', delay: 1.3, duration: 18, type: 'dashed-circle' },
                { top: '55%', left: '30%', size: 'w-18 h-18', color: 'text-blue-300', delay: 0.5, duration: 16, type: 'diamond' },
                { top: '25%', left: '55%', size: 'w-14 h-14', color: 'text-slate-500', delay: 1, duration: 20, type: 'hexagon' },
                { top: '75%', left: '65%', size: 'w-16 h-16', color: 'text-emerald-400', delay: 0.8, duration: 15, type: 'star' },
                { top: '35%', left: '75%', size: 'w-20 h-20', color: 'text-blue-200', delay: 1.4, duration: 19, type: 'oval' },
                { top: '85%', left: '45%', size: 'w-12 h-12', color: 'text-slate-300', delay: 0.7, duration: 17, type: 'rectangle' },
                { top: '50%', left: '90%', size: 'w-16 h-16', color: 'text-emerald-200', delay: 1.2, duration: 21, type: 'plus' },
            ].map((doodle, index) => (
                <motion.div
                    key={index}
                    className={`absolute ${doodle.size} ${doodle.color} opacity-10 hover:opacity-30 transition-opacity duration-300`}
                    style={{
                        top: doodle.top,
                        left: doodle.left,
                        zIndex: 0,
                    }}
                    animate={{
                        y: [0, 15, 0],
                        rotate: [0, 180],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        y: {
                            duration: doodle.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: doodle.delay,
                        },
                        rotate: {
                            duration: doodle.duration * 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: doodle.delay,
                        },
                        scale: {
                            duration: doodle.duration / 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: doodle.delay,
                            repeatType: "reverse" as const,
                        },
                    }}
                >
                    {doodle.type === 'circle' && (
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="100" cy="100" r="80" fill="currentColor" />
                        </svg>
                    )}
                    {doodle.type === 'square' && (
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <rect x="20" y="20" width="160" height="160" fill="currentColor" rx="10" />
                        </svg>
                    )}
                    {doodle.type === 'triangle' && (
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="100,20 20,180 180,180" fill="currentColor" />
                        </svg>
                    )}
                    {doodle.type === 'dashed-circle' && (
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="10,10" />
                        </svg>
                    )}
                    {doodle.type === 'diamond' && (
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <rect x="50" y="50" width="100" height="100" fill="currentColor" transform="rotate(45 100 100)" />
                        </svg>
                    )}
                    {doodle.type === 'hexagon' && (
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="100,20 180,50 180,150 100,180 20,150 20,50" fill="currentColor" />
                        </svg>
                    )}
                    {doodle.type === 'star' && (
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100,20 L123.5,70 L180,80 L140,120 L150,180 L100,150 L50,180 L60,120 L20,80 L76.5,70 Z" fill="currentColor" />
                        </svg>
                    )}
                    {doodle.type === 'oval' && (
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="100" cy="100" rx="80" ry="50" fill="currentColor" />
                        </svg>
                    )}
                    {doodle.type === 'rectangle' && (
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <rect x="30" y="50" width="140" height="100" fill="currentColor" rx="10" />
                        </svg>
                    )}
                    {doodle.type === 'plus' && (
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <rect x="80" y="20" width="40" height="160" fill="currentColor" rx="5" />
                            <rect x="20" y="80" width="160" height="40" fill="currentColor" rx="5" />
                        </svg>
                    )}
                </motion.div>
            ))}

            {/* Doodle Elements - Second Set */}
            {[
                { top: '10%', left: '20%', size: 'w-14 h-14', color: 'text-blue-300', delay: 0.2, duration: 16, type: 'circle', rotate: true },
                { top: '85%', left: '5%', size: 'w-18 h-18', color: 'text-emerald-400', delay: 0.8, duration: 19, type: 'square', pulse: true },
                { top: '15%', left: '75%', size: 'w-16 h-16', color: 'text-slate-300', delay: 0.4, duration: 14, type: 'triangle', float: true },
                { top: '80%', left: '90%', size: 'w-20 h-20', color: 'text-blue-200', delay: 1.1, duration: 22, type: 'dashed-circle', rotate: true },
                { top: '45%', left: '5%', size: 'w-14 h-14', color: 'text-emerald-300', delay: 0.6, duration: 18, type: 'diamond', pulse: true },
                { top: '65%', left: '85%', size: 'w-16 h-16', color: 'text-blue-400', delay: 0.3, duration: 17, type: 'hexagon', float: true },
                { top: '25%', left: '15%', size: 'w-12 h-12', color: 'text-slate-400', delay: 0.9, duration: 15, type: 'star', rotate: true },
                { top: '90%', left: '20%', size: 'w-22 h-22', color: 'text-emerald-200', delay: 0.5, duration: 20, type: 'oval', pulse: true },
                { top: '35%', left: '85%', size: 'w-16 h-16', color: 'text-blue-300', delay: 1, duration: 16, type: 'rectangle', float: true },
                { top: '70%', left: '15%', size: 'w-14 h-14', color: 'text-slate-500', delay: 0.7, duration: 19, type: 'plus', rotate: true },
                { top: '20%', left: '60%', size: 'w-16 h-16', color: 'text-emerald-400', delay: 0.4, duration: 15, type: 'circle', pulse: true },
                { top: '80%', left: '65%', size: 'w-18 h-18', color: 'text-blue-200', delay: 1.1, duration: 18, type: 'square', float: true },
                { top: '30%', left: '35%', size: 'w-14 h-14', color: 'text-slate-300', delay: 0.8, duration: 17, type: 'triangle', rotate: true },
                { top: '90%', left: '55%', size: 'w-20 h-20', color: 'text-emerald-300', delay: 0.3, duration: 21, type: 'dashed-circle', pulse: true },
                { top: '40%', left: '85%', size: 'w-16 h-16', color: 'text-blue-400', delay: 0.9, duration: 16, type: 'diamond', float: true },
                { top: '60%', left: '25%', size: 'w-14 h-14', color: 'text-slate-400', delay: 0.6, duration: 19, type: 'hexagon', rotate: true },
                { top: '25%', left: '85%', size: 'w-16 h-16', color: 'text-emerald-200', delay: 0.4, duration: 15, type: 'star', pulse: true },
                { top: '75%', left: '35%', size: 'w-18 h-18', color: 'text-blue-300', delay: 1, duration: 20, type: 'oval', float: true },
                { top: '85%', left: '75%', size: 'w-14 h-14', color: 'text-slate-500', delay: 0.7, duration: 18, type: 'rectangle', rotate: true },
                { top: '15%', left: '25%', size: 'w-16 h-16', color: 'text-emerald-400', delay: 0.5, duration: 17, type: 'plus', pulse: true },
            ].map((doodle, index) => (
                <motion.div
                    key={`doodle-${index}`}
                    className={`absolute ${doodle.size} ${doodle.color} opacity-5 hover:opacity-20 transition-opacity duration-300`}
                    style={{
                        top: doodle.top,
                        left: doodle.left,
                        zIndex: 0,
                    }}
                    animate={{
                        y: doodle.float ? [0, 15, 0] : 0,
                        rotate: doodle.rotate ? [0, 180] : 0,
                        scale: doodle.pulse ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                        y: doodle.float ? {
                            duration: doodle.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: doodle.delay,
                        } : {},
                        rotate: doodle.rotate ? {
                            duration: doodle.duration * 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: doodle.delay,
                        } : {},
                        scale: doodle.pulse ? {
                            duration: doodle.duration / 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: doodle.delay,
                            repeatType: "reverse" as const,
                        } : {},
                    }}
                >
                    {doodle.type === 'circle' && (
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="100" cy="100" r="80" fill="currentColor" />
                        </svg>
                    )}
                    {doodle.type === 'square' && (
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <rect x="20" y="20" width="160" height="160" fill="currentColor" rx="10" />
                        </svg>
                    )}
                    {doodle.type === 'triangle' && (
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="100,20 20,180 180,180" fill="currentColor" />
                        </svg>
                    )}
                    {doodle.type === 'dashed-circle' && (
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="10,10" />
                        </svg>
                    )}
                    {doodle.type === 'diamond' && (
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <rect x="50" y="50" width="100" height="100" fill="currentColor" transform="rotate(45 100 100)" />
                        </svg>
                    )}
                    {doodle.type === 'hexagon' && (
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="100,20 180,50 180,150 100,180 20,150 20,50" fill="currentColor" />
                        </svg>
                    )}
                    {doodle.type === 'star' && (
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100,20 L123.5,70 L180,80 L140,120 L150,180 L100,150 L50,180 L60,120 L20,80 L76.5,70 Z" fill="currentColor" />
                        </svg>
                    )}
                    {doodle.type === 'oval' && (
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="100" cy="100" rx="80" ry="50" fill="currentColor" />
                        </svg>
                    )}
                    {doodle.type === 'rectangle' && (
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <rect x="30" y="50" width="140" height="100" fill="currentColor" rx="10" />
                        </svg>
                    )}
                    {doodle.type === 'plus' && (
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <rect x="80" y="20" width="40" height="160" fill="currentColor" rx="5" />
                            <rect x="20" y="80" width="160" height="40" fill="currentColor" rx="5" />
                        </svg>
                    )}
                </motion.div>
            ))}

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
                    <div className="relative mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.div 
                            className="absolute -left-10 -bottom-10 w-16 h-16 opacity-5 text-blue-400"
                            animate={{
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="4" />
                            </svg>
                        </motion.div>
                        <a href="#contact" className="inline-flex items-center justify-center bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg hover:bg-slate-700 transition-all duration-300 shadow-lg transform hover:scale-105 w-full sm:w-auto">
                            Start Your Project
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                        <a href="#portfolio" className="inline-block bg-white text-slate-700 font-semibold px-8 py-4 rounded-lg ring-1 ring-slate-200 hover:bg-slate-100 hover:ring-slate-300 transition-all duration-300 shadow-sm transform hover:scale-105 w-full sm:w-auto">
                            View Our Work
                        </a>
                        <motion.div 
                            className="absolute -right-8 -top-8 w-12 h-12 opacity-10 text-emerald-400"
                            animate={{
                                rotate: [0, -360],
                            }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <rect x="30" y="30" width="140" height="140" fill="none" stroke="currentColor" strokeWidth="6" rx="20" />
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
