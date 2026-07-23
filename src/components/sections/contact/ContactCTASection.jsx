import CTAComponent from "@/components/common/CTAComponent";
import { CONTACT_CTA } from "@/constants/contact";

export default function ContactCTASection() {
  return (
    <CTAComponent
      layout="center"
      title={CONTACT_CTA.title}
      description={CONTACT_CTA.description}
      buttons={CONTACT_CTA.buttons}
      backgroundClassName="rounded-lg bg-primary-800"
      titleClassName="text-white"
      descriptionClassName="mx-auto max-w-2xl text-white/70"
    />
  );
}