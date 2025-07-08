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
  title: "Senior Software Engineer",
  description: "Passionate software engineer with 5+ years of experience building scalable, fault-tolerant platforms using microservice architecture. Specialized in backend systems, API design, and high-performance applications.",
  image: "/me.png",
  email: "ashwani.p30@gmail.com",
  linkedIn: "https://www.linkedin.com/in/ashwani-prasad/",
  resume: "/Ashwani_Prasad_Resume.pdf"
};

// Experience Data
export const experiences = [
  {
    id: 1,
    company: "Super.Money",
    position: "Software Engineer III",
    duration: "Feb 2025 - Present • Bangalore, IN",
    logo: "/supermoney.png",
    focus: "Customer Onboarding & API Gateway",
    description: "Building scalable platforms for seamless customer onboarding and optimizing conversion funnels. Working on API gateway enhancements with custom security and throughput management capabilities.",
    techStack: ["Java", "SpringBoot", "API Gateway", "Microservices"],
    achievements: []
  },
  {
    id: 2,
    company: "CRED",
    position: "Software Engineer II",
    duration: "Nov 2022 - Feb 2025 • Bangalore, IN",
    logo: "/cred.png",
    focus: "Financial Products & Platform Engineering",
    description: "Led development of BNPL, term loans, and loan against securities products. Built the multi-tenant fee processing platform handling 4B+ monthly transactions. Spearheaded 0-to-1 product development serving 8M+ users while optimizing infrastructure costs by 31%.",
    techStack: ["Java", "Google Guice", "gRPC", "AWS SQS", "Databricks", "DynamoDB"],
    achievements: [
      { metric: "4B+", description: "Monthly transactions processed" },
      { metric: "8M+", description: "Users served" },
      { metric: "31%", description: "AWS cost savings achieved" }
    ]
  },
  {
    id: 3,
    company: "CRED",
    position: "Software Engineer I",
    duration: "July 2020 - Nov 2022 • Bangalore, IN",
    logo: "/cred.png",
    focus: "Core Platform & Credit Card Services",
    description: "Built config-driven APIs and credit card management systems. Migrated from SQL to DynamoDB for improved scalability and extensibility. Developed bank offer showcasing flows and optimized services for high-throughput performance.",
    techStack: ["SpringBoot", "DynamoDB", "Velocity", "Locust", "MySQL"],
    achievements: [
      { metric: "23K", description: "Requests per minute handled" },
      { metric: "10K", description: "Requests per second load tested" },
      { metric: "6M+", description: "Users served by bank offers" }
    ]
  },
  {
    id: 4,
    company: "Crio.do",
    position: "Student Developer",
    duration: "May 2019 - June 2019 • Online",
    logo: "/crio.png",
    focus: "Backend System Development",
    description: "Completed intensive 4-week program building QEats, a distributed food ordering platform. Gained hands-on experience with microservices architecture, REST APIs, and modern backend technologies.",
    techStack: ["Java", "SpringBoot", "MongoDB", "REST APIs", "MVCS"],
    achievements: []
  }
];

// Skills Data
export const skills = [
  {
    id: 1,
    category: "Languages & Frameworks",
    icon: CodeIcon,
    items: ["Java", "SpringBoot", "Google Guice DI", "C++", "Python", "gRPC", "REST APIs"]
  },
  {
    id: 2,
    category: "Databases & Technologies",
    icon: DatabaseIcon,
    items: ["DynamoDB", "MySQL", "MongoDB", "AWS SQS", "AWS S3", "Kafka", "Databricks"]
  },
  {
    id: 3,
    category: "Architecture & Design",
    icon: DocumentIcon,
    items: ["Microservices", "API Design", "System Design", "Fault Tolerance", "Performance Optimization", "Load Testing"]
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