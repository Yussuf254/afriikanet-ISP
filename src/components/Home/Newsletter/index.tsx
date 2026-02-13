"use client";
import { getImagePrefix } from "@/utils/util";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email || !email.includes("@")) {
            toast.error("Please enter a valid email address");
            return;
        }

        setLoading(true);

        // Simulate API call - replace with actual API endpoint
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            toast.success("Successfully subscribed to our newsletter!");
            setEmail("");
        } catch {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-slate-50 py-16">
            <Toaster position="top-center" />
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                        <div className="flex flex-col justify-center">
                            <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Stay Updated</h2>
                            <p className="text-slate-600 text-lg mb-8">Subscribe to our newsletter for the latest updates on ISP billing solutions, tips, and exclusive offers.</p>
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="py-3 px-5 text-base w-full sm:w-64 md:w-80 text-slate-900 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    placeholder="Enter your email address"
                                    autoComplete="off"
                                    disabled={loading}
                                />
                                <button 
                                    type="submit"
                                    disabled={loading}
                                    className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <>
                                            <Icon icon="eos-icons:loading" className="text-xl animate-spin" />
                                            Subscribing...
                                        </>
                                    ) : (
                                        <>
                                            <Icon icon="solar:mail-linear" className="text-xl" />
                                            Subscribe
                                        </>
                                    )}
                                </button>
                            </form>
                            <p className="text-slate-500 text-sm">We respect your privacy. Unsubscribe at any time.</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="relative">
                                <Image
                                    src="/images/banner/mahila33.jpg"
                                    alt="Newsletter illustration"
                                    width={350}
                                    height={250}
                                    className="rounded-xl object-cover shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;
