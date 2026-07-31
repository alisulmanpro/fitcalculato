"use client";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface WebNavLink {
  href: string;
  text: string;
  active: boolean;
  submenu?: WebNavLink[];
}

const withActive = (links: WebNavLink[], pathname: string): WebNavLink[] => {
  return links.map((link) => {
    const submenu = link.submenu ? withActive(link.submenu, pathname) : undefined;
    const isSelfActive = link.href !== "#" && pathname === link.href;
    const isSubmenuActive = submenu ? submenu.some((s) => s.active) : false;

    return {
      ...link,
      submenu,
      active: isSelfActive || isSubmenuActive,
    };
  });
};

const defaultNavLinks: WebNavLink[] = [
  {
    href: "/",
    text: "Home",
    active: false,
  },
  {
    href: "#",
    text: "Categories",
    active: false,
    submenu: [
      {
        href: "/categories/cardio-and-endurance",
        text: "Cardio & Endurance",
        active: false,
      },
    ],
  },
  {
    href: "/blogs",
    text: "Blogs",
    active: false,
  },
  {
    href: "/about",
    text: "About",
    active: false,
  },
  {
    href: "/faqs",
    text: "FAQs",
    active: false,
  },
  {
    href: "/contact",
    text: "Contact",
    active: false,
  },
];

interface WebState {
  currentPathname: string;
  navLinks: WebNavLink[];
  setCurrentPathname: (pathname: string) => void;
  setNavLinks: (links: WebNavLink[]) => void;
  resetNavLinks: () => void;
}

export const useWebStore = create<WebState>()(
  persist(
    (set, get) => ({
      currentPathname: "/",
      navLinks: withActive(defaultNavLinks, "/"),
      setCurrentPathname: (pathname) => {
        set({
          currentPathname: pathname,
          navLinks: withActive(get().navLinks, pathname),
        });
      },
      setNavLinks: (links) => {
        set({
          navLinks: withActive(links, get().currentPathname),
        });
      },
      resetNavLinks: () => {
        set({
          navLinks: withActive(defaultNavLinks, get().currentPathname),
        });
      },
    }),
    {
      name: "web-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        currentPathname: state.currentPathname,
        navLinks: state.navLinks,
      }),
    }
  )
);
