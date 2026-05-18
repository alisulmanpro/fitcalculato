import Link from "next/link";
import { MdMonitorHeart, MdSearch, MdMenu } from "react-icons/md";

export default function Header() {
  return (
    <header className="bg-surface border-b border-outline-variant shadow-sm sticky top-0 w-full z-50">
      <div className="px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto flex justify-between items-center">
        {/* Brand */}
        <Link
          href="/"
          className="font-headline-md text-headline-md font-bold text-primary flex items-center gap-2"
        >
          <MdMonitorHeart className="text-primary text-2xl shrink-0" />
          FitCalc Directory
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="font-label-md text-label-md text-primary border-b-2 border-primary pb-1 font-semibold"
          >
            Calculators
          </Link>
          <Link
            href="/insights"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            Health Insights
          </Link>
          <Link
            href="/providers"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            Providers
          </Link>
          <Link
            href="/about"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            About Us
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant hover:text-primary">
            <MdSearch className="text-xl" />
          </button>
          <Link
            href="/join"
            className="hidden md:inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md px-4 py-2 rounded-lg hover:opacity-90 hover:bg-primary-container transition-colors font-semibold"
          >
            Join Now
          </Link>
          <button className="md:hidden flex items-center justify-center text-on-surface-variant">
            <MdMenu className="text-2xl" />
          </button>
        </div>
      </div>
    </header>
  );
}
