import Image from "next/image";

export default function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50">
          <Image
            src={icon}
            alt={title}
            width={24}
            height={24}
          />
        </div>

        <div>
          <h3 className="body-lg font-semibold text-neutral-900">
            {title}
          </h3>

          <p className="body-sm mt-1 text-neutral-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}