import Image from "next/image";

export default function FeaturedProjectCard({
  image,
  category,
  title,
  description,
}) {
  return (
    <div className="image-hover group rounded-lg">
      {/* Image */}
      <Image
        src={image}
        alt={title}
        className="h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/60" />

      {/* Content */}
      <div
        className="
          absolute
          bottom-0
          left-0
          z-10
          w-full
          p-6
          lg:p-8

          opacity-0
          translate-y-8
          scale-95

          transition-all
          duration-300
          ease-out

          group-hover:opacity-100
          group-hover:translate-y-0
          group-hover:scale-100
        "
      >
        <span className="caption font-semibold uppercase tracking-[0.18em] text-primary-500">
          {category}
        </span>

        <h3 className="heading-2 mt-2 text-white">
          {title}
        </h3>

        <p className="body-md mt-3 max-w-[520px] text-white/80">
          {description}
        </p>
      </div>
    </div>
  );
}