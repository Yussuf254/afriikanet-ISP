import { Metadata } from "next";
import ContactForm from "./ContactForm";
import HeroSub from "@/components/SharedComponent/HeroSub";

export const metadata: Metadata = {
    title: "Contact Us - Afriikanet",
    description: "Get in touch with Afriikanet for your ISP billing needs.",
};

export default function ContactPage() {
    return (
        <>
            <HeroSub />
            <ContactForm />
        </>
    );
}
