"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ScrollLink({
  href,
  children,
  className,
  onClick,
  ...props
}) {
  const pathname = usePathname();

  const handleClick = (e) => {
    // Extract only the pathname (ignore hash like #service1)
    const targetPath = href.split("#")[0];

    // If already on the target page, scroll to top
    if (pathname === targetPath) {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Call parent onClick if provided
    onClick?.(e);
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