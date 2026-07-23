"use client";

import Reveal from "@/components/common/Reveal";

import ContactForm from "../../common/ContactForm";
import ContactInfoCard from "../../common/ContactInfoCard";
import ContactMapCard from "../../common/ContactMapCard";

export default function ContactFormSection() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

          {/* Left Column */}
          <Reveal
            animation="left"
            className="lg:col-span-8"
          >
            <ContactForm />
          </Reveal>

          {/* Right Column */}
          <Reveal
            animation="right"
            delay={200}
            className="lg:col-span-4"
          >
            <div className="flex h-full flex-col gap-8">
              <ContactInfoCard />

              <ContactMapCard />
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}