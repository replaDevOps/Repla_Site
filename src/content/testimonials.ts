import { L, type L as LocaleString } from "./types";

export type Testimonial = {
  id: string;
  name: LocaleString;
  role: LocaleString;
  company: LocaleString;
  location?: LocaleString;
  review: LocaleString;
  rating: 5;
  initials: string;
};

/** Replace with verified client reviews when available. */
export const testimonials: Testimonial[] = [
  {
    id: "sample-1",
    name: L("Sarah K.", "سارة ك."),
    role: L("Operations Director", "مديرة العمليات"),
    company: L("Logistics Platform", "منصة لوجستية"),
    location: L("Saudi Arabia", "المملكة العربية السعودية"),
    review: L(
      "Repla Technologies delivered a solution that closely matched our business requirements and expectations. Their team took the time to understand our goals and translated them into a practical, well-designed product. Communication throughout the project was clear, responsive, and professional. They handled feedback efficiently and maintained a strong focus on quality and performance. We were impressed with their commitment to delivering the project on schedule.",
      "قدمت REPLA Technologies حلاً يتوافق عن كثب مع متطلبات أعمالنا وتوقعاتنا. أخذ الفريق الوقت الكافي لفهم أهدافنا وترجمها إلى منتج عملي ومصمم بعناية. كان التواصل طوال المشروع واضحاً وسريع الاستجابة ومحترفاً. تعاملوا مع الملاحظات بكفاءة وحافظوا على تركيز قوي على الجودة والأداء. وقد أعجبنا التزامهم بتسليم المشروع في الموعد المحدد.",
    ),
    rating: 5,
    initials: "SK",
  },
  {
    id: "sample-2",
    name: L("Omar H.", "عمر ح."),
    role: L("CTO", "المدير التقني"),
    company: L("Healthcare Startup", "شركة ناشئة في الرعاية الصحية"),
    location: L("UAE", "الإمارات"),
    review: L(
      "From discovery through launch, communication remained clear, structured, and consistent. The web platform they built is stable, secure, and thoughtfully designed, making it easy for our team to manage and extend. Their attention to detail and understanding of our requirements made the entire development process smooth and efficient.",
      "من مرحلة الاكتشاف حتى الإطلاق، بقي التواصل واضحاً ومنظماً ومتسقاً. المنصة التي بنوها مستقرة وآمنة ومصممة بعناية، ما يسهّل على فريقنا إدارتها وتوسيعها. اهتمامهم بالتفاصيل وفهمهم لمتطلباتنا جعل عملية التطوير بأكملها سلسة وفعّالة.",
    ),
    rating: 5,
    initials: "OH",
  },
  {
    id: "sample-3",
    name: L("Emily R.", "إميلي ر."),
    role: L("Product Manager", "مديرة المنتج"),
    company: L("Retail Brand", "علامة تجارية"),
    location: L("United Kingdom", "المملكة المتحدة"),
    review: L(
      "They understood our business goals before writing code. The digital experience feels polished, and handover documentation made ongoing updates straightforward.",
      "فهموا أهداف أعمالنا قبل كتابة الكود. التجربة الرقمية تبدو متقنة، ووثائق التسليم جعلت التحديثات اللاحقة سهلة.",
    ),
    rating: 5,
    initials: "ER",
  },
  {
    id: "sample-4",
    name: L("Khalid A.", "خالد أ."),
    role: L("Founder", "المؤسس"),
    company: L("FinTech Venture", "مشروع تقنية مالية"),
    location: L("Saudi Arabia", "المملكة العربية السعودية"),
    review: L(
      "Repla Technologies helped us turn a complex idea into a working product. Their engineering approach balanced speed with the compliance considerations we needed.",
      "ساعدتنا REPLA Technologies على تحويل فكرة معقدة إلى منتج يعمل. نهجهم الهندسي وازن بين السرعة واعتبارات الامتثال التي احتجناها.",
    ),
    rating: 5,
    initials: "KA",
  },
  {
    id: "sample-5",
    name: L("Priya N.", "Priya N."),
    role: L("Engineering Lead", "قائدة الهندسة"),
    company: L("SaaS Company", "شركة SaaS"),
    location: L("Singapore", "سنغافورة"),
    review: L(
      "The team integrated cleanly with our existing stack and kept delivery transparent. We appreciated the attention to performance and maintainability.",
      "اندمج الفريق بسلاسة مع مجموعتنا التقنية الحالية وأبقى التسليم شفافاً. قدّرنا الاهتمام بالأداء وقابلية الصيانة.",
    ),
    rating: 5,
    initials: "PN",
  },
  {
    id: "sample-6",
    name: L("Daniel M.", "دانيال م."),
    role: L("CEO", "الرئيس التنفيذي"),
    company: L("Enterprise Services", "خدمات مؤسسية"),
    location: L("United States", "الولايات المتحدة"),
    review: L(
      "Professional from the first call to final deployment. Repla Technologies delivered a technology solution our stakeholders could trust and our users could adopt quickly.",
      "احترافية من المكالمة الأولى حتى النشر النهائي. قدمت REPLA Technologies حلاً تقنياً يثق به أصحاب المصلحة ويتبناه المستخدمون بسرعة.",
    ),
    rating: 5,
    initials: "DM",
  },
];
