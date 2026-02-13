import { Metadata } from "next";
import { Icon } from "@iconify/react/dist/iconify.js";

export const metadata: Metadata = {
    title: "Privacy Policy - Afriikanet",
    description: "Afriikanet Privacy Policy - Pioneer Afriikanet Technologies Ltd",
};

export default function PrivacyPage() {
    return (
        <>
            {/* Header Section */}
            <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-xl text-amber-400">How we protect your data and privacy</p>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 mb-8 border border-amber-200">
                        <div className="flex items-center gap-4">
                            <div className="bg-amber-100 p-3 rounded-full">
                                <Icon icon="solar:shield-check-bold" className="text-amber-600 text-2xl" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">Pioneer Afriikanet Technologies Ltd</h2>
                                <p className="text-slate-600">Afriikanet ISP Billing System - Privacy Policy</p>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-slate max-w-none">
                        <div className="bg-white rounded-xl shadow-lg border border-amber-100 p-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">1. INTRODUCTION</h3>
                            <p className="text-slate-600 mb-6">
                                At Pioneer Afriikanet Technologies Ltd ("Afriikanet", "we", "our"), we are committed to protecting your privacy. 
                                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                                Afriikanet ISP Billing System.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">2. INFORMATION WE COLLECT</h3>
                            <div className="bg-slate-50 rounded-lg p-6 mb-6">
                                <h4 className="font-semibold text-slate-900 mb-3">Personal Information:</h4>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex items-center gap-2">
                                        <Icon icon="solar:check-circle-bold" className="text-green-500" />
                                        <span>Name, email address, phone number</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Icon icon="solar:check-circle-bold" className="text-green-500" />
                                        <span>Company details and business information</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Icon icon="solar:check-circle-bold" className="text-green-500" />
                                        <span>Billing and payment information</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Icon icon="solar:check-circle-bold" className="text-green-500" />
                                        <span>Contact form submissions</span>
                                    </li>
                                </ul>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">3. HOW WE USE YOUR INFORMATION</h3>
                            <ul className="space-y-2 text-slate-600 mb-6">
                                <li className="flex items-center gap-2">
                                    <Icon icon="solar:check-circle-bold" className="text-amber-500" />
                                    <span>Provide and maintain our ISP billing services</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon icon="solar:check-circle-bold" className="text-amber-500" />
                                    <span>Process payments and manage billing</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon icon="solar:check-circle-bold" className="text-amber-500" />
                                    <span>Send service updates and support communications</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon icon="solar:check-circle-bold" className="text-amber-500" />
                                    <span>Improve our products and services</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon icon="solar:check-circle-bold" className="text-amber-500" />
                                    <span>Comply with legal obligations</span>
                                </li>
                            </ul>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">4. PRICING PLANS</h3>
                            <div className="bg-slate-50 rounded-lg p-6 mb-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-white rounded-lg p-4 border border-amber-200">
                                        <h5 className="font-bold text-slate-900">Starter</h5>
                                        <p className="text-amber-600 font-bold">KSh 1,000/month</p>
                                        <p className="text-slate-500 text-sm">Up to 100 users</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 border border-amber-200">
                                        <h5 className="font-bold text-slate-900">Professional</h5>
                                        <p className="text-amber-600 font-bold">KSh 2,500/month</p>
                                        <p className="text-slate-500 text-sm">Up to 500 users</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 border border-amber-200">
                                        <h5 className="font-bold text-slate-900">Enterprise</h5>
                                        <p className="text-amber-600 font-bold">Custom Pricing</p>
                                        <p className="text-slate-500 text-sm">Unlimited users</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">5. DATA SECURITY</h3>
                            <p className="text-slate-600 mb-6">
                                We implement industry-standard security measures including:
                            </p>
                            <ul className="space-y-2 text-slate-600 mb-6">
                                <li className="flex items-center gap-2">
                                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                                    <span>256-bit SSL encryption for all data transmission</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                                    <span>Regular security audits and vulnerability assessments</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                                    <span>Automated daily backups with 30-day retention</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                                    <span>Role-based access control (RBAC)</span>
                                </li>
                            </ul>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">6. YOUR RIGHTS</h3>
                            <ul className="space-y-2 text-slate-600 mb-6">
                                <li className="flex items-center gap-2">
                                    <Icon icon="solar:check-circle-bold" className="text-amber-500" />
                                    <span>Access and receive a copy of your personal data</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon icon="solar:check-circle-bold" className="text-amber-500" />
                                    <span>Rectify inaccurate or incomplete data</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon icon="solar:check-circle-bold" className="text-amber-500" />
                                    <span>Request deletion of your personal data</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon icon="solar:check-circle-bold" className="text-amber-500" />
                                    <span>Object to or restrict processing of your data</span>
                                </li>
                            </ul>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">7. CONTACT US</h3>
                            <div className="bg-amber-50 rounded-lg p-6">
                                <p className="text-slate-600 mb-2"><strong>Pioneer Afriikanet Technologies Ltd</strong></p>
                                <p className="text-slate-600 mb-2">Nairobi, Kenya</p>
                                <p className="text-slate-600 mb-2">Phone: 0717431488</p>
                                <p className="text-slate-600">Email: info@afriikanet.co.ke</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
