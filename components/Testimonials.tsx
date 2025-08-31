
import React, { useState, useEffect, useRef } from 'react';
import { testimonials } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Testimonial } from '../types';

// Star icon component
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Generate a random rating between 4.5 and 5 with 0.5 increments
const generateRandomRating = () => {
  const ratings = [4.5, 5];
  return ratings[Math.floor(Math.random() * ratings.length)];
};

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <StarIcon key={`full-${i}`} filled={true} />
      ))}
      {hasHalfStar && (
        <div className="relative w-4 h-4">
          <StarIcon filled={false} />
          <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
            <StarIcon filled={true} />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <StarIcon key={`empty-${i}`} filled={false} />
      ))}
      <span className="ml-1 text-xs font-medium text-gray-700">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

interface ExtendedTestimonial extends Testimonial {
  rating?: number;
}

const TestimonialCard: React.FC<ExtendedTestimonial> = ({ quote, author, color, pointer }) => {
    const pointerClasses = {
        left: 'after:left-12',
        center: 'after:left-1/2 after:-translate-x-1/2',
        right: 'after:right-12',
    };
    
    // Generate and store the rating when the component mounts
    const [rating] = useState(() => generateRandomRating());

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
                    
                    // Set initial character immediately
                    setDisplayedQuote(quote.slice(0, 1));
                    i++;
                    
                    // Start typing the rest
                    typingInterval = window.setInterval(() => {
                        if (i < quote.length) {
                            setDisplayedQuote(prev => quote.slice(0, i + 1));
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
        <div ref={cardRef} className="px-2">
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
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Enhanced Speech Bubble */}
                <div className={`
                    relative p-8 rounded-3xl max-w-md w-full mx-auto
                    bg-gradient-to-br from-white to-gray-50
                    border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]
                    transform transition-all duration-300 hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-y-1
                    ${color}
                `}>
                    {/* Decorative quote marks */}
                    <div className="absolute top-4 left-6 text-5xl font-serif text-gray-200 -z-0">"</div>
                    
                    <div className="relative z-10">
                        <p className="text-gray-800 text-base leading-relaxed font-medium italic">
                            {displayedQuote ? (
                                <>
                                    <span className="font-bold">{displayedQuote.split(' ')[0].charAt(0).toUpperCase() + displayedQuote.split(' ')[0].slice(1)}</span>
                                    {displayedQuote.includes(' ') && (
                                        <span> {displayedQuote.substring(displayedQuote.indexOf(' ') + 1)}</span>
                                    )}
                                </>
                            ) : null}
                            {isTyping && <span className="inline-block w-0.5 h-6 bg-slate-700 animate-blink align-text-bottom ml-1"></span>}
                        </p>
                        
                        {/* Star rating */}
                        <div className="mt-4 pt-3 border-t border-gray-200 flex justify-center">
                            <StarRating rating={rating} />
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
