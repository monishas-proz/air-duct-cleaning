"use client";
import Link from "next/link";

import ScrollLink from "@/components/common/ScrollLink";
import toast from "react-hot-toast";
import ContactInfoList from "./common/ContactInfoList";
import {
  QUICK_LINKS,
  SERVICES_LINKS,
} from "@/constants/footer";
import { HOME_ICONS } from "@/constants/assets";
import { subscribeNewsletter } from "@/services/newsletterService";

export default function Footer() {

  // const socialIcons = [
  //   {
  //     icon: HOME_ICONS.footerIcon1,
  //     alt: "icon1",
  //   },
  //   {
  //     icon: HOME_ICONS.footerIcon2,
  //     alt: "icon2",
  //   },
  //   {
  //     icon: HOME_ICONS.footerIcon3,
  //     alt: "icon3",
  //   },
  // ];

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!email.trim()) {
  //     toast.error("Please enter your email.");
  //     return;
  //   }

  //   try {
  //     setLoading(true);

  //     const response = await subscribeNewsletter(email);

  //     toast.success(response.message);

  //     setEmail("");
  //   } catch (error) {
  //     toast.error(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <footer className="border-t border-neutral-200">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr_0.8fr_1.4fr] lg:gap-11">

          {/* Company */}
          <div>
            <h2 className="heading-3 whitespace-nowrap text-primary-700">
              ADHI ROBOTIC SERVICES
            </h2>

            <p className="body-md mt-5 max-w-sm text-neutral-600 lg:mt-6">
              Professional HVAC and Indoor Air Quality (IAQ)
              specialists dedicated to providing cleaner,
              healthier air for your professional and private
              spaces.
            </p>

            {/* <div className="mt-8 flex items-center gap-5">
              {socialIcons.map(({ icon, alt }) => (
                <Image
                  key={alt}
                  src={icon}
                  alt={alt}
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="caption font-semibold uppercase tracking-[0.2em] text-secondary-600">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((item) => (
                <li key={item.id}>
                  <ScrollLink
                    href={item.path}
                    className="link-hover body-md text-neutral-700 hover:text-primary-700"
                  >
                    {item.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="caption font-semibold uppercase tracking-[0.2em] text-secondary-600">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              {SERVICES_LINKS.map((item) => (
                <li key={item.id}>
                  <ScrollLink
                    href={item.path}
                    className="link-hover body-md text-neutral-700 hover:text-primary-700"
                  >
                    {item.title}
                  </ScrollLink>
                </li>
              ))}
             <li>
             <ScrollLink
                href="/services"
                className="link-hover body-md text-neutral-700 hover:text-primary-700"
              >
                View All Services
              </ScrollLink>
              </li>
            </ul>
          </div>

         {/* Contact */}
          <div>
            <h3 className="caption font-semibold uppercase tracking-[0.2em] text-secondary-600">
              Contact
            </h3>

            <div className="mt-5">
              <ContactInfoList variant="compact" />
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-neutral-200 py-6 lg:py-8">
        <div className="container">
          <p className="body-sm text-center text-neutral-500">
            Copyright © {new Date().getFullYear()} All Rights Reserved | Developed by{" "}
            <Link
              href="https://proz.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary-700 transition-colors hover:text-primary-800 hover:underline"
            >
              ProZ Solutions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}