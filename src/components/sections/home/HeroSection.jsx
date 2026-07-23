import { IMAGES } from "@/constants/assets";
import Button from "@/components/common/Button";
export default function HeroSection() {
  return (
    <section className="relative">
      <div
        className="h-[600px] bg-cover bg-center bg-no-repeat md:h-[700px] lg:h-[800px]"
        style={{
          backgroundImage: `url(${IMAGES.heroImage.src})`,
        }}
      >
        <div className="container h-full py-10 lg:py-0">
          <div className="flex h-full items-center">
            <div className="max-w-full lg:max-w-[550px]">
              <div className="space-y-1">

                <h1 className="display text-primary-800">
                  Breathe
                </h1>

                <h1 className="display text-neutral-900">
                  Clean Air
                </h1>

                <p className="body-lg mt-8 max-w-full text-neutral-700 md:max-w-[550px]">
                  Superior HVAC maintenance and indoor air quality solutions
                  for commercial, industrial, and residential environments.
                  Precision-engineered health for your indoor space.
                </p>

                <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:gap-5">
                  <Button variant="primary">
                    Our Solutions
                  </Button>

                  <Button variant="secondary">
                    View Case Studies
                  </Button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}