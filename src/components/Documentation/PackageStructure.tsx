"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

export const PackageStructure = () => {
  return (
    <div id="userguide" className="md:scroll-m-[130px] scroll-m-28">
      <h3 className="text-2xl font-semibold mt-8 text-slate-900">
        Package Structure
      </h3>
      
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

      {/* How to Register */}
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

      {/* Key Features */}
      <div className="mt-12">
        <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Icon icon="solar:star-bold" className="text-amber-600" />
          Key Features
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-amber-200">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <Icon icon="solar:bill-list-bold" className="text-amber-600 text-xl" />
              </div>
              <div>
                <h5 className="font-semibold text-slate-900">Automated Billing</h5>
                <p className="text-slate-600 text-sm mt-1">Generate invoices automatically, send payment reminders, and track payments seamlessly.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-amber-200">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Icon icon="solar:users-group-two-rounded-bold" className="text-orange-600 text-xl" />
              </div>
              <div>
                <h5 className="font-semibold text-slate-900">Customer Management</h5>
                <p className="text-slate-600 text-sm mt-1">Track customers, monitor usage, and provide excellent support.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-amber-200">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <Icon icon="solar:chart-bold" className="text-amber-600 text-xl" />
              </div>
              <div>
                <h5 className="font-semibold text-slate-900">Analytics & Reports</h5>
                <p className="text-slate-600 text-sm mt-1">Real-time dashboards showing revenue, growth, and customer metrics.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-amber-200">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Icon icon="solar:headset-calling-bold" className="text-orange-600 text-xl" />
              </div>
              <div>
                <h5 className="font-semibold text-slate-900">24/7 Support</h5>
                <p className="text-slate-600 text-sm mt-1">Dedicated support team ready to help you anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="mt-12">
        <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Icon icon="solar:tag-price-bold" className="text-amber-600" />
          Pricing Plans
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-amber-200">
            <h5 className="font-bold text-slate-900 text-lg">Starter</h5>
            <p className="text-amber-600 text-2xl font-bold mt-2">KSh 1,000<span className="text-slate-500 text-sm font-normal">/month</span></p>
            <ul className="mt-4 space-y-2 text-slate-600 text-sm">
              <li className="flex items-center gap-2"><Icon icon="solar:check-circle-bold" className="text-green-500" /> Up to 100 users</li>
              <li className="flex items-center gap-2"><Icon icon="solar:check-circle-bold" className="text-green-500" /> Basic billing</li>
              <li className="flex items-center gap-2"><Icon icon="solar:check-circle-bold" className="text-green-500" /> Email support</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl p-6 text-white relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white text-amber-600 px-3 py-1 rounded-full text-sm font-semibold">Most Popular</div>
            <h5 className="font-bold text-lg">Professional</h5>
            <p className="text-2xl font-bold mt-2">KSh 2,500<span className="text-white/80 text-sm font-normal">/month</span></p>
            <ul className="mt-4 space-y-2 text-white/90 text-sm">
              <li className="flex items-center gap-2"><Icon icon="solar:check-circle-bold" /> Up to 500 users</li>
              <li className="flex items-center gap-2"><Icon icon="solar:check-circle-bold" /> Advanced analytics</li>
              <li className="flex items-center gap-2"><Icon icon="solar:check-circle-bold" /> Priority support</li>
              <li className="flex items-center gap-2"><Icon icon="solar:check-circle-bold" /> API access</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-amber-200">
            <h5 className="font-bold text-slate-900 text-lg">Enterprise</h5>
            <p className="text-amber-600 text-2xl font-bold mt-2">Custom</p>
            <ul className="mt-4 space-y-2 text-slate-600 text-sm">
              <li className="flex items-center gap-2"><Icon icon="solar:check-circle-bold" className="text-green-500" /> Unlimited users</li>
              <li className="flex items-center gap-2"><Icon icon="solar:check-circle-bold" className="text-green-500" /> Custom integrations</li>
              <li className="flex items-center gap-2"><Icon icon="solar:check-circle-bold" className="text-green-500" /> 24/7 dedicated support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-12">
        <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Icon icon="solar:link-bold" className="text-amber-600" />
          Quick Links
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link 
            href="/agreement"
            className="bg-white rounded-xl p-6 border border-amber-200 hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-4"
          >
            <div className="bg-amber-100 p-4 rounded-lg">
              <Icon icon="solar:document-text-bold" className="text-amber-600 text-2xl" />
            </div>
            <div>
              <h5 className="font-semibold text-slate-900">Service Agreement</h5>
              <p className="text-slate-500 text-sm">View our terms and conditions</p>
            </div>
            <Icon icon="solar:arrow-right-bold" className="ml-auto text-amber-600" />
          </Link>
          
          <Link 
            href="/contract"
            className="bg-white rounded-xl p-6 border border-amber-200 hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-4"
          >
            <div className="bg-orange-100 p-4 rounded-lg">
              <Icon icon="solar:file-contract-bold" className="text-orange-600 text-2xl" />
            </div>
            <div>
              <h5 className="font-semibold text-slate-900">Service Contract</h5>
              <p className="text-slate-500 text-sm">View SLA and support terms</p>
            </div>
            <Icon icon="solar:arrow-right-bold" className="ml-auto text-amber-600" />
          </Link>
          
          <Link 
            href="/contact"
            className="bg-white rounded-xl p-6 border border-amber-200 hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-4"
          >
            <div className="bg-amber-100 p-4 rounded-lg">
              <Icon icon="solar:mail-bold" className="text-amber-600 text-2xl" />
            </div>
            <div>
              <h5 className="font-semibold text-slate-900">Contact Us</h5>
              <p className="text-slate-500 text-sm">Get in touch with our team</p>
            </div>
            <Icon icon="solar:arrow-right-bold" className="ml-auto text-amber-600" />
          </Link>
          
          <Link 
            href="/about"
            className="bg-white rounded-xl p-6 border border-amber-200 hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-4"
          >
            <div className="bg-orange-100 p-4 rounded-lg">
              <Icon icon="solar:info-circle-bold" className="text-orange-600 text-2xl" />
            </div>
            <div>
              <h5 className="font-semibold text-slate-900">About Us</h5>
              <p className="text-slate-500 text-sm">Learn more about Afriikanet</p>
            </div>
            <Icon icon="solar:arrow-right-bold" className="ml-auto text-amber-600" />
          </Link>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-12 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 text-white">
        <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Icon icon="solar:phone-bold" className="text-amber-400" />
          Need Help?
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-amber-500/20 p-3 rounded-lg">
              <Icon icon="solar:phone-bold" className="text-amber-400 text-xl" />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Call Us</p>
              <p className="font-semibold">0717431488</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-amber-500/20 p-3 rounded-lg">
              <Icon icon="solar:mail-bold" className="text-amber-400 text-xl" />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Email Us</p>
              <p className="font-semibold">info@afriikanet.co.ke</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-amber-500/20 p-3 rounded-lg">
              <Icon icon="solar:brand-google-maps-bold" className="text-amber-400 text-xl" />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Visit Us</p>
              <p className="font-semibold">Nairobi, Kenya</p>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-center text-slate-400 text-sm">© 2025 Pioneer Afriikanet Technologies Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};
