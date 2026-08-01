"use client";

import { Menu , ArrowLeft } from "lucide-react";
import Button from "@/components/common/Button";
import Link from "next/link";


export default function Topbar({ onMenuClick }) {

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-neutral-200 bg-white px-4 shadow-sm md:px-8">

      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 transition hover:bg-neutral-100 lg:hidden cursor-pointer"
        >
          <Menu size={24} />
        </button>

        <h1 className="text-2xl font-bold text-neutral-800">
          Dashboard
        </h1>
      </div>

      <div className="hidden lg:block">
        <Button
          href="/"
          size="sm"
          icon={<ArrowLeft size={18} />}
          iconPosition="left"
        >
          Back to Home
        </Button>
      </div>

    </header>
  );
}