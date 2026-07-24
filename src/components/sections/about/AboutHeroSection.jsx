"use client";

import Image from "next/image";
import { IMAGES } from "@/constants/assets";
import Reveal from "@/components/common/Reveal";

export default function AboutHeroSection() {
  return (
    <section className="section">
      <div className="container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

        {/* Left Content */}
        <Reveal animation="left">
          <div>
            <div className="flex flex-col gap-6">

              {/* <span className="caption w-fit rounded bg-primary-500 px-3 py-1 font-semibold uppercase tracking-[0.12em] text-neutral-900">
                EST. 2018
              </span> */}

              <h1 className="display tracking-[-0.03em] text-neutral-900">
                <span className="block">
                  Engineered for
                </span>

                <span className="block text-primary-700">
                  Breathability.
                </span>
              </h1>

              <p className="body-lg text-neutral-500">
                Adhi Robotics Services is a trusted provider of innovative
                engineering and facility management solutions, specializing in
                HVAC services, air quality management, industrial automation,
                and maintenance solutions. We are committed to delivering
                high-quality, reliable, and cost-effective services that
                enhance operational efficiency, safety, and sustainability.
              </p>

            </div>
          </div>
        </Reveal>

        {/* Right Image */}
        <Reveal animation="right" delay={200}>
          <div className="image-hover overflow-hidden rounded-xl">
            <Image
              src={IMAGES.aboutHeroImage}
              alt="Air Care Management Team"
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}