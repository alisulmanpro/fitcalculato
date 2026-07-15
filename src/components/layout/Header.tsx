"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdSearch, MdMenu } from "react-icons/md";
import clsx from "clsx"
import { useState, useRef, useEffect } from "react";
import SearchModal from "../ui/SearchModal";

interface NavLinks {
  href: string;
  text: string;
  type: string
}
export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false)
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)
  const mobileNavRef = useRef<HTMLDivElement>(null)

  const pathname = usePathname()

  const navlinks: NavLinks[] = [
    {
      href: "/",
      text: "Calculators",
      type: "links",
    },
    {
      href: "/about",
      text: "About",
      type: "links",
    },
    {
      href: "/contact",
      text: "Contact",
      type: "links",
    },
    {
      href: "/faqs",
      text: "FAQ",
      type: "links",
    },
    {
      href: "/join",
      text: "Join Now",
      type: "button",
    },
  ]

  const handleMobileNavClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }

  const closeMobileNav = () => {
    setIsMobileNavOpen(false)
  }

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target as Node)
      ) {
        closeMobileNav()
      }
    }

    // Close when pressing escape key
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobileNav()
      }
    }

    if (isMobileNavOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscapeKey)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [isMobileNavOpen])


  return (
    <>
      <header className="bg-surface border-b border-outline-variant shadow-sm sticky top-0 w-full z-50">
        <div className="px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto flex justify-between items-center">
          {/* Brand */}
          <Link
            href="/"
            className="font-headline-md text-headline-md font-bold text-primary flex items-center gap-2"
          >
            <Image
              src="/logo.svg"
              alt="FitCalc Directory"
              width={160}
              height={40}
              loading="eager"
              className="shrink-0"
              style={{ width: "auto", height: "40px" }}
            />
            FitCalculato
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navlinks.map((nav, index) => (
              <Link
                key={index}
                href={nav.href}
                className={clsx(
                  "font-label-md text-label-md  transition-colors duration-200",
                  {
                    "active": pathname === nav.href,
                    "text-on-surface-variant hover:text-primary": pathname !== nav.href,
                    "hidden": nav.type === "button",
                  }
                )}
              >
                {nav.text}
              </Link>
            ))}
          </nav>



          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant hover:text-primary"
              onClick={() => setIsSearchOpen(true)}
            >
              <MdSearch className="text-xl" />
            </button>
            <Link
              href="/join"
              className="hidden md:inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md px-4 py-2 rounded-lg hover:opacity-90 hover:bg-primary-container transition-colors font-semibold"
            >
              Join Now
            </Link>
            <div className="relative" ref={mobileNavRef}>
              <button className="md:hidden flex items-center justify-center text-on-surface-variant cursor-pointer hover:bg-black/30 rounded-full p-3" onClick={handleMobileNavClick}>
                <MdMenu className="text-2xl" />
              </button>
              {/* mobile Nav */}
              <div
                className={clsx(
                  "absolute right-0 bg-white max-w-lg p-3 rounded-lg shadow z-50",
                  {
                    "block": isMobileNavOpen,
                    hidden: !isMobileNavOpen
                  }
                )}
              >
                <div className="flex flex-col items-center gap-2 w-full">
                  {navlinks.map((nav, index) => (
                    <Link
                      key={index}
                      href={nav.href}
                      onClick={closeMobileNav}
                      className={clsx(
                        "font-label-md text-label-md  transition-colors duration-200 w-full py-1 px-5 rounded",
                        {
                          "active-mobile": pathname === nav.href,
                          "text-on-surface-variant hover:text-white hover:bg-primary/50": pathname !== nav.href,
                          "inline-flex items-center justify-center bg-primary text-white font-label-md text-label-md px-4 py-2 rounded-lg hover:opacity-90 hover:bg-primary-container transition-colors font-semibold": nav.type === "button",
                        }
                      )}
                    >
                      {nav.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}