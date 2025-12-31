/**
 * SEO Configuration and Optimization Utilities
 * This file contains SEO-related configurations and helper functions
 */

// Core SEO Configuration
export const SEO_CONFIG = {
  siteName: 'شركة لمسة للنظافة',
  siteUrl: 'http://lamsa-clean.com',
  defaultTitle: 'خدمات النظافة والتعقيم في الرياض | شركة لمسة للنظافة',
  defaultDescription: 'نقدم أفضل خدمات التنظيف الشامل للمنازل، المكاتب، السجاد، النوافذ، والتعقيم في الرياض باستخدام أحدث التقنيات ومواد صديقة للبيئة.',
  author: 'شركة لمسة للنظافة',
  keywords: [
    'نظافة الرياض',
    'تنظيف منازل الرياض',
    'مكافحة حشرات الرياض',
    'تنظيف مكاتب الرياض',
    'تنظيف سجاد الرياض',
    'تنظيف خزانات الرياض',
    'تعقيم الرياض',
    'شركة نظافة الرياض',
    'أفضل شركة تنظيف الرياض',
    'خدمات النظافة الرياض'
  ],
  social: {
    twitter: '@RiyadhCleaning',
    facebook: 'https://www.facebook.com/riyadhcleaning',
    instagram: 'https://www.instagram.com/riyadhcleaning',
  },
  contact: {
    phone: '+966500000000',
    email: 'info@lamsa-clean.com',
    whatsapp: 'https://wa.me/966500000000'
  },
  business: {
    name: 'شركة لمسة للنظافة',
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
      creator: SEO_CONFIG.social.twitter,
    }
  }
}

// Service-specific structured data
export const SERVICES_SCHEMA = [
  {
    name: 'تنظيف المنازل في الرياض',
    description: 'خدمات تنظيف شاملة للمنازل والشقق والفلل',
    category: 'تنظيف منازل',
    keywords: ['تنظيف منازل', 'تنظيف شقق', 'تنظيف فلل', 'تنظيف كنب']
  },
  {
    name: 'مكافحة الحشرات في الرياض',
    description: 'مكافحة جميع أنواع الحشرات بطرق آمنة وفعالة',
    category: 'مكافحة حشرات',
    keywords: ['مكافحة حشرات', 'رش مبيدات', 'مكافحة النمل', 'مكافحة الصراصير']
  },
  {
    name: 'تنظيف السجاد والموكيت',
    description: 'تنظيف وغسيل السجاد والموكيت بأحدث الأجهزة',
    category: 'تنظيف سجاد',
    keywords: ['تنظيف سجاد', 'غسيل موكيت', 'تنظيف كليم', 'تجفيف سجاد']
  },
  {
    name: 'تنظيف الخزانات',
    description: 'تنظيف وتعقيم خزانات المياه العلوية والأرضية',
    category: 'تنظيف خزانات',
    keywords: ['تنظيف خزانات', 'تعقيم خزانات', 'عزل خزانات', 'صيانة خزانات']
  },
  {
    name: 'تنظيف المكاتب والشركات',
    description: 'خدمات تنظيف متخصصة للمكاتب والشركات',
    category: 'تنظيف مكاتب',
    keywords: ['تنظيف مكاتب', 'تنظيف شركات', 'نظافة يومية', 'صيانة مكاتب']
  },
  {
    name: 'التعقيم والتطهير',
    description: 'خدمات التعقيم الشامل للمباني والمرافق',
    category: 'تعقيم',
    keywords: ['تعقيم', 'تطهير', 'مكافحة عدوى', 'تعقيم كورونا']
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
    'Cleaning Service',
    'Pest Control Service',
    'Carpet Cleaning Service',
    'Commercial Cleaning Service'
  ],
  paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
  priceRange: '$$',
  serviceRadius: '50km',
  languages: ['Arabic', 'English']
}