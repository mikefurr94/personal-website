export interface Experience {
  company: string;
  title: string;
  dateRange: string;
  current?: boolean;
  description: string[];
  tags: string[];
}

export interface Project {
  title: string;
  company: string;
  summary: string;
  details: string;
  outcomes: string[];
  tags: string[];
}

export interface Education {
  school: string;
  degree: string;
  dateRange: string;
  highlights: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

export const experiences: Experience[] = [
  {
    company: "Radicle Health",
    title: "Technical Product Manager",
    dateRange: "September 2025 — Present",
    current: true,
    description: [
      "Leading product strategy for the Data & AI team and platform engineering team, building data engineering pipelines to deliver services through Snowflake and BI capabilities across products",
      "Driving development of AI tooling across the product portfolio including ambient AI and AI-powered note generation for clinicians",
    ],
    tags: ["Snowflake", "AI/ML", "Data Engineering", "Platform", "BI"],
  },
  {
    company: "Tissue Health Plus",
    title: "Senior Product Manager",
    dateRange: "February 2025 — September 2025",
    description: [
      "Led 0-1 product development of an AI-powered wound care startup, designing value-based care programs that generated clinical guidance and personalized care plans for high-risk patients",
      "Managed cross-functional product team including frontend, backend, and data engineers to launch mobile and web applications serving clinicians across wound care clinics and home health organizations",
    ],
    tags: ["Go", "Flutter", "Snowflake", "FHIR", "HL7", "Redox"],
  },
  {
    company: "Net Health | Tissue Analytics",
    title: "Product Manager → Senior Product Manager",
    dateRange: "August 2021 — February 2025",
    description: [
      "Built the vision, strategy, and roadmap for an AI-powered imaging product featuring web and iOS/Android native apps to automatically track healing progress of chronic wounds",
      "Led both core app development and interoperability strategy with major EHR partners including Epic, Cerner, Allscripts, Athena, and Meditech",
      "Collaborated with 10+ engineers across mobile, web, backend, platform, QA, and integrations to drive 30-40% YoY revenue growth",
    ],
    tags: ["AI Imaging", "EHR Integration", "Mobile", "OKRs", "Pendo"],
  },
  {
    company: "Archimedic Product Design",
    title: "Engineer & Program Manager",
    dateRange: "February 2020 — August 2021",
    description: [
      "Worked with customers to build early-stage med tech products through the entire development lifecycle from concept to production",
      "Developed requirements from in-depth user interviews and iterated on lightweight MVPs",
    ],
    tags: ["Med Tech", "Agile", "SolidWorks", "Prototyping"],
  },
  {
    company: "RightAir",
    title: "R&D Engineer — Data Analytics",
    dateRange: "April 2019 — February 2020",
    description: [
      "Designed, tested, and implemented assistive technology integrated with a wearable vest to help COPD patients breathe within a Penn-affiliated startup",
      "Developed machine learning algorithms deployed on a Google Coral microprocessor using TensorFlow and Python to detect breathing patterns",
    ],
    tags: ["Python", "TensorFlow", "ML", "Wearables", "IoT"],
  },
  {
    company: "Medtronic",
    title: "Advanced Manufacturing Graduate Intern",
    dateRange: "June 2019 — August 2019",
    description: [
      "Collaborated with R&D on process engineering for a pediatric transcatheter pulmonary valve delivery system in the Cardiovascular Group",
    ],
    tags: ["Medical Devices", "Manufacturing", "Quality"],
  },
  {
    company: "Deloitte",
    title: "Tech Consultant",
    dateRange: "July 2016 — July 2018",
    description: [
      "Led as Project Manager on a high-priority software modernization project to refactor a 50+ year old government platform",
      "Shifted the technical team from a waterfall development approach to an Agile framework",
    ],
    tags: ["Agile", "Enterprise Software", "Government", "Modernization"],
  },
  {
    company: "JP Morgan Chase",
    title: "Operations Intern",
    dateRange: "June 2015 — August 2015",
    description: [
      "Contributed to market operations and presented business solutions to asset management across the branch",
    ],
    tags: ["Finance", "Operations"],
  },
];

export const projects: Project[] = [
  {
    title: "AI-Powered Wound Imaging Platform",
    company: "Net Health | Tissue Analytics",
    summary:
      "Built vision and roadmap for an AI imaging product that automatically tracks healing progress of chronic wounds across web and mobile apps, integrated with all major EHRs.",
    details:
      "Led a team of 10+ engineers to build first-to-market imaging features across web and iOS/Android apps. The platform uses computer vision to automatically measure and track wound healing over time, feeding data directly into clinicians' EHR workflows through HL7 and FHIR integrations with Epic, Cerner, Allscripts, Athena, and Meditech.",
    outcomes: [
      "30-40% year-over-year revenue growth",
      "5,000+ active clinical users",
      "Integrations with 6+ major EHR systems",
      "First-to-market AI imaging features on mobile",
    ],
    tags: ["AI/ML", "Computer Vision", "EHR Integration", "Mobile", "Web"],
  },
  {
    title: "Value-Based Wound Care Platform",
    company: "Tissue Health Plus",
    summary:
      "Led 0-1 development of an AI startup designing value-based care programs with clinical guidance and personalized care plans for high-risk patients.",
    details:
      "Built a comprehensive platform from scratch serving wound care clinics and home health organizations. The system generates clinical guidance and personalized care plans using AI, with a full-stack architecture spanning Go backend, Flutter/Dart mobile apps, and Snowflake data infrastructure. Integrated with healthcare platforms like Redox for seamless data exchange.",
    outcomes: [
      "Launched mobile and web applications from zero",
      "Served clinicians across wound care and home health",
      "End-to-end UX from user research to high-fidelity prototypes",
      "Full-stack platform with Go, Flutter, and Snowflake",
    ],
    tags: ["0→1", "Go", "Flutter", "Snowflake", "FHIR", "Value-Based Care"],
  },
  {
    title: "Enterprise Data & AI Platform",
    company: "Radicle Health",
    summary:
      "Building data engineering pipelines and AI tooling across a multi-product healthcare platform, including ambient AI and AI-powered note generation for clinicians.",
    details:
      "Leading product strategy for the Data & AI team, creating Snowflake-powered data pipelines that offer analytics services and BI capabilities across the product portfolio. Driving development of AI-powered clinical tools including ambient AI for real-time clinical documentation and intelligent note generation to reduce clinician burden.",
    outcomes: [
      "Cross-product AI tooling strategy",
      "Snowflake data pipeline architecture",
      "Ambient AI for clinical documentation",
      "BI capabilities across product portfolio",
    ],
    tags: ["Snowflake", "AI/ML", "Ambient AI", "Data Pipelines", "BI"],
  },
];

export const education: Education[] = [
  {
    school: "University of Pennsylvania",
    degree: "Master of Science in Bioengineering",
    dateRange: "2018 — 2019",
    highlights: [
      "Product design, machine learning, and engineering entrepreneurship",
      "Master's thesis on ML algorithm for detecting patient breathing patterns",
    ],
  },
  {
    school: "University of Delaware",
    degree: "Bachelor of Science in Mechanical Engineering",
    dateRange: "2012 — 2016",
    highlights: [
      "D1 Varsity Tennis Team Captain",
      "Biomechanics, product design, and economics",
      "Co-authored research publications in orthopaedic medicine",
    ],
  },
];

export const focusAreas = [
  "AI / Machine Learning",
  "Healthcare",
  "Product Strategy",
  "Data Engineering",
];
