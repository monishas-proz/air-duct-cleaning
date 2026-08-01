import Image from "next/image";
import { CONTACT_INFO } from "@/constants/contact";
import { CONTACT_ICONS } from "@/constants/assets";

export default function ContactInfoList({
  variant = "card",
}) {
  const isCard = variant === "card";

  const contactItems = [
    {
      icon: CONTACT_ICONS.phone,
      title: CONTACT_INFO.hotline.label,
      value: CONTACT_INFO.hotline.value,
      description: CONTACT_INFO.hotline.description,
      type: "phone",
    },
    {
      icon: CONTACT_ICONS.email,
      title: CONTACT_INFO.email.label,
      value: CONTACT_INFO.email.value,
      type: "email",
    },
    {
      icon: CONTACT_ICONS.location,
      title: CONTACT_INFO.address.label,
      value: CONTACT_INFO.address.value,
      type: "address",
    },
  ];

  const getHref = (type, value) => {
    switch (type) {
      case "phone":
        return `tel:${value}`;
      case "email":
        return `mailto:${value}`;
      case "address":
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          value
        )}`;
      default:
        return "#";
    }
  };

  return (
    <div className={isCard ? "space-y-8" : "space-y-6"}>
      {contactItems.map((item) => (
        <div
          key={item.title}
          className="flex items-start gap-4"
        >
          <div
            className={`flex shrink-0 items-center justify-center rounded-xl bg-primary-50 ${
              isCard ? "h-14 w-14" : "h-10 w-10"
            }`}
          >
            <Image
              src={item.icon}
              alt=""
              width={isCard ? 24 : 18}
              height={isCard ? 24 : 18}
            />
          </div>

          <div className="min-w-0">
            <p className="caption font-semibold uppercase tracking-[0.12em] text-neutral-500">
              {item.title}
            </p>

            <div className="mt-1 flex flex-col gap-1">
              {(Array.isArray(item.value)
                ? item.value
                : [item.value]
              ).map((value, index) => (
                <a
                  key={index}
                  href={getHref(item.type, value)}
                  target={
                    item.type === "address"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.type === "address"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`transition-colors hover:text-primary-700 ${
                    isCard
                      ? "caption"
                      : "body-md"
                  } text-neutral-900`}
                >
                  {value}
                </a>
              ))}
            </div>

            {item.description && (
              <p
                className={`mt-2 text-primary-700 ${
                  isCard ? "body-sm" : "caption"
                }`}
              >
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}