"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileDrawer({
  open,
  onClose,
}) {
  const pathname = usePathname();

  const menus = [
    // {
    //   title: "Dashboard",
    //   href: "/admin/dashboard",
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

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition duration-300
        ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 bg-white shadow-2xl transition-transform duration-300
        ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="border-b border-neutral-200 p-6">
          <h2 className="text-xl font-bold text-primary-700">
            Adhi Robotic Services
          </h2>

          <p className="text-neutral-500">
            Admin Panel
          </p>
        </div>

        <nav className="p-5">
          {menus.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={onClose}
              className={`mb-3 block rounded-xl px-5 py-4 transition
              ${
                pathname === item.href
                  ? "bg-primary-700 text-white"
                  : "hover:bg-primary-50"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}