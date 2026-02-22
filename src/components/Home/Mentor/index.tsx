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
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
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
        <section className="bg-slate-50 py-12 md:py-16" id="team" >
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Meet Our Team</h2>
                    <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">The experts behind Afriikanet's powerful billing solution.</p>
                </div>

                <Slider {...settings}>
                    {MentorData.map((member, i) => (
                        <div key={i} className="px-1 sm:px-2">
                            <div className='m-2 text-center px-3 py-5 sm:px-4 sm:py-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col'>
                                <div className="relative mb-4 flex justify-center shrink-0">
                                    <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-4 border-amber-100 shadow-lg">
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
                                <div className="mt-auto py-2">
                                    <h3 className='text-lg sm:text-xl font-bold text-slate-900'>{member.name}</h3>
                                    <h4 className='text-amber-600 font-medium mt-1 text-sm sm:text-base'>{member.profession}</h4>
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
