
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Simple checkmark component
const CheckIcon = () => (
    <span className="inline-block text-green-500 mr-2">✓</span>
);

const AboutUs: React.FC = () => {
    const sectionRef = useScrollAnimation();

    const aboutSections = [
        {
            title: "Who are we?",
            content: "Macchie & Strisce Limited is a Nigerian company that specializes in creative and innovative branding solutions. Established in 2015, we have been at the forefront of the corporate branding industry, helping businesses of all sizes enhance their brand identity through high-quality products and exceptional customer experience."
        },
        {
            title: "What do we do?",
            content: "We specialize in the customization of corporate gifts, promotional items, and awards. Our services include print production, branding, and promotional merchandise that help businesses boost their brand promotion and value. We work with a wide range of products that can be customized to meet your specific branding needs."
        },
        {
            title: "Our Core Services",
            items: [
                "Product sourcing",
                "Merchandise design",
                "Corporate Branding",
                "Product design and print"
            ]
        },
        {
            title: "Why Choose Us?",
            items: [
                "Extremely affordable & high quality",
                "Highly resourceful with quick delivery",
                "Fast response time & after-sales support"
            ]
        }
    ];

    return (
        <section id="about" ref={sectionRef} className="py-12 md:py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        About <span className="bg-gradient-to-r from-blue-700 to-emerald-500 bg-clip-text text-transparent">Us</span>
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Get to know more about our company and what we stand for.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {aboutSections.map((section, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-xl font-semibold">{section.title}</h3>
                            {'content' in section ? (
                                <p className="text-gray-700 leading-relaxed">
                                    {section.content}
                                </p>
                            ) : (
                                <ul className="space-y-2">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-green-500 mr-2">✓</span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
