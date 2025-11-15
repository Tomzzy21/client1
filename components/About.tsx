
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

const CheckIcon: React.FC = () => (
    <svg className="w-6 h-6 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

const StatItem: React.FC<{ finalValue: number; label: string; suffix: string }> = ({ finalValue, label, suffix }) => {
    const [count, setCount] = React.useState(0);
    const ref = React.useRef<HTMLDivElement>(null);
    const hasAnimated = React.useRef(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 0;
                    const end = finalValue;
                    if (start === end) return;

                    let startTime: number | null = null;
                    const step = (timestamp: number) => {
                        if (!startTime) startTime = timestamp;
                        const progress = Math.min((timestamp - startTime) / 2000, 1);
                        setCount(Math.floor(progress * (end - start) + start));
                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        }
                    };
                    window.requestAnimationFrame(step);
                }
            },
            {
                threshold: 0.3,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        
        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [finalValue]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter">{count}{suffix}</div>
            <div className="text-sm uppercase font-semibold text-blue-200/80 tracking-widest mt-1">{label}</div>
        </div>
    );
};

const About: React.FC = () => {
    const sectionRef = useScrollAnimation();

    const benefits = [
        "Expert brand strategists and designers",
        "Strategic approach to branding",
        "Proven track record of success",
        "Comprehensive service offering"
    ];

    return (
        <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-slate-900">
                            Why Choose <span className="bg-gradient-to-r from-blue-700 to-emerald-500 bg-clip-text text-transparent">Us?</span>
                        </h2>
                        <p className="mt-6 text-lg text-slate-600">
                            With over a decade of experience, we understand what makes brands memorable. Our passion is to fuse creativity with strategy, delivering results that don't just look good but perform exceptionally.
                        </p>
                        <ul className="mt-8 space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <CheckIcon />
                                    <span className="text-slate-700 font-medium text-lg">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="bg-slate-800 rounded-2xl p-8 lg:p-12 shadow-2xl transition hover:scale-105 hover:shadow-3xl duration-300">
                            <h3 className="text-2xl font-bold text-white text-center mb-8">Our Impact</h3>
                            <div className="grid grid-cols-2 gap-8">
                                <StatItem finalValue={500} label="Brands Created" suffix="+" />
                                <StatItem finalValue={98} label="Client Satisfaction" suffix="%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
