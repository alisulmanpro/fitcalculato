"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu2Line } from "react-icons/ri";
import clsx from "clsx"
import { useEffect, useState, Fragment } from "react";
import SearchModal from "../ui/SearchModal";
import { useWebStore } from "@/store/useWebStore";
export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)

  const pathname = usePathname()
  const navlinks = useWebStore((state) => state.navLinks)
  const setCurrentPathname = useWebStore((state) => state.setCurrentPathname)

  useEffect(() => {
    setCurrentPathname(pathname)
  }, [pathname, setCurrentPathname])

  return (
    <>
      <header className="sticky top-0 w-full z-50">
        <nav className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <RiMenu2Line />
              </div>
              {/* Mobile Menu - Now dynamically mapped */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navlinks.map((navlink, index) => (
                  <li key={index}>
                    {navlink.submenu ? (
                      <>
                        <span className={clsx({ "active": navlink.active })}>
                          {navlink.text}
                        </span>
                        <ul className="p-2">
                          {navlink.submenu.map((nav, subIndex) => (
                            <li key={subIndex}>
                              <Link href={nav.href} className={clsx({ "active": nav.active })}>
                                {nav.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link href={navlink.href} className={clsx({ "active": navlink.active })}>
                        {navlink.text}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/" className="btn btn-ghost">
              <Image
                src="/logo.svg"
                alt="FitCalculato Logo"
                width={320}
                height={80}
                priority
                className="h-10 w-auto md:h-12 shrink-0 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navlinks.map((navlink, index) => (
                <Fragment key={index}>
                  {/* Conditional Rendering: Submenu hai to Details tag warna simple Link */}
                  {navlink.submenu ? (
                    <li>
                      <details>
                        <summary
                          className={clsx(
                            "font-label-md text-label-md transition-colors duration-200",
                            {
                              "active": navlink.active,
                              "text-on-surface-variant hover:text-primary": !navlink.active,
                            }
                          )}
                        >
                          {navlink.text}
                        </summary>
                        <ul className="p-2 bg-base-100 w-fit z-1 shadow rounded-box">
                          {navlink.submenu.map((nav, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={nav.href}
                                className={clsx(
                                  "font-label-md text-label-md transition-colors duration-200",
                                  {
                                    "active": nav.active,
                                    "text-on-surface-variant hover:text-primary": !nav.active,
                                  }
                                )}
                              >
                                {nav.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>
                  ) : (
                    <li>
                      <Link
                        href={navlink.href}
                        className={clsx(
                          "font-label-md text-label-md transition-colors duration-200",
                          {
                            "active": navlink.active,
                            "text-on-surface-variant hover:text-primary": !navlink.active,
                          }
                        )}
                      >
                        {navlink.text}
                      </Link>
                    </li>
                  )}
                </Fragment>
              ))}
            </ul>
          </div>

          <div className="navbar-end">
            <Link href="/explore" className="btn btn-primary">Explore Tools</Link>
          </div>
        </nav>
      </header >
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
