import './globals.css'
import { Metadata } from 'next'
import localFont from 'next/font/local'
import { JsonLd } from 'react-schemaorg'
import { Organization } from 'schema-dts'
// import { Analytics } from '../lib/analytics'
import Script from 'next/script'

// تعريف الخط الجديد
const theYearFont = localFont({
  src: './fonts/TheYearofHandicrafts-Regular.otf',
  variable: '--font-the-year',
  display: 'swap',
})


export const metadata: Metadata = {
  title: {
    default: 'خدمات النظافة والتعقيم في الرياض | شركة لمسة للنظافة - أفضل شركة تنظيف',
    template: '%s | شركة لمسة للنظافة'
  },
  description: 'نقدم أفضل خدمات التنظيف الشامل للمنازل، المكاتب، السجاد، النوافذ، والتعقيم في الرياض باستخدام أحدث التقنيات ومواد صديقة للبيئة. مكافحة الحشرات، تنظيف الخزانات، تنظيف الموكيت. خدمة 24/7 مع ضمان الجودة.',
  keywords: ['نظافة الرياض', 'تنظيف منازل الرياض', 'مكافحة حشرات الرياض', 'تنظيف مكاتب الرياض', 'تنظيف سجاد الرياض', 'تنظيف خزانات الرياض', 'تعقيم الرياض', 'شركة نظافة الرياض', 'أفضل شركة تنظيف الرياض', 'خدمات النظافة الرياض', 'تنظيف في الرياض', 'شركة تعقيم الرياض', 'تنظيف فلل الرياض', 'تنظيف شقق الرياض', 'تنظيف نوافذ الرياض', 'تنظيف كنب الرياض', 'غسيل موكيت', 'شفط مجاري'],
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


  category: 'خدمات النظافة والتعقيم',
  classification: 'شركة نظافة',
  referrer: 'origin-when-cross-origin',
  appleWebApp: {
    title: 'لمسة للنظافة',
    statusBarStyle: 'default',
    capable: true,
  },
  applicationName: 'لمسة للنظافة',
  generator: 'Next.js',
  abstract: 'شركة متخصصة في خدمات النظافة والتعقيم في الرياض مع فريق مهني مدرب وأدوات حديثة',
  archives: ['http://lamsa-clean.com/blog'],
  assets: ['http://lamsa-clean.com/images'],
  bookmarks: ['http://lamsa-clean.com/services'],
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
        
        {/* Performance and Loading Hints */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="format-detection" content="telephone=yes, date=no, email=no, address=no" />
        
        {/* Security Headers */}
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta name="referrer" content="origin-when-cross-origin" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="شركة لمسة للنظافة" />
        <meta name="copyright" content="© 2025 شركة لمسة للنظافة. جميع الحقوق محفوظة" />
        <meta name="web_author" content="شركة لمسة للنظافة" />
        <meta name="reply-to" content="info@lamsa-clean.com" />
        <meta name="owner" content="شركة لمسة للنظافة" />
        <meta name="url" content="http://lamsa-clean.com" />
        <meta name="identifier-URL" content="http://lamsa-clean.com" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="شركة لمسة للنظافة" />
        <meta name="category" content="خدمات النظافة" />
        <meta name="coverage" content="الرياض، المملكة العربية السعودية" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="3 days" />
        <meta name="expires" content="never" />
        
        {/* Cache Control */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
        <meta httpEquiv="Pragma" content="cache" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Alternative Language Pages */}
        <link rel="alternate" hrefLang="ar" href="http://lamsa-clean.com" />
        <link rel="alternate" hrefLang="ar-SA" href="http://lamsa-clean.com" />
        <link rel="alternate" hrefLang="x-default" href="http://lamsa-clean.com" />
        
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
        
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}', {
              page_path: window.location.pathname,
              custom_map: {
                'dimension1': 'service_type',
                'dimension2': 'user_location'
              }
            });
            
            // Enhanced e-commerce setup
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}', {
              custom_map: {
                'custom_parameter_1': 'cleaning_service'
              },
              send_page_view: false
            });
          `}
        </Script>
        
        {/* Google Tag Manager (optional) */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'}');
          `}
        </Script>
        
        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || 'XXXXXXXXXXXXXXX'}');
            fbq('track', 'PageView');
          `}
        </Script>
        
        {/* Schema.org Structured Data - Enhanced LocalBusiness */}
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
              "telephone": "+966547910859",
              "faxNumber": "+966547910859",
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
              "makesOffer": [
                {
                  "@type": "Offer",
                  "name": "خدمات النظافة الشاملة",
                  "description": "جميع خدمات النظافة والتعقيم",
                  "priceCurrency": "SAR",
                  "availability": "https://schema.org/InStock",
                  "validFrom": "2024-01-01",
                  "areaServed": "الرياض"
                }
              ],
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
              "foundingDate": "2020",
              "numberOfEmployees": "50-100",
              "slogan": "نظافة مثالية، خدمة استثنائية",
              "knowsAbout": [
                "تنظيف المنازل",
                "مكافحة الحشرات",
                "تنظيف السجاد",
                "تعقيم المباني",
                "تنظيف الخزانات",
                "تنظيف المكاتب"
              ],
              "memberOf": {
                "@type": "Organization",
                "name": "غرفة تجارة الرياض"
              },
              "award": "أفضل شركة نظافة في الرياض 2024",
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
        {/* Additional Structured Data for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "شركة لمسة للنظافة",
              "alternateName": "لمسة للنظافة",
              "url": "http://lamsa-clean.com",
              "description": "موقع شركة لمسة للنظافة - أفضل خدمات النظافة في الرياض",
              "inLanguage": "ar",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "http://lamsa-clean.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "شركة لمسة للنظافة",
                "logo": {
                  "@type": "ImageObject",
                  "url": "http://lamsa-clean.com/logo.png"
                }
              }
            })
          }}
        />
        
        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "خدمات تنظيف المنازل في الرياض",
                "description": "خدمات تنظيف شاملة للمنازل مع فريق محترف",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "شركة لمسة للنظافة"
                },
                "areaServed": "الرياض",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "خدمات تنظيف المنازل",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "تنظيف الشقق"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "تنظيف الفلل"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "تنظيف الكنب"
                      }
                    }
                  ]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "مكافحة الحشرات في الرياض",
                "description": "خدمات مكافحة جميع أنواع الحشرات بطرق آمنة",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "شركة لمسة للنظافة"
                },
                "areaServed": "الرياض"
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
                  "item": "http://lamsa-clean.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "خدمات النظافة",
                  "item": "http://lamsa-clean.com/#services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "اتصل بنا",
                  "item": "http://lamsa-clean.com/#contact"
                }
              ]
            })
          }}
        />
        
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
              telephone: "+966547910859",
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
            },
            "potentialAction": {
              "@type": "ReserveAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "tel:+966547910859",
                "actionPlatform": [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/MobileWebPlatform"
                ]
              },
              "result": {
                "@type": "Reservation",
                "name": "حجز خدمة نظافة"
              }
            }
          }}
        />
        {/* <Analytics /> */}
        {children}
      </body>
    </html>
  )
}

