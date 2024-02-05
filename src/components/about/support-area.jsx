import VideoPopup from "@/src/modals/video-popup";
import AngleArrow from "@/src/svg/angle-arrow";
import LineArrowTwo from "@/src/svg/line-arrow-2";
import RightSymbol from "@/src/svg/right-symbol";
import TeamDetailsArea from "@/src/components/team-details/team-details-area";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";


import support_img_1 from "@assets/img/about/home-3/img-1.jpg";
import support_img_2 from "@assets/img/about/home-3/img-2.jpg";
import support_img_3 from "@assets/img/about/home-3/img-3.jpg";
import support_shape from "@assets/img/about/home-3/shape-1.png";

const support_contact = {
   sub_title_1: "We’ve been stay",
   sub_title_2: " 13 years",
   info: <>At the forefront of innovation, our AI company is dedicated to <br />
      revolutionizing oil and gas exploration through cutting-edge open-source machine learning solutions. <br />
      We lead in three distinct yet interconnected business domains: </>,
   lists: [
      <>Software development</>,
      <>Consulting services</>,
      <>Professional training</>,
   ]
}
const software_dev = {
   sub_title_3: "Software development",
   info_1: <>3D visualisation of complex scientific data <br />
infused with AI algorithms create a rapid prototype of a field in a couple of hours. <br />
   Commercial software: GeoSurreal - AI co-pilot for geologist (released in 2023) <br />
   Custom developemt and computer vision for cross-domain applications: HSE CV algorithms, Lithology labelling automation and ML-scaling. </>,
}
const cons_services = {
   sub_title_4: "Consulting services",
   info_2: <>Expediting seismic processing on GPU with advanced ML algorithms. Cost-effective approach for re-processing legacy data. 
   Automation of ML algorithms transfer into production pipeline</>,
}
const {sub_title_1, sub_title_2, info, lists} = support_contact
const {sub_title_3, info_1} = software_dev
const {sub_title_4, info_2} = cons_services



const SupportArea = ()  => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

    return(
        <>
        <section className="tp-support-breadcrumb fix pt-120 pb-210">
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <div className="tp-fun-fact-title-wrapper support-breadcrumb">
                     <span className="tp-section-title__pre">
                        service <span className="title-pre-color">AI Solutions</span>
                        <AngleArrow /> 
                     </span>
                     <h3 className="tp-section-title">
                        {sub_title_1}
                        <span className="title-color">
                        {sub_title_2}
                        </span>
                        <span className="title-left-shape">
                           <LineArrowTwo />
                        </span>
                     </h3>
                     <p>{info}</p>
                     <ul className="mb-65">
                        {lists.map((list, i)  => 
                           <li key={i}> <span> <RightSymbol /></span> {list}</li>
                        )} 
                     </ul>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="tp-about-3-img p-relative fadeRight">
                     <Image src={support_img_1} alt="theme-pure" />
                     <Image className="shape-1" src={support_img_2} alt="theme-pure" />
                     <div className="shape-2 p-relative">
                        <Image src={support_img_3} alt="theme-pure" />
                        <div className="tp-video-play">
                           <a className="popup-video" 
                           onClick={() => setIsVideoOpen(true)} 
                           ><i className="fa-sharp fa-solid fa-play"></i></a>
                        </div>
                     </div>
                     <Image className="shape-3" src={support_shape} alt="theme-pure" />
                  </div>
               </div>
            </div>
            <TeamDetailsArea />
         </div>
      </section>

       {/* video modal start */}
       <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"dGcsHMXbSOA"}
      />
      {/* video modal end */}
        </>
    )
}
export default SupportArea;
