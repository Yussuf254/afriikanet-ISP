import { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@iconify/react";

export const metadata: Metadata = {
    title: "About Us - Afriikanet",
    description: "Learn about Afriikanet, Africa's leading ISP billing solution provider.",
};

export default function AboutPage() {
    return (
        <>
            {/* Header Section */}
            <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
                    <p className="text-xl text-amber-400">Building the future of ISP billing across Africa</p>
                </div>
            </section>

            {/* About Section with Image */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image Side */}
                        <div className="relative">
                            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/banner/mahila2.jpg"
                                    alt="Afriikanet Team"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500 rounded-xl -z-10 shadow-xl"></div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-500 rounded-xl -z-10 shadow-xl"></div>
                        </div>

                        {/* Content Side */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-amber-100 p-2 rounded-lg">
                                    <Icon icon="solar:info-circle-bold" className="text-amber-600 text-2xl" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900">Who We Are</h2>
                            </div>
                            
                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                <strong>Afriikanet ISP billing software</strong> is a product of <strong className="text-amber-600">Pioneer Afriikanet Technologies Ltd</strong>, an IT company. 
                                We are a leading technology company dedicated to transforming how Internet Service Providers across Africa manage their billing operations.
                            </p>
                            
                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                Founded with a vision to simplify ISP management, we have grown to serve hundreds of ISPs across the continent. 
                                Our team consists of experienced professionals who understand the unique challenges facing ISPs in Africa.
                            </p>

                            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl p-6 text-white mb-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <Icon icon="solar:map-point-bold" className="text-2xl" />
                                    <h3 className="text-xl font-bold">Headquartered in Nairobi, Kenya</h3>
                                </div>
                                <p className="text-white/90">
                                    We serve clients across East Africa and beyond, with plans to expand our reach throughout the continent.
                                </p>
                            </div>

                            <p className="text-slate-600 text-lg leading-relaxed">
                                We combine technical expertise with deep industry knowledge to deliver solutions that really work. 
                                From small community ISPs to larger regional providers, Afriikanet has the experience and expertise to help you succeed.
                            </p>
                        </div>
                    </div>

                    {/* Why Choose Afriikanet Section */}
                    <div className="mt-20">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Why Choose Afriikanet?</h2>
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl p-8 text-white mb-6">
                                <div className="flex items-start gap-4">
                                    <Icon icon="solar:users-group-bold" className="text-3xl mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">500+ Active ISPs</h3>
                                        <p className="text-white/90">
                                            Join hundreds of Internet Service Providers across Africa who trust Afriikanet for their billing operations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-8 text-white mb-6">
                                <div className="flex items-start gap-4">
                                    <Icon icon="solar:shield-check-bold" className="text-3xl mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">99.9% Uptime SLA</h3>
                                        <p className="text-white/90">
                                            Our reliable infrastructure ensures your billing system stays operational around the clock.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-8 text-white mb-6">
                                <div className="flex items-start gap-4">
                                    <Icon icon="solar:headphone-bold" className="text-3xl mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                                        <p className="text-white/90">
                                            Our dedicated support team is available around the clock to assist you with any issues or questions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl p-8 text-white">
                                <div className="flex items-start gap-4">
                                    <Icon icon="solar:users-bold" className="text-3xl mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">50K+ Users Managed</h3>
                                        <p className="text-white/90">
                                            Our platform successfully manages over 50,000 end users for ISPs across the continent.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Makes Us Different Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">What Makes Us Different</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Icon icon="solar:bolt-bold" className="text-amber-600 text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Cutting-Edge Technology</h3>
                            <p className="text-slate-600">Our software leverages the latest technologies to provide robust, scalable billing solutions that grow with your business.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Icon icon="solar:headphone-bold" className="text-green-600 text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Dedicated Support</h3>
                            <p className="text-slate-600">Round-the-clock support from our expert team ensures your operations run smoothly without interruptions.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Icon icon="solar:settings-bold" className="text-orange-600 text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Customizable Solutions</h3>
                            <p className="text-slate-600">Tailor our platform to fit your specific needs with flexible configurations and integrations.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
