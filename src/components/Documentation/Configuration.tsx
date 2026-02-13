"use client";
import { Icon } from "@iconify/react/dist/iconify.js";

export const Configuration = () => {
  return (
    <>
      <div className="pb-10 md:scroll-m-[180px] scroll-m-28" id="configuration">
        <h3 className="text-2xl font-semibold mt-4 text-slate-900">Project Configuration</h3>
        <p className="text-slate-600 mt-2">Learn how to configure and customize your Afriikanet ISP Billing System.</p>

        {/* Color Theme */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 mt-6">
          <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Icon icon="solar:palette-bold" className="text-amber-600" />
            Color Theme
          </h4>
          <p className="text-slate-600 mb-4">Afriikanet uses a professional amber and orange color scheme that represents African warmth and innovation.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-amber-500 p-4 rounded-lg text-white text-center">
              <p className="font-semibold">Amber</p>
              <p className="text-sm opacity-80">Primary</p>
            </div>
            <div className="bg-orange-500 p-4 rounded-lg text-white text-center">
              <p className="font-semibold">Orange</p>
              <p className="text-sm opacity-80">Secondary</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg text-white text-center">
              <p className="font-semibold">Slate</p>
              <p className="text-sm opacity-80">Dark</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-slate-900 text-center border border-slate-200">
              <p className="font-semibold">White</p>
              <p className="text-sm opacity-60">Light</p>
            </div>
          </div>
        </div>

        {/* Billing Configuration */}
        <div className="bg-white rounded-xl p-6 border border-amber-200 shadow-lg mt-6">
          <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Icon icon="solar:bill-list-bold" className="text-amber-600" />
            Billing Configuration
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-lg p-4">
              <h5 className="font-semibold text-slate-900 mb-2">Invoice Settings</h5>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center gap-2">
                  <Icon icon="solar:check-circle-bold" className="text-green-500" />
                  <span>Auto-generate invoice numbers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon icon="solar:check-circle-bold" className="text-green-500" />
                  <span>Customizable invoice templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon icon="solar:check-circle-bold" className="text-green-500" />
                  <span>Multi-currency support (KSh, USD)</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <h5 className="font-semibold text-slate-900 mb-2">Payment Methods</h5>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center gap-2">
                  <Icon icon="solar:check-circle-bold" className="text-green-500" />
                  <span>M-Pesa integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon icon="solar:check-circle-bold" className="text-green-500" />
                  <span>Bank transfer</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon icon="solar:check-circle-bold" className="text-green-500" />
                  <span>Cash payments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Customer Management */}
        <div className="bg-white rounded-xl p-6 border border-amber-200 shadow-lg mt-6">
          <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Icon icon="solar:users-group-two-rounded-bold" className="text-amber-600" />
            Customer Management
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 rounded-lg p-4">
              <h5 className="font-semibold text-slate-900 mb-2">Customer Profiles</h5>
              <p className="text-slate-600 text-sm">Store customer details, contact information, and service history.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <h5 className="font-semibold text-slate-900 mb-2">Service Plans</h5>
              <p className="text-slate-600 text-sm">Create and manage internet packages with different speeds and pricing.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <h5 className="font-semibold text-slate-900 mb-2">Usage Tracking</h5>
              <p className="text-slate-600 text-sm">Monitor data usage, bandwidth consumption, and connection time.</p>
            </div>
          </div>
        </div>

        {/* Support Settings */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 text-white mt-6">
          <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Icon icon="solar:headset-calling-bold" className="text-amber-400" />
            Support Configuration
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold mb-2">Ticket System</h5>
              <p className="text-white/70 text-sm">Track and resolve customer support requests.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold mb-2">Knowledge Base</h5>
              <p className="text-white/70 text-sm">Provide self-service documentation for customers.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold mb-2">SLA Management</h5>
              <p className="text-white/70 text-sm">Configure response time targets based on plan.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
