/** English SEO titles, descriptions, and breadcrumb labels for key pages. */
export type PageSeo = {
  title: string;
  description: string;
  breadcrumbName?: string;
};

export const staticPageSeo = {
  home: {
    title: "Software Development in Riyadh Saudi Arabia | Repla Tech",
    description:
      "Looking for software development in Riyadh Saudi Arabia? Repla Technologies builds custom web, mobile and enterprise solutions that drive business growth.",
  },
  about: {
    title: "About Repla Technologies | Leading Software Development Firm",
    description:
      "About Repla Technologies: a software development company delivering custom web, mobile and enterprise solutions that help businesses grow and scale sustainably.",
    breadcrumbName: "About Repla Technologies",
  },
  contact: {
    title: "Contact Repla Technologies | Get a Free Software Quote Today",
    description:
      "Contact Repla Technologies for custom software, web and mobile app development. Share your project needs and get a free consultation from our expert team today.",
    breadcrumbName: "Contact Repla Technologies",
  },
} as const satisfies Record<string, PageSeo>;

export const serviceSeo: Record<string, PageSeo> = {
  "mobile-app-development": {
    title: "Mobile App Development in Riyadh | Custom iOS & Android Apps",
    description:
      "Looking for Mobile App Development in Riyadh? Repla Technologies builds secure, scalable iOS & Android apps for startups and enterprises. Get a free quote now!",
    breadcrumbName: "Mobile App Development in Riyadh",
  },
  "web-development": {
    title: "Web App Development in Riyadh | Scalable Solutions by Repla",
    description:
      "Looking for web app development in Riyadh? Repla Technologies builds fast, secure, scalable custom web apps for startups and enterprises. Get a free quote now!",
    breadcrumbName: "Web App Development in Riyadh",
  },
  "custom-software-development": {
    title: "Custom Software Development in Riyadh | Repla Technologies",
    description:
      "Custom Software Development in Riyadh built for your business. Repla Technologies delivers scalable web, mobile & enterprise solutions. Get a free quote today!",
    breadcrumbName: "Custom Software Development in Riyadh",
  },
  "ai-intelligent-automation": {
    title: "AI Automation Services in Riyadh | Repla Technologies",
    description:
      "Scale faster with AI automation services in Riyadh. Repla Technologies builds custom AI, web and software solutions that cut costs. Get a free quote today!",
    breadcrumbName: "AI Automation Services in Riyadh",
  },
  "api-development": {
    title: "API Development and Integration in Riyadh | Custom Solutions",
    description:
      "Looking for API Development and Integration in Riyadh? We build secure, scalable custom APIs and connect your systems seamlessly. Get a free consultation today!",
    breadcrumbName: "API Development and Integration in Riyadh",
  },
  "cloud-devops": {
    title: "Cloud and DevOps Service in Riyadh | Repla Technologies",
    description:
      "Looking for Cloud and DevOps Service in Riyadh? Repla Technologies delivers secure cloud migration, CI/CD automation & 24/7 support. Get a free consultation!",
    breadcrumbName: "Cloud and DevOps Service in Riyadh",
  },
  cybersecurity: {
    title: "Cybersecurity Service in Riyadh | Protect Your Business 24/7",
    description:
      "Need a reliable Cybersecurity Service in Riyadh? Expert threat detection, risk assessment and 24/7 monitoring to protect your business. Request your free quote.",
    breadcrumbName: "Cybersecurity Service in Riyadh",
  },
  "iot-embedded-systems": {
    title: "IoT and Embedded System Development in Riyadh | Repla",
    description:
      "Looking for IoT and Embedded System Development in Riyadh? Repla Technologies builds smart, secure, scalable solutions. Get a free consultation today!",
    breadcrumbName: "IoT and Embedded System Development in Riyadh",
  },
  "ui-ux-design": {
    title: "Figma UI UX Services in Riyadh | Custom Design Experts",
    description:
      "Get professional Figma UI UX Services in Riyadh. We craft user-friendly, modern interfaces and prototypes that boost engagement and conversions. Book a free call!",
    breadcrumbName: "Figma UI UX Services in Riyadh",
  },
  "quality-assurance": {
    title: "Software Quality Assurance Services in Riyadh | Top QA Team",
    description:
      "Looking for Software Quality Assurance Services in Riyadh? Get expert QA testing, automation & bug-free software that meets Saudi standards. Contact us today!",
    breadcrumbName: "Software Quality Assurance Services in Riyadh",
  },
  "dedicated-development-teams": {
    title: "Dedicated Software Development Team in Riyadh | Hire Experts",
    description:
      "Hire a dedicated software development team in Riyadh. Get expert developers, flexible engagement models, and faster delivery. Request a free consultation today.",
    breadcrumbName: "Dedicated Software Development Team in Riyadh",
  },
};

export const solutionSeo: Record<string, PageSeo> = {
  "enterprise-ai-platform": {
    title: "Enterprise AI Platform Development in Riyadh | Repla",
    description:
      "Hire an Enterprise AI Platform Development Team in Riyadh. Repla Technologies builds secure, scalable AI systems for Saudi enterprises. Get a free consultation.",
    breadcrumbName: "Enterprise AI Platform Development Team in Riyadh",
  },
  "hr-workforce": {
    title: "HR Software Development in Riyadh | Repla Technologies",
    description:
      "Hire a dedicated HR Software Development Team in Riyadh. Repla Technologies builds custom payroll, recruitment & HRMS solutions. Get a free consultation today!",
    breadcrumbName: "HR Software Development in Riyadh",
  },
  "saas-product-suite": {
    title: "Software as a Service Development in Riyadh | Repla Tech",
    description:
      "Looking for Software as a Service Development in Riyadh? We build secure, scalable SaaS platforms tailored to your business. Get a free consultation today!",
    breadcrumbName: "Software as a Service Development in Riyadh",
  },
  "smart-locker-iot": {
    title: "IoT Smart Locker Development in Riyadh | Repla Technologies",
    description:
      "IoT Smart Locker Development in Riyadh for offices, malls and campuses. Secure, app-controlled lockers built by experts. Get a free consultation today!",
    breadcrumbName: "IoT Smart Locker Development in Riyadh",
  },
  "ai-onboarding-chatbot": {
    title: "AI Chatbot Integration in Riyadh | Smart Business Growth",
    description:
      "Need AI chatbot integration in Riyadh? We build smart, multilingual chatbots that automate support, capture leads, and boost customer engagement. Get a free quote.",
    breadcrumbName: "AI Chatbot Integration in Riyadh",
  },
  "custom-crm-erp": {
    title: "Custom CRM and ERP Solution in Riyadh | Repla Technologies",
    description:
      "Get a custom CRM and ERP solution in Riyadh built for your business. Streamline sales, finance, and operations with Repla Technologies. Request a free demo today.",
    breadcrumbName: "Custom CRM and ERP Solution in Riyadh",
  },
};

export function getServiceSeo(slug: string): PageSeo | undefined {
  return serviceSeo[slug];
}

export function getSolutionSeo(slug: string): PageSeo | undefined {
  return solutionSeo[slug];
}
