import { ABOUT_STATS } from "@/constants/home";
import Image from "next/image";
import { IMAGES } from "@/constants/assets";
import AnimatedCounter from "@/components/common/AnimatedCounter";
import Reveal from "@/components/common/Reveal";

export default function AboutSection() {
  return (
    <section className="bg-neutral-50 py-12">
      <div className="container flex flex-col gap-10 lg:flex-row lg:items-center">

        {/* Left Content */}
        <Reveal className="max-w-full lg:max-w-[537px]">
          <div className="mt-4 flex flex-col gap-5 lg:mt-10 lg:gap-6">

            <span className="caption font-semibold uppercase tracking-[0.2em] text-secondary-600">
              Engineering Excellence
            </span>

            <h2 className="heading-1 tracking-[-0.03em] text-neutral-900">
              About Air Care
              <br />
              Management
            </h2>

            <p className="body-md text-neutral-600">
              With a team of experienced professionals and skilled technicians,
              we offer comprehensive solutions including HVAC duct cleaning,
              kitchen exhaust cleaning, indoor air quality testing, air
              balancing, air conditioning installation and commissioning,
              preventive maintenance, and customized engineering services.
              Our customer-centric approach ensures that every project is
              completed with precision, professionalism, and adherence to
              industry standards.
            </p>

            <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:gap-12 lg:mt-8 lg:gap-16">
              {ABOUT_STATS.map((item, index) => (
                <Reveal
                  key={item.id}
                  delay={index * 150}
                >
                  <div className="flex items-stretch gap-4">
                    <div
                      className={`w-1 rounded-full ${
                        item.id === 1
                          ? "bg-primary-800"
                          : "bg-secondary-500"
                      }`}
                    />

                    <div>
                      <p
                        className={`heading-2 ${
                          item.color === "primary"
                            ? "text-primary-800"
                            : "text-secondary-500"
                        }`}
                      >
                        <AnimatedCounter value={item.value} />
                      </p>

                      <span className="caption block font-semibold uppercase tracking-[0.08em] text-neutral-700">
                        {item.label}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </Reveal>

        {/* Right Image */}
        <Reveal delay={200} className="flex-1">
          <div className="image-hover overflow-hidden rounded-xl">
            <Image
              src={IMAGES.aboutImage}
              alt="About Air Care Management"
              className="h-auto w-full object-cover"
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}