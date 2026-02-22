"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { MentorData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";
import { Icon } from "@iconify/react";

const Team = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        dotsClass: "slick-dots custom-dots",
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ]
    };

    return (
        <section className="bg-slate-50 py-16 md:py-20" id="team">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-3 sm:px-4'>
                <div className="text-center mb-12">
                    <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Meet Our Team</h2>
                    <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">The experts behind Afriikanet's powerful billing solution.</p>
                </div>

                <Slider {...settings}>
                    {MentorData.map((member, i) => (
                        <div key={i} className="px-1">
                            <div className='bg-white rounded-xl sm:rounded-2xl shadow-md border border-slate-100 p-4 sm:p-6 min-h-[220px] flex flex-col hover:shadow-lg hover:border-amber-200 transition-all duration-300'>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border-3 border-amber-100 group-hover:border-amber-300 transition-colors">
                                        <Image
                                            src={`${getImagePrefix()}${member.imgSrc}`}
                                            alt={member.name}
                                            width={80}
                                            height={80}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className='text-base font-bold text-slate-900 truncate'>{member.name}</h3>
                                        <h4 className='text-sm text-amber-600 font-medium truncate'>{member.profession}</h4>
                                    </div>
                                </div>
                                <div className="flex gap-2 mt-auto pt-2 justify-start">
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
                </Slider>
            </div>
        </section>
    );
}

export default Team;
