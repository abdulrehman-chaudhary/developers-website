import React from "react";
import Header from "./components/ui/Header";
import HeroSection from "./components/ui/heroSection";
import CtaSection from "./components/ui/cta-section";
import Footer from "./components/ui/footer";
import CaseStudies from "./components/ui/case-studies";
import WhyUs from "./components/ui/why-us";
import Information from "./components/ui/information";
import Resources from "./components/ui/resources";
import Logos from "./components/ui/logos";
import TechStack from "./components/ui/techstack";
import Build from "./components/ui/build";
import CustomSection from "./components/ui/customer";
import Banner from "./components/ui/banner";
import Services from "./components/ui/services";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <Information />
      <Logos />
      <CustomSection />
      <CaseStudies />
      <Build />
      <WhyUs />
      <TechStack />
      <Banner />
      <Resources />
      <CtaSection />
      <Footer />
    </>
  );
};

export default App;
