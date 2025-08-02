
import { useState, useEffect, useRef } from 'react';

export const useAnimatedCounter = (endValue: number, duration: number) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 0;
                    const end = endValue;
                    if (start === end) return;

                    let startTime: number | null = null;
                    const step = (timestamp: number) => {
                        if (!startTime) startTime = timestamp;
                        const progress = Math.min((timestamp - startTime) / duration, 1);
                        setCount(Math.floor(progress * (end - start) + start));
                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        }
                    };
                    window.requestAnimationFrame(step);
                }
            },
            {
                threshold: 0.5,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        // Dummy div to attach the observer to, so we can re-use the hook
        const dummyDiv = document.createElement('div');
        if (!currentRef) {
            document.body.appendChild(dummyDiv);
            observer.observe(dummyDiv);
        }
        
        return () => {
            if (currentRef) observer.unobserve(currentRef);
            if (dummyDiv.parentElement) document.body.removeChild(dummyDiv);
        };
    }, [endValue, duration]);

    // This hook is used inside a component that is observed, so we don't need the ref here.
    // The logic triggers when the parent component becomes visible.
    // The return is the animated count.
    return count;
};
