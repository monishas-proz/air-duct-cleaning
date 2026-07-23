"use client";

import Image from "next/image";

import { ABOUT_ICONS } from "@/constants/assets";

import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";

const PRINCIPLES = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "To provide innovative, reliable, and sustainable engineering solutions that improve indoor environments, operational efficiency, and customer satisfaction. Our Vision To become a leading engineering and facility services company recognized for quality, innovation, integrity, and customer excellence.",
    icon: ABOUT_ICONS.mission,
    variant: "mission",
  },
  {
    id: 2,
    title: "Integrity",
    description:
      "Transparent reporting and honest assessments for every facility.",
    icon: ABOUT_ICONS.integrity,
    variant: "integrity",
  },
  {
    id: 3,
    title: "Precision",
    description:
      "Engineering-led approaches to complex HVAC challenges.",
    icon: ABOUT_ICONS.precision,
    variant: "precision",
  },
  {
    id: 4,
    title: "Global Standards",
    description:
      "Our operations adhere to the highest international quality management systems, ensuring consistent excellence in every service call.",
    icon: ABOUT_ICONS.global,
    variant: "global",
  },
];

export default function PrinciplesSection() {
  return (
    <section className="section section-light">
      <div className="container">

        <Reveal animation="up">
          <SectionHeading title="Foundational Principles" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12">

          {PRINCIPLES.map((item, index) => (
            <Reveal
              key={item.id}
              animation="up"
              delay={index * 120}
              className={
                item.variant === "mission"
                  ? "lg:col-span-8"
                  : item.variant === "integrity"
                  ? "lg:col-span-4"
                  : item.variant === "precision"
                  ? "lg:col-span-4"
                  : "lg:col-span-8"
              }
            >
              <div
                className={`h-full rounded-xl border border-neutral-200 p-8 ${
                  item.variant === "mission"
                    ? "bg-white"
                    : item.variant === "integrity"
                    ? "border-0 bg-primary-700"
                    : item.variant === "precision"
                    ? "bg-white"
                    : "border-0 bg-secondary-800/80"
                }`}
              >
                {item.variant === "mission" && (
                  <>
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={34}
                        height={34}
                      />

                      <h3 className="heading-3 text-neutral-900">
                        {item.title}
                      </h3>
                    </div>

                    <p className="body-md mt-5 pl-[50px] text-neutral-600">
                      {item.description}
                    </p>
                  </>
                )}

                {item.variant === "integrity" && (
                  <>
                    <div className="flex h-14 w-14 items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={48}
                        height={28}
                      />
                    </div>

                    <h3 className="heading-3 mt-8 text-white">
                      {item.title}
                    </h3>

                    <p className="body-md mt-4 text-white/80">
                      {item.description}
                    </p>
                  </>
                )}

                {item.variant === "precision" && (
                  <>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={34}
                      height={34}
                    />

                    <h3 className="heading-3 mt-8 text-neutral-900">
                      {item.title}
                    </h3>

                    <p className="body-md mt-4 text-neutral-600">
                      {item.description}
                    </p>
                  </>
                )}

                {item.variant === "global" && (
                  <div className="flex h-full flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div className="max-w-xl">
                      <h3 className="heading-3 text-white">
                        {item.title}
                      </h3>

                      <p className="body-md mt-4 text-white/80">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-white/10">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={42}
                        height={42}
                      />
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}