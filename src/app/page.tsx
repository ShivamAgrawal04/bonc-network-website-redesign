import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import BentoListings from "@/components/sections/BentoListings";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <BentoListings />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
