"use client";

import Image from "next/image";

import Reveal from "@/components/common/Reveal";
import Button from "@/components/common/Button";
import FeatureList from "@/components/common/FeatureList";

import { DISINFECTION } from "@/constants/services";
import {
  ABOUT_ICONS,
  SERVICES_IMAGES,
  SERVICES_ICONS,
} from "@/constants/assets";

export default function DisinfectionSection() {
  return (
    <section className="section section-light">
      <div className="container">

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">

          <Reveal animation="left">
            <div className="rounded-xl bg-white p-8 shadow-sm lg:p-10">

              <Image
                src={SERVICES_ICONS.disinfectionIcon}
                alt="Disinfection"
                width={38}
                height={38}
              />

              <h2 className="heading-1 mt-4 text-neutral-900">
                {DISINFECTION.title}
              </h2>

              <p className="body-lg mt-6 italic text-neutral-600">
                "{DISINFECTION.description}"
              </p>

              <FeatureList
                className="mt-8"
                icon={ABOUT_ICONS.tick}
                items={DISINFECTION.features}
                iconSize={20}
                textClassName="body-md"
              />

              <div className="mt-10">
                <Button
                  href={DISINFECTION.buttonHref}
                  variant="secondary"
                  className="bg-secondary-600/90 text-white hover:bg-secondary-900"
                >
                  {DISINFECTION.buttonText}
                </Button>
              </div>

            </div>
          </Reveal>

          <Reveal animation="right" delay={200}>
            <div className="image-hover overflow-hidden rounded-xl">
              <Image
                src={SERVICES_IMAGES.disinfection}
                alt="Disinfection Services"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}