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
    <aside className="fixed left-0 top-0 h-screen w-72 border-r border-neutral-200 bg-white shadow-xl">
      <div className="flex h-20 items-center border-b border-neutral-200 pl-8">
        <div>
          <h2 className="text-xl font-heading font-bold text-primary-700">
            Adhi Robotic Services
          </h2>

          <p className="text-sm text-neutral-500">
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
              className={`mb-3 flex items-center rounded-xl px-5 py-4 transition-all duration-200
              ${
                active
                  ? "bg-primary-700 text-white shadow-lg"
                  : "text-neutral-700 hover:bg-primary-50 hover:text-primary-700"
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