"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeroSub = () => {
  const pathname = usePathname();
  
  // Get the page title based on the current path
  const getPageTitle = () => {
    switch(pathname) {
      case '/about':
        return 'About Us';
      case '/team':
        return 'Our Team';
      case '/careers':
        return 'Careers';
      case '/services':
        return 'Services';
      case '/contact':
        return 'Contact Us';
      case '/company':
        return 'Company';
      case '/privacy':
        return 'Privacy Policy';
      case '/terms':
        return 'Terms & Conditions';
      case '/contract':
        return 'Service Contract';
      case '/agreement':
        return 'Service Agreement';
      case '/support-tickets':
        return 'Support Tickets';
      default:
        return '';
    }
  };

  const getPageSubtitle = () => {
    switch(pathname) {
      case '/about':
        return 'Learn more about Afriikanet and our mission';
      case '/team':
        return 'Meet the people behind our success';
      case '/careers':
        return 'Join our team and grow with us';
      case '/services':
        return 'Explore our ISP billing solutions';
      case '/contact':
        return "We'd love to hear from you";
      case '/company':
        return 'Everything about our company';
      case '/privacy':
        return 'How we protect your data';
      case '/terms':
        return 'Our terms and conditions';
      case '/contract':
        return 'Service contract details';
      case '/agreement':
        return 'Service agreement information';
      case '/support-tickets':
        return 'Submit a support ticket';
      default:
        return '';
    }
  };

  const title = getPageTitle();
  const subtitle = getPageSubtitle();

  // Don't render if no title (e.g., home page)
  if (!title) return null;

  return (
    <section className="bg-gradient-to-r from-slate-800 to-slate-900 pt-24 pb-12 md:pt-28 md:pb-16 mt-16">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="text-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl text-amber-400">{subtitle}</p>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <Icon icon="heroicons:chevron-right" className="text-slate-500" />
            <span className="text-white">{title}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSub;
