import { title } from "node:process";
import { SERVICES_IMAGES, HOME_ICONS, SERVICES_ICONS } from "./assets";


export const SERVICES_HERO = {
  badge: "OUR CAPABILITIES",

  title: {
    first: "Precision Managed",
    highlight: "Air Quality",
  },

  description:
    "At Adhi Robotics Services, we provide reliable HVAC, air quality, engineering, and facility management solutions designed to improve system performance, energy efficiency, and indoor environmental quality. Our experienced professionals deliver customized solutions that meet the highest industry standards. ",
};



export const SERVICES = [
  {
    id: 1,
    image: SERVICES_IMAGES.acCleaning,
    icon: SERVICES_ICONS.acDuct,
    title: "HVAC Duct Cleaning",
    description:
      "Our HVAC duct cleaning service removes accumulated dust, debris, allergens, and contaminants from air duct systems. Regular duct cleaning improves indoor air quality, enhances HVAC efficiency, reduces energy consumption, and extends the lifespan of your equipment. ",
     
  },

   {
    id: 2,
    image: SERVICES_IMAGES.laundryCleaning,
    icon: SERVICES_ICONS.laundry,
    title: "Laundry Duct Cleaning",
    description:
      "Cleaning of laundry exhaust ducts to remove lint accumulation, reduce fire hazards, and restore proper dryer airflow.",
     
  },

   {
    id: 3,
    image: SERVICES_IMAGES.exhaustCleaning,
    icon: SERVICES_ICONS.kitchen,
    title: "Exhaust Cleaning",
    description:
      "We provide professional cleaning of kitchen exhaust systems, including hoods, ducts, filters, and exhaust fans. Our service removes grease buildup, improves ventilation, minimizes fire risks, and ensures compliance with safety and hygiene regulations. ",
    
  },

  {
    id: 4,
    image: SERVICES_IMAGES.airQuality,
    icon: SERVICES_ICONS.testing,
    title: "Indoor Air Quality",
    description:
      "Our indoor air quality testing identifies airborne pollutants, particulate matter, humidity levels, ventilation performance, and other environmental factors. We provide detailed reports and recommendations to help maintain a healthier indoor environment. ",
     
  },

  {
    id: 5,
    image: SERVICES_IMAGES.waterTank,
    icon: SERVICES_ICONS.storage,
    title: "Water Tank Cleaning",
    description:
      "Cleaning and disinfection of water storage tanks to maintain safe, contaminant-free water supply.",
     
  },
  {
    id: 6,
    image: SERVICES_IMAGES.hydronic,
    icon: SERVICES_ICONS.hydronic,
    title: "Hydronic Cleaning",
    description:
      " Balancing of chilled water flow rates across HVAC circuits to ensure uniform cooling and reduce energy waste.",
     
  },

  {
    id: 7,
    title: "AHU Coil Cleaning & Treatment",
    description:
       "Deep cleaning and antimicrobial treatment of AHU coils to remove dust and microbial growth, improving cooling efficiency and air quality.",
    icon: SERVICES_ICONS.ahuCoil,
    image: SERVICES_IMAGES.ahuCoil,
  },

  {
    id: 8,
    title: " HVAC Duct Leakage Testing & Sealing ",
    description:
       "Detection of air leaks in ductwork followed by professional sealing to improve energy efficiency and airflow delivery.",
    icon: SERVICES_ICONS.ductleakage,
    image: SERVICES_IMAGES.ductleakage,
  },

  {
    id: 9,
    title: "Hydronic Balancing of HVAC Chilled Water Systems",
    description:
       "Balancing of chilled water flow rates across HVAC circuits to ensure uniform cooling and reduce energy waste.",
    
  },

  {
    id: 10,
    title: "Raised Floor Cleaning",
    description:
       "Cleaning of raised access flooring in server/data rooms to remove dust affecting equipment performance.",
    icon: SERVICES_ICONS.floorCleaning,
    image: SERVICES_IMAGES.floorCleaning,
  },

  {
    id: 11,
    title: "Carpet Cleaning ",
    description:
       "Deep cleaning of commercial carpets to remove dirt, stains, and allergens.",
    icon: SERVICES_ICONS.carpetCleaning,
    image: SERVICES_IMAGES.carpetCleaning,
  },

  {
    id: 12,
    title: "Office Sanitization & Disinfection ",
    description:
       "Sanitization of office spaces using disinfectant treatments to maintain a hygienic work environment.",
    icon: SERVICES_ICONS.sanitization,
    image: SERVICES_IMAGES.sanitization,
  },

  {
    id: 13,
    title: "Indoor Air Quality Assessment",
    description:
       "On-site assessment of indoor air quality using calibrated instruments to detect pollutants, humidity, and ventilation issues.",
    icon: SERVICES_ICONS.indoorAirQuality,
    image: SERVICES_IMAGES.indoorAirQuality,
  },

  {
    id: 14,
    title: "Air Quality Improvement Consultation ",
    description:
       "Expert recommendations to improve indoor air quality based on assessment results.",
    icon: SERVICES_ICONS.airQuality,
    image: SERVICES_IMAGES.improvement,
  },

  {
    id: 15,
    title: "HVAC Preventive Maintenance ",
    description:
       "Scheduled inspection and maintenance to prevent HVAC breakdowns and extend system life. ",
    icon: SERVICES_ICONS.hvacPreventive,
    image: SERVICES_IMAGES.hvacPreventive,
  },

  {
    id: 16,
    title: " HVAC Performance Inspection ",
    description:
       "Inspection of HVAC systems to evaluate operating performance against manufacturer specifications.",
    icon: SERVICES_ICONS.hvacPerformance,
    image: SERVICES_IMAGES.hvacPerformance,
  },
  
  {
    id: 17,
    title: "HVAC System Health Check",
    description:
       "Comprehensive check-up of HVAC components to identify wear, inefficiencies, or potential failures.",
    icon: SERVICES_ICONS.hvacSystem,
    image: SERVICES_IMAGES.hvacSystem,
    
  },

  {
    id: 18,
    title: "Duct Inspection & Condition Assessment",
    description:
       " Visual and instrument-based inspection of ductwork interiors to assess cleanliness and structural condition.",
    icon: SERVICES_ICONS.ductInspection,
    image: SERVICES_IMAGES.ductInspection,
  },

  {
    id: 19,
    title: "HVAC Energy Efficiency Assessment",
    description:
       "Evaluation of HVAC energy consumption and system efficiency, with recommendations for improvement.",
    icon: SERVICES_ICONS.hvacEnergy,
    image: SERVICES_IMAGES.hvacEnergy,
  },

  {
    id: 20,
    title: "Mold & Contaminant Removal",
    description:
       "Identification and removal of mold, mildew, and other contaminants from HVAC systems and ductwork.",
    icon: SERVICES_ICONS.mold,
    image: SERVICES_IMAGES.mold,
  },

  {
    id: 21,
    title: "Air Balancing",
    image: SERVICES_IMAGES.airBalancing,
    description:
       "Our air balancing service measures and adjusts airflow throughout HVAC systems to ensure uniform air distribution. This improves occupant comfort, system performance, and energy efficiency while reducing operational costs. ",
    icon: SERVICES_ICONS.airBalancing,
  },

  {
    id: 22,
    title: "HVAC Duct Cleaning Robot in Operation",
    image: SERVICES_IMAGES.robot,
    description:
       "A remote-operated robotic crawler with a rotary brush head and control unit with monitor, used to mechanically clean the interior of ductwork",
    // icon: SERVICES_ICONS.
  },

  {
    id: 23,
    title: "Kitchen Duct Cleaning",
    image: SERVICES_IMAGES.afterImg,
    description:
       "A forwarded field photo explicitly labeled Kitchen Duct cleaning, showing grease/soot residue inside a duct section"
  },

  {
    id: 24,
    title: "Workstation Protection During Duct Cleaning",
    image: SERVICES_IMAGES.workstation,
    description:
      "Office desks, monitors, and chairs wrapped in plastic sheeting to protect equipment from dust/debris while overhead HVAC ducts are cleaned",
  }

];

