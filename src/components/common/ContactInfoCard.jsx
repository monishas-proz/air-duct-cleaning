import ContactInfoList from "@/components/common/ContactInfoList";

export default function ContactInfoCard() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm md:p-8">
      <h2 className="heading-2 text-primary-700">
        Direct Contact
      </h2>

      <div className="mt-4">
        <ContactInfoList variant="card" />
      </div>
    </div>
  );
}