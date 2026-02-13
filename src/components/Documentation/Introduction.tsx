"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { DocNavigation } from "./DocNavigation";

export const Introduction = () => {
  const [docNavbarOpen, setDocNavbarOpen] = useState(false);

  return (
    <>
      <div id="overview" className="md:scroll-m-[180px] scroll-m-28">
        {docNavbarOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
            onClick={() => setDocNavbarOpen(false)}
          />
        )}

        <div className="flex items-center justify-between">
          <h3 className="text-2xl mt-4 font-semibold mb-6 text-slate-900">
            Afriikanet Documentation
          </h3>
          <button onClick={() => setDocNavbarOpen(true)} className="p-0">
            <Icon icon="gg:menu-right" className="text-3xl lg:hidden block text-slate-600" />
          </button>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 mb-8 border border-amber-200">
          <h4 className="text-xl font-bold text-slate-900 mb-4">Welcome to Afriikanet Documentation</h4>
          <p className="text-slate-600 mb-4">
            Afriikanet is a comprehensive ISP Billing System developed by <strong>Pioneer Afriikanet Technologies Ltd</strong>. 
            This documentation will guide you through setting up and using our billing solution for your Internet Service Provider business.
          </p>
          <p className="text-slate-600">
            Our system is designed specifically for African ISPs, with support for local payment methods, 
            multi-language interface, and features tailored to the African market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-100">
            <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Icon icon="solar:box-bold" className="text-amber-600 text-2xl" />
            </div>
            <h5 className="text-lg font-bold text-slate-900 mb-2">Package Versions</h5>
            <p className="text-slate-600 text-sm">View current versions of all project dependencies and packages.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-100">
            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Icon icon="solar:folder-bold" className="text-orange-600 text-2xl" />
            </div>
            <h5 className="text-lg font-bold text-slate-900 mb-2">Package Structure</h5>
            <p className="text-slate-600 text-sm">Understand the project structure and organization.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-100">
            <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Icon icon="solar:rocket-bold" className="text-amber-600 text-2xl" />
            </div>
            <h5 className="text-lg font-bold text-slate-900 mb-2">Quick Start</h5>
            <p className="text-slate-600 text-sm">Get up and running with Afriikanet in minutes.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-100">
            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Icon icon="solar:settings-bold" className="text-orange-600 text-2xl" />
            </div>
            <h5 className="text-lg font-bold text-slate-900 mb-2">Project Configuration</h5>
            <p className="text-slate-600 text-sm">Learn how to configure and customize your system.</p>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Pricing Plans</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg border border-amber-100 overflow-hidden">
              <div className="bg-slate-50 p-4 text-center">
                <h4 className="text-xl font-bold text-slate-900">Starter</h4>
                <p className="text-amber-600 text-3xl font-bold mt-2">KSh 1,000<span className="text-slate-500 text-sm font-normal">/month</span></p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                    <span>Up to 100 users</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                    <span>Basic billing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                    <span>Email support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                    <span>99.0% SLA</span>
                  </li>
                </ul>
                <a href="/contact" className="block mt-6 text-center bg-amber-500 text-white py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
                  Get Started
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg overflow-hidden transform md:-translate-y-4">
              <div className="bg-white/10 p-4 text-center">
                <h4 className="text-xl font-bold text-white">Professional</h4>
                <p className="text-white/80 text-3xl font-bold mt-2">KSh 2,500<span className="text-white/60 text-sm font-normal">/month</span></p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" />
                    <span>Up to 500 users</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" />
                    <span>99.5% SLA</span>
                  </li>
                </ul>
                <a href="/contact" className="block mt-6 text-center bg-white text-amber-600 py-2 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                  Get Started
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-amber-100 overflow-hidden">
              <div className="bg-slate-50 p-4 text-center">
                <h4 className="text-xl font-bold text-slate-900">Enterprise</h4>
                <p className="text-amber-600 text-3xl font-bold mt-2">Custom<span className="text-slate-500 text-sm font-normal">/month</span></p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                    <span>Unlimited users</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                    <span>24/7 dedicated support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                    <span>99.9% SLA</span>
                  </li>
                </ul>
                <a href="/contact" className="block mt-6 text-center bg-amber-500 text-white py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-xl font-bold text-slate-900 mb-4">System Requirements</h4>
          <div className="bg-white rounded-xl p-6 shadow border border-amber-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-slate-900 mb-3">Server Requirements</h5>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                    <span>Linux Server (Ubuntu 20.04+ recommended)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                    <span>Node.js 18.x or higher</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                    <span>PostgreSQL 14+ or MySQL 8+</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                    <span>4GB RAM minimum (8GB recommended)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                    <span>50GB storage minimum</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-slate-900 mb-3">Browser Support</h5>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                    <span>Chrome (latest 2 versions)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                    <span>Firefox (latest 2 versions)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                    <span>Safari (latest 2 versions)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" className="text-green-500" />
                    <span>Edge (latest 2 versions)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-amber-50 rounded-xl p-6 border border-amber-200">
          <h4 className="text-lg font-bold text-slate-900 mb-3">Need Help?</h4>
          <p className="text-slate-600 mb-4">
            If you encounter any issues or need assistance, our support team is here to help.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all">
              <Icon icon="solar:mail-bold" />
              Contact Support
            </a>
            <a href="/careers" className="inline-flex items-center gap-2 bg-white text-slate-700 px-4 py-2 rounded-lg text-sm font-medium border border-amber-200 hover:bg-amber-50 transition-all">
              <Icon icon="solar:phone-bold" />
              Call: 0717431488
            </a>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden block fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${docNavbarOpen ? "translate-x-0" : "translate-x-full"} z-50`}
      >
        <div className="flex items-center justify-between p-4 border-b border-amber-100">
          <h2 className="text-lg font-bold text-slate-900">
            Docs Menu
          </h2>
          <button
            onClick={() => setDocNavbarOpen(false)}
            aria-label="Close mobile menu"
            className="p-2 rounded-lg hover:bg-amber-50"
          >
            <Icon icon="heroicons:x-mark" className="text-slate-700 w-6 h-6" />
          </button>
        </div>
        <nav className="px-4">
          <DocNavigation />
        </nav>
      </div>
    </>
  );
};
