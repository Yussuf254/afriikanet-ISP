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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {MentorData.map((member, i) => (
                        <div key={i} className='bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl hover:border-amber-200 transition-all duration-300 w-full'>
                            <div className="relative h-64 sm:h-72 w-full">
                                <Image
                                    src={`${getImagePrefix()}${member.imgSrc}`}
                                    alt={member.name}
                                    fill
                                    className="w-full h-full object-cover object-top"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-5 text-center">
                                <h3 className='text-lg font-bold text-slate-900 mb-1'>{member.name}</h3>
                                <h4 className='text-sm text-amber-600 font-medium mb-4'>{member.profession}</h4>
                                <div className="flex gap-3 justify-center">
                                    <a href="#" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                        <Icon icon="ri:linkedin-fill" />
                                    </a>
                                    <a href="#" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-800 hover:text-white transition-all duration-300">
                                        <Icon icon="ri:twitter-x-line" />
                                    </a>
                                    <a href="#" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-amber-500 hover:text-white transition-all duration-300">
                                        <Icon icon="ri:mail-line" />
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
