import React from "react";
import Hero from "@/components/Home/Hero";
import { Metadata } from "next";
import { Icon } from "@iconify/react";
import dynamic from 'next/dynamic';

const Courses = dynamic(() => import("@/components/Home/Courses"), { ssr: false });
const Team = dynamic(() => import("@/components/Home/Mentor"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Home/Testimonials"), { ssr: false });
const Newsletter = dynamic(() => import("@/components/Home/Newsletter"), { ssr: false });
const OgulaChatbot = dynamic(() => import("@/components/Home/OgulaChatbot"), { ssr: false });
const AnimatedCounter = dynamic(() => import("@/components/Home/AnimatedCounter"), { ssr: false });

export const metadata: Metadata = {
  title: "Afriikanet - ISP Billing System",
  description: "Next-Gen ISP Billing System for African Internet Service Providers",
};

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Complete ISP Management Suite</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Everything you need to manage your Internet Service Provider business efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100 hover:ring-2 hover:ring-amber-500/50">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon icon="tabler:receipt" className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Billing & Invoicing</h3>
              <p className="text-slate-600">Automated billing with flexible plans, payment reminders, and seamless invoice generation.</p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100 hover:ring-2 hover:ring-amber-500/50">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon icon="tabler:users" className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Customer Portal</h3>
              <p className="text-slate-600">Self-service portal for customers to manage their accounts, view usage, and pay bills online.</p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100 hover:ring-2 hover:ring-amber-500/50">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon icon="tabler:chart-bar" className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Real-time Analytics</h3>
              <p className="text-slate-600">Comprehensive dashboards and reports to track revenue, customer growth, and network performance.</p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100 hover:ring-2 hover:ring-amber-500/50">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon icon="tabler:network" className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Network Integration</h3>
              <p className="text-slate-600">Seamless integration with Mikrotik, Ubiquiti, and other routers for automatic bandwidth management.</p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100 hover:ring-2 hover:ring-amber-500/50">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon icon="tabler:shield-check" className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">CRM System</h3>
              <p className="text-slate-600">Build lasting relationships with customers through our integrated customer relationship management tools.</p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100 hover:ring-2 hover:ring-amber-500/50">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon icon="tabler:ticket" className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Support Tickets</h3>
              <p className="text-slate-600">Built-in ticketing system to manage customer support requests and track resolution times.</p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100 hover:ring-2 hover:ring-amber-500/50">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon icon="tabler:headset" className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">24/7 Technical Support</h3>
              <p className="text-slate-600">Round-the-clock technical support to ensure your operations run smoothly without interruptions.</p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100 hover:ring-2 hover:ring-amber-500/50">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon icon="tabler:school" className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Training & Onboarding</h3>
              <p className="text-slate-600">Comprehensive training programs and onboarding sessions to help your team get up to speed quickly.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-slate-50 to-amber-50">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">Built for African ISPs</h2>
              <p className="text-lg text-slate-600 mb-8">
                Afriikanet is designed specifically for the African market, addressing the unique challenges ISPs face across the continent.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Icon icon="solar:check-circle-bold" className="text-amber-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Local Payment Methods</h4>
                    <p className="text-slate-600">Support for M-Pesa, bank transfers, and other popular African payment gateways.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Icon icon="solar:check-circle-bold" className="text-amber-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Low Bandwidth Optimized</h4>
                    <p className="text-slate-600">Works efficiently even in areas with limited internet connectivity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Icon icon="solar:check-circle-bold" className="text-amber-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Multi-language Support</h4>
                    <p className="text-slate-600">Interface available in English, Swahili, and other local languages.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Icon icon="solar:check-circle-bold" className="text-amber-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Affordable Pricing</h4>
                    <p className="text-slate-600">Flexible pricing plans that work for ISPs of all sizes across Africa.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Key Statistics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl px-3 py-4 text-center border border-white/10">
                    <p className="text-3xl font-bold"><AnimatedCounter value="500+" /></p>
                    <p className="text-white/80 text-sm">Active ISPs</p>
                  </div>
                  <div className="bg-white/10 rounded-xl px-3 py-4 text-center border border-white/10">
                    <p className="text-3xl font-bold"><AnimatedCounter value="50K+" /></p>
                    <p className="text-white/80 text-sm">Users Managed</p>
                  </div>
                  <div className="bg-white/10 rounded-xl px-3 py-4 text-center border border-white/10">
                    <p className="text-3xl font-bold"><AnimatedCounter value="99.9%" /></p>
                    <p className="text-white/80 text-sm">Uptime SLA</p>
                  </div>
                  <div className="bg-white/10 rounded-xl px-3 py-4 text-center border border-white/10">
                    <p className="text-3xl font-bold">24/7</p>
                    <p className="text-white/80 text-sm">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Courses />
      <Team />
      <Testimonials />
      <Newsletter />
      <OgulaChatbot />
    </main>
  );
}
