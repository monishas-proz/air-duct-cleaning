"use client";

import useInView from "@/hooks/useInView";

export default function Reveal({
  children,
  animation = "up",
  delay = 0,
  duration = 700,
  distance = 60,
  className = "",
}) {
  const { ref, isVisible } = useInView();

  const transforms = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    zoom: "scale(0.92)",
    fade: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform:
          animation === "fade"
            ? "none"
            : isVisible
            ? "translate(0,0) scale(1)"
            : transforms[animation],
        transition: `
          opacity ${duration}ms cubic-bezier(.22,1,.36,1) ${delay}ms,
          transform ${duration}ms cubic-bezier(.22,1,.36,1) ${delay}ms
        `,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}