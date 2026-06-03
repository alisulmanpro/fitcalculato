"use client"

import { useState, useEffect, useRef } from "react";
import { MdSearch, MdClose, MdNavigateNext } from "react-icons/md";
import { useRouter } from "next/navigation";
import { calculators, iconMap } from "@/data/calculators";
import { FaScaleBalanced } from "react-icons/fa6";
import clsx from "clsx";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Filter calculators based on search query
  const filteredCalculators = calculators.filter((calc) =>
    calc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    calc.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Reset search query and selected index when modal closes
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
      setSelectedIndex(-1);
    } else {
      // Focus the input when modal opens
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredCalculators.length - 1 ? prev + 1 : 0
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : filteredCalculators.length - 1
          );
          break;
        case "Enter":
          e.preventDefault();
          if (selectedIndex >= 0 && filteredCalculators[selectedIndex]) {
            const calc = filteredCalculators[selectedIndex];
            router.push(calc.path);
            onClose();
          }
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredCalculators, router, onClose]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />

      {/* Modal content */}
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-surface-container-lowest border border-outline-variant rounded-xl shadow-xl overflow-hidden"
      >
        {/* Search bar */}
        <div className="flex items-center gap-4 px-6 py-4 border-b border-outline-variant">
          <MdSearch className="text-primary text-2xl" />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search calculators..."
            className="flex-1 bg-transparent text-on-surface text-lg focus:outline-none placeholder:text-outline"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={onClose} className="p-1 hover:bg-surface-container-low rounded-full">
            <MdClose className="text-on-surface-variant text-xl" />
          </button>
        </div>

        {/* Results list */}
        <div className="max-h-96 overflow-y-auto">
          {filteredCalculators.length > 0 ? (
            <ul className="py-2">
              {filteredCalculators.map((calc, index) => {
                const IconComponent = iconMap[calc.icon] || FaScaleBalanced;
                return (
                  <li
                    key={index}
                    className={clsx(
                      "flex items-center gap-4 px-6 py-3 cursor-pointer transition-colors",
                      selectedIndex === index
                        ? "bg-primary-container text-on-primary-container"
                        : "hover:bg-surface-container-low"
                    )}
                    onClick={() => {
                      router.push(calc.path);
                      onClose();
                    }}
                  >
                    <div className="w-10 h-10 bg-surface-container-low rounded flex items-center justify-center shrink-0">
                      <IconComponent className="text-primary text-[20px]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-on-background">{calc.title}</h3>
                      <p className="text-sm text-on-surface-variant">{calc.desc}</p>
                    </div>
                    <MdNavigateNext className="text-on-surface-variant" />
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="text-on-surface-variant">No calculators found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
