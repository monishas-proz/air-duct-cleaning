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
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-800 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 lg:hidden cursor-pointer"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

      {/* Overlay + Drawer */}
      <div
        className={`fixed inset-0 z-[9998] transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {/* Blurred background */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
      </div>

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 z-[9999] h-screen w-80 max-w-[85vw] flex flex-col border-l border-neutral-200 bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-5">
            <h2 className="font-heading text-base font-bold uppercase tracking-tight text-primary-800">
              Adhi Robotic Services
            </h2>

            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer rounded-lg p-2 text-neutral-600 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col justify-between p-5">
            {/* Navigation */}
            <nav>
              <ul className="space-y-1.5">
                {NAV_LINKS.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                        pathname === item.path
                          ? "bg-primary-800 text-white"
                          : "text-primary-800 hover:bg-primary-50 hover:text-primary-900"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Bottom Button */}
            <div className="border-t border-neutral-200 pt-5">
              <Button
                href="/contact"
                variant="primary"
                className="w-full"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </aside>
      
    </>
  );
}