import type {
  Project,
  Experience,
  SkillCategory,
  PersonalInfo,
  NavLink,
  Recommendation,
} from "../types/portfolio.types";
import { skillIcons } from "../constants/icons";

export const personalInfo: PersonalInfo = {
  name: "BISHER MUHAMMAD ZIAD ALHASANI ALJAZAERI",
  title: "Product Owner • Flutter Developer • Software Engineer",
  bio: [
    "Product Owner and Flutter Developer with 4+ years of experience building and scaling digital products across mobile and web platforms.",
    "Lead product planning, backlog structuring, release coordination, and stakeholder communication, while actively contributing to cross-platform mobile development using Flutter and Dart.",
    "Known for turning complex business requirements into structured execution plans and maintainable codebases, bridging product direction with hands-on technical implementation.",
  ],
  email: "bisher.hasani@gmail.com",
  phone: "+963 939202488",
  location: "Damascus, Syria",
  linkedin: "https://www.linkedin.com/in/bisher-al-hasani-19008a219/",
  github: undefined,
  resumePath: "assets/files/Eng.Bisher AlHasani - Product Owner.pdf",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Recommendations", href: "#recommendations" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    title: "ASKONnect",
    company: "Pharaon Group",
    date: "01/2026 - Present",
    description:
      "Project Manager and Lead System Analyst for a high-security B2B marketplace and networking hub for the ASKON Businessmen Association. Authored the full SRS and designed the trade lifecycle from product discovery to secure Escrow settlement. Managed the development of a unique 'Trade Request' system, AI-powered multilingual chat, and a 'Fair-Discovery' engine for member exposure. Orchestrated cross-functional teams using Scrum to deliver a professional digital ecosystem that replaces informal trade communication with a structured, secure commerce platform.",
    image: "assets/images/askonnect.png",
    playStore: null,
    appStore: null,
    website: "https://dev-front-askonnect.ultrawares.com/",
    current: true,
  },
  {
    title: "ASKON Syria Website",
    company: "Pharaon Group",
    date: "01/2026",
    description:
      "Managed the design and deployment of the official landing page for ASKON Syria. As Project Manager, I defined the requirements for professional branding and multilingual accessibility (Arabic, English, Turkish) to create a clear digital entry point for the association. This project focused on providing a streamlined public interface that introduces members to the association's vision and guides them toward the secure B2B networking platform.",
    image: "assets/images/askon.png",
    playStore: null,
    appStore: null,
    website: "https://www.askon-syria.com/en#home",
    current: false,
  },
  {
    title: "Pyramind",
    company: "Pharaon Group",
    date: "04/2025 - Present",
    description:
      "Led the analysis and planning of the project, defining clear requirements, user stories, and acceptance criteria to align development with business goals. Managed the development process using the Scrum framework, facilitating sprint planning, daily stand-ups, reviews, and retrospectives to ensure continuous progress and team collaboration. Coordinated cross-functional teams and stakeholders, tracking progress through agile tools and ensuring timely delivery of high-quality features..",
    image: "assets/images/pyramind.png",
    playStore: null,
    appStore: null,
    website: "https://pyramind.pharaon-group.com/on-Board",
    current: true,
  },
  {
    title: "Damen",
    company: "Ikoniks",
    date: "11/2023 - 10/2024",
    description:
      "Developed two mobile applications connecting users with building service professionals, such as contractors, architects, and engineers.Designed and integrated a real- time chat feature, enabling seamless communication between users and service providers.Enhanced the user experience and interface, ensuring intuitive navigation and engagement.",
    image: "assets/images/damen.png",
    playStore:
      "https://play.google.com/store/apps/details?id=net.damenapp.damen",
    appStore:
      "https://apps.apple.com/us/app/%D8%B6%D8%A7%D9%85%D9%86/id6477861699",
    website: null,
    current: false,
  },
  {
    title: "100 Trillion",
    company: "Tradinos",
    date: "06/2024 - 08/2024",
    description:
      "Developed 100T, a mobile app tailored for collectors to explore and acquire rare banknotes, unique coins, and collectibles.Implemented a streamlined UI/UX to ensure effortless browsing and purchasing.Optimized performance for fast loading and seamless interactions.",
    image: "assets/images/trillion.png",
    playStore: "https://play.google.com/store/apps/details?id=com.trillions",
    appStore: "https://apps.apple.com/us/app/100trillions/id6677025906",
    website: null,
    current: false,
  },
  {
    title: "Luca AI",
    company: "Tradinos",
    date: "09/2024 - 10/2024",
    description:
      "Built Luca AI, a financial AI assistant app designed to simplify expense tracking and financial management.Integrated an AI-powered chatbot, allowing users to track expenses effortlessly.Implemented customizable reports, enabling users to visualize spending habits and insights.",
    image: "assets/images/luca.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.tradinos.luca",
    appStore: "https://apps.apple.com/us/app/luca-ai/id6468981767",
    website: null,
    current: false,
  },
  {
    title: "Batra",
    company: "Plansters",
    date: "05/2024 - 06/2024",
    description:
      "Led the development of the Batra mobile application, a digital platform for one of Iraq's leading lighting solution providers.Engineered a user-friendly interface for browsing and purchasing indoor and outdoor lighting products, ensuring a seamless shopping experience. Integrated a robust product catalog and inventory management system to align with the company's global standards.",
    image: "assets/images/batra.png",
    playStore:
      "https://play.google.com/store/apps/details?id=plansters.plansters.com.batra",
    appStore:
      "https://apps.apple.com/us/app/batra-%D8%A8%D8%AA%D8%B1%D9%89/id1498040607",
    website: null,
    current: false,
  },
  {
    title: "Al Aseel Keys",
    company: "Plansters",
    date: "01/2024 - 04/2024",
    description:
      "Designed and developed Al Aseel Keys a mobile application tailored for managing and purchasing high-quality security and access control solutions.Built a dynamic UI/UX to enhance customer interaction and simplify product navigation.Implemented real-time data synchronization and efficient backend solutions for optimal performance.",
    image: "assets/images/alassel.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.plansters.alaseel_app",
    appStore:
      "https://apps.apple.com/us/app/%D9%85%D9%81%D8%A7%D8%AA%D9%8A%D8%AD-%D8%A7%D9%84%D8%A3%D8%B5%D9%8A%D9%84/id6503984032",
    website: null,
    current: false,
  },
  {
    title: "Zeraa Center",
    company: "IXCoders",
    date: "08/2023 - 10/2023",
    description:
      "Contributed to the Zeraa Center app, an e-commerce platform for agricultural equipment and accessories.Implemented a dynamic pricing system, allowing users to monitor price changes and trends.Ensured a smooth shopping experience, optimizing app performance and navigation.",
    image: "assets/images/zeraa.png",
    playStore: "https://play.google.com/store/apps/details?id=com.zeraacenter",
    appStore: null,
    website: null,
    current: false,
  },
  {
    title: "Pazarin",
    company: "IXCoders",
    date: "05/2023 - 08/2023",
    description:
      "Helped develop an e-commerce platform, enabling users to list, promote, and sell products and services.Designed and integrated category-based filtering, allowing for effective product discovery.Focused on performance optimization for a smooth browsing experience.",
    image: "assets/images/pazar.png",
    playStore: "https://play.google.com/store/apps/details?id=com.pazarin",
    appStore: "https://apps.apple.com/us/app/pazarin/id6474499206",
    website: null,
    current: false,
  },
  {
    title: "Compassty",
    company: "We Can",
    date: "01/2023 - 02/2023",
    description:
      "Led the development of Compassty, an app that allows users to create and share personalized addresses.Implemented features for categorizing and organizing locations, enhancing searchability.Ensured a user-friendly design, making address management effortless.",
    image: "assets/images/compasty.png",
    playStore: null,
    appStore: "https://apps.apple.com/us/app/compassty/id6448457251",
    website: null,
    current: false,
  },
  {
    title: "RP",
    company: "IXCoders",
    date: "07/2023 - 09/2023",
    description:
      " Developed a service marketplace app, connecting users with contractors, architects, and engineers.Integrated a real-time chat system to facilitate direct communication between users and service providers.Focused on usability and accessibility, ensuring a seamless experience for all users.",
    image: "assets/images/rp.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.rpapp.onmrhost&hl=nl&gl=US",
    appStore: null,
    website: null,
    current: false,
  },
  {
    title: "eMenu",
    company: "Plansters",
    date: "12/2021 - 02/2022",
    description:
      "Developed eMenu, a mobile and web-based platform that enables users to browse digital restaurant menus.Created two versions (mobile app and website) for a cross-platform experience.Ensured a seamless and responsive UI, allowing for quick and intuitive navigation.",
    image: "assets/images/emenu.png",
    playStore: null,
    appStore: null,
    website: "https://emenu.theemenu.com/#/home/37155f9b54",
    current: false,
  },
];

