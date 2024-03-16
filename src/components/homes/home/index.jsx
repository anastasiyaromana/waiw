import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import HeroSlider from "./hero-slider";
import AboutArea from "./about-area";
import TimeArea from "@/src/components/homes/home-3/service-area";
import PortfolioArea from "@/src/components/portfolio/portfolio-area";
import FeatureArea from "./feature-area";
import BrandArea from "@/src/common/brand-area"; 
import ServiceArea from "./service-area"; 
import SupportArea from "./support-area";
import FaqArea from "./faq-area";
import BlogArea from "./blog-area";
import ContactArea from "@/src/components/contact/contact-area";
import Footer from "@/src/layout/footers/footer";

const HomeOne = () => {
  return (
    <>
     {/* <HeaderOne /> */}
      <main>
        <HeroSlider />
        {/*<AboutArea />*/}
        {/* <TimeArea /> */}
        <FeatureArea />
        <ServiceArea />
        <SupportArea />
        <FaqArea />
        <BrandArea />
        <BlogArea />
        <ContactArea />
        {/*<Footer />*/}
      </main>
    </>
  );
};

export default HomeOne;
