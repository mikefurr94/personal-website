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

export interface CaseStudy {
  title: string;
  company: string;
  role: string;
  problem: string;
  task: string;
  outcome: string[];
  skills: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Case Studies", href: "#case-studies" },
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

export const caseStudies: CaseStudy[] = [
  {
    title: "Parallel imaging pipeline for AI wound analysis",
    company: "Net Health | Tissue Analytics",
    role: "Product Manager",
    problem:
      "When our biggest customer came on board, the imaging pipeline choked at peak periods — results were taking 20–30 seconds to return, right in the middle of the customer's 9–10am EST peak usage window.",
    task: "Keep the customer relationship intact while diagnosing and fixing the root cause — meant being upfront that we'd need to push the go-live date, and figuring out why the system couldn't handle the load.",
    outcome: [
      "Worked with cloud engineers and data science to diagnose the bottleneck, scaled up capacity as a stopgap, then re-architected the imaging queue with parallel threading to handle concentrated peak-hour demand",
      "Stayed transparent with the customer about the setback and pushed go-live back one week to properly load test",
      "Cut measurement time from 20–30 seconds down to 2–3 seconds, even during peak periods",
      "Go-live succeeded and usage grew steadily month-over-month afterward, preserving the account relationship",
    ],
    skills: [
      "Technical troubleshooting",
      "Executive communication",
      "Scope negotiation",
      "Load testing strategy",
    ],
  },
  {
    title: "Batch transcription pipeline for ambient AI notes",
    company: "Radicle Health",
    role: "Technical Product Manager",
    problem:
      "Our ambient AI pipeline relied on Azure Speech to Text for live transcription — it was expensive to run at scale and its error rates weren't consistently low enough across English and Spanish to responsibly launch AI-generated clinical notes to customers.",
    task: "Re-architect the transcription pipeline to be cheaper and more accurate, then prove the resulting notes were good enough to launch across PCP, Psych, and CM note types.",
    outcome: [
      "Moved the pipeline off Azure Speech to Text live transcription to GPT-4o transcribe with batch processing, cutting transcription costs by more than 50%",
      "Drove error rates for both English and Spanish transcriptions down to under 10%",
      "Used Claude Code to analyze the existing AI pipeline's codebase and pinpoint exactly where accuracy and performance were breaking down",
      "Built an internal AI-powered evaluation tool, using Claude Code, to score note quality across PCP, Psych, and CM notes",
      "Brought cost and quality to a bar that put the ambient AI product in a position to launch to customers",
    ],
    skills: [
      "AI pipeline architecture",
      "Vendor/model migration",
      "Internal tooling with Claude Code",
      "Quality evaluation frameworks",
    ],
  },
  {
    title: "User guidance for AI measurement calibration",
    company: "Net Health | Tissue Analytics",
    role: "Product Manager",
    problem:
      "The implementations team flagged a pattern: images were being submitted without a required calibration marker, which meant the measurement model had nothing to anchor to. No calibration marker meant no measurement — and customers were reporting that \"the product wasn't working,\" with no visibility into why.",
    task: "Determine how widespread the problem was, understand the root cause, and find a way to prevent it going forward.",
    outcome: [
      "Quantified the issue (5–10% of submitted images were missing a marker — bigger than anyone realized), and traced the root cause to new or undertrained nursing staff amid high inpatient turnover",
      "Partnered with data science to ship a lightweight, on-device computer vision model that detects whether a calibration marker is present before a user can submit an image",
      "Meaningfully reduced marker-less submissions and lifted NPS scores that had been dragged down by measurement-accuracy complaints",
      "Became a standout feature in sales demos for inpatient wound care teams and led to a follow-on on-device angle-detection feature",
    ],
    skills: [
      "Root-cause analysis",
      "Cross-functional diagnosis",
      "0→1 ML feature scoping",
      "Support-to-product translation",
    ],
  },
  {
    title: "Circumferential wound imaging model",
    company: "Net Health | Tissue Analytics",
    role: "Product Manager",
    problem:
      "Wounds often didn't fit within a single static image, and there was no reliable way to consistently track them over time or determine which interventions were working. Undocumented healing gaps risked CMS penalties, documentation was slow and manual for clinicians, the process was long and uncomfortable for patients, and both inpatient and outpatient wound care teams had flagged this as a clear product gap.",
    task: "Build a way to measure wounds accurately, consistently, quickly, and to a clinical quality bar — good enough to go directly into a patient's chart.",
    outcome: [
      "Phased the AI build to de-risk it: validated on-site video capture against an 80%+ accuracy threshold, added in-app guidance and re-tested, then shipped live guidance powered by a local on-device model",
      "Clinicians confirmed output quality was sufficient to enter directly into the patient's chart, cutting documentation time from ~20 minutes to ~8 minutes with a 48.5% lower error rate than manual measurement",
      "Patients reported a noticeably more comfortable experience",
      "Directly helped close the company's biggest outpatient wound care enterprise deal, helping hit the bookings goal",
    ],
    skills: [
      "Multi-stakeholder problem framing",
      "Phased AI product development",
      "On-device ML deployment",
      "Tying product quality to revenue outcomes",
    ],
  },
  {
    title: "Assistive medical device for COPD patients",
    company: "RightAir (Penn-affiliated startup)",
    role: "R&D Engineer, Data Analytics",
    problem:
      "COPD patients need real-time support to manage their breathing, but there was no lightweight, wearable way to detect and respond to individual breathing patterns.",
    task: "Design, test, and implement assistive technology — a wearable vest — that could detect a patient's breathing pattern and adapt in real time to help them breathe more easily.",
    outcome: [
      "Developed and deployed a per-user machine learning model (TensorFlow, Python) on a Google Coral microprocessor to detect breathing patterns from sensor input, rather than applying a one-size-fits-all model",
      "Worked across hardware and software — PCB design in EAGLE, Fusion 360 modeling, and C++ — to get a working prototype end to end, and contributed to VC pitch storyboarding",
      "Delivered a working, personalized on-device prototype that became the foundation for a Master's thesis on ML-based breathing pattern detection in assistive technology",
    ],
    skills: [
      "Applied ML on constrained edge hardware",
      "Hardware/software integration",
      "Early-stage prototyping",
      "Investor storytelling",
    ],
  },
  {
    title: "AI generated Care Plan for value-based care investment",
    company: "Tissue Health Plus",
    role: "Senior Product Manager",
    problem:
      "As an early-stage, 0→1 startup, Tissue Health Plus needed to prove to value-based care investors that it could deliver more than imaging and measurement — it needed to show it could actually drive clinical decision-making and care coordination for high-risk patients.",
    task: "Build an AI-based care plan engine that could take a patient's risk level and translate it into a concrete plan: selecting the right clinician, scheduling the right visits, and generating the right interventions — automatically and consistently, credible enough to advance investor conversations.",
    outcome: [
      "Defined the product requirements and led design of the AI logic mapping risk stratification to clinician selection and visit cadence, then built the capability end-to-end with backend, frontend, and data engineering",
      "Positioned it as core to the company's value-based care story, not just a feature — packaged it for investor-facing conversations and demos",
      "Generated meaningful investor interest by proving the company could build clinically credible AI, not just imaging tools — strengthening the investment narrative at an early, pivotal stage",
    ],
    skills: [
      "0→1 AI product development",
      "Clinical risk modeling → product logic",
      "Investor-facing storytelling",
      "Cross-functional startup execution",
    ],
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