export const experiences: Experience[] = [
  {
    title: "Product Owner | Mobile Team Leader",
    company: "Pharaon Group",
    location: "Damascus, Syria",
    period: "Apr 2025 - Present",
    responsibilities: [
      "Own and manage ASKON Syria, ASKONnect, and Pyramind digital products, driving product vision, roadmap, and end-to-end delivery.",
      "Define and prioritize the product backlog, write detailed user stories and acceptance criteria, and maintain comprehensive product documentation.",
      "Lead sprint planning, task assignment, timeline tracking, and user acceptance testing (UAT) to ensure high-quality, on-time releases.",
      "Conduct stakeholder and client meetings to gather requirements, present progress updates, and ensure alignment on scope, expectations, and priorities.",
      "Contribute to project estimation, pricing, and delivery planning to balance business goals with technical feasibility.",
      "Coordinate cross-functional teams to align product strategy with operational and user needs.",
      "Develop and maintain cross-platform mobile applications and implement a unified structure adopted across all company mobile apps.",
      "Establish architecture standards, ensure code quality, and implement best practices for mobile development.",
      "Create and refine workflows, processes, and project documentation to support smooth execution and continuous improvement.",
    ],
    current: false,
  },
  {
    title: "Mobile Development Team Leader",
    company: "Ikoniks",
    location: "Germany",
    period: "Nov 2023 – Apr 2025",
    responsibilities: [
      "Led the development of two cutting-edge Flutter mobile applications",
      "Managed a cross-functional team of 10+ developers, ensuring efficient workflow and Agile implementation",
      "Optimized and enhanced existing software architecture to improve performance and scalability",
      "Integrated bi-weekly Flutter updates to ensure stability and feature enhancements",
    ],
    current: false,
  },
  {
    title: "Project-Based Contractor",
    company: "Tradinos",
    location: "Berlin, Germany",
    period: "Jun 2024 – Aug 2024",
    responsibilities: [
      "Contributed to the development of 100 Trillion, a mobile app for currency exchange across the USA",
      "Built and optimized the user interface, ensuring seamless functionality and enhanced user experience (UX)",
      "Integrated key features to improve user experience and efficiency",
    ],
    current: false,
  },
  {
    title: "Flutter Developer",
    company: "IXCoders",
    location: "Damascus, Syria",
    period: "May 2023 – Oct 2023",
    responsibilities: [
      "Developed and deployed 3+ Flutter applications with a focus on scalability and performance",
      "Collaborated with UI/UX designers to create intuitive and user-friendly app interfaces",
      "Resolved technical issues and optimized app performance for improved user experience",
    ],
    current: false,
  },
  {
    title: "Flutter Developer",
    company: "We Can",
    location: "Amman, Jordan",
    period: "Nov 2022 – Mar 2023",
    responsibilities: [
      "Participated in the successful delivery of 3+ mobile applications, ensuring they met client specifications and deadlines",
      "Worked in a multicultural team spanning 3 different countries, adapting to diverse work practices",
    ],
    current: false,
  },
  {
    title: "Flutter Developer",
    company: "Plansters",
    location: "Damascus, Syria",
    period: "Nov 2021 – Mar 2023",
    responsibilities: [
      "Designed and maintained high-quality Flutter applications from concept to deployment",
      "Participated in all phases of the development lifecycle, ensuring Agile methodology implementation",
      "Contributed to both front-end and back-end development tasks",
    ],
    current: false,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Project Management & Product Ownership",
    icon: skillIcons.management,
    skills: [
      "Product Vision & Roadmap",
      "Backlog Prioritization",
      "User Stories & Acceptance Criteria",
      "Agile Methodologies (Scrum, Kanban)",
      "Stakeholder Management",
      "UAT & Quality Assurance",
      "Project Estimation & Planning",
    ],
  },
  {
    title: "Mobile & Software Development",
    icon: skillIcons.mobile,
    skills: [
      "Flutter Framework (Dio, Retrofit, Chopper, HTTP)",
      "Hive, SQFLite, Background Services",
      "Shared Preferences, Laravel Pusher",
      "State Management (Provider, GetX, Bloc)",
      "Cross-Platform Development (iOS & Android)",
      "Dart, Java, C++, JavaScript, PHP, TypeScript, Python",
    ],
  },
  {
    title: "Web Development",
    icon: skillIcons.web,
    skills: [
      "React",
      "HTML & CSS",
      "Responsive Design",
      "Three.JS",
      "NestJS",
      "Laravel",
    ],
  },
  {
    title: "Database & Backend",
    icon: skillIcons.database,
    skills: [
      "Firebase Firestore",
      "SQL Server",
      "Oracle",
      "Big Data",
      "Data Warehousing",
      "REST API Development",
    ],
  },
  {
    title: "Development Tools",
    icon: skillIcons.tools,
    skills: [
      "Git (GitHub, GitLab, Bitbucket)",
      "CI/CD Pipelines",
      "Agile (Scrum, Kanban)",
      "Jira, ClickUp",
      "Version Control",
      "Code Reviews",
    ],
  },
  {
    title: "UI/UX & Design",
    icon: skillIcons.design,
    skills: [
      "Figma",
      "Adobe XD",
      "Design Systems",
      "Clean Architecture (MVC, MVVM)",
      "Responsive Design",
      "Legacy OpenGL",
    ],
  },
  {
    title: "Security & Authentication",
    icon: skillIcons.security,
    skills: [
      "Firebase Authentication",
      "OAuth (Google, Facebook)",
      "JWT",
      "REST API Authentication",
      "Secure Development Practices",
    ],
  },
];

