"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { MentorData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Team = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
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
        <section className="bg-slate-50 py-16 md:py-20" id="team" >
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-3 sm:px-4'>
                <div className="text-center mb-12">
                    <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Meet Our Team</h2>
                    <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">The experts behind Afriikanet's powerful billing solution.</p>
                </div>

                <Slider {...settings}>
                    {MentorData.map((member, i) => (
                        <div key={i} className="px-1">
                            <div className='bg-white rounded-xl sm:rounded-2xl shadow-md border border-slate-100 p-4 sm:p-6 text-center h-full flex flex-col items-center hover:shadow-lg hover:border-amber-200 transition-all duration-300'>
                                <div className="relative mb-4">
                                    <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-amber-100 shadow-sm">
                                        <Image
                                            src={`${getImagePrefix()}${member.imgSrc}`}
                                            alt={member.name}
                                            width={160}
                                            height={160}
                                            className="w-full h-full object-cover object-center"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className="mt-auto pt-3">
                                    <h3 className='text-base sm:text-lg font-bold text-slate-900'>{member.name}</h3>
                                    <h4 className='text-amber-600 font-medium mt-1 text-sm'>{member.profession}</h4>
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
