"use client";

import Image from "next/image";
import { INDUSTRIES_TESTIMONIAL } from "@/constants/industries";
import { HOME_ICONS } from "@/constants/assets";

import Typewriter from "@/components/common/Typewriter";
import useInView from "@/hooks/useInView";

export default function IndustriesTestimonialSection() {
  const { ref, isVisible } = useInView();

  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <h2 className="heading-2 text-neutral-900">
            Trusted by Facility Leaders
          </h2>
        </div>

        <div
          ref={ref}
          className="mt-12 rounded-md border border-neutral-200 bg-neutral-50 p-6 sm:p-8 lg:p-10"
        >
          <div className="relative">
            <span className="absolute -left-2">
              <Image
                src={HOME_ICONS.icon99}
                alt=""
                width={42}
                height={42}
              />
            </span>

            <p className="body-lg relative z-10 max-w-5xl italic text-neutral-600">
              "
              <Typewriter
                text={INDUSTRIES_TESTIMONIAL.description}
                speed={18}
                start={isVisible}
              />
              "
            </p>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
              <span className="body-sm font-bold text-primary-700">
                {INDUSTRIES_TESTIMONIAL.initials}
              </span>
            </div>

            <div>
              <h3 className="heading-3 text-neutral-900">
                {INDUSTRIES_TESTIMONIAL.name}
              </h3>

              <p className="caption mt-1 font-semibold uppercase tracking-[0.15em] text-neutral-500">
                {INDUSTRIES_TESTIMONIAL.designation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}