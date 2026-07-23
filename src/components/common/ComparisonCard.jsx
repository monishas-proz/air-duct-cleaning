"use client";

import { useState } from "react";
import Image from "next/image";

function ImagePanel({
  image,
  label,
  title,
  description,
  badgeColor,
}) {
  const [active, setActive] = useState(false);

  return (
    <div
      className="group relative h-72 cursor-pointer overflow-hidden sm:h-80 lg:h-[380px]"
      onClick={() => setActive((prev) => !prev)}
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div
        className={`
          absolute inset-0
          bg-gradient-to-t
          from-black/85
          via-black/45
          to-transparent
          transition-all duration-500 ease-out
          ${
            active
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
          }
        `}
      />

      {/* Badge */}
      <span
        className={`
          absolute left-5 top-5 z-20
          rounded-full
          px-4 py-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.15em]
          text-white
          ${badgeColor}
        `}
      >
        {label}
      </span>

      {/* Content */}
      <div
        className={`
          absolute inset-x-0 bottom-0 z-20
          p-6
          transition-all duration-500 ease-out
          ${
            active
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          }
        `}
      >
        <h3 className="heading-3 text-white drop-shadow-md">
          {title}
        </h3>

        <p className="body-sm mt-3 leading-6 text-white/90">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ComparisonCard({
  before,
  after,
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-md">

      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* BEFORE */}
        <ImagePanel
          image={before.image}
          label="Before"
          title={before.title}
          description={before.description}
          
        />

        {/* AFTER */}
        <ImagePanel
          image={after.image}
          label="After"
          title={after.title}
          description={after.description}
          
        />

      </div>

    </div>
  );
}