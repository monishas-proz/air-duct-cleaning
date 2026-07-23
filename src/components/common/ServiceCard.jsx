import Image from "next/image";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

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
  className =""
}) {
  return (
    <div className="group flex h-full flex-col border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary-200 hover:shadow-xl lg:p-8">

        {image && (
            <div className="overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={title}
                className="h-[220px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}

        {icon && (
          <div
            className={`mt-6 flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:scale-110 ${className}`}
          >
            <Image
              src={icon}
              alt={title}
              width={30}
              height={30}
            />
          </div>
        )}

      <div className={"mt-6"}>

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