import { L, loc, type FaqItem, type Locale } from "./types";

const Q = (qEn: string, qAr: string, aEn: string, aAr: string): FaqItem => ({
  q: L(qEn, qAr),
  a: L(aEn, aAr),
});

/** Fixed homepage and FAQ-page baseline — not sourced from Sanity. */
export const CORE_FAQS: FaqItem[] = [
  Q(
    "What services does REPLA Technologies provide?",
    "ما الخدمات التي تقدمها REPLA Technologies؟",
    "REPLA delivers AI and intelligent automation, custom software, web and mobile applications, cloud and DevOps, cybersecurity, IoT, UI/UX design, quality assurance, API development, dedicated development teams, and related consulting and maintenance services.",
    "تقدّم REPLA الذكاء الاصطناعي والأتمتة الذكية والبرمجيات المخصصة وتطبيقات الويب والجوال والسحابة وDevOps والأمن السيبراني وإنترنت الأشياء وتصميم الواجهات وضمان الجودة وتطوير الواجهات البرمجية والفرق المخصصة، إضافة إلى الاستشارات والصيانة ذات الصلة.",
  ),
  Q(
    "How does your development process work?",
    "كيف يعمل نهجكم في التطوير؟",
    "We begin by understanding your business goals, users, and constraints. From there we shape the architecture, delivery plan, and milestones. Work moves in structured phases with regular reviews, testing, and releases you can validate before broader rollout.",
    "نبدأ بفهم أهداف أعمالكم والمستخدمين والقيود. بعد ذلك نحدّد البنية وخطة التسليم والمراحل. يسير العمل على مراحل منظمة مع مراجعات دورية واختبارات وإصدارات يمكنكم التحقق منها قبل التوسع.",
  ),
  Q(
    "Which technologies do you work with?",
    "ما التقنيات التي تعملون بها؟",
    "Our teams build with modern stacks such as Next.js, React, TypeScript, Node.js, Python, Flutter, AWS, Azure, GCP, Docker, Kubernetes, and Sanity CMS — selecting tools based on performance, security, scalability, and long-term maintainability.",
    "تبني فرقنا بمجموعات تقنية حديثة مثل Next.js وReact وTypeScript وNode.js وPython وFlutter وAWS وAzure وGCP وDocker وKubernetes وSanity CMS — مع اختيار الأدوات وفق الأداء والأمان وقابلية التوسع والصيانة على المدى الطويل.",
  ),
  Q(
    "Can you help with new products and existing systems?",
    "هل يمكنكم المساعدة في منتجات جديدة وأنظمة قائمة؟",
    "Yes. We build new platforms from discovery through launch, and we also extend or modernize existing software through APIs, cloud migration, mobile apps, and dedicated teams that integrate with your current stack.",
    "نعم. نبني منصات جديدة من الاكتشاف حتى الإطلاق، كما نوسّع أو نحدّث الأنظمة القائمة عبر واجهات برمجية وترحيل سحابي وتطبيقات جوال وفرق مخصصة تندمج مع مجموعتكم التقنية الحالية.",
  ),
  Q(
    "How do we start a project with REPLA?",
    "كيف نبدأ مشروعاً مع REPLA؟",
    "Share your requirements through the contact form or email hr.replatech@gmail.com. Our team will review the scope, discuss fit, and outline the next steps for discovery, estimation, and delivery planning.",
    "شاركوا متطلباتكم عبر نموذج التواصل أو البريد hr.replatech@gmail.com. ستراجع فرقتنا النطاق وتناقش الملاءمة وتوضّح الخطوات التالية للاكتشاف والتقدير وتخطيط التسليم.",
  ),
];

export function getCoreFaqAccordionItems(locale: Locale) {
  return CORE_FAQS.map((faq) => ({
    q: loc(faq.q, locale),
    a: loc(faq.a, locale),
  }));
}
