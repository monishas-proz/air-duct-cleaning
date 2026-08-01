"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Button from "@/components/common/Button";
import { LogOut, ArrowLeft } from "lucide-react";

export default function MobileDrawer({
  open,
  onClose,
}) {
  const pathname = usePathname();
  const router = useRouter();

  const menus = [
    {
      title: "Categories",
      href: "/admin/categories",
    },
    {
      title: "Images",
      href: "/admin/images",
    },
    {
      title: "Contacts",
      href: "/admin/contacts",
    },
  ];

  const logout = async () => {
    await fetch("/api/admin/logout", {
      method: "POST",
      credentials: "include",
    });

    onClose();

    router.replace("/admin/login");
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-neutral-200 bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="border-b border-primary-200 bg-primary-50 px-8 py-6">
          <Link
            href="/"
            onClick={onClose}
          >
            <h2 className="body-lg font-heading font-bold uppercase text-primary-800">
              Adhi Robotic Services
            </h2>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 p-6">
          {menus.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className={`flex items-center rounded-xl px-5 py-4 transition-all duration-200 ${
                  active
                    ? "bg-primary-800 text-white shadow-lg"
                    : "text-primary-800 hover:bg-primary-800 hover:text-white"
                } active:scale-95`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
          <div className="space-y-3 border-t border-neutral-200 p-5">

            <Button
              href="/"
              size="sm"
              className="w-full"
              icon={<ArrowLeft size={18} />}
              iconPosition="left"
            >
              Back to Home
            </Button>

            <Button
              onClick={logout}
              className="w-full"
              iconPosition="left"
              icon={
                <LogOut
                  size={18}
                  strokeWidth={2}
                />
              }
            >
              Logout
            </Button>

          </div>
      </aside>
    </>
  );
}