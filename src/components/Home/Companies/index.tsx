"use client"
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TruestedCompanies } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Companies = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <section className='bg-white py-12'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <p className="text-center text-slate-500 mb-8 font-medium">Trusted by leading ISPs worldwide</p>
                <div className="py-4">
                    <Slider {...settings}>
                        {TruestedCompanies.map((item, i) =>
                            <div key={i} className="px-8 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                                <Image 
                                    src={`${getImagePrefix()}${item.imgSrc}`} 
                                    alt="Trusted Company" 
                                    width={140} 
                                    height={45} 
                                    className="grayscale hover:grayscale-0 transition-all duration-300"
                                    loading="lazy"
                                />
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
        </section>
    )

}

export default Companies;
