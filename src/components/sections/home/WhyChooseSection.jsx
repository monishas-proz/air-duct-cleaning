"use client";

import SectionHeading from "@/components/common/SectionHeading";
import FeatureCard from "@/components/common/FeatureCard";
import Reveal from "@/components/common/Reveal";
import { WHY_CHOOSE } from "@/constants/home";

export default function WhyChooseSection() {
  return (
    <section className="section section-light">
      <div className="container">

        {/* Heading */}
        <Reveal animation="up">
          <SectionHeading
            title={WHY_CHOOSE.title}
            description={WHY_CHOOSE.description}
          />
        </Reveal>

        {/* Features */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {WHY_CHOOSE.features.map((feature, index) => (
            <Reveal
              key={feature.id}
              animation="up"
              delay={index * 100}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}