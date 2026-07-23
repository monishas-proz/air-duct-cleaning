import Image from "next/image";
import { IMAGES } from "@/constants/assets";
import Reveal from "@/components/common/Reveal";

export default function ImageSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-0">

          {/* Industrial Solutions */}
          <Reveal animation="left">
            <div className="image-hover group rounded-xl md:rounded-none">
              <Image
                src={IMAGES.industrial_solutions}
                alt="Industrial Solutions"
                className="h-[300px] w-full object-cover md:h-full"
              />

              <div className="absolute inset-0 bg-black/35 transition-all duration-300 group-hover:bg-black/60" />

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  md:bottom-8
                  md:left-8
                  z-10

                  opacity-0
                  translate-y-6
                  scale-95

                  transition-all
                  duration-300
                  ease-out

                  group-hover:translate-y-0
                  group-hover:opacity-100
                  group-hover:scale-100
                "
              >
                <h3 className="heading-3 text-white/80">
                  Industrial Solutions
                </h3>

                <p className="caption mt-1 font-semibold text-white/60">
                  Scalable air management for heavy industry.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Corporate Wellness */}
          <Reveal animation="right" delay={200}>
            <div className="image-hover group rounded-xl md:rounded-none">
              <Image
                src={IMAGES.corporate_wellness}
                alt="Corporate Wellness"
                className="h-[300px] w-full object-cover md:h-full"
              />

              <div className="absolute inset-0 bg-black/35 transition-all duration-300 group-hover:bg-black/60" />

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  md:bottom-8
                  md:left-8
                  z-10

                  opacity-0
                  translate-y-6
                  scale-95

                  transition-all
                  duration-300
                  ease-out

                  group-hover:translate-y-0
                  group-hover:opacity-100
                  group-hover:scale-100
                "
              >
                <h3 className="heading-3 text-white/80">
                  Corporate Wellness
                </h3>

                <p className="caption mt-1 font-semibold text-white/60">
                  Enhancing office environments for productivity.
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}