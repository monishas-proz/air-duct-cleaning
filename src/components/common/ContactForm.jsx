"use client";

import { useState } from "react";

import Button from "@/components/common/Button";
import FormField from "@/components/common/FormField";
import { CONTACT_ICONS } from "@/constants/assets";
import { CONTACT_FORM } from "@/constants/contact";
import { submitContact } from "@/services/contactService";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await submitContact(formData);

      setFormData({
        fullName: "",
        organization: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      toast.success("Inquiry submitted successfully.");
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm md:p-8 lg:p-10">
      <h2 className="heading-2 text-primary-700">
        {CONTACT_FORM.title}
      </h2>

      <p className="body-md mt-3 max-w-xl text-neutral-600">
        {CONTACT_FORM.description}
      </p>

      <form
        className="mt-5"
        onSubmit={handleSubmit}
      >
        {/* Row 1 */}

        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
          />

          <FormField
            label="Organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Company Ltd."
          />
        </div>

        {/* Row 2 */}

        <div className="mt-3 grid gap-6 md:grid-cols-2">
          <FormField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
          />

          <FormField
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
          />
        </div>

        {/* Service */}

        <div className="mt-6">
          <FormField
            label="Service Area"
            name="service"
            type="select"
            value={formData.service}
            onChange={handleChange}
            options={CONTACT_FORM.serviceOptions}
          />
        </div>

        {/* Message */}

        <div className="mt-6">
          <FormField
            label="Your Message"
            name="message"
            type="textarea"
            rows={6}
            value={formData.message}
            onChange={handleChange}
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
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Inquiry"}
          </Button>
        </div>
      </form>
    </div>
  );
}