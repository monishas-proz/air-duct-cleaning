"use client";

import { useEffect, useRef, useState } from "react";
import { MoreVertical } from "lucide-react";

export default function ActionMenu({
  onEdit,
  onDelete,
}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className="relative inline-block"
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-md p-2 transition hover:bg-neutral-100 cursor-pointer"
      >
        <MoreVertical
          size={18}
          className="text-neutral-600"
        />
      </button>

      {open && (
        <div className="absolute right-full top-1/2 z-20 mr-2 w-36 -translate-y-1/2 overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-lg">
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onEdit();
            }}
            className="block w-full cursor-pointer px-4 py-3 text-left text-sm text-neutral-700 transition hover:bg-neutral-100"
          >
            Edit
          </button>

          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onDelete();
            }}
            className="block w-full cursor-pointer px-4 py-3 text-left text-sm text-red-600 transition hover:bg-red-50"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}