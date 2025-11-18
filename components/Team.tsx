import React from 'react';
import { teamMembers } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { TeamMember } from '../types';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100/80 overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="aspect-square bg-slate-800 overflow-hidden">
                <img
                    src={member.image}
                    alt={`A portrait of ${member.name}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-5 flex justify-between items-center">
                <div>
                    <h3 className="font-bold text-lg text-slate-900">{member.name}</h3>
                    <p className="text-slate-600 text-sm">{member.role}</p>
                </div>
                <a
                    href="#"
                    aria-label={`Find out more about ${member.name}`}
                    className="w-12 h-12 flex items-center justify-center shrink-0"
                >
                    <div className="w-10 h-10 rounded-full bg-[#295faf]/80 flex items-center justify-center transition-all duration-300 shadow-[0_0_10px_0px_rgba(41,95,175,0.5)] group-hover:shadow-[0_0_18px_2px_rgba(41,95,175,0.6)] group-hover:bg-[#295faf]">
                        <div className="w-3.5 h-3.5 bg-white"></div>
                    </div>
                </a>
            </div>
        </div>
    );
};

const Team: React.FC = () => {
    const sectionRef = useScrollAnimation();

    return (
        <section id="team" ref={sectionRef} className="py-20 md:py-32 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="inline-flex items-center gap-x-2 rounded-full bg-blue-100 text-blue-800 font-semibold px-4 py-1.5 text-sm">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#3B82F6"/>
                    </svg>
                    Our Team
                </div>
                <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900">
                    Meet The <span className="bg-gradient-to-r from-blue-700 to-emerald-500 bg-clip-text text-transparent">People</span> Behind The Works
                </h2>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;