import CTAComponent from "@/components/common/CTAComponent";
import { INDUSTRIES_CTA } from "@/constants/industries";

export default function IndustriesCTASection() {
  return (
    <CTAComponent
      {...INDUSTRIES_CTA}
      backgroundClassName="bg-neutral-900"

      titleClassName="text-white"

      descriptionClassName="text-white/70"
    />
  );
}