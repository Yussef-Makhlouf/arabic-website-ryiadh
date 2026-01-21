import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import FloatingButtons from "@/components/FloatingButtons";
import RiyadhLocations from "@/components/RiyadhLocations";
import ServiceComparison from "@/components/ServiceComparison";

// Existing Content Components
import ContentHeader from "@/components/home/ContentHeader";
import ExtendedIntro from "@/components/home/ExtendedIntro";
import FoamInsulation from "@/components/home/FoamInsulation";
import Waterproofing from "@/components/home/Waterproofing";
import EnergySaving from "@/components/home/EnergySaving";
import Conclusion from "@/components/home/Conclusion";
import HomeTestimonials from "@/components/home/HomeTestimonials";

// New Comprehensive Content Sections
import InsulationBasics from "@/components/home/InsulationBasics";
import WaterproofingGuide from "@/components/home/WaterproofingGuide";
import FoamInsulationGuide from "@/components/home/FoamInsulationGuide";
import TraditionalInsulation from "@/components/home/TraditionalInsulation";
import InsulationSelectionGuide from "@/components/home/InsulationSelectionGuide";
import MarketChallenges from "@/components/home/MarketChallenges";

import ThermalRoofInsulation from "@/components/home/ThermalRoofInsulation";
import MetalRoofInsulation from "@/components/home/MetalRoofInsulation";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />

      {/* ============================================
          SEO-Rich Content Flow
          Keywords: عزل أسطح، عزل فوم، عزل مائي، عزل حراري، الرياض
          ============================================ */}

      {/* Section 1: Introduction & Services Overview */}
      <ContentHeader />
      <ExtendedIntro />
      <Services />

      {/* ============================================
          Part 1: Understanding Insulation Basics (600 words)
          - Definition and types
          - Importance in desert climate
          - Saudi standards
          - Impact on building life
          ============================================ */}
      <InsulationBasics />

      {/* ============================================
          Part 2: Waterproof Insulation Guide (800 words)
          - Materials (bitumen, PVC, cement)
          - Application techniques
          - When you need it
          - Cost vs lifespan
          - Saudi case studies
          - Maintenance tips
          ============================================ */}
      <WaterproofingGuide />

      {/* ============================================
          Part 3: Foam Insulation (Polyurethane) - Modern Technology (1000 words)
          - Technology explanation
          - Technical advantages
          - Energy savings statistics
          - Lifespan and durability
          - Comparison with traditional materials
          - Challenges and solutions
          - Saudi success stories
          ============================================ */}
      <FoamInsulationGuide />

      {/* ============================================
          Part 4: Traditional Thermal Insulation (700 words)
          - Rock wool and glass wool
          - Polystyrene (EPS & XPS)
          - Natural and sustainable options
          - Performance comparison in Saudi climate
          - Pros and cons
          ============================================ */}
      <TraditionalInsulation />

      {/* Service-specific detailed sections */}
      <FoamInsulation />
      <Waterproofing />
      <ThermalRoofInsulation />
      <MetalRoofInsulation />
      <EnergySaving />

      {/* ============================================
          Part 5: Comprehensive Comparison
          - Cost, performance, lifespan, maintenance
          - Suitability per building type
          - Initial costs vs long-term savings
          - Environmental impact
          ============================================ */}
      <ServiceComparison />

      {/* ============================================
          Part 6: Selection Guide - Practical Steps (700 words)
          - Building needs analysis
          - Local climate study
          - Budget analysis
          - Expert consultation
          - Decision steps
          ============================================ */}
      <InsulationSelectionGuide />

      {/* ============================================
          Part 7: Market Challenges and Solutions (400 words)
          - Quality issues and counterfeits
          - Lack of qualified experts
          - Innovation and new technologies
          - Regulatory role and standards
          ============================================ */}
      <MarketChallenges />

      {/* Trust & Social Proof */}
      <WhyChooseUs />
      <HomeTestimonials />

      {/* Final CTA */}
      <Conclusion />

      {/* Local SEO - Locations & FAQ */}
      <RiyadhLocations />
      <FAQ />

      <Footer />
      <FloatingButtons />

      {/* Schema.org FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "ما هو أفضل نوع عزل للأسطح في الرياض؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "يعتبر عزل الفوم بولي يوريثان من أفضل أنواع العزل للأسطح في الرياض لأنه يوفر عزل حراري ومائي في آن واحد، ويتحمل درجات الحرارة العالية."
                }
              },
              {
                "@type": "Question",
                "name": "كم سنة ضمان على عزل الفوم؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "نقدم ضمان يصل إلى 15 سنة على عزل الفوم، ويشمل الضمان أي تسربات أو مشاكل في العزل مع صيانة دورية مجانية."
                }
              },
              {
                "@type": "Question",
                "name": "هل العزل يقلل فاتورة الكهرباء؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "نعم، العزل الحراري الجيد يمكن أن يوفر من 30% إلى 50% من فاتورة الكهرباء عبر تقليل الحمل على المكيفات."
                }
              },
              {
                "@type": "Question",
                "name": "كم تكلفة عزل الأسطح بالرياض؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "تبدأ أسعار عزل الفوم من 25 ريال للمتر المربع حسب السماكة والمساحة. نقدم معاينة مجانية لتحديد التكلفة بدقة."
                }
              }
            ]
          })
        }}
      />
    </main>
  )
}
