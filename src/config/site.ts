import { SiteConfig } from "@/types/portfolio";

export const siteConfig: SiteConfig = {
  name: "Joshua E. Balangue",
  role: "Executive & E-commerce Virtual Assistant",
  profileImage: "/joshua-portfolio/BALANGUE, JOSHUA, E..png",
  headline: "Data-Driven Support for Global E-commerce Brands & Executives",
  location: "Dasmariñas, Cavite, Philippines",
  email: "joshuabalangue5621@gmail.com",
  phone: "+63 993 6113 742",
  gpa: "1.49 GPA",
  
  mission: "Empowering entrepreneurs by streamlining operations through technical precision and proactive support.",

  socials: {
    linkedin: "https://www.linkedin.com/in/joshua-balangue-1b0092351",
    onlinejobs: "https://www.onlinejobs.ph/jobseekers/info/4466295",
  },

  about: "A BS Information Systems student at Kolehiyo ng Lungsod ng Dasmariñas with a 1.49 GPA. I combine high-level administrative support with technical data proficiency, specializing in Salesforce CRM management, data visualization, and Amazon/Shopify optimization.",

  services: [
    {
      title: "E-commerce Management",
      desc: "Expert product listing, SEO optimization, and inventory management on Amazon, Shopify, Shopee, and Lazada."
    },
    {
      title: "Executive Support",
      desc: "Strategic email management, complex scheduling across time zones, and administrative coordination for executives."
    },
    {
      title: "Technical Data Solutions",
      desc: "Dataset cleaning, pivot table generation, and workflow automation using Python, Advanced Excel, and Zapier."
    }
  ],

  skills: [
    { category: "Platforms", items: ["Salesforce", "Amazon Seller Central", "Shopify", "Shopee", "Lazada"] },
    { category: "Tools", items: ["Zapier", "Canva", "Zimbra", "Advanced Excel", "Google Workspace"] },
    { category: "Technical", items: ["Python", "Data Visualization", "SQL", "HTML/CSS", "PHP", "Workstation Setup"] }
  ],

  experience: [
    {
      role: "E-commerce Product Listing VA",
      company: "Shopee (Freelance)",
      period: "Oct 2025 – Dec 2025",
      tasks: [
        "Managed product listings for digital devices, ensuring accurate images and technical specifications.",
        "Created product infographics via Canva with precise technical details for higher conversion.",
        "Organized files using SKU-based naming conventions and maintained structured inventory folders."
      ]
    },
    {
      role: "E-commerce Product Listing & Affiliate VA",
      company: "Lazada (Freelance)",
      period: "Mar 2025 – Jun 2025",
      tasks: [
        "Optimized titles, descriptions, and specifications for maximum visibility on the Lazada platform.",
        "Created high-quality visuals and tracked affiliate performance metrics for digital device retailers.",
        "Ensured all listings strictly complied with platform guidelines and SEO best practices."
      ]
    },
    {
      role: "Executive Virtual Assistant",
      company: "Lydia Freelance",
      period: "May 2023 – Dec 2023",
      tasks: [
        "Managed complex class schedules for international students across multiple time zones.",
        "Prioritized urgent communications and streamlined executive email workflows to increase efficiency.",
        "Edited and formatted educational PowerPoint presentations and instructional assets in Canva."
      ]
    },
    {
      role: "Advisor I - Blended Support",
      company: "Concentrix",
      period: "Mar 2022 – Nov 2022",
      tasks: [
        "Utilized Salesforce CRM to manage customer inquiries regarding order status and shipments.",
        "Processed refunds, arranged reshipments, and managed catalog subscriptions via Advanced Excel.",
        "Consistently maintained high customer satisfaction scores (CSAT) through proactive problem-solving."
      ]
    }
  ],
  
  education: {
    degree: "Bachelor of Science in Information Systems",
    institution: "Kolehiyo ng Lungsod ng Dasmariñas",
    period: "2022 – 2026",
    details: "Focus on Data Science and Information Management. Current GPA: 1.49"
  }
};