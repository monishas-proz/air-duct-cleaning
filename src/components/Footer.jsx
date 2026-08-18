"use client";
import Link from "next/link";

import ScrollLink from "@/components/common/ScrollLink";
import ContactInfoList from "./common/ContactInfoList";
import { QUICK_LINKS, SERVICES_LINKS } from "@/constants/footer";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 section-transparent">
      <div className="container py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_0.9fr_0.9fr_1.3fr] lg:gap-12">

          {/* Company */}
          <div>
            <h2 className="font-heading text-xl font-bold tracking-tight text-primary-800">
              ADHI ROBOTIC SERVICES
            </h2>

            <p className="body-md mt-4 max-w-sm text-neutral-600">
              Professional HVAC and Indoor Air Quality (IAQ)
              specialists dedicated to providing cleaner,
              healthier air for your professional and private
              spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="caption font-semibold uppercase tracking-[0.18em] text-neutral-900">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((item) => (
                <li key={item.id}>
                  <ScrollLink
                    href={item.path}
                    className="link-hover body-sm text-neutral-600 hover:text-primary-700"
                  >
                    {item.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="caption font-semibold uppercase tracking-[0.18em] text-neutral-900">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              {SERVICES_LINKS.map((item) => (
                <li key={item.id}>
                  <ScrollLink
                    href={item.path}
                    className="link-hover body-sm text-neutral-600 hover:text-primary-700"
                  >
                    {item.title}
                  </ScrollLink>
                </li>
              ))}
              <li>
                <ScrollLink
                  href="/services"
                  className="link-hover body-sm font-medium text-primary-700 hover:text-primary-800"
                >
                  View All Services
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="caption font-semibold uppercase tracking-[0.18em] text-neutral-900">
              Contact
            </h3>

            <div className="mt-5">
              <ContactInfoList variant="compact" />
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-neutral-200 py-6">
        <div className="container">
          <p className="body-sm text-center text-neutral-500">
            Copyright © {new Date().getFullYear()} All Rights Reserved | Developed by{" "}
            <Link
              href="https://proz.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary-700 transition-colors hover:text-primary-800 hover:underline"
            >
              ProZ Solutions LLP
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
