import Image from "next/image";

export default function GalleryImageCard({
  image,
  alt = "Gallery Image",
  className = "",
}) {
  return (
    <div className={`image-hover rounded-lg ${className}`}>
      <Image
        src={image}
        alt={alt}
        className="h-full w-full object-cover"
      />
    </div>
  );
}