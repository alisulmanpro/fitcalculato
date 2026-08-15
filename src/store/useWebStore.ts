"use client";
import { create } from "zustand";

export interface WebNavLink {
  href: string;
  text: string;
  active?: boolean;
  submenu?: WebNavLink[];
}

export const defaultNavLinks: WebNavLink[] = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "#",
    text: "Categories",
    submenu: [
      {
        href: "/categories/cardio-and-endurance",
        text: "Cardio & Endurance",
      },
    ],
  },
  {
    href: "/blogs",
    text: "Blogs",
  },
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/faqs",
    text: "FAQs",
  },
  {
    href: "/contact",
    text: "Contact",
  },
];

export const getNavLinksWithActive = (links: WebNavLink[], pathname: string): (WebNavLink & { active: boolean })[] => {
  return links.map((link) => {
    const submenu = link.submenu ? getNavLinksWithActive(link.submenu, pathname) : undefined;
    const isSelfActive = link.href !== "#" && pathname === link.href;
    const isSubmenuActive = submenu ? submenu.some((s) => s.active) : false;

    return {
      ...link,
      submenu,
      active: isSelfActive || isSubmenuActive,
    };
  });
};

interface WebState {
  currentPathname: string;
  navLinks: WebNavLink[];
  setCurrentPathname: (pathname: string) => void;
  setNavLinks: (links: WebNavLink[]) => void;
  resetNavLinks: () => void;
}

export const useWebStore = create<WebState>((set) => ({
  currentPathname: "/",
  navLinks: defaultNavLinks,
  setCurrentPathname: (pathname) => {
    set({ currentPathname: pathname });
  },
  setNavLinks: (links) => {
    set({ navLinks: links });
  },
  resetNavLinks: () => {
    set({ navLinks: defaultNavLinks });
  },
}));
