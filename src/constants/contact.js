import ContactHero from "@/assets/images/contact/ContactHeroImg.svg";

export const CONTACT_IMAGES = {
  hero: ContactHero,
};

export const CONTACT_HERO = {
  badge: "CONNECT WITH EXPERTS",

  title: {
    first: "Breathe easier with",
    second: "technical precision.",
  },

  description:
    "Our team of IAQ specialists and HVAC engineers is ready to optimize your environment. Reach out for a consultation or emergency service.",
};

export const CONTACT_INFO = {
  hotline: {
    label: "MAIN HOTLINE",
    value:[
      process.env.NEXT_PUBLIC_CONTACT_PHONE,
      process.env.NEXT_PUBLIC_CONTACT_PHONE1
    ],
      
    description: "24/7 Emergency Support Available",
  },

  email: {
    label: "EMAIL INQUIRY",
    value: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  },

  address: {
    label: "CORPORATE HQ",
    value: "No.3/26 Golrur Village, Anchoor Post, Krishnagiri - 635 203",
  },
};

export const CONTACT_FORM = {
  title: "Inquire About Our Services",

  description:
    "Fill out the form below and an AirCare specialist will contact you within 24 hours.",

  serviceOptions: [
    "Duct Cleaning",
    "HVAC Maintenance",
    "IAQ Testing",
    "Filter Solutions",
  ],


  };

export const CONTACT_CTA = {
  title: "Ready for a breath of fresh air?",

  description:
    "Start your journey toward a healthier, more efficient environment with a comprehensive facility audit.",

  buttons: [
    {
      text: "Get a Free Quote",
      href: "/contact",
      variant: "white",
    },
    {
      text: "View Case Studies",
      href: "/gallery",
      variant: "outlineWhite",
    },
  ],
};

