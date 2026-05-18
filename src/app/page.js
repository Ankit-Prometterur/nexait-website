import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/Hero";
import HeroAwards from "@/components/HeroAwards";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Stats from "@/components/Stats";

export default function Home() {
  
  return (
    <div>
      <Header />
      <Hero />
      <HeroAwards />
      <Portfolio />
      <Stats />
      <Services />
      <Footer />
    </div>
  );
}
