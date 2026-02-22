"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { TestimonialData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Testimonials = () => {

    const settings = {
        dots: true,
        dotsClass: "slick-dots custom-dots",
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 500,
        cssEase: "linear",
        centerMode: false,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: false,
                    variableWidth: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: false,
                    variableWidth: false,
                    swipeToSlide: true
                }
            }
        ]
    };

    return (
        <section id="testimonials" className='bg-slate-50 py-12 md:py-16 overflow-hidden'>
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                <div className="text-center mb-12">
                    <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">What Our Clients Say</h2>
                    <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">Hear from ISPs who transformed their businesses with Afriikanet.</p>
                </div>
                <div className="testimonial-slider">
                    <Slider {...settings}>
                        {TestimonialData.map((item, i) => (
                            <div key={i} className="px-2">
                                <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                    <div className="flex items-center gap-3 mb-4">
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
                                    <p className="text-slate-600 leading-relaxed mb-4 text-xs md:text-sm flex-grow">{item.comment}</p>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, index) => (
                                            <Icon key={index} icon="tabler:star-filled" className="text-amber-400 text-sm md:text-base" />
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
