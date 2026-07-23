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
        flex flex-col
        rounded-md
        border
        p-8
        ${height}
        ${className}

        ${
          variant === "green"
            ? "border-0 bg-primary-700"
            : "border-neutral-200 bg-white"
        }
      `}
    >
      <Image
        src={icon}
        alt={title}
        width={38}
        height={38}
      />

      <h3
        className={`heading-3 mt-8 ${
          variant === "green"
            ? "text-white"
            : "text-neutral-900"
        }`}
      >
        {title}
      </h3>

      <p
        className={`body-md mt-4 ${
          variant === "green"
            ? "text-white/80"
            : "text-neutral-600"
        }`}
      >
        {description}
      </p>

      {variant === "green" ? (
        <div className="mt-auto">

          <div className="h-[3px] rounded-full bg-primary-800">

            <div className="mt-3 h-full w-[72%] rounded-full bg-primary-300" />

          </div>

        </div>
      ) : href && buttonText ? (
        <Link
          href={href}
          className="caption mt-auto flex items-center gap-2 font-semibold uppercase text-primary-700"
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
