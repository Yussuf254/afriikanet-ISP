import { Introduction } from "@/components/Documentation/Introduction";
import { PackageVersions } from "@/components/Documentation/PackageVersions";
import { PackageStructure } from "@/components/Documentation/PackageStructure";
import { QuickStart } from "@/components/Documentation/QuickStart";
import { Configuration } from "@/components/Documentation/Configuration";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Documentation - Afriikanet ISP Billing System",
    description: "Complete documentation for Afriikanet ISP Billing System by Pioneer Afriikanet Technologies Ltd",
};

export default function Page() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-12 md:py-16 pt-24 md:pt-28">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">Documentation</h1>
                    <p className="text-base md:text-xl text-amber-400">Everything you need to know about Afriikanet ISP Billing System</p>
                </div>
            </section>

            {/* Content Sections */}
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 py-8 md:py-12">
                <Introduction />
                <PackageVersions />
                <PackageStructure />
                <QuickStart />
                <Configuration />
            </div>
        </div>
    );
}
