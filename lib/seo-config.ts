/**
 * SEO Configuration and Optimization Utilities
 * This file contains SEO-related configurations and helper functions
 */

// Core SEO Configuration
export const SEO_CONFIG = {
  siteName: 'شركة أيقونة العزل بالرياض',
  siteUrl: 'https://ic-elazl.sa',
  defaultTitle: 'خدمات النظافة والتعقيم في الرياض | شركة لمسة للنظافة',
  defaultDescription: 'نقدم أفضل خدمات التنظيف الشامل للمنازل، المكاتب، السجاد، النوافذ، والتعقيم في الرياض باستخدام أحدث التقنيات ومواد صديقة للبيئة.',
  author: 'شركة لمسة للنظافة',

  keywords: [
    'شركة عزل اسطح بالرياض',
    'شركة عزل فوم بجدة',
    'عزل خزانات المياه بالدمام',
    'كشف تسربات المياه بالخبر',
    'عزل فوم بالدمام',
    'شركة عزل اسطح بمكة',
    'عزل مسابح بالمدينة المنورة',
    'كشف تسربات المياه بالطائف',
    'عزل فوم بحائل',
    'شركة عزل اسطح بجازان',
    'عزل خزانات المياه بابها',
    'كشف تسربات المياه بتبوك',

    'عزل فوم',
    'شركة عزل اسطح',
    'كشف تسربات المياه',
    'عزل خزانات',
    'عزل مسابح',
    'صيانة خزانات',
    'عزل اسطح مبلطة',
    'عزل شينكو',
    'عزل مائي وحراري',
    'شركة عزل معتمدة',

    'عزل فوم بولي يوريثان',
    'عزل فوم رخيص',
    'كشف تسربات بدون تكسير',
    'عزل خزانات علوي',
    'عزل خزانات ارضي',
    'عزل مسابح خرسانية',
    'عزل اسطح حديد',
    'عزل اسطح زينكو',
    'عزل حمامات ومطابخ',
    'كشف تسربات المياه بالضغط',

    'عزل اسطح مبلطة بالفوم',
    'عزل فوم بولي يوريثان 5 سم',
    'كشف تسربات المياه بدون تكسير بالرياض',
    'عزل خزانات مياه شرب معتمد',
    'عزل مسابح من الداخل والخارج',
    'عزل فوم للاسطح المائلة',
    'عزل اسطح شينكو بالضمان',
    'عزل مائي وحراري للخزانات',
    'كشف تسربات شبكات المياه الرئيسية',
    'عزل فوم مقاوم للحريق',
    'عزل اسطح مبلطة ضد التشقق',
    'عزل خزانات مياه مع ضمان 10 سنوات',

    'شركة عزل معتمدة من الدفاع المدني',
    'تقرير كشف تسربات معتمد',
    'عزل فوم معتمد بشهادة ضمان',
    'شركة كشف تسربات معتمدة',
    'عزل خزانات مياه معتمد من الصحة',
    'تقرير فحص خزانات معتمد',
    'عزل مسابح معتمد بمواصفات دولية',
    'شركة عزل فوم حاصلة على شهادة ISO',
    'فحص كشف تسربات معتمد من شركة المياه',
    'عزل اسطح معتمد ضد الرطوبة',
    'شركة عزل معتمدة في الرياض',
    'تقرير كشف تسربات معتمد للتأمين'
  ],
  social: {
    tiktok: 'https://www.tiktok.com/@iconaelazll?_t=ZS-8xflqHWkUZb&_r=1',
    facebook: 'https://www.facebook.com/people/%D8%A7%D9%8A%D9%82%D9%88%D9%86%D8%A9-%D8%A7%D9%84%D8%B9%D8%B2%D9%84/61577789109248/?rdid=neiz6gv4WQuHhMv7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Aw6pvAsz7%2F',
    instagram: 'https://www.instagram.com/iconaelazll/',
  },
  contact: {
    phone: '+966507961706',
    email: 'info@lamsa-clean.com',
    whatsapp: 'https://wa.me/966507961706'
  },
  business: {
    name: 'شركة أيقونة العزل بالرياض ',
    address: {
      street: 'حي النرجس',
      city: 'الرياض',
      region: 'الرياض',
      postalCode: '11564',
      country: 'SA'
    },
    geo: {
      latitude: 24.7136,
      longitude: 46.6753
    },
    hours: '24/7',
    priceRange: '$$'
  }
}

// Generate meta tags for specific pages
export function generatePageMetadata({
  title,
  description,
  keywords,
  canonical,
  noindex = false
}: {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  noindex?: boolean
}) {
  return {
    title: title ? `${title} | ${SEO_CONFIG.siteName}` : SEO_CONFIG.defaultTitle,
    description: description || SEO_CONFIG.defaultDescription,
    keywords: keywords ? [...SEO_CONFIG.keywords, ...keywords] : SEO_CONFIG.keywords,
    robots: {
      index: !noindex,
      follow: !noindex,
      nocache: false,
    },
    alternates: {
      canonical: canonical || SEO_CONFIG.siteUrl,
    },
    openGraph: {
      title: title || SEO_CONFIG.defaultTitle,
      description: description || SEO_CONFIG.defaultDescription,
      url: canonical || SEO_CONFIG.siteUrl,
      siteName: SEO_CONFIG.siteName,
      locale: 'ar_SA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title || SEO_CONFIG.defaultTitle,
      description: description || SEO_CONFIG.defaultDescription,
      creator: SEO_CONFIG.social.tiktok,
    }
  }
}