export const DISINFECTION = {
  title: "Disinfection Services",

  description:
    "Setting the gold standard for clinical environments and high-traffic public spaces through advanced antimicrobial fogging technology.",

  features: [
    "Hospital-grade disinfectant solutions",
    "Electrostatic fogging for 360° coverage",
    "Long-lasting antimicrobial residual protection",
  ],

  buttonText: "REQUEST DISINFECTION PROTOCOL",
  buttonHref: "/contact",
};

export const BEFORE_AFTER = [
  {
    id: 1,

    before: {
      image: SERVICES_IMAGES.beforeImg,
      title: "Kitchen Exhaust Duct - Before Cleaning",
      description:
        "Interior of a stainless steel kitchen exhaust hood heavily coated in baked-on grease and soot, with an access panel visible.",
    },

    after: {
      image: SERVICES_IMAGES.afterImg,
      title: "Kitchen Exhaust Duct - After Cleaning",
      description:
        "The same duct after professional cleaning, fully degreased with the stainless steel restored to a clean, reflective finish.",
    },
  },
];

export const SERVICES_TESTIMONIALS = {
  title: "Trust in Technical Precision",

  testimonials: [
    {
      id: 1,
      quote:
        "Air Care Management transformed our facility's air quality scores from average to exceptional. Their technical depth is unmatched.",

      designation: "Director of Facilities",

      company: "REGIONAL HEALTH CENTER",
    },

    {
      id: 2,
      quote:
        "The kitchen exhaust cleaning was meticulous. We passed our safety inspection with zero citations for the first time in years.",

      designation: "Executive Chef",

      company: "METROPOLITAN GRAND HOTEL",
    },
  ],
};