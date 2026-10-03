import { L, LL, type LList } from "./types";

const p = (en: string, ar: string) => ({ type: "p" as const, text: L(en, ar) });
const h3 = (en: string, ar: string) => ({ type: "h3" as const, text: L(en, ar) });
const ul = (en: string[], ar: string[]) => ({ type: "ul" as const, items: LL(en, ar) });

export type LegalBlock =
  | { type: "p"; text: ReturnType<typeof L> }
  | { type: "h3"; text: ReturnType<typeof L> }
  | { type: "ul"; items: LList };

export const privacy = {
  title: L("Privacy Policy", "سياسة الخصوصية"),
  updated: L("Last updated: 2026", "آخر تحديث: 2026"),
  sections: [
    {
      title: L("1. Introduction", "1. المقدمة"),
      blocks: [
        p(
          "Repla (“we”, “us”, or “our”) is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website at https://www.replatechnologies.com/, interact with us, or engage our services.",
          "تلتزم Repla («نحن») بحماية خصوصيتكم واحترامها. توضح سياسة الخصوصية هذه كيف نجمع معلوماتكم الشخصية ونستخدمها ونفصح عنها ونحميها عند زيارة موقعنا https://www.replatechnologies.com/ أو التفاعل معنا أو الاستفادة من خدماتنا.",
        ),
        p(
          "Please read this policy carefully. By using our Website or engaging our services, you consent to the practices described in this Privacy Policy. If you do not agree, please discontinue use of our Website.",
          "يرجى قراءة هذه السياسة بعناية. باستخدامكم موقعنا أو خدماتنا، توافقون على الممارسات الموضحة في سياسة الخصوصية هذه. إذا لم توافقوا، يرجى التوقف عن استخدام الموقع.",
        ),
        p(
          "This policy may be updated periodically. The “Last updated” date at the top of this document reflects when the latest version was published. We encourage you to review this page regularly.",
          "قد تُحدَّث هذه السياسة دورياً. يعكس تاريخ «آخر تحديث» في أعلى هذه الوثيقة وقت نشر أحدث نسخة. نحثكم على مراجعة هذه الصفحة بانتظام.",
        ),
      ],
    },
    {
      title: L("2. Information We Collect", "2. المعلومات التي نجمعها"),
      blocks: [
        p(
          "We may collect and process the following categories of personal information:",
          "قد نجمع ونعالج الفئات التالية من المعلومات الشخصية:",
        ),
        h3("2.1 Information You Provide Directly", "2.1 معلومات تقدمونها مباشرة"),
        ul(
          [
            "Full name and job title",
            "Business name and industry",
            "Email address and phone number",
            "Project requirements, messages, or briefs submitted via contact forms",
            "Payment and billing information (processed securely through third-party providers)",
            "Any other information you voluntarily share with us",
          ],
          [
            "الاسم الكامل والمسمى الوظيفي",
            "اسم النشاط والقطاع",
            "البريد الإلكتروني ورقم الهاتف",
            "متطلبات المشروع أو الرسائل أو الملخصات المرسلة عبر نماذج التواصل",
            "معلومات الدفع والفوترة (تُعالَج بأمان عبر مزودين خارجيين)",
            "أي معلومات أخرى تشاركونها معنا طوعاً",
          ],
        ),
        h3("2.2 Information Collected Automatically", "2.2 معلومات تُجمع تلقائياً"),
        p(
          "When you visit our Website, certain data is collected automatically, including:",
          "عند زيارة موقعنا، تُجمع بعض البيانات تلقائياً، بما في ذلك:",
        ),
        ul(
          [
            "IP address and approximate geographic location",
            "Browser type, version, and operating system",
            "Pages visited, time spent on pages, and navigation paths",
            "Referring URLs and search queries",
            "Device identifiers and screen resolution",
          ],
          [
            "عنوان IP والموقع الجغرافي التقريبي",
            "نوع المتصفح وإصداره ونظام التشغيل",
            "الصفحات التي زُيرت والوقت المستغرق فيها ومسارات التصفح",
            "عناوين الإحالة واستعلامات البحث",
            "معرّفات الجهاز ودقة الشاشة",
          ],
        ),
        h3("2.3 Information from Third Parties", "2.3 معلومات من أطراف ثالثة"),
        p(
          "We may receive information about you from third-party platforms such as LinkedIn, Google, or referral partners when you interact with our profiles or advertisements on those platforms.",
          "قد نتلقى معلومات عنكم من منصات طرف ثالث مثل LinkedIn أو Google أو شركاء الإحالة عند تفاعلكم مع صفحاتنا أو إعلاناتنا على تلك المنصات.",
        ),
      ],
    },
    {
      title: L("3. How We Use Your Information", "3. كيف نستخدم معلوماتكم"),
      blocks: [
        p(
          "Repla uses the information we collect for the following purposes:",
          "تستخدم Repla المعلومات التي نجمعها للأغراض التالية:",
        ),
        ul(
          [
            "To respond to your inquiries and provide requested services",
            "To assess your project requirements and prepare proposals or quotations",
            "To communicate project updates, milestones, and deliverables",
            "To process payments and manage billing",
            "To improve and optimize our Website, services, and user experience",
            "To send relevant marketing communications (only where you have opted in)",
            "To comply with legal obligations and enforce our Terms and Conditions",
            "To detect, prevent, and address fraud, security issues, or technical problems",
            "To conduct internal analytics and business reporting",
          ],
          [
            "للرد على استفساراتكم وتقديم الخدمات المطلوبة",
            "لتقييم متطلبات مشروعكم وإعداد العروض أو التسعيرات",
            "للتواصل بشأن تحديثات المشروع والمراحل والمخرجات",
            "لمعالجة المدفوعات وإدارة الفوترة",
            "لتحسين موقعنا وخدماتنا وتجربة المستخدم",
            "لإرسال اتصالات تسويقية ذات صلة (فقط عند اشتراككم)",
            "للامتثال للالتزامات القانونية وإنفاذ الشروط والأحكام",
            "للكشف عن الاحتيال أو المشكلات الأمنية أو التقنية ومنعها ومعالجتها",
            "لإجراء التحليلات الداخلية والتقارير التشغيلية",
          ],
        ),
        p(
          "We will never sell your personal information to third parties for their own marketing purposes.",
          "لن نبيع معلوماتكم الشخصية لأطراف ثالثة لأغراض تسويقها الخاصة.",
        ),
      ],
    },
    {
      title: L("4. Legal Basis for Processing (GDPR)", "4. الأساس القانوني للمعالجة (GDPR)"),
      blocks: [
        p(
          "If you are located in the European Economic Area (EEA) or United Kingdom, we process your personal data under the following legal bases:",
          "إذا كنتم في المنطقة الاقتصادية الأوروبية أو المملكة المتحدة، نعالج بياناتكم الشخصية وفق الأسس القانونية التالية:",
        ),
        ul(
          [
            "Contractual Necessity: Processing required to fulfill a contract with you or to take steps prior to entering into a contract.",
            "Legitimate Interests: Processing necessary for our legitimate business interests, such as improving our services, provided these interests are not overridden by your rights.",
            "Consent: Where you have explicitly consented to receiving marketing communications or cookies.",
            "Legal Obligation: Processing required to comply with applicable laws and regulations.",
          ],
          [
            "الضرورة التعاقدية: المعالجة المطلوبة لتنفيذ عقد معكم أو لاتخاذ خطوات قبل إبرام عقد.",
            "المصالح المشروعة: المعالجة اللازمة لمصالحنا التجارية المشروعة، مثل تحسين خدماتنا، ما دامت لا تطغى على حقوقكم.",
            "الموافقة: عندما توافقون صراحة على تلقي الاتصالات التسويقية أو ملفات الارتباط.",
            "الالتزام القانوني: المعالجة المطلوبة للامتثال للقوانين واللوائح المعمول بها.",
          ],
        ),
        p(
          "You may withdraw consent at any time by contacting us at replaofficials@gmail.com.",
          "يمكنكم سحب الموافقة في أي وقت عبر التواصل معنا على replaofficials@gmail.com.",
        ),
      ],
    },
    {
      title: L("5. Cookies & Tracking Technologies", "5. ملفات الارتباط وتقنيات التتبع"),
      blocks: [
        p(
          "Our Website uses cookies and similar tracking technologies to enhance your browsing experience and gather usage data. Cookies are small text files stored on your device.",
          "يستخدم موقعنا ملفات الارتباط وتقنيات تتبع مشابهة لتحسين تجربة التصفح وجمع بيانات الاستخدام. ملفات الارتباط ملفات نصية صغيرة تُخزَّن على جهازكم.",
        ),
        p(
          "We use the following types of cookies:",
          "نستخدم الأنواع التالية من ملفات الارتباط:",
        ),
        ul(
          [
            "Essential Cookies: Required for the Website to function correctly. These cannot be disabled.",
            "Analytics Cookies: Help us understand how visitors interact with our Website (e.g., Google Analytics).",
            "Marketing Cookies: Used to deliver relevant advertisements and measure campaign performance.",
            "Preference Cookies: Remember your settings and preferences for a better experience.",
          ],
          [
            "ملفات أساسية: لازمة لعمل الموقع بشكل صحيح ولا يمكن تعطيلها.",
            "ملفات تحليلات: تساعدنا على فهم تفاعل الزوار مع الموقع (مثل Google Analytics).",
            "ملفات تسويق: تُستخدم لعرض إعلانات ملائمة وقياس أداء الحملات.",
            "ملفات تفضيلات: تتذكر إعداداتكم وتفضيلاتكم لتجربة أفضل.",
          ],
        ),
        p(
          "You can manage or disable cookies through your browser settings at any time. However, disabling certain cookies may affect the functionality of the Website.",
          "يمكنكم إدارة ملفات الارتباط أو تعطيلها من إعدادات المتصفح في أي وقت. غير أن تعطيل بعضها قد يؤثر على وظائف الموقع.",
        ),
      ],
    },
    {
      title: L("6. How We Share Your Information", "6. كيف نشارك معلوماتكم"),
      blocks: [
        p(
          "Repla does not sell, trade, or rent your personal information. We may share your data only in the following limited circumstances:",
          "لا تبيع Repla معلوماتكم الشخصية ولا تتاجر بها ولا تؤجرها. قد نشارك بياناتكم فقط في الحالات المحدودة التالية:",
        ),
        h3("6.1 Service Providers", "6.1 مزودو الخدمات"),
        p(
          "We engage trusted third-party vendors to help us operate our business, including:",
          "نتعامل مع موردين موثوقين لمساعدتنا في تشغيل أعمالنا، بما في ذلك:",
        ),
        ul(
          [
            "Cloud hosting and infrastructure providers",
            "Payment processing platforms",
            "Email communication and CRM tools",
            "Analytics and performance monitoring services",
          ],
          [
            "مزودو الاستضافة السحابية والبنية التحتية",
            "منصات معالجة المدفوعات",
            "أدوات البريد الإلكتروني وإدارة علاقات العملاء",
            "خدمات التحليلات ومراقبة الأداء",
          ],
        ),
        p(
          "All service providers are contractually obligated to handle your data securely and only for the purposes we specify.",
          "يلتزم جميع مزودي الخدمات تعاقدياً بمعالجة بياناتكم بأمان وللأغراض التي نحددها فقط.",
        ),
        h3("6.2 Business Transfers", "6.2 نقل الأعمال"),
        p(
          "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email or a prominent notice on our Website before any such transfer occurs.",
          "في حال الاندماج أو الاستحواذ أو بيع الأصول، قد تُنقل معلوماتكم ضمن تلك الصفقة. سنُعلمكم عبر البريد الإلكتروني أو إشعار بارز على الموقع قبل حدوث أي نقل من هذا النوع.",
        ),
        h3("6.3 Legal Requirements", "6.3 المتطلبات القانونية"),
        p(
          "We may disclose your information if required to do so by law, court order, or governmental authority, or if we believe disclosure is necessary to protect the rights, property, or safety of Repla, our clients, or the public.",
          "قد نفصح عن معلوماتكم إذا طُلب ذلك قانوناً أو بأمر محكمة أو جهة حكومية، أو إذا رأينا أن الإفصاح ضروري لحماية حقوق Repla أو عملائنا أو الجمهور أو ممتلكاتهم أو سلامتهم.",
        ),
      ],
    },
    {
      title: L("7. Data Retention", "7. الاحتفاظ بالبيانات"),
      blocks: [
        p(
          "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable law.",
          "نحتفظ بمعلوماتكم الشخصية فقط للمدة اللازمة لتحقيق الأغراض المبينة في سياسة الخصوصية هذه، أو كما يقتضي القانون المعمول به.",
        ),
        ul(
          [
            "Contact and inquiry data: Retained for up to 3 years from last interaction.",
            "Client project data: Retained for the duration of the project and up to 5 years thereafter.",
            "Payment and billing records: Retained for up to 7 years to comply with financial regulations.",
            "Website analytics data: Typically retained for 26 months.",
          ],
          [
            "بيانات التواصل والاستفسار: تُحفظ حتى 3 سنوات من آخر تفاعل.",
            "بيانات مشاريع العملاء: تُحفظ طوال مدة المشروع وحتى 5 سنوات بعد انتهائه.",
            "سجلات الدفع والفوترة: تُحفظ حتى 7 سنوات للامتثال للوائح المالية.",
            "بيانات تحليلات الموقع: تُحفظ عادة لمدة 26 شهراً.",
          ],
        ),
        p(
          "When data is no longer required, it is securely deleted or anonymized.",
          "عندما تصبح البيانات غير مطلوبة، تُحذف بأمان أو تُحوَّل إلى بيانات مجهولة الهوية.",
        ),
      ],
    },
    {
      title: L("8. Data Security", "8. أمن البيانات"),
      blocks: [
        p(
          "Repla takes the security of your personal information seriously. We implement a range of technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction, including:",
          "تأخذ Repla أمن معلوماتكم الشخصية على محمل الجد. نطبّق مجموعة من التدابير التقنية والتنظيمية لحماية بياناتكم من الوصول غير المصرح به أو التعديل أو الإفصاح أو التدمير، بما في ذلك:",
        ),
        ul(
          [
            "SSL/TLS encryption for all data transmitted via our Website",
            "Secure cloud infrastructure with access controls and firewalls",
            "Regular security audits and vulnerability assessments",
            "Restricted access to personal data on a need-to-know basis",
            "Employee training on data protection best practices",
          ],
          [
            "تشفير SSL/TLS لجميع البيانات المنقولة عبر موقعنا",
            "بنية سحابية آمنة مع ضوابط وصول وجدران حماية",
            "تدقيقات أمنية منتظمة وتقييمات للثغرات",
            "تقييد الوصول إلى البيانات الشخصية على أساس الحاجة إلى المعرفة",
            "تدريب الموظفين على أفضل ممارسات حماية البيانات",
          ],
        ),
        p(
          "While we take every reasonable precaution, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security, but we are committed to promptly addressing any data breach that may occur.",
          "رغم اتخاذنا كل احتياط معقول، لا توجد وسيلة نقل عبر الإنترنت آمنة بنسبة 100%. لا يمكننا ضمان أمن مطلق، لكننا ملتزمون بمعالجة أي خرق بيانات بسرعة.",
        ),
      ],
    },
    {
      title: L("9. Your Data Rights", "9. حقوقكم في البيانات"),
      blocks: [
        p(
          "Depending on your location, you may have the following rights regarding your personal data:",
          "بحسب موقعكم، قد تكون لكم الحقوق التالية بشأن بياناتكم الشخصية:",
        ),
        ul(
          [
            "Right to Access: Request a copy of the personal data we hold about you.",
            "Right to Rectification: Request correction of inaccurate or incomplete data.",
            "Right to Erasure: Request deletion of your personal data (“right to be forgotten”).",
            "Right to Restriction: Request that we limit how we process your data.",
            "Right to Data Portability: Receive your data in a structured, machine-readable format.",
            "Right to Object: Object to processing based on legitimate interests or for direct marketing.",
            "Right to Withdraw Consent: Withdraw consent at any time where processing is based on consent.",
          ],
          [
            "حق الوصول: طلب نسخة من البيانات الشخصية التي نحتفظ بها عنكم.",
            "حق التصحيح: طلب تصحيح بيانات غير دقيقة أو غير مكتملة.",
            "حق المحو: طلب حذف بياناتكم الشخصية («الحق في النسيان»).",
            "حق التقييد: طلب تقييد كيفية معالجتنا لبياناتكم.",
            "حق نقل البيانات: استلام بياناتكم بصيغة منظمة قابلة للقراءة آلياً.",
            "حق الاعتراض: الاعتراض على المعالجة المستندة إلى المصالح المشروعة أو للتسويق المباشر.",
            "حق سحب الموافقة: سحب الموافقة في أي وقت عندما تستند المعالجة إلى الموافقة.",
          ],
        ),
        p(
          "To exercise any of these rights, please contact us at replaofficials@gmail.com. We will respond within 30 days of receiving your request. We may ask you to verify your identity before processing your request.",
          "لممارسة أي من هذه الحقوق، تواصلوا معنا على replaofficials@gmail.com. سنرد خلال 30 يوماً من استلام طلبكم. قد نطلب التحقق من هويتكم قبل معالجة الطلب.",
        ),
      ],
    },
    {
      title: L("10. Children’s Privacy", "10. خصوصية الأطفال"),
      blocks: [
        p(
          "Our Website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware that we have inadvertently collected data from a child under 18, we will take prompt steps to delete that information.",
          "موقعنا وخدماتنا غير موجّهة لمن هم دون 18 عاماً. لا نجمع عن علم معلومات شخصية من القُصّر. إذا علمنا أننا جمعنا بيانات من طفل دون 18 عاماً دون قصد، سنتخذ خطوات سريعة لحذفها.",
        ),
        p(
          "If you believe we have collected information from a minor, please notify us immediately at replaofficials@gmail.com.",
          "إذا اعتقدتم أننا جمعنا معلومات من قاصر، يرجى إبلاغنا فوراً على replaofficials@gmail.com.",
        ),
      ],
    },
    {
      title: L("11. International Data Transfers", "11. نقل البيانات الدولي"),
      blocks: [
        p(
          "Repla operates globally and may transfer your personal data to countries outside your country of residence, including countries that may not provide the same level of data protection as your home country.",
          "تعمل Repla عالمياً وقد تنقل بياناتكم الشخصية إلى دول خارج بلد إقامتكم، بما في ذلك دول قد لا توفر مستوى الحماية نفسه المعمول به في بلدكم.",
        ),
        p(
          "Where we transfer data internationally, we implement appropriate safeguards such as Standard Contractual Clauses (SCCs) approved by relevant authorities, or rely on adequacy decisions where applicable.",
          "عندما ننقل البيانات دولياً، نطبّق ضمانات مناسبة مثل البنود التعاقدية القياسية المعتمدة من الجهات المختصة، أو نعتمد على قرارات الملاءمة حيثما انطبق ذلك.",
        ),
        p(
          "By using our Website or services, you consent to such transfers in accordance with this Privacy Policy.",
          "باستخدامكم موقعنا أو خدماتنا، توافقون على هذه النقلات وفقاً لسياسة الخصوصية هذه.",
        ),
      ],
    },
    {
      title: L("12. Third-Party Websites", "12. مواقع الطرف الثالث"),
      blocks: [
        p(
          "Our Website may contain links to third-party websites, plugins, or services. Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy practices.",
          "قد يحتوي موقعنا على روابط لمواقع أو إضافات أو خدمات طرف ثالث. النقر عليها قد يتيح لتلك الأطراف جمع بيانات عنكم أو مشاركتها. لا نتحكم في تلك المواقع ولسنا مسؤولين عن ممارسات خصوصيتها.",
        ),
        p(
          "We encourage you to review the privacy policies of every external website you visit.",
          "نحثكم على مراجعة سياسات الخصوصية لكل موقع خارجي تزورونه.",
        ),
      ],
    },
    {
      title: L("13. Marketing Communications", "13. الاتصالات التسويقية"),
      blocks: [
        p(
          "With your consent, we may send you marketing emails or newsletters about our services, industry insights, and updates. You can opt out of these communications at any time by:",
          "بموافقتكم، قد نرسل إليكم رسائل تسويقية أو نشرات عن خدماتنا ورؤى القطاع والتحديثات. يمكنكم إلغاء الاشتراك في أي وقت عبر:",
        ),
        ul(
          [
            "Clicking the “Unsubscribe” link in any marketing email.",
            "Contacting us directly at replaofficials@gmail.com with your opt-out request.",
          ],
          [
            "النقر على رابط «إلغاء الاشتراك» في أي رسالة تسويقية.",
            "التواصل معنا مباشرة على replaofficials@gmail.com لطلب إلغاء الاشتراك.",
          ],
        ),
        p(
          "Please note that even after opting out of marketing communications, we may still send you transactional or service-related messages necessary for an ongoing project or engagement.",
          "حتى بعد إلغاء الاشتراك في الاتصالات التسويقية، قد نواصل إرسال رسائل تشغيلية أو متعلقة بالخدمة لازمة لمشروع أو تعاقد قائم.",
        ),
      ],
    },
    {
      title: L("14. Changes to This Privacy Policy", "14. التغييرات على سياسة الخصوصية هذه"),
      blocks: [
        p(
          "We reserve the right to update this Privacy Policy at any time. When we make significant changes, we will update the “Last updated” date at the top of this document and, where appropriate, notify you by email or via a notice on our Website.",
          "نحتفظ بالحق في تحديث سياسة الخصوصية هذه في أي وقت. عند إجراء تغييرات جوهرية، سنحدّث تاريخ «آخر تحديث» في أعلى هذه الوثيقة، وحيثما يكون مناسباً سنُعلمكم بالبريد الإلكتروني أو عبر إشعار على الموقع.",
        ),
        p(
          "We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.",
          "نحثكم على مراجعة سياسة الخصوصية هذه دورياً للبقاء على اطلاع بكيفية حماية معلوماتكم.",
        ),
      ],
    },
    {
      title: L("15. Contact Us", "15. تواصلوا معنا"),
      blocks: [
        p(
          "If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please contact us:",
          "إذا كانت لديكم أسئلة أو مخاوف أو طلبات بشأن سياسة الخصوصية هذه أو كيفية تعاملنا مع بياناتكم الشخصية، تواصلوا معنا:",
        ),
        p("Repla", "Repla"),
        p("Website: https://www.replatechnologies.com/", "الموقع: https://www.replatechnologies.com/"),
        p("Email: replaofficials@gmail.com", "البريد: replaofficials@gmail.com"),
        p(
          "We aim to respond to all privacy-related inquiries within 5 business days.",
          "نسعى للرد على جميع الاستفسارات المتعلقة بالخصوصية خلال 5 أيام عمل.",
        ),
      ],
    },
  ],
};

