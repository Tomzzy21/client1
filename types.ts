
import type { ReactNode } from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface HowItWorksStep {
  step: number;
  description: ReactNode;
  image: ReactNode;
  rotation: string;
}

export interface Testimonial {
  quote: string;
  author: {
    name:string;
    title: string;
    avatar: string;
  };
  className?: string;
  color?: string;
  pointer: 'left' | 'center' | 'right';
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string | ReactNode;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}
