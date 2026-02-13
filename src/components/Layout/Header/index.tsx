"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import { getImagePrefix } from "@/utils/util";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    if (isSignInOpen || navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignInOpen, navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${sticky 
        ? "bg-white shadow-lg py-3" 
        : "bg-white shadow-none py-4"
        }`}
    >
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="flex items-center justify-between">
          <Logo />
          <nav className="hidden xl:flex items-center gap-2">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="hidden xl:block text-slate-600 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
              onClick={() => {
                setIsSignInOpen(true);
              }}
            >
              Sign In
            </Link>
            <Link
              href="/contact"
              className="hidden xl:block bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="lg:hidden p-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <Icon icon={navbarOpen ? "heroicons:x-mark" : "heroicons:bars-3"} className="text-white w-6 h-6" />
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/70 z-40" onClick={() => setNavbarOpen(false)} />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 left-0 h-full w-85 max-w-[85%] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-2xl transform transition-transform duration-300 ${navbarOpen ? "translate-x-0" : "-translate-x-full"
            } z-50`}
        >
          {/* Menu Header with Logo */}
          <div className="flex items-center justify-between p-5 border-b border-amber-500/30">
            <Link href="/" className="flex items-center gap-3" onClick={() => setNavbarOpen(false)}>
              <Image
                src={`${getImagePrefix()}images/logo/logo.jpeg`}
                alt="Afriikanet - ISP Billing Solutions"
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg object-contain bg-white/10"
              />
              <div>
                <p className="text-white font-bold text-lg">Afriikanet</p>
                <p className="text-amber-400 text-xs">ISP Solutions</p>
              </div>
            </Link>
            <button
              onClick={() => setNavbarOpen(false)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <Icon icon="heroicons:x-mark" className="text-white w-6 h-6" />
            </button>
          </div>
          
          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="flex flex-col space-y-2">
              {headerData.map((item, index) => (
                <MobileHeaderLink key={index} item={item} onNavigate={() => setNavbarOpen(false)} />
              ))}
            </nav>
          </div>
          
          {/* CTA Buttons */}
          <div className="p-4 space-y-3 mt-4">
            <Link
              href="#"
              className="w-full text-center bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-white px-4 py-3 rounded-xl font-medium hover:from-amber-500/30 hover:to-orange-500/30 transition-all flex items-center justify-center gap-2 border border-amber-500/30"
              onClick={() => {
                setNavbarOpen(false);
                setIsSignInOpen(true);
                setNavbarOpen(false);
              }}
            >
              <Icon icon="heroicons:arrow-right-on-rectangle" className="w-5 h-5" />
              Sign In
            </Link>
            <Link
              href="/contact"
              className="w-full text-center bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-3 rounded-xl font-medium hover:from-amber-600 hover:to-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg"
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              <Icon icon="heroicons:rocket-launch" className="w-5 h-5" />
              Get Started
            </Link>
          </div>
          
          {/* Social Media Links */}
          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-amber-500/30 bg-slate-900">
            <p className="text-amber-400 text-sm text-center mb-4">Connect With Us</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/share/17wMQyQ798/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-blue-600 hover:to-blue-700 flex items-center justify-center transition-all hover:scale-110"
              >
                <Icon icon="brandico:facebook" className="text-white w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-sky-500 hover:to-sky-600 flex items-center justify-center transition-all hover:scale-110"
              >
                <Icon icon="entypo-social:twitter" className="text-white w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-blue-700 hover:to-blue-800 flex items-center justify-center transition-all hover:scale-110"
              >
                <Icon icon="entypo-social:linkedin" className="text-white w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-pink-600 hover:to-pink-700 flex items-center justify-center transition-all hover:scale-110"
              >
                <Icon icon="entypo-social:instagram" className="text-white w-5 h-5" />
              </a>
            </div>
            <p className="text-white/50 text-xs text-center mt-4">© 2024 Afriikanet. All rights reserved.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