export const recommendations: Recommendation[] = [
  {
    name: "Judy Alqabbani",
    role: "Project Manager at Pharaon Group",
    expertise: "Project Management",
    period: "July 2025 – Present",
    linkedin: "https://www.linkedin.com/in/judy-alqabbani-2bb5b81b4/",
    message:
      "During our collaboration on the Pyramind project, I had the pleasure of overseeing Bisher, and I can state with confidence that he is a superb product owner and engineer. He is quick, very talented, and very proactive. He takes the initiative without waiting for guidance and never lets obstacles stand in the way of advancement. Rather than claiming that something is challenging, he always finds a solution. He doesn't need micromanagement, is adaptable, and is a pleasure to work with. He is quick to grasp requirements, meticulous, and regularly completes excellent work on schedule. His dedication, work ethic, and sense of ownership are genuinely remarkable. He would be a great asset to any team.",
  },
  {
    name: "Nazem Almsouti", 
    role: "Frontend Developer",
    expertise: "Frontend",
    period: "Pharaon Group",
    linkedin: "https://www.linkedin.com/in/nazem-almsouti/",
    message:
      "I had the opportunity to work with Bisher Alhasani Aljazaeri at Pharaon Group across multiple projects — Pyramind, Askon-Syria, and Askonnect — where he served as Project Manager and I contributed as a frontend developer.\n\nBisher moves fast. Requirements go from definition to execution quickly, and he follows up consistently to make sure nothing stalls. His approach to problem-solving is hands-on — when a blocker came up, he'd engage directly with the developer to work through it together rather than going back and forth over messages. This kept technical issues resolved quickly and delivery on track.\n\nHe was also diligent about deadlines and project releases, tracking them closely and making sure nothing slipped.\n\nI'd recommend Bisher to any team that needs a Project Manager who executes quickly and stays close to the work.",
  },
];

export const education = {
  degree: {
    title: "Bachelor's Degree in Information Technology Engineering",
    institution: "Damascus University",
    location: "Damascus, Syria",
    period: "2019 – 2024",
    gpa: "76%",
    specialization: "Software Engineering",
  },
  certification: {
    title: "Mobile App Development using Flutter",
    institution: "Ousos Institute",
    location: "Damascus, Syria",
    period: "Jun 2021 – Sep 2021",
  },
  languages: [
    { language: "Arabic", level: "Native" },
    { language: "English", level: "Very Good" },
  ],
};
