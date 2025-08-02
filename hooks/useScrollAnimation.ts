
import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
    const elementRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-scroll');
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
            }
        );

        observer.observe(element);
        
        // Add animation styles dynamically
        const style = document.createElement('style');
        style.innerHTML = `
            .animate-scroll {
                animation: fadeIn 0.8s ease-out forwards;
            }
            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
            section {
                opacity: 0;
            }
        `;
        document.head.appendChild(style);


        return () => {
            if (element) {
                observer.unobserve(element);
            }
            if (style.parentNode) {
                document.head.removeChild(style);
            }
        };
    }, []);

    return elementRef;
};
