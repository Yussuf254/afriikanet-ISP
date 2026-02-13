export type SubmenuItem = {
    label: string;
    href: string;
    icon?: string;
  };
  
  export type HeaderItem = {
    label: string;
    href: string;
    icon?: string;
    submenu?: SubmenuItem[];
  };