import Image from "next/image";

export default function FeatureList({
  items,
  icon,
  className = "",
}) {
  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => (
        <div
          key={item}
          className="flex items-center gap-3"
        >
          <Image
            src={icon}
            alt=""
            width={22}
            height={22}
            className="shrink-0"
          />

          <span className="body-md text-neutral-700">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}