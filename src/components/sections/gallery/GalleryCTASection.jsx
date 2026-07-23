import CTAComponent from "@/components/common/CTAComponent";
import { GALLERY_CTA } from "@/constants/gallery";

export default function GalleryCTASection() {
  return (
    <CTAComponent
      layout="split"
      title={GALLERY_CTA.title}
      description={GALLERY_CTA.description}
      buttons={GALLERY_CTA.buttons}
      backgroundClassName="rounded-lg bg-primary-800"
      titleClassName="text-white max-w-[520px]"
      descriptionClassName="text-white/70 max-w-[520px]"
    />
  );
}