"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

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

    {
      title: "Contacts",
      href: "/admin/contacts",
    },
];

export default function Sidebar() {
  const pathname = usePathname();

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

  const router = useRouter();

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-72 flex-col border-r border-neutral-200 bg-white shadow-xl">
      <div className="border-b border-primary-200 bg-primary-50 px-8 py-6">
        <div>
          <Link href="/"
                className="cursor-pointer">
          <h2 className="body-lg font-heading font-bold uppercase text-primary-800">
            Adhi Robotic Services
          </h2>
          </Link>
        </div>
      </div>
   
      <nav className="flex-1 space-y-2 p-6">
        {menuItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center rounded-xl px-5 py-4 transition-all duration-200
              ${
                active
                  ? "bg-primary-800 text-white shadow-lg"
                  :"text-primary-800 hover:bg-primary-800 hover:text-white"
              }
              active:scale-95`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-neutral-200 p-5">
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
  );
}