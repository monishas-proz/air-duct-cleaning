import Image from "next/image";
import { CONTACT_INFO } from "@/constants/contact";
import { CONTACT_ICONS } from "@/constants/assets";

export default function ContactInfoCard() {
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

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm md:p-8">
      {/* Heading */}
      <h2 className="heading-2 text-primary-700">
        Direct Contact
      </h2>

      {/* Contact Items */}
      <div className="mt-4 space-y-8">
        {contactItems.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-4"
          >
            {/* Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary-50">
              <Image
                src={item.icon}
                alt=""
                width={24}
                height={24}
              />
            </div>

            {/* Content */}
            <div>
              <p className="caption font-semibold uppercase tracking-[0.12em] text-neutral-500">
                {item.title}
              </p>

              <div className="mt-1 flex flex-col gap-1">
                {Array.isArray(item.value) ? (
                  item.value.map((value, index) => (
                    <a
                      key={index}
                      href={
                        item.type === "phone"
                          ? `tel:${value}`
                          : item.type === "email"
                          ? `mailto:${value}`
                          : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                              value
                            )}`
                      }
                      target={item.type === "address" ? "_blank" : undefined}
                      rel={
                        item.type === "address"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="body-lg break-all text-neutral-900 transition-colors hover:text-primary-700"
                    >
                      {value}
                    </a>
                  ))
                ) : (
                  <a
                    href={
                      item.type === "phone"
                        ? `tel:${item.value}`
                        : item.type === "email"
                        ? `mailto:${item.value}`
                        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            item.value
                          )}`
                    }
                    target={item.type === "address" ? "_blank" : undefined}
                    rel={
                      item.type === "address"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="body-lg break-all text-neutral-900 transition-colors hover:text-primary-700"
                  >
                    {item.value}
                  </a>
                )}
              </div>

              {item.description && (
                <p className="body-sm mt-2 text-primary-700">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}