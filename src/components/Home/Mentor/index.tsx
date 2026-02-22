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
        autoplaySpeed: 3000,
        cssEase: "linear",
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
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-20" id="team" >
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-3 sm:px-4'>
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                        <Icon icon="ph:users-three-bold" className="text-lg" />
                        Our Leadership
                    </div>
                    <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Meet Our Team</h2>
                    <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">The experts behind Afriikanet's powerful billing solution, dedicated to transforming ISP operations across Africa.</p>
                </div>

                <Slider {...settings}>
                    {MentorData.map((member, i) => (
                        <div key={i} className="px-2">
                            <div className='group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ease-out h-full border border-slate-100'>
                                {/* Background decoration */}
                                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-br from-amber-400 to-amber-600 opacity-90"></div>
                                
                                {/* Content */}
                                <div className="relative pt-14 pb-6 px-5 flex flex-col items-center text-center">
                                    {/* Image container with hover effect */}
                                    <div className="relative mb-5">
                                        <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-110 group-hover:border-amber-400 transition-all duration-500">
                                            <Image
                                                src={`${getImagePrefix()}${member.imgSrc}`}
                                                alt={member.name}
                                                width={160}
                                                height={160}
                                                className="w-full h-full object-cover object-center"
                                                loading="lazy"
                                            />
                                        </div>
                                        {/* Status indicator */}
                                        <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></div>
                                    </div>
                                    
                                    {/* Name and title */}
                                    <div className="mt-2">
                                        <h3 className='text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors duration-300'>{member.name}</h3>
                                        <p className='text-slate-500 font-medium mt-1 text-sm'>{member.profession}</p>
                                    </div>
                                    
                                    {/* Divider */}
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent my-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    {/* Short bio */}
                                    <p className="text-slate-500 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        {i === 0 ? "Visionary leader driving African tech innovation" : 
                                         i === 1 ? "Tech expert building scalable solutions" : 
                                         i === 2 ? "Operations guru ensuring excellence" : 
                                         "Sales champion connecting with clients"}
                                    </p>
                                    
                                    {/* Social links */}
                                    <div className="flex items-center gap-3 mt-auto pt-2">
                                        <a href="#" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1">
                                            <Icon icon="ri:linkedin-fill" className="text-lg" />
                                        </a>
                                        <a href="#" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-800 hover:text-white transition-all duration-300 hover:-translate-y-1">
                                            <Icon icon="ri:twitter-x-line" className="text-lg" />
                                        </a>
                                        <a href="#" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-amber-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                                            <Icon icon="ri:mail-line" className="text-lg" />
                                        </a>
                                    </div>
                                </div>
                                
                                {/* Hover overlay effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Team;