// Service-specific structured data
export const SERVICES_SCHEMA = [
  {
    name: 'عزل صوتي للجدران بالرياض',
    description: 'خدمة العزل الصوتي للجدران والأسقف باستخدام أحدث المواد العازلة للضوضاء. نضمن لك الهدوء والراحة في منزلك أو مكتبك.',
    category: 'عزل صوتي',
    keywords: ['عزل صوتي', 'عزل جدران', 'عزل استوديوهات', 'منع الضوضاء', 'ألواح عزل صوتي']
  },
  {
    name: 'عزل حمامات ومطابخ',
    description: 'عزل مائي متخصص للحمامات والمطابخ قبل وبعد البلاط. حماية كاملة من تسربات المياه للأسقف السفلية والجدران المجاورة.',
    category: 'عزل مائي داخلي',
    keywords: ['عزل حمامات', 'عزل مطابخ', 'عزل قبل البلاط', 'عزل الأسطح الخرسانية']
  },
  {
    name: 'عزل فوم للأسطح',
    description: 'عزل فوم بولي يوريثان ثنائي المفعول (حراري ومائي) للأسطح الخرسانية والمعدنية. حماية كاملة من الحرارة والأمطار مع ضمان طويل المدى.',
    category: 'عزل فوم',
    keywords: ['عزل فوم', 'عزل بولي يوريثان', 'عزل حراري مائي', 'عزل اسطح شينكو']
  },
  {
    name: 'عزل الأسطح المبلطة',
    description: 'تقنيات حديثة لعزل الأسطح المبلطة دون الحاجة للتكسير. استخدام عوازل شفافة ومطاطية تمنع التسرب وتحافظ على شكل السطح.',
    category: 'عزل اسطح',
    keywords: ['عزل فوق البلاط', 'عزل بدون تكسير', 'عزل شفاف', 'عزل مائي للبلاط']
  },
  {
    name: 'عزل الشينكو والهناجر',
    description: 'عزل متخصص للأسطح المعدنية (الشينكو) والمستودعات. حماية من الصدأ وخفض درجة الحرارة الداخلية بشكل ملحوظ.',
    category: 'عزل شينكو',
    keywords: ['عزل شينكو', 'عزل هناجر', 'عزل مستودعات', 'رش فوم أمريكي']
  },
  {
    name: 'مكافحة الحشرات ورش المبيدات',
    description: 'خدمات مكافحة جميع أنواع الحشرات الزاحفة والطائرة والقوارض بمبيدات آمنة وفعالة مع الضمان.',
    category: 'مكافحة حشرات',
    keywords: ['مكافحة حشرات', 'رش مبيدات', 'مكافحة النمل الأبيض', 'مكافحة الصراصير']
  }
]

// FAQ Schema Data
export const FAQ_SCHEMA = [
  {
    question: 'ما هي أسعار خدمات التنظيف؟',
    answer: 'تختلف الأسعار حسب نوع الخدمة وحجم المكان. نقدم تقييم مجاني وعروض أسعار تنافسية.'
  },
  {
    question: 'هل تستخدمون مواد آمنة؟',
    answer: 'نعم، نستخدم مواد تنظيف صديقة للبيئة وآمنة على الأطفال والحيوانات الأليفة.'
  },
  {
    question: 'كم تستغرق عملية التنظيف؟',
    answer: 'يختلف الوقت حسب حجم المكان ونوع الخدمة، عادة من ساعتين إلى 8 ساعات.'
  },
  {
    question: 'هل تقدمون ضمان على الخدمة؟',
    answer: 'نعم، نقدم ضمان جودة على جميع خدماتنا مع إمكانية الإعادة مجاناً في حالة عدم الرضا.'
  },
  {
    question: 'هل يمكن حجز الخدمة في نفس اليوم؟',
    answer: 'نعم، نقدم خدمة الحجز السريع ويمكننا الوصول في نفس اليوم حسب التوفر.'
  }
]

// Generate structured data for services
export function generateServiceSchema(service: typeof SERVICES_SCHEMA[0]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: SEO_CONFIG.business.name,
      telephone: SEO_CONFIG.contact.phone,
      email: SEO_CONFIG.contact.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SEO_CONFIG.business.address.street,
        addressLocality: SEO_CONFIG.business.address.city,
        addressRegion: SEO_CONFIG.business.address.region,
        postalCode: SEO_CONFIG.business.address.postalCode,
        addressCountry: SEO_CONFIG.business.address.country
      }
    },
    areaServed: {
      '@type': 'City',
      name: 'الرياض'
    },
    serviceType: service.category,
    keywords: service.keywords.join(', ')
  }
}

// Core Web Vitals optimization hints
export const PERFORMANCE_HINTS = {
  // Critical resource hints
  preconnectDomains: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.google-analytics.com',
    'https://www.googletagmanager.com'
  ],

  // DNS prefetch domains
  dnsPrefetchDomains: [
    '//www.facebook.com',
    '//www.instagram.com',
    '//twitter.com',
    '//api.whatsapp.com'
  ],

  // Preload critical resources
  preloadResources: [
    {
      href: '/fonts/TheYearofHandicrafts-Regular.otf',
      as: 'font',
      type: 'font/otf',
      crossOrigin: 'anonymous'
    }
  ]
}

// Local SEO configuration
export const LOCAL_SEO = {
  businessType: 'LocalBusiness',
  categories: [
    'Insulation Contractor',
    'Waterproofing Service',
    'Cleaning Service',
    'Pest Control Service',
    'Tank Cleaning Service'
  ],
  paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
  priceRange: '$$',
  serviceRadius: '50km',
  languages: ['Arabic', 'English']
}