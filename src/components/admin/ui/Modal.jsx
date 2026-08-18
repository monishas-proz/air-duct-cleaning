"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Modal({
  open,
  onClose,
  title,
  children,
}) {
  const closeRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:items-center transition-all duration-300 ${
        open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`relative my-8 w-full max-w-lg rounded-2xl bg-white shadow-2xl transition-all duration-300 ${
          open ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
          <h2 className="font-heading text-lg font-semibold text-neutral-900">
            {title}
          </h2>

          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close dialog"
            className="cursor-pointer rounded-lg p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="max-h-[calc(100vh-12rem)] overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
