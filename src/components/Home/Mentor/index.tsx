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
        centerMode: false,
        variableWidth: false,
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
                <div className="slick-team -mx-2">
                    <Slider {...settings}>
                        {MentorData.map((member, i) => (
                            <div key={i} className="px-2">
                                <div className='bg-white rounded-lg shadow-sm border border-slate-200 p-4 flex items-center gap-4 hover:shadow-md hover:border-amber-300 transition-all duration-200 h-[140px]'>
                                    <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 relative">
                                        <Image
                                            src={`${getImagePrefix()}${member.imgSrc}`}
                                            alt={member.name}
                                            fill
                                            className="w-full h-full object-cover"
                                            sizes="96px"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className='text-base font-bold text-slate-900 truncate'>{member.name}</h3>
                                        <h3 className='text-sm text-amber-600 truncate'>{member.profession}</h3>
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
