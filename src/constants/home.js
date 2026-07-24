import { title } from "node:process";
import { HOME_ICONS } from "./assets";

export const WHY_CHOOSE = {
  title: "Why Choose Air Care Management?",
  description:
    "We combine technical expertise with cutting-edge technology to deliver superior air quality solutions.",

  features: [
    {
      id: 1,
      icon: HOME_ICONS.certified,
      title: "Certified Professionals",
      description: "Experienced and certified experts.",
    },
    {
      id: 2,
      icon: HOME_ICONS.workmanShip,
      title: "Quality Workmanship",
      description: "Precision in every detail.",
    },
    {
      id: 3,
      icon: HOME_ICONS.advanceTech,
      title: "Advanced Tech",
      description: "State-of-the-art equipment.",
    },
    {
      id: 4,
      icon: HOME_ICONS.energy,
      title: "Energy Efficient",
      description: "Sustainable air solutions.",
    },
    {
      id: 5,
      icon: HOME_ICONS.pricing,
      title: "Competitive Pricing",
      description: "Value-driven service rates.",
    },
    {
      id: 6,
      icon: HOME_ICONS.ontimeDelivery,
      title: "On-Time Delivery",
      description: "Reliable project timelines.",
    },
    {
      id: 7,
      icon: HOME_ICONS.support,
      title: "24/7 Support",
      description: "Always here when you need us.",
    },
    {
      id: 8,
      icon: HOME_ICONS.safetyStandards,
      title: "Safety Standards",
      description: "Full industry compliance.",
    },
  ],
};

export const ABOUT_STATS = [
  {
    id: 1,
    value: "8",
    label: "YEARS EXPERIENCE",
    color: "primary",
  },
  {
    id: 2,
    value: "500+",
    label: "PROJECTS COMPLETED",
    color: "secondary",
  },
];

export const SERVICES = [
  {
    id: 1,
    title: "HVAC Cleaning",
    description:
      "Deep sterilization and sediment removal from commercial HVAC systems to increase efficiency and eliminate allergens.",
    icon: HOME_ICONS.hvacCleaning,
    color: "primary",
    className: "bg-primary-50"
  },
  {
    id: 2,
    title: "IAQ Testing",
    description:
      "Professional Indoor Air Quality (IAQ) monitoring for VOCs, particulates, and biological contaminants with detailed lab reports.",
    icon: HOME_ICONS.iaqTesting,
    color: "secondary",
    className: "bg-secondary-50"
  },
  {
    id: 3,
    title: "Industrial Sanitation",
    description:
      "High-capacity sanitation for factories, warehouses, and clean-rooms using advanced electrostatic technology.",
    icon: HOME_ICONS.industrialSanitation,
    color: "accent",
    className: "bg-amber-50"
  },

  {
    id: 4,
    title: "A/C Installation",
    description: 
      "We offer complete installation of residential, commercial, and industrial air conditioning systems. Our experienced technicians ensure proper sizing, installation, and testing for reliable and energy-efficient operation.",
    icon: HOME_ICONS.acInstallation,
    color: "primary",
    className: "bg-primary-50"
  },

  {
    id: 5,
    title: "A/C Commissioning",
    description: 
      "Our commissioning services verify that newly installed HVAC systems perform according to design specifications. We conduct comprehensive testing, calibration, and performance validation before handover. ",
    icon: HOME_ICONS.acCommissioning,
    color: "primary",
    className: "bg-primary-50"
  },

  {
    id: 6,
    title: "Piping Services",
    description: 
      "We provide professional HVAC piping installation and maintenance for chilled water, refrigerant, and other mechanical systems. Our solutions are designed for long-term reliability and efficient system performance. ",
    icon: HOME_ICONS.piping,
    color: "primary",
    className: "bg-primary-50"
  },

  {
    id: 7,
    title: "Centralized Air Conditioning ",
    description: 
      "We specialize in designing, installing, maintaining, and servicing centralized air conditioning systems for commercial buildings, offices, hospitals, hotels, and industrial facilities. ",
    icon: HOME_ICONS.centralized,
    color: "primary",
    className: "bg-primary-50"
  },

  {
    id: 8,
    title: "HVAC Preventive Maintenance",
    description: 
    "Regular preventive maintenance helps reduce equipment failures, improve energy efficiency, and extend the life of HVAC systems. Our maintenance programs include inspections, cleaning, testing, lubrication, and performance optimization. ",
    icon: HOME_ICONS.hvacPreventive,
    color: "primary",
    className: "bg-primary-50"
  },

  {
    id: 9,
    title: "Ducting Solutions ",
    description: 
      "We design, fabricate, and install high-quality ducting systems for commercial and industrial buildings. Our ducting solutions ensure efficient airflow, durability, and compliance with industry standards. ",
    icon: HOME_ICONS.ducting,
    color: "primary",
    className: "bg-primary-50"
  },

  {
    id: 10,
    title: "HVAC Inspection & Performance Assessment ",
    description: 
      "Our technical team performs comprehensive inspections to evaluate HVAC system performance, identify operational issues, and recommend improvements for greater efficiency and reliability. ",
    icon: HOME_ICONS.hvacInspection,
    color: "primary",
    className: "bg-primary-50"
  },

  {
    id: 11,
    title: "Facility Maintenance Services",
    description: 
      "We provide end-to-end facility maintenance solutions, ensuring that HVAC systems and related infrastructure operate safely, efficiently, and with minimal downtime. ",
    icon: HOME_ICONS.facility,
    color: "primary",
    className: "bg-primary-50"
  },

];

export const TESTIMONIAL = {
  quote:
    "The technical expertise Air Care Management brought to our pharmaceutical facility was unparalleled. Their duct cleaning process was non-disruptive, and the subsequent IAQ tests showed a 40% reduction in airborne particulates. Truly a professional outfit.",

  name: "Robert Henderson",

  designation: "Operations Manager, Biotech Global",

};

export const ABOUT_CTA = {
  title: "Ready to Breathe Better?",

  description:
    "Partner with the certified experts who prioritize your indoor air quality and system efficiency above all else.",

  buttons: [
    {
      text: "Schedule an Inspection",
      href: "/contact",
      variant: "white",
    },
    {
      text: "Our Industrial Projects",
      href: "/industries",
      variant: "outlineWhite",
    },
  ],
};