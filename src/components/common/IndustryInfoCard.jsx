import Image from "next/image";
import Link from "next/link";

export default function IndustryInfoCard({
  icon,
  title,
  description,
  href,
  buttonText,
  buttonIcon,
  variant = "white",
  className = "",
  height = "h-[340px]",
}) {
  return (
    <div
      className={`
        card
        flex
        flex-col
        p-7
        ${height}
        ${className}

        ${
          variant === "green"
            ? "border-0 bg-primary-700"
            : "border-neutral-200 bg-white"
        }
      `}
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-xl ${
          variant === "green" ? "bg-white/10" : "bg-primary-50"
        }`}
      >
        <Image
          src={icon}
          alt={title}
          width={26}
          height={26}
        />
      </div>

      <h3
        className={`heading-3 mt-7 ${
          variant === "green" ? "text-white" : "text-neutral-900"
        }`}
      >
        {title}
      </h3>

      <p
        className={`body-md mt-3.5 ${
          variant === "green" ? "text-white/80" : "text-neutral-600"
        }`}
      >
        {description}
      </p>

      {variant === "green" ? (
        <div className="mt-auto pt-8">
          <div className="h-1 w-24 rounded-full bg-primary-500" />
        </div>
      ) : href && buttonText ? (
        <Link
          href={href}
          className="caption mt-auto flex items-center gap-2 pt-8 font-semibold uppercase text-primary-700 transition-colors hover:text-primary-800"
        >
          {buttonText}

          {buttonIcon && (
            <Image
              src={buttonIcon}
              alt=""
              width={12}
              height={12}
            />
          )}
        </Link>
      ) : null}
    </div>
  );
}
