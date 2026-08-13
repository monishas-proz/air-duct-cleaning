"use client";

import ScrollLink from "./common/ScrollLink";
import { NAV_LINKS } from "@/constants/navigation";
import Button from "./common/Button";
import { usePathname } from "next/navigation";
import MobileMenu from "./common/MobileMenu";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/90 ">
      <div className="container flex h-16 items-center justify-between lg:h-[72px]">
        <ScrollLink
          href="/"
          className="font-heading text-lg font-bold tracking-tight text-primary-800 sm:text-xl lg:text-2xl"
        >
          ADHI ROBOTIC SERVICES
        </ScrollLink>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-5 xl:gap-7 2xl:gap-8">
            {NAV_LINKS.map((item) => (
              <li key={item.id}>
                <ScrollLink
                  href={item.path}
                  className={`link-hover body-sm relative pb-1 font-medium ${
                    pathname === item.path
                      ? "text-primary-800"
                      : "text-neutral-700 hover:text-primary-700"
                  }`}
                >
                  {item.title}

                  {pathname === item.path && (
                    <span className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-primary-600" />
                  )}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button variant="primary" size="sm" href={"/contact"}>
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
}
