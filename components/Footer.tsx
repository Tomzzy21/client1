
import React from 'react';
import { navLinks } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-800 text-slate-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <a href="#hero" className="flex items-center space-x-2">
                            <img src="/Logo2.png" alt="Macchie & Strisce Logo" className="h-12 w-auto" />
                            <span className="text-2xl font-bold tracking-tighter text-white">
                                macchie&strisce
                            </span>
                        </a>
                        <p className="mt-4 max-w-sm text-slate-400">
                            A wholly owned Nigerian company established in 2015, specializing in creative branding solutions with a focus on positive customer experience.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold tracking-wider uppercase mb-4">Process</h4>
                        <ul className="space-y-2">
                            <li><a href="#how-it-works" className="hover:text-white transition-colors">Step 1: Setup</a></li>
                            <li><a href="#how-it-works" className="hover:text-white transition-colors">Step 2: Customize</a></li>
                            <li><a href="#how-it-works" className="hover:text-white transition-colors">Step 3: Share</a></li>
                        </ul>
                    </div>
                    <div>
                         <h4 className="text-white font-semibold tracking-wider uppercase mb-4">Navigate</h4>
                        <ul className="space-y-2">
                            {navLinks.map(link => (
                                <li key={link.href}><a href={link.href} className="hover:text-white transition-colors">{link.label}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-slate-700 text-center text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Macchie & Strisce Limited. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
