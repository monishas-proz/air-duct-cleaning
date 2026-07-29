"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
    // {
    //     title: "Dashboard",
    //     href: "/admin/dashboard",
    // },
    {
        title: "Categories",
        href: "/admin/categories",
    },

    {
      title: "Images",
      href: "/admin/images",
    },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 border-r border-neutral-200 bg-primary-800 shadow-xl">
      <div className="flex h-20 items-center border-b border-primary-700 pl-8">
        <div>
          <Link href="/"
                className="cursor-pointer">
          <h2 className="body-lg font-heading font-bold text-white">
            Adhi Robotic Services
          </h2>
          </Link>

          <p className="mt-1 body-md text-white">
            Admin Panel
          </p>
        </div>
      </div>

      <nav className="p-5">
        {menuItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`mb-2 flex items-center rounded-xl px-5 py-4 transition-all duration-200
              ${
                active
                  ? "bg-primary-700 text-white shadow-lg"
                  : "text-white hover:bg-primary-700 hover:text-white"
              }
              active:scale-95`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}