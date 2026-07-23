import {
  INDUSTRIES_IMAGES,
  INDUSTRIES_ICONS,
  HOME_ICONS,
} from "./assets";

export const INDUSTRIES = [
  {
    id: 1,
    type: "image",
    image: INDUSTRIES_IMAGES.corporate,
    badge: "COMMERCIAL",
    title: "Corporate Offices & Hotels",
    description:
      "We provide HVAC installation, duct cleaning, preventive maintenance, and indoor air quality solutions for office complexes, business centers, and commercial establishments.",
  },

  {
    id: 2,
    type: "card",
    icon: INDUSTRIES_ICONS.healthCareIcon,
    title: "Healthcare Facilities",
    description:
      "We support healthcare facilities with clean air solutions, HVAC maintenance, duct cleaning, and air quality testing to maintain hygienic and comfortable environments. ",
  },

  {
    id: 3,
    type: "cardGreen",
    icon: INDUSTRIES_ICONS.industrialIcon,
    title: "Industrial & Manufacturing",
    description:
      "Our services help manufacturing plants maintain efficient ventilation systems, improve workplace air quality, and ensure smooth HVAC operations for uninterrupted production. ",
  },

  {
    id: 4,
    type: "image",
    image: INDUSTRIES_IMAGES.industry,
    badge: "INDUSTRIAL INFRASTRUCTURE",
    title: "Cooling Towers & Heavy HVAC",
    description:
      "Optimization and cleaning of large-capacity systems to prevent downtime and ensure maximum thermal efficiency.",
  },
];

export const FEATURED_CASE_STUDY = {

  image: INDUSTRIES_IMAGES.datacenter,

  badge: "CASE STUDY: DATA CENTER",

  title: "Critical Air for Tech Giants",

  description:
    "Ensuring zero dust accumulation in one of the region's largest server farms. Our specialized under-floor plenum cleaning prevented thermal throttling and saved an estimated 15% in cooling energy costs.",

  points: [
    "99.9% Particulate Removal",
    "Zero-Downtime Execution",
    "Comprehensive Thermal Mapping",
  ],

  buttonText: "View All Projects",
  buttonHref: "/gallery",
};

export const INDUSTRIES_HERO = {
  title: {
    first: "Powering Precision",
    second: "Environments",
  },

  description:
    "At Adhi Robotics Services, we deliver HVAC, air quality, and engineering solutions across a wide range of industries. Our experienced team understands the unique operational requirements of each sector and provides customized services that ensure safety, efficiency, and regulatory compliance. ",
  
    isoCertificate: "ISO 27001:2022 Certified"
};

export const INDUSTRIES_TESTIMONIAL = {
  title: "Trusted by Facility Leaders",

  description: "Air Care Management has been our exclusive IAQ partner for 5 years. Their technical precision in managing our hospital ventilation is unmatched.",

  name: "Rajesh Kumar",

  designation: "DIRECTOR, CITY GENERAL HOSPITAL",

  initials: "RK",

}

export const INDUSTRIES_CTA = {
  title: "Ready to optimize your facility's air quality?",

  description:
    "Join the hundreds of industry leaders who trust us with their most critical infrastructure.",

  buttons: [
    {
      text: "Schedule a Site Audit",
      href: "/contact",
      variant: "primary",
    },
    {
      text: "Download Capabilities Deck",
      href: "/brochure",
      variant: "outlineWhite",
    },
  ],
};