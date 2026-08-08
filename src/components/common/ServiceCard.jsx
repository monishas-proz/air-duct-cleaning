import Image from "next/image";

export default function ServiceCard({
  image,
  icon,
  title,
  subtitle,
  description,
  color = "primary",
  href,
  buttonText,
  buttonIcon,
  className = "",
}) {
  return (
    <div className="card card-hover group flex h-full flex-col p-6 lg:p-7">
      {image && (
        <div className="overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={title}
            className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {icon && (
        <div
          className={`mt-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${className}`}
        >
          <Image
            src={icon}
            alt={title}
            width={30}
            height={30}
          />
        </div>
      )}

      <div className={`${image || icon ? "mt-6" : ""} flex flex-1 flex-col`}>
        <h3 className="heading-3 text-neutral-900 transition-colors duration-300 group-hover:text-primary-700">
          {title}
        </h3>

        {subtitle && (
          <p className="caption mt-2 font-semibold uppercase tracking-[0.14em] text-primary-700">
            {subtitle}
          </p>
        )}

        <p className="body-md mt-4 text-neutral-600">
          {description}
        </p>
      </div>
    </div>
  );
}
