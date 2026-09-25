import { L, LL, type Industry } from "./types";
import { resolveIndustryContentSlug } from "@/lib/seo-routes";

export const industries: Industry[] = [
  {
    slug: "healthcare",
    icon: "HeartPulse",
    title: L("Healthcare", "الرعاية الصحية"),
    shortTitle: L("Healthcare", "الرعاية الصحية"),
    heroTitle: L(
      "Healthcare Software & Digital Solutions",
      "برمجيات وحلول رقمية للرعاية الصحية",
    ),
    tagline: L(
      "Clinical and operational software that respects care workflows.",
      "برمجيات سريرية وتشغيلية تحترم مسارات الرعاية.",
    ),
    description: L(
      "Applications, integrations, and mobile products for healthcare operations — from internal systems to patient-facing apps — with the security and API work this sector requires.",
      "تطبيقات وتكاملات ومنتجات جوال لعمليات الرعاية الصحية — من الأنظمة الداخلية إلى تطبيقات المرضى — مع الأمن وعمل الواجهات الذي يتطلبه هذا القطاع.",
    ),
    metaTitle: L(
      "Healthcare Software Development | REPLA",
      "تطوير برمجيات الرعاية الصحية | REPLA",
    ),
    metaDescription: L(
      "Build secure healthcare applications, patient portals, and clinical integrations with REPLA. Custom software, mobile apps, APIs, and cybersecurity for care organizations.",
      "ابنِ تطبيقات رعاية صحية آمنة وبوابات مرضى وتكاملات سريرية مع REPLA. برمجيات مخصصة وتطبيقات جوال وواجهات وأمن سيبراني لمؤسسات الرعاية.",
    ),
    overview: L(
      "Healthcare organizations need software that fits clinical workflows, protects sensitive data, and connects departments that still run on separate tools. Digital care also means mobile access for staff and patients without losing auditability. REPLA designs and builds healthcare systems that integrate with existing hospital and clinic environments rather than forcing a rip-and-replace.",
      "تحتاج مؤسسات الرعاية الصحية إلى برمجيات تناسب المسارات السريرية وتحمي البيانات الحساسة وتربط الأقسام التي ما زالت تعمل بأدوات منفصلة. تعني الرعاية الرقمية أيضاً وصولاً جوّالاً للموظفين والمرضى دون فقدان قابلية التدقيق. تصمّم REPLA وتبني أنظمة رعاية صحية تتكامل مع بيئات المستشفيات والعيادات القائمة بدلاً من فرض استبدال كامل.",
    ),
    challenges: LL(
      [
        "Fragmented electronic records across departments and sites",
        "Legacy clinical systems that resist new integrations",
        "Patient and staff mobile access that must remain auditable",
        "Appointment, referral, and discharge handoffs lost between tools",
        "Inconsistent identity and consent handling across channels",
        "Slow reporting for quality, capacity, and operational metrics",
        "Security and privacy requirements that block product velocity",
        "Vendor APIs that are poorly documented or unstable in production",
      ],
      [
        "سجلات إلكترونية مجزأة عبر الأقسام والمواقع",
        "أنظمة سريرية قديمة تقاوم التكاملات الجديدة",
        "وصول جوّال للمرضى والموظفين يجب أن يبقى قابلاً للتدقيق",
        "تسليم المواعيد والإحالات والخروج يضيع بين الأدوات",
        "معالجة غير متسقة للهوية والموافقة عبر القنوات",
        "تقارير بطيئة لمؤشرات الجودة والطاقة الاستيعابية والتشغيل",
        "متطلبات أمن وخصوصية تعيق سرعة المنتج",
        "واجهات مورّدين سيئة التوثيق أو غير مستقرة في الإنتاج",
      ],
    ),
    solutions: LL(
      [
        "Custom clinical and operational applications",
        "Patient and clinician mobile apps",
        "Healthcare API gateways and HL7/FHIR-oriented integrations",
        "Secure patient portals and self-service scheduling",
        "Care-team collaboration and task routing tools",
        "Pharmacy, lab, and ancillary system connectors",
        "Role-based access and audit-logging foundations",
        "Analytics dashboards for bed, queue, and service metrics",
        "Hardening and security reviews for care-facing products",
      ],
      [
        "تطبيقات سريرية وتشغيلية مخصصة",
        "تطبيقات جوال للمرضى والأطباء",
        "بوابات واجهات رعاية صحية وتكاملات موجهة لـ HL7/FHIR",
        "بوابات مرضى آمنة وجدولة ذاتية الخدمة",
        "أدوات تعاون فرق الرعاية وتوجيه المهام",
        "موصّلات للصيدلة والمختبر والأنظمة المساعدة",
        "أسس صلاحيات حسب الدور وسجلات تدقيق",
        "لوحات تحليلات لمؤشرات الأسرّة والطوابير والخدمات",
        "تعزيز ومراجعات أمنية للمنتجات المواجهة للرعاية",
      ],
    ),
    features: LL(
      [
        "Configurable clinical workflows and form templates",
        "Appointment booking with waitlist and reminder hooks",
        "Document and imaging attachment with access controls",
        "Multi-facility user directories and department scoping",
        "Encounter timelines visible to authorized care teams",
        "Consent and preference capture at key digital touchpoints",
        "Offline-tolerant mobile patterns for ward and field use",
        "Exportable audit trails for compliance reviews",
        "Notification hubs for labs, referrals, and follow-ups",
      ],
      [
        "مسارات سريرية وقوالب نماذج قابلة للتهيئة",
        "حجز مواعيد مع قوائم انتظار وخطافات تذكير",
        "مرفقات مستندات وتصوير مع ضوابط وصول",
        "أدلة مستخدمين متعددة المرافق ونطاق حسب القسم",
        "جداول زمنية للزيارات مرئية لفرق الرعاية المخوّلة",
        "التقاط الموافقة والتفضيلات عند نقاط رقمية أساسية",
        "أنماط جوال تتحمّل انقطاع الشبكة لأجنحة العمل والميدان",
        "مسارات تدقيق قابلة للتصدير لمراجعات الامتثال",
        "مراكز إشعارات للمختبرات والإحالات والمتابعات",
      ],
    ),
    aiIntro: L(
      "AI in healthcare should reduce administrative load and surface clinical signals — never invent diagnoses or bypass governance. We apply models where triage, documentation, and operations benefit most.",
      "ينبغي أن يقلّل الذكاء الاصطناعي في الرعاية الصحية العبء الإداري ويُبرز الإشارات السريرية — لا أن يخترع تشخيصات أو يتجاوز الحوكمة. نطبّق النماذج حيث تستفيد الفرز والتوثيق والتشغيل أكثر.",
    ),
    aiUseCases: LL(
      [
        "Draft clinical note summaries from structured encounter data",
        "Prioritize inbox and referral queues by urgency signals",
        "Flag incomplete discharge or medication reconciliation checklists",
        "Assist coding and documentation completeness reviews",
        "Chat assistants for appointment FAQs and prep instructions",
        "Anomaly alerts on unusual scheduling or utilization patterns",
      ],
      [
        "مسودات ملخصات ملاحظات سريرية من بيانات الزيارة المنظمة",
        "ترتيب أولوية صناديق الوارد وطوابير الإحالات حسب إشارات الاستعجال",
        "الإشارة إلى قوائم خروج أو مطابقة أدوية غير مكتملة",
        "المساعدة في مراجعات اكتمال الترميز والتوثيق",
        "مساعدو دردشة لأسئلة المواعيد وتعليمات التحضير",
        "تنبيهات شذوذ لأنماط جدولة أو استخدام غير معتادة",
      ],
    ),
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Python",
      "AWS",
      "Docker",
    ],
    whyRepla: LL(
      [
        "We design around real care workflows, not generic CRM templates",
        "Security and auditability are built into the product shape from day one",
        "API and integration work is treated as core delivery, not an afterthought",
        "Mobile and portal experiences stay aligned with staff and patient tasks",
        "Clear scope and phased delivery suit regulated healthcare change",
        "Arabic and English product surfaces when your teams and patients need both",
      ],
      [
        "نصمّم حول مسارات رعاية حقيقية لا قوالب CRM عامة",
        "الأمن وقابلية التدقيق جزء من شكل المنتج منذ اليوم الأول",
        "عمل الواجهات والتكامل يُعامل كتسلّم أساسي لا كفكرة لاحقة",
        "تجارب الجوال والبوابات تبقى متوافقة مع مهام الموظفين والمرضى",
        "نطاق واضح وتسليم مرحلي يناسب التغيير المنظم في الرعاية الصحية",
        "واجهات منتج بالعربية والإنجليزية عندما تحتاجها فرقكم ومرضاكم",
      ],
    ),
    faqs: [
      {
        q: L(
          "Do you replace our existing hospital information system?",
          "هل تستبدلون نظام معلومات المستشفى القائم؟",
        ),
        a: L(
          "Usually no. We build around or beside core systems — portals, mobile apps, integrations, and operational tools — unless a greenfield replacement is the stated goal.",
          "عادة لا. نبني حول الأنظمة الأساسية أو بجانبها — بوابات وتطبيقات جوال وتكاملات وأدوات تشغيل — ما لم يكن الاستبدال من الصفر هو الهدف المعلن.",
        ),
      },
      {
        q: L(
          "Can you work with FHIR or HL7-style integrations?",
          "هل يمكنكم العمل مع تكاملات بأسلوب FHIR أو HL7؟",
        ),
        a: L(
          "Yes. We design API layers and connectors oriented to healthcare interchange patterns, scoped to the systems and payloads your environment already uses.",
          "نعم. نصمّم طبقات واجهات وموصّلات موجهة لأنماط تبادل الرعاية الصحية، ضمن نطاق الأنظمة والحمولات التي تستخدمها بيئتكم بالفعل.",
        ),
      },
      {
        q: L(
          "How do you approach patient data security?",
          "كيف تتعاملون مع أمن بيانات المرضى؟",
        ),
        a: L(
          "Through least-privilege access, encryption in transit, audit logging, secure hosting choices, and security reviews aligned to your policies — not through marketing claims of certification we do not list.",
          "عبر أقل صلاحيات ممكنة والتشفير أثناء النقل وسجلات التدقيق واختيارات استضافة آمنة ومراجعات أمنية متوافقة مع سياساتكم — لا عبر ادعاءات تسويقية لشهادات غير مدرجة.",
        ),
      },
      {
        q: L(
          "Do you build patient-facing mobile apps?",
          "هل تبنون تطبيقات جوال موجهة للمرضى؟",
        ),
        a: L(
          "Yes — booking, results visibility where permitted, messaging, and care navigation — always with the same access and audit rules as your clinical backend.",
          "نعم — الحجز وعرض النتائج حيث يُسمح والمراسلة وتوجيه الرعاية — دائماً بنفس قواعد الوصول والتدقيق الخاصة بالخلفية السريرية.",
        ),
      },
      {
        q: L(
          "What is a typical starting engagement?",
          "ما هو شكل التعاون الابتدائي المعتاد؟",
        ),
        a: L(
          "A discovery and architecture phase that maps workflows, systems, and compliance constraints, then a first vertical slice such as a portal module or integration path.",
          "مرحلة اكتشاف وهندسة ترسم المسارات والأنظمة وقيود الامتثال، ثم شريحة عمودية أولى مثل وحدة بوابة أو مسار تكامل.",
        ),
      },
      {
        q: L(
          "Can AI features be added without exposing clinical records broadly?",
          "هل يمكن إضافة ميزات ذكاء اصطناعي دون تعريض السجلات السريرية على نطاق واسع؟",
        ),
        a: L(
          "Yes. We scope models to approved data subsets, redact where needed, and keep human review on clinical decisions — AI assists operations and documentation, it does not replace clinical judgment.",
          "نعم. نحدد نطاق النماذج على مجموعات بيانات معتمدة ونحجب عند الحاجة ونبقي المراجعة البشرية على القرارات السريرية — الذكاء الاصطناعي يساعد التشغيل والتوثيق ولا يحل محل الحكم السريري.",
        ),
      },
    ],
    ctaTitle: L(
      "Ready to Transform Your Healthcare Operations?",
      "هل أنتم مستعدون لتحويل عمليات الرعاية الصحية؟",
    ),
    ctaBody: L(
      "Tell us about your care workflows and systems — we will propose a focused digital path.",
      "أخبرونا عن مسارات الرعاية والأنظمة لديكم — وسنقترح مساراً رقمياً مركّزاً.",
    ),
    relatedServices: [
      "custom-software-development",
      "mobile-app-development",
      "api-development",
      "cybersecurity",
    ],
  },
  {
    slug: "fintech-banking",
    icon: "Landmark",
    title: L("FinTech & Banking", "التقنية المالية والبنوك"),
    shortTitle: L("FinTech", "التقنية المالية"),
    heroTitle: L(
      "FinTech & Banking Software Solutions",
      "حلول برمجيات التقنية المالية والبنوك",
    ),
    tagline: L(
      "Payments, banking APIs, and financial applications with control.",
      "مدفوعات وواجهات بنكية وتطبيقات مالية مع تحكم.",
    ),
    description: L(
      "FinTech and banking software: financial applications, payment gateway integration, banking APIs, and the security and QA those products need.",
      "برمجيات التقنية المالية والبنوك: تطبيقات مالية وتكامل بوابات الدفع وواجهات بنكية والأمن وضمان الجودة التي تحتاجها.",
    ),
    metaTitle: L(
      "FinTech & Banking Software | REPLA",
      "برمجيات التقنية المالية والبنوك | REPLA",
    ),
    metaDescription: L(
      "Build payment platforms, banking APIs, and secure financial apps with REPLA. Custom software, integrations, cybersecurity, and mobile for FinTech and banking teams.",
      "ابنِ منصات دفع وواجهات بنكية وتطبيقات مالية آمنة مع REPLA. برمجيات مخصصة وتكاملات وأمن سيبراني وجوال لفرق التقنية المالية والبنوك.",
    ),
    overview: L(
      "Financial products live or die on trust, ledger accuracy, and resilient integrations with banks, gateways, and partners. Teams need software that can ship new channels without weakening controls. REPLA builds FinTech and banking applications with API-first design, strong security practices, and operational visibility.",
      "تعيش المنتجات المالية أو تنهار على الثقة ودقة الدفاتر والتكاملات المتينة مع البنوك وبوابات الدفع والشركاء. تحتاج الفرق إلى برمجيات تستطيع إطلاق قنوات جديدة دون إضعاف الضوابط. تبني REPLA تطبيقات تقنية مالية وبنكية بتصميم واجهات أولاً وممارسات أمنية قوية ورؤية تشغيلية.",
    ),
    challenges: LL(
      [
        "Core banking or ledger systems that are hard to extend safely",
        "Payment failures without a clear reconciliation trail",
        "Partner APIs with inconsistent latency and error semantics",
        "Fraud and abuse signals arriving too late to act",
        "Mobile and web channels that diverge from back-office rules",
        "Manual onboarding and KYC steps that stall conversion",
        "Security testing treated as optional before release",
        "Multi-currency and settlement quirks buried in spreadsheets",
      ],
      [
        "أنظمة بنكية أساسية أو دفاتر يصعب توسيعها بأمان",
        "إخفاقات دفع دون أثر تسوية واضح",
        "واجهات شركاء بزمن استجابة ومعاني أخطاء غير متسقة",
        "إشارات احتيال وإساءة تصل متأخرة جداً للتصرف",
        "قنوات جوال وويب تنحرف عن قواعد المكتب الخلفي",
        "خطوات انضمام وKYC يدوية تعيق التحويل",
        "اختبار أمني يُعامل كخيار قبل الإطلاق",
        "تعقيدات عملات متعددة وتسوية مدفونة في جداول",
      ],
    ),
    solutions: LL(
      [
        "Custom FinTech and banking applications",
        "Payment gateway and processor integrations",
        "Banking and open-banking style API layers",
        "Customer and merchant portals for financial products",
        "Transaction monitoring and reconciliation tooling",
        "Secure mobile banking and wallet experiences",
        "Identity, session, and privilege hardening for money movement",
        "Automated regression suites around critical payment paths",
        "Operational dashboards for volume, failure, and settlement health",
      ],
      [
        "تطبيقات تقنية مالية وبنكية مخصصة",
        "تكاملات بوابات ومعالجات الدفع",
        "طبقات واجهات بنكية وبأسلوب البنوك المفتوحة",
        "بوابات عملاء وتجار للمنتجات المالية",
        "أدوات مراقبة معاملات وتسوية",
        "تجارب بنوك وجوّال ومحافظ آمنة",
        "تعزيز الهوية والجلسات والصلاحيات لحركة الأموال",
        "حزم انحدار آلية حول مسارات الدفع الحرجة",
        "لوحات تشغيل لحجم الإخفاق وصحة التسوية",
      ],
    ),
    features: LL(
      [
        "Idempotent payment and transfer request handling",
        "Ledger-friendly event streams for status changes",
        "Role-separated maker-checker approval flows",
        "Configurable fee, limit, and product rule engines",
        "Statement and transaction export for customers and ops",
        "Webhook and callback reliability with retry queues",
        "Device and session risk signals on sensitive actions",
        "Merchant onboarding workflows with document capture",
        "Multi-environment promotion paths for regulated releases",
      ],
      [
        "معالجة طلبات دفع وتحويل ذات هوية متكررة آمنة",
        "تدفقات أحداث ملائمة للدفاتر لتغيّر الحالة",
        "مسارات موافقة صانع-مراجع مفصولة الأدوار",
        "محركات قواعد رسوم وحدود ومنتجات قابلة للتهيئة",
        "تصدير كشوف ومعاملات للعملاء والتشغيل",
        "موثوقية خطافات ونداءات مع طوابير إعادة محاولة",
        "إشارات مخاطر جهاز وجلسة على الإجراءات الحساسة",
        "مسارات انضمام تجار مع التقاط مستندات",
        "مسارات ترقية بيئات متعددة للإصدارات المنظمة",
      ],
    ),
    aiIntro: L(
      "In FinTech, AI helps risk, support, and operations — with strict guardrails around money movement and customer data. We use models to assist decisions, not to silently move funds.",
      "في التقنية المالية يساعد الذكاء الاصطناعي المخاطر والدعم والتشغيل — مع حواجز صارمة حول حركة الأموال وبيانات العملاء. نستخدم النماذج لمساعدة القرارات لا لنقل الأموال بصمت.",
    ),
    aiUseCases: LL(
      [
        "Score and prioritize suspicious transaction queues",
        "Assist support agents with policy-aware answer drafts",
        "Extract and classify onboarding documents for review",
        "Detect anomalous merchant or account behavior patterns",
        "Summarize dispute cases for human adjudication",
        "Forecast volume spikes for capacity and liquidity planning",
      ],
      [
        "تسجيل أولوية طوابير المعاملات المشبوهة",
        "مساعدة وكلاء الدعم بمسودات إجابات واعية بالسياسة",
        "استخراج وتصنيف مستندات الانضمام للمراجعة",
        "اكتشاف أنماط سلوك شاذة للتجار أو الحسابات",
        "تلخيص حالات النزاع للفصل البشري",
        "التنبؤ بذروات الحجم لتخطيط الطاقة والسيولة",
      ],
    ),
    technologies: [
      "TypeScript",
      "Node.js",
      "React",
      "Next.js",
      "PostgreSQL",
      "Python",
      "AWS",
      "Kubernetes",
    ],
    whyRepla: LL(
      [
        "We treat payment and ledger correctness as non-negotiable product requirements",
        "API design and partner integration experience fit bank and FinTech constraints",
        "Security and QA are woven into delivery, not bolted on at the end",
        "Mobile and web channels stay consistent with back-office controls",
        "Phased rollouts reduce risk when replacing or extending financial flows",
        "Clear documentation so your ops and compliance teams can operate the system",
      ],
      [
        "نتعامل مع صحة الدفع والدفاتر كمتطلبات منتج غير قابلة للتفاوض",
        "خبرة تصميم الواجهات وتكامل الشركاء تناسب قيود البنوك والتقنية المالية",
        "الأمن وضمان الجودة جزء من التسليم لا إضافة في النهاية",
        "قنوات الجوال والويب تبقى متسقة مع ضوابط المكتب الخلفي",
        "الإطلاقات المرحلية تقلّل المخاطر عند استبدال أو توسيع التدفقات المالية",
        "توثيق واضح حتى تستطيع فرق التشغيل والامتثال تشغيل النظام",
      ],
    ),
    faqs: [
      {
        q: L(
          "Can you integrate with our payment gateway or bank APIs?",
          "هل يمكنكم التكامل مع بوابة الدفع أو واجهات البنك لدينا؟",
        ),
        a: L(
          "Yes. We build adapters, webhook handlers, and reconciliation paths around the providers and banking interfaces you already use or plan to add.",
          "نعم. نبني محوّلات ومعالجات خطافات ومسارات تسوية حول المزوّدين والواجهات البنكية التي تستخدمونها أو تخططون لإضافتها.",
        ),
      },
      {
        q: L(
          "Do you build customer-facing banking or wallet apps?",
          "هل تبنون تطبيقات بنكية أو محافظ موجهة للعملاء؟",
        ),
        a: L(
          "Yes — web and mobile experiences for transfers, cards, statements, and support — always backed by the same authorization and audit rules as your core services.",
          "نعم — تجارب ويب وجوال للتحويلات والبطاقات والكشوف والدعم — دائماً مدعومة بنفس قواعد التفويض والتدقيق الخاصة بخدماتكم الأساسية.",
        ),
      },
      {
        q: L(
          "How do you handle PCI and sensitive card data?",
          "كيف تتعاملون مع PCI وبيانات البطاقات الحساسة؟",
        ),
        a: L(
          "We keep card data out of your application where possible via tokenization and hosted fields from your gateway, and design flows so your stack never stores raw PAN unnecessarily.",
          "نُبقي بيانات البطاقات خارج تطبيقكم حيث أمكن عبر الترميز والحقول المستضافة من بوابتكم، ونصمّم التدفقات بحيث لا تخزّن بنيتكم رقم البطاقة الخام دون ضرورة.",
        ),
      },
      {
        q: L(
          "What about maker-checker and internal controls?",
          "ماذا عن صانع-مراجع والضوابط الداخلية؟",
        ),
        a: L(
          "We implement role-separated approvals, dual control on sensitive actions, and audit trails that operations and risk teams can review.",
          "ننفّذ موافقات مفصولة الأدوار وتحكماً مزدوجاً على الإجراءات الحساسة ومسارات تدقيق يمكن لفرق التشغيل والمخاطر مراجعتها.",
        ),
      },
      {
        q: L(
          "Can you modernize a legacy financial product gradually?",
          "هل يمكنكم تحديث منتج مالي قديم تدريجياً؟",
        ),
        a: L(
          "Yes. We often wrap or strangle legacy cores with new API layers and channels so you migrate capabilities without a single big-bang cutover.",
          "نعم. غالباً نغلّف الأنوية القديمة أو نستبدلها تدريجياً بطبقات واجهات وقنوات جديدة لتنقلوا القدرات دون قطع فجائي واحد.",
        ),
      },
      {
        q: L(
          "Do you provide ongoing security testing?",
          "هل تقدّمون اختباراً أمنياً مستمراً؟",
        ),
        a: L(
          "We can include security reviews, hardening, and automated checks as part of delivery and maintenance — scoped to your release cadence and risk appetite.",
          "يمكننا تضمين مراجعات أمنية وتعزيزاً وفحوصات آلية ضمن التسليم والصيانة — وفق إيقاع إصداراتكم ومستوى تقبّل المخاطر.",
        ),
      },
    ],
    ctaTitle: L(
      "Ready to Strengthen Your FinTech Platform?",
      "هل أنتم مستعدون لتعزيز منصتكم المالية؟",
    ),
    ctaBody: L(
      "Share your payment and product goals — we will outline a secure build path.",
      "شاركوا أهداف الدفع والمنتج — وسنرسم مسار بناء آمناً.",
    ),
    relatedServices: [
      "custom-software-development",
      "api-development",
      "cybersecurity",
      "mobile-app-development",
    ],
  },
  {
    slug: "education",
    icon: "GraduationCap",
    title: L("Education & E-Learning", "التعليم والتعلم الإلكتروني"),
    shortTitle: L("Education", "التعليم"),
    heroTitle: L(
      "Education Software & E-Learning Platforms",
      "برمجيات التعليم ومنصات التعلم الإلكتروني",
    ),
    tagline: L(
      "Portals, products, and platforms for learning organizations.",
      "بوابات ومنتجات ومنصات للمؤسسات التعليمية.",
    ),
    description: L(
      "Web portals, custom software, and mobile experiences for education and e-learning — built so staff and learners can actually complete the task.",
      "بوابات ويب وبرمجيات مخصصة وتجارب جوال للتعليم والتعلم الإلكتروني — تُبنى حتى يتمكن الموظفون والمتعلمون من إكمال المهمة.",
    ),
    metaTitle: L(
      "Education & E-Learning Software | REPLA",
      "برمجيات التعليم والتعلم الإلكتروني | REPLA",
    ),
    metaDescription: L(
      "Build learning portals, education platforms, and student apps with REPLA. Web, custom software, UI/UX, and mobile for schools, universities, and training providers.",
      "ابنِ بوابات تعلم ومنصات تعليم وتطبيقات طلاب مع REPLA. ويب وبرمجيات مخصصة وتصميم واجهات وجوال للمدارس والجامعات ومقدّمي التدريب.",
    ),
    overview: L(
      "Education providers juggle content, enrollment, assessment, and communication across tools that rarely talk to each other. Learners and staff need portals and apps that are clear on mobile and desktop. REPLA builds education software that unifies journeys — from admission to completion — without burying institutions under unused LMS features.",
      "يجمع مقدّمو التعليم بين المحتوى والتسجيل والتقييم والتواصل عبر أدوات نادراً ما تتحدث مع بعضها. يحتاج المتعلمون والموظفون إلى بوابات وتطبيقات واضحة على الجوال وسطح المكتب. تبني REPLA برمجيات تعليم توحّد الرحلات — من القبول إلى الإكمال — دون إغراق المؤسسات بميزات منصة تعلم غير مستخدمة.",
    ),
    challenges: LL(
      [
        "Content and users scattered across disconnected LMS and admin tools",
        "Portals that are hard for faculty, parents, and learners to navigate",
        "Enrollment and payment steps that drop applicants mid-flow",
        "Assessment and grade data that cannot be trusted for reporting",
        "Attendance and engagement signals trapped in siloed apps",
        "Weak mobile experience for homework, schedules, and notices",
        "Accessibility and bilingual needs ignored in the interface",
        "Integrations with SIS, identity, and payment providers left unfinished",
      ],
      [
        "محتوى ومستخدمون موزعون على أنظمة تعلم وأدوات إدارة منفصلة",
        "بوابات يصعب على أعضاء الهيئة وأولياء الأمور والمتعلمين التنقّل فيها",
        "خطوات تسجيل ودفع تُسقط المتقدمين في منتصف التدفق",
        "بيانات تقييم ودرجات لا يمكن الوثوق بها للتقارير",
        "إشارات حضور وتفاعل محبوسة في تطبيقات معزولة",
        "تجربة جوال ضعيفة للواجبات والجداول والإشعارات",
        "احتياجات الوصول وثنائية اللغة مهملة في الواجهة",
        "تكاملات مع أنظمة الطلاب والهوية وبوابات الدفع غير مكتملة",
      ],
    ),
    solutions: LL(
      [
        "Custom learning and campus portals",
        "E-learning product shells and course delivery surfaces",
        "Student, parent, and faculty mobile applications",
        "Enrollment, admissions, and fee collection workflows",
        "Assessment, rubric, and gradebook modules",
        "SIS and identity provider integrations",
        "Content libraries with role-based publishing",
        "Analytics for completion, attendance, and engagement",
        "Accessible UI/UX systems for complex academic workflows",
      ],
      [
        "بوابات تعلم وحرم جامعي مخصصة",
        "أغلفة منتجات تعلم إلكتروني وواجهات تقديم المقررات",
        "تطبيقات جوال للطلاب وأولياء الأمور وأعضاء الهيئة",
        "مسارات تسجيل وقبول وتحصيل رسوم",
        "وحدات تقييم ومعايير ودفتر درجات",
        "تكاملات أنظمة معلومات الطلاب ومزوّدي الهوية",
        "مكتبات محتوى مع نشر حسب الدور",
        "تحليلات للإكمال والحضور والتفاعل",
        "أنظمة واجهات قابلة للوصول لتدفقات أكاديمية معقدة",
      ],
    ),
    features: LL(
      [
        "Program and course catalogs with eligibility rules",
        "Assignment submission with plagiarism-aware file handling hooks",
        "Live and recorded session scheduling for blended learning",
        "Progress dashboards for learners and advisors",
        "Announcement and messaging channels by cohort or class",
        "Certificate and transcript generation workflows",
        "Parent or guardian linked views where institutions require them",
        "Offline-friendly reading packs for low-connectivity students",
        "Localization-ready layouts for Arabic and English campuses",
      ],
      [
        "كتالوجات برامج ومقررات بقواعد أهلية",
        "تسليم واجبات مع خطافات معالجة ملفات واعية بالانتحال",
        "جدولة جلسات مباشرة ومسجلة للتعلم المدمج",
        "لوحات تقدّم للمتعلمين والمرشدين",
        "قنوات إعلانات ومراسلة حسب الفوج أو الصف",
        "مسارات إصدار شهادات وكشوف درجات",
        "عروض مرتبطة لأولياء الأمور حيث تطلبها المؤسسات",
        "حزم قراءة ملائمة دون اتصال للطلاب ضعاف الاتصال",
        "تخطيطات جاهزة للتعريب لحرم ثنائي اللغة عربي-إنجليزي",
      ],
    ),
    aiIntro: L(
      "AI in education should personalize support and lighten faculty admin work while keeping assessment integrity and human grading authority intact.",
      "ينبغي أن يخصّص الذكاء الاصطناعي في التعليم الدعم ويخفّف الأعمال الإدارية لأعضاء الهيئة مع الإبقاء على نزاهة التقييم وسلطة التصحيح البشرية.",
    ),
    aiUseCases: LL(
      [
        "Study assistants that answer from approved course materials only",
        "Draft feedback suggestions for instructors to review and edit",
        "Early-warning signals for at-risk enrollment or attendance patterns",
        "Auto-tagging and search across large learning content libraries",
        "Scheduling helpers for tutoring and office-hour capacity",
        "Summaries of discussion forums for faculty moderation",
      ],
      [
        "مساعدو دراسة يجيبون من مواد المقرر المعتمدة فقط",
        "اقتراحات مسودات ملاحظات للمدرّسين للمراجعة والتعديل",
        "إشارات إنذار مبكر لأنماط تسجيل أو حضور معرضة للخطر",
        "وسم وبحث آلي عبر مكتبات محتوى تعلم كبيرة",
        "مساعدو جدولة لطاقة الدروس الخصوصية وساعات المكتب",
        "ملخصات منتديات نقاش لإشراف أعضاء الهيئة",
      ],
    ),
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Flutter",
      "AWS",
      "Docker",
    ],
    whyRepla: LL(
      [
        "We prioritize clarity for learners and staff over feature bloat",
        "UI/UX for complex academic roles is part of the delivery, not a polish pass",
        "Portals and mobile apps stay aligned to the same enrollment and grade rules",
        "Integrations with SIS and identity providers are planned early",
        "Bilingual product surfaces fit regional education environments",
        "Phased launches let institutions pilot cohorts before full rollout",
      ],
      [
        "نُفضّل الوضوح للمتعلمين والموظفين على تضخّم الميزات",
        "تصميم الواجهات لأدوار أكاديمية معقدة جزء من التسليم لا تمريرة تلميع",
        "البوابات وتطبيقات الجوال تبقى متوافقة مع نفس قواعد التسجيل والدرجات",
        "تكاملات أنظمة الطلاب والهوية تُخطَّط مبكراً",
        "واجهات منتج ثنائية اللغة تناسب بيئات التعليم الإقليمية",
        "الإطلاقات المرحلية تتيح للمؤسسات تجربة أفواج قبل النشر الكامل",
      ],
    ),
    faqs: [
      {
        q: L(
          "Do you build a full LMS from scratch?",
          "هل تبنون نظام إدارة تعلم كاملاً من الصفر؟",
        ),
        a: L(
          "We can, when that is the right fit — or we extend and integrate around an existing LMS so you keep content investment while improving portals and workflows.",
          "يمكننا ذلك عندما يكون الأنسب — أو نوسّع ونتكامل حول نظام تعلم قائم لتحافظوا على استثمار المحتوى مع تحسين البوابات والمسارات.",
        ),
      },
      {
        q: L(
          "Can parents and students use separate views?",
          "هل يمكن لأولياء الأمور والطلاب استخدام عروض منفصلة؟",
        ),
        a: L(
          "Yes. We design role-based experiences so guardians, learners, and faculty each see what your policies allow.",
          "نعم. نصمّم تجارب حسب الدور بحيث يرى أولياء الأمور والمتعلمون وأعضاء الهيئة ما تسمح به سياساتكم.",
        ),
      },
      {
        q: L(
          "How do you handle exams and academic integrity?",
          "كيف تتعاملون مع الاختبارات والنزاهة الأكاديمية؟",
        ),
        a: L(
          "We implement assessment workflows, access controls, and audit logs you define — and avoid claiming proctoring guarantees we cannot substantiate.",
          "ننفّذ مسارات تقييم وضوابط وصول وسجلات تدقيق تحددونها — ونتجنّب ادعاء ضمانات مراقبة لا نستطيع إثباتها.",
        ),
      },
      {
        q: L(
          "Will the platform work on low-end phones?",
          "هل ستعمل المنصة على هواتف متواضعة؟",
        ),
        a: L(
          "Performance and mobile-first UX are design constraints for education audiences — we optimize critical learner journeys for constrained devices and networks.",
          "الأداء وتجربة الجوال أولاً قيود تصميم لجمهور التعليم — نحسّن رحلات المتعلم الحرجة للأجهزة والشبكات المحدودة.",
        ),
      },
      {
        q: L(
          "Can you integrate fee payments?",
          "هل يمكنكم تكامل دفع الرسوم؟",
        ),
        a: L(
          "Yes — gateway integrations for tuition and fees, with clear status back into enrollment and finance views.",
          "نعم — تكاملات بوابات لرسوم الدراسة والرسوم، مع حالة واضحة تعود إلى عروض التسجيل والمالية.",
        ),
      },
      {
        q: L(
          "Do you support Arabic-first interfaces?",
          "هل تدعمون واجهات عربية أولاً؟",
        ),
        a: L(
          "Yes. Layouts, typography, and RTL behavior are part of the product system when your campus operates in Arabic or bilingually.",
          "نعم. التخطيطات والطباعة وسلوك الاتجاه من اليمين لليسار جزء من نظام المنتج عندما يعمل حرمكم بالعربية أو ثنائياً.",
        ),
      },
    ],
    ctaTitle: L(
      "Ready to Modernize Your Learning Experience?",
      "هل أنتم مستعدون لتحديث تجربة التعلم لديكم؟",
    ),
    ctaBody: L(
      "Describe your learners and staff workflows — we will propose a practical platform path.",
      "صفوا مسارات المتعلمين والموظفين — وسنقترح مساراً عملياً للمنصة.",
    ),
    relatedServices: [
      "web-development",
      "custom-software-development",
      "ui-ux-design",
      "mobile-app-development",
    ],
  },
  {
    slug: "real-estate",
    icon: "Building2",
    title: L("Real Estate", "العقارات"),
    shortTitle: L("Real Estate", "العقارات"),
    heroTitle: L(
      "Real Estate Software & Digital Platforms",
      "برمجيات ومنصات رقمية للعقارات",
    ),
    tagline: L(
      "Listings, operations, and customer portals for property businesses.",
      "عروض وعمليات وبوابات عملاء لأعمال العقارات.",
    ),
    description: L(
      "Web and software products for real estate operations — corporate sites, portals, and internal applications that keep inventory, clients, and staff in one picture.",
      "منتجات ويب وبرمجيات لعمليات العقارات — مواقع مؤسسية وبوابات وتطبيقات داخلية تبقي المخزون والعملاء والموظفين في صورة واحدة.",
    ),
    metaTitle: L(
      "Real Estate Software Development | REPLA",
      "تطوير برمجيات العقارات | REPLA",
    ),
    metaDescription: L(
      "Build listing portals, property ops software, and client apps with REPLA. Web, custom systems, and mobile for brokerages, developers, and property managers.",
      "ابنِ بوابات عروض وبرمجيات تشغيل عقاري وتطبيقات عملاء مع REPLA. ويب وأنظمة مخصصة وجوال للوساطة والمطوّرين ومديري العقارات.",
    ),
    overview: L(
      "Real estate businesses lose deals when inventory, leads, and field teams live in separate tools. Buyers and tenants expect searchable listings and responsive follow-up. REPLA builds portals and internal systems that connect marketing sites to operations so units, clients, and agents share one source of truth.",
      "تخسر أعمال العقارات الصفقات عندما يعيش المخزون والعملاء المحتملون والفرق الميدانية في أدوات منفصلة. يتوقع المشترون والمستأجرون عروضاً قابلة للبحث ومتابعة سريعة. تبني REPLA بوابات وأنظمة داخلية تربط مواقع التسويق بالعمليات حتى تتشارك الوحدات والعملاء والوكلاء مصدراً واحداً للحقيقة.",
    ),
    challenges: LL(
      [
        "Listings and lead data trapped in spreadsheets or WhatsApp threads",
        "Public websites that cannot sync availability or pricing rules",
        "Agents in the field without a reliable mobile inventory path",
        "Duplicate unit records across brokerage and developer systems",
        "Slow handoff from inquiry to viewing to contract draft",
        "Owner and investor portals missing payment or statement history",
        "Marketing campaigns that cannot attribute leads to listings",
        "Document packs for KYC and contracts scattered across drives",
      ],
      [
        "بيانات عروض وعملاء محتملين محبوسة في جداول أو محادثات واتساب",
        "مواقع عامة لا تستطيع مزامنة التوفر أو قواعد التسعير",
        "وكلاء في الميدان دون مسار مخزون جوّال موثوق",
        "سجلات وحدات مكررة عبر أنظمة الوساطة والمطوّر",
        "تسليم بطيء من الاستفسار إلى المعاينة إلى مسودة العقد",
        "بوابات ملّاك ومستثمرين تفتقد سجل الدفع أو الكشوف",
        "حملات تسويق لا تنسب العملاء المحتملين إلى العروض",
        "حزم مستندات التحقق والعقود مبعثرة عبر محركات أقراص",
      ],
    ),
    solutions: LL(
      [
        "Property listing and search portals",
        "Brokerage and developer corporate websites",
        "Internal CRM-style deal and inventory applications",
        "Agent and field mobile apps for listings and visits",
        "Owner, tenant, and investor self-service portals",
        "Lead capture and attribution across campaigns",
        "Document vaults for contracts and property packs",
        "Map-based inventory and project visualizations",
        "Integrations with payment and messaging providers",
      ],
      [
        "بوابات عروض وبحث عقاري",
        "مواقع مؤسسية للوساطة والمطوّرين",
        "تطبيقات داخلية بأسلوب CRM للصفقات والمخزون",
        "تطبيقات جوال للوكلاء والميدان للعروض والزيارات",
        "بوابات خدمة ذاتية للملّاك والمستأجرين والمستثمرين",
        "التقاط عملاء محتملين ونسبهم عبر الحملات",
        "خزائن مستندات للعقود وحزم العقارات",
        "تصورات مخزون ومشاريع قائمة على الخرائط",
        "تكاملات مع مزوّدي الدفع والمراسلة",
      ],
    ),
    features: LL(
      [
        "Structured listing attributes with media galleries",
        "Saved searches and alerts for buyer preferences",
        "Visit scheduling and agent calendar coordination",
        "Pipeline stages from lead to reservation to closing",
        "Commission and split tracking for brokerage teams",
        "Project and phase inventory for developers",
        "Tenant request ticketing for property managers",
        "Multi-language listing content for regional markets",
        "Role permissions separating agency, developer, and admin staff",
      ],
      [
        "سمات عرض منظمة مع معارض وسائط",
        "عمليات بحث محفوظة وتنبيهات لتفضيلات المشتري",
        "جدولة زيارات وتنسيق تقويم الوكلاء",
        "مراحل خط أنابيب من العميل المحتمل إلى الحجز إلى الإغلاق",
        "تتبع عمولات وتقسيمات لفرق الوساطة",
        "مخزون مشاريع ومراحل للمطوّرين",
        "تذاكر طلبات مستأجرين لمديري العقارات",
        "محتوى عروض متعدد اللغات للأسواق الإقليمية",
        "صلاحيات أدوار تفصل موظفي الوكالة والمطوّر والإدارة",
      ],
    ),
    aiIntro: L(
      "AI helps real estate teams match buyers faster and reduce listing admin — while agents and managers stay accountable for pricing and advice.",
      "يساعد الذكاء الاصطناعي فرق العقارات على مطابقة المشترين أسرع وتقليل أعمال إدارة العروض — بينما يبقى الوكلاء والمديرون مسؤولين عن التسعير والنصح.",
    ),
    aiUseCases: LL(
      [
        "Recommend listings from buyer preference and behavior signals",
        "Draft listing descriptions from structured unit attributes",
        "Prioritize hot leads based on engagement and response patterns",
        "Extract key fields from uploaded contracts for staff review",
        "Cluster similar units to spot pricing or amenity gaps",
        "Chat assistants for project FAQs on public portals",
      ],
      [
        "اقتراح عروض من تفضيلات المشتري وإشارات السلوك",
        "مسودات أوصاف عروض من سمات الوحدة المنظمة",
        "ترتيب أولوية العملاء الساخنين حسب التفاعل وأنماط الرد",
        "استخراج حقول أساسية من عقود مرفوعة لمراجعة الموظفين",
        "تجميع وحدات متشابهة لرصد فجوات تسعير أو مرافق",
        "مساعدو دردشة لأسئلة المشاريع على البوابات العامة",
      ],
    ),
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Flutter",
      "AWS",
      "Docker",
    ],
    whyRepla: LL(
      [
        "We connect marketing sites to real inventory — not brochure-only websites",
        "Field mobile tools are designed for agents who work between appointments",
        "Deal pipelines reflect how brokerages and developers actually close",
        "Owner and tenant portals reduce repetitive status calls",
        "Map and media-heavy UX stays performant on public listing pages",
        "Bilingual listing and portal experiences for regional property markets",
      ],
      [
        "نربط مواقع التسويق بمخزون حقيقي — لا مواقع كتيّبات فقط",
        "أدوات الجوال الميدانية تُصمَّم لوكلاء يعملون بين المواعيد",
        "خطوط الصفقات تعكس كيف تغلق الوساطة والمطوّرون فعلاً",
        "بوابات الملّاك والمستأجرين تقلّل مكالمات الحالة المتكررة",
        "تجربة الخرائط والوسائط الكثيفة تبقى سريعة على صفحات العروض العامة",
        "تجارب عروض وبوابات ثنائية اللغة لأسواق العقارات الإقليمية",
      ],
    ),
    faqs: [
      {
        q: L(
          "Can you rebuild our listings website and back office together?",
          "هل يمكنكم إعادة بناء موقع العروض والمكتب الخلفي معاً؟",
        ),
        a: L(
          "Yes. We typically treat the public portal and internal inventory/CRM as one product so availability and leads stay synchronized.",
          "نعم. عادة نتعامل مع البوابة العامة ومخزون/CRM الداخلي كمنتج واحد حتى يبقى التوفر والعملاء المحتملون متزامنين.",
        ),
      },
      {
        q: L(
          "Do you support multi-project developer inventories?",
          "هل تدعمون مخزون مطوّر متعدد المشاريع؟",
        ),
        a: L(
          "Yes — projects, phases, unit types, and status workflows tailored to how your sales team releases inventory.",
          "نعم — مشاريع ومراحل وأنواع وحدات ومسارات حالة مخصّصة لطريقة إطلاق فريق المبيعات للمخزون.",
        ),
      },
      {
        q: L(
          "Can agents update listings from mobile?",
          "هل يمكن للوكلاء تحديث العروض من الجوال؟",
        ),
        a: L(
          "That is a common scope item: media upload, status changes, and visit notes from the field with permission controls.",
          "هذا بند نطاق شائع: رفع وسائط وتغيير حالة وملاحظات زيارة من الميدان مع ضوابط صلاحيات.",
        ),
      },
      {
        q: L(
          "Will this replace our existing CRM?",
          "هل سيحل هذا محل نظام CRM القائم؟",
        ),
        a: L(
          "Sometimes we replace a light CRM; sometimes we integrate. We choose based on how much of your deal process must live in one system.",
          "أحياناً نستبدل CRM خفيفاً؛ وأحياناً نتكامل. نختار حسب مقدار عملية الصفقة الذي يجب أن يعيش في نظام واحد.",
        ),
      },
      {
        q: L(
          "Can tenants submit maintenance requests?",
          "هل يمكن للمستأجرين تقديم طلبات صيانة؟",
        ),
        a: L(
          "Yes — property-management portals with ticketing, media, and status updates for owners and ops teams.",
          "نعم — بوابات إدارة عقارات مع تذاكر ووسائط وتحديثات حالة للملّاك وفرق التشغيل.",
        ),
      },
      {
        q: L(
          "How do map-based searches work?",
          "كيف تعمل عمليات البحث القائمة على الخرائط؟",
        ),
        a: L(
          "We implement geo search and filters on top of structured listing data, tuned for your markets and performance needs.",
          "ننفّذ بحثاً جغرافياً وفلاتر فوق بيانات العروض المنظمة، مضبوطاً لأسواقكم واحتياجات الأداء.",
        ),
      },
    ],
    ctaTitle: L(
      "Ready to Unify Your Property Operations?",
      "هل أنتم مستعدون لتوحيد عملياتكم العقارية؟",
    ),
    ctaBody: L(
      "Show us how listings and leads move today — we will design a clearer digital stack.",
      "أرونا كيف تتحرك العروض والعملاء المحتملون اليوم — وسنصمّم بنية رقمية أوضح.",
    ),
    relatedServices: [
      "web-development",
      "custom-software-development",
      "mobile-app-development",
    ],
  },
  {
    slug: "retail-ecommerce",
    icon: "ShoppingBag",
    title: L("Retail & E-commerce", "التجزئة والتجارة الإلكترونية"),
    shortTitle: L("Retail", "التجزئة"),
    heroTitle: L(
      "Retail & E-commerce Software Solutions",
      "حلول برمجيات التجزئة والتجارة الإلكترونية",
    ),
    tagline: L(
      "Storefronts, marketplaces, and the systems behind the cart.",
      "واجهات متاجر وأسواق والأنظمة خلف السلة.",
    ),
    description: L(
      "E-commerce development, marketplace platforms, and retail operations software — from storefront to inventory and payments.",
      "تطوير التجارة الإلكترونية ومنصات الأسواق وبرمجيات عمليات التجزئة — من واجهة المتجر إلى المخزون والمدفوعات.",
    ),
    metaTitle: L(
      "Retail & E-commerce Development | REPLA",
      "تطوير التجزئة والتجارة الإلكترونية | REPLA",
    ),
    metaDescription: L(
      "Build storefronts, marketplaces, and retail ops software with REPLA. Web, custom systems, APIs, and mobile from catalog to checkout and fulfilment.",
      "ابنِ واجهات متاجر وأسواق وبرمجيات تشغيل تجزئة مع REPLA. ويب وأنظمة مخصصة وواجهات وجوال من الكتالوج إلى الدفع والتلبية.",
    ),
    overview: L(
      "Retail winners connect catalog, inventory, payments, and fulfilment into one operable system — not a theme bolted onto a spreadsheet. Whether you run a single brand storefront or a multi-vendor marketplace, REPLA builds commerce software that stays coherent from browse to delivery.",
      "يربط ناجحو التجزئة الكتالوج والمخزون والمدفوعات والتلبية في نظام واحد قابل للتشغيل — لا قالباً مثبتاً على جدول. سواء شغّلتم واجهة علامة واحدة أو سوقاً متعدد البائعين، تبني REPLA برمجيات تجارة تبقى متماسكة من التصفح إلى التسليم.",
    ),
    challenges: LL(
      [
        "Storefronts disconnected from warehouse and store inventory",
        "Marketplaces that need seller tooling beyond a theme",
        "Checkout and payment failures without clear ops visibility",
        "Promotions and pricing rules that break across channels",
        "Fulfilment and returns handled in ad-hoc messaging",
        "Catalog enrichment that cannot keep up with SKU growth",
        "Mobile apps that diverge from web cart and loyalty rules",
        "Partner APIs for shipping and payments that fail under peak load",
      ],
      [
        "واجهات متاجر منفصلة عن مخزون المستودع والمتجر",
        "أسواق تحتاج أدوات بائعين تتجاوز القالب",
        "إخفاقات دفع وخروج دون رؤية تشغيل واضحة",
        "عروض ترويجية وقواعد تسعير تنكسر عبر القنوات",
        "تلبية ومرتجعات تُعالج في مراسلة ارتجالية",
        "إثراء كتالوج لا يلحق بنمو وحدات التخزين",
        "تطبيقات جوال تنحرف عن قواعد سلة الويب والولاء",
        "واجهات شركاء للشحن والدفع تفشل تحت ذروة الحمل",
      ],
    ),
    solutions: LL(
      [
        "Custom e-commerce storefronts and headless commerce APIs",
        "Multi-vendor marketplace platforms",
        "Inventory and order management applications",
        "Payment gateway and wallet integrations",
        "Seller and merchant onboarding portals",
        "Retail mobile apps for shoppers and store associates",
        "Promotion, coupon, and loyalty engines",
        "Shipping, courier, and tracking integrations",
        "Ops dashboards for orders, stockouts, and returns",
      ],
      [
        "واجهات تجارة إلكترونية مخصصة وواجهات تجارة بلا رأس",
        "منصات أسواق متعددة البائعين",
        "تطبيقات إدارة مخزون وطلبات",
        "تكاملات بوابات دفع ومحافظ",
        "بوابات انضمام بائعين وتجار",
        "تطبيقات جوال للتجزئة للمتسوقين وموظفي المتجر",
        "محركات عروض وكوبونات وولاء",
        "تكاملات شحن وناقلين وتتبع",
        "لوحات تشغيل للطلبات ونفاد المخزون والمرتجعات",
      ],
    ),
    features: LL(
      [
        "Faceted search and merchandising rules for catalogs",
        "Cart and checkout with address and payment orchestration",
        "Split shipments and multi-warehouse allocation",
        "Seller dashboards for listings, orders, and payouts",
        "Return merchandise authorization workflows",
        "Gift cards, wallets, and store credit ledgers",
        "Store pickup and click-and-collect slotting",
        "Peak-ready caching and queue patterns for flash sales",
        "Customer account history across web and mobile",
      ],
      [
        "بحث مُجزّأ وقواعد تسويق كتالوج",
        "سلة وخروج مع تنسيق عناوين ومدفوعات",
        "شحنات مقسّمة وتخصيص مستودعات متعددة",
        "لوحات بائعين للعروض والطلبات والمدفوعات",
        "مسارات تفويض مرتجعات البضائع",
        "دفاتر بطاقات هدايا ومحافظ ورصيد متجر",
        "استلام من المتجر وجدولة انقر واستلم",
        "أنماط تخزين مؤقت وطوابير جاهزة للذروة لمبيعات البرق",
        "سجل حساب عميل عبر الويب والجوال",
      ],
    ),
    aiIntro: L(
      "Commerce AI should lift conversion and reduce catalog toil — recommendations, search, and ops alerts — without inventing inventory that does not exist.",
      "ينبغي أن يرفع ذكاء التجارة التحويل ويقلّل عبء الكتالوج — توصيات وبحث وتنبيهات تشغيل — دون اختراع مخزون غير موجود.",
    ),
    aiUseCases: LL(
      [
        "Personalized product recommendations from browse and purchase signals",
        "Smart search ranking and query understanding for catalogs",
        "Auto-suggest product attributes from images and titles for merchant review",
        "Demand signals to flag likely stockouts before campaigns",
        "Support chat that answers order and return FAQs from live status",
        "Fraud risk hints on high-risk checkout patterns for review queues",
      ],
      [
        "توصيات منتجات مخصّصة من إشارات التصفح والشراء",
        "ترتيب بحث ذكي وفهم استعلامات للكتالوجات",
        "اقتراح سمات منتج آلياً من الصور والعناوين لمراجعة التاجر",
        "إشارات طلب للإشارة إلى نفاد مخزون محتمل قبل الحملات",
        "دردشة دعم تجيب عن أسئلة الطلبات والمرتجعات من الحالة الحية",
        "تلميحات مخاطر احتيال لأنماط خروج عالية المخاطر لطوابير المراجعة",
      ],
    ),
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Flutter",
      "AWS",
      "Docker",
    ],
    whyRepla: LL(
      [
        "We build commerce systems where inventory and checkout share one truth",
        "Marketplace seller tooling is designed as a first-class product surface",
        "Peak-load thinking is part of architecture, not a post-incident scramble",
        "Payment and shipping integrations are owned end-to-end with clear ops views",
        "Mobile and web shopper journeys stay consistent on cart and loyalty rules",
        "Merchandising and ops teams get tools they can actually run daily",
      ],
      [
        "نبني أنظمة تجارة يتشارك فيها المخزون والخروج حقيقة واحدة",
        "أدوات بائعي السوق تُصمَّم كواجهة منتج من الدرجة الأولى",
        "التفكير في ذروة الحمل جزء من الهندسة لا تدافع بعد الحادث",
        "تكاملات الدفع والشحن تُملك من الطرف إلى الطرف مع عروض تشغيل واضحة",
        "رحلات المتسوق على الجوال والويب تبقى متسقة في السلة والولاء",
        "فرق التسويق والتشغيل تحصل على أدوات يمكنها تشغيلها يومياً فعلاً",
      ],
    ),
    faqs: [
      {
        q: L(
          "Do you only customize Shopify or Magento themes?",
          "هل تخصّصون قوالب Shopify أو Magento فقط؟",
        ),
        a: L(
          "No. We build custom storefronts and platforms when your catalog, marketplace, or ops model outgrows a theme — and we can also integrate with existing commerce engines when that is the better fit.",
          "لا. نبني واجهات ومنصات مخصصة عندما يتجاوز كتالوجكم أو سوقكم أو نموذج التشغيل القالب — ويمكننا أيضاً التكامل مع محركات تجارة قائمة عندما يكون ذلك الأنسب.",
        ),
      },
      {
        q: L(
          "Can you build a multi-vendor marketplace?",
          "هل يمكنكم بناء سوق متعدد البائعين؟",
        ),
        a: L(
          "Yes — seller onboarding, listing controls, order routing, commissions, and payouts scoped to your marketplace rules.",
          "نعم — انضمام بائعين وضوابط عروض وتوجيه طلبات وعمولات ومدفوعات وفق قواعد سوقكم.",
        ),
      },
      {
        q: L(
          "How do you sync online and store inventory?",
          "كيف تزامنون مخزون الإنترنت والمتجر؟",
        ),
        a: L(
          "Through inventory services and integrations that allocate stock across channels, with ops tools for overrides and stockouts.",
          "عبر خدمات مخزون وتكاملات تخصّص المخزون عبر القنوات، مع أدوات تشغيل للتجاوزات ونفاد المخزون.",
        ),
      },
      {
        q: L(
          "Will checkout support local payment methods?",
          "هل سيدعم الدفع طرق الدفع المحلية؟",
        ),
        a: L(
          "Yes. We integrate the gateways and methods your market requires and keep payment status visible to customer care and finance.",
          "نعم. نتكامل مع البوابات والطرق التي يتطلبها سوقكم ونبقي حالة الدفع مرئية لرعاية العملاء والمالية.",
        ),
      },
      {
        q: L(
          "Can store associates use a mobile ops app?",
          "هل يمكن لموظفي المتجر استخدام تطبيق تشغيل جوّال؟",
        ),
        a: L(
          "Commonly yes — picking, stock checks, and click-and-collect workflows for associates, separate from the shopper app.",
          "غالباً نعم — مسارات تجهيز وفحص مخزون وانقر واستلم للموظفين، منفصلة عن تطبيق المتسوق.",
        ),
      },
      {
        q: L(
          "How do you prepare for flash sales?",
          "كيف تستعدون لمبيعات البرق؟",
        ),
        a: L(
          "With caching, queueing, inventory reservation patterns, and load-aware architecture agreed before campaign day — not wishful thinking.",
          "بتخزين مؤقت وطوابير وأنماط حجز مخزون وهندسة واعية بالحمل تُتفق قبل يوم الحملة — لا تفكير بالتمنّي.",
        ),
      },
    ],
    ctaTitle: L(
      "Ready to Scale Your Retail Commerce Stack?",
      "هل أنتم مستعدون لتوسيع بنية تجارة التجزئة لديكم؟",
    ),
    ctaBody: L(
      "Tell us about catalog, channels, and fulfilment — we will propose a commerce build plan.",
      "أخبرونا عن الكتالوج والقنوات والتلبية — وسنقترح خطة بناء للتجارة.",
    ),
    relatedServices: [
      "web-development",
      "custom-software-development",
      "api-development",
      "mobile-app-development",
    ],
  },
  {
    slug: "manufacturing",
    icon: "Factory",
    title: L("Manufacturing", "التصنيع"),
    shortTitle: L("Manufacturing", "التصنيع"),
    heroTitle: L(
      "Manufacturing Software & Industrial Digital Solutions",
      "برمجيات التصنيع وحلول رقمية صناعية",
    ),
    tagline: L(
      "Industrial software, IoT, and internal systems on the plant floor.",
      "برمجيات صناعية وإنترنت أشياء وأنظمة داخلية في أرض المصنع.",
    ),
    description: L(
      "Software and IoT for manufacturing operations — internal applications, industrial IoT, and integrations that connect the floor to the office.",
      "برمجيات وإنترنت أشياء لعمليات التصنيع — تطبيقات داخلية وإنترنت أشياء صناعي وتكاملات تربط الأرض بالمكتب.",
    ),
    metaTitle: L(
      "Manufacturing Software & IoT | REPLA",
      "برمجيات التصنيع وإنترنت الأشياء | REPLA",
    ),
    metaDescription: L(
      "Connect plant-floor systems, IoT, and ops software with REPLA. Custom applications, industrial integrations, and data pipelines for manufacturing teams.",
      "اربط أنظمة أرض المصنع وإنترنت الأشياء وبرمجيات التشغيل مع REPLA. تطبيقات مخصصة وتكاملات صناعية ومسارات بيانات لفرق التصنيع.",
    ),
    overview: L(
      "Manufacturing digitalization means getting machine, quality, and production data into systems people can act on — not another dashboard nobody trusts. Plants need IoT paths, internal apps, and integrations that respect shift work and legacy equipment. REPLA builds software that bridges the floor and the office.",
      "تعني رقمنة التصنيع إدخال بيانات الآلات والجودة والإنتاج إلى أنظمة يمكن للناس التصرف بناءً عليها — لا لوحة أخرى لا يثق بها أحد. تحتاج المصانع إلى مسارات إنترنت أشياء وتطبيقات داخلية وتكاملات تحترم عمل الورديات والمعدات القديمة. تبني REPLA برمجيات تصل الأرض بالمكتب.",
    ),
    challenges: LL(
      [
        "Machines and sensors that never reach the business system",
        "Paper or spreadsheet production and downtime tracking",
        "Quality events recorded too late to prevent scrap",
        "Legacy MES or ERP modules that cannot take new lines",
        "Spare-parts and maintenance schedules managed by tribal knowledge",
        "Shift handovers that lose context between supervisors",
        "Supplier and WIP visibility limited to phone calls",
        "Data trapped in PLCs and historians without usable APIs",
      ],
      [
        "آلات ومستشعرات لا تصل أبداً إلى نظام الأعمال",
        "تتبع إنتاج وتوقف ورقي أو بجداول",
        "أحداث جودة تُسجَّل متأخرة جداً لمنع الهدر",
        "وحدات MES أو ERP قديمة لا تحتمل خطوطاً جديدة",
        "جداول قطع غيار وصيانة تُدار بمعرفة شفهية",
        "تسليم ورديات يفقد السياق بين المشرفين",
        "رؤية المورّدين والعمل قيد التنفيذ محدودة بمكالمات هاتفية",
        "بيانات محبوسة في وحدات تحكم ومؤرخات دون واجهات قابلة للاستخدام",
      ],
    ),
    solutions: LL(
      [
        "Industrial IoT data collection and edge gateways",
        "Internal production and quality applications",
        "Maintenance and work-order systems",
        "OEE and downtime analytics pipelines",
        "Integrations with ERP, MES, and warehouse systems",
        "Operator tablets and shop-floor mobile tools",
        "Traceability and genealogy for batches or serials",
        "Supplier portal workflows for schedules and ASNs",
        "IT consulting for plant digital roadmaps",
      ],
      [
        "جمع بيانات إنترنت الأشياء الصناعي وبوابات حافة",
        "تطبيقات إنتاج وجودة داخلية",
        "أنظمة صيانة وأوامر عمل",
        "مسارات تحليلات OEE والتوقف",
        "تكاملات مع ERP وMES وأنظمة المستودعات",
        "أجهزة لوحية للمشغّلين وأدوات جوال لأرض المصنع",
        "تتبع وأصل دفعات أو أرقام تسلسلية",
        "مسارات بوابة مورّدين للجداول وإشعارات الشحن",
        "استشارات تقنية لخرائط رقمنة المصنع",
      ],
    ),
    features: LL(
      [
        "Line and cell status boards tied to live machine signals",
        "Digital work instructions with version control",
        "Quality checklists and non-conformance logging",
        "Preventive maintenance calendars and meter-based triggers",
        "Scrap and rework reason coding with trend views",
        "Material consumption against bill-of-materials steps",
        "Role-based access for operators, quality, and supervisors",
        "Alarm acknowledgment with escalation paths",
        "Exportable production reports for each shift and SKU",
      ],
      [
        "لوحات حالة خطوط وخلايا مربوطة بإشارات آلات حية",
        "تعليمات عمل رقمية مع تحكم بالإصدارات",
        "قوائم فحص جودة وتسجيل عدم المطابقة",
        "تقويمات صيانة وقائية ومحفّزات حسب العدادات",
        "ترميز أسباب الهدر وإعادة العمل مع عروض اتجاهات",
        "استهلاك مواد مقابل خطوات قائمة المواد",
        "صلاحيات حسب الدور للمشغّلين والجودة والمشرفين",
        "إقرار إنذارات مع مسارات تصعيد",
        "تقارير إنتاج قابلة للتصدير لكل وردية ووحدة تخزين",
      ],
    ),
    aiIntro: L(
      "On the plant floor, AI is most useful for predicting downtime, spotting quality drift, and prioritizing maintenance — always with human confirmation on critical actions.",
      "في أرض المصنع يكون الذكاء الاصطناعي أكثر فائدة لتوقع التوقف ورصد انحراف الجودة وترتيب أولوية الصيانة — دائماً مع تأكيد بشري على الإجراءات الحرجة.",
    ),
    aiUseCases: LL(
      [
        "Predictive maintenance hints from vibration and cycle patterns",
        "Anomaly detection on process parameters before scrap spikes",
        "Prioritize work orders by risk and production impact",
        "Vision-assisted defect classification for inspector review",
        "Demand and changeover planning assistants for schedulers",
        "Summarize shift logs into supervisor handover briefs",
      ],
      [
        "تلميحات صيانة تنبؤية من أنماط اهتزاز ودورات",
        "اكتشاف شذوذ في معلمات العملية قبل ذروات الهدر",
        "ترتيب أولوية أوامر العمل حسب المخاطر وأثر الإنتاج",
        "تصنيف عيوب بمساعدة الرؤية لمراجعة المفتش",
        "مساعدو تخطيط طلب وتغيير إعداد للمجدولين",
        "تلخيص سجلات الورديات في موجزات تسليم للمشرفين",
      ],
    ),
    technologies: [
      "Python",
      "FastAPI",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "AWS",
      "React",
    ],
    whyRepla: LL(
      [
        "We design for shift operators and supervisors, not only office dashboards",
        "IoT and software delivery stay connected so signals become actions",
        "Legacy equipment is integrated pragmatically instead of ignored",
        "Quality and maintenance workflows get the same rigor as production boards",
        "Data pipelines produce metrics plants can defend in reviews",
        "Roadmaps respect change-management realities on the factory floor",
      ],
      [
        "نصمّم لمشغّلي ومشرفي الورديات لا للوحات المكتب فقط",
        "تسليم إنترنت الأشياء والبرمجيات يبقى متصلاً حتى تصبح الإشارات إجراءات",
        "المعدات القديمة تُدمَج بواقعية بدلاً من تجاهلها",
        "مسارات الجودة والصيانة تحظى بنفس صرامة لوحات الإنتاج",
        "مسارات البيانات تنتج مؤشرات يمكن للمصانع الدفاع عنها في المراجعات",
        "الخرائط تحترم واقع إدارة التغيير في أرض المصنع",
      ],
    ),
    faqs: [
      {
        q: L(
          "Can you connect to our PLCs and historians?",
          "هل يمكنكم الاتصال بوحدات التحكم والمؤرخات لدينا؟",
        ),
        a: L(
          "Yes, within the protocols and access your OT team allows — we build gateways and pipelines that respect plant network boundaries.",
          "نعم، ضمن البروتوكولات والوصول الذي تسمح به فرق التشغيل لديكم — نبني بوابات ومسارات تحترم حدود شبكة المصنع.",
        ),
      },
      {
        q: L(
          "Do you replace our ERP or MES?",
          "هل تستبدلون نظام ERP أو MES لدينا؟",
        ),
        a: L(
          "Often we extend and integrate. Full replacement is only when that is the agreed program — we start from your current systems of record.",
          "غالباً نوسّع ونتكامل. الاستبدال الكامل فقط عندما يكون ذلك البرنامج المتفق عليه — نبدأ من أنظمة السجل الحالية لديكم.",
        ),
      },
      {
        q: L(
          "Will operators need heavy training?",
          "هل سيحتاج المشغّلون تدريباً ثقيلاً؟",
        ),
        a: L(
          "We design shop-floor UIs for speed and clarity under gloves-and-noise conditions, and we iterate with real operators during delivery.",
          "نصمّم واجهات أرض المصنع للسرعة والوضوح في ظروف القفازات والضوضاء، ونكرّر مع مشغّلين حقيقيين أثناء التسليم.",
        ),
      },
      {
        q: L(
          "How do you handle offline plant networks?",
          "كيف تتعاملون مع شبكات مصنع غير متصلة؟",
        ),
        a: L(
          "Edge buffering and sync patterns keep collection running when connectivity is intermittent, then reconcile upstream when links return.",
          "أنماط تخزين حافة ومزامنة تبقي الجمع يعمل عند الاتصال المتقطع، ثم تُسوّى مع الأنظمة العليا عند عودة الروابط.",
        ),
      },
      {
        q: L(
          "Can quality and production share one system?",
          "هل يمكن للجودة والإنتاج مشاركة نظام واحد؟",
        ),
        a: L(
          "Yes — shared events and traceability with role-appropriate screens so quality holds are visible without drowning operators in forms.",
          "نعم — أحداث وتتبع مشتركان مع شاشات مناسبة للأدوار حتى تكون احتجازات الجودة مرئية دون إغراق المشغّلين بالنماذج.",
        ),
      },
      {
        q: L(
          "What does a first manufacturing engagement look like?",
          "كيف يبدو التعاون التصنيعي الأول؟",
        ),
        a: L(
          "Usually a pilot line or cell: instrument critical signals, ship one operator workflow, and prove the metric before plant-wide rollout.",
          "عادة خط أو خلية تجريبية: قياس إشارات حرجة وتسليم مسار مشغّل واحد وإثبات المؤشر قبل النشر على مستوى المصنع.",
        ),
      },
    ],
    ctaTitle: L(
      "Ready to Digitize Your Plant Operations?",
      "هل أنتم مستعدون لرقمنة عمليات مصنعكم؟",
    ),
    ctaBody: L(
      "Walk us through a line or cell — we will propose a grounded IoT and software pilot.",
      "أرونا خطاً أو خلية — وسنقترح تجريبة إنترنت أشياء وبرمجيات واقعية.",
    ),
    relatedServices: [
      "iot-embedded-systems",
      "custom-software-development",
      "data-engineering-analytics",
      "it-consulting",
    ],
  },
  {
    slug: "logistics",
    icon: "Truck",
    title: L("Logistics & Supply Chain", "اللوجستيات وسلسلة الإمداد"),
    shortTitle: L("Logistics", "اللوجستيات"),
    heroTitle: L(
      "Logistics & Supply Chain Software Solutions",
      "حلول برمجيات اللوجستيات وسلسلة الإمداد",
    ),
    tagline: L(
      "Tracking, mobile ops, and systems that move with the shipment.",
      "تتبع وعمليات جوالة وأنظمة تتحرك مع الشحنة.",
    ),
    description: L(
      "Logistics and supply-chain software: GPS and sensor integration, logistics mobile apps, and operational platforms for movement and visibility.",
      "برمجيات اللوجستيات وسلسلة الإمداد: تكامل GPS والمستشعرات وتطبيقات لوجستية جوالة ومنصات تشغيل للحركة والرؤية.",
    ),
    metaTitle: L(
      "Logistics & Supply Chain Software | REPLA",
      "برمجيات اللوجستيات وسلسلة الإمداد | REPLA",
    ),
    metaDescription: L(
      "Build tracking platforms, logistics apps, and supply-chain ops software with REPLA. IoT, mobile, custom systems, and analytics for movement and visibility.",
      "ابنِ منصات تتبع وتطبيقات لوجستية وبرمجيات تشغيل سلسلة إمداد مع REPLA. إنترنت أشياء وجوال وأنظمة مخصصة وتحليلات للحركة والرؤية.",
    ),
    overview: L(
      "Logistics customers ask for status you can only give if drivers, warehouses, and partners share one operational picture. Visibility, exceptions, and proof of delivery must work on the road. REPLA builds logistics platforms that combine tracking, mobile ops, and data so shipments stay actionable end to end.",
      "يطلب عملاء اللوجستيات حالة لا يمكنكم تقديمها إلا إذا تشارك السائقون والمستودعات والشركاء صورة تشغيل واحدة. يجب أن تعمل الرؤية والاستثناءات وإثبات التسليم على الطريق. تبني REPLA منصات لوجستية تجمع التتبع وعمليات الجوال والبيانات حتى تبقى الشحنات قابلة للتصرف من الطرف إلى الطرف.",
    ),
    challenges: LL(
      [
        "Shipments you cannot see in real time across carriers",
        "Drivers and warehouses operating on different tools",
        "Customer status pages that lag actual scan events",
        "Exception handling buried in group chats",
        "Proof of delivery photos and signatures lost after the stop",
        "Route plans that ignore live traffic and capacity constraints",
        "Cold-chain or asset sensors disconnected from order systems",
        "Invoice and SLA disputes without a shared event timeline",
      ],
      [
        "شحنات لا تُرى في الوقت الفعلي عبر الناقلين",
        "سائقون ومستودعات يعملون على أدوات مختلفة",
        "صفحات حالة عملاء تتأخر عن أحداث المسح الفعلية",
        "معالجة استثناءات مدفونة في محادثات جماعية",
        "صور وإثبات تسليم وتواقيع تضيع بعد التوقف",
        "خطط مسارات تتجاهل حركة المرور الحية وقيود الطاقة",
        "مستشعرات سلسلة تبريد أو أصول منفصلة عن أنظمة الطلبات",
        "نزاعات فواتير واتفاقيات مستوى خدمة دون جدول أحداث مشترك",
      ],
    ),
    solutions: LL(
      [
        "GPS tracking and fleet visibility platforms",
        "Driver and warehouse mobile applications",
        "Order, shipment, and milestone orchestration",
        "Customer and partner tracking portals",
        "IoT sensor integration for assets and cold chain",
        "Exception and returns workflow tools",
        "Route and stop management for dispatch teams",
        "Analytics for OTIF, dwell, and cost-to-serve",
        "Carrier and WMS API integrations",
      ],
      [
        "منصات تتبع GPS ورؤية أساطيل",
        "تطبيقات جوال للسائقين والمستودعات",
        "تنسيق طلبات وشحنات ومعالم",
        "بوابات تتبع للعملاء والشركاء",
        "تكامل مستشعرات إنترنت الأشياء للأصول وسلسلة التبريد",
        "أدوات مسارات استثناءات ومرتجعات",
        "إدارة مسارات وتوقفات لفرق التوزيع",
        "تحليلات للتسليم في الوقت وبالكامل والانتظار وتكلفة الخدمة",
        "تكاملات واجهات ناقلين وأنظمة مستودعات",
      ],
    ),
    features: LL(
      [
        "Live map views with geofence arrival and departure events",
        "Stop-level task lists with photo and signature capture",
        "Barcode and QR scan flows for warehouse and last mile",
        "Configurable milestone templates per service level",
        "Automated customer notifications on delay and delivery",
        "Temperature and shock alert hooks from sensor feeds",
        "Multi-carrier shipment aggregation into one timeline",
        "Dispatcher boards for unassigned and at-risk stops",
        "Exportable POD packages for billing and claims",
      ],
      [
        "عروض خرائط حية مع أحداث وصول ومغادرة للسياج الجغرافي",
        "قوائم مهام على مستوى التوقف مع التقاط صور وتوقيع",
        "مسارات مسح باركود وQR للمستودع والميل الأخير",
        "قوالب معالم قابلة للتهيئة حسب مستوى الخدمة",
        "إشعارات عملاء آلية عند التأخير والتسليم",
        "خطافات تنبيه حرارة وصدمات من تغذيات المستشعرات",
        "تجميع شحنات ناقلين متعددين في جدول زمني واحد",
        "لوحات موزّعين للتوقفات غير المعيّنة والمعرّضة للخطر",
        "حزم إثبات تسليم قابلة للتصدير للفوترة والمطالبات",
      ],
    ),
    aiIntro: L(
      "AI in logistics helps predict delays, optimize stop sequences, and triage exceptions — while dispatchers keep control of customer commitments.",
      "يساعد الذكاء الاصطناعي في اللوجستيات على توقع التأخير وتحسين تسلسل التوقفات وفرز الاستثناءات — بينما يحتفظ الموزّعون بالتحكم في التزامات العملاء.",
    ),
    aiUseCases: LL(
      [
        "ETA prediction from historical routes and live conditions",
        "Suggest stop sequences that reduce empty miles",
        "Auto-classify exception reasons from driver notes and scans",
        "Flag at-risk shipments before SLA breach",
        "Demand forecasting for hub staffing and vehicle allocation",
        "Chat assistants for shipment FAQs using live tracking data",
      ],
      [
        "توقع وقت الوصول من المسارات التاريخية والظروف الحية",
        "اقتراح تسلسل توقفات يقلّل الأميال الفارغة",
        "تصنيف أسباب الاستثناء آلياً من ملاحظات السائق والمسحات",
        "الإشارة إلى شحنات معرّضة للخطر قبل خرق اتفاقية الخدمة",
        "التنبؤ بالطلب لتوظيف المراكز وتخصيص المركبات",
        "مساعدو دردشة لأسئلة الشحنات باستخدام بيانات التتبع الحية",
      ],
    ),
    technologies: [
      "Flutter",
      "TypeScript",
      "Node.js",
      "React",
      "PostgreSQL",
      "Python",
      "AWS",
      "Docker",
    ],
    whyRepla: LL(
      [
        "Mobile-first design for drivers who cannot fight clumsy UIs on the road",
        "Tracking and order events share one timeline for customers and ops",
        "IoT and GPS are wired into workflows, not isolated map toys",
        "Exception tools reduce chat chaos during peak seasons",
        "Analytics focus on OTIF and cost-to-serve, not vanity charts",
        "Carrier and warehouse integrations planned as core delivery",
      ],
      [
        "تصميم جوال أولاً لسائقين لا يستطيعون محاربة واجهات سيئة على الطريق",
        "أحداث التتبع والطلبات تتشارك جدولاً زمنياً واحداً للعملاء والتشغيل",
        "إنترنت الأشياء وGPS يُربطان بالمسارات لا بألعاب خرائط معزولة",
        "أدوات الاستثناءات تقلّل فوضى المحادثات في مواسم الذروة",
        "التحليلات تركّز على التسليم في الوقت وتكلفة الخدمة لا رسوم زينة",
        "تكاملات الناقلين والمستودعات تُخطَّط كتسليم أساسي",
      ],
    ),
    faqs: [
      {
        q: L(
          "Can you track multi-carrier shipments in one place?",
          "هل يمكنكم تتبع شحنات ناقلين متعددين في مكان واحد؟",
        ),
        a: L(
          "Yes. We aggregate carrier events and your own scans into a unified shipment timeline and customer status view.",
          "نعم. نجمّع أحداث الناقلين ومسحاتكم في جدول شحنة موحّد وعرض حالة للعميل.",
        ),
      },
      {
        q: L(
          "Do you build driver apps for Android and iOS?",
          "هل تبنون تطبيقات سائقين لأندرويد وiOS؟",
        ),
        a: L(
          "Yes — stop tasks, navigation handoff, POD capture, and offline-tolerant patterns where coverage is weak.",
          "نعم — مهام توقف وتسليم ملاحة والتقاط إثبات تسليم وأنماط تتحمّل ضعف التغطية.",
        ),
      },
      {
        q: L(
          "Can cold-chain sensors feed the same platform?",
          "هل يمكن لمستشعرات سلسلة التبريد تغذية المنصة نفسها؟",
        ),
        a: L(
          "Yes. Temperature and shock events can attach to shipment IDs and trigger alerts and customer-visible exceptions when you want them.",
          "نعم. يمكن لأحداث الحرارة والصدمات أن ترتبط بمعرّفات الشحنات وتطلق تنبيهات واستثناءات مرئية للعميل عندما تريدون ذلك.",
        ),
      },
      {
        q: L(
          "How do customers get status without calling ops?",
          "كيف يحصل العملاء على الحالة دون الاتصال بالتشغيل؟",
        ),
        a: L(
          "Through branded tracking pages, notifications, and APIs — all fed by the same milestone events your team uses.",
          "عبر صفحات تتبع بعلامتكم وإشعارات وواجهات — كلها تُغذّى بنفس أحداث المعالم التي يستخدمها فريقكم.",
        ),
      },
      {
        q: L(
          "Will this replace our WMS?",
          "هل سيحل هذا محل نظام المستودع لدينا؟",
        ),
        a: L(
          "Typically we integrate with WMS for inventory and pick events while owning transportation visibility and last-mile workflows — unless a broader replacement is in scope.",
          "عادة نتكامل مع نظام المستودع لأحداث المخزون والتجهيز بينما نملك رؤية النقل ومسارات الميل الأخير — ما لم يكن استبدال أوسع ضمن النطاق.",
        ),
      },
      {
        q: L(
          "What KPIs can we report on?",
          "ما مؤشرات الأداء التي يمكننا الإبلاغ عنها؟",
        ),
        a: L(
          "OTIF, dwell, failed delivery reasons, POD completeness, and cost-to-serve views — defined with your ops team during design.",
          "التسليم في الوقت وبالكامل والانتظار وأسباب فشل التسليم واكتمال إثبات التسليم وعروض تكلفة الخدمة — تُعرَّف مع فريق التشغيل أثناء التصميم.",
        ),
      },
    ],
    ctaTitle: L(
      "Ready to Gain End-to-End Shipment Visibility?",
      "هل أنتم مستعدون للحصول على رؤية شحنات من الطرف إلى الطرف؟",
    ),
    ctaBody: L(
      "Map a lane or last-mile flow with us — we will propose a tracking and ops build.",
      "ارسموا معنا مساراً أو تدفقاً للميل الأخير — وسنقترح بناء تتبع وتشغيل.",
    ),
    relatedServices: [
      "iot-embedded-systems",
      "mobile-app-development",
      "custom-software-development",
      "data-engineering-analytics",
    ],
  },
  {
    slug: "travel-hospitality",
    icon: "Hotel",
    title: L("Travel & Hospitality", "السفر والضيافة"),
    shortTitle: L("Hospitality", "الضيافة"),
    heroTitle: L(
      "Travel & Hospitality Software Solutions",
      "حلول برمجيات السفر والضيافة",
    ),
    tagline: L(
      "Booking, guest, and operations products for hospitality brands.",
      "منتجات حجز وضيوف وعمليات لعلامات الضيافة.",
    ),
    description: L(
      "Booking platforms, customer portals, and operational software for travel and hospitality — guest-facing and staff-facing.",
      "منصات حجز وبوابات عملاء وبرمجيات تشغيل للسفر والضيافة — للضيف وللموظف.",
    ),
    metaTitle: L(
      "Travel & Hospitality Software | REPLA",
      "برمجيات السفر والضيافة | REPLA",
    ),
    metaDescription: L(
      "Build booking platforms, guest apps, and hospitality ops software with REPLA. Web, custom systems, mobile, and UI/UX for hotels, travel, and experiences.",
      "ابنِ منصات حجز وتطبيقات ضيوف وبرمجيات تشغيل ضيافة مع REPLA. ويب وأنظمة مخصصة وجوال وتصميم واجهات للفنادق والسفر والتجارب.",
    ),
    overview: L(
      "Hospitality brands need booking and guest experiences that match what the front desk can deliver — especially under seasonal load. Staff tools must keep pace with rooms, tours, and ancillary services. REPLA builds travel and hospitality software that connects guest journeys to operations without fragile spreadsheet bridges.",
      "تحتاج علامات الضيافة إلى تجارب حجز وضيوف تطابق ما يستطيع الاستقبال تقديمه — خاصة تحت الحمل الموسمي. يجب أن تواكب أدوات الموظفين الغرف والجولات والخدمات الإضافية. تبني REPLA برمجيات سفر وضيافة تربط رحلات الضيوف بالعمليات دون جسور جداول هشة.",
    ),
    challenges: LL(
      [
        "Booking channels disconnected from property operations",
        "Guest apps that do not match front-desk reality",
        "Seasonal traffic that collapses the public site",
        "Rate and inventory rules duplicated across OTAs and direct",
        "Upsell and ancillary offers managed outside the reservation",
        "Housekeeping and maintenance tickets lost between shifts",
        "Loyalty and guest profiles fragmented across properties",
        "Weak bilingual UX for regional travelers and staff",
      ],
      [
        "قنوات حجز منفصلة عن عمليات المنشأة",
        "تطبيقات ضيوف لا تطابق واقع الاستقبال",
        "حركة موسمية تُسقط الموقع العام",
        "قواعد أسعار ومخزون مكررة عبر وكالات السفر عبر الإنترنت والمباشر",
        "عروض ترقية وخدمات إضافية تُدار خارج الحجز",
        "تذاكر تدبير منزلي وصيانة تضيع بين الورديات",
        "ولاء وملفات ضيوف مجزأة عبر المنشآت",
        "تجربة ثنائية اللغة ضعيفة للمسافرين والموظفين الإقليميين",
      ],
    ),
    solutions: LL(
      [
        "Direct booking engines and packaging platforms",
        "Guest portals and mobile concierge apps",
        "Property and experience operations software",
        "Channel and inventory synchronization layers",
        "Housekeeping and maintenance workflow tools",
        "Loyalty and guest profile platforms",
        "High-performance marketing and booking websites",
        "Staff mobile tools for on-property service",
        "Analytics for occupancy, ADR-adjacent views, and guest journey drop-off",
      ],
      [
        "محركات حجز مباشر ومنصات حزم",
        "بوابات ضيوف وتطبيقات كونسيرج جوال",
        "برمجيات تشغيل منشآت وتجارب",
        "طبقات مزامنة قنوات ومخزون",
        "أدوات مسارات تدبير منزلي وصيانة",
        "منصات ولاء وملفات ضيوف",
        "مواقع تسويق وحجز عالية الأداء",
        "أدوات جوال للموظفين للخدمة داخل المنشأة",
        "تحليلات للإشغال وعروض مجاورة لمتوسط السعر اليومي وتسرّب رحلة الضيف",
      ],
    ),
    features: LL(
      [
        "Room and experience calendars with blackout and allotment rules",
        "Guest check-in and digital key handoff hooks",
        "Pre-arrival upsell flows for rooms, dining, and activities",
        "Itinerary builders for multi-day travel packages",
        "Staff task boards tied to reservation events",
        "Review and feedback capture post-stay",
        "Multi-property brand sites with localized content",
        "Payment capture and deposit workflows for bookings",
        "Accessibility-minded booking UX for complex rate plans",
      ],
      [
        "تقويمات غرف وتجارب بقواعد حظر وتخصيص",
        "خطافات تسجيل وصول ضيف وتسليم مفتاح رقمي",
        "مسارات ترقية قبل الوصول للغرف والمطاعم والأنشطة",
        "بنّاؤو جداول لرحلات سفر متعددة الأيام",
        "لوحات مهام موظفين مربوطة بأحداث الحجز",
        "التقاط مراجعات وملاحظات بعد الإقامة",
        "مواقع علامة متعددة المنشآت بمحتوى محلي",
        "مسارات التقاط دفع وعربون للحجوزات",
        "تجربة حجز تراعي الوصول لخطط أسعار معقدة",
      ],
    ),
    aiIntro: L(
      "Hospitality AI personalizes offers and supports guests around the clock — while rate strategy and service recovery stay with your teams.",
      "يخصّص ذكاء الضيافة العروض ويدعم الضيوف على مدار الساعة — بينما تبقى استراتيجية الأسعار واستعادة الخدمة لدى فرقكم.",
    ),
    aiUseCases: LL(
      [
        "Personalized upsell suggestions based on stay context",
        "Virtual concierge answers from approved property content",
        "Demand-aware staffing hints for housekeeping peaks",
        "Summarize guest feedback themes for managers",
        "Detect booking abandonment patterns for recovery campaigns",
        "Draft multilingual guest message templates for staff edit",
      ],
      [
        "اقتراحات ترقية مخصّصة حسب سياق الإقامة",
        "إجابات كونسيرج افتراضي من محتوى المنشأة المعتمد",
        "تلميحات توظيف واعية بالطلب لذروات التدبير المنزلي",
        "تلخيص موضوعات ملاحظات الضيوف للمديرين",
        "اكتشاف أنماط التخلي عن الحجز لحملات الاستعادة",
        "مسودات قوالب رسائل ضيوف متعددة اللغات لتعديل الموظفين",
      ],
    ),
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Flutter",
      "AWS",
      "Docker",
    ],
    whyRepla: LL(
      [
        "Guest-facing design and ops tools are built as one coherent product",
        "Performance under seasonal peaks is treated as a first-class requirement",
        "Booking UX is crafted for complex rates without confusing travelers",
        "Staff workflows keep pace with what the front desk promises",
        "Bilingual experiences fit regional hospitality markets",
        "Integrations with channels and payments are planned early",
      ],
      [
        "تصميم مواجهة الضيف وأدوات التشغيل يُبنيان كمنتج متماسك واحد",
        "الأداء تحت الذروات الموسمية يُعامل كمتطلب من الدرجة الأولى",
        "تجربة الحجز تُصاغ لأسعار معقدة دون إرباك المسافرين",
        "مسارات الموظفين تواكب ما يعد به الاستقبال",
        "تجارب ثنائية اللغة تناسب أسواق الضيافة الإقليمية",
        "تكاملات القنوات والمدفوعات تُخطَّط مبكراً",
      ],
    ),
    faqs: [
      {
        q: L(
          "Can you replace our booking engine?",
          "هل يمكنكم استبدال محرك الحجز لدينا؟",
        ),
        a: L(
          "Yes when direct booking is strategic — or we integrate and improve the guest layer around an engine you keep.",
          "نعم عندما يكون الحجز المباشر استراتيجياً — أو نتكامل ونحسّن طبقة الضيف حول محرك تحتفظون به.",
        ),
      },
      {
        q: L(
          "Do you support multi-property brands?",
          "هل تدعمون علامات متعددة المنشآت؟",
        ),
        a: L(
          "Yes — shared brand sites and portals with property-level inventory, content, and permissions.",
          "نعم — مواقع وبوابات علامة مشتركة مع مخزون ومحتوى وصلاحيات على مستوى المنشأة.",
        ),
      },
      {
        q: L(
          "Can guests manage bookings on mobile?",
          "هل يمكن للضيوف إدارة الحجوزات على الجوال؟",
        ),
        a: L(
          "Yes — modify eligible stays, request services, and receive itinerary updates through guest apps or portals.",
          "نعم — تعديل إقامات مؤهلة وطلب خدمات وتلقّي تحديثات جدول عبر تطبيقات أو بوابات الضيوف.",
        ),
      },
      {
        q: L(
          "How do you handle OTA inventory sync?",
          "كيف تتعاملون مع مزامنة مخزون وكالات السفر عبر الإنترنت؟",
        ),
        a: L(
          "Through channel manager or API integrations scoped to your distribution partners — with ops visibility when channels diverge.",
          "عبر تكاملات مدير قنوات أو واجهات ضمن نطاق شركاء التوزيع لديكم — مع رؤية تشغيل عندما تختلف القنوات.",
        ),
      },
      {
        q: L(
          "Will the site survive holiday peaks?",
          "هل سيصمد الموقع في ذروات العطل؟",
        ),
        a: L(
          "We design caching, booking queues, and hosting patterns for known seasonal load — validated against your peak scenarios.",
          "نصمّم تخزيناً مؤقتاً وطوابير حجز وأنماط استضافة لحمل موسمي معروف — وتُتحقق مقابل سيناريوهات ذروتكم.",
        ),
      },
      {
        q: L(
          "Can housekeeping use the same platform?",
          "هل يمكن للتدبير المنزلي استخدام المنصة نفسها؟",
        ),
        a: L(
          "Yes — room status, tasks, and maintenance tickets linked to reservations so service recovery is not informal chat.",
          "نعم — حالة غرف ومهام وتذاكر صيانة مربوطة بالحجوزات حتى لا تكون استعادة الخدمة محادثة غير رسمية.",
        ),
      },
    ],
    ctaTitle: L(
      "Ready to Elevate Your Guest Digital Journey?",
      "هل أنتم مستعدون للارتقاء بالرحلة الرقمية لضيوفكم؟",
    ),
    ctaBody: L(
      "Share your booking and property stack — we will outline a guest-to-ops product path.",
      "شاركوا بنية الحجز والمنشأة — وسنرسم مسار منتج من الضيف إلى التشغيل.",
    ),
    relatedServices: [
      "web-development",
      "custom-software-development",
      "mobile-app-development",
      "ui-ux-design",
    ],
  },
  {
    slug: "construction",
    icon: "HardHat",
    title: L("Construction", "البناء"),
    shortTitle: L("Construction", "البناء"),
    heroTitle: L(
      "Construction Software & Site Digital Tools",
      "برمجيات البناء وأدوات رقمية للمواقع",
    ),
    tagline: L(
      "Project, site, and office software for construction firms.",
      "برمجيات مشاريع ومواقع ومكاتب لشركات البناء.",
    ),
    description: L(
      "Internal applications, mobile tools, and integrations for construction — so site and office are not running two different businesses.",
      "تطبيقات داخلية وأدوات جوال وتكاملات للبناء — حتى لا يدير الموقع والمكتب عملين مختلفين.",
    ),
    metaTitle: L(
      "Construction Software Development | REPLA",
      "تطوير برمجيات البناء | REPLA",
    ),
    metaDescription: L(
      "Connect site and office with REPLA construction software. Custom project apps, field mobile tools, and IoT tracking for contractors and developers.",
      "اربطوا الموقع والمكتب مع برمجيات البناء من REPLA. تطبيقات مشاريع مخصصة وأدوات جوال ميدانية وتتبع إنترنت أشياء للمقاولين والمطوّرين.",
    ),
    overview: L(
      "Construction firms bleed time when site data never reaches the office in a usable form. Project controls, crews, and vendors need shared systems that work offline and outdoors. REPLA builds construction software that unifies field capture with office planning and reporting.",
      "تخسر شركات البناء الوقت عندما لا تصل بيانات الموقع إلى المكتب بشكل قابل للاستخدام. تحتاج ضوابط المشاريع والطواقم والمورّدون إلى أنظمة مشتركة تعمل دون اتصال وفي الخارج. تبني REPLA برمجيات بناء توحّد الالتقاط الميداني مع تخطيط المكتب والتقارير.",
    ),
    challenges: LL(
      [
        "Site daily reports trapped in paper or messaging apps",
        "Projects tracked in files nobody trusts for decisions",
        "Vendors and crews without a shared progress system",
        "Safety incidents logged inconsistently across sites",
        "Material deliveries unverified against purchase orders",
        "Drawing revisions not reaching the right crews in time",
        "Equipment location and utilization poorly visible",
        "Payment applications delayed by missing site evidence",
      ],
      [
        "تقارير يومية للموقع محبوسة في ورق أو تطبيقات مراسلة",
        "مشاريع تُتتبع في ملفات لا يثق بها أحد للقرارات",
        "موردون وطواقم بلا نظام تقدّم مشترك",
        "حوادث سلامة تُسجَّل بشكل غير متسق عبر المواقع",
        "تسليمات مواد غير محققة مقابل أوامر الشراء",
        "مراجعات رسوم لا تصل للطواقم الصحيحة في الوقت",
        "موقع المعدات واستخدامها ضعيفة الرؤية",
        "طلبات دفع تتأخر بسبب نقص أدلة الموقع",
      ],
    ),
    solutions: LL(
      [
        "Project and portfolio control applications",
        "Field mobile apps for daily reports and inspections",
        "Document and drawing distribution workflows",
        "Safety observation and incident logging tools",
        "Material and delivery verification on site",
        "IoT and GPS tracking for equipment and assets",
        "Subcontractor portals for progress and RFIs",
        "Progress photo and evidence packages for billing",
        "Integrations with accounting and planning systems",
      ],
      [
        "تطبيقات تحكم مشاريع ومحافظ",
        "تطبيقات جوال ميدانية للتقارير اليومية والمعاينات",
        "مسارات توزيع مستندات ورسوم",
        "أدوات تسجيل ملاحظات وحوادث سلامة",
        "التحقق من المواد والتسليمات في الموقع",
        "تتبع إنترنت أشياء وGPS للمعدات والأصول",
        "بوابات مقاولين من الباطن للتقدّم وطلبات المعلومات",
        "حزم صور وأدلة تقدّم للفوترة",
        "تكاملات مع أنظمة المحاسبة والتخطيط",
      ],
    ),
    features: LL(
      [
        "WBS and activity progress with percent-complete capture",
        "Offline-capable forms that sync when connectivity returns",
        "Punch lists and snag tracking through closeout",
        "Toolbox talk acknowledgments with attendance rolls",
        "RFI and submittal status visible to site and office",
        "Geotagged photo evidence attached to tasks and claims",
        "Equipment check-in/out and utilization hours",
        "Multi-site dashboards for executives and PMs",
        "Role permissions for GC, subcontractor, and owner views",
      ],
      [
        "هيكل تفصيل عمل وتقدّم أنشطة مع التقاط نسبة الإكمال",
        "نماذج تعمل دون اتصال وتُزامن عند عودة الاتصال",
        "قوائم نواقص وتتبع عيوب حتى الإغلاق",
        "إقرارات محادثات السلامة مع كشوف حضور",
        "حالة طلبات المعلومات والمقدّمات مرئية للموقع والمكتب",
        "أدلة صور بموقع جغرافي مربوطة بالمهام والمطالبات",
        "تسجيل دخول/خروج معدات وساعات استخدام",
        "لوحات مواقع متعددة للمديرين ومديري المشاريع",
        "صلاحيات أدوار لعروض المقاول العام والمقاول من الباطن والمالك",
      ],
    ),
    aiIntro: L(
      "Construction AI helps turn site notes and photos into structured progress and risk signals — with project managers validating anything that affects schedule or pay.",
      "يساعد ذكاء البناء على تحويل ملاحظات وصور الموقع إلى إشارات تقدّم ومخاطر منظمة — مع تحقق مديري المشاريع من أي شيء يؤثر على الجدول أو الدفع.",
    ),
    aiUseCases: LL(
      [
        "Draft daily reports from structured field entries and photos",
        "Flag schedule risk from delayed activity patterns",
        "Classify safety observations for triage queues",
        "Extract quantities from delivery notes for staff confirmation",
        "Summarize RFI threads for PM decision briefings",
        "Suggest look-ahead tasks based on open punch and weather windows",
      ],
      [
        "مسودات تقارير يومية من إدخالات ميدانية منظمة وصور",
        "الإشارة إلى مخاطر جدول من أنماط أنشطة متأخرة",
        "تصنيف ملاحظات السلامة لطوابير الفرز",
        "استخراج كميات من إشعارات التسليم لتأكيد الموظفين",
        "تلخيص سلاسل طلبات المعلومات لموجزات قرار مدير المشروع",
        "اقتراح مهام استباقية بناءً على نواقص مفتوحة ونوافذ طقس",
      ],
    ),
    technologies: [
      "Flutter",
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Python",
      "AWS",
      "Docker",
    ],
    whyRepla: LL(
      [
        "Field UX is designed for gloves, sun, and weak connectivity",
        "Office reporting stays tied to what the site actually captured",
        "Subcontractor and GC workflows can coexist with clear permissions",
        "Evidence packs for billing reduce payment application friction",
        "IoT tracking is optional and purposeful — not gadget theater",
        "Rollouts can start on one project before company-wide adoption",
      ],
      [
        "تجربة الميدان تُصمَّم للقفازات والشمس وضعف الاتصال",
        "تقارير المكتب تبقى مربوطة بما التقطه الموقع فعلاً",
        "مسارات المقاول من الباطن والمقاول العام يمكن أن تتعايش بصلاحيات واضحة",
        "حزم الأدلة للفوترة تقلّل احتكاك طلبات الدفع",
        "تتبع إنترنت الأشياء اختياري وهادف — لا مسرح أدوات",
        "يمكن أن تبدأ الإطلاقات في مشروع واحد قبل التبنّي على مستوى الشركة",
      ],
    ),
    faqs: [
      {
        q: L(
          "Will this work offline on remote sites?",
          "هل سيعمل هذا دون اتصال في المواقع النائية؟",
        ),
        a: L(
          "Yes. Offline capture and later sync are common requirements we design for from the start.",
          "نعم. الالتقاط دون اتصال ثم المزامنة لاحقاً متطلبات شائعة نصمّم لها من البداية.",
        ),
      },
      {
        q: L(
          "Can subcontractors have limited access?",
          "هل يمكن للمقاولين من الباطن الحصول على وصول محدود؟",
        ),
        a: L(
          "Yes — portals and mobile roles scoped to their packages, RFIs, and progress only.",
          "نعم — بوابات وأدوار جوال محدودة بحزمهم وطلبات معلوماتهم وتقدّمهم فقط.",
        ),
      },
      {
        q: L(
          "Do you integrate with our accounting system?",
          "هل تتكاملون مع نظام المحاسبة لدينا؟",
        ),
        a: L(
          "Often yes — progress and cost evidence can feed payment applications and job-cost views through agreed integrations.",
          "غالباً نعم — يمكن لأدلة التقدّم والتكلفة أن تغذّي طلبات الدفع وعروض تكلفة الوظائف عبر تكاملات متفق عليها.",
        ),
      },
      {
        q: L(
          "Can we track equipment across sites?",
          "هل يمكننا تتبع المعدات عبر المواقع؟",
        ),
        a: L(
          "Yes via check-in workflows and optional GPS/IoT where the asset value justifies instrumentation.",
          "نعم عبر مسارات تسجيل دخول وتتبع GPS/إنترنت أشياء اختياري حيث تبرّر قيمة الأصل التجهيز.",
        ),
      },
      {
        q: L(
          "How do drawing revisions get to the field?",
          "كيف تصل مراجعات الرسوم إلى الميدان؟",
        ),
        a: L(
          "Through controlled document distribution with acknowledgments so crews know which revision is current.",
          "عبر توزيع مستندات مضبوط مع إقرارات حتى تعرف الطواقم أي مراجعة سارية.",
        ),
      },
      {
        q: L(
          "What is a sensible first project?",
          "ما المشروع الأول المنطقي؟",
        ),
        a: L(
          "One active site: daily reports, photos, and punch lists — then expand to RFIs, safety, and equipment once habits stick.",
          "موقع نشط واحد: تقارير يومية وصور وقوائم نواقص — ثم التوسّع إلى طلبات المعلومات والسلامة والمعدات بعد ثبات العادات.",
        ),
      },
    ],
    ctaTitle: L(
      "Ready to Connect Site and Office?",
      "هل أنتم مستعدون لربط الموقع بالمكتب؟",
    ),
    ctaBody: L(
      "Show us how one project runs today — we will propose a field-to-office software path.",
      "أرونا كيف يعمل مشروع واحد اليوم — وسنقترح مسار برمجيات من الميدان إلى المكتب.",
    ),
    relatedServices: [
      "custom-software-development",
      "mobile-app-development",
      "iot-embedded-systems",
    ],
  },
  {
    slug: "government",
    icon: "Landmark",
    title: L("Government", "الحكومة"),
    shortTitle: L("Government", "الحكومة"),
    heroTitle: L(
      "Government Digital Services & Platforms",
      "خدمات ومنصات رقمية حكومية",
    ),
    tagline: L(
      "Portals, APIs, and systems built for public-sector constraints.",
      "بوابات وواجهات وأنظمة تُبنى لقيود القطاع العام.",
    ),
    description: L(
      "Government digital services: portals, government APIs, secure applications, and consulting for modernization — without claiming contracts we do not list.",
      "خدمات رقمية حكومية: بوابات وواجهات حكومية وتطبيقات آمنة واستشارات للتحديث — دون ادعاء عقود غير مدرجة.",
    ),
    metaTitle: L(
      "Government Digital Services Software | REPLA",
      "برمجيات الخدمات الرقمية الحكومية | REPLA",
    ),
    metaDescription: L(
      "Build secure government portals, APIs, and modernization systems with REPLA. Web platforms, cybersecurity, and IT consulting for public-sector digital services.",
      "ابنِ بوابات وواجهات وأنظمة تحديث حكومية آمنة مع REPLA. منصات ويب وأمن سيبراني واستشارات تقنية للخدمات الرقمية في القطاع العام.",
    ),
    overview: L(
      "Public-sector digital services must remain accessible, auditable, and resilient under scrutiny. Legacy systems often still run the core service while citizens expect modern portals. REPLA builds government-facing platforms and APIs with security, accessibility, and change-management realities in mind.",
      "يجب أن تبقى الخدمات الرقمية في القطاع العام قابلة للوصول وللتدقيق ومتينة تحت الرقابة. غالباً ما تشغّل الأنظمة القديمة الخدمة الأساسية بينما يتوقع المواطنون بوابات حديثة. تبني REPLA منصات وواجهات مواجهة للحكومة مع الأمن وسهولة الوصول وواقع إدارة التغيير.",
    ),
    challenges: LL(
      [
        "Legacy cores that still run the citizen-facing service",
        "Public portals that fail accessibility and peak load",
        "Partner and agency APIs that cannot be relied on",
        "Paper-adjacent processes that stall digital casework",
        "Identity and role models that do not span departments",
        "Audit requirements that block iterative delivery",
        "Content and forms outdated across bilingual channels",
        "Security reviews arriving only at the end of projects",
      ],
      [
        "أنوية قديمة ما زالت تشغّل الخدمة المواجهة للمواطن",
        "بوابات عامة تفشل في الوصول وذروة الحمل",
        "واجهات شركاء وجهات لا يمكن الاعتماد عليها",
        "عمليات شبه ورقية تعيق المعاملات الرقمية",
        "نماذج هوية وأدوار لا تمتد عبر الإدارات",
        "متطلبات تدقيق تعيق التسليم التكراري",
        "محتوى ونماذج قديمة عبر قنوات ثنائية اللغة",
        "مراجعات أمنية تصل فقط في نهاية المشاريع",
      ],
    ),
    solutions: LL(
      [
        "Citizen and business service portals",
        "Government and inter-agency API platforms",
        "Case management and workflow applications",
        "Secure document intake and status tracking",
        "Identity-aware access and role administration",
        "Accessibility-focused web redesigns",
        "Legacy modernization and strangler patterns",
        "Cybersecurity hardening and review practices",
        "IT consulting and digital service roadmaps",
      ],
      [
        "بوابات خدمات للمواطنين والأعمال",
        "منصات واجهات حكومية وبين الجهات",
        "تطبيقات إدارة معاملات ومسارات عمل",
        "استلام مستندات آمن وتتبع حالة",
        "وصول واعٍ بالهوية وإدارة أدوار",
        "إعادة تصميم ويب تركّز على سهولة الوصول",
        "تحديث أنظمة قديمة وأنماط الاستبدال التدريجي",
        "ممارسات تعزيز ومراجعة أمن سيبراني",
        "استشارات تقنية وخرائط خدمات رقمية",
      ],
    ),
    features: LL(
      [
        "Guided multi-step service applications with save-and-resume",
        "Status timelines citizens can understand without calling",
        "Officer work queues with SLA clocks and escalations",
        "Document checklists with virus scanning hooks",
        "Bilingual content management for Arabic and English",
        "Audit logs suitable for internal and oversight review",
        "API gateways with throttling and partner credentials",
        "Announcement and outage banners for service continuity",
        "Feedback capture tied to specific service journeys",
      ],
      [
        "طلبات خدمات موجّهة متعددة الخطوات مع حفظ واستئناف",
        "جداول حالة يفهمها المواطنون دون اتصال",
        "طوابير عمل للموظفين بساعات اتفاقية خدمة وتصعيد",
        "قوائم مستندات مع خطافات فحص فيروسات",
        "إدارة محتوى ثنائية اللغة للعربية والإنجليزية",
        "سجلات تدقيق مناسبة للمراجعة الداخلية والرقابية",
        "بوابات واجهات مع تحديد معدل واعتمادات شركاء",
        "لافتات إعلانات وانقطاع لاستمرارية الخدمة",
        "التقاط ملاحظات مربوط برحلات خدمة محددة",
      ],
    ),
    aiIntro: L(
      "In government, AI should help officers process cases faster and guide citizens to the right service — with transparency, human oversight, and no invented legal advice.",
      "في الحكومة ينبغي أن يساعد الذكاء الاصطناعي الموظفين على معالجة المعاملات أسرع ويوجّه المواطنين إلى الخدمة الصحيحة — بشفافية وإشراف بشري ودون نصائح قانونية مخترعة.",
    ),
    aiUseCases: LL(
      [
        "Route incoming cases to the right queue from form content",
        "Draft officer response templates from approved policy text",
        "Citizen chat that answers only from published service guides",
        "Flag incomplete applications before submission",
        "Summarize long case histories for reviewer briefings",
        "Detect unusual access or submission patterns for security review",
      ],
      [
        "توجيه المعاملات الواردة إلى الطابور الصحيح من محتوى النماذج",
        "مسودات قوالب رد للموظفين من نصوص سياسة معتمدة",
        "دردشة مواطنين تجيب فقط من أدلة الخدمة المنشورة",
        "الإشارة إلى طلبات غير مكتملة قبل الإرسال",
        "تلخيص سجلات معاملات طويلة لموجزات المراجعين",
        "اكتشاف أنماط وصول أو إرسال غير معتادة للمراجعة الأمنية",
      ],
    ),
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Azure",
      "Docker",
    ],
    whyRepla: LL(
      [
        "We plan for accessibility, auditability, and bilingual delivery from day one",
        "Security reviews are scheduled into the build, not deferred",
        "Legacy modernization uses incremental patterns public bodies can absorb",
        "APIs are designed for partners and other agencies, not only internal apps",
        "Officer and citizen experiences are both treated as first-class products",
        "Roadmaps respect procurement and change-control realities",
      ],
      [
        "نخطّط لسهولة الوصول وقابلية التدقيق والتسليم ثنائي اللغة منذ اليوم الأول",
        "مراجعات الأمن تُدرج في البناء لا تُؤجَّل",
        "تحديث الأنظمة القديمة يستخدم أنماطاً تدريجية تستطيع الجهات العامة استيعابها",
        "الواجهات تُصمَّم للشركاء والجهات الأخرى لا للتطبيقات الداخلية فقط",
        "تجارب الموظف والمواطن تُعاملان كمنتجين من الدرجة الأولى",
        "الخرائط تحترم واقع المشتريات وضبط التغيير",
      ],
    ),
    faqs: [
      {
        q: L(
          "Do you work within government procurement constraints?",
          "هل تعملون ضمن قيود المشتريات الحكومية؟",
        ),
        a: L(
          "We scope and document deliveries to fit how public projects are approved and accepted — without inventing contracts or awards we do not have.",
          "نحدد نطاق التسليمات ونوثّقها لتناسب كيفية اعتماد وقبول المشاريع العامة — دون اختراع عقود أو جوائز ليست لدينا.",
        ),
      },
      {
        q: L(
          "Can you modernize without a full rip-and-replace?",
          "هل يمكنكم التحديث دون استبدال كامل؟",
        ),
        a: L(
          "Yes. Strangler and facade patterns let new portals and APIs sit in front of legacy cores while capabilities move over time.",
          "نعم. أنماط الاستبدال التدريجي والواجهة تتيح لبوابات وواجهات جديدة أن تجلس أمام الأنوية القديمة بينما تنتقل القدرات مع الوقت.",
        ),
      },
      {
        q: L(
          "How do you address accessibility?",
          "كيف تعالجون سهولة الوصول؟",
        ),
        a: L(
          "Through semantic HTML, keyboard paths, contrast, and content structure — validated against the accessibility standard your program targets.",
          "عبر HTML دلالي ومسارات لوحة مفاتيح وتباين وهيكل محتوى — يُتحقق مقابل معيار الوصول الذي يستهدفه برنامجكم.",
        ),
      },
      {
        q: L(
          "Can other agencies consume our APIs?",
          "هل يمكن لجهات أخرى استهلاك واجهاتنا؟",
        ),
        a: L(
          "Yes. We design partner credentials, documentation, and throttling so inter-agency integration is operable and observable.",
          "نعم. نصمّم اعتمادات شركاء وتوثيقاً وتحديد معدل حتى يكون التكامل بين الجهات قابلاً للتشغيل والمراقبة.",
        ),
      },
      {
        q: L(
          "How is citizen data protected?",
          "كيف تُحمى بيانات المواطنين؟",
        ),
        a: L(
          "Least privilege, encryption in transit, audit logs, secure hosting choices, and security reviews aligned to your policies and hosting environment.",
          "أقل صلاحيات والتشفير أثناء النقل وسجلات تدقيق واختيارات استضافة آمنة ومراجعات أمنية متوافقة مع سياساتكم وبيئة الاستضافة.",
        ),
      },
      {
        q: L(
          "Do you support Arabic-first government portals?",
          "هل تدعمون بوابات حكومية عربية أولاً؟",
        ),
        a: L(
          "Yes. RTL layout, bilingual content models, and form UX for Arabic-first citizens are part of delivery when required.",
          "نعم. تخطيط من اليمين لليسار ونماذج محتوى ثنائية اللغة وتجربة نماذج للمواطنين بالعربية أولاً جزء من التسليم عند الحاجة.",
        ),
      },
    ],
    ctaTitle: L(
      "Ready to Modernize a Public Digital Service?",
      "هل أنتم مستعدون لتحديث خدمة رقمية عامة؟",
    ),
    ctaBody: L(
      "Describe the service and constraints — we will propose a secure, accessible delivery plan.",
      "صفوا الخدمة والقيود — وسنقترح خطة تسليم آمنة وقابلة للوصول.",
    ),
    relatedServices: [
      "web-development",
      "api-development",
      "cybersecurity",
      "it-consulting",
    ],
  },
  {
    slug: "telecommunications",
    icon: "Radio",
    title: L("Telecommunications", "الاتصالات"),
    shortTitle: L("Telecom", "الاتصالات"),
    heroTitle: L(
      "Telecommunications Software & Platform Solutions",
      "حلول برمجيات ومنصات الاتصالات",
    ),
    tagline: L(
      "Customer, operations, and platform software for telecom.",
      "برمجيات عملاء وعمليات ومنصات للاتصالات.",
    ),
    description: L(
      "Software, APIs, cloud, and dedicated teams for telecommunications products and internal platforms.",
      "برمجيات وواجهات وسحابة وفرق مخصصة لمنتجات الاتصالات والمنصات الداخلية.",
    ),
    metaTitle: L(
      "Telecom Software Development | REPLA",
      "تطوير برمجيات الاتصالات | REPLA",
    ),
    metaDescription: L(
      "Build telecom customer platforms, APIs, and cloud systems with REPLA. Custom software, integrations, DevOps, and dedicated teams for continuous product delivery.",
      "ابنِ منصات عملاء اتصالات وواجهات وأنظمة سحابية مع REPLA. برمجيات مخصصة وتكاملات وDevOps وفرق مخصصة لتسليم منتج مستمر.",
    ),
    overview: L(
      "Telecom products sit at the intersection of billing, care, network-adjacent systems, and always-on digital channels. Scale and reliability are everyday requirements, not launch-day concerns. REPLA builds customer and operations platforms, APIs, and cloud delivery models suited to continuous telecom change.",
      "تقع منتجات الاتصالات عند تقاطع الفوترة والرعاية والأنظمة المجاورة للشبكة والقنوات الرقمية الدائمة. التوسع والموثوقية متطلبات يومية لا هموم يوم الإطلاق. تبني REPLA منصات عملاء وتشغيل وواجهات ونماذج تسليم سحابي تناسب التغيير المستمر في الاتصالات.",
    ),
    challenges: LL(
      [
        "Customer systems that lag the network and product catalog",
        "Integrations across billing, care, and digital channels",
        "Scale and reliability under continuous subscriber load",
        "Legacy BSS/OSS modules that slow every new offer",
        "Inconsistent identity across app, web, and care tools",
        "Release processes too slow for campaign and tariff changes",
        "Observability gaps when APIs fail under peak",
        "Team capacity that cannot sustain parallel product streams",
      ],
      [
        "أنظمة عملاء تتأخر عن الشبكة وكتالوج المنتجات",
        "تكاملات عبر الفوترة والرعاية والقنوات الرقمية",
        "توسع وموثوقية تحت حمل مشتركين مستمر",
        "وحدات BSS/OSS قديمة تبطئ كل عرض جديد",
        "هوية غير متسقة عبر التطبيق والويب وأدوات الرعاية",
        "عمليات إصدار أبطأ من أن تواكب تغييرات الحملات والتعرفة",
        "فجوات مراقبة عندما تفشل الواجهات تحت الذروة",
        "طاقة فرق لا تحتمل مسارات منتجات متوازية",
      ],
    ),
    solutions: LL(
      [
        "Customer self-care and digital sales platforms",
        "API layers for partners, channels, and internal consumers",
        "Order capture and fulfillment orchestration",
        "Care agent tooling and case workflows",
        "Cloud and DevOps pipelines for frequent release",
        "Catalog and offer configuration services",
        "Usage and event ingestion for digital products",
        "Observability and incident response tooling hooks",
        "Dedicated development teams embedded with product owners",
      ],
      [
        "منصات رعاية ذاتية ومبيعات رقمية للعملاء",
        "طبقات واجهات للشركاء والقنوات والمستهلكين الداخليين",
        "التقاط طلبات وتنسيق التنفيذ",
        "أدوات وكلاء رعاية ومسارات حالات",
        "مسارات سحابة وDevOps لإصدار متكرر",
        "خدمات تهيئة كتالوج وعروض",
        "استيعاب استخدام وأحداث للمنتجات الرقمية",
        "خطافات أدوات مراقبة واستجابة للحوادث",
        "فرق تطوير مخصصة مدمجة مع مالكي المنتج",
      ],
    ),
    features: LL(
      [
        "Plan and add-on change flows with eligibility checks",
        "Bill shock alerts and usage widgets for subscribers",
        "Omnichannel case history for care agents",
        "Partner onboarding with credential and quota management",
        "Feature flags for controlled offer rollouts",
        "Idempotent order APIs for channel retries",
        "Multi-region deployment patterns where required",
        "Synthetic checks on critical customer journeys",
        "Admin consoles for catalog and content operations",
      ],
      [
        "مسارات تغيير خطط وإضافات مع فحوصات أهلية",
        "تنبيهات صدمة فاتورة وودجات استخدام للمشتركين",
        "سجل حالات متعدد القنوات لوكلاء الرعاية",
        "انضمام شركاء مع إدارة اعتمادات وحصص",
        "أعلام ميزات لإطلاقات عروض مضبوطة",
        "واجهات طلبات ذات هوية متكررة آمنة لإعادة محاولات القنوات",
        "أنماط نشر متعددة المناطق عند الحاجة",
        "فحوصات تركيبية على رحلات عملاء حرجة",
        "لوحات إدارة لعمليات الكتالوج والمحتوى",
      ],
    ),
    aiIntro: L(
      "Telecom AI improves care deflection, churn signals, and network-adjacent ops insights — always with clear escalation to human agents for billing and service disputes.",
      "يحسّن ذكاء الاتصالات صرف الرعاية وإشارات التسرب ورؤى التشغيل المجاورة للشبكة — دائماً مع تصعيد واضح لوكلاء بشر في نزاعات الفوترة والخدمة.",
    ),
    aiUseCases: LL(
      [
        "Intent routing for care chat before agent handoff",
        "Churn risk scoring for retention campaign queues",
        "Summarize long care histories for agent screen pop",
        "Detect anomalous usage patterns for fraud review",
        "Recommend next-best offer within catalog rules",
        "Assist NOC/ops triage with log and alert clustering",
      ],
      [
        "توجيه النية لدردشة الرعاية قبل تسليم الوكيل",
        "تسجيل مخاطر التسرب لطوابير حملات الاحتفاظ",
        "تلخيص سجلات رعاية طويلة لظهور شاشة الوكيل",
        "اكتشاف أنماط استخدام شاذة لمراجعة الاحتيال",
        "اقتراح العرض الأنسب التالي ضمن قواعد الكتالوج",
        "مساعدة فرز غرفة العمليات بتجميع سجلات وتنبيهات",
      ],
    ),
    technologies: [
      "TypeScript",
      "Node.js",
      "React",
      "Next.js",
      "Kubernetes",
      "Docker",
      "AWS",
      "PostgreSQL",
    ],
    whyRepla: LL(
      [
        "We build for continuous load and frequent catalog change, not demo traffic",
        "API and integration work matches how telecom channels actually consume services",
        "Cloud and DevOps practices support reliable, repeatable releases",
        "Dedicated teams can stay with your product owners across quarters",
        "Care and self-care surfaces share one customer truth",
        "Observability is part of the architecture conversation early",
      ],
      [
        "نبني لحمل مستمر وتغيير كتالوج متكرر لا لحركة عرض تجريبي",
        "عمل الواجهات والتكامل يطابق كيف تستهلك قنوات الاتصالات الخدمات فعلاً",
        "ممارسات السحابة وDevOps تدعم إصدارات موثوقة وقابلة للتكرار",
        "الفرق المخصصة يمكن أن تبقى مع مالكي منتجكم عبر الأرباع",
        "واجهات الرعاية والرعاية الذاتية تتشارك حقيقة عميل واحدة",
        "المراقبة جزء من حديث الهندسة مبكراً",
      ],
    ),
    faqs: [
      {
        q: L(
          "Can you work alongside our BSS/OSS vendors?",
          "هل يمكنكم العمل إلى جانب مورّدي BSS/OSS لدينا؟",
        ),
        a: L(
          "Yes. We typically build digital channels and API layers that integrate with existing BSS/OSS rather than claiming to replace the whole stack overnight.",
          "نعم. عادة نبني قنوات رقمية وطبقات واجهات تتكامل مع BSS/OSS القائم بدلاً من ادعاء استبدال المكدس بالكامل بين ليلة وضحاها.",
        ),
      },
      {
        q: L(
          "Do you provide dedicated telecom product teams?",
          "هل تقدّمون فرق منتجات اتصالات مخصصة؟",
        ),
        a: L(
          "Yes — dedicated development teams that work to your backlog and release cadence, with clear ownership and communication rhythms.",
          "نعم — فرق تطوير مخصصة تعمل وفق قائمة أعمالكم وإيقاع الإصدار، بملكية وإيقاعات تواصل واضحة.",
        ),
      },
      {
        q: L(
          "How do you handle peak campaign launches?",
          "كيف تتعاملون مع إطلاقات حملات الذروة؟",
        ),
        a: L(
          "With capacity planning, feature flags, caching, and load testing on the journeys that matter before go-live.",
          "بتخطيط طاقة وأعلام ميزات وتخزين مؤقت واختبار حمل على الرحلات المهمة قبل الإطلاق.",
        ),
      },
      {
        q: L(
          "Can partners consume our APIs securely?",
          "هل يمكن للشركاء استهلاك واجهاتنا بأمان؟",
        ),
        a: L(
          "Yes — credentials, scopes, throttling, and monitoring designed for external consumers and internal channels alike.",
          "نعم — اعتمادات ونطاقات وتحديد معدل ومراقبة مصمّمة للمستهلكين الخارجيين والقنوات الداخلية على حد سواء.",
        ),
      },
      {
        q: L(
          "Will you help with cloud migration of digital platforms?",
          "هل تساعدون في ترحيل المنصات الرقمية إلى السحابة؟",
        ),
        a: L(
          "Yes. Cloud and DevOps work can include containerization, pipelines, and environment strategy for customer-facing platforms.",
          "نعم. يمكن أن يشمل عمل السحابة وDevOps الحاويات والمسارات واستراتيجية البيئات للمنصات المواجهة للعملاء.",
        ),
      },
      {
        q: L(
          "How do care agents stay in sync with the app?",
          "كيف يبقى وكلاء الرعاية متزامنين مع التطبيق؟",
        ),
        a: L(
          "Shared customer and order services feed both self-care and agent tools so status and entitlements do not diverge.",
          "خدمات عملاء وطلبات مشتركة تغذّي أدوات الرعاية الذاتية والوكلاء حتى لا تختلف الحالة والاستحقاقات.",
        ),
      },
    ],
    ctaTitle: L(
      "Ready to Accelerate Your Telecom Digital Platforms?",
      "هل أنتم مستعدون لتسريع منصاتكم الرقمية للاتصالات؟",
    ),
    ctaBody: L(
      "Tell us about channels, billing touchpoints, and team needs — we will propose a delivery model.",
      "أخبرونا عن القنوات ونقاط الفوترة واحتياجات الفرق — وسنقترح نموذج تسليم.",
    ),
    relatedServices: [
      "custom-software-development",
      "api-development",
      "cloud-devops",
      "dedicated-development-teams",
    ],
  },
  {
    slug: "energy",
    icon: "Zap",
    title: L("Energy", "الطاقة"),
    shortTitle: L("Energy", "الطاقة"),
    heroTitle: L(
      "Energy Software & Operational Digital Solutions",
      "برمجيات الطاقة وحلول رقمية تشغيلية",
    ),
    tagline: L(
      "Operations software, IoT, and data for energy businesses.",
      "برمجيات تشغيل وإنترنت أشياء وبيانات لأعمال الطاقة.",
    ),
    description: L(
      "Energy-sector systems: operational software, sensor and IoT integration, and analytics that support how energy businesses run.",
      "أنظمة قطاع الطاقة: برمجيات تشغيل وتكامل مستشعرات وإنترنت أشياء وتحليلات تدعم تشغيل أعمال الطاقة.",
    ),
    metaTitle: L(
      "Energy Software & IoT Solutions | REPLA",
      "برمجيات الطاقة وحلول إنترنت الأشياء | REPLA",
    ),
    metaDescription: L(
      "Build energy operations software, IoT integrations, and analytics with REPLA. Custom systems and data pipelines for utilities, generation, and field energy teams.",
      "ابنِ برمجيات تشغيل طاقة وتكاملات إنترنت أشياء وتحليلات مع REPLA. أنظمة مخصصة ومسارات بيانات للمرافق والتوليد وفرق الطاقة الميدانية.",
    ),
    overview: L(
      "Energy businesses depend on assets, sensors, and field work that often sit outside the systems used for decisions. Late reporting and disconnected IoT paths create blind spots. REPLA builds operational software, sensor integrations, and analytics that bring energy operations into one actionable view.",
      "تعتمد أعمال الطاقة على أصول ومستشعرات وعمل ميداني غالباً ما يقع خارج الأنظمة المستخدمة للقرارات. التقارير المتأخرة ومسارات إنترنت الأشياء المنفصلة تخلق نقاط عمى. تبني REPLA برمجيات تشغيل وتكاملات مستشعرات وتحليلات تُدخل تشغيل الطاقة في عرض واحد قابل للتصرف.",
    ),
    challenges: LL(
      [
        "Assets and sensors off the core business system",
        "Reporting that arrives too late for operational decisions",
        "Field crews without a reliable mobile or IoT path",
        "Maintenance schedules disconnected from real asset condition",
        "SCADA and historian data hard to consume in modern apps",
        "Outage and incident timelines assembled manually",
        "Contractor work poorly visible to asset owners",
        "ESG and consumption reports built from fragile spreadsheets",
      ],
      [
        "أصول ومستشعرات خارج نظام الأعمال الأساسي",
        "تقارير تصل متأخرة جداً لقرارات التشغيل",
        "طواقم ميدانية دون مسار جوال أو إنترنت أشياء موثوق",
        "جداول صيانة منفصلة عن حالة الأصل الحقيقية",
        "بيانات SCADA والمؤرخات صعبة الاستهلاك في تطبيقات حديثة",
        "جداول انقطاع وحوادث تُجمَع يدوياً",
        "عمل مقاولين ضعيف الرؤية لمالكي الأصول",
        "تقارير ESG واستهلاك تُبنى من جداول هشة",
      ],
    ),
    solutions: LL(
      [
        "Operational dashboards and control-room adjacent apps",
        "IoT and sensor integration for assets and sites",
        "Field mobile tools for inspections and work orders",
        "Maintenance and asset management workflows",
        "Outage and incident timeline systems",
        "Data pipelines from SCADA/historians to analytics",
        "Contractor and vendor portals for field work",
        "Consumption and performance reporting suites",
        "Custom integrations with ERP and EAM systems",
      ],
      [
        "لوحات تشغيل وتطبيقات مجاورة لغرف التحكم",
        "تكامل إنترنت أشياء ومستشعرات للأصول والمواقع",
        "أدوات جوال ميدانية للمعاينات وأوامر العمل",
        "مسارات صيانة وإدارة أصول",
        "أنظمة جداول انقطاع وحوادث",
        "مسارات بيانات من SCADA/المؤرخات إلى التحليلات",
        "بوابات مقاولين ومورّدين للعمل الميداني",
        "حزم تقارير استهلاك وأداء",
        "تكاملات مخصصة مع أنظمة ERP وEAM",
      ],
    ),
    features: LL(
      [
        "Asset hierarchies with live telemetry attachments",
        "Threshold alarms with acknowledgment and escalation",
        "Inspection forms with photo and GPS evidence",
        "Work-order lifecycle from detect to close",
        "Shift handover notes tied to open incidents",
        "Map views of sites, feeders, or generation units",
        "Role-based access for control, field, and corporate users",
        "Time-series charts for operators and analysts",
        "Exportable regulatory and management report packs",
      ],
      [
        "تسلسلات أصول مع مرفقات قياس عن بعد حية",
        "إنذارات عتبة مع إقرار وتصعيد",
        "نماذج معاينة مع أدلة صور وGPS",
        "دورة حياة أمر عمل من الاكتشاف إلى الإغلاق",
        "ملاحظات تسليم وردية مربوطة بحوادث مفتوحة",
        "عروض خرائط للمواقع أو المغذيات أو وحدات التوليد",
        "صلاحيات حسب الدور لمستخدمي التحكم والميدان والشركة",
        "مخططات سلاسل زمنية للمشغّلين والمحللين",
        "حزم تقارير تنظيمية وإدارية قابلة للتصدير",
      ],
    ),
    aiIntro: L(
      "Energy AI is strongest for predictive maintenance, anomaly detection, and forecasting demand or generation — with operators remaining in control of critical actions.",
      "يكون ذكاء الطاقة الأقوى في الصيانة التنبؤية واكتشاف الشذوذ والتنبؤ بالطلب أو التوليد — مع بقاء المشغّلين متحكمين في الإجراءات الحرجة.",
    ),
    aiUseCases: LL(
      [
        "Predictive maintenance scoring from telemetry trends",
        "Anomaly detection on load, vibration, or temperature series",
        "Forecast short-term demand or generation for planning",
        "Prioritize inspection routes by risk and travel cost",
        "Summarize incident timelines for post-event reviews",
        "Assist analysts extracting insights from large historian extracts",
      ],
      [
        "تسجيل صيانة تنبؤية من اتجاهات القياس عن بعد",
        "اكتشاف شذوذ في سلاسل الحمل أو الاهتزاز أو الحرارة",
        "التنبؤ بالطلب أو التوليد قصير الأجل للتخطيط",
        "ترتيب أولوية مسارات المعاينة حسب المخاطر وتكلفة التنقل",
        "تلخيص جداول الحوادث لمراجعات ما بعد الحدث",
        "مساعدة المحللين على استخراج رؤى من مستخرجات مؤرخات كبيرة",
      ],
    ),
    technologies: [
      "Python",
      "FastAPI",
      "TypeScript",
      "React",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Node.js",
    ],
    whyRepla: LL(
      [
        "We connect sensors to workflows so telemetry becomes maintenance action",
        "Field tools respect outdoor and offline energy work realities",
        "Analytics are grounded in the operational questions your teams ask",
        "SCADA and historian data is consumed carefully within OT boundaries",
        "Incident timelines reduce manual assembly after events",
        "Phased pilots on a site or asset class de-risk wider rollout",
      ],
      [
        "نربط المستشعرات بالمسارات حتى يصبح القياس عن بعد إجراء صيانة",
        "أدوات الميدان تحترم واقع عمل الطاقة في الخارج ودون اتصال",
        "التحليلات مبنية على أسئلة التشغيل التي تطرحها فرقكم",
        "بيانات SCADA والمؤرخات تُستهلك بعناية ضمن حدود التشغيل",
        "جداول الحوادث تقلّل التجميع اليدوي بعد الأحداث",
        "تجارب مرحلية على موقع أو فئة أصول تقلّل مخاطر النشر الأوسع",
      ],
    ),
    faqs: [
      {
        q: L(
          "Can you integrate with our SCADA environment?",
          "هل يمكنكم التكامل مع بيئة SCADA لدينا؟",
        ),
        a: L(
          "Yes, through approved interfaces and network paths defined with your OT team — we do not bypass plant or grid security boundaries.",
          "نعم، عبر واجهات ومسارات شبكة معتمدة تُعرَّف مع فريق التشغيل لديكم — لا نتجاوز حدود أمن المصنع أو الشبكة.",
        ),
      },
      {
        q: L(
          "Do you build utility customer portals?",
          "هل تبنون بوابات عملاء للمرافق؟",
        ),
        a: L(
          "We can, when in scope — often alongside internal ops systems so customer-facing status matches field reality.",
          "يمكننا ذلك عندما يكون ضمن النطاق — غالباً إلى جانب أنظمة تشغيل داخلية حتى تطابق الحالة المواجهة للعميل واقع الميدان.",
        ),
      },
      {
        q: L(
          "How do field crews submit inspections?",
          "كيف تقدّم الطواقم الميدانية المعاينات؟",
        ),
        a: L(
          "Via mobile forms with photos, GPS, and offline sync, feeding the same asset and work-order system used in the office.",
          "عبر نماذج جوال بصور وGPS ومزامنة دون اتصال، تغذّي نفس نظام الأصول وأوامر العمل المستخدم في المكتب.",
        ),
      },
      {
        q: L(
          "Can contractors use limited views?",
          "هل يمكن للمقاولين استخدام عروض محدودة؟",
        ),
        a: L(
          "Yes — portals scoped to assigned assets, work packs, and evidence submission without exposing the full operational estate.",
          "نعم — بوابات محدودة بالأصول المعيّنة وحزم العمل وتقديم الأدلة دون تعريض كامل الحوزة التشغيلية.",
        ),
      },
      {
        q: L(
          "What data engineering do you typically deliver?",
          "ما هندسة البيانات التي تسلّمونها عادة؟",
        ),
        a: L(
          "Ingestion, cleaning, time-series storage patterns, and dashboards or exports that operators and analysts can trust.",
          "استيعاب وتنظيف وأنماط تخزين سلاسل زمنية ولوحات أو صادرات يمكن للمشغّلين والمحللين الوثوق بها.",
        ),
      },
      {
        q: L(
          "Is AI required for an energy project?",
          "هل الذكاء الاصطناعي مطلوب لمشروع طاقة؟",
        ),
        a: L(
          "No. Many programs start with reliable telemetry and workflows; AI is added where prediction or triage clearly helps.",
          "لا. كثير من البرامج تبدأ بقياس عن بعد ومسارات موثوقة؛ ويُضاف الذكاء الاصطناعي حيث يساعد التوقع أو الفرز بوضوح.",
        ),
      },
    ],
    ctaTitle: L(
      "Ready to Bring Energy Operations Online?",
      "هل أنتم مستعدون لإدخال عمليات الطاقة إلى المنصة؟",
    ),
    ctaBody: L(
      "Walk us through an asset class or site — we will propose IoT, software, and data next steps.",
      "أرونا فئة أصول أو موقعاً — وسنقترح الخطوات التالية لإنترنت الأشياء والبرمجيات والبيانات.",
    ),
    relatedServices: [
      "iot-embedded-systems",
      "custom-software-development",
      "data-engineering-analytics",
    ],
  },
  {
    slug: "automotive",
    icon: "Car",
    title: L("Automotive", "السيارات"),
    shortTitle: L("Automotive", "السيارات"),
    heroTitle: L(
      "Automotive Software & Digital Retail Solutions",
      "برمجيات السيارات وحلول البيع الرقمي",
    ),
    tagline: L(
      "Dealer, operations, and digital products for automotive.",
      "منتجات وكلاء وعمليات ورقمية للسيارات.",
    ),
    description: L(
      "Software for automotive businesses — customer platforms, internal operations, and integrations across retail and service.",
      "برمجيات لأعمال السيارات — منصات عملاء وعمليات داخلية وتكاملات عبر البيع والخدمة.",
    ),
    metaTitle: L(
      "Automotive Software Development | REPLA",
      "تطوير برمجيات السيارات | REPLA",
    ),
    metaDescription: L(
      "Build dealer portals, service apps, and automotive digital platforms with REPLA. Custom software, web, mobile, and APIs across retail and aftersales.",
      "ابنِ بوابات وكلاء وتطبيقات خدمة ومنصات سيارات رقمية مع REPLA. برمجيات مخصصة وويب وجوال وواجهات عبر البيع وما بعد البيع.",
    ),
    overview: L(
      "Automotive retail and service lose customers when showroom, workshop, and digital channels disagree. Buyers expect online discovery and transparent service status. REPLA builds automotive software that keeps inventory, leads, appointments, and aftersales connected.",
      "يخسر بيع وخدمة السيارات العملاء عندما تختلف صالة العرض والورشة والقنوات الرقمية. يتوقع المشترون اكتشافاً عبر الإنترنت وحالة خدمة شفافة. تبني REPLA برمجيات سيارات تبقي المخزون والعملاء المحتملين والمواعيد وما بعد البيع متصلة.",
    ),
    challenges: LL(
      [
        "Showroom, service, and digital channels out of sync",
        "Customer apps that do not match dealer operations",
        "Inventory and option data unreliable across sites",
        "Lead follow-up delayed between marketing and sales desks",
        "Service appointments booked without workshop capacity truth",
        "Parts availability invisible to advisors and customers",
        "Warranty and campaign work tracked in disconnected tools",
        "OEM and DMS integrations that break under daily use",
      ],
      [
        "صالة عرض وخدمة وقنوات رقمية غير متزامنة",
        "تطبيقات عملاء لا تطابق عمليات الوكيل",
        "بيانات مخزون وخيارات غير موثوقة عبر المواقع",
        "متابعة عملاء محتملين تتأخر بين التسويق ومكاتب المبيعات",
        "مواعيد خدمة تُحجز دون حقيقة طاقة الورشة",
        "توفر قطع غيار غير مرئي للمستشارين والعملاء",
        "أعمال ضمان وحملات تُتتبع في أدوات منفصلة",
        "تكاملات مصنّع ونظام إدارة الوكيل تنكسر تحت الاستخدام اليومي",
      ],
    ),
    solutions: LL(
      [
        "Dealer and brand websites with live inventory",
        "Lead and sales pipeline applications",
        "Service booking and workshop scheduling platforms",
        "Customer mobile apps for ownership and service",
        "Parts and accessory catalog experiences",
        "Aftersales portals for history and invoices",
        "API integrations with DMS and OEM systems",
        "Multi-location dealer group portals",
        "Campaign and recall workflow tooling",
      ],
      [
        "مواقع وكلاء وعلامات بمخزون حي",
        "تطبيقات خط أنابيب عملاء محتملين ومبيعات",
        "منصات حجز خدمة وجدولة ورش",
        "تطبيقات جوال للعملاء للملكية والخدمة",
        "تجارب كتالوج قطع وإكسسوارات",
        "بوابات ما بعد البيع للسجل والفواتير",
        "تكاملات واجهات مع أنظمة إدارة الوكيل والمصنّع",
        "بوابات مجموعات وكلاء متعددة المواقع",
        "أدوات مسارات حملات واستدعاءات",
      ],
    ),
    features: LL(
      [
        "VIN and stock-number inventory with media and options",
        "Test-drive and showroom appointment scheduling",
        "Trade-in inquiry capture with appraisal handoff",
        "Service lane check-in with digital vehicle inspection",
        "Advisor screens showing RO status and parts holds",
        "Push notifications for service readiness and recalls",
        "Loyalty and service package tracking",
        "Multi-brand catalog rules for dealer groups",
        "Role permissions for sales, service, and F&I teams",
      ],
      [
        "مخزون برقم هيكل ورقم مخزون مع وسائط وخيارات",
        "جدولة مواعيد تجربة قيادة وصالة عرض",
        "التقاط استفسار مقايضة مع تسليم تقييم",
        "تسجيل دخول مسار خدمة مع معاينة مركبة رقمية",
        "شاشات مستشار تعرض حالة أمر الإصلاح واحتجاز القطع",
        "إشعارات دفع لجاهزية الخدمة والاستدعاءات",
        "تتبع ولاء وحزم خدمة",
        "قواعد كتالوج متعدد العلامات لمجموعات الوكلاء",
        "صلاحيات أدوار لفرق المبيعات والخدمة والتمويل والتأمين",
      ],
    ),
    aiIntro: L(
      "Automotive AI helps match shoppers to inventory, prioritize leads, and speed service intake — while pricing and repair authorization stay with your teams.",
      "يساعد ذكاء السيارات على مطابقة المتسوقين بالمخزون وترتيب أولوية العملاء المحتملين وتسريع استقبال الخدمة — بينما يبقى التسعير وتفويض الإصلاح لدى فرقكم.",
    ),
    aiUseCases: LL(
      [
        "Recommend vehicles from shopper preferences and browse behavior",
        "Score and route inbound leads to the right desk",
        "Draft listing copy from stock attributes for marketing review",
        "Assist advisors with common diagnostic FAQ suggestions",
        "Predict no-shows for service slots to improve utilization",
        "Summarize inspection findings for customer-friendly explanations",
      ],
      [
        "اقتراح مركبات من تفضيلات المتسوق وسلوك التصفح",
        "تسجيل وتوجيه العملاء المحتملين الواردين إلى المكتب الصحيح",
        "مسودات نصوص عروض من سمات المخزون لمراجعة التسويق",
        "مساعدة المستشارين باقتراحات أسئلة تشخيص شائعة",
        "توقع عدم الحضور لفتحات الخدمة لتحسين الاستخدام",
        "تلخيص نتائج المعاينة لشروحات مفهومة للعميل",
      ],
    ),
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Flutter",
      "AWS",
      "Docker",
    ],
    whyRepla: LL(
      [
        "Retail and aftersales journeys are designed as one ownership experience",
        "Inventory truth drives both the website and sales tools",
        "Service booking respects workshop capacity, not wishful calendars",
        "DMS and OEM integrations are treated as daily-critical paths",
        "Mobile ownership apps reduce status calls to the dealer",
        "Multi-location groups get shared platforms with local control",
      ],
      [
        "رحلات البيع وما بعد البيع تُصمَّم كتجربة ملكية واحدة",
        "حقيقة المخزون تقود الموقع وأدوات المبيعات معاً",
        "حجز الخدمة يحترم طاقة الورشة لا تقاويم بالتمنّي",
        "تكاملات نظام إدارة الوكيل والمصنّع تُعامل كمسارات حرجة يومياً",
        "تطبيقات ملكية جوال تقلّل مكالمات الحالة إلى الوكيل",
        "مجموعات متعددة المواقع تحصل على منصات مشتركة بتحكم محلي",
      ],
    ),
    faqs: [
      {
        q: L(
          "Can you sync with our dealer management system?",
          "هل يمكنكم المزامنة مع نظام إدارة الوكيل لدينا؟",
        ),
        a: L(
          "Yes. We integrate inventory, customers, and service events through the APIs or exchange methods your DMS supports.",
          "نعم. نتكامل المخزون والعملاء وأحداث الخدمة عبر الواجهات أو طرق التبادل التي يدعمها نظام إدارة الوكيل لديكم.",
        ),
      },
      {
        q: L(
          "Do you build customer apps for service status?",
          "هل تبنون تطبيقات عملاء لحالة الخدمة؟",
        ),
        a: L(
          "Yes — booking, RO status, and notifications fed by the same workshop systems advisors use.",
          "نعم — حجز وحالة أمر إصلاح وإشعارات تُغذّى بنفس أنظمة الورشة التي يستخدمها المستشارون.",
        ),
      },
      {
        q: L(
          "Can one platform serve a multi-brand dealer group?",
          "هل يمكن لمنصة واحدة خدمة مجموعة وكلاء متعددة العلامات؟",
        ),
        a: L(
          "Yes, with brand-specific catalogs and permissions while sharing core lead and service capabilities.",
          "نعم، بكتالوجات وصلاحيات خاصة بالعلامة مع مشاركة قدرات العملاء المحتملين والخدمة الأساسية.",
        ),
      },
      {
        q: L(
          "How do you keep website stock accurate?",
          "كيف تحافظون على دقة مخزون الموقع؟",
        ),
        a: L(
          "By treating the inventory service as the source of truth and publishing from it — not maintaining a separate brochure database.",
          "بمعاملة خدمة المخزون كمصدر الحقيقة والنشر منها — لا بصيانة قاعدة بيانات كتيّب منفصلة.",
        ),
      },
      {
        q: L(
          "Can sales and service share customer history?",
          "هل يمكن للمبيعات والخدمة مشاركة سجل العميل؟",
        ),
        a: L(
          "Yes when privacy and role rules allow — a unified profile reduces repeat questions and missed opportunities.",
          "نعم عندما تسمح قواعد الخصوصية والأدوار — ملف موحّد يقلّل الأسئلة المتكررة والفرص الضائعة.",
        ),
      },
      {
        q: L(
          "What about recall and campaign workflows?",
          "ماذا عن مسارات الاستدعاء والحملات؟",
        ),
        a: L(
          "We can implement outreach lists, booking priority, and completion tracking tied to VIN populations you define.",
          "يمكننا تنفيذ قوائم تواصل وأولوية حجز وتتبع إكمال مربوط بمجموعات أرقام الهيكل التي تحددونها.",
        ),
      },
    ],
    ctaTitle: L(
      "Ready to Align Your Automotive Retail and Service?",
      "هل أنتم مستعدون لمواءمة بيع وخدمة السيارات لديكم؟",
    ),
    ctaBody: L(
      "Share your dealer stack and customer journeys — we will propose a connected digital plan.",
      "شاركوا بنية الوكيل ورحلات العملاء — وسنقترح خطة رقمية متصلة.",
    ),
    relatedServices: [
      "custom-software-development",
      "web-development",
      "mobile-app-development",
      "api-development",
    ],
  },
  {
    slug: "insurance",
    icon: "ShieldCheck",
    title: L("Insurance", "التأمين"),
    shortTitle: L("Insurance", "التأمين"),
    heroTitle: L(
      "Insurance Software & Digital Policy Platforms",
      "برمجيات التأمين ومنصات وثائق رقمية",
    ),
    tagline: L(
      "Policy, claims-adjacent, and secure customer systems.",
      "أنظمة وثائق ومطالبات وعملاء آمنة.",
    ),
    description: L(
      "Insurance software with an emphasis on secure applications, APIs, QA, and customer or broker portals.",
      "برمجيات تأمين مع التركيز على تطبيقات آمنة وواجهات وضمان جودة وبوابات عملاء أو وسطاء.",
    ),
    metaTitle: L(
      "Insurance Software Development | REPLA",
      "تطوير برمجيات التأمين | REPLA",
    ),
    metaDescription: L(
      "Build secure insurance portals, policy workflows, and broker platforms with REPLA. Custom software, web, cybersecurity, and QA for insurers and intermediaries.",
      "ابنِ بوابات تأمين آمنة ومسارات وثائق ومنصات وسطاء مع REPLA. برمجيات مخصصة وويب وأمن سيبراني وضمان جودة لشركات التأمين والوسطاء.",
    ),
    overview: L(
      "Insurers and intermediaries need digital journeys that complete real policy and service requests — not portals that stop at marketing. Security and testing must keep pace with product change. REPLA builds insurance software with secure applications, broker and customer portals, and disciplined QA.",
      "تحتاج شركات التأمين والوسطاء إلى رحلات رقمية تُكمل طلبات وثائق وخدمة حقيقية — لا بوابات تتوقف عند التسويق. يجب أن يواكب الأمن والاختبار تغيّر المنتج. تبني REPLA برمجيات تأمين بتطبيقات آمنة وبوابات وسطاء وعملاء وضمان جودة منضبط.",
    ),
    challenges: LL(
      [
        "Policy and customer data split across legacy tools",
        "Portals that cannot complete a real request end to end",
        "Security and testing lagging every product change",
        "Broker and agent portals with inconsistent commission views",
        "Claims intake that loses documents and status clarity",
        "Product configuration too rigid for new riders and bundles",
        "KYC and underwriting evidence scattered across email",
        "Partner APIs unreliable for quotes and policy status",
      ],
      [
        "بيانات وثائق وعملاء موزعة على أدوات قديمة",
        "بوابات لا تكمل طلباً حقيقياً من الطرف إلى الطرف",
        "أمن واختبار يتأخران عن كل تغيّر منتج",
        "بوابات وسطاء ووكلاء بعروض عمولات غير متسقة",
        "استقبال مطالبات يفقد المستندات ووضوح الحالة",
        "تهيئة منتج جامدة جداً للإضافات والحزم الجديدة",
        "أدلة تحقق واكتتاب مبعثرة عبر البريد",
        "واجهات شركاء غير موثوقة لعروض الأسعار وحالة الوثيقة",
      ],
    ),
    solutions: LL(
      [
        "Customer and broker self-service portals",
        "Quote, bind, and policy servicing workflows",
        "Claims intake and status applications",
        "Secure document vaults for underwriting and claims",
        "Product and rating configuration services",
        "API layers for partners and aggregators",
        "Cybersecurity hardening for insurance applications",
        "Automated QA around critical policy and payment paths",
        "Agent and branch operations dashboards",
      ],
      [
        "بوابات خدمة ذاتية للعملاء والوسطاء",
        "مسارات عرض سعر وربط وخدمة وثائق",
        "تطبيقات استقبال مطالبات وحالة",
        "خزائن مستندات آمنة للاكتتاب والمطالبات",
        "خدمات تهيئة منتج وتسعير",
        "طبقات واجهات للشركاء والمجمّعين",
        "تعزيز أمن سيبراني لتطبيقات التأمين",
        "ضمان جودة آلي حول مسارات وثائق ودفع حرجة",
        "لوحات تشغيل للوكلاء والفروع",
      ],
    ),
    features: LL(
      [
        "Guided quote journeys with validation and referral rules",
        "Policy document generation and secure delivery",
        "Endorsement and renewal request workflows",
        "Broker hierarchies with commission reporting views",
        "Claims FNOL forms with media and location capture",
        "Status timelines for customers and intermediaries",
        "Role-based access across underwriting, claims, and sales",
        "Audit trails for sensitive policy and payment actions",
        "Multi-language customer communications templates",
      ],
      [
        "رحلات عرض سعر موجّهة بقواعد تحقق وإحالة",
        "إصدار مستندات وثائق وتسليم آمن",
        "مسارات طلبات ملحقات وتجديد",
        "تسلسلات وسطاء بعروض تقارير عمولات",
        "نماذج إخطار مطالبة أولي مع التقاط وسائط وموقع",
        "جداول حالة للعملاء والوسطاء",
        "صلاحيات حسب الدور عبر الاكتتاب والمطالبات والمبيعات",
        "مسارات تدقيق لإجراءات وثائق ودفع حساسة",
        "قوالب تواصل عملاء متعددة اللغات",
      ],
    ),
    aiIntro: L(
      "Insurance AI accelerates intake, document classification, and customer guidance — while underwriting and claims decisions remain with authorized humans.",
      "يُسرّع ذكاء التأمين الاستقبال وتصنيف المستندات وتوجيه العملاء — بينما تبقى قرارات الاكتتاب والمطالبات لدى بشر مخوّلين.",
    ),
    aiUseCases: LL(
      [
        "Classify uploaded documents for underwriting and claims queues",
        "Draft customer status explanations from structured case data",
        "Flag incomplete FNOL submissions before routing",
        "Assist agents with policy FAQ answers from approved content",
        "Prioritize claims workbaskets by complexity signals",
        "Detect anomalous quote or claim patterns for review",
      ],
      [
        "تصنيف مستندات مرفوعة لطوابير الاكتتاب والمطالبات",
        "مسودات شروحات حالة للعملاء من بيانات حالة منظمة",
        "الإشارة إلى إخطارات مطالبة أولية غير مكتملة قبل التوجيه",
        "مساعدة الوكلاء بإجابات أسئلة وثائق من محتوى معتمد",
        "ترتيب أولوية سلال عمل المطالبات حسب إشارات التعقيد",
        "اكتشاف أنماط عرض سعر أو مطالبة شاذة للمراجعة",
      ],
    ),
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Python",
      "AWS",
      "Docker",
    ],
    whyRepla: LL(
      [
        "Security and QA are built into insurance delivery, not optional extras",
        "Portals are designed to complete real policy and service tasks",
        "Broker and customer experiences share consistent status truth",
        "API work supports partners without weakening access controls",
        "Product configuration is treated as a changeable business capability",
        "Auditability supports the oversight insurance organizations need",
      ],
      [
        "الأمن وضمان الجودة جزء من تسليم التأمين لا إضافات اختيارية",
        "البوابات تُصمَّم لإكمال مهام وثائق وخدمة حقيقية",
        "تجارب الوسطاء والعملاء تتشارك حقيقة حالة متسقة",
        "عمل الواجهات يدعم الشركاء دون إضعاف ضوابط الوصول",
        "تهيئة المنتج تُعامل كقدرة أعمال قابلة للتغيير",
        "قابلية التدقيق تدعم الرقابة التي تحتاجها مؤسسات التأمين",
      ],
    ),
    faqs: [
      {
        q: L(
          "Do you replace our core policy admin system?",
          "هل تستبدلون نظام إدارة الوثائق الأساسي لدينا؟",
        ),
        a: L(
          "Usually we build portals, workflows, and APIs around the core. Replacement is only when that is the explicit program goal.",
          "عادة نبني بوابات ومسارات وواجهات حول النظام الأساسي. الاستبدال فقط عندما يكون ذلك هدف البرنامج الصريح.",
        ),
      },
      {
        q: L(
          "Can brokers and customers use different portals?",
          "هل يمكن للوسطاء والعملاء استخدام بوابات مختلفة؟",
        ),
        a: L(
          "Yes — separate experiences with shared services underneath so quotes, policies, and status stay aligned.",
          "نعم — تجارب منفصلة بخدمات مشتركة تحتها حتى تبقى عروض الأسعار والوثائق والحالة متوافقة.",
        ),
      },
      {
        q: L(
          "How do you approach insurance cybersecurity?",
          "كيف تتعاملون مع الأمن السيبراني للتأمين؟",
        ),
        a: L(
          "Threat-aware design, least privilege, secure session handling, reviews, and QA on sensitive flows — aligned to your policies and hosting model.",
          "تصميم واعٍ بالتهديدات وأقل صلاحيات ومعالجة جلسات آمنة ومراجعات وضمان جودة على التدفقات الحساسة — متوافق مع سياساتكم ونموذج الاستضافة.",
        ),
      },
      {
        q: L(
          "Can you integrate with quote aggregators?",
          "هل يمكنكم التكامل مع مجمّعي عروض الأسعار؟",
        ),
        a: L(
          "Yes, via APIs with clear authentication, rate limits, and monitoring for partner channels.",
          "نعم، عبر واجهات بمصادقة واضحة وحدود معدل ومراقبة لقنوات الشركاء.",
        ),
      },
      {
        q: L(
          "Do you automate testing for policy journeys?",
          "هل تؤتمتون اختبار رحلات الوثائق؟",
        ),
        a: L(
          "Yes. Critical quote, bind, payment, and servicing paths get automated regression coverage as part of delivery.",
          "نعم. تحصل مسارات عرض السعر والربط والدفع والخدمة الحرجة على تغطية انحدار آلية كجزء من التسليم.",
        ),
      },
      {
        q: L(
          "Will AI decide claims outcomes?",
          "هل سيقرّر الذكاء الاصطناعي نتائج المطالبات؟",
        ),
        a: L(
          "No. We use AI to assist intake and triage; claim and underwriting decisions stay with authorized staff and your rules engines.",
          "لا. نستخدم الذكاء الاصطناعي لمساعدة الاستقبال والفرز؛ وتبقى قرارات المطالبة والاكتتاب لدى موظفين مخوّلين ومحركات قواعدكم.",
        ),
      },
    ],
    ctaTitle: L(
      "Ready to Modernize Your Insurance Digital Journeys?",
      "هل أنتم مستعدون لتحديث رحلات التأمين الرقمية لديكم؟",
    ),
    ctaBody: L(
      "Outline your policy and portal priorities — we will propose a secure build approach.",
      "حدّدوا أولويات الوثائق والبوابات — وسنقترح نهج بناء آمناً.",
    ),
    relatedServices: [
      "custom-software-development",
      "web-development",
      "cybersecurity",
      "quality-assurance",
    ],
  },
  {
    slug: "ai-saas",
    icon: "Sparkles",
    title: L("AI & SaaS", "الذكاء الاصطناعي و SaaS"),
    shortTitle: L("AI & SaaS", "AI و SaaS"),
    heroTitle: L(
      "AI & SaaS Product Engineering Solutions",
      "حلول هندسة منتجات الذكاء الاصطناعي و SaaS",
    ),
    tagline: L(
      "Product companies that need AI inside a multi-tenant SaaS.",
      "شركات منتجات تحتاج ذكاء اصطناعياً داخل SaaS متعدد المستأجرين.",
    ),
    description: L(
      "SaaS product development and AI integration for product companies — agents, automation, and the cloud path to run them.",
      "تطوير منتجات SaaS وتكامل ذكاء اصطناعي لشركات المنتجات — وكلاء وأتمتة ومسار سحابي لتشغيلها.",
    ),
    metaTitle: L(
      "AI & SaaS Product Development | REPLA",
      "تطوير منتجات الذكاء الاصطناعي و SaaS | REPLA",
    ),
    metaDescription: L(
      "Build multi-tenant SaaS and AI product features with REPLA. Custom software, intelligent automation, cloud DevOps, and UI/UX for product companies.",
      "ابنِ SaaS متعدد المستأجرين وميزات منتجات ذكاء اصطناعي مع REPLA. برمجيات مخصصة وأتمتة ذكية وDevOps سحابي وتصميم واجهات لشركات المنتجات.",
    ),
    overview: L(
      "SaaS companies need a product core that can host AI features safely across tenants — without blowing cloud cost or breaking isolation. Agents and automation only matter if they reach the tenant data model cleanly. REPLA engineers SaaS platforms and AI capabilities with tenancy, design systems, and cloud delivery in mind.",
      "تحتاج شركات SaaS إلى نواة منتج تستطيع استضافة ميزات ذكاء اصطناعي بأمان عبر المستأجرين — دون تفجير تكلفة السحابة أو كسر العزل. لا تهم الوكلاء والأتمتة إلا إذا وصلت إلى نموذج بيانات المستأجر بوضوح. تُهندس REPLA منصات SaaS وقدرات ذكاء اصطناعي مع تعدد المستأجرين وأنظمة التصميم والتسليم السحابي.",
    ),
    challenges: LL(
      [
        "A SaaS core that cannot host AI features safely per tenant",
        "Agents that never reach the tenant’s data model securely",
        "Cloud cost and tenancy issues after the first customers",
        "Design systems lagging a rapidly expanding product surface",
        "Feature flags and entitlements too weak for packaging AI",
        "Eval and observability missing for model-backed features",
        "Onboarding friction that kills activation after signup",
        "Release pipelines too slow for competitive SaaS cadence",
      ],
      [
        "نواة SaaS لا تحتمل ميزات ذكاء اصطناعي بأمان لكل مستأجر",
        "وكلاء لا يصلون إلى نموذج بيانات المستأجر بأمان",
        "مشاكل تكلفة سحابة وتعدد مستأجرين بعد أوائل العملاء",
        "أنظمة تصميم تتأخر عن سطح منتج يتوسع بسرعة",
        "أعلام ميزات واستحقاقات أضعف من أن تحزم الذكاء الاصطناعي",
        "تقييم ومراقبة مفقودان للميزات المدعومة بالنماذج",
        "احتكاك انضمام يقتل التفعيل بعد التسجيل",
        "مسارات إصدار أبطأ من إيقاع SaaS التنافسي",
      ],
    ),
    solutions: LL(
      [
        "Multi-tenant SaaS product engineering",
        "AI agents and LLM feature integration",
        "Workflow automation inside the product",
        "Cloud and DevOps for scalable SaaS delivery",
        "Design systems and product UI/UX",
        "Entitlements, billing hooks, and packaging surfaces",
        "Tenant-aware data access layers for AI tools",
        "Evaluation, logging, and feedback loops for AI features",
        "Onboarding and activation product experiences",
      ],
      [
        "هندسة منتجات SaaS متعددة المستأجرين",
        "تكامل وكلاء ذكاء اصطناعي وميزات نماذج لغة",
        "أتمتة سير عمل داخل المنتج",
        "سحابة وDevOps لتسليم SaaS قابل للتوسع",
        "أنظمة تصميم وتجربة واجهات المنتج",
        "استحقاقات وخطافات فوترة وواجهات تغليف",
        "طبقات وصول بيانات واعية بالمستأجر لأدوات الذكاء الاصطناعي",
        "تقييم وتسجيل وحلقات ملاحظات لميزات الذكاء الاصطناعي",
        "تجارب منتج للانضمام والتفعيل",
      ],
    ),
    features: LL(
      [
        "Tenant isolation patterns for data and AI contexts",
        "Feature flags and plan-based AI entitlements",
        "In-product agent consoles with tool permissions",
        "Prompt and policy configuration for admin roles",
        "Usage metering hooks for AI and API consumption",
        "Design-system components for dense SaaS screens",
        "Audit logs for tenant admin and AI actions",
        "Environment promotion with preview deployments",
        "Customer feedback capture on AI outputs",
      ],
      [
        "أنماط عزل مستأجر للبيانات وسياقات الذكاء الاصطناعي",
        "أعلام ميزات واستحقاقات ذكاء اصطناعي حسب الخطة",
        "لوحات وكلاء داخل المنتج بصلاحيات أدوات",
        "تهيئة موجّهات وسياسات لأدوار الإدارة",
        "خطافات قياس استخدام لاستهلاك الذكاء الاصطناعي والواجهات",
        "مكوّنات نظام تصميم لشاشات SaaS الكثيفة",
        "سجلات تدقيق لإجراءات إدارة المستأجر والذكاء الاصطناعي",
        "ترقية بيئات مع نشرات معاينة",
        "التقاط ملاحظات عملاء على مخرجات الذكاء الاصطناعي",
      ],
    ),
    aiIntro: L(
      "We treat AI as a product capability with tenancy, permissions, evals, and cost controls — not a demo chatbot bolted onto the sidebar.",
      "نتعامل مع الذكاء الاصطناعي كقدرة منتج مع تعدد مستأجرين وصلاحيات وتقييمات وضوابط تكلفة — لا روبوت دردشة تجريبي مثبت على الشريط الجانبي.",
    ),
    aiUseCases: LL(
      [
        "Tenant-scoped assistants that answer from customer data with permissions",
        "Workflow agents that draft and propose actions for human approval",
        "Document and ticket summarization inside the SaaS workspace",
        "Smart onboarding guides that adapt to setup progress",
        "Anomaly alerts on product usage for customer success teams",
        "Internal admin copilots for configuration and support triage",
      ],
      [
        "مساعدون بنطاق المستأجر يجيبون من بيانات العميل مع صلاحيات",
        "وكلاء سير عمل يعدّون ويقترحون إجراءات لموافقة بشرية",
        "تلخيص مستندات وتذاكر داخل مساحة عمل SaaS",
        "أدلة انضمام ذكية تتكيّف مع تقدّم الإعداد",
        "تنبيهات شذوذ على استخدام المنتج لفرق نجاح العملاء",
        "مساعدو إدارة داخليون للتهيئة وفرز الدعم",
      ],
    ),
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "PostgreSQL",
      "AWS",
      "Kubernetes",
    ],
    whyRepla: LL(
      [
        "We engineer tenancy and permissions before polishing AI demos",
        "Cloud cost and observability are part of the product conversation",
        "Design systems keep expanding SaaS surfaces coherent",
        "AI features ship with eval and feedback loops, not hope",
        "Packaging and entitlements make AI monetizable and controllable",
        "Dedicated product engineering cadence fits SaaS roadmaps",
      ],
      [
        "نُهندس تعدد المستأجرين والصلاحيات قبل تلميع عروض الذكاء الاصطناعي",
        "تكلفة السحابة والمراقبة جزء من حديث المنتج",
        "أنظمة التصميم تبقي أسطح SaaS المتوسعة متماسكة",
        "ميزات الذكاء الاصطناعي تُطلَق مع تقييم وحلقات ملاحظات لا أمل",
        "التغليف والاستحقاقات تجعل الذكاء الاصطناعي قابلاً للتحصيل والتحكم",
        "إيقاع هندسة منتج مخصص يناسب خرائط طريق SaaS",
      ],
    ),
    faqs: [
      {
        q: L(
          "Can you add AI to an existing SaaS codebase?",
          "هل يمكنكم إضافة ذكاء اصطناعي إلى قاعدة كود SaaS قائمة؟",
        ),
        a: L(
          "Yes. We assess tenancy, data access, and UX insertion points, then ship AI features behind flags with proper isolation.",
          "نعم. نقيّم تعدد المستأجرين ووصول البيانات ونقاط إدخال التجربة، ثم نطلق ميزات ذكاء اصطناعي خلف أعلام بعزل مناسب.",
        ),
      },
      {
        q: L(
          "How do you prevent cross-tenant data leakage with AI?",
          "كيف تمنعون تسرّب بيانات بين المستأجرين مع الذكاء الاصطناعي؟",
        ),
        a: L(
          "Through tenant-scoped retrieval, strict tool permissions, and architecture reviews focused on isolation — not prompt hope alone.",
          "عبر استرجاع بنطاق المستأجر وصلاحيات أدوات صارمة ومراجعات هندسة تركّز على العزل — لا أمل الموجّهات وحده.",
        ),
      },
      {
        q: L(
          "Do you build the full SaaS product or only AI modules?",
          "هل تبنون منتج SaaS كاملاً أم وحدات ذكاء اصطناعي فقط؟",
        ),
        a: L(
          "Either. We can own core product engineering or integrate AI into a product your team already runs.",
          "أي منهما. يمكننا امتلاك هندسة المنتج الأساسية أو دمج الذكاء الاصطناعي في منتج تديره فرقكم بالفعل.",
        ),
      },
      {
        q: L(
          "How do you control AI cloud spend?",
          "كيف تتحكمون في إنفاق سحابة الذكاء الاصطناعي؟",
        ),
        a: L(
          "Metering, caching, model routing, and plan entitlements — designed with your packaging and margins in mind.",
          "قياس وتخزين مؤقت وتوجيه نماذج واستحقاقات خطط — مصمّمة مع تغليفكم وهوامشكم في الاعتبار.",
        ),
      },
      {
        q: L(
          "Will you help with design systems?",
          "هل تساعدون في أنظمة التصميم؟",
        ),
        a: L(
          "Yes. UI/UX and design-system work keeps dense SaaS and AI surfaces usable as the product grows.",
          "نعم. عمل واجهات وأنظمة تصميم يبقي أسطح SaaS والذكاء الاصطناعي الكثيفة قابلة للاستخدام مع نمو المنتج.",
        ),
      },
      {
        q: L(
          "What does “agents” mean in your delivery?",
          "ماذا تعني «الوكلاء» في تسليمكم؟",
        ),
        a: L(
          "Productized workflows that can use tools and propose actions under permissions — not unsupervised bots changing tenant data.",
          "مسارات عمل مُنتَجة يمكنها استخدام أدوات واقتراح إجراءات تحت صلاحيات — لا روبوتات بلا إشراف تغيّر بيانات المستأجر.",
        ),
      },
    ],
    ctaTitle: L(
      "Ready to Ship AI Inside Your SaaS Product?",
      "هل أنتم مستعدون لإطلاق ذكاء اصطناعي داخل منتج SaaS لديكم؟",
    ),
    ctaBody: L(
      "Share your tenancy model and roadmap — we will propose a safe AI and product engineering path.",
      "شاركوا نموذج تعدد المستأجرين وخارطة الطريق — وسنقترح مسار هندسة منتج وذكاء اصطناعي آمناً.",
    ),
    relatedServices: [
      "custom-software-development",
      "ai-intelligent-automation",
      "cloud-devops",
      "ui-ux-design",
    ],
  },
  {
    slug: "b2b-software",
    icon: "Briefcase",
    title: L("B2B Software", "برمجيات الأعمال"),
    shortTitle: L("B2B Software", "برمجيات B2B"),
    heroTitle: L(
      "B2B Software & Internal Platform Solutions",
      "حلول برمجيات الأعمال والمنصات الداخلية",
    ),
    tagline: L(
      "Internal and commercial B2B products — CRM, ERP, and portals.",
      "منتجات B2B داخلية وتجارية — CRM وERP وبوابات.",
    ),
    description: L(
      "B2B software: CRM and ERP, internal business applications, admin dashboards, and dedicated teams that stay on the product.",
      "برمجيات B2B: CRM وERP وتطبيقات أعمال داخلية ولوحات إدارة وفرق مخصصة تبقى على المنتج.",
    ),
    metaTitle: L(
      "B2B Software Development | REPLA",
      "تطوير برمجيات الأعمال | REPLA",
    ),
    metaDescription: L(
      "Build CRM, ERP, portals, and internal B2B platforms with REPLA. Custom software, web apps, dedicated teams, and APIs for commercial and internal products.",
      "ابنِ CRM وERP وبوابات ومنصات B2B داخلية مع REPLA. برمجيات مخصصة وتطبيقات ويب وفرق مخصصة وواجهات للمنتجات التجارية والداخلية.",
    ),
    overview: L(
      "B2B operations outgrow spreadsheets long before a generic CRM or ERP fits the sales and ops model. Companies need durable products — internal or commercial — with teams that can evolve them. REPLA builds B2B software, portals, and admin platforms, and can embed dedicated teams that stay on the product.",
      "تتجاوز عمليات B2B الجداول قبل أن يناسب CRM أو ERP عام نموذج المبيعات والتشغيل. تحتاج الشركات إلى منتجات دائمة — داخلية أو تجارية — مع فرق تستطيع تطويرها. تبني REPLA برمجيات B2B وبوابات ومنصات إدارة، ويمكنها دمج فرق مخصصة تبقى على المنتج.",
    ),
    challenges: LL(
      [
        "Spreadsheet operations that should already be a product",
        "CRM/ERP that does not match the sales or ops model",
        "No durable team to evolve a B2B platform after launch",
        "Admin tools that only engineers can operate safely",
        "Partner and customer portals disconnected from back office",
        "Approvals and audit trails missing on critical business actions",
        "Integrations between finance, inventory, and sales still manual",
        "Reporting that executives cannot trust for decisions",
      ],
      [
        "عمليات جداول يجب أن تكون منتجاً بالفعل",
        "CRM/ERP لا يطابق نموذج المبيعات أو التشغيل",
        "لا فريق دائم لتطوير منصة B2B بعد الإطلاق",
        "أدوات إدارة لا يستطيع تشغيلها بأمان إلا المهندسون",
        "بوابات شركاء وعملاء منفصلة عن المكتب الخلفي",
        "موافقات ومسارات تدقيق مفقودة على إجراءات أعمال حرجة",
        "تكاملات بين المالية والمخزون والمبيعات ما زالت يدوية",
        "تقارير لا يستطيع المديرون الوثوق بها للقرارات",
      ],
    ),
    solutions: LL(
      [
        "Custom CRM and sales pipeline platforms",
        "ERP-adjacent and internal operations applications",
        "Partner, vendor, and customer portals",
        "Admin dashboards and configuration consoles",
        "Approval workflows with audit trails",
        "API integrations across finance and inventory systems",
        "Reporting and operational analytics suites",
        "Web applications for complex B2B processes",
        "Dedicated development teams for ongoing product ownership",
      ],
      [
        "منصات CRM وخط أنابيب مبيعات مخصصة",
        "تطبيقات تشغيل داخلية ومجاورة لـ ERP",
        "بوابات شركاء ومورّدين وعملاء",
        "لوحات إدارة ووحدات تهيئة",
        "مسارات موافقة مع مسارات تدقيق",
        "تكاملات واجهات عبر أنظمة المالية والمخزون",
        "حزم تقارير وتحليلات تشغيل",
        "تطبيقات ويب لعمليات B2B معقدة",
        "فرق تطوير مخصصة لملكية منتج مستمرة",
      ],
    ),
    features: LL(
      [
        "Configurable entities, fields, and pipeline stages",
        "Role-based admin with maker-checker on sensitive changes",
        "Import/export tooling for operations migrations",
        "Notification rules for SLA and handoff events",
        "Multi-company or multi-branch scoping",
        "Document attachments with retention-friendly storage",
        "Saved views and filters for power users",
        "API keys and webhooks for partner automation",
        "Audit history searchable by object and actor",
      ],
      [
        "كيانات وحقول ومراحل خط أنابيب قابلة للتهيئة",
        "إدارة حسب الدور مع صانع-مراجع على التغييرات الحساسة",
        "أدوات استيراد/تصدير لترحيلات التشغيل",
        "قواعد إشعار لأحداث اتفاقية الخدمة والتسليم",
        "نطاق شركات أو فروع متعددة",
        "مرفقات مستندات بتخزين ملائم للاحتفاظ",
        "عروض وفلاتر محفوظة للمستخدمين المتقدمين",
        "مفاتيح واجهات وخطافات لأتمتة الشركاء",
        "سجل تدقيق قابل للبحث حسب الكائن والفاعل",
      ],
    ),
    aiIntro: L(
      "In B2B products, AI helps users find records, draft updates, and prioritize work — always within role permissions and with clear human confirmation on irreversible actions.",
      "في منتجات B2B يساعد الذكاء الاصطناعي المستخدمين على إيجاد السجلات ومسودات التحديثات وترتيب أولوية العمل — دائماً ضمن صلاحيات الأدوار ومع تأكيد بشري واضح على الإجراءات غير القابلة للعكس.",
    ),
    aiUseCases: LL(
      [
        "Natural-language search across CRM and ops records",
        "Draft email and activity notes from structured deal data",
        "Prioritize work queues by risk, value, or SLA breach likelihood",
        "Extract fields from uploaded invoices or POs for staff review",
        "Suggest next steps in a pipeline based on historical patterns",
        "Summarize account health for account managers",
      ],
      [
        "بحث بلغة طبيعية عبر سجلات CRM والتشغيل",
        "مسودات بريد وملاحظات نشاط من بيانات صفقة منظمة",
        "ترتيب أولوية طوابير العمل حسب المخاطر أو القيمة أو احتمال خرق اتفاقية الخدمة",
        "استخراج حقول من فواتير أو أوامر شراء مرفوعة لمراجعة الموظفين",
        "اقتراح الخطوات التالية في خط الأنابيب بناءً على أنماط تاريخية",
        "تلخيص صحة الحساب لمديري الحسابات",
      ],
    ),
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Python",
    ],
    whyRepla: LL(
      [
        "We model your real sales and ops process instead of forcing a generic CRM mold",
        "Admin tools are built for operators, not only for developers",
        "Dedicated teams can stay and evolve the product after the first release",
        "APIs and portals keep partners and back office on one truth",
        "Approvals and audit trails fit how B2B businesses actually control risk",
        "Reporting is designed for decisions, not decorative charts",
      ],
      [
        "نُنمذج عملية المبيعات والتشغيل الحقيقية لديكم بدلاً من فرض قالب CRM عام",
        "أدوات الإدارة تُبنى للمشغّلين لا للمطوّرين فقط",
        "الفرق المخصصة يمكن أن تبقى وتطوّر المنتج بعد الإصدار الأول",
        "الواجهات والبوابات تبقي الشركاء والمكتب الخلفي على حقيقة واحدة",
        "الموافقات ومسارات التدقيق تناسب كيف تتحكم أعمال B2B بالمخاطر فعلاً",
        "التقارير تُصمَّم للقرارات لا للرسوم الزخرفية",
      ],
    ),
    faqs: [
      {
        q: L(
          "Should we buy a packaged CRM or build custom?",
          "هل يجب أن نشتري CRM جاهزاً أم نبني مخصصاً؟",
        ),
        a: L(
          "If a package fits 80% of your model, configure it. When your process is the product advantage, custom B2B software is often the better investment — we help you decide honestly.",
          "إذا ناسبت الحزمة 80٪ من نموذجكم، هيّئوها. عندما تكون عمليتكم هي ميزة المنتج، غالباً ما يكون بناء برمجيات B2B مخصصة الاستثمار الأفضل — نساعدكم على القرار بصراحة.",
        ),
      },
      {
        q: L(
          "Can you take over an existing internal system?",
          "هل يمكنكم تولي نظام داخلي قائم؟",
        ),
        a: L(
          "Yes. We stabilize, document, and evolve systems your team already depends on, or rebuild modules behind a strangler approach.",
          "نعم. نثبّت ونوثّق ونطوّر أنظمة تعتمد عليها فرقكم بالفعل، أو نعيد بناء وحدات خلف نهج استبدال تدريجي.",
        ),
      },
      {
        q: L(
          "What is a dedicated development team in practice?",
          "ما فريق التطوير المخصص عملياً؟",
        ),
        a: L(
          "A stable squad working your backlog with agreed ceremonies and ownership — not a revolving door of short ticket bursts.",
          "فريق ثابت يعمل على قائمة أعمالكم بطقوس وملكية متفق عليها — لا باب دوّار من دفعات تذاكر قصيرة.",
        ),
      },
      {
        q: L(
          "Do you build partner portals?",
          "هل تبنون بوابات شركاء؟",
        ),
        a: L(
          "Yes — onboarding, orders, inventory visibility, and status for partners, tied to the same back-office rules.",
          "نعم — انضمام وطلبات ورؤية مخزون وحالة للشركاء، مربوطة بنفس قواعد المكتب الخلفي.",
        ),
      },
      {
        q: L(
          "How do approvals work in your B2B apps?",
          "كيف تعمل الموافقات في تطبيقات B2B لديكم؟",
        ),
        a: L(
          "Configurable multi-step approvals with roles, comments, and audit history on actions that need dual control.",
          "موافقات متعددة الخطوات قابلة للتهيئة بأدوار وتعليقات وسجل تدقيق على الإجراءات التي تحتاج تحكماً مزدوجاً.",
        ),
      },
      {
        q: L(
          "Can AI write directly to our CRM records?",
          "هل يمكن للذكاء الاصطناعي الكتابة مباشرة في سجلات CRM؟",
        ),
        a: L(
          "We prefer propose-and-confirm patterns for writes. Direct automation is possible where you explicitly accept the risk and controls.",
          "نُفضّل أنماط اقترح-وأكّد للكتابة. الأتمتة المباشرة ممكنة حيث تقبلون المخاطر والضوابط صراحة.",
        ),
      },
    ],
    ctaTitle: L(
      "Ready to Turn Operations Into a Durable B2B Product?",
      "هل أنتم مستعدون لتحويل العمليات إلى منتج B2B دائم؟",
    ),
    ctaBody: L(
      "Describe the process you want to productize — we will propose a platform and team model.",
      "صفوا العملية التي تريدون تحويلها إلى منتج — وسنقترح نموذجاً للمنصة والفريق.",
    ),
    relatedServices: [
      "custom-software-development",
      "web-development",
      "dedicated-development-teams",
      "api-development",
    ],
  },
];

export function getIndustry(slug: string) {
  const contentSlug = resolveIndustryContentSlug(slug);
  return industries.find((i) => i.slug === contentSlug);
}
