"use client";

import Reveal from "@/components/common/Reveal";
import IndustryImageCard from "@/components/common/IndustryImageCard";
import IndustryInfoCard from "@/components/common/IndustryInfoCard";
import { INDUSTRIES } from "@/constants/industries";

export default function GridSection() {
  return (
    <section className="section section-gray">
      <div className="container">

        {/* First Row */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">

          <Reveal
            animation="left"
            className="lg:w-[68%]"
          >
            <IndustryImageCard
              {...INDUSTRIES[0]}
              height="lg:h-[420px] h-[320px]"
            />
          </Reveal>

          <Reveal
            animation="right"
            delay={150}
            className="lg:w-[32%]"
          >
            <IndustryInfoCard
              {...INDUSTRIES[1]}
              height="h-auto"
            />
          </Reveal>

        </div>

        {/* Second Row */}
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start">

          <Reveal
            animation="left"
            className="lg:w-[32%]"
          >
            <IndustryInfoCard
              {...INDUSTRIES[2]}
              variant="green"
              height="h-auto"
            />
          </Reveal>

          <Reveal
            animation="right"
            delay={150}
            className="lg:w-[68%]"
          >
            <IndustryImageCard
              {...INDUSTRIES[3]}
              height="lg:h-[390px] h-[320px]"
            />
          </Reveal>

        </div>

      </div>
    </section>
  );
}