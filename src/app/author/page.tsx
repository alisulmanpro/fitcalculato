import type { Metadata } from "next";
import AuthorProfile from "@/components/pages/AuthorProfile";

export const metadata: Metadata = {
  title: "Ali Sulman - Author Profile | FitCalculators",
  description: "Learn more about Ali Sulman, Health & Fitness Data Specialist & Lead Developer at FitCalculators. Access his science-backed fitness calculators and articles.",
  openGraph: {
    title: "Ali Sulman - Author Profile | FitCalculators",
    description: "Learn more about Ali Sulman, Health & Fitness Data Specialist & Lead Developer at FitCalculators. Access his science-backed fitness calculators and articles.",
    url: "https://fitcalculato.com/author",
    siteName: "Fitness Calculator",
    type: "profile",
  },
};

export default function AuthorPage() {
  return <AuthorProfile />;
}
