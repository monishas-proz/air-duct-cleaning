"use client";

import ServiceCard from "@/components/common/ServiceCard";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { IMAGES } from "@/constants/assets";

const TEAM = [
  {
    id: 1,
    image: IMAGES.leadership,
    title: "Engineering Leadership",
    subtitle: "MASTER TECHNICIANS",
    description:
      "Overseeing complex industrial ventilation designs and large-scale IAQ audits.",
  },
  {
    id: 2,
    image: IMAGES.analyst,
    title: "IAQ Analysts",
    subtitle: "CERTIFIED SPECIALISTS",
    description:
      "Experts in particulate detection, VOC analysis, and biological contaminant mitigation.",
  },
  {
    id: 3,
    image: IMAGES.operations,
    title: "Field Operations",
    subtitle: "SKILLED HVAC CREW",
    description:
      "Precision maintenance and installation teams trained in the latest green technologies.",
  },
  {
    id: 4,
    image: IMAGES.advisory,
    title: "Advisory Board",
    subtitle: "STRATEGIC GOVERNANCE",
    description:
      "Ensuring every project meets our high internal standards and client expectations.",
  },
];

export default function TeamSection() {
  return (
    <section className="section section-gray">
      <div className="container">

        {/* Section Heading */}
        <Reveal animation="up">
          <SectionHeading
            maxWidth="4xl"
            title="The Expertise Behind the Air"
            description="Our team consists of certified HVAC technicians, indoor air quality specialists, and mechanical engineers dedicated to technical mastery."
          />
        </Reveal>

        {/* Team Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {TEAM.map((member, index) => (
            <Reveal
              key={member.id}
              animation="up"
              delay={index * 120}
            >
              <ServiceCard
                image={member.image}
                title={member.title}
                subtitle={member.subtitle}
                description={member.description}
              />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}