"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

export default function Modal({
  open,
  onClose,
  title,
  children,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        open
          ? "visible opacity-100"
          : "invisible opacity-0"
      }`}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Modal */}
      <div
        className={`relative mx-4 w-full max-w-lg rounded-2xl bg-white shadow-2xl transition-all duration-300 ${
          open
            ? "scale-100 translate-y-0"
            : "scale-95 translate-y-4"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-5">
          <h2 className="text-xl font-semibold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-neutral-100 active:scale-95 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}