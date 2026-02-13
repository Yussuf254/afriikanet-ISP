"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();
  const [isActive, setIsActive] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isLinkActive = (path === item.href || (item.submenu && item.submenu.some(subItem => path === subItem.href))) ?? false;
    setIsActive(isLinkActive);
  }, [path, item.href, item.submenu]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
        setSubmenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    if (item.submenu) {
      e.preventDefault();
      e.stopPropagation();
      setSubmenuOpen(!submenuOpen);
    }
  };

  return (
    <div className="relative" ref={submenuRef}>
      <Link
        href={item.href}
        onClick={handleToggle}
        className={`text-sm font-medium py-2 px-3 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer ${
          isActive
            ? "text-amber-600 bg-amber-50"
            : "text-slate-600 hover:text-amber-600 hover:bg-slate-50"
        }`}
      >
        {item.icon && <Icon icon={item.icon} className="w-5 h-5" />}
        {item.label}
        {item.submenu && (
          <Icon
            icon={submenuOpen ? "heroicons:chevron-up" : "heroicons:chevron-down"}
            className="w-4 h-4"
          />
        )}
      </Link>

      {submenuOpen && item.submenu && (
        <div
          className="absolute left-0 mt-2 w-56 bg-white shadow-2xl rounded-xl py-2 border border-slate-100 z-50 animate-fade-in"
        >
          {item.submenu?.map((subItem, index) => {
            const isSubItemActive = path === subItem.href;
            return (
              <Link
                key={index}
                href={subItem.href}
                onClick={() => setSubmenuOpen(false)}
                className={`block px-4 py-2.5 text-sm flex items-center gap-3 mx-2 rounded-lg transition-all duration-200 ${
                  isSubItemActive
                    ? "bg-amber-50 text-amber-600 font-medium"
                    : "text-slate-600 hover:text-amber-600 hover:bg-slate-50"
                }`}
              >
                {subItem.icon && <Icon icon={subItem.icon} className="w-4 h-4" />}
                {subItem.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
