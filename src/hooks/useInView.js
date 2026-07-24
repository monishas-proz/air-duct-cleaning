"use client";

import { useEffect, useRef, useState } from "react";

export default function useInView({
  threshold = 0.3,
  rootMargin = "0px",
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= threshold) {
          setIsVisible(true);
        } else if (entry.intersectionRatio === 0) {
          setIsVisible(false);
        }
      },
      {
        threshold: [0, threshold],
        rootMargin,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}