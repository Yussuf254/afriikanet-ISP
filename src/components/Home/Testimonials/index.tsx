"use client";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { TestimonialData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Testimonials = () => {
    return (
        <section id="testimonials" className='bg-slate-50 py-12 md:py-16'>
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-slate-900 text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">What Our Clients Say</h2>
                    <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">Hear from ISPs who transformed their businesses with Afriikanet.</p>
                </div>
                
                {/* Responsive Grid - No Slider */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {TestimonialData.slice(0, 6).map((item, i) => (
                        <div 
                            key={i} 
                            className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="flex items-center gap-3 mb-3 md:mb-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shrink-0">
                                    <Image 
                                        src={`${getImagePrefix()}${item.imgSrc}`}
                                        alt={item.name} 
                                        width={48} 
                                        height={48} 
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div>
                                    <h3 className='text-sm md:text-base font-bold text-slate-900'>{item.name}</h3>
                                    <h3 className='text-xs md:text-sm text-slate-500'>{item.profession}</h3>
                                </div>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-3 md:mb-4 text-xs md:text-sm flex-grow">{item.comment}</p>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, index) => (
                                    <Icon key={index} icon="tabler:star-filled" className="text-amber-400 text-sm md:text-base" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
