import { GALLERY_IMAGES } from "./assets";

export const GALLERY_HERO = {
  badge: "OUR WORK IN ACTION",

  title: {
    first: "Professional HVAC &",
    second: "IAQ Portfolio",
    
  },

  description:
    "Experience the standard of excellence Air Care Management brings to every facility. From high-rise commercial ductwork to precision laboratory air filtration, our commitment to technical precision and fresh air is visible in every project.",
};

export const GALLERY_FILTERS = [
  "All Projects",
  "HVAC Maintenance",
  "Industrial Cleaning",
  "Air Quality Testing",
  "Commercial Filtration",
];

export const GALLERY_PROJECTS = [
  {
    id: 1,
    featured: true,
    image: GALLERY_IMAGES.chiller,
    category: "CHILLER MAINTENANCE",
    title: "Industrial Cooling System Deep Clean",
    description:
      "Comprehensive external and internal descaling of rooftop units for a major manufacturing plant.",
  },

  {
    id: 2,
    image: GALLERY_IMAGES.image1,
  },

  {
    id: 3,
    image: GALLERY_IMAGES.image2,
  },

  {
    id: 4,
    image: GALLERY_IMAGES.image3,
  },

  {
    id: 5,
    image: GALLERY_IMAGES.image4,
  },

  {
    id: 6,
    image: GALLERY_IMAGES.image5,
  },

  {
    id: 7,
    image: GALLERY_IMAGES.image6,
  },

  {
    id: 8,
    image: GALLERY_IMAGES.image7,
  },
];

export const GALLERY_TESTIMONIAL = {
  title: "Trusted by Facility Managers Worldwide",

  quote:
    "The level of technical detail Air Care Management provides in their reporting is unmatched. They don't just clean; they optimize the health of our entire mechanical infrastructure.",

  author: "DIRECTOR OF OPERATIONS, SKYLINE FINANCIAL",
};

export const GALLERY_CTA = {
  title: "Ready to improve your facility's air quality?",

  description:
    "Schedule a technical audit today and experience professional grade HVAC management.",

  buttons: [
    {
      text: "Book an Audit",
      href: "/contact",
      variant: "white",
    },
    {
      text: "Our Services",
      href: "/services",
      variant: "outlineWhite",
    },
  ],
};