import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services - Afriikanet",
    description: "Explore our comprehensive ISP billing and management services.",
};

export default function ServicesPage() {
    return (
        <>
            {/* Header Section */}
            <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
                    <p className="text-xl text-amber-400">Comprehensive solutions for ISPs across Africa</p>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto text-center mb-12">
                        Afriikanet provides end-to-end billing solutions for Internet Service Providers, helping you manage your customers, invoices, and network efficiently.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">ISP Billing Software</h3>
                            <p className="text-slate-600 mb-4">Complete billing solution with invoicing, payment tracking, and customer management built specifically for ISPs.</p>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Automated invoicing</li>
                                <li>• Multi-payment gateway integration</li>
                                <li>• Flexible billing cycles</li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Customer Management</h3>
                            <p className="text-slate-600 mb-4">Powerful customer relationship tools to help you manage your subscribers effectively.</p>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Customer portal self-service</li>
                                <li>• Usage monitoring</li>
                                <li>• Service plan management</li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Analytics & Reports</h3>
                            <p className="text-slate-600 mb-4">Real-time insights into your business performance with comprehensive reporting.</p>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Revenue analytics</li>
                                <li>• Customer churn analysis</li>
                                <li>• Custom reports</li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Network Integration</h3>
                            <p className="text-slate-600 mb-4">Seamless integration with popular routing platforms and network equipment.</p>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Mikrotik integration</li>
                                <li>• Ubiquiti support</li>
                                <li>• Custom API access</li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">24/7 Technical Support</h3>
                            <p className="text-slate-600 mb-4">Round-the-clock technical assistance to keep your operations running smoothly.</p>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Phone & email support</li>
                                <li>• Remote troubleshooting</li>
                                <li>• Priority response time</li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Training & Onboarding</h3>
                            <p className="text-slate-600 mb-4">Comprehensive training programs to help your team get the most out of our solutions.</p>
                            <ul className="space-y-2 text-slate-600">
                                <li>• On-site training</li>
                                <li>• Online tutorials</li>
                                <li>• Documentation access</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
