import './globals.css'
import { Metadata } from 'next'
import localFont from 'next/font/local'
import { JsonLd } from 'react-schemaorg'
import { Organization } from 'schema-dts'

// تعريف الخط الجديد
const theYearFont = localFont({
  src: './fonts/TheYearofHandicrafts-Regular.otf',
  variable: '--font-the-year',
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'خدمات النظافة والتعقيم في الرياض | شركة نظافة الرياض - أفضل شركة تنظيف',
  description: 'نقدم أفضل خدمات التنظيف الشامل للمنازل، المكاتب، السجاد، النوافذ، والتعقيم في الرياض باستخدام أحدث التقنيات ومواد صديقة للبيئة. مكافحة الحشرات، تنظيف الخزانات، تنظيف الموكيت. خدمة 24/7 مع ضمان الجودة.',
  keywords: 'نظافة الرياض, تنظيف منازل الرياض, مكافحة حشرات الرياض, تنظيف مكاتب الرياض, تنظيف سجاد الرياض, تنظيف خزانات الرياض, تعقيم الرياض, شركة نظافة الرياض, أفضل شركة تنظيف الرياض, خدمات النظافة الرياض, تنظيف في الرياض, شركة تعقيم الرياض',
  authors: [{ name: 'شركة نظافة الرياض' }],
  creator: 'شركة نظافة الرياض',
  publisher: 'شركة نظافة الرياض',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('http://lamsa-clean.com'),
  alternates: {
    canonical: 'http://lamsa-clean.com',

  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'http://lamsa-clean.com',
    siteName: 'شركة نظافة الرياض',
    title: 'خدمات النظافة والتعقيم في الرياض | أفضل شركة تنظيف',
    description: 'نقدم أفضل خدمات التنظيف الشامل للمنازل، المكاتب، السجاد، النوافذ، والتعقيم في الرياض باستخدام أحدث التقنيات ومواد صديقة للبيئة.',
    images: [
      {
        url: 'http://lamsa-clean.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'شركة نظافة الرياض - خدمات النظافة والتعقيم',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'خدمات النظافة والتعقيم في الرياض | أفضل شركة تنظيف',
    description: 'نقدم أفضل خدمات التنظيف الشامل للمنازل، المكاتب، السجاد، النوافذ، والتعقيم في الرياض',
    images: ['http://lamsa-clean.com/twitter-image.jpg'],
    creator: '@RiyadhCleaning',
    site: '@RiyadhCleaning',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  category: 'خدمات النظافة والتعقيم',
  classification: 'شركة نظافة',
  other: {
    'geo.region': 'SA-01',
    'geo.placename': 'الرياض',
    'geo.position': '24.7136;46.6753',
    'ICBM': '24.7136, 46.6753',
    'DC.title': 'شركة نظافة الرياض',
    'DC.creator': 'شركة نظافة الرياض',
    'DC.subject': 'خدمات النظافة والتعقيم',
    'DC.description': 'أفضل خدمات النظافة في الرياض',
    'DC.publisher': 'شركة نظافة الرياض',
    'DC.contributor': 'فريق نظافة الرياض',
    'DC.date': '2024',
    'DC.type': 'خدمة',
    'DC.format': 'موقع إلكتروني',
    'DC.identifier': 'http://lamsa-clean.com',
    'DC.language': 'ar',
    'DC.coverage': 'الرياض، المملكة العربية السعودية',
    'DC.rights': 'جميع الحقوق محفوظة لشركة نظافة الرياض',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="canonical" href="http://lamsa-clean.com" />
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
        <meta name="apple-mobile-web-app-title" content="نظافة الرياض" />
        <meta name="application-name" content="نظافة الرياض" />
        <meta name="msapplication-TileColor" content="#0d64ab" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#0d64ab" />
        <meta name="color-scheme" content="light dark" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "شركة لــمـســة للــنــظــافــة",
              "alternateName": "لــمـســة للــنــظــافــة",
              "description": "أفضل شركة نظافة وتعقيم في الرياض",
              "url": "http://lamsa-clean.com",
              "logo": "http://lamsa-clean.com/lamsa.png",
              "image": "http://lamsa-clean.com/cleaning-services.png",
              "telephone": "0592425077",
              "email": "info@lamsa-clean.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "حي النرجس",
                "addressLocality": "الرياض",
                "addressRegion": "الرياض",
                "postalCode": "12345",
                "addressCountry": "SA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 24.7136,
                "longitude": 46.6753
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "$$",
              "paymentAccepted": "Cash, Credit Card",
              "currenciesAccepted": "SAR",
              "areaServed": {
                "@type": "City",
                "name": "الرياض"
              },
              "serviceArea": {
                "@type": "City",
                "name": "الرياض"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "خدمات النظافة",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "مكافحة الحشرات في الرياض",
                      "description": "خدمات مكافحة الحشرات المتخصصة"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "تنظيف الموكيت في الرياض",
                      "description": "تنظيف الموكيت والسجاد"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "التعقيم الشامل في الرياض",
                      "description": "خدمات التعقيم الشامل"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "تنظيف الخزانات في الرياض",
                      "description": "تنظيف وتعقيم خزانات المياه"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "تنظيف السجاد في الرياض",
                      "description": "تنظيف السجاد والموكيت"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "تنظيف المكاتب في الرياض",
                      "description": "خدمات تنظيف المكاتب والشركات"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "تنظيف المنازل في الرياض",
                      "description": "تنظيف المنازل الشامل"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "2000",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "أحمد السعيد"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "خدمة تنظيف ممتازة! فريق العمل محترف جداً واستخدموا مواد آمنة."
                }
              ],
              "sameAs": [
                "https://www.facebook.com/riyadhcleaning",
                "https://www.instagram.com/riyadhcleaning",
                "https://twitter.com/RiyadhCleaning"
              ]
            })
          }}
        />
      </head>
      <body className={`${theYearFont.variable} font-sans`}>
        <JsonLd<Organization>
          item={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "شركة نظافة الرياض",
            url: "http://lamsa-clean.com",
            logo: "http://lamsa-clean.com/logo.png",
            description: "نقدم خدمات نظافة وتعقيم شاملة ومتخصصة في الرياض",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+966-50-123-4567",
              contactType: "customer service",
              availableLanguage: "Arabic",
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
              addressLocality: "الرياض",
              addressRegion: "الرياض",
              addressCountry: "SA"
            },
            serviceArea: {
              "@type": "City",
              name: "الرياض"
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "خدمات النظافة",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "مكافحة الحشرات في الرياض"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "تنظيف الموكيت في الرياض"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "التعقيم الشامل في الرياض"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "تنظيف الخزانات في الرياض"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "تنظيف السجاد في الرياض"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "تنظيف المكاتب في الرياض"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "تنظيف المنازل في الرياض"
                  }
                }
              ]
            }
          }}
        />
        {children}
      </body>
    </html>
  )
}

