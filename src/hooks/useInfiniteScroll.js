import { useEffect, useRef, useState } from "react";

export default function useInfiniteScroll(
  totalItems,
  itemsPerLoad = 3
) {
  const [visibleCount, setVisibleCount] = useState(itemsPerLoad);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    const target = loadMoreRef.current;

    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          visibleCount < totalItems
        ) {
          setVisibleCount((prev) =>
            Math.min(prev + itemsPerLoad, totalItems)
          );
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [visibleCount, totalItems, itemsPerLoad]);

  return {
    visibleCount,
    loadMoreRef,
  };
}