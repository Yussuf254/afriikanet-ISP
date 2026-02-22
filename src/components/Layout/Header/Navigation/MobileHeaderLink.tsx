import { useState, useEffect } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

const MobileHeaderLink: React.FC<{ 
  item: HeaderItem; 
  onNavigate?: () => void;
  isOpen?: boolean;
  onSubmenuToggle?: () => void;
}> = ({ item, onNavigate, isOpen = false, onSubmenuToggle }) => {
  const [submenuOpen, setSubmenuOpen] = useState(isOpen);
  const pathname = usePathname();
  
  useEffect(() => {
    setSubmenuOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    // Close submenu when navigating
    if (onNavigate) {
      setSubmenuOpen(false);
    }
  }, [pathname]);

  const handleToggle = () => {
    if (item.submenu) {
      const newState = !submenuOpen;
      setSubmenuOpen(newState);
      if (onSubmenuToggle) {
        onSubmenuToggle();
      }
    }
  };

  const handleClick = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <div className="w-full">
      <Link
        href={item.href}
        onClick={item.submenu ? handleToggle : handleClick}
        className={`flex items-center justify-between w-full py-3 px-4 rounded-xl transition-all ${
          submenuOpen
            ? "bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border border-amber-500/30"
            : "text-white hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-orange-500/10 hover:text-amber-400"
        }`}
      >
        <span className="font-medium">{item.label}</span>
        {item.submenu && (
          <Icon
            icon={submenuOpen ? "tabler:chevron-up" : "tabler:chevron-down"}
            className="text-lg"
          />
        )}
      </Link>
      {submenuOpen && item.submenu && (
        <div className="ml-4 mt-1 space-y-1 border-l-2 border-amber-500/20 pl-4">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className="block py-2 px-4 text-white/70 hover:text-amber-400 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-orange-500/10 rounded-lg transition-all"
              onClick={handleClick}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
