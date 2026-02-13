"use client";
import { Icon } from "@iconify/react";

export const QuickStart = () => {
  return (
    <div className="pb-10 md:scroll-m-[180px] scroll-m-28" id="quickstart">
      <h3 className="text-2xl font-semibold text-slate-900 mt-8">Quick Start Guide</h3>
      
      {/* Getting Started */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 mt-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-amber-100 p-3 rounded-lg">
            <Icon icon="solar:rocket-bold" className="text-amber-600 text-2xl" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900">Getting Started with Afriikanet</h4>
            <p className="text-slate-600">Your complete guide to our ISP Billing System</p>
          </div>
        </div>
        <p className="text-slate-600">
          Welcome to Afriikanet, a product of <strong>Pioneer Afriikanet Technologies Ltd</strong>. 
          Our comprehensive ISP billing solution helps you manage your internet service business efficiently.
        </p>
      </div>

      {/* Registration Steps */}
      <div className="mt-8">
        <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Icon icon="solar:user-add-bold" className="text-amber-600" />
          How to Register
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-amber-200 shadow-lg">
            <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <span className="text-amber-600 font-bold text-lg">1</span>
            </div>
            <h5 className="font-semibold text-slate-900 mb-2">Visit Our Website</h5>
            <p className="text-slate-600 text-sm">Go to <strong>afriikanet.co.ke</strong> and click "Get Started" or "Contact Us"</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-amber-200 shadow-lg">
            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <span className="text-orange-600 font-bold text-lg">2</span>
            </div>
            <h5 className="font-semibold text-slate-900 mb-2">Fill Registration Form</h5>
            <p className="text-slate-600 text-sm">Complete the contact form with your ISP details and requirements</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-amber-200 shadow-lg">
            <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <span className="text-amber-600 font-bold text-lg">3</span>
            </div>
            <h5 className="font-semibold text-slate-900 mb-2">Our Team Contacts You</h5>
            <p className="text-slate-600 text-sm">We'll reach out within 24 hours to discuss your needs</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-amber-200 shadow-lg">
            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <span className="text-orange-600 font-bold text-lg">4</span>
            </div>
            <h5 className="font-semibold text-slate-900 mb-2">Choose Your Plan</h5>
            <p className="text-slate-600 text-sm">Select Starter, Professional, or Enterprise based on your user count</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-amber-200 shadow-lg">
            <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <span className="text-amber-600 font-bold text-lg">5</span>
            </div>
            <h5 className="font-semibold text-slate-900 mb-2">Review Terms</h5>
            <p className="text-slate-600 text-sm">Review our Service Agreement and Contract terms</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-amber-200 shadow-lg">
            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <span className="text-orange-600 font-bold text-lg">6</span>
            </div>
            <h5 className="font-semibold text-slate-900 mb-2">Go Live!</h5>
            <p className="text-slate-600 text-sm">We set up your account and you're ready to manage your ISP</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 text-white">
        <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Icon icon="solar:phone-bold" className="text-amber-400" />
          Need Help?
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-amber-500/20 p-2 rounded-lg">
              <Icon icon="solar:phone-bold" className="text-amber-400" />
            </div>
            <div>
              <p className="text-slate-400 text-xs">Call Us</p>
              <p className="font-semibold">0717431488</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-amber-500/20 p-2 rounded-lg">
              <Icon icon="solar:mail-bold" className="text-amber-400" />
            </div>
            <div>
              <p className="text-slate-400 text-xs">Email Us</p>
              <p className="font-semibold">info@afriikanet.co.ke</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-amber-500/20 p-2 rounded-lg">
              <Icon icon="solar:brand-google-maps-bold" className="text-amber-400" />
            </div>
            <div>
              <p className="text-slate-400 text-xs">Visit Us</p>
              <p className="font-semibold">Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
