"use client"
import React from "react";
import Image from "next/image";
import { MentorData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";
import { Icon } from "@iconify/react";

const Team = () => {
    return (
        <section className="bg-slate-50 py-16 md:py-20" id="team">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-3 sm:px-4'>
                <div className="text-center mb-12">
                    <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Meet Our Team</h2>
                    <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">The experts behind Afriikanet's powerful billing solution.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {MentorData.slice(1).map((member, i) => (
                        <div key={i} className='bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl hover:border-amber-200 transition-all duration-300'>
                            <div className="p-6">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-amber-100">
                                        <Image
                                            src={`${getImagePrefix()}${member.imgSrc}`}
                                            alt={member.name}
                                            fill
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-bold text-slate-900'>{member.name}</h3>
                                        <h4 className='text-sm text-amber-600 font-medium'>{member.profession}</h4>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2 mb-3">
                                    <Icon icon="solar:quote-right-bold" className="text-amber-400 text-xl shrink-0 mt-0.5" />
                                    <p className="text-slate-600 text-sm leading-relaxed">{member.message}</p>
                                </div>
                                <div className="flex gap-2 pt-2 border-t border-slate-100">
                                    <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                        <Icon icon="ri:linkedin-fill" className="text-sm" />
                                    </a>
                                    <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-800 hover:text-white transition-all duration-300">
                                        <Icon icon="ri:twitter-x-line" className="text-sm" />
                                    </a>
                                    <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-amber-500 hover:text-white transition-all duration-300">
                                        <Icon icon="ri:mail-line" className="text-sm" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;
