"use client";

import { SERVICES } from "@/constants/home";
import { HOME_ICONS } from "@/constants/assets";

import ServiceCard from "@/components/common/ServiceCard";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";

import useInfiniteScroll from "@/hooks/useInfiniteScroll";

export default function ServicesSection() {
  const { visibleCount, loadMoreRef } = useInfiniteScroll(
    SERVICES.length,
    3
  );

  return (
    <section className="section">
      <div className="container">

        {/* Section Heading */}
        <Reveal animation="up">
          <SectionHeading
            title="Core Services"
            description="At Adhi Robotics Services, we provide reliable HVAC, air quality, engineering, and facility management solutions designed to improve system performance, energy efficiency, and indoor environmental quality. Our experienced professionals deliver customized solutions that meet the highest industry standards."
          />
        </Reveal>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">

          {SERVICES.slice(0, visibleCount).map((service, index) => (
            <Reveal
              key={service.id}
              animation="up"
              delay={index * 120}
            >
              <ServiceCard
                {...service}
                href="/services"
                buttonText="Learn More"
                buttonIcon={HOME_ICONS.buttonIcon}
                className={service.className}
              />
            </Reveal>
          ))}

        </div>

        {/* Infinite Scroll Loader */}
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