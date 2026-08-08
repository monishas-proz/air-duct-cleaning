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
    sm: "px-4 h-10 text-sm",
    md: "px-6 h-12 text-sm",
    lg: "px-8 h-14 text-base",
  };

  const baseClasses =
    "btn-effect inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap select-none";

  const variants = {
    primary: "bg-primary-800 text-white shadow-sm shadow-primary-900/10",

    secondary: "border-2 border-secondary-500 text-secondary-600",

    white: "bg-white text-primary-700 shadow-sm",

    outlineWhite: "border border-white/50 text-white",

    outlinePrimary: "border border-primary-700 text-primary-700",

    link: "p-0 h-auto rounded-none text-primary-700 hover:underline",

    chip:
      "rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium text-neutral-700 h-10",

    danger:
      "bg-red-600 text-white hover:bg-red-700 shadow-sm shadow-red-900/10",

    modelCancel:
      "border border-neutral-300 bg-white text-neutral-600 hover:bg-neutral-50 hover:border-neutral-400 hover:text-neutral-800",
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

  const focusClasses =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2";

  if (href) {
    return (
      <Link
        href={href}
        className={`${classes} ${focusClasses}`}
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
      className={`${classes} ${focusClasses} ${
        disabled
          ? "cursor-not-allowed opacity-50 shadow-none"
          : "cursor-pointer"
      }`}
    >
      {content}
    </button>
  );
}
