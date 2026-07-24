"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ScrollLink({
  href,
  children,
  className,
  ...props
}) {
  const pathname = usePathname();

  const handleClick = (e) => {
    // If already on the same page, scroll to top
    if (pathname === href) {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}