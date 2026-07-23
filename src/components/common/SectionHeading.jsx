export default function SectionHeading({
  title,
  description,
  align = "center",
  maxWidth = "3xl",
  className = "",
}) {
  const alignment = {
    left: "text-left",
    center: "text-center",
  };

  const widths = {
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    full: "max-w-full",
  };

  return (
    <div
      className={`${
        align === "center" ? "mx-auto" : ""
      } ${widths[maxWidth]} ${alignment[align]} ${className}`}
    >
      <h2 className="heading-1 text-neutral-900">
        {title}
      </h2>

      {description && (
        <p className="body-lg mx-auto mt-4 max-w-2xl text-neutral-600">
          {description}
        </p>
      )}
    </div>
  );
}