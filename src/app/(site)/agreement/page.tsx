import { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";

export const metadata: Metadata = {
    title: "Service Agreement - Afriikanet",
    description: "Afriikanet Service Agreement - Pioneer Afriikanet Technologies Ltd",
};

export default function AgreementPage() {
    return (
        <>
            {/* Header Section */}
            <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Service Agreement</h1>
                    <p className="text-xl text-amber-400">Terms and conditions for using Afriikanet ISP Billing System</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 mb-8 border border-amber-200">
                        <div className="flex items-center gap-4">
                            <div className="bg-amber-100 p-3 rounded-full">
                                <Icon icon="solar:document-text-bold" className="text-amber-600 text-2xl" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">Pioneer Afriikanet Technologies Ltd</h2>
                                <p className="text-slate-600">Afriikanet ISP Billing System - Service Agreement</p>
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
                            <p className="text-slate-600 mb-6">
                                All payments are due in advance. Payment can be made via M-Pesa, bank transfer, or other accepted payment methods. 
                                Prices are subject to change with 30 days notice. Services may be suspended for non-payment.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">5. SUPPORT SERVICES</h3>
                            <p className="text-slate-600 mb-6">
                                Technical support is provided via email, phone, and remote assistance. Support hours are 24/7 for Enterprise customers, 
                                and business hours for Starter and Professional plans.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">6. DATA PRIVACY</h3>
                            <p className="text-slate-600 mb-6">
                                The Company is committed to protecting your data privacy. All customer data is stored securely and will not be shared 
                                with third parties except as required by law. Please refer to our Privacy Policy for more details.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">7. LIMITATION OF LIABILITY</h3>
                            <p className="text-slate-600 mb-6">
                                The Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss 
                                of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">8. TERMINATION</h3>
                            <p className="text-slate-600 mb-6">
                                Either party may terminate this Agreement with 30 days written notice. Upon termination, you will have access to your 
                                data for 30 days to export it. After that period, data will be permanently deleted.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">9. CONTACT INFORMATION</h3>
                            <div className="bg-amber-50 rounded-lg p-6">
                                <p className="text-slate-600 mb-2"><strong>Pioneer Afriikanet Technologies Ltd</strong></p>
                                <p className="text-slate-600 mb-2">Nairobi, Kenya</p>
                                <p className="text-slate-600 mb-2">Phone: 0717431488</p>
                                <p className="text-slate-600">Email: info@afriikanet.co.ke</p>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all"
                            >
                                <Icon icon="solar:mail-bold" />
                                Contact Us
                            </Link>
                            <Link 
                                href="/contract"
                                className="inline-flex items-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-lg font-semibold border border-amber-200 hover:bg-amber-50 transition-all"
                            >
                                <Icon icon="solar:file-contract-bold" />
                                View Service Contract
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
