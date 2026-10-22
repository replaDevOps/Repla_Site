import { L, LL } from "./types";

export const PARTNER_PATH = "/partner";

export const PARTNER_TYPE_IDS = ["referral", "delivery", "collaboration"] as const;

export type PartnerTypeId = (typeof PARTNER_TYPE_IDS)[number];

export function isPartnerType(value: string | null | undefined): value is PartnerTypeId {
  return PARTNER_TYPE_IDS.some((id) => id === value);
}

/** Published services a partner conversation can cover. */
export const PARTNER_SERVICE_SLUGS = [
  "ai-intelligent-automation",
  "custom-software-development",
  "web-development",
  "mobile-app-development",
  "cloud-devops",
  "dedicated-development-teams",
  "ui-ux-design",
  "cybersecurity",
] as const;

export const partnerCopy = {
  eyebrow: L("Partnerships", "الشراكات"),
  title: L("Become a partner", "كن شريكاً"),
  description: L(
    "Refer a project, add engineering capacity, or collaborate on AI and software delivery with REPLA Technologies.",
    "أحيلوا مشروعاً، أو أضيفوا قدرة هندسية، أو تعاونوا في تسليم الذكاء الاصطناعي والبرمجيات مع REPLA Technologies.",
  ),
  applyCta: L("To become a partner", "قدّموا طلب شراكة"),
  exploreCta: L("Explore partnerships", "استكشفوا نماذج الشراكة"),
  applyWithModel: L("Apply with this model", "قدّموا بهذا النموذج"),

  modelsEyebrow: L("Ways to work together", "طرق العمل معاً"),
  modelsTitle: L("Choose a partnership model", "اختاروا نموذج الشراكة"),
  modelsBody: L(
    "Each model uses services REPLA already delivers. This site does not publish commission rates or partnership fees. Commercial terms are confirmed with you before an engagement begins.",
    "كل نموذج يستخدم خدمات تقدمها REPLA فعلاً. لا ينشر هذا الموقع نسب عمولة أو رسوم شراكة. تُؤكد الشروط التجارية معكم قبل بدء أي تعاون.",
  ),
  models: [
    {
      id: "referral" as const,
      title: L("Refer a project", "إحالة مشروع"),
      body: L(
        "Introduce an organization that needs software, AI, or digital delivery. REPLA reviews the opportunity, then handles the agreed discovery and delivery.",
        "عرّفوا مؤسسة تحتاج برمجيات أو ذكاء اصطناعياً أو تسليماً رقمياً. تراجع REPLA الفرصة ثم تتولى الاكتشاف والتسليم المتفق عليهما.",
      ),
      points: LL(
        [
          "Share a qualified introduction",
          "We confirm whether it is a new opportunity",
          "Commercial terms are agreed before any work starts",
        ],
        [
          "شاركوا تعريفاً مؤهلاً",
          "نؤكد ما إذا كانت فرصة جديدة",
          "تُتفق الشروط التجارية قبل بدء أي عمل",
        ],
      ),
    },
    {
      id: "delivery" as const,
      title: L("Delivery capacity", "قدرة التسليم"),
      body: L(
        "Add dedicated developers, team augmentation, offshore capacity, or a managed team when a roadmap is ahead of in-house headcount.",
        "أضيفوا مطورين مخصصين أو تعزيزاً للفريق أو قدرة خارجية أو فريقاً مُداراً عندما تسبق خارطة الطريق عدد الفريق الداخلي.",
      ),
      points: LL(
        [
          "Dedicated developers, augmentation, or a managed team",
          "Communication and timezone norms agreed up front",
          "Scope and commercials set for that engagement",
        ],
        [
          "مطورون مخصصون أو تعزيز أو فريق مُدار",
          "يُتفق على التواصل والمنطقة الزمنية مسبقاً",
          "يُحدَّد النطاق والشروط التجارية لذلك التعاون",
        ],
      ),
    },
    {
      id: "collaboration" as const,
      title: L("Project collaboration", "تعاون في مشروع"),
      body: L(
        "Work with REPLA as an extension of your team on a defined AI, software, web, mobile, or cloud engagement.",
        "اعملوا مع REPLA كامتداد لفريقكم على تعاون محدد في الذكاء الاصطناعي أو البرمجيات أو الويب أو الجوال أو السحابة.",
      ),
      points: LL(
        [
          "Start from a named business need",
          "We scope design, engineering, and delivery",
          "Responsibilities are agreed before work begins",
        ],
        [
          "ابدأوا من حاجة أعمال محددة",
          "نحدد نطاق التصميم والهندسة والتسليم",
          "تُتفق المسؤوليات قبل بدء العمل",
        ],
      ),
    },
  ],

  benefitsEyebrow: L("Why partner", "لماذا الشراكة"),
  benefitsTitle: L("What a partnership is built on", "على ماذا تقوم الشراكة"),
  benefitsBody: L(
    "A partnership uses the same delivery practice REPLA offers clients. It does not add a separate catalog or unpublished guarantees.",
    "تستخدم الشراكة نفس ممارسة التسليم التي تقدمها REPLA للعملاء. وهي لا تضيف فهرساً منفصلاً ولا ضمانات غير منشورة.",
  ),
  benefits: [
    {
      title: L("AI-first engineering", "هندسة قائمة على الذكاء الاصطناعي"),
      body: L(
        "AI agents, intelligent automation, and custom software are part of the published service catalog.",
        "وكلاء الذكاء الاصطناعي والأتمتة الذكية والبرمجيات المخصصة جزء من فهرس الخدمات المنشور.",
      ),
    },
    {
      title: L("End-to-end delivery", "تسليم متكامل"),
      body: L(
        "Design, build, cloud, security, and ongoing support can be scoped into one engagement.",
        "يمكن تضمين التصميم والبناء والسحابة والأمن والدعم المستمر في تعاون واحد.",
      ),
    },
    {
      title: L("Capacity you can shape", "قدرة يمكن تشكيلها"),
      body: L(
        "Dedicated developers, augmentation, and managed teams are listed ways to add engineering capacity.",
        "المطورون المخصصون وتعزيز الفريق والفرق المُدارة طرق معلنة لإضافة قدرة هندسية.",
      ),
    },
    {
      title: L("Riyadh, delivering worldwide", "الرياض، وتسليم عالمي"),
      body: L(
        "REPLA is headquartered in Riyadh and delivers for organizations in Saudi Arabia and internationally.",
        "مقر REPLA في الرياض، وتسلّم للمؤسسات في السعودية وعلى المستوى الدولي.",
      ),
    },
  ],

  audienceEyebrow: L("Who it’s for", "لمن هذه الشراكة"),
  audienceTitle: L("Practices that need a delivery partner", "جهات تحتاج شريك تسليم"),
  audienceBody: L(
    "Choose a starting point. The application opens with that partnership type selected, and you can change it before you submit.",
    "اختاروا نقطة بداية. يُفتح الطلب مع تحديد نوع الشراكة هذا، ويمكنكم تغييره قبل الإرسال.",
  ),
  audiences: [
    {
      type: "delivery" as const,
      title: L("Agencies and consultancies", "الوكالات والاستشارات"),
      body: L(
        "Add engineering capacity behind a client engagement you already hold.",
        "أضيفوا قدرة هندسية خلف تعاون مع عميل تتولونه أنتم.",
      ),
    },
    {
      type: "referral" as const,
      title: L("Advisors and introducers", "المستشارون والمعرّفون"),
      body: L(
        "Connect an organization that has a real software or AI need and a reason to talk.",
        "صلوا مؤسسة لديها حاجة حقيقية لبرمجيات أو ذكاء اصطناعي وسبب للحديث.",
      ),
    },
    {
      type: "delivery" as const,
      title: L("Product teams", "فرق المنتجات"),
      body: L(
        "Bring in dedicated capacity when hiring cannot match the roadmap.",
        "أحضروا قدرة مخصصة عندما لا يواكب التوظيف خارطة الطريق.",
      ),
    },
    {
      type: "collaboration" as const,
      title: L("Technology collaborators", "شركاء تقنيون"),
      body: L(
        "Collaborate on a defined build, with responsibilities agreed before work starts.",
        "تعاونوا على بناء محدد، مع مسؤوليات يُتفق عليها قبل بدء العمل.",
      ),
    },
  ],

  servicesEyebrow: L("Services", "الخدمات"),
  servicesTitle: L("Work you can bring into a partnership", "الأعمال التي يمكن إدخالها في شراكة"),
  servicesBody: L(
    "These are services REPLA already publishes. A partnership does not create offers that are not on this site.",
    "هذه خدمات تنشرها REPLA فعلاً. الشراكة لا تنشئ عروضاً غير موجودة على هذا الموقع.",
  ),

  processEyebrow: L("How it works", "كيف تسير الشراكة"),
  processTitle: L("From application to an agreed engagement", "من الطلب إلى تعاون متفق عليه"),
  processBody: L(
    "Nothing is committed until both sides confirm how the work will run.",
    "لا يُلتزم بشيء حتى يؤكد الطرفان كيف سيسير العمل.",
  ),
  steps: [
    {
      title: L("Apply", "تقديم الطلب"),
      body: L(
        "Tell us about your business and the partnership model you want to explore.",
        "أخبرونا عن أعمالكم ونموذج الشراكة الذي تريدون استكشافه.",
      ),
    },
    {
      title: L("Review", "المراجعة"),
      body: L(
        "We look at fit and follow up on the application if we can take it forward.",
        "نراجع الملاءمة ونتابع الطلب إذا أمكن المضي به.",
      ),
    },
    {
      title: L("Agree the model", "الاتفاق على النموذج"),
      body: L(
        "Communication, responsibilities, and commercial terms are confirmed before work begins.",
        "يُؤكد التواصل والمسؤوليات والشروط التجارية قبل بدء العمل.",
      ),
    },
    {
      title: L("Start", "البدء"),
      body: L(
        "An introduction or a delivery engagement proceeds under that agreement.",
        "تسير الإحالة أو تعاون التسليم بموجب ذلك الاتفاق.",
      ),
    },
  ],

  faqEyebrow: L("Questions", "أسئلة"),
  faqTitle: L("Partnership questions", "أسئلة الشراكة"),
  faqBody: L(
    "These answers describe how to start. When there is a written agreement, that agreement defines the engagement.",
    "توضح هذه الإجابات كيف تبدأون. عندما يوجد اتفاق مكتوب، فإن ذلك الاتفاق هو الذي يحدد التعاون.",
  ),
  faqs: [
    {
      q: L("Do I need a technical background?", "هل أحتاج خلفية تقنية؟"),
      a: L(
        "No. You can describe the business need. REPLA handles technical discovery and scoping as part of delivery.",
        "لا. يمكنكم وصف حاجة الأعمال. تتولى REPLA الاكتشاف التقني وتحديد النطاق كجزء من التسليم.",
      ),
    },
    {
      q: L(
        "Do you publish commission rates or partnership fees?",
        "هل تنشرون نسب عمولة أو رسوم شراكة؟",
      ),
      a: L(
        "No. This site does not publish commission rates, retainers, or an application fee. Any commercial terms are confirmed with you before an engagement begins.",
        "لا. لا ينشر هذا الموقع نسب عمولة أو أتعاباً أو رسوم تقديم. أي شروط تجارية تُؤكد معكم قبل بدء التعاون.",
      ),
    },
    {
      q: L(
        "What if REPLA is already talking to that organization?",
        "ماذا لو كانت REPLA تتحدث مع تلك المؤسسة بالفعل؟",
      ),
      a: L(
        "Share what you can in the application. Each introduction is reviewed before it is treated as a new opportunity.",
        "شاركوا ما يمكنكم في الطلب. تُراجع كل إحالة قبل التعامل معها كفرصة جديدة.",
      ),
    },
    {
      q: L(
        "Can we stay the client’s main contact?",
        "هل يمكننا البقاء جهة التواصل الرئيسية مع العميل؟",
      ),
      a: L(
        "That is agreed per engagement. Dedicated-team and project work define communication and responsibilities before work starts. There is no default branding arrangement published here.",
        "يُتفق على ذلك لكل تعاون. عمل الفرق المخصصة والمشاريع يحدد التواصل والمسؤوليات قبل بدء العمل. لا يوجد ترتيب افتراضي للعلامة التجارية منشوراً هنا.",
      ),
    },
    {
      q: L(
        "Can I propose more than one opportunity?",
        "هل يمكنني اقتراح أكثر من فرصة؟",
      ),
      a: L(
        "Yes. Each opportunity is reviewed on its own.",
        "نعم. تُراجع كل فرصة على حدة.",
      ),
    },
    {
      q: L("Can I apply from outside Saudi Arabia?", "هل يمكنني التقديم من خارج السعودية؟"),
      a: L(
        "Yes. REPLA is headquartered in Riyadh and delivers worldwide. We confirm whether a specific partnership can proceed when we review the application.",
        "نعم. مقر REPLA في الرياض وتسلّم عالمياً. نؤكد ما إذا كان يمكن المضي في شراكة محددة عند مراجعة الطلب.",
      ),
    },
    {
      q: L("Who follows up after I apply?", "من يتابع بعد تقديم الطلب؟"),
      a: L(
        "A successful submission is delivered through the website contact channel. We follow up using the email you provided. If this environment cannot send the form, the page says so and shows the address to write to.",
        "يُسلَّم الطلب الناجح عبر قناة التواصل في الموقع. نتابع باستخدام البريد الذي قدمتموه. إذا تعذر على هذه البيئة إرسال النموذج، توضح الصفحة ذلك وتعرض العنوان للمراسلة.",
      ),
    },
  ],

  formEyebrow: L("Application", "الطلب"),
  formTitle: L("Apply to partner", "طلب الشراكة"),
  formIntro: L(
    "Tell us about your business and how you would like to work together. Submitting this form starts a review. It does not confirm rates, a partnership, or a project.",
    "أخبرونا عن أعمالكم وكيف تودون العمل معاً. إرسال هذا النموذج يبدأ مراجعة. وهو لا يؤكد نسباً أو شراكة أو مشروعاً.",
  ),
  formDirect: L(
    "You can also write to us with the same details.",
    "يمكنكم أيضاً مراسلتنا بالتفاصيل نفسها.",
  ),
  formSuccess: L(
    "Application received. We will follow up about your partnership request.",
    "تم استلام الطلب. سنتابع معكم بخصوص طلب الشراكة.",
  ),
  fields: {
    fullName: L("Full name", "الاسم الكامل"),
    email: L("Business email", "البريد المهني"),
    company: L("Company or website", "الشركة أو الموقع"),
    country: L("Country", "الدولة"),
    type: L("Partnership type", "نوع الشراكة"),
    message: L("Partnership proposal", "مقترح الشراكة"),
    consent: L(
      "I agree to be contacted about this partnership application.",
      "أوافق على التواصل معي بخصوص طلب الشراكة هذا.",
    ),
    selectType: L("Select a partnership type", "اختاروا نوع الشراكة"),
    submit: L("Submit application", "إرسال الطلب"),
    fullNamePlaceholder: L("Your full name", "اسمكم الكامل"),
    emailPlaceholder: L("you@company.com", "you@company.com"),
    companyPlaceholder: L("Company name or website", "اسم الشركة أو الموقع"),
    countryPlaceholder: L("Your country", "دولتكم"),
    messagePlaceholder: L(
      "Who you work with, and what kind of opportunity or delivery you have in mind.",
      "مع من تعملون، وما نوع الفرصة أو التسليم الذي تفكرون فيه.",
    ),
  },
  validation: {
    company: L("Please enter a company name or website.", "يرجى إدخال اسم الشركة أو الموقع."),
    companyMax: L("Use 160 characters or fewer.", "استخدموا 160 حرفاً أو أقل."),
    country: L("Please enter your country.", "يرجى إدخال الدولة."),
    countryMax: L("Use 80 characters or fewer.", "استخدموا 80 حرفاً أو أقل."),
    type: L("Please choose a partnership type.", "يرجى اختيار نوع الشراكة."),
    proposal: L(
      "Please describe the partnership you have in mind.",
      "يرجى وصف الشراكة التي تفكرون فيها.",
    ),
    proposalMax: L("Please use 3500 characters or fewer.", "يرجى استخدام 3500 حرف أو أقل."),
    nameMax: L("Use 120 characters or fewer.", "استخدموا 120 حرفاً أو أقل."),
    emailMax: L("Use 160 characters or fewer.", "استخدموا 160 حرفاً أو أقل."),
  },
};
