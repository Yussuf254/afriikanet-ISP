"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { MentorData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";
import { Icon } from "@iconify/react";

const Team = () => {

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
        <section className="bg-slate-50 py-16 md:py-20 overflow-hidden" id="team">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-3 sm:px-4'>
                <div className="text-center mb-12">
                    <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Meet Our Team</h2>
                    <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">The experts behind Afriikanet's powerful billing solution.</p>
                </div>

                {/* Slider */}
                <div className="slick-team -mx-1">
                    <Slider {...settings}>
                        {MentorData.map((member, i) => (
                            <div key={i} className="px-1">
                                <div className='bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-2xl hover:border-amber-300 hover:scale-[1.02] transition-all duration-300 w-full h-full flex flex-col'>
                                    <div className="relative h-48 w-full shrink-0">
                                        <Image
                                            src={`${getImagePrefix()}${member.imgSrc}`}
                                            alt={member.name}
                                            fill
                                            className="w-full h-full object-cover object-top"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-4 text-center flex flex-col justify-center flex-1 min-h-[100px]">
                                        <h3 className='text-lg font-bold text-slate-900 mb-1'>{member.name}</h3>
                                        <h4 className='text-sm text-amber-600 font-medium'>{member.profession}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Team;
