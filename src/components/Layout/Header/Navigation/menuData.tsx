import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { 
    label: "Company", 
    href: "/company",
    submenu: [
      { label: "About Us", href: "/about", icon: "heroicons:user-group" },
      { label: "Our Team", href: "/team", icon: "heroicons:users" },
      { label: "Careers", href: "/careers", icon: "heroicons:briefcase" },
      { label: "Services", href: "/services", icon: "heroicons:cube" },
      { label: "Service Agreement", href: "/agreement", icon: "heroicons:document-text" },
      { label: "Service Contract", href: "/contract", icon: "heroicons:document-check" },
      { label: "Privacy Policy", href: "/privacy", icon: "heroicons:shield-check" },
      { label: "Terms & Conditions", href: "/terms", icon: "heroicons:scale" },
    ]
  },
  { label: "Solutions", href: "/#solutions" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
];

export const quickLinks: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Testimonials", href: "/#testimonials" },
];

export const companyLinks: HeaderItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const legalLinks: HeaderItem[] = [
  { label: "Service Agreement", href: "/agreement" },
  { label: "Service Contract", href: "/contract" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];
