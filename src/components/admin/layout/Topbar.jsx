"use client";

import { Menu, ArrowLeft } from "lucide-react";
import Button from "@/components/common/Button";

export default function Topbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-neutral-200 bg-white px-4 md:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          aria-label="Open navigation menu"
          className="cursor-pointer rounded-lg p-2 text-neutral-700 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 lg:hidden"
        >
          <Menu size={22} />
        </button>

        <h1 className="font-heading text-lg font-semibold tracking-tight text-neutral-800">
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
