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
        className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-800 transition hover:bg-neutral-100 lg:hidden cursor-pointer"
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

        <aside
          className={`absolute right-0 top-0 flex h-full w-72 max-w-full flex-col border-l border-neutral-200 bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}

          <div className="flex items-center justify-between border-b border-primary-200 bg-primary-50 px-6 py-6">
            <h2 className="body-lg font-heading font-bold uppercase text-primary-800">
              Adhi Robotic Services
            </h2>

            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer rounded-md p-2 text-primary-800 transition hover:bg-primary-100"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Content */}

          <div className="flex flex-1 flex-col justify-between p-6">
            {/* Navigation */}

            <nav>
              <ul className="space-y-2">
                {NAV_LINKS.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-xl px-5 py-4 font-ui text-base font-medium transition-all duration-200 ${
                        pathname === item.path
                          ? "bg-primary-800 text-white shadow-lg"
                          : "text-primary-800 hover:bg-primary-800 hover:text-white"
                      } active:scale-95`}
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
      </div>
    </>
  );
}