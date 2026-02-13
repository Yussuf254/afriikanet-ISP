"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
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
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <section id="testimonials" className='bg-slate-50 py-12 md:py-16'>
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                <div className="text-center mb-16">
                    <h2 className="text-slate-900 text-4xl lg:text-5xl font-bold mb-4">What Our Clients Say</h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">Hear from ISPs who transformed their businesses with Afriikanet.</p>
                </div>
                <Slider {...settings}>
                    {TestimonialData.map((item, i) => (
                        <div key={i}>
                            <div className="bg-white rounded-2xl p-8 mx-3 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-full overflow-hidden">
                                        <Image 
                                            src={`${getImagePrefix()}${item.imgSrc}`}
                                            alt={item.name} 
                                            width={56} 
                                            height={56} 
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-bold text-slate-900'>{item.name}</h3>
                                        <h3 className='text-sm text-slate-500'>{item.profession}</h3>
                                    </div>
                                </div>
                                <p className="text-slate-600 leading-relaxed mb-4">{item.comment}</p>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, index) => (
                                        <Icon key={index} icon="tabler:star-filled" className="text-amber-400 text-lg" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;
