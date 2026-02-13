"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    companyName: string;
    message: string;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    message?: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        let isValid = true;

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
            isValid = false;
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
            isValid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
            isValid = false;
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
            isValid = false;
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const subject = `Contact Form Submission from ${formData.firstName} ${formData.lastName}`;
            const body = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.companyName || "N/A"}

Message:
${formData.message}
            `.trim();

            const mailtoUrl = `mailto:info@afriikanet.co.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoUrl;

            setIsSuccess(true);
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                companyName: "",
                message: "",
            });

            setTimeout(() => setIsSuccess(false), 5000);
        } catch (error) {
            console.error("Error sending email:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Get In Touch</h2>
                        <p className="text-slate-600 text-lg mb-8">
                            Have questions about our ISP billing solutions? We're here to help. Reach out to us through any of the channels below or fill out the contact form.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-amber-100 p-3 rounded-lg">
                                    <Icon icon="solar:phone-bold" className="text-amber-600 text-2xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Phone</h3>
                                    <p className="text-slate-600">0717431488</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-amber-100 p-3 rounded-lg">
                                    <Icon icon="tabler:mail" className="text-amber-600 text-2xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Email</h3>
                                    <p className="text-slate-600">info@afriikanet.co.ke</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-amber-100 p-3 rounded-lg">
                                    <Icon icon="tabler:map-pin" className="text-amber-600 text-2xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Location</h3>
                                    <p className="text-slate-600">Nairobi, Kenya</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-amber-100 p-3 rounded-lg">
                                    <Icon icon="solar:clock-circle-bold" className="text-amber-600 text-2xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Business Hours</h3>
                                    <p className="text-slate-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                                    <p className="text-slate-600">Saturday: 9:00 AM - 1:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border-2 border-amber-200 shadow-lg ring-4 ring-amber-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
                        
                        {isSuccess && (
                            <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                                <div className="flex items-center gap-2 text-green-700">
                                    <Icon icon="solar:check-circle-bold" className="text-xl" />
                                    <span className="font-medium">Message sent successfully!</span>
                                </div>
                            </div>
                        )}
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 pl-10 rounded-lg border ${errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-amber-500'} focus:outline-none focus:ring-2 focus:border-transparent`}
                                            placeholder="John"
                                        />
                                        <Icon icon="solar:user-bold" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-lg" />
                                    </div>
                                    {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 pl-10 rounded-lg border ${errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-amber-500'} focus:outline-none focus:ring-2 focus:border-transparent`}
                                            placeholder="Doe"
                                        />
                                        <Icon icon="solar:user-bold" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-lg" />
                                    </div>
                                    {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                                <div className="relative">
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 pl-10 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-amber-500'} focus:outline-none focus:ring-2 focus:border-transparent`}
                                        placeholder="john@example.com"
                                    />
                                    <Icon icon="solar:mail-bold" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-lg" />
                                </div>
                                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Phone *</label>
                                <div className="relative">
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 pl-10 rounded-lg border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-amber-500'} focus:outline-none focus:ring-2 focus:border-transparent`}
                                        placeholder="0712345678"
                                    />
                                    <Icon icon="solar:phone-bold" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-lg" />
                                </div>
                                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 pl-10 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                        placeholder="Your ISP Company"
                                    />
                                    <Icon icon="solar:buildings-bold" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-lg" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                                <div className="relative">
                                    <textarea 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 pl-10 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-amber-500'} focus:outline-none focus:ring-2 focus:border-transparent h-32 resize-none`}
                                        placeholder="How can we help you?"
                                    ></textarea>
                                    <Icon icon="solar:chat-round-bold" className="absolute left-3 top-4 text-slate-400 text-lg" />
                                </div>
                                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                            </div>
                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Icon icon="solar:loader-bold" className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Icon icon="solar:paper-plane-bold" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
