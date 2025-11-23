
import React from 'react';
import type { NavLink, Service, HowItWorksStep, Testimonial, TeamMember, FAQItem, PortfolioItem } from './types';

export const navLinks: NavLink[] = [
  { href: '#why-choose-us', label: 'Why Choose Us' },
  { href: '#services', label: 'Services' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#portfolio', label: 'Our Work' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
];

export const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        title: 'Branded Merchandise',
        category: 'Pens',
        description: 'Custom-designed pens that put your brand in your customers\' hands every day.',
        image: '/IMG_0637.jpg',
    },
    {
        id: 2,
        title: 'Identity Keychains',
        category: 'Keychains',
        description: 'Sleek, practical brand keepsakes that stay with your audience wherever they go.',
        image: '/IMG_0638.jpg',
    },
    {
        id: 3,
        title: 'Corporate Gift Kits',
        category: 'Gift Packs',
        description: 'Complete branded kits that leave lasting impressions with clients and partners.',
        image: '/IMG_0639.jpg',
    },
    {
        id: 4,
        title: 'Premium Accessories',
        category: 'Leather Goods',
        description: 'High-quality branded pieces that elevate your identity through style and function.',
        image: '/IMG_0641.jpg',
    },
    {
        id: 6,
        title: 'Promotional Umbrellas',
        category: 'Outdoor',
        description: 'Bold, practical designs that extend your brand\'s visibility while keeping clients covered.',
        image: '/IMG_0640.jpg',
    },
    {
        id: 7,
        title: 'Corporate Stationery Set',
        category: 'Office',
        description: 'Elegant and professional stationery that makes a lasting impression in every business interaction.',
        image: '/PHOTO-2025-08-29-18-35-11.jpg',
    },
    {
        id: 8,
        title: 'Branded Mugs',
        category: 'Drinkware',
        description: 'Everyday essentials that keep your brand front and center, from the first sip of coffee to the last.',
        image: '/PHOTO-2025-08-29-18-36-59.jpg',
    },
    {
        id: 9,
        title: 'Branded Desk Organizer',
        category: 'Office Accessories',
        description: 'Keep workspaces tidy while maintaining brand presence with these stylish desk organizers.',
        image: '/PHOTO-2025-08-29-18-37-00.jpg',
    },
];

export const services: Service[] = [
  {
    icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12l-1.1-3.3a2 2 0 00-1.9-1.3H7a2 2 0 00-1.9 1.3L4 12M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4m16 0l-2-5H6l-2 5M12 4v8m-4-4h8"></path></svg>),
    title: 'Corporate Gifts & Branding',
    description: 'We source and customize high-quality corporate gifts that leave a lasting impression on your clients and employees.'
  },
  {
    icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z"></path></svg>),
    title: 'Promotional Items',
    description: 'Boost your brand visibility with unique and effective promotional products tailored to your marketing campaigns.'
  },
  {
    icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6 18.25m10.56-4.421c.24.03.48.062.72.096m-.72-.096L18 18.25m-12 0h12m-6 0v-5.25c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V18.25m-6 0h6m-6 0H6m6 0h6m6 0v-5.25a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25V18.25m13.5 0h-13.5"></path></svg>),
    title: 'Print & Production',
    description: 'From business cards to large format prints, we deliver impeccable quality that reflects your brand\'s excellence.'
  }
];

