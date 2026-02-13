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
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="bg-slate-50 py-12 md:py-16" id="team" >
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                <div className="text-center mb-16">
                    <h2 className="text-slate-900 text-4xl lg:text-5xl font-bold mb-4">Meet Our Team</h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">The experts behind Afriikanet's powerful billing solution.</p>
                </div>

                <Slider {...settings}>
                    {MentorData.map((member, i) => (
                        <div key={i}>
                            <div className='m-3 text-center px-4 py-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>
                                <div className="relative mb-6">
                                    <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-amber-100">
                                        <Image
                                            src={`${getImagePrefix()}${member.imgSrc}`}
                                            alt={member.name}
                                            width={160}
                                            height={160}
                                            className="w-full h-full object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold text-slate-900'>{member.name}</h3>
                                    <h4 className='text-amber-600 font-medium mt-1'>{member.profession}</h4>
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
