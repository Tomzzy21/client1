import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const InputField: React.FC<{ id: string; label: string; type?: string; required?: boolean }> = ({ id, label, type = 'text', required = true }) => (
    <div className="relative z-0">
      <input 
        type={type} 
        id={id} 
        name={id}
        className="block py-2.5 px-0 w-full text-base text-slate-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" " 
        required={required} 
      />
      <label 
        htmlFor={id} 
        className="absolute text-base text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
);

const TextareaField: React.FC<{ id: string; label: string; rows?: number; required?: boolean }> = ({ id, label, rows = 4, required = true }) => (
    <div className="relative z-0">
        <textarea
            id={id}
            name={id}
            rows={rows}
            className="block py-2.5 px-0 w-full text-base text-slate-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required={required}
        ></textarea>
        <label
            htmlFor={id}
            className="absolute text-base text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
            {label}
        </label>
    </div>
);

const SelectField: React.FC<{ id: string; label: string; required?: boolean; children: React.ReactNode }> = ({ id, label, required = true, children }) => (
    <div className="relative z-0">
        <select
            id={id}
            name={id}
            required={required}
            defaultValue=""
            className="block py-2.5 px-0 w-full text-base text-slate-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        >
            {children}
        </select>
        <label
            htmlFor={id}
            className="absolute text-base text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-invalid:scale-100 peer-invalid:translate-y-0 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
            {label}
        </label>
    </div>
);


const SocialLink = ({ href, icon, name }: {href: string, icon: React.ReactNode, name: string}) => (
    <a href={href} aria-label={`Follow us on ${name}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300">
        {icon}
    </a>
);

const Contact: React.FC = () => {
    const sectionRef = useScrollAnimation();

    const contactDetails = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
            label: "Email Us",
            value: "mandsltd@outlook.com",
            href: "mailto:mandsltd@outlook.com"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
            label: "Call Us",
            value: "08096194817",
            href: "tel:+2348096194817"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
            label: "Find Us",
            value: "Lagos, Nigeria",
            href: "#"
        }
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic would go here
        alert("Thank you for your message! We will get back to you shortly.");
        (e.target as HTMLFormElement).reset();
    };

    return (
        <section id="contact" ref={sectionRef} className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-slate-900">
                        Let's <span className="bg-gradient-to-r from-blue-700 to-emerald-500 bg-clip-text text-transparent">Create Together</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Ready to transform your brand? Get in touch and let's discuss your project.
                    </p>
                </div>
                <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3 bg-gray-50/70 p-8 lg:p-12 rounded-2xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h3>
                        <p className="text-slate-600 mb-8">We'll get back to you as soon as possible.</p>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <InputField id="full-name" label="Full Name" />
                            <InputField id="email" label="Email Address" type="email" />
                            <SelectField id="service" label="What service are you interested in?">
                                <option value="" disabled></option>
                                <option value="corporate-gifts">Corporate Gifts & Branding</option>
                                <option value="promotional-items">Promotional Items</option>
                                <option value="print-production">Print & Production</option>
                                <option value="general-inquiry">General Inquiry</option>
                            </SelectField>
                            <TextareaField id="message" label="Your message" rows={3} />
                            <button type="submit" className="w-full bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg hover:bg-slate-700 transition-colors duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300">Send Message</button>
                        </form>
                    </div>
                     <div className="lg:col-span-2 bg-slate-900 rounded-2xl p-8 lg:p-10 text-white flex flex-col justify-between">
                         <div>
                            <h3 className="text-3xl font-bold text-white">Get in Touch</h3>
                            <p className="text-slate-300 mt-4 mb-10">We're here to help and answer any questions. We look forward to hearing from you!</p>
                            <div className="space-y-8">
                                {contactDetails.map((item, index) => (
                                    <a key={index} href={item.href} className="flex items-center gap-5 group">
                                        <div className="flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">{item.label}</h4>
                                            <p className="text-slate-300 text-sm">{item.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                         </div>
                        <div className="mt-10 pt-8 border-t border-slate-700/50">
                            <h4 className="font-semibold text-slate-200 mb-4">Follow Us</h4>
                            <div className="flex space-x-5">
                                <SocialLink href="#" name="X (formerly Twitter)" icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>} />
                                <SocialLink href="#" name="Instagram" icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465 2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zm-1.04 2.54a4.42 4.42 0 00-4.42 4.42c0 2.442 1.98 4.42 4.42 4.42s4.42-1.98 4.42-4.42a4.42 4.42 0 00-4.42-4.42zm0 7.34c-1.626 0-2.92-1.294-2.92-2.92s1.294-2.92 2.92-2.92 2.92 1.294 2.92 2.92-1.294 2.92-2.92 2.92zm5.79-7.91a1.05 1.05 0 11-2.1 0 1.05 1.05 0 012.1 0z" clipRule="evenodd"></path></svg>} />
                                <SocialLink href="#" name="LinkedIn" icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;