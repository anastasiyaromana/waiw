import Link from 'next/link';
import Image from 'next/image'
import Count from '@/src/common/count';
import React, { useEffect, useRef, useState } from 'react';
import service_data from '@/src/data/service-data';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// svg icon
import AngleArrow from '@/src/svg/angle-arrow';
import LineArrowTwo from '@/src/svg/line-arrow-2';
import GreenRightArrow from '@/src/svg/green-right-arrow';

// fun fact shape
import fun_fact_shape_1 from "@assets/img/fun-fact/shape-1.png";
import fun_fact_shape_3 from "@assets/img/fun-fact/shape-3.png";
import fun_fact_shape_4 from "@assets/img/fun-fact/shape-4.png";
import fun_fact_shape_5 from "@assets/img/fun-fact/shadow.png";

import reload_img from "@assets/img/fun-fact/world.png";


  const counter_content = [
   {
      id: 1, 
      count: 10,
      info: "Experience",
      cls: "",
      cls_2: "purecounter",
      icon: "+",
   },
   {
      id: 2, 
      count: 255,
      info: "square area",
      cls: "purecounter",
      cls_2: "",
      icon: "",
   },
   {
      id: 3, 
      count: 310,
      info: "square area",
      cls: "purecounter",
      cls_2: "",
      icon: "",
   },
  ]
const ServiceArea = () => {

   const setting = {
      type   : 'loop',
      drag   : 'free',
      pagination: false,
      arrows: false,
      perPage: 4,
      gap:'30px',
      breakpoints: {
         1800: {
            perPage: 5,
         },
         1500: {
            perPage: 4,
         },
         1200: {
            perPage: 3,
         },
         800: {
            perPage: 2,
         },
         566: {
            perPage: 1,
         },
        },
     }
   const splideRef = useRef(null); 

   const [reloadClassName, setReloadClassName] = useState(null);
   useEffect(() => {
      const reload = document.getElementById('reload');
      setReloadClassName(reload);
   }, []);

   const scrollRotate = () => {
      reloadClassName.style.transform = `rotate(${window.pageYOffset / 2}deg)`;
   };

   useEffect(() => {
      if (reloadClassName !== null) {
         window.addEventListener('scroll', scrollRotate);
      }
      return () => {
         window.removeEventListener('scroll', scrollRotate);
      };
   }, [reloadClassName]);


    return (   
        <>
            <div className="tp-service-funfact-box"> 

               <section className="tp-service-area pt-85 pb-50">
                  <div className="container-fluid">
                     <div className="row">

                        <div className="col-lg-12">
                           <div className="tp-service-title-wrapper text-center">
                              <span className="tp-section-title__pre">
                      
                                 <AngleArrow />                                 
                              </span>
                              <h3 className="tp-section-title"> Our <i>Advantages</i>
                                 <span className="title-center-shape"> 
                                    <LineArrowTwo />
                                 </span> 
                              </h3>
                           </div>
                        </div>

                        <div className="tp-service-slider-wrapper">
                          <Splide options={setting}  ref={splideRef}
                            className="service-active splide">
                              {service_data.map((item, i) => 
                                 <SplideSlide key={i}>
                                       <div className="tp-service-wrapper p-relative mb-55">
                                          <h3 className="service-title">{item.title}</h3>
                                          <div className="tp-service-icon">
                                             <Image src={item.img} alt="theme-pure" />
                                          </div>
                                          <p className="hide-text">{item.description}</p>
                                       </div>
                                 </SplideSlide>
                                 )}
                              </Splide>
                        </div>

                     </div>

                    {/* <div className="row">
                        <div className="col-lg-12">
                           <div className="tp-service-all-btn text-center fadeUp">
                              <Link className="tp-btn" href="/service-details">View all details</Link>
                           </div>
                        </div>
                     </div> */}

                  </div>
               </section> 

               <section className="tp-fun-fact-area pt-80 pb-65 p-relative">
                  <div className="container container-1800">

                     <div className="tp-fun-fact-shape">
                        <Image className="shape-1" src={fun_fact_shape_1} alt="theme-pure" />
                        <Image className="shape-3" src={fun_fact_shape_3} alt="theme-pure" />
                        <Image className="shape-4" src={fun_fact_shape_4} alt="theme-pure" />
                       {/* <Image className="shadow" src={fun_fact_shape_5} alt="theme-pure" />*/}
                     </div>

                    <div className="row">
                        {/* <div className="col-lg-2 col-md-4">
                           <div className="tp-fun-fact-wrapper-box">
                              {counter_content.map((item, i) => 
                                 <div key={i} className="tp-fun-fact-wrapper">
                                    <h3 className={`counter-title ${item.cls}`}> 
                                    <span data-purecounter-duration="4" className="purecounter">
                                       <Count number={item.count} text={item.icon} />
                                    </span></h3>
                                    <p>{item.info}</p>
                                 </div>
                              )} 
                           </div>
                        </div>  */}
                        <div className="col-lg-4 col-md-8">
                           <div className="tp-fun-fact-thumb p-relative">
                            <Image id="reload" src={reload_img} alt="scroll" />
                           </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                           <div className="tp-fun-fact-content">
                              <div className="tp-fun-fact-title-wrapper">
                                 <span className="tp-section-title__pre">
                                    <AngleArrow />
                                 </span>
                                 <h3 className="tp-section-title">AI geologist's co-pilot
                                    <span className="title-left-shape"> 
                                    <LineArrowTwo />
                                    </span>
                                 </h3>
                                 <p>
                                    Our models are heavily used <br /> to advance current field exploration 
                                 </p>
                                 <ul>
                                    <li>
                                       <span> <GreenRightArrow /></span>
                                       Subsurface AI algorithms create a rapid prototype of a field in a couple of hours
                                    </li>
                                    <li>
                                       <span><GreenRightArrow /> </span>
                                       Visual quality maps help instantly find errors and identify tricky areas
                                    </li>
                                    <li>
                                       <span><GreenRightArrow /> </span>
                                       The 3D layout reveals the detailed contours and structure of the underlying objects
                                    </li>
                                 </ul>
                                 <div className="tp-fun-fact-btn">
                                    <Link className="tp-btn" href="/Contact">Book a demo </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                  </div>
               </section>  
               
            </div>
        </>
    );
};

export default ServiceArea;
