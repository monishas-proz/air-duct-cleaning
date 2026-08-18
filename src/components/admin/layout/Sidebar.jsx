"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";
import Button from "@/components/common/Button";
import { LogOut } from "lucide-react";

const menuItems = [
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

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const logout = async () => {
    try {
      const response = await fetch("/api/admin/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        toast.success("Logout successful");

        // Wait briefly so the toast is visible
        setTimeout(() => {
          router.replace("/admin/login");
          router.refresh();
        }, 800);
      } else {
        toast.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-72 flex-col border-r border-neutral-200 bg-white">
      <div className="border-b border-neutral-200 px-6 py-5">
        <Link href="/" className="cursor-pointer">
          <h2 className="font-heading text-base font-bold uppercase tracking-tight text-primary-800">
            Adhi Robotic Services
          </h2>
        </Link>
      </div>

      <nav className="flex-1 space-y-1.5 p-4">
        {menuItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-primary-800 text-white"
                  : "text-primary-800 hover:bg-primary-50 hover:text-primary-900"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-neutral-200 p-4">
        <Button
          onClick={logout}
          className="w-full"
          iconPosition="left"
          icon={<LogOut size={18} strokeWidth={2} />}
        >
          Logout
        </Button>
      </div>
    </aside>
  );
}
