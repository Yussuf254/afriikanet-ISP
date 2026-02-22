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
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section id="testimonials" className='bg-slate-50 py-12 md:py-16 overflow-hidden'>
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                <div className="text-center mb-16">
                    <h2 className="text-slate-900 text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">What Our Clients Say</h2>
                    <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">Hear from ISPs who transformed their businesses with Afriikanet.</p>
                </div>
                
                {/* Slider */}
                <div className="slick-testimonials">
                    <Slider {...settings}>
                        {TestimonialData.slice(0, 6).map((item, i) => (
                            <div key={i} className="px-1 sm:px-2">
                                <div className='px-3 py-4 sm:px-4 sm:py-6 bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1 overflow-hidden h-full flex flex-col'>
                                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0">
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
                                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">{item.comment}</p>
                                    <div className="flex gap-0.5 mt-auto">
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
