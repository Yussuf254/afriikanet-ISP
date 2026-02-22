"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { TestimonialData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        dotsClass: "slick-dots custom-dots",
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section id="testimonials" className='bg-slate-50 py-16 md:py-20 overflow-hidden'>
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-3 sm:px-4'>
                <div className="text-center mb-12">
                    <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">What Our Clients Say</h2>
                    <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">Hear from ISPs who transformed their businesses with Afriikanet.</p>
                </div>
                
                {/* Slider */}
                <div className="slick-testimonials">
                    <Slider {...settings}>
                        {TestimonialData.slice(0, 6).map((item, i) => (
                            <div key={i} className="px-1">
                                <div className='bg-white rounded-xl sm:rounded-2xl shadow-md border border-slate-100 p-4 sm:p-6 h-full flex flex-col hover:shadow-lg hover:border-amber-200 transition-all duration-300'>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 border-2 border-amber-100">
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
                                            <h3 className='text-base font-bold text-slate-900'>{item.name}</h3>
                                            <h3 className='text-sm text-slate-500'>{item.profession}</h3>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.comment}</p>
                                    <div className="flex gap-1 mt-auto pt-2">
                                        {[...Array(item.rating)].map((_, index) => (
                                            <Icon key={index} icon="tabler:star-filled" className="text-amber-400 text-base" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
