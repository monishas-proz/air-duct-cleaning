import Image from "next/image";

export default function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="card card-hover h-full p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-50">
          <Image
            src={icon}
            alt={title}
            width={24}
            height={24}
          />
        </div>

        <div className="min-w-0">
          <h3 className="font-heading text-base font-semibold text-neutral-900">
            {title}
          </h3>

          <p className="body-sm mt-1.5 text-neutral-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
