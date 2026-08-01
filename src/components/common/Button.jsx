import Link from "next/link";
import Image from "next/image";

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
  disabled = false,
  icon,
  iconPosition = "right",
  size = "md",
}) {
  const sizes = {
    sm: "px-4 py-2 body-md",
    md: "px-8 py-4 body-md",
    lg: "px-10 py-5 body-lg",
  };

  const baseClasses =
    "btn-effect inline-flex items-center justify-center gap-2 rounded-md font-semibold";

  const variants = {
    primary: "bg-primary-800 text-white",

    secondary:
      "border-2 border-secondary-500 text-secondary-600",

    white: "bg-white text-primary-700",

    outlineWhite:
      "border border-white/50 text-white",

    outlinePrimary:
      "border border-primary-700 text-primary-700",

    link:
      "p-0 rounded-none text-primary-700",

    chip:
      "rounded-full border border-neutral-200 bg-white px-5 py-2 body-sm font-medium text-neutral-700",

    danger:
      "bg-red-600 text-white hover:bg-red-700",

    modelCancel:
      "border border-neutral-400 bg-white text-neutral-600 hover:bg-neutral-100 hover:border-neutral-500 hover:text-neutral-800",
  };

  const classes = `${baseClasses} btn-${variant} ${variants[variant]} ${sizes[size]} ${className}`;

  const renderIcon = () => {
    if (!icon) return null;

    // React element (Lucide, React Icons, etc.)
    if (typeof icon === "object" && "$$typeof" in icon) {
      return icon;
    }

    // Next.js static image import or string path
    return (
      <Image
        src={icon}
        alt=""
        width={16}
        height={16}
      />
    );
  };

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="btn-icon flex items-center justify-center">
          {renderIcon()}
        </span>
      )}

      <span className="btn-text">
        <span>{children}</span>
        <span>{children}</span>
      </span>

      {icon && iconPosition === "right" && (
        <span className="btn-icon flex items-center justify-center">
          {renderIcon()}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} ${
        disabled
          ? "cursor-not-allowed opacity-50"
          : "cursor-pointer"
      }`}
    >
      {content}
    </button>
  );
}