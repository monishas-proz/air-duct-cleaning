"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

import {
  QUICK_LINKS,
  SERVICES_LINKS,
} from "@/constants/footer";
import { HOME_ICONS } from "@/constants/assets";
import { subscribeNewsletter } from "@/services/newsletterService";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const socialIcons = [
    {
      icon: HOME_ICONS.footerIcon1,
      alt: "icon1",
    },
    {
      icon: HOME_ICONS.footerIcon2,
      alt: "icon2",
    },
    {
      icon: HOME_ICONS.footerIcon3,
      alt: "icon3",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      setLoading(true);

      const response = await subscribeNewsletter(email);

      toast.success(response.message);

      setEmail("");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="border-t border-neutral-200">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr_0.8fr_1.4fr] lg:gap-11">

          {/* Company */}
          <div>
            <h2 className="heading-2 whitespace-nowrap text-primary-700">
              Air Care Management
            </h2>

            <p className="body-md mt-5 max-w-sm text-neutral-600 lg:mt-6">
              Professional HVAC and Indoor Air Quality (IAQ)
              specialists dedicated to providing cleaner,
              healthier air for your professional and private
              spaces.
            </p>

            <div className="mt-8 flex items-center gap-5">
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
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="caption font-semibold uppercase tracking-[0.2em] text-secondary-600">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className="link-hover body-md text-neutral-700 hover:text-primary-700"
                  >
                    {item.title}
                  </Link>
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
                  <Link
                    href={item.path}
                    className="link-hover body-md text-neutral-700 hover:text-primary-700"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="caption font-semibold uppercase tracking-[0.2em] text-secondary-600">
              Newsletter
            </h3>

            <p className="body-md mt-5 text-neutral-600">
              Stay updated with the latest in IAQ technology and
              maintenance tips.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-0"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="body-md flex-1 rounded-md border border-neutral-200 px-4 py-3 outline-none sm:rounded-r-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="caption rounded-md bg-secondary-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-secondary-700 disabled:cursor-not-allowed disabled:opacity-70 sm:rounded-l-none"
              >
                {loading ? "Joining..." : "Join"}
              </button>
            </form>
          </div>

        </div>
      </div>

      <div className="border-t border-neutral-200 py-6 lg:py-8">
        <div className="container">
          <p className="body-sm text-center text-neutral-500">
            © 2026 Air Care Management. Professional HVAC & IAQ Specialists.
          </p>
        </div>
      </div>
    </footer>
  );
}