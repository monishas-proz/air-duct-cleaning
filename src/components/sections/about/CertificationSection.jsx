import ContentSplitSection from "@/components/common/ContentSplitSection";
import { ABOUT_ICONS, IMAGES } from "@/constants/assets";

export default function CertificationSection() {
  return (
    <ContentSplitSection
      image={IMAGES.certificate}
      imageAlt="ISO Certification"
      

      title={
        <>
          Certified Quality.
          <br />
          Guaranteed Safety.
        </>
      }
      titleClassName="text-neutral-900"

      

      description={
        <>
          Air Care Management is proud to be{" "}
          <strong>ISO 9001:2015 Certified</strong>.
          This international recognition validates our robust quality
          management systems and our unwavering commitment to customer
          satisfaction.
        </>
      }

      features={[
        "Standardized Service Protocols",
        "Continuous Improvement Cycles",
        "Rigorous Auditor Compliance",
      ]}

      featureIcon={ABOUT_ICONS.tick}

      // button={{
      //   text: "Download Certification Document",
      //   variant: "link",
      //   icon: ABOUT_ICONS.downloadIcon,
      // }}
    />
  );
}