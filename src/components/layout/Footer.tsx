import Link from "next/link";
import { MdMonitorHeart } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant mt-auto">
      <div className="w-full py-12 px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto gap-6 md:gap-0">
        <div className="font-headline-md text-headline-md font-bold text-primary mb-4 md:mb-0 text-center md:text-left flex flex-col items-center gap-2 justify-center md:items-start md:justify-start">
          <div className="flex items-center gap-2">
            <MdMonitorHeart className="text-primary text-2xl shrink-0" />
            FitCalc Directory
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant font-normal max-w-md text-center md:text-left mt-2">
            We provide clinical-grade, accessible fitness and health calculation tools. Always consult a healthcare professional before making major changes to your routine.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:items-end w-full md:w-auto">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            <Link href="/privacy" className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200">
              Medical Disclaimer
            </Link>
            <Link href="/contact" className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200">
              Contact Us
            </Link>
            <Link href="/sitemap" className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200">
              Sitemap
            </Link>
          </nav>
          
          <div className="font-label-sm text-label-sm text-on-surface-variant text-center md:text-right mt-2 md:mt-0">
            © 2024 FitCalc Directory. Clinical precision for your fitness journey.
          </div>
        </div>
      </div>
    </footer>
  );
}
