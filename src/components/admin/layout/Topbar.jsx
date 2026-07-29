"use client";

import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "@/components/common/Button";

export default function Topbar({ onMenuClick }) {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("admin_token");
    router.replace("/admin/login");
  };

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-neutral-200 bg-white px-4 shadow-sm md:px-8">
      <button
        onClick={onMenuClick}
        className="rounded-lg p-2 transition hover:bg-neutral-100 lg:hidden cursor-pointer"
      >
        <Menu size={24} />
      </button>

      <h1 className="text-2xl font-bold text-neutral-800">
        Dashboard
      </h1>

      <Button
        variant="primary"
        onClick={logout}
      
      >
        Logout
      </Button>
    </header>
  );
}