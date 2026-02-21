import { Metadata } from "next";
import Image from "next/image";
import Team from "@/components/Home/Mentor";
import { Icon } from "@iconify/react";

export const metadata: Metadata = {
    title: "Our Team - Afriikanet",
    description: "Meet the team behind Afriikanet's successful ISP billing solutions.",
};

export default function TeamPage() {
    return (
        <>
            {/* Header Section */}
            <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Our Team</h1>
                    <p className="text-xl text-amber-400">Meet the experts behind Afriikanet's success</p>
                </div>
            </section>

            {/* CEO Message Section */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-100">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                            <div className="lg:col-span-2 p-8 lg:pr-12">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-amber-100 p-2 rounded-lg">
                                        <Icon icon="solar:quote-right-bold" className="text-amber-600 text-2xl" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">A Message from Our Founder</h2>
                                </div>
                                <div className="space-y-4 text-slate-600">
                                    <p className="text-lg leading-relaxed">
                                        I am <strong>Hamisi Yusuf Suleiman</strong>, founder of <strong>Pioneer Afriikanet Technologies Ltd</strong>, the company behind the design and development of <strong>Afriikanet ISP Billing Software</strong>.
                                    </p>
                                    <p className="leading-relaxed">
                                        Our journey began with a simple yet powerful vision: to transform how Internet Service Providers across Africa manage their businesses. We understood the unique challenges faced by ISPs on the continent, and we built Afriikanet from the ground up to address these needs.
                                    </p>
                                    <p className="leading-relaxed">
                                        Today, Afriikanet stands as a testament to African innovation—built by Africans, for Africans. Our software empowers hundreds of ISPs to streamline their operations, improve customer satisfaction, and grow their businesses.
                                    </p>
                                    <p className="leading-relaxed">
                                        We believe that technology should be a catalyst for progress, and we're proud to be at the forefront of Africa's digital transformation. Every line of code we write, every feature we develop, is driven by our commitment to excellence and our passion for serving the African market.
                                    </p>
                                    <p className="font-semibold text-amber-600">
                                        Thank you for trusting us to be your partner in success.
                                    </p>
                                </div>
                            </div>
                            <div className="relative bg-gradient-to-br from-amber-50 to-slate-100 p-8 flex flex-col justify-center items-center text-center border-l border-amber-100">
                                <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-amber-300 shadow-xl">
                                    <Image
                                        src="/images/mentor/user1.jpg"
                                        alt="CEO - Hamisi Yusuf Suleiman"
                                        fill
                                        className="object-cover object-center"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-lg w-full">
                                    <h3 className="text-xl font-bold text-slate-900">Hamisi Yusuf Suleiman</h3>
                                    <p className="text-amber-600 font-semibold">Founder & CEO</p>
                                    <div className="w-16 h-1 bg-amber-400 mx-auto my-3 rounded-full"></div>
                                    <p className="text-slate-500 text-sm">Pioneer Afriikanet Technologies Ltd</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Team />
        </>
    );
}
