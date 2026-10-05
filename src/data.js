import { 
  CheckmarkIcon, 
  DownloadIcon, 
  EmailIcon, 
  LinkedinIcon, 
  CodeIcon, 
  DatabaseIcon, 
  DocumentIcon 
} from './icons';

// Personal Information
export const personalInfo = {
  name: "Ashwani Prasad",
  title: "Senior Backend Engineer",
  description: "Backend engineer with 6 years of experience building high-scale distributed systems. I've scaled an API gateway to ~15K RPS, built a Flink-based real-time UPI fraud detection pipeline, and shipped lending and fee platforms serving 10M+ users at CRED.",
  image: "/me.png",
  email: "ashwani.p30@gmail.com",
  linkedIn: "https://www.linkedin.com/in/ashwani-prasad/",
  resume: "/Ashwani_Prasad_Resume.pdf"
};

// Experience Data
export const stats = [
  { value: "6 yrs", label: "Building backend systems" },
  { value: "15K", label: "RPS on Kong API gateway" },
  { value: "4B+", label: "Monthly txns in fee module" },
  { value: "10M+", label: "Users on Bankstack" },
  { value: "31%", label: "AWS ECS cost reduction" }
];

export const experiences = [
  {
    id: 1,
    company: "Super.Money (by Flipkart)",
    position: "Software Engineer III",
    duration: "Feb 2025 - Present • Bangalore, IN",
    logo: "/supermoney.png",
    focus: "API Gateway & Data Streaming Platform",
    description: "Introduced and deployed Kong API gateway, migrating from a legacy service and scaling to ~15k rps. Designed custom gateway capabilities including auth, security, and rate limiting. Built login and authentication flows for web user onboarding. Engineered a data streaming pipeline using Flink and Feast for UPI fraud detection, processing ~2100 events/sec and enabling other teams to onboard use cases.",
    techStack: ["Java", "Kong", "Flink", "Feast", "Microservices", "API Gateway"],
    achievements: [
      { metric: "15K", description: "Requests per second on API gateway" },
      { metric: "50K", description: "Users onboarded monthly via web auth" },
      { metric: "2100", description: "Events per second on streaming pipeline" }
    ]
  },
  {
    id: 2,
    company: "CRED",
    position: "Software Engineer II",
    duration: "Nov 2022 - Feb 2025 • Bangalore, IN",
    logo: "/cred.png",
    focus: "Bankstack — Digital Banking Platform",
    description: "Built microservices on Bankstack, a digital banking platform serving 10M+ users with credit cards, BNPL, and term loans. Designed the multi-tenant fee module processing 4B+ transactions monthly. Led async repayment processing using CRON jobs, Databricks, and AWS SQS. Spearheaded loan against securities from 0-to-1, delivering create loan, foreclosure, and interest accrual features. Optimized CPU, memory, and JAVA_OPTS across services for 31% AWS ECS cost savings.",
    techStack: ["Java", "Google Guice", "gRPC", "AWS SQS", "Databricks", "DynamoDB"],
    achievements: [
      { metric: "10M+", description: "Users on Bankstack platform" },
      { metric: "4B+", description: "Monthly transactions processed" },
      { metric: "31%", description: "AWS ECS cost savings achieved" }
    ]
  },
  {
    id: 3,
    company: "CRED",
    position: "Software Engineer I",
    duration: "July 2020 - Nov 2022 • Bangalore, IN",
    logo: "/cred.png",
    focus: "Core Platform & Credit Card Services",
    description: "Built config-driven API responses using Spring Boot and Velocity serving 23K req/min. Migrated from SQL to DynamoDB for improved reusability and extensibility. Developed APIs for unbilled credit card transactions and bank offer showcasing flows. Load tested microservices with Locust at 10K req/sec and tuned downstream API timeouts for critical flows.",
    techStack: ["SpringBoot", "DynamoDB", "Velocity", "Locust", "MySQL"],
    achievements: [
      { metric: "23K", description: "Requests per minute handled" },
      { metric: "10K", description: "Requests per second load tested" },
      { metric: "6M+", description: "Users served by bank offers" }
    ]
  },
  {
    id: 4,
    company: "CRED",
    position: "SDE Intern",
    duration: "July 2020 - Nov 2020 • Bangalore, IN",
    logo: "/cred.png",
    focus: "Backend Development",
    description: "Worked with the backend team using Spring Boot. Implemented circuit breakers with resilience4j to prevent cascading failures from downstream service outages.",
    techStack: ["Java", "SpringBoot", "resilience4j"],
    achievements: []
  }
];

// Skills Data
export const skills = [
  {
    id: 1,
    category: "Languages & Frameworks",
    icon: CodeIcon,
    items: ["Java", "SpringBoot", "Google Guice DI", "C++", "Python", "Flink", "gRPC"]
  },
  {
    id: 2,
    category: "Databases & Technologies",
    icon: DatabaseIcon,
    items: ["MySQL", "DynamoDB", "Kafka", "AWS SQS", "AWS S3", "Feast", "Databricks"]
  },
  {
    id: 3,
    category: "Architecture & Design",
    icon: DocumentIcon,
    items: ["Microservices", "API Design", "Reliability", "Fault Tolerance", "Performance Optimization", "Load Testing"]
  }
];

// Education Data
export const education = {
  institution: "Govind Ballav Pant Engineering College",
  degree: "Bachelor of Technology in Computer Science",
  duration: "2016 - 2020 • New Delhi, India",
  gpa: "CGPA: 7.4/10"
};

// Icon Components (for easy access in components)
export const icons = {
  checkmark: CheckmarkIcon,
  download: DownloadIcon,
  email: EmailIcon,
  linkedin: LinkedinIcon,
  code: CodeIcon,
  database: DatabaseIcon,
  document: DocumentIcon
};
