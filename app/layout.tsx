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
    default: 'شركة عزل اسطح بالرياض والخرج | عزل فوم - عزل مائي - كشف تسربات | ضمان 15 سنة',
    template: '%s | شركة عزل اسطح الرياض'
  },
  description: 'أفضل شركة عزل اسطح بالرياض والخرج. نقدم خدمات عزل فوم بولي يوريثان، عزل مائي، وكشف تسربات المياه بأحدث التقنيات. معتمدون من الهيئة السعودية للمهندسين. خبرة 15 عاماً وضمان شامل يصل إلى 15 سنة. اتصل الآن للمعاينة المجانية.',
  keywords: ['شركة عزل اسطح بالرياض', 'عزل فوم بالرياض', 'عزل مائي بالرياض', 'شركة عزل خزانات بالرياض', 'كشف تسربات المياه', 'عزل اسطح بالخرج', 'عزل فوم بولي يوريثان', 'عزل شينكو', 'أفضل شركة عزل', 'عزل حراري', 'عزل اسطح شمال الرياض', 'سعر متر العزل', 'عزل مائي وحراري', 'شركة عزل معتمدة'],
  authors: [{ name: 'شركة عزل اسطح الرياض' }],
  creator: 'شركة عزل اسطح الرياض',
  publisher: 'شركة عزل اسطح الرياض',
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
    siteName: 'شركة عزل اسطح الرياض',
    title: 'شركة عزل اسطح بالرياض والخرج | عزل فوم - عزل مائي - كشف تسربات',
    description: 'شركة عزل اسطح بالرياض وعزل اسطح بالخرج متخصصة في تقديم أفضل عوازل للمباني. عازل مائي، عازل أسمنتي، عزل فوم، كشف تسربات. خبرة 15 عامًا وضمان شامل.',
    images: [
      {
        url: 'http://lamsa-clean.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'شركة عزل اسطح بالرياض - عزل فوم وعزل مائي',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة عزل اسطح بالرياض والخرج | عزل فوم - عزل مائي',
    description: 'شركة عزل اسطح بالرياض وعزل اسطح بالخرج متخصصة في تقديم أفضل عوازل للمباني',
    images: ['http://lamsa-clean.com/twitter-image.jpg'],
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


  category: 'خدمات عزل الأسطح والمباني',
  classification: 'شركة عزل',
  referrer: 'origin-when-cross-origin',
  appleWebApp: {
    title: 'عزل اسطح الرياض',
    statusBarStyle: 'default',
    capable: true,
  },
  applicationName: 'عزل اسطح الرياض',
  generator: 'Next.js',
  abstract: 'شركة متخصصة في خدمات عزل الأسطح والمباني في الرياض والخرج مع فريق مهني مدرب ومعدات حديثة',
  archives: ['http://lamsa-clean.com/blog'],
  assets: ['http://lamsa-clean.com/images'],
  bookmarks: ['http://lamsa-clean.com/services'],
  other: {
    'geo.region': 'SA-01',
    'geo.placename': 'الرياض',
    'geo.position': '24.7136;46.6753',
    'ICBM': '24.7136, 46.6753',
    'DC.title': 'شركة عزل اسطح الرياض',
    'DC.creator': 'شركة عزل اسطح الرياض',
    'DC.subject': 'خدمات عزل الأسطح والمباني',
    'DC.description': 'أفضل خدمات عزل الأسطح في الرياض والخرج',
    'DC.publisher': 'شركة عزل اسطح الرياض',
    'DC.contributor': 'فريق عزل اسطح الرياض',
    'DC.date': '2024',
    'DC.type': 'خدمة',
    'DC.format': 'موقع إلكتروني',
    'DC.identifier': 'http://lamsa-clean.com',
    'DC.language': 'ar',
    'DC.coverage': 'الرياض، الخرج، المملكة العربية السعودية',
    'DC.rights': 'جميع الحقوق محفوظة لشركة عزل اسطح الرياض',
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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-58DM78X4');`}
        </Script>
        {/* End Google Tag Manager */}

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
        <meta name="author" content="شركة عزل اسطح الرياض" />
        <meta name="copyright" content="© 2025 شركة عزل اسطح الرياض. جميع الحقوق محفوظة" />
        <meta name="web_author" content="شركة عزل اسطح الرياض" />
        <meta name="reply-to" content="info@lamsa-clean.com" />
        <meta name="owner" content="شركة عزل اسطح الرياض" />
        <meta name="url" content="http://lamsa-clean.com" />
        <meta name="identifier-URL" content="http://lamsa-clean.com" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="شركة عزل اسطح الرياض" />
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

        {/* Google tag (gtag.js) - Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17470272866"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17470272866');
          `}
        </Script>

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
                'custom_parameter_1': 'insulation_service'
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
              "name": "شركة عزل اسطح الرياض",
              "alternateName": "عزل اسطح الرياض",
              "description": "شركة عزل اسطح بالرياض وعزل اسطح بالخرج متخصصة في تقديم أفضل عوازل للمباني. نقدم عازل مائي للأسطح، عزل فوم للأسطح، وكشف تسربات المياه.",
              "url": "http://lamsa-clean.com",
              "logo": "http://lamsa-clean.com/lamsa.png",
              "image": "http://lamsa-clean.com/insulation-services.png",
              "telephone": "+966507961706",
              "faxNumber": "+966507961706",
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
              "areaServed": [
                {
                  "@type": "City",
                  "name": "الرياض"
                },
                {
                  "@type": "City",
                  "name": "الخرج"
                }
              ],
              "serviceArea": [
                {
                  "@type": "City",
                  "name": "الرياض"
                },
                {
                  "@type": "City",
                  "name": "الخرج"
                }
              ],
              "makesOffer": [
                {
                  "@type": "Offer",
                  "name": "خدمات عزل الأسطح",
                  "description": "جميع خدمات عزل الأسطح والمباني",
                  "priceCurrency": "SAR",
                  "availability": "https://schema.org/InStock",
                  "validFrom": "2024-01-01",
                  "areaServed": "الرياض والخرج"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "خدمات العزل",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "عزل فوم للأسطح بالرياض",
                      "description": "عزل فوم بولي يوريثان للأسطح"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "عزل مائي للأسطح بالرياض",
                      "description": "عزل مائي لحماية الأسطح من التسربات"
                    }
                  },

                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "كشف تسربات المياه بالرياض",
                      "description": "خدمات كشف تسربات المياه بأحدث الأجهزة"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "عزل خزانات المياه بالرياض",
                      "description": "عزل خزانات المياه الأرضية والعلوية"
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
              "foundingDate": "2009",
              "numberOfEmployees": "50-100",
              "slogan": "عزل احترافي، حماية شاملة",
              "knowsAbout": [
                "عزل الأسطح",
                "عزل فوم",
                "عزل مائي",
                "كشف تسربات المياه",
                "عزل الخزانات",

              ],
              "memberOf": {
                "@type": "Organization",
                "name": "الهيئة السعودية للمهندسين"
              },
              "award": "شركة عزل معتمدة 2024",
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
                  "reviewBody": "خدمة عزل ممتازة! فريق العمل محترف جداً واستخدموا مواد عالية الجودة مع ضمان شامل."
                }
              ],
              "sameAs": [
                "https://www.facebook.com/riyadhinsulation",
                "https://www.instagram.com/riyadhinsulation",
                "https://twitter.com/RiyadhInsulation"
              ]
            })
          }}
        />
      </head>
      <body className={`${theYearFont.variable} font-sans`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-58DM78X4"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Additional Structured Data for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "شركة عزل اسطح الرياض",
              "alternateName": "عزل اسطح الرياض",
              "url": "http://lamsa-clean.com",
              "description": "موقع شركة عزل اسطح الرياض - أفضل خدمات عزل الأسطح في الرياض والخرج",
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
                "name": "شركة عزل اسطح الرياض",
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
                "name": "خدمات عزل الأسطح في الرياض",
                "description": "خدمات عزل أسطح شاملة مع فريق محترف ومواد عالية الجودة",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "شركة عزل اسطح الرياض"
                },
                "areaServed": ["الرياض", "الخرج"],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "خدمات عزل الأسطح",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "عزل فوم للأسطح"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "عزل مائي للأسطح"
                      }
                    },

                  ]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "كشف تسربات المياه في الرياض",
                "description": "خدمات كشف تسربات المياه بأحدث الأجهزة الإلكترونية",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "شركة عزل اسطح الرياض"
                },
                "areaServed": ["الرياض", "الخرج"]
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
                  "name": "خدمات العزل",
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
            name: "شركة عزل اسطح الرياض",
            url: "http://lamsa-clean.com",
            logo: "http://lamsa-clean.com/logo.png",
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

                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "كشف تسربات المياه بالرياض"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "عزل خزانات المياه بالرياض"
                  }
                }
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

