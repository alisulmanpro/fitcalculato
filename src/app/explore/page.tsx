import Link from "next/link";
import React from "react";

export default function ExplorePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero bg-base-200 min-h-[60vh]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Explore Our Tools</h1>
            <p className="py-6">
              Discover a wide range of calculators designed to help you track, improve,
              and optimize your fitness journey. From cardio to strength, we've got you covered.
            </p>
            <Link href="/calculators" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Cardio & Endurance</h2>
              <p>Precision tools to measure your cardiovascular fitness and pacing.</p>
              <div className="card-actions justify-end mt-4">
                <Link href="/categories/cardio-endurance" className="btn btn-sm btn-outline">Explore</Link>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Strength & Muscle</h2>
              <p>Calculators for your max lifts, reps, and overall strength potential.</p>
              <div className="card-actions justify-end mt-4">
                <Link href="/categories/strength" className="btn btn-sm btn-outline">Explore</Link>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Health & Wellness</h2>
              <p>Monitor your BMI, BMR, macros, and track your daily wellness metrics.</p>
              <div className="card-actions justify-end mt-4">
                <Link href="/categories/health" className="btn btn-sm btn-outline">Explore</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
