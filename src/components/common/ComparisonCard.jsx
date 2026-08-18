"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function ComparisonCard({ before, after }) {
  const [slider, setSlider] = useState(50); // Start from left
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const updateSlider = (clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSlider(percentage);
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    updateSlider(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    updateSlider(e.clientX);
  };

  const stopDragging = () => {
    setDragging(false);
  };

  // Touch support (only responsiveness improvement)
  const handleTouchStart = (e) => {
    setDragging(true);
    updateSlider(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!dragging) return;
    updateSlider(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setDragging(false);
  };

  return (
    <div
      className="w-full"
      onMouseMove={handleMouseMove}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-2xl select-none"
      >
        {/* AFTER IMAGE (Base Layer) */}
        <div className="relative h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px] w-full">
          <Image
            src={after.image}
            alt="After"
            fill
            className="object-cover"
            draggable={false}
          />
        </div>

        {/* BEFORE IMAGE (Reveal from Left) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${slider}%` }}
        >
          <div className="relative h-full w-full">
            <Image
              src={before.image}
              alt="Before"
              fill
              className="object-cover"
              draggable={false}
            />
          </div>
        </div>

        {/* BEFORE CONTENT */}
        <div
          className="absolute inset-0 z-10 overflow-hidden"
          style={{ width: `${slider}%` }}
        >
          <div
            className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-5 md:p-6 lg:p-8 text-white transition-opacity duration-200 ${
              slider > 35 ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="rounded-full bg-red-600 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em]">
              Before
            </span>

            <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              {before.title}
            </h3>

            <p className="mt-2 sm:mt-3 max-w-md sm:max-w-lg text-sm sm:text-base text-white/90 leading-relaxed">
              {before.description}
            </p>
          </div>
        </div>

        {/* AFTER CONTENT */}
        <div
          className="absolute inset-0 z-10 overflow-hidden"
          style={{ left: `${slider}%`, width: `${100 - slider}%` }}
        >
          <div
            className={`absolute bottom-0 right-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-5 md:p-6 lg:p-8 text-right text-white transition-opacity duration-200 ${
              slider < 65 ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="rounded-full bg-primary-600 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em]">
              After
            </span>

            <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              {after.title}
            </h3>

            <p className="mt-2 sm:mt-3 ml-auto max-w-md sm:max-w-lg text-sm sm:text-base text-white/90 leading-relaxed">
              {after.description}
            </p>
          </div>
        </div>

        {/* SLIDER */}
        <div
          className="absolute top-0 bottom-0 z-30 cursor-ew-resize"
          style={{ left: `${slider}%`, transform: "translateX(-50%)" }}
        >
          {/* Tooltip */}
          <div
            className={`absolute transition-all duration-200 ${
              showTooltip ? "opacity-100" : "opacity-0"
            } ${
              slider < 20
                ? "left-14 top-1/2 -translate-y-1/2"
                : slider > 80
                ? "right-14 top-1/2 -translate-y-1/2"
                : "left-1/2 -translate-x-1/2 -top-14"
            }`}
          >
            <div className="relative rounded-lg bg-black px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white whitespace-nowrap shadow-xl">
              {slider > 50
                ? "Drag to see after image"
                : "Drag to see before image"}

              {/* Arrow */}
              <div
                className={`absolute ${
                  slider < 20
                    ? "left-0 top-1/2 -translate-x-full -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-transparent border-r-black"
                    : slider > 80
                    ? "right-0 top-1/2 translate-x-full -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-transparent border-l-black"
                    : "left-1/2 top-full -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"
                }`}
              />
            </div>
          </div>

          {/* Divider */}
          <div className="h-full w-[2px] bg-white shadow-lg" />

          {/* Handle */}
          <button
            onMouseDown={handleMouseDown}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onTouchStart={handleTouchStart}
            className="absolute top-1/2 left-1/2 flex h-10 w-10 sm:h-12 sm:w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl cursor-ew-resize"
          >
            <div className="flex gap-1">
              <div className="h-3 sm:h-4 w-[2px] bg-gray-400" />
              <div className="h-3 sm:h-4 w-[2px] bg-gray-400" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}