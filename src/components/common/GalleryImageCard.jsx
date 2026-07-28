import Image from "next/image";

export default function GalleryImageCard({
  image,
  alt = "Gallery Image",
  className = "",
}) {
  return (
    <div className={`image-hover rounded-lg ${className}`}>
      <img
        src={image}
        alt={alt}
        className="h-72 w-full object-cover"
      />
    </div>
  );
}