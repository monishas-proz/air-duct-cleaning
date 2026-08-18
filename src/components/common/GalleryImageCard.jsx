import Image from "next/image";

export default function GalleryImageCard({
  image,
  title,
  description,
  alt = "Gallery Image",
  className = "",
}) {
  return (
    <div className={`image-hover group h-72 ${className}`}>
      {/* Image */}
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover"
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
        <h3 className="heading-3 text-white">
          {title}
        </h3>

        <p className="body-md mt-3 text-white/80">
          {description}
        </p>
      </div>
    </div>
  );
}