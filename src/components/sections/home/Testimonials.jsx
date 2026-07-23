"use client";

import Image from "next/image";
import { HOME_ICONS, IMAGES } from "@/constants/assets";
import { TESTIMONIAL } from "@/constants/home";

import Typewriter from "@/components/common/Typewriter";
import Reveal from "@/components/common/Reveal";
import useInView from "@/hooks/useInView";

export default function TestimonialSection() {
  const { ref, isVisible } = useInView();

  return (
    <section className="bg-neutral-50 py-12 lg:py-16">
      <div className="container">
        <Reveal animation="up">
          <div
            ref={ref}
            className="mx-auto max-w-4xl"
          >
            <Image
              src={HOME_ICONS.icon99}
              alt="Quote"
              width={48}
              height={48}
              className="mb-4 h-10 w-10 lg:h-12 lg:w-12"
            />

            <p className="body-lg text-center italic text-neutral-700">
              "
              <Typewriter
                text={TESTIMONIAL.quote}
                speed={30}
                start={isVisible}
              />
              "
            </p>

            <div className="mt-8 flex flex-col items-center lg:mt-10">
              <Image
                src={IMAGES.managerImage}
                alt={TESTIMONIAL.name}
                width={64}
                height={64}
                className="rounded-xl border-4 border-primary-600"
              />

              <h3 className="heading-3 mt-3 text-neutral-900">
                {TESTIMONIAL.name}
              </h3>

              <p className="caption uppercase tracking-[0.15em] text-neutral-600">
                {TESTIMONIAL.designation}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}