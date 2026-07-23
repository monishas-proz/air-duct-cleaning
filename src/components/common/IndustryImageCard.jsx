import Image from "next/image";

export default function IndustryImageCard({
  image,
  badge,
  title,
  description,
  className = "",
  height = "h-[430px]",
}) {
  return (
    <div
      className={`image-hover group rounded-md ${height} ${className}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/60" />

      {/* Content */}
      <div
        className="
          absolute
          bottom-8
          left-8
          right-8
          z-10

          opacity-0
          translate-y-8
          scale-95

          transition-all
          duration-300
          ease-out

          group-hover:translate-y-0
          group-hover:opacity-100
          group-hover:scale-100
        "
      >
        <span className="caption font-semibold uppercase tracking-[0.18em] text-primary-400">
          {badge}
        </span>

        <h3 className="heading-3 mt-2 text-white">
          {title}
        </h3>

        <p className="body-md mt-3 text-white/80">
          {description}
        </p>
      </div>
    </div>
  );
}