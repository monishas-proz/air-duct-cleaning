"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({
  value,
  duration = 1000,
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;

        const endValue = parseInt(value.replace(/\D/g, ""));
        const suffix = value.replace(/[0-9]/g, "");

        let start = 0;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1
          );

          const current = Math.floor(progress * endValue);

          setCount(current);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value, duration]);

  const suffix = value.replace(/[0-9]/g, "");

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}