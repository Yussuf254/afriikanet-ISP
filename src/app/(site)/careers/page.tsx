"use client";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const positions = [
    {
        title: "Software Developer",
        department: "Engineering",
        location: "Nairobi, Kenya",
        type: "Full-time",
        description: "Build and maintain our ISP billing solutions."
    },
    {
        title: "Customer Success Manager",
        department: "Customer Success",
        location: "Nairobi, Kenya",
        type: "Full-time",
        description: "Help our customers get the most out of Afriikanet."
    },
    {
        title: "Sales Representative",
        department: "Sales",
        location: "Nairobi, Kenya",
        type: "Full-time",
        description: "Drive growth by bringing our solutions to new ISPs."
    },
    {
        title: "Technical Support Engineer",
        department: "Support",
        location: "Nairobi, Kenya",
        type: "Full-time",
        description: "Provide exceptional support to our customers."
    }
];

export default function CareersPage() {
    const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleApply = (positionTitle: string) => {
        setSelectedPosition(positionTitle);
        setShowModal(true);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            // Validate file type
            const allowedTypes = ['.pdf', '.doc', '.docx'];
            const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
            
            if (!allowedTypes.includes(fileExtension)) {
                alert('Please upload a PDF, DOC, or DOCX file');
                return;
            }
            
            // Validate file size (5MB max)
            if (file.size > 5 * 1024 * 1024) {
                alert('File size must be less than 5MB');
                return;
            }
            
            setResumeFile(file);
        }
    };

    return (
        <>
            {/* Header Section */}
            <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Careers</h1>
                    <p className="text-xl text-amber-400">Join our team and make a difference</p>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Join Our Team</h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            We're always looking for talented individuals to join our mission of transforming ISP billing across Africa.
                        </p>
                    </div>
                    
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Open Positions</h3>
                        <div className="grid grid-cols-1 gap-6">
                            {positions.map((position, index) => (
                                <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900">{position.title}</h4>
                                            <p className="text-slate-600 mt-1">{position.description}</p>
                                            <div className="flex gap-4 mt-3">
                                                <span className="inline-flex items-center gap-1 text-sm text-slate-500">
                                                    <Icon icon="solar:buildings-2-bold" />
                                                    {position.department}
                                                </span>
                                                <span className="inline-flex items-center gap-1 text-sm text-slate-500">
                                                    <Icon icon="solar:marker-bold" />
                                                    {position.location}
                                                </span>
                                                <span className="inline-flex items-center gap-1 text-sm text-slate-500">
                                                    <Icon icon="solar:clock-circle-bold" />
                                                    {position.type}
                                                </span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleApply(position.title)}
                                            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all whitespace-nowrap"
                                        >
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Why Work With Us?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-2">Competitive Compensation</h4>
                                <p className="text-white/80">We offer attractive salaries and benefits packages.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Growth Opportunities</h4>
                                <p className="text-white/80">Clear career paths and professional development.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Work-Life Balance</h4>
                                <p className="text-white/80">Flexible working arrangements and generous leave.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Impactful Work</h4>
                                <p className="text-white/80">Help ISPs across Africa transform their operations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-amber-200">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-slate-900">Job Application</h2>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="text-slate-400 hover:text-slate-600"
                                >
                                    <Icon icon="solar:close-circle-bold" className="text-2xl" />
                                </button>
                            </div>
                            <p className="text-amber-600 font-semibold mt-2">Position: {selectedPosition}</p>
                        </div>
                        <form className="p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                        placeholder="City, Country"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">LinkedIn Profile</label>
                                <input
                                    type="url"
                                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                    placeholder="https://linkedin.com/in/yourprofile"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Resume/CV</label>
                                <div className="border-2 border-dashed border-amber-200 rounded-lg p-6 text-center relative">
                                    <Icon icon="solar:upload-bold" className="text-3xl text-amber-500 mx-auto mb-2" />
                                    {resumeFile ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <Icon icon="solar:file-bold" className="text-xl text-green-500" />
                                            <span className="text-green-600 font-medium">{resumeFile.name}</span>
                                            <button 
                                                type="button" 
                                                onClick={() => setResumeFile(null)}
                                                className="text-red-500 hover:text-red-600"
                                            >
                                                <Icon icon="solar:close-circle-bold" className="text-xl" />
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <p className="text-slate-600 mb-2">Drag and drop your resume here, or click to browse</p>
                                            <input 
                                                type="file" 
                                                id="resume-upload"
                                                name="resume"
                                                className="hidden" 
                                                accept=".pdf,.doc,.docx"
                                                onChange={handleFileChange}
                                            />
                                            <label htmlFor="resume-upload" className="text-amber-600 font-semibold hover:text-amber-700 cursor-pointer">
                                                Browse Files
                                            </label>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Cover Letter</label>
                                <textarea
                                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                    rows={4}
                                    placeholder="Tell us why you're a good fit for this position..."
                                ></textarea>
                            </div>
                            <div className="flex gap-4 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 px-6 py-3 border border-amber-200 text-slate-700 rounded-lg font-semibold hover:bg-amber-50 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all"
                                >
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
