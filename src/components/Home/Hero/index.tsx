"use client";

import Image from 'next/image';
import { Icon } from "@iconify/react";
import { getImagePrefix } from '@/utils/util';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Hero = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setImageLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="home-section" className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-[80vh] sm:min-h-screen flex items-center relative overflow-hidden'>
            {/* Background image covering the entire area */}
            <div
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-opacity duration-1000 ${imageLoaded ? 'opacity-40' : 'opacity-0'}`}
                style={{ backgroundImage: `url(/images/banner/mahila.jpg)` }}
            ></div>
            {/* Overlay for better text readability */}
            <div className='absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60 z-0'></div>

            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 relative z-10">
                <div className='flex flex-col items-center text-center max-w-4xl mx-auto'>
                    <div className='flex flex-col gap-6 sm:gap-8'>
                        <div className='inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-3 sm:px-4 py-2 w-fit mx-auto'>
                            <Icon
                                icon="solar:verified-check-bold"
                                className="text-amber-400 text-lg sm:text-xl"
                            />
                            <p className='text-amber-400 text-xs sm:text-sm font-medium'>Trusted by 500+ ISPs Worldwide</p>
                        </div>
                        <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Afriikanet</span>
                            <br className='hidden sm:block' />
                            <span className='sm:hidden'> </span>Next-Gen ISP Billing System
                        </h1>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 mx-auto">
                            <Link
                                href="/contact"
                                className='bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base'
                            >
                                <Icon icon="heroicons:play" className="w-4 h-4 sm:w-5 sm:h-5" />
                                Get Free Quote
                            </Link>
                            <Link
                                href="/services"
                                className='border-2 border-slate-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:border-amber-400 hover:text-amber-400 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base'
                            >
                                <Icon icon="heroicons:eye" className="w-4 h-4 sm:w-5 sm:h-5" />
                                Our Services
                            </Link>
                        </div>
                        <div className='flex flex-wrap gap-4 sm:gap-6 pt-4 justify-center'>
                            <div className='flex items-center gap-2 sm:gap-3'>
                                <div className='bg-green-500/20 p-2 sm:p-3 rounded-full'>
                                    <Icon icon="solar:check-circle-bold" className="text-green-400 text-lg sm:text-xl" />
                                </div>
                                <p className='text-slate-300 font-medium text-sm sm:text-base'>Automated Billing</p>
                            </div>
                            <div className='flex items-center gap-2 sm:gap-3'>
                                <div className='bg-amber-500/20 p-2 sm:p-3 rounded-full'>
                                    <Icon icon="solar:bolt-bold" className="text-amber-400 text-lg sm:text-xl" />
                                </div>
                                <p className='text-slate-300 font-medium text-sm sm:text-base'>Real-time Analytics</p>
                            </div>
                            <div className='flex items-center gap-2 sm:gap-3'>
                                <div className='bg-orange-500/20 p-2 sm:p-3 rounded-full'>
                                    <Icon icon="ion:headset" className="text-orange-400 text-lg sm:text-xl" />
                                </div>
                                <p className='text-slate-300 font-medium text-sm sm:text-base'>24/7 Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
