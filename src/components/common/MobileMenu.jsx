"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Button from "./Button";
import { NAV_LINKS } from "@/constants/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
  document.body.style.overflow = isOpen ? "hidden" : "auto";

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isOpen]);

  return (
    <>
      {/* Menu Button */}

      <button
        onClick={() => setIsOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-800 transition-colors hover:bg-neutral-100 lg:hidden cursor-pointer"
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>

      {/* Overlay */}

      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
            isOpen
            ? "visible bg-black/40 opacity-100"
            : "invisible bg-black/0 opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
        >
          {/* Drawer */}

          <div
            className={`absolute right-0 top-0 h-full max-w-sm bg-primary-800 shadow-xl transition-transform duration-300 ease-in-out ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-5">
              <h2 className="font-heading text-xl font-semibold text-white">
                Menu
              </h2>

              <button
                onClick={() => setIsOpen(false)}
                className="rounded-md p-2 transition-colors text-white hover:bg-primary-700 "
                aria-label="Close menu"
                >
                <X size={24} />
              </button>
            </div>

            {/* Content */}

            <div className="flex h-[calc(100%-72px)] flex-col justify-between p-6">
                {/* Navigation */}

                <nav>
                    <ul className="space-y-2">
                    {NAV_LINKS.map((item) => (
                        <li key={item.id}>
                        <Link
                            href={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`block rounded-lg px-4 py-3 font-ui text-base font-medium transition-colors ${
                            pathname === item.path
                                ? "bg-primary-700 text-white"
                                : "text-white hover:bg-primary-700"
                            }`}
                        >
                            {item.title}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </nav>

                {/* Quote Button */}

                <Button
                    href="/contact"
                    variant="primary"
                    className="mt-8 w-full"
                >
                    Get a Quote
                </Button>
                </div>
          </div>
        </div>
      
    </>
  );
}