export const terms = {
  title: L("Terms & Conditions", "الشروط والأحكام"),
  updated: L("Last updated: 2026", "آخر تحديث: 2026"),
  sections: [
    {
      title: L("1. Introduction", "1. المقدمة"),
      blocks: [
        p(
          "Welcome to Repla Technologies. These Terms and Conditions (“Terms”) govern your access to and use of the Repla Technologies website located at https://replatechnologies.com/ (the “Website”) and any services, products, or content offered by Repla Technologies (“we”, “us”, or “our”).",
          "مرحباً بكم في Repla Technologies. تحكم هذه الشروط والأحكام («الشروط») وصولكم إلى موقع Repla Technologies على https://replatechnologies.com/ («الموقع») واستخدامه، وأي خدمات أو منتجات أو محتوى تقدمه Repla Technologies («نحن»).",
        ),
        p(
          "By accessing or using our Website, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please discontinue use of our Website immediately.",
          "بدخولكم إلى موقعنا أو استخدامه، تؤكدون أنكم قرأتم هذه الشروط وفهمتموها ووافقتم على الالتزام بها. إذا لم توافقوا، يرجى التوقف عن استخدام الموقع فوراً.",
        ),
        p(
          "We reserve the right to update or modify these Terms at any time without prior notice. Continued use of the Website after any changes constitutes your acceptance of the revised Terms.",
          "نحتفظ بالحق في تحديث هذه الشروط أو تعديلها في أي وقت دون إشعار مسبق. استمرار استخدام الموقع بعد أي تغيير يُعد قبولاً للشروط المعدّلة.",
        ),
      ],
    },
    {
      title: L("2. Services Offered", "2. الخدمات المقدّمة"),
      blocks: [
        p(
          "Repla Technologies is a global software development company providing the following services:",
          "Repla Technologies شركة عالمية لتطوير البرمجيات تقدّم الخدمات التالية:",
        ),
        ul(
          [
            "Custom software development and engineering",
            "Mobile application development (iOS and Android)",
            "Web application and platform development",
            "UI/UX design and product strategy",
            "AI-powered solutions and integrations",
            "Cloud infrastructure and DevOps services",
            "Quality assurance and testing",
            "Ongoing product maintenance and support",
          ],
          [
            "تطوير البرمجيات المخصصة والهندسة",
            "تطوير تطبيقات الجوال (iOS وAndroid)",
            "تطوير تطبيقات ومنصات الويب",
            "تصميم الواجهات وتجربة المستخدم واستراتيجية المنتج",
            "حلول وتكاملات قائمة على الذكاء الاصطناعي",
            "البنية السحابية وخدمات DevOps",
            "ضمان الجودة والاختبار",
            "صيانة المنتج والدعم المستمر",
          ],
        ),
        p(
          "All services are subject to separate agreements, proposals, or statements of work agreed upon between Repla Technologies and the client prior to project commencement.",
          "تخضع جميع الخدمات لاتفاقيات أو عروض أو بيانات عمل منفصلة يُتفق عليها بين Repla Technologies والعميل قبل بدء المشروع.",
        ),
      ],
    },
    {
      title: L("3. Eligibility", "3. الأهلية"),
      blocks: [
        p(
          "By using this Website, you represent and warrant that:",
          "باستخدام هذا الموقع، تقرّون وتضمنون أن:",
        ),
        ul(
          [
            "You are at least 18 years of age.",
            "You have the legal capacity and authority to enter into these Terms.",
            "You are not prohibited from using our services under applicable laws of your jurisdiction.",
          ],
          [
            "عمركم 18 عاماً على الأقل.",
            "لديكم الأهلية القانونية والصلاحية للدخول في هذه الشروط.",
            "لا يُحظر عليكم استخدام خدماتنا بموجب القوانين المعمول بها في ولايتكم القضائية.",
          ],
        ),
        p(
          "If you are accessing the Website on behalf of a company or organization, you represent that you have the authority to bind that entity to these Terms.",
          "إذا كنتم تدخلون الموقع نيابة عن شركة أو مؤسسة، تقرّون بأن لديكم صلاحية إلزام تلك الجهة بهذه الشروط.",
        ),
      ],
    },
    {
      title: L("4. Intellectual Property", "4. الملكية الفكرية"),
      blocks: [
        p(
          "All content on this Website including but not limited to text, graphics, logos, icons, images, audio clips, and software is the exclusive property of Repla Technologies or its content suppliers and is protected by applicable intellectual property laws.",
          "جميع محتوى هذا الموقع بما في ذلك على سبيل المثال لا الحصر النصوص والرسوم والشعارات والأيقونات والصور والمقاطع الصوتية والبرمجيات هو ملك حصري لـ Repla Technologies أو لمورّدي المحتوى، ومحمي بقوانين الملكية الفكرية المعمول بها.",
        ),
        p(
          "You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from this Website without our prior written consent.",
          "لا يجوز لكم نسخ أي محتوى من هذا الموقع أو توزيعه أو تعديله أو إنشاء أعمال مشتقة منه أو عرضه علناً أو استغلاله دون موافقتنا الخطية المسبقة.",
        ),
        p(
          "Any software, tools, or deliverables created specifically for a client project are governed by the intellectual property terms outlined in the applicable project agreement or contract.",
          "أي برمجيات أو أدوات أو مخرجات تُنشأ خصيصاً لمشروع عميل تخضع لشروط الملكية الفكرية المبينة في اتفاقية المشروع أو العقد المعمول به.",
        ),
      ],
    },
    {
      title: L("5. Acceptable Use", "5. الاستخدام المقبول"),
      blocks: [
        p(
          "When using our Website or communicating with Repla Technologies, you agree not to:",
          "عند استخدام موقعنا أو التواصل مع Repla Technologies، توافقون على عدم:",
        ),
        ul(
          [
            "Transmit any content that is unlawful, harmful, defamatory, obscene, or otherwise objectionable.",
            "Use the Website to send unsolicited commercial communications (spam).",
            "Attempt to gain unauthorized access to our systems, servers, or networks.",
            "Reverse engineer, decompile, or disassemble any portion of the Website.",
            "Interfere with or disrupt the integrity or performance of the Website.",
            "Impersonate any person or entity or misrepresent your affiliation with any person or entity.",
            "Use the Website for any fraudulent, deceptive, or illegal purpose.",
          ],
          [
            "إرسال أي محتوى غير قانوني أو ضار أو تشهيري أو فاحش أو مرفوض بأي شكل آخر.",
            "استخدام الموقع لإرسال اتصالات تجارية غير مرغوب فيها (بريد عشوائي).",
            "محاولة الوصول غير المصرح به إلى أنظمتنا أو خوادمنا أو شبكاتنا.",
            "الهندسة العكسية لأي جزء من الموقع أو فك تجميعه أو تفكيكه.",
            "التدخل في سلامة الموقع أو أدائه أو تعطيلهما.",
            "انتحال صفة أي شخص أو جهة أو تحريف صلتكم بأي شخص أو جهة.",
            "استخدام الموقع لأي غرض احتيالي أو مضلل أو غير قانوني.",
          ],
        ),
        p(
          "Repla Technologies reserves the right to terminate access to the Website for any user found in violation of these guidelines.",
          "تحتفظ Repla Technologies بالحق في إنهاء وصول أي مستخدم إلى الموقع إذا تبيّن انتهاكه لهذه الإرشادات.",
        ),
      ],
    },
    {
      title: L("6. Privacy Policy", "6. سياسة الخصوصية"),
      blocks: [
        p(
          "Your use of the Website is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Website, you consent to the collection and use of your information as outlined in our Privacy Policy.",
          "يخضع استخدامكم للموقع أيضاً لسياسة الخصوصية الخاصة بنا، والمدرجة في هذه الشروط بالإحالة. باستخدام الموقع، توافقون على جمع معلوماتكم واستخدامها كما هو مبيّن في سياسة الخصوصية.",
        ),
        p(
          "Repla Technologies is committed to protecting your personal data in compliance with applicable data protection regulations, including GDPR where applicable.",
          "تلتزم Repla Technologies بحماية بياناتكم الشخصية امتثالاً للوائح حماية البيانات المعمول بها، بما في ذلك اللائحة العامة لحماية البيانات حيثما انطبقت.",
        ),
      ],
    },
    {
      title: L("7. Client Projects & Agreements", "7. مشاريع العملاء والاتفاقيات"),
      blocks: [
        p(
          "Engagement with Repla Technologies for any software development or consulting services requires a separate written agreement, including a proposal, contract, or Statement of Work (SOW). These Terms do not replace or supersede any such project-specific agreements.",
          "يتطلب التعاون مع Repla Technologies لأي خدمات تطوير برمجيات أو استشارات اتفاقية مكتوبة منفصلة، بما في ذلك عرض أو عقد أو بيان عمل. لا تحل هذه الشروط محل أي اتفاقيات خاصة بالمشروع ولا تعلو عليها.",
        ),
        p(
          "Project timelines, deliverables, payment terms, and intellectual property ownership will be defined in individual client agreements. In the event of any conflict between these Terms and a project-specific agreement, the project-specific agreement shall prevail.",
          "تُحدَّد الجداول الزمنية والمخرجات وشروط الدفع وملكية الملكية الفكرية في اتفاقيات العملاء الفردية. عند أي تعارض بين هذه الشروط واتفاقية خاصة بالمشروع، تسود اتفاقية المشروع.",
        ),
      ],
    },
    {
      title: L("8. Payments & Invoicing", "8. المدفوعات والفوترة"),
      blocks: [
        p(
          "Payment terms for Repla Technologies services are defined in individual client proposals or contracts. Unless otherwise agreed:",
          "تُحدَّد شروط الدفع لخدمات Repla Technologies في عروض العملاء أو العقود الفردية. ما لم يُتفق على خلاف ذلك:",
        ),
        ul(
          [
            "Invoices are due within the period specified in the project agreement.",
            "Late payments may attract interest or suspension of services.",
            "All fees are exclusive of applicable taxes unless stated otherwise.",
            "Refunds, if applicable, are subject to the terms of the individual project agreement.",
          ],
          [
            "تستحق الفواتير خلال المدة المحددة في اتفاقية المشروع.",
            "قد يترتب على التأخر في الدفع فوائد أو تعليق الخدمات.",
            "جميع الرسوم لا تشمل الضرائب المعمول بها ما لم يُذكر خلاف ذلك.",
            "تخضع المبالغ المستردة، إن وُجدت، لشروط اتفاقية المشروع الفردية.",
          ],
        ),
        p(
          "For payment inquiries, please contact us at replatechnologies@gmail.com.",
          "لاستفسارات الدفع، تواصلوا معنا على replatechnologies@gmail.com.",
        ),
      ],
    },
    {
      title: L("9. Confidentiality", "9. السرية"),
      blocks: [
        p(
          "Both parties agree to keep confidential any proprietary or sensitive information shared during the course of a project engagement. Repla Technologies will not disclose client-specific information, data, or project details to third parties without prior written consent, except as required by law.",
          "يتفق الطرفان على الحفاظ على سرية أي معلومات ملكية أو حساسة تُشارك أثناء مشروع. لن تفصح Repla Technologies عن معلومات العميل أو بياناته أو تفاصيل مشروعه لأطراف ثالثة دون موافقة خطية مسبقة، إلا إذا تطلب القانون ذلك.",
        ),
        p(
          "Clients are equally expected to treat Repla Technologies’ methodologies, processes, pricing, and internal documentation as confidential.",
          "يُتوقَّع من العملاء كذلك التعامل مع منهجيات Repla Technologies وعملياتها وتسعيرها ووثائقها الداخلية على أنها سرية.",
        ),
      ],
    },
    {
      title: L("10. Disclaimers", "10. إخلاء المسؤولية"),
      blocks: [
        p(
          "The Website and its content are provided on an “as is” and “as available” basis without warranties of any kind, either express or implied, including but not limited to:",
          "يُقدَّم الموقع ومحتواه «كما هو» و«حسب التوفر» دون ضمانات من أي نوع، صريحة أو ضمنية، بما في ذلك على سبيل المثال لا الحصر:",
        ),
        ul(
          [
            "Warranties of merchantability or fitness for a particular purpose.",
            "Warranties that the Website will be uninterrupted, error-free, or free of viruses.",
            "Warranties regarding the accuracy, completeness, or reliability of any content.",
          ],
          [
            "ضمانات القابلية للتسويق أو الملاءمة لغرض معيّن.",
            "ضمانات بأن الموقع سيعمل دون انقطاع أو أخطاء أو فيروسات.",
            "ضمانات بشأن دقة أي محتوى أو اكتماله أو موثوقيته.",
          ],
        ),
        p(
          "Repla Technologies makes no representations or guarantees regarding the outcomes of any services or advice provided through this Website.",
          "لا تقدّم Repla Technologies أي إقرارات أو ضمانات بشأن نتائج أي خدمات أو مشورة تُقدَّم عبر هذا الموقع.",
        ),
      ],
    },
    {
      title: L("11. Limitation of Liability", "11. تحديد المسؤولية"),
      blocks: [
        p(
          "To the fullest extent permitted by applicable law, Repla Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Website or our services, including but not limited to:",
          "إلى أقصى حد يسمح به القانون المعمول به، لا تُسأل Repla Technologies عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية ناشئة عن استخدامكم للموقع أو خدماتنا أو مرتبطة به، بما في ذلك على سبيل المثال لا الحصر:",
        ),
        ul(
          [
            "Loss of revenue, profits, or business opportunities.",
            "Loss of data or business interruption.",
            "Any errors or omissions in Website content.",
          ],
          [
            "خسارة الإيرادات أو الأرباح أو الفرص التجارية.",
            "فقدان البيانات أو انقطاع الأعمال.",
            "أي أخطاء أو سهو في محتوى الموقع.",
          ],
        ),
        p(
          "In no event shall Repla Technologies’ total liability to you exceed the amount paid by you, if any, for accessing the services giving rise to the claim in the twelve (12) months preceding the event.",
          "لا يتجاوز إجمالي مسؤولية Repla Technologies تجاهكم في أي حال المبلغ الذي دفعتموه، إن وُجد، مقابل الوصول إلى الخدمات محل المطالبة خلال الاثني عشر (12) شهراً السابقة للواقعة.",
        ),
      ],
    },
    {
      title: L("12. Third-Party Links", "12. روابط الطرف الثالث"),
      blocks: [
        p(
          "Our Website may contain links to third-party websites or services that are not owned or controlled by Repla Technologies. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.",
          "قد يحتوي موقعنا على روابط لمواقع أو خدمات طرف ثالث لا تملكها Repla Technologies ولا تتحكم فيها. لا نسيطر على محتوى تلك المواقع أو سياسات خصوصيتها أو ممارساتها ولسنا مسؤولين عنها.",
        ),
        p(
          "We encourage you to review the terms and privacy policies of any third-party sites you visit. Inclusion of any link does not imply endorsement by Repla Technologies.",
          "نحثكم على مراجعة شروط وسياسات الخصوصية لأي مواقع طرف ثالث تزورونها. إدراج أي رابط لا يعني تأييداً من Repla Technologies.",
        ),
      ],
    },
    {
      title: L("13. Governing Law & Jurisdiction", "13. القانون الحاكم والاختصاص"),
      blocks: [
        p(
          "These Terms shall be governed by and construed in accordance with the applicable laws of the jurisdiction in which Repla Technologies is registered and operates. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts in that jurisdiction.",
          "تخضع هذه الشروط وتُفسَّر وفقاً للقوانين المعمول بها في الولاية القضائية التي سُجّلت فيها Repla Technologies وتعمل منها. تخضع أي نزاعات ناشئة عن هذه الشروط للاختصاص الحصري للمحاكم المختصة في تلك الولاية.",
        ),
        p(
          "For international clients, disputes may be resolved through mutually agreed alternative dispute resolution mechanisms, including mediation or arbitration, as outlined in the project agreement.",
          "بالنسبة للعملاء الدوليين، قد تُسوَّى النزاعات عبر آليات بديلة يتفق عليها الطرفان، بما في ذلك الوساطة أو التحكيم، كما هو مبيّن في اتفاقية المشروع.",
        ),
      ],
    },
    {
      title: L("14. Changes to These Terms", "14. التغييرات على هذه الشروط"),
      blocks: [
        p(
          "Repla Technologies reserves the right to revise these Terms at any time. Changes will be effective immediately upon posting to the Website. The “Last updated” date at the top of this document will be updated accordingly.",
          "تحتفظ Repla Technologies بالحق في مراجعة هذه الشروط في أي وقت. تسري التغييرات فور نشرها على الموقع. سيُحدَّث تاريخ «آخر تحديث» في أعلى هذه الوثيقة تبعاً لذلك.",
        ),
        p(
          "We encourage you to review these Terms periodically to stay informed of any updates. Your continued use of the Website following any changes constitutes your acceptance of the revised Terms.",
          "نحثكم على مراجعة هذه الشروط دورياً للبقاء على اطلاع بأي تحديثات. استمرار استخدامكم للموقع بعد أي تغيير يُعد قبولاً للشروط المعدّلة.",
        ),
      ],
    },
    {
      title: L("15. Contact Us", "15. تواصلوا معنا"),
      blocks: [
        p(
          "If you have any questions, concerns, or requests regarding these Terms and Conditions, please reach out to us:",
          "إذا كانت لديكم أسئلة أو مخاوف أو طلبات بشأن هذه الشروط والأحكام، تواصلوا معنا:",
        ),
        p("Repla Technologies", "Repla Technologies"),
        p("Website: https://replatechnologies.com/", "الموقع: https://replatechnologies.com/"),
        p("Email: replatechnologies@gmail.com", "البريد: replatechnologies@gmail.com"),
        p(
          "We aim to respond to all inquiries within 2 business days.",
          "نسعى للرد على جميع الاستفسارات خلال يومي عمل.",
        ),
      ],
    },
  ],
};
