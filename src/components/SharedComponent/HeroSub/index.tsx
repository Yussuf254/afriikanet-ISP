import React, { FC } from "react";

interface HeroSubProps {
    title: string;
    subtitle?: string;
    breadcrumb?: string;
}

const HeroSub: FC<HeroSubProps> = ({ title, subtitle, breadcrumb }) => {

    return (
        <>
            <section className="py-20 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 lg:mt-24 sm:mt-28 mt-20 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl"></div>
                
                <div className="container mx-auto lg:max-w-screen-xl px-4 relative z-10">
                    {breadcrumb && (
                        <p className="text-white/80 text-sm mb-3 font-medium">{breadcrumb}</p>
                    )}
                    <h2 className="text-white md:text-48 text-32 font-bold mb-3">{title}</h2>
                    {subtitle && (
                        <p className="text-white/90 text-lg max-w-2xl font-medium">{subtitle}</p>
                    )}
                </div>
            </section>
        </>
    );
};

export default HeroSub;
