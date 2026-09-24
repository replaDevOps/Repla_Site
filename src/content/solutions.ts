import { L, LL, type Solution } from "./types";
import { resolveSolutionContentSlug } from "@/lib/seo-routes";

export const solutions: Solution[] = [
  {
    slug: "hr-workforce",
    icon: "UserRoundCog",
    title: L("HR & Workforce Solution", "حل الموارد البشرية والقوى العاملة"),
    tagline: L("HRMS-shaped software for how you hire, manage, and retain people.", "برمجيات بروح أنظمة الموارد البشرية لتوظيف وإدارة والاحتفاظ بالناس."),
    description: L(
      "A named REPLA offering for workforce and HR systems — built from our HRMS, internal applications, and dedicated-team capabilities. We do not list unnamed client logos here.",
      "عرض مسمّى من REPLA لأنظمة القوى العاملة والموارد البشرية — من قدرات أنظمة الموارد البشرية والتطبيقات الداخلية والفرق المخصصة. لا نعرض شعارات عملاء غير مسمّاة هنا.",
    ),
    capabilities: LL(
      ["HRMS and inventory-adjacent workforce modules", "Internal business applications", "Dedicated teams for ongoing HR product work"],
      ["وحدات موارد بشرية وما يتصل بالمخزون والقوى العاملة", "تطبيقات أعمال داخلية", "فرق مخصصة لاستمرار منتج الموارد البشرية"],
    ),
    relatedServices: ["custom-software-development", "ai-intelligent-automation", "dedicated-development-teams"],
    relatedIndustries: ["b2b-software", "government", "healthcare"],
  },
  {
    slug: "enterprise-ai-platform",
    icon: "Brain",
    title: L("Enterprise AI Platform", "منصة الذكاء الاصطناعي للمؤسسات"),
    tagline: L("A place to run agents, LLMs, and automation inside the enterprise.", "مكان لتشغيل الوكلاء ونماذج اللغة والأتمتة داخل المؤسسة."),
    description: L(
      "An enterprise AI platform offering: agent development, LLM integration, workflow automation, and the software shell those models need. Scope is agreed per engagement — this is not a public multi-tenant product name with invented metrics.",
      "عرض منصة ذكاء اصطناعي مؤسسية: تطوير وكلاء وتكامل نماذج لغة وأتمتة سير العمل والغلاف البرمجي الذي تحتاجه. النطاق يُتفق عليه لكل تعاون — وليست منتجاً عاماً متعدد المستأجرين بمقاييس مخترعة.",
    ),
    capabilities: LL(
      ["AI agent development", "Enterprise AI integration", "LLM integration", "AI workflow automation"],
      ["تطوير وكلاء الذكاء الاصطناعي", "تكامل الذكاء الاصطناعي المؤسسي", "تكامل نماذج اللغة", "أتمتة سير عمل الذكاء الاصطناعي"],
    ),
    relatedServices: ["ai-intelligent-automation", "custom-software-development", "cloud-devops"],
    relatedIndustries: ["ai-saas", "government", "fintech-banking"],
  },
  {
    slug: "saas-product-suite",
    icon: "Layers",
    title: L("SaaS Product Suite", "مجموعة منتجات SaaS"),
    tagline: L("End-to-end SaaS engineering from our product development practice.", "هندسة SaaS متكاملة من ممارسة تطوير المنتجات."),
    description: L(
      "SaaS product suite work: multi-product or modular SaaS engineering, design systems, cloud delivery, and dedicated teams. We describe the offering, not a storefront of invented apps.",
      "عمل مجموعة منتجات SaaS: هندسة SaaS متعددة المنتجات أو وحدات وأنظمة تصميم وتسليم سحابي وفرق مخصصة. نصف العرض وليس واجهة تطبيقات مخترعة.",
    ),
    capabilities: LL(
      ["SaaS product development", "Design systems", "Cloud and DevOps", "Dedicated development teams"],
      ["تطوير منتجات SaaS", "أنظمة تصميم", "سحابة وDevOps", "فرق تطوير مخصصة"],
    ),
    relatedServices: ["custom-software-development", "ui-ux-design", "cloud-devops", "dedicated-development-teams"],
    relatedIndustries: ["ai-saas", "b2b-software"],
  },
  {
    slug: "smart-locker-iot",
    icon: "Lock",
    title: L("Smart Locker & IoT Solution", "حل الخزائن الذكية وإنترنت الأشياء"),
    tagline: L("Lockers, RFID, and the software that operates them.", "خزائن وRFID والبرمجيات التي تشغّلها."),
    description: L(
      "A named IoT offering: smart locker systems, RFID, GPS and sensors, and the platform operators use. Hardware supply is project-specific.",
      "عرض إنترنت أشياء مسمّى: أنظمة خزائن ذكية وRFID وGPS ومستشعرات والمنصة التي يستخدمها المشغّلون. توريد العتاد خاص بكل مشروع.",
    ),
    capabilities: LL(
      ["Smart locker systems and RFID", "GPS tracking and sensor integration", "IoT platforms", "Hardware and software integration"],
      ["أنظمة الخزائن الذكية وRFID", "تتبع GPS وتكامل المستشعرات", "منصات إنترنت الأشياء", "تكامل العتاد والبرمجيات"],
    ),
    relatedServices: ["iot-embedded-systems", "custom-software-development", "mobile-app-development"],
    relatedIndustries: ["logistics", "retail-ecommerce", "education", "construction"],
  },
  {
    slug: "ai-onboarding-chatbot",
    icon: "MessageSquareMore",
    title: L("AI Onboarding Chatbot", "روبوت الدردشة للانضمام بالذكاء الاصطناعي"),
    tagline: L("Assistants that onboard people — not a generic chat widget.", "مساعدون يُدخلون الناس في العمل — وليس ودجة دردشة عامة."),
    description: L(
      "AI chatbots and virtual assistants aimed at onboarding: employees, customers, or partners. Built from our chatbot, agent, and enterprise integration capabilities.",
      "روبوتات دردشة ومساعدون افتراضيون للانضمام: موظفون أو عملاء أو شركاء. تُبنى من قدرات الروبوتات والوكلاء والتكامل المؤسسي.",
    ),
    capabilities: LL(
      ["AI chatbots and virtual assistants", "AI agent development", "Enterprise AI integration", "Workflow automation"],
      ["روبوتات الدردشة والمساعدون الافتراضيون", "تطوير وكلاء الذكاء الاصطناعي", "تكامل الذكاء الاصطناعي المؤسسي", "أتمتة سير العمل"],
    ),
    relatedServices: ["ai-intelligent-automation", "custom-software-development", "ui-ux-design"],
    relatedIndustries: ["b2b-software", "education", "healthcare", "ai-saas"],
  },
  {
    slug: "custom-crm-erp",
    icon: "Network",
    title: L("Custom CRM & ERP Solution", "حل CRM وERP مخصص"),
    tagline: L("CRM and ERP when the packaged product is the bottleneck.", "CRM وERP عندما يكون المنتج الجاهز هو عنق الزجاجة."),
    description: L(
      "Custom CRM and ERP development from our enterprise software practice — including integrations with payment, industry, and internal systems.",
      "تطوير CRM وERP مخصص من ممارسة برمجيات المؤسسات — بما في ذلك التكامل مع الدفع والقطاع والأنظمة الداخلية.",
    ),
    capabilities: LL(
      ["CRM and ERP development", "ERP and CRM integration", "Internal business applications", "API development"],
      ["تطوير CRM وERP", "تكامل ERP وCRM", "تطبيقات أعمال داخلية", "تطوير واجهات"],
    ),
    relatedServices: ["custom-software-development", "api-development", "data-engineering-analytics"],
    relatedIndustries: ["b2b-software", "manufacturing", "retail-ecommerce", "healthcare"],
  },
];

export function getSolution(slug: string) {
  const contentSlug = resolveSolutionContentSlug(slug);
  return solutions.find((s) => s.slug === contentSlug);
}
