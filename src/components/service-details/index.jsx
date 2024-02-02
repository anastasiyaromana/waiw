import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";

const ServiceDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <ServiceDetailsArea />
      </main>
      <FooterThree />
    </>
  );
};

export default ServiceDetails;
