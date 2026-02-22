"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import dynamic from 'next/dynamic';

// Lazy load AnimatedCounter
const AnimatedCounter = dynamic(() => import("../AnimatedCounter"), { ssr: false });

const Courses = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 500,
        cssEase: "linear",
        dotsClass: "slick-dots custom-dots",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    const plans = [
        {
            name: "Starter",
            price: "KSh 1,000",
            pricePeriod: "/month",
            users: "Up to 100 users",
            features: [
                "Basic billing",
                "Email support",
                "Up to 100 users",
                "Basic reports"
            ],
            isPopular: false
        },
        {
            name: "Professional",
            price: "KSh 2,500",
            pricePeriod: "/month",
            users: "Up to 500 users",
            features: [
                "Advanced analytics",
                "Priority support",
                "Up to 500 users",
                "API access"
            ],
            isPopular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            pricePeriod: "",
            users: "Unlimited users",
            features: [
                "Custom integrations",
                "24/7 dedicated support",
                "Unlimited users",
                "White-label options"
            ],
            isPopular: false
        }
    ];

    const solutions = [
        {
            icon: "solar:bill-list-bold",
            title: "ISP Billing Software",
            description: "Complete billing solution with invoicing, payment tracking, and customer management.",
            features: ["Automated invoicing", "Multi-payment gateway", "Flexible billing cycles"]
        },
        {
            icon: "solar:users-group-two-rounded-bold",
            title: "Customer Management",
            description: "Powerful customer relationship tools to manage your subscribers effectively.",
            features: ["Customer portal", "Usage monitoring", "Service plan management"]
        },
        {
            icon: "solar:chart-bold",
            title: "Analytics & Reports",
            description: "Real-time insights into your business performance with comprehensive reporting.",
            features: ["Revenue analytics", "Customer churn", "Custom reports"]
        },
        {
            icon: "solar:router-bold",
            title: "Network Integration",
            description: "Seamless integration with popular routing platforms and network equipment.",
            features: ["Mikrotik integration", "Ubiquiti support", "Custom API access"]
        },
        {
            icon: "solar:headset-calling-bold",
            title: "24/7 Technical Support",
            description: "Round-the-clock technical assistance to keep your operations running smoothly.",
            features: ["Phone & email", "Remote troubleshooting", "Priority response"]
        },
        {
            icon: "solar:school-bold",
            title: "Training & Onboarding",
            description: "Comprehensive training programs to help your team get the most out of our solutions.",
            features: ["On-site training", "Online tutorials", "Documentation access"]
        }
    ];

    return (
        <section id="pricing" className='bg-gradient-to-b from-amber-50 to-white relative overflow-hidden'>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl"></div>
            
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 py-16 relative z-10'>
                {/* Pricing Section */}
                <div className="text-center mb-12">
                    <div className='inline-flex items-center gap-2 bg-amber-100 text-amber-600 px-4 py-2 rounded-full mb-4'>
                        <Icon icon="solar:tag-price-bold" className="text-lg" />
                        <p className='text-sm font-medium'>Pricing Plans</p>
                    </div>
                    <h2 className="text-slate-900 text-4xl lg:text-5xl font-bold mb-4">Choose Your Plan</h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">Select the perfect plan for your ISP business</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {plans.map((plan, index) => (
                        <div key={index} className={`rounded-xl p-6 border-2 ${plan.isPopular ? 'border-amber-500 bg-gradient-to-br from-amber-500 to-orange-500 text-white relative' : 'border-amber-200 bg-white shadow-lg hover:shadow-xl hover:border-amber-400 transition-all'}`}>
                            {plan.isPopular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white text-amber-600 px-3 py-1 rounded-full text-sm font-semibold">
                                    Most Popular
                                </div>
                            )}
                            <h5 className={`font-bold text-lg ${plan.isPopular ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h5>
                            <p className={`text-2xl font-bold mt-2 ${plan.isPopular ? 'text-white' : 'text-amber-600'}`}>
                                {plan.price}<span className={`text-sm font-normal ${plan.isPopular ? 'text-white/80' : 'text-slate-500'}`}>{plan.pricePeriod}</span>
                            </p>
                            <ul className="mt-4 space-y-2 text-sm">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className={`flex items-center gap-2 ${plan.isPopular ? 'text-white/90' : 'text-slate-600'}`}>
                                        <Icon icon="solar:check-circle-bold" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                
                {/* Solutions Section - What was missing */}
                <div className="mt-16">
                    <div className="text-center mb-12">
                        <div className='inline-flex items-center gap-2 bg-amber-100 text-amber-600 px-4 py-2 rounded-full mb-4'>
                            <Icon icon="solar:bulb-bold" className="text-lg" />
                            <p className='text-sm font-medium'>Our Solutions</p>
                        </div>
                        <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold mb-4">Comprehensive ISP Management</h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">Everything you need to run your ISP business efficiently</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {solutions.map((solution, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 border border-amber-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                                <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                                    <Icon icon={solution.icon} className="text-white text-2xl" />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{solution.title}</h4>
                                <p className="text-slate-600 mb-4">{solution.description}</p>
                                <ul className="space-y-2">
                                    {solution.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                            <Icon icon="solar:check-circle-bold" className="text-amber-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Courses;
