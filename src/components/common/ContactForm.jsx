"use client";

import { useState } from "react";

import Button from "@/components/common/Button";
import FormField from "@/components/common/FormField";
import { CONTACT_ICONS } from "@/constants/assets";
import { CONTACT_FORM } from "@/constants/contact";
import { submitContact } from "@/services/contactService";
export default function ContactForm() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm md:p-8 lg:p-10">

      {/* Heading */}

      <h2 className="heading-2 text-primary-700">
        {CONTACT_FORM.title}
      </h2>

      {/* Description */}

      <p className="body-md mt-3 max-w-xl text-neutral-600">
        {CONTACT_FORM.description}
      </p>

      {/* Form */}

      <form className="mt-5">

        {/* Row 1 */}

        <div className="grid gap-6 md:grid-cols-2">

          <FormField
            label="Full Name"
            placeholder="John Doe"
          />

          <FormField
            label="Organization"
            placeholder="Company Ltd."
          />

        </div>

        {/* Row 2 */}

        <div className="mt-3 grid gap-6 md:grid-cols-2">

          <FormField
            label="Email Address"
            type="email"
            placeholder="john@company.com"
          />

          <FormField
            label="Phone Number"
            type="tel"
            placeholder="+1 (555) 000-0000"
          />

        </div>

        {/* Service */}

        <div className="mt-6">

          <FormField
            label="Service Area"
            type="select"
            options={CONTACT_FORM.serviceOptions}
          />

        </div>

        {/* Message */}

        <div className="mt-6">

          <FormField
            label="Your Message"
            type="textarea"
            rows={6}
            placeholder="How can we help optimize your facility's air management?"
          />

        </div>

        {/* Button */}

        <div className="mt-8">

          <Button
            type="submit"
            variant="primary"
            icon={CONTACT_ICONS.submit}
            iconPosition="left"
            className="w-full justify-center"
          >
            Submit Inquiry
          </Button>

        </div>

      </form>

    </div>
  );
}