"use client";

import Image from "next/image";

import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import Typewriter from "@/components/common/Typewriter";

import { HOME_ICONS } from "@/constants/assets";
import { SERVICES_TESTIMONIALS } from "@/constants/services";

import useInView from "@/hooks/useInView";

export default function ServicesTestimonialSection() {
  const { ref, isVisible } = useInView();

  return (
    <section className="section section-light">
      <div className="container">

        <Reveal animation="up">
          <SectionHeading title={SERVICES_TESTIMONIALS.title} />
        </Reveal>

        <Reveal animation="up" delay={200}>
          <div
            ref={ref}
            className="mt-14 grid gap-6 lg:grid-cols-2"
          >
            {SERVICES_TESTIMONIALS.testimonials.map((item) => (
              <div
                key={item.id}
                className="relative rounded-lg border border-neutral-200 bg-white p-8"
              >
                <Image
                  src={HOME_ICONS.icon99}
                  alt=""
                  width={42}
                  height={42}
                  className="absolute right-10 top-5"
                />

                <div className="flex h-full flex-col justify-between">

                  <p className="body-lg italic text-neutral-700">
                    "
                    <Typewriter
                      text={item.quote}
                      speed={20}
                      start={isVisible}
                    />
                    "
                  </p>

                  <div className="mt-12">
                    <h3 className="heading-3 text-neutral-900">
                      {item.designation}
                    </h3>

                    <p className="caption mt-1 font-semibold uppercase tracking-[0.14em] text-primary-700">
                      {item.company}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}