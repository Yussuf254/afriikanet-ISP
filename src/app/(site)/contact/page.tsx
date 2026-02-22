import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
    title: "Contact Us - Afriikanet",
    description: "Get in touch with Afriikanet for your ISP billing needs.",
};

export default function ContactPage() {
    return (
        <>
            {/* Header Section */}
            <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-xl text-amber-400">We'd love to hear from you</p>
                </div>
            </section>
            <ContactForm />
        </>
    );
}