const CheckIcon: React.FC = () => (
  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: 1,
    description: <>We start with a deep dive to <strong>understand your brand</strong>, vision, and strategic goals.</>,
    image: (
      <div className="w-full max-w-xs flex flex-col items-center justify-center gap-y-3 p-4">
        <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895.356-1.75.988-2.386l.548-.547z"></path></svg>
        <div className="flex gap-2">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
            <div className="w-10 h-10 bg-gray-200/50 rounded-full"></div>
        </div>
        <p className="text-sm font-semibold text-slate-500 mt-2">Brand Discovery</p>
      </div>
    ),
    rotation: 'md:rotate-2'
  },
  {
    step: 2,
    description: <>Our creatives design concepts and source <strong>premium, aligned materials</strong> for your brand identity.</>,
    image: (
      <div className="w-full max-w-xs flex items-center justify-center gap-x-4 p-4 h-full">
        <div className="w-24 h-28 bg-white rounded-lg shadow-md border flex flex-col items-center p-2 transform -rotate-6">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">M</div>
            <div className="w-full h-1 bg-gray-200 mt-2 rounded"></div>
            <div className="w-full h-1 bg-gray-200 mt-1 rounded"></div>
        </div>
        <div className="transform rotate-6">
            <div className="w-20 h-20 bg-white rounded-full shadow-md border relative flex items-center justify-center">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-emerald-500 bg-clip-text text-transparent">m&s</span>
                </div>
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-10 border-2 border-l-0 border-white rounded-r-full bg-white shadow-md"></div>
            </div>
        </div>
      </div>
    ),
    rotation: 'md:-rotate-2'
  },
  {
    step: 3,
    description: <>We manage production and quality control, <strong>delivering exceptional products</strong> right to your door.</>,
    image: (
        <div className="w-full max-w-xs flex flex-col items-center justify-center p-4">
            <svg className="w-20 h-20 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.29895 7.52583L11.2485 2.50578C11.6622 2.27402 12.1818 2.27402 12.5955 2.50578L21.545 7.52583C21.9587 7.75759 22.2185 8.21735 22.2185 8.71158V15.2884C22.2185 15.7827 21.9587 16.2424 21.545 16.4742L12.5955 21.4942C12.1818 21.726 11.6622 21.726 11.2485 21.4942L2.29895 16.4742C1.88523 16.2424 1.62549 15.7827 1.62549 15.2884V8.71158C1.62549 8.21735 1.88523 7.75759 2.29895 7.52583Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M1.71191 8.2959L11.922 13.9834L22.1321 8.2959" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 21.75V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.5 5.5L8.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-sm font-semibold text-slate-500 mt-4">Quality Assured Delivery</p>
        </div>
    ),
    rotation: 'md:rotate-2'
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: "Obsessed with my new spill-proof cup! 🥤 The suction base is genius - no more spills! Perfect for busy days and messy kids. A total game-changer! ⭐⭐⭐⭐⭐",
    author: {
      name: 'Ava Quett',
      title: 'SATISFIED CUSTOMER',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face'
    },
    className: 'xl:absolute xl:top-[10%] xl:left-[2%] w-full sm:max-w-sm',
    color: 'bg-[#295faf]/20 border-[#295faf]/40 backdrop-blur-lg shadow-[0_0_20px_rgba(41,95,175,0.3)]',
    pointer: 'left'
  },
  {
    quote: "I love the charging cables, it lasts long, Great job M&S ❤️",
    author: {
      name: 'Benjamin Lee',
      title: 'SATISFIED CUSTOMER',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    className: 'xl:absolute xl:bottom-[5%] xl:left-[5%] w-full sm:max-w-[280px]',
    color: 'bg-[#2a84c0]/20 border-[#2a84c0]/40 backdrop-blur-lg shadow-[0_0_20px_rgba(42,132,192,0.3)]',
    pointer: 'left'
  },
  {
    quote: "Thank you @macchieandstrisce for adding value to our training with these unique gift items. We look forward to working with you again in the near future.",
    author: {
      name: 'Max Delaney',
      title: 'TRAINING ORGANIZER',
      avatar: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=100&h=100&fit=crop&crop=face'
    },
    className: 'xl:absolute xl:top-[2%] xl:left-1/2 xl:-translate-x-1/2 w-full sm:max-w-xs',
    color: 'bg-[#3ba343]/20 border-[#3ba343]/40 backdrop-blur-lg shadow-[0_0_20px_rgba(59,163,67,0.3)]',
    pointer: 'center'
  },
  {
    quote: "Thank you so much for bringing the gifts over. I love them. They are really nice. 👍 👏👏",
    author: {
      name: 'Nina Park',
      title: 'SATISFIED CLIENT',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
    },
    className: 'xl:absolute xl:top-[15%] xl:right-[2%] w-full sm:max-w-sm',
    color: 'bg-[#295faf]/20 border-[#295faf]/40 backdrop-blur-lg shadow-[0_0_20px_rgba(41,95,175,0.3)]',
    pointer: 'right'
  },
  {
    quote: "Helps us pitch timely ideas clients actually want for our marketing agency.",
    author: {
      name: 'Daniel Reyes',
      title: 'MARKETING LEAD',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face'
    },
    className: 'xl:absolute xl:bottom-[10%] xl:right-[5%] w-full sm:max-w-xs',
    color: 'bg-[#3ba343]/20 border-[#3ba343]/40 backdrop-blur-lg shadow-[0_0_20px_rgba(59,163,67,0.3)]',
    pointer: 'right'
  },
  {
    quote: "The perfect tool for staying ahead of trends and understanding our audience better.",
    author: {
      name: 'Sarah Johnson',
      title: 'DIGITAL MARKETER',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    className: 'xl:absolute xl:bottom-[-4%] xl:left-1/2 xl:-translate-x-1/2 w-full sm:max-w-xs',
    color: 'bg-[#2a84c0]/20 border-[#2a84c0]/40 backdrop-blur-lg shadow-[0_0_20px_rgba(42,132,192,0.3)]',
    pointer: 'center'
  }
];

export const teamMembers: TeamMember[] = [
    {
        name: 'John Doe',
        role: 'CEO & Co-Founder',
        image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=400&h=400&fit=crop&crop=face'
    },
    {
        name: 'Jane Smith',
        role: 'CTO & Co-Founder',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face'
    },
    {
        name: 'Michael Brown',
        role: 'Chief Marketing Officer',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=face'
    },
];

export const aboutUsContent: AboutUsContent[] = [
    {
        title: 'Our Story',
        content: 'Founded with a vision to transform corporate gifting, we started as a small team of passionate designers and brand strategists. Today, we help businesses create meaningful connections through thoughtful, high-quality branded merchandise.'
    },
    {
        title: 'Our Mission',
        content: 'To deliver exceptional branded products that not only represent your company values but also create lasting impressions. We believe in the power of thoughtful gifting to strengthen business relationships and build brand loyalty.'
    },
    {
        title: 'Our Approach',
        content: 'We combine innovative design with premium materials to create corporate gifts that stand out. Our team works closely with each client to understand their brand identity and deliver customized solutions that exceed expectations.'
    },
    {
        title: 'Why Choose Us',
        content: 'With years of experience in the industry, we pride ourselves on exceptional quality, attention to detail, and outstanding customer service. Our clients trust us to deliver products that truly represent their brand.'
    }
];

export const faqItems: FAQItem[] = [
    {
        question: 'What types of corporate gifts do you specialize in?',
        answer: 'We specialize in a wide range of high-quality corporate gifts including branded pens, identity keychains, premium accessories, corporate gift kits, promotional umbrellas, stationery sets, branded mugs, and desk organizers. Each item is carefully selected to ensure it makes a lasting impression on your clients and employees.'
    },
    {
        question: 'How do you ensure our brand stands out in your designs?',
        answer: 'With over a decade of experience creating 500+ brands, our expert strategists and designers combine creativity with strategic thinking. We focus on understanding your unique brand identity and values, then craft designs that not only look exceptional but effectively communicate your message and resonate with your target audience.'
    },
    {
        question: 'What makes your branding solutions different from others?',
        answer: 'Our approach combines innovative design with strategic thinking to create comprehensive branding solutions. We don\'t just create beautiful designs; we develop strategic brand experiences that drive business success. Our 98% client satisfaction rate and proven track record speak to our commitment to excellence.'
    },
    {
        question: 'Can you handle both design and production of branded items?',
        answer: 'Absolutely! We offer end-to-end services from initial concept to final production. Our in-house team handles everything from custom design to sourcing premium materials and managing quality control, ensuring a seamless process and consistent quality throughout.'
    },
    {
        question: 'What industries have you worked with?',
        answer: 'We\'ve successfully served a diverse range of industries including marketing agencies, corporate training firms, and various businesses looking to enhance their brand presence. Our portfolio includes everything from professional stationery to unique promotional items that make an impact.'
    },
    {
        question: 'How do you ensure the quality of your products?',
        answer: 'Quality is at the heart of everything we do. We implement a rigorous quality control process and work only with premium materials. Our commitment to excellence is reflected in our 98% client satisfaction rate and the positive feedback we receive from clients who love our products.'
    },
    {
        question: 'Can you create custom designs for specific events or campaigns?',
        answer: 'Yes! We specialize in creating custom solutions for various needs. Whether you need unique gift items for corporate training, special events, or marketing campaigns, we can design and produce items that perfectly match your campaign goals and leave a lasting impression.'
    },
    {
        question: 'What is your process for starting a new branding project?',
        answer: 'Our process begins with understanding your brand, vision, and strategic goals. We then move to the creative phase where we design concepts and source premium materials. Finally, we handle production and quality control, delivering exceptional products right to your door. Throughout the process, we maintain open communication to ensure your complete satisfaction.'
    }
];
