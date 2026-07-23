"use client";

import Reveal from "@/components/common/Reveal";
import ServiceCard from "@/components/common/ServiceCard";
import { SERVICES } from "@/constants/services";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

export default function CardSection() {
  const { visibleCount, loadMoreRef } =
    useInfiniteScroll(SERVICES.length, 3);

  return (
    <section className="section pt-0">
      <div className="container">

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

          {SERVICES.slice(0, visibleCount).map((service, index) => (
            <Reveal
              key={service.id}
              animation="up"
              delay={(index % 3) * 120}
            >
              <ServiceCard {...service} />
            </Reveal>
          ))}

        </div>

        {visibleCount < SERVICES.length && (
          <div
            ref={loadMoreRef}
            className="mt-10 flex justify-center"
          >
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary-600 border-t-transparent" />
          </div>
        )}

      </div>
    </section>
  );
}