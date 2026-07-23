"use client";

import Reveal from "@/components/common/Reveal";
import ComparisonCard from "@/components/common/ComparisonCard";
import { BEFORE_AFTER } from "@/constants/services";

export default function BeforeAfterSection() {
  return (
    <section className="section section-light">
      <div className="container">

        <div className="space-y-16">
          {BEFORE_AFTER.map((item, index) => (
            <Reveal
              key={item.id}
              animation="up"
              delay={index * 150}
            >
              <ComparisonCard
                before={item.before}
                after={item.after}
              />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}