import Link from "next/link";
import Logo from "../Header/Logo";
import { Icon } from "@iconify/react";
import { quickLinks, companyLinks, legalLinks } from "../Header/Navigation/menuData";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 gap-y-12 gap-x-8 md:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          <div className='lg:col-span-4'>
            <Logo />
            <p className="text-slate-300 mt-4 mb-6 max-w-sm">Empowering ISPs across Africa with reliable, modern billing solutions that drive growth and customer satisfaction.</p>
            <div className='flex items-center gap-4'>
              <Link href="#" className='hover:text-amber-400 text-white bg-white/10 p-3 rounded-full transition-colors'>
                <Icon icon="tabler:brand-facebook" className="text-xl" />
              </Link>
              <Link href="#" className='hover:text-amber-400 text-white bg-white/10 p-3 rounded-full transition-colors'>
                <Icon icon="tabler:brand-twitter" className="text-xl" />
              </Link>
              <Link href="#" className='hover:text-amber-400 text-white bg-white/10 p-3 rounded-full transition-colors'>
                <Icon icon="tabler:brand-linkedin" className="text-xl" />
              </Link>
              <Link href="#" className='hover:text-amber-400 text-white bg-white/10 p-3 rounded-full transition-colors'>
                <Icon icon="tabler:brand-instagram" className="text-xl" />
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2"
                  >
                    <Icon icon="tabler:chevron-right" className="text-sm" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2"
                  >
                    <Icon icon="tabler:chevron-right" className="text-sm" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-6 text-lg font-semibold text-white">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2"
                  >
                    <Icon icon="tabler:chevron-right" className="text-sm" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className='lg:col-span-2'>
            <h3 className="mb-6 text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/20 p-3 rounded-lg">
                  <Icon icon="tabler:map-pin" className="text-amber-400 text-xl" />
                </div>
                <div>
                  <p className="text-slate-300 font-medium">Location</p>
                  <p className="text-slate-400">Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/20 p-3 rounded-lg">
                  <Icon icon="tabler:phone" className="text-amber-400 text-xl" />
                </div>
                <div>
                  <p className="text-slate-300 font-medium">Phone</p>
                  <p className="text-slate-400">0717431488</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/20 p-3 rounded-lg">
                  <Icon icon="tabler:mail" className="text-amber-400 text-xl" />
                </div>
                <div>
                  <p className="text-slate-300 font-medium">Email</p>
                  <p className="text-slate-400">info@afriikanet.co.ke</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left'>
          <p className='text-slate-400 text-sm text-center lg:text-start'>© 2025 Pioneer Afriikanet Technologies Ltd. All Rights Reserved.</p>
          <div className="flex gap-6 justify-center lg:justify-start">
            <Link href="/privacy" className='text-slate-400 text-sm hover:text-amber-400 transition-colors'>Privacy Policy</Link>
            <Link href="/terms" className='text-slate-400 text-sm hover:text-amber-400 transition-colors'>Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
