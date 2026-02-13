import { Metadata } from "next";
import { Icon } from "@iconify/react";

export const metadata: Metadata = {
    title: "Terms of Service - Afriikanet",
    description: "Afriikanet Terms of Service - Pioneer Afriikanet Technologies Ltd",
};

export default function TermsPage() {
    return (
        <>
            {/* Header Section */}
            <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
                    <p className="text-xl text-amber-400">Terms and conditions for using Afriikanet services</p>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 mb-8 border border-orange-200">
                        <div className="flex items-center gap-4">
                            <div className="bg-orange-100 p-3 rounded-full">
                                <Icon icon="solar:document-text-bold" className="text-orange-600 text-2xl" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">Pioneer Afriikanet Technologies Ltd</h2>
                                <p className="text-slate-600">Afriikanet ISP Billing System - Terms of Service</p>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-slate max-w-none">
                        <div className="bg-white rounded-xl shadow-lg border border-amber-100 p-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">1. ACCEPTANCE OF TERMS</h3>
                            <p className="text-slate-600 mb-6">
                                By accessing and using the Afriikanet ISP Billing System ("the Software") provided by Pioneer Afriikanet Technologies Ltd ("the Company"), 
                                you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Software.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">2. LICENSE GRANT</h3>
                            <p className="text-slate-600 mb-6">
                                The Company grants you a non-exclusive, non-transferable license to use the Software subject to the terms and conditions 
                                set forth in this Agreement. This license is effective until terminated by you or the Company.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">3. SUBSCRIPTION PLANS</h3>
                            <div className="bg-slate-50 rounded-lg p-6 mb-6">
                                <h4 className="font-semibold text-slate-900 mb-3">Available Plans:</h4>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex items-center gap-2">
                                        <Icon icon="solar:check-circle-bold" className="text-green-500" />
                                        <span><strong>Starter:</strong> KSh 1,000/month - Up to 100 users</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Icon icon="solar:check-circle-bold" className="text-green-500" />
                                        <span><strong>Professional:</strong> KSh 2,500/month - Up to 500 users</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Icon icon="solar:check-circle-bold" className="text-green-500" />
                                        <span><strong>Enterprise:</strong> Custom pricing - Unlimited users</span>
                                    </li>
                                </ul>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">4. PAYMENT TERMS</h3>
                            <div className="bg-amber-50 rounded-lg p-6 mb-6">
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex items-center gap-2">
                                        <Icon icon="solar:check-circle-bold" className="text-amber-500" />
                                        <span>All payments are due in advance</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Icon icon="solar:check-circle-bold" className="text-amber-500" />
                                        <span>Payment methods: M-Pesa, bank transfer</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Icon icon="solar:check-circle-bold" className="text-amber-500" />
                                        <span>Prices subject to change with 30 days notice</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Icon icon="solar:check-circle-bold" className="text-amber-500" />
                                        <span>Services may be suspended for non-payment</span>
                                    </li>
                                </ul>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">5. SERVICE AVAILABILITY</h3>
                            <div className="bg-slate-50 rounded-lg p-6 mb-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                    <div className="bg-white rounded-lg p-4 border border-amber-200">
                                        <p className="text-4xl font-bold text-amber-600">99.9%</p>
                                        <p className="text-slate-600 font-medium">Enterprise SLA</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 border border-amber-200">
                                        <p className="text-4xl font-bold text-orange-600">99.5%</p>
                                        <p className="text-slate-600 font-medium">Professional SLA</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 border border-amber-200">
                                        <p className="text-4xl font-bold text-amber-600">99.0%</p>
                                        <p className="text-slate-600 font-medium">Starter SLA</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 text-sm mt-4">
                                    Service availability calculated monthly, excluding scheduled maintenance (2:00 AM - 4:00 AM EAT).
                                </p>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">6. SUPPORT SERVICES</h3>
                            <div className="bg-amber-50 rounded-lg p-6 mb-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white rounded-lg p-4 border border-amber-200">
                                        <h5 className="font-semibold text-slate-900 mb-2">Enterprise</h5>
                                        <p className="text-slate-600">24/7 Support - 1 hour response</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 border border-amber-200">
                                        <h5 className="font-semibold text-slate-900 mb-2">Professional</h5>
                                        <p className="text-slate-600">Business Hours + Priority - 4 hour response</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 border border-amber-200">
                                        <h5 className="font-semibold text-slate-900 mb-2">Starter</h5>
                                        <p className="text-slate-600">Email Support - 8 hour response</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">7. DATA PRIVACY</h3>
                            <p className="text-slate-600 mb-6">
                                The Company is committed to protecting your data privacy. All customer data is stored securely and will not be shared 
                                with third parties except as required by law. We implement:
                            </p>
                            <ul className="space-y-2 text-slate-600 mb-6">
                                <li className="flex items-center gap-2">
                                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                                    <span>256-bit SSL encryption</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                                    <span>Daily backups with 30-day retention</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                                    <span>Role-based access control</span>
                                </li>
                            </ul>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">8. LIMITATION OF LIABILITY</h3>
                            <p className="text-slate-600 mb-6">
                                The Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss 
                                of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">9. TERMINATION</h3>
                            <p className="text-slate-600 mb-6">
                                Either party may terminate this Agreement with 30 days written notice. Upon termination, you will have access to your 
                                data for 30 days to export it. After that period, data will be permanently deleted.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">10. CONTACT INFORMATION</h3>
                            <div className="bg-orange-50 rounded-lg p-6">
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
