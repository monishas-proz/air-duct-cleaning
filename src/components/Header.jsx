"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";
import Button from "./common/Button";
import { usePathname } from "next/navigation";
import MobileMenu from "./common/MobileMenu";

export default function Header() {

  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white">
      <div className="container flex h-16 items-center justify-between lg:h-20">
        <Link 
           href="/"
           className="font-heading text-lg font-bold text-primary-800 sm:text-xl lg:text-2xl"
           >
          AIR CARE MANAGEMENT 
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-8 2xl:gap-10">
            {NAV_LINKS.map((item) => (
              <li key={item.id}>
                <Link
                    href={item.path}
                    className={`link-hover body-sm relative pb-2 font-medium ${
                      pathname === item.path
                        ? "text-primary-800"
                        : "text-neutral-700 hover:text-primary-700"
                    }`}
                  >
                    {item.title}

                    {pathname === item.path && (
                      <span className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-primary-700" />
                    )}
                  </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
            {/* Desktop Button */}

            <Button
              variant="primary"
              size="sm"
            >
              Get a Quote
            </Button>
         </div>
            {/* Mobile Menu */}

            <MobileMenu />
          

      </div>
    </header>
  );
}