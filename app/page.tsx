import AboutUs from "@/components/AboutUs";
// import Blog from "@/components/Blog";
// import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServicesDetail from "@/components/ServicesDetail";
// import Stats from "@/components/Stats";
// import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import FloatingButtons from "@/components/FloatingButtons";
import RiyadhLocations from "@/components/RiyadhLocations";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <AboutUs />
      <ServicesDetail />
     
      <WhyChooseUs />
      <Services />
      <RiyadhLocations />
 
      {/* <Testimonials /> */}
      {/* <Stats /> */}
      <FAQ />
      {/* <Blog /> */}

      <Footer />
      <FloatingButtons />
    </main>
  )
}

