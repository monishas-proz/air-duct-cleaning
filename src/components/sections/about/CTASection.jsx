import CTAComponent from "@/components/common/CTAComponent";
import { ABOUT_CTA } from "@/constants/home";

export default function AboutCTASection() {
  return (
    <CTAComponent
      {...ABOUT_CTA}
      backgroundClassName="rounded-2xl bg-primary-800/90"

      titleClassName="text-white"

      descriptionClassName="text-white/80"
    />
  );
}