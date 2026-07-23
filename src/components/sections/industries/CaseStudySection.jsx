import ContentSplitSection from "@/components/common/ContentSplitSection";
import { ABOUT_ICONS } from "@/constants/assets";
import { FEATURED_CASE_STUDY } from "@/constants/industries";

export default function CaseStudySection() {
  return (
    <ContentSplitSection
      image={FEATURED_CASE_STUDY.image}
      imageAlt={FEATURED_CASE_STUDY.title}
      imagePosition="left"

      badge={FEATURED_CASE_STUDY.badge}

      title={FEATURED_CASE_STUDY.title}
      description={FEATURED_CASE_STUDY.description}

      features={FEATURED_CASE_STUDY.points}
      featureIcon={ABOUT_ICONS.tick}

      button={{
        text: FEATURED_CASE_STUDY.buttonText,
        href: FEATURED_CASE_STUDY.buttonHref,
        variant: "secondary",
        className: "border-secondary-700 text-secondary-700",
      }}
    />
  );
}