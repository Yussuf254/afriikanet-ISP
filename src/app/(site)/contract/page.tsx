import { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

export const metadata: Metadata = {
    title: "Service Contract - Afriikanet",
    description: "Afriikanet Service Contract - Pioneer Afriikanet Technologies Ltd",
};

export default function ContractPage() {
    return (
        <>
            {/* Header Section */}
            <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Service Contract</h1>
                    <p className="text-xl text-amber-400">Service Level Agreement and Contract Terms</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 mb-8 border border-orange-200">
                        <div className="flex items-center gap-4">
                            <div className="bg-orange-100 p-3 rounded-full">
                                <Icon icon="solar:file-contract-bold" className="text-orange-600 text-2xl" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">Pioneer Afriikanet Technologies Ltd</h2>
                                <p className="text-slate-600">Afriikanet ISP Billing System - Service Contract</p>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-slate max-w-none">
                        <div className="bg-white rounded-xl shadow-lg border border-amber-100 p-8">
                            <div className="border-b-2 border-amber-200 pb-6 mb-6">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">SERVICE LEVEL AGREEMENT</h3>
                                <p className="text-slate-600">This Service Level Agreement ("SLA") is entered into between Pioneer Afriikanet Technologies Ltd ("Provider") and the Customer ("Client").</p>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">1. SERVICE DESCRIPTION</h3>
                            <p className="text-slate-600 mb-6">
                                The Provider shall deliver the Afriikanet ISP Billing System, a comprehensive billing and customer management solution for Internet Service Providers. 
                                Services include software access, updates, technical support, and maintenance.
                            </p>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">2. SERVICE AVAILABILITY</h3>
                            <div className="bg-amber-50 rounded-lg p-6 mb-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                    <div>
                                        <p className="text-4xl font-bold text-amber-600">99.9%</p>
                                        <p className="text-slate-600 font-medium">Enterprise SLA</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-orange-600">99.5%</p>
                                        <p className="text-slate-600 font-medium">Professional SLA</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-amber-600">99.0%</p>
                                        <p className="text-slate-600 font-medium">Starter SLA</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-slate-600 mb-6">
                                Service availability is calculated on a monthly basis, excluding scheduled maintenance windows (typically 2:00 AM - 4:00 AM EAT).
                            </p>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">3. SUPPORT RESPONSE TIMES</h3>
                            <div className="bg-slate-50 rounded-lg p-6 mb-6">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-amber-200">
                                            <th className="text-left py-3 px-4 text-slate-900 font-semibold">Priority</th>
                                            <th className="text-left py-3 px-4 text-slate-900 font-semibold">Description</th>
                                            <th className="text-left py-3 px-4 text-slate-900 font-semibold">Response Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-slate-100">
                                            <td className="py-3 px-4"><span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">Critical</span></td>
                                            <td className="py-3 px-4 text-slate-600">System down, no workarounds</td>
                                            <td className="py-3 px-4 text-slate-600">1 hour</td>
                                        </tr>
                                        <tr className="border-b border-slate-100">
                                            <td className="py-3 px-4"><span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">High</span></td>
                                            <td className="py-3 px-4 text-slate-600">Major functionality impaired</td>
                                            <td className="py-3 px-4 text-slate-600">4 hours</td>
                                        </tr>
                                        <tr className="border-b border-slate-100">
                                            <td className="py-3 px-4"><span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-sm font-medium">Medium</span></td>
                                            <td className="py-3 px-4 text-slate-600">Partial impairment</td>
                                            <td className="py-3 px-4 text-slate-600">8 hours</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4"><span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">Low</span></td>
                                            <td className="py-3 px-4 text-slate-600">General inquiries</td>
                                            <td className="py-3 px-4 text-slate-600">24 hours</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">4. MAINTENANCE AND UPDATES</h3>
                            <p className="text-slate-600 mb-6">
                                The Provider shall deliver regular software updates to improve functionality, security, and performance. 
                                Scheduled maintenance will be communicated at least 48 hours in advance. Emergency maintenance may be performed without notice when necessary for security or stability.
                            </p>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">5. DATA SECURITY</h3>
                            <p className="text-slate-600 mb-6">
                                The Provider implements industry-standard security measures including:
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

                            <h3 className="text-xl font-bold text-slate-900 mb-4">6. CONTRACT TERM</h3>
                            <p className="text-slate-600 mb-6">
                                This contract shall be effective for a period of twelve (12) months from the date of acceptance, 
                                and shall automatically renew for successive twelve (12) month periods unless either party provides 
                                written notice of termination at least thirty (30) days prior to the expiration of the current term.
                            </p>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">7. CONTACT INFORMATION</h3>
                            <div className="bg-amber-50 rounded-lg p-6 mb-6">
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
                                href="/agreement"
                                className="inline-flex items-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-lg font-semibold border border-amber-200 hover:bg-amber-50 transition-all"
                            >
                                <Icon icon="solar:document-text-bold" />
                                View Service Agreement
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
