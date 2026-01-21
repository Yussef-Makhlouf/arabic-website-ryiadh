import './globals.css'
import { Metadata } from 'next'
import localFont from 'next/font/local'
import { JsonLd } from 'react-schemaorg'
import { Organization } from 'schema-dts'
import Script from 'next/script'

// تعريف الخط الجديد
const theYearFont = localFont({
  src: './fonts/TheYearofHandicrafts-Regular.otf',
  variable: '--font-the-year',
  display: 'swap',
})


export const metadata: Metadata = {
  title: {
    default: 'شركة أيقونة العزل | شركة عزل فوم بالرياض | أفضل شركة عزل اسطح معتمدة | ضمان 15 سنة | 0507961706',
    template: '%s | شركة أيقونة العزل | 0507961706'
  },
  description: 'أفضل شركة عزل فوم بالرياض والخرج (0507961706). متخصصون في عزل الاسطح بالفوم بولي يوريثان، العزل المائي والحراري، عزل الشينكو، وعزل البلاط. شركة معتمدة لدى شركة الكهرباء، ضمان شامل 15 سنة، مواد أصلية، فحص مجاني، وأسعار منافسة. تخلص من حرارة الصيف وتسربات المياه الآن!',
  keywords: [
    'شركة عزل فوم بالرياض', 'عزل فوم بالرياض', 'أفضل شركة عزل اسطح بالرياض', 'عزل مائي وحراري', 'شركة عزل شينكو بالرياض',
    'عزل اسطح بالخرج', 'سعر متر عزل الفوم', 'عزل بولي يوريثان', 'شركات العزل المعتمدة', 'عزل اسطح مبلطة',
    'كشف تسربات المياه', 'عزل فوم بالخرج', 'شركة عزل موثوقة', 'رقم شركة عزل بالرياض', 'معلم عزل اسطح',
    'عزل مائي', 'عزل حراري', 'تكلفة عزل السطح', 'عزل هناجر ومستودعات', 'عزل فوم امريكي'
  ],
  authors: [{ name: 'شركة عزل اسطح الرياض' }],
  creator: 'شركة عزل اسطح الرياض',
  publisher: 'شركة عزل اسطح الرياض',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('http://elaazl.sa'),
  alternates: {
    canonical: 'http://elaazl.sa',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'http://elaazl.sa',
    siteName: 'شركة عزل اسطح الرياض - شركة أيقونة العزل الأفضل في الرياض والخرج',
    title: 'شركة عزل فوم بالرياض | ضمان 15 سنة | عزل مائي وحراري',
    description: 'هل تبحث عن أفضل شركة عزل فوم بالرياض؟ نقدم لك حلول عزل متكاملة (فوم، مائي، حراري) مع ضمان 15 سنة. مواد معتمدة وفريق فني محترف. اتصل بنا الآن 0507961706',
    images: [
      {
        url: 'http://elaazl.sa/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'شركة عزل فوم بالرياض - تنفيذ احترافي وضمان شامل',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'أقوى شركة عزل فوم بالرياض | عزل اسطح معتمد',
    description: 'احمِ منزلك من الحرارة والتسربات مع أفضل شركة عزل فوم بالرياض. ضمان 15 سنة وأسعار لا تقبل المنافسة.',
    images: ['http://elaazl.sa/logo.jpg'],
    creator: '@RiyadhInsulation',
    site: '@RiyadhInsulation',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Construction',
  classification: 'خدمات عزل المباني',
  referrer: 'origin-when-cross-origin',
  appleWebApp: {
    title: 'عزل فوم الرياض',
    statusBarStyle: 'default',
    capable: true,
  },
  applicationName: 'عزل اسطح الرياض',
  generator: 'Next.js',
  abstract: 'شركة رائدة في مجال عزل الأسطح بالفوم والعزل المائي والحراري في الرياض والخرج',
  archives: ['http://elaazl.sa/blog'],
  assets: ['http://elaazl.sa/'],
  bookmarks: ['http://elaazl.sa/services'],
  other: {
    'geo.region': 'SA-01',
    'geo.placename': 'Riyadh',
    'geo.position': '24.7136;46.6753',
    'ICBM': '24.7136, 46.6753',
    'DC.title': 'شركة عزل فوم بالرياض',
    'DC.creator': 'شركة عزل اسطح الرياض',
    'DC.subject': 'عزل اسطح، عزل فوم، عزل مائي، عزل خزانات',
    'DC.description': 'الشركة الأولى في الرياض لخدمات عزل الفوم والأسطح',
    'DC.publisher': 'شركة عزل اسطح الرياض',
    'DC.contributor': 'فريق عزل اسطح الرياض',
    'DC.date': '2025',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'http://elaazl.sa',
    'DC.language': 'ar',
    'DC.coverage': 'Riyadh, Al Kharj, Saudi Arabia',
    'DC.rights': 'حقوق النشر محفوظة لشركة عزل اسطح الرياض 2025',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Google Tag Manager */}

        {/* End Google Tag Manager */}

        <link rel="canonical" href="http://elaazl.sa" />
        <meta name="geo.region" content="SA-01" />
        <meta name="geo.placename" content="الرياض" />
        <meta name="geo.position" content="24.7136;46.6753" />
        <meta name="ICBM" content="24.7136, 46.6753" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="Arabic" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="عزل اسطح الرياض" />
        <meta name="application-name" content="عزل اسطح الرياض" />
        <meta name="msapplication-TileColor" content="#0d64ab" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#0d64ab" />
        <meta name="color-scheme" content="light" />

        {/* Performance and Loading Hints */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="format-detection" content="telephone=yes, date=no, email=no, address=no" />

        {/* Security Headers */}
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta name="referrer" content="origin-when-cross-origin" />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="شركة أيقونة العزل" />
        <meta name="copyright" content="© 2025 شركة أيقونة العزل. جميع الحقوق محفوظة" />
        <meta name="web_author" content="شركة أيقونة العزل" />
        <meta name="reply-to" content="info@lamsa-clean.com" />
        <meta name="owner" content="شركة أيقونة العزل" />
        <meta name="url" content="http://elaazl.sa" />
        <meta name="identifier-URL" content="http://elaazl.sa" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="شركة أيقونة العزل" />
        <meta name="category" content="خدمات عزل الأسطح" />
        <meta name="coverage" content="الرياض، الخرج، المملكة العربية السعودية" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="3 days" />
        <meta name="expires" content="never" />

        {/* Cache Control */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
        <meta httpEquiv="Pragma" content="cache" />

        {/* Favicon and Icons */}
        <link rel="icon" href="/logo.jpg" sizes="any" />
        <link rel="icon" href="/logo.jpg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <link rel="manifest" href="/manifest.json" />

        {/* Alternative Language Pages */}
        <link rel="alternate" hrefLang="ar" href="http://elaazl.sa" />
        <link rel="alternate" hrefLang="ar-SA" href="http://elaazl.sa" />
        <link rel="alternate" hrefLang="x-default" href="http://elaazl.sa" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch and Resource Hints */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.facebook.com" />
        <link rel="dns-prefetch" href="//www.instagram.com" />
        <link rel="dns-prefetch" href="//twitter.com" />
        <link rel="preconnect" href="https://api.whatsapp.com" crossOrigin="anonymous" />

        {/* Preload Critical Resources */}
        <link rel="preload" href="/fonts/TheYearofHandicrafts-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />





        {/* Schema.org Structured Data - Enhanced LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "http://elaazl.sa/#organization",
              "name": "شركة عزل اسطح الرياض | عزل فوم ومائي",
              "alternateName": ["شركة عزل فوم بالرياض", "مؤسسة عزل اسطح الرياض", "Riyadh Insulation Company"],
              "legalName": "شركة عزل اسطح الرياض للمقاولات",
              "description": "أفضل شركة عزل فوم بالرياض والخرج. نقدم خدمات عزل متكاملة: عزل فوم بولي يوريثان، عزل مائي، عزل حراري، وعزل شينكو. معتمدون ولدينا خبرة 15 عاماً. ضمان 15 سنة على جميع الأعمال.",
              "url": "http://elaazl.sa",
              "logo": "http://elaazl.sa/logo.jpg",
              "image": [
                "http://elaazl.sa/logo.jpg",
                "http://elaazl.sa/insulation-services.png",
                "http://elaazl.sa/attic-with-completed-spray-foam-insulation.webp"
              ],
              "telephone": "+966507961706",
              "faxNumber": "+966507961706",
              "email": "info@lamsa-clean.com",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "طريق الملك فهد، حي النرجس",
                "addressLocality": "الرياض",
                "addressRegion": "منطقة الرياض",
                "postalCode": "12345",
                "addressCountry": "SA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 24.7136,
                "longitude": 46.6753
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
                  "opens": "07:00",
                  "closes": "22:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Friday",
                  "opens": "13:00",
                  "closes": "22:00"
                }
              ],
              "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "Mada"],
              "currenciesAccepted": "SAR",
              "areaServed": [
                { "@type": "City", "name": "الرياض" },
                { "@type": "City", "name": "الخرج" },
                { "@type": "City", "name": "المزاحمية" },
                { "@type": "City", "name": "الدرعية" },
                { "@type": "City", "name": "ضرما" }
              ],
              "hasMap": "https://www.google.com/maps/search/?api=1&query=شركة+عزل+اسطح+الرياض",
              "sameAs": [
                "https://twitter.com/RiyadhInsulation",
                "https://www.instagram.com/riyadhinsulation",
                "https://www.facebook.com/riyadhinsulation",
                "https://www.youtube.com/@RiyadhInsulation"
              ],
              "makesOffer": [
                {
                  "@type": "Offer",
                  "name": "عرض عزل الفوم المتكامل",
                  "description": "خصم 20% على عزل الفوم للمساحات الكبيرة",
                  "priceCurrency": "SAR",
                  "availability": "https://schema.org/InStock",
                  "validFrom": "2024-01-01",
                  "areaServed": "الرياض والخرج"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "2540",
                "bestRating": "5",
                "worstRating": "1"
              },
              "foundingDate": "2010",
              "slogan": "عزل يدوم.. وضمان حقيقي"
            })
          }}
        />
      </head>
      <body className={`${theYearFont.variable} font-sans overflow-x-hidden`}>

        {/* Additional Structured Data for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "شركة عزل اسطح الرياض",
              "alternateName": "Elaazl KSA",
              "url": "http://elaazl.sa",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "http://elaazl.sa/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Service Schema Summary */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "provider": { "@id": "http://elaazl.sa/#organization" },
                "name": "عزل فوم بولي يوريثان",
                "serviceType": "Insulation",
                "description": "عزل فوم حراري ومائي للأسطح المعدنية والخرسانية بأحدث المعدات الأمريكية",
                "areaServed": { "@type": "City", "name": "الرياض" },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "باقات عزل الفوم",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "عزل فوم 3 سم" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "عزل فوم 5 سم" } }
                  ]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "provider": { "@id": "http://elaazl.sa/#organization" },
                "name": "عزل مائي للأسطح",
                "serviceType": "Waterproofing",
                "description": "عزل مائي باستخدام الرولات والبيتومين والعزل الأسمنتي لمنع التسربات نهائياً"
              }
            ])
          }}
        />
        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "الرئيسية",
                  "item": "http://elaazl.sa"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "خدمات العزل",
                  "item": "http://elaazl.sa/#services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "اتصل بنا",
                  "item": "http://elaazl.sa/#contact"
                }
              ]
            })
          }}
        />

        <JsonLd<Organization>
          item={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "شركة عزل اسطح الرياض",
            url: "http://elaazl.sa",
            logo: "http://elaazl.sa/logo.png",
            description: "نقدم خدمات عزل أسطح شاملة ومتخصصة في الرياض والخرج",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+966507961706",
              contactType: "customer service",
              availableLanguage: ["Arabic", "English"],
              areaServed: "SA",
              hoursAvailable: {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              }
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "حي النرجس",
              addressLocality: "الرياض",
              addressRegion: "الرياض",
              postalCode: "11564",
              addressCountry: "SA"
            },
            serviceArea: {
              "@type": "Place",
              "@id": "https://www.wikidata.org/wiki/Q3692",
              name: "الرياض",
              geo: {
                "@type": "GeoCoordinates",
                latitude: 24.7136,
                longitude: 46.6753
              }
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "خدمات العزل",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "عزل فوم للأسطح بالرياض"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "عزل مائي للأسطح بالرياض"
                  }
                },
              ]
            },
            "potentialAction": {
              "@type": "ReserveAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "tel:+966507961706",
                "actionPlatform": [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/MobileWebPlatform"
                ]
              },
              "result": {
                "@type": "Reservation",
                "name": "حجز خدمة عزل"
              }
            }
          }}
        />
        {children}
      </body>
    </html>
  )
}

