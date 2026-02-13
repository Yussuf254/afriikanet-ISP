import { Metadata } from "next";
import { Icon } from "@iconify/react/dist/iconify.js";

export const metadata: Metadata = {
    title: "Company - Afriikanet",
    description: "Learn about Afriikanet, a product of Pioneer Afriikanet Technologies Ltd - Innovating the future of IT solutions.",
};

export default function CompanyPage() {
    return (
        <>
            {/* Header Section */}
            <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Our Company</h1>
                    <p className="text-xl text-amber-400">Innovating the Future</p>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">Pioneering ISP Billing Solutions Globally</h2>
                            <p className="text-slate-600 text-lg mb-6">
                                Afriikanet is a product of <strong>Pioneer Afriikanet Technologies Ltd</strong>, an IT company dedicated to transforming how Internet Service Providers manage their billing operations. Founded with a vision to simplify ISP management, we have grown to serve ISPs across Africa and beyond.
                            </p>
                            <p className="text-slate-600 text-lg mb-6">
                                Our mission is to empower ISPs with innovative, reliable, and affordable billing solutions that help them grow their businesses while providing excellent service to their customers.
                            </p>
                            <p className="text-slate-600 text-lg">
                                With a team of experienced professionals and a deep understanding of the telecommunications landscape, Afriikanet is committed to being the trusted partner for ISPs looking to modernize their operations worldwide.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
                            <p className="text-lg mb-8">To be the leading ISP billing solutions provider globally, enabling digital transformation for ISPs of all sizes.</p>
                            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                            <p className="text-lg">To deliver innovative, reliable, and affordable billing solutions that help ISPs succeed in serving their communities.</p>
                        </div>
                    </div>

                    <div className="mt-20">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-slate-50 rounded-xl p-8 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon icon="solar:shield-check-bold" className="text-amber-600 text-3xl" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Trust & Reliability</h3>
                                <p className="text-slate-600">We build solutions ISPs can depend on, with 99.9% uptime guarantee and dedicated support.</p>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-8 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon icon="solar:bolt-bold" className="text-orange-600 text-3xl" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation</h3>
                                <p className="text-slate-600">Continuously improving our solutions to meet the evolving needs of ISPs worldwide.</p>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-8 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon icon="solar:users-group-rounded-bold" className="text-amber-600 text-3xl" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Customer Focus</h3>
                                <p className="text-slate-600">Our customers' success is our success. We go the extra mile to support their growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
