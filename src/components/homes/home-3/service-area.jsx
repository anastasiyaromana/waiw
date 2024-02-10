import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AngleArrow from '@/src/svg/angle-arrow';
// service icon import here
import service_icon_1 from "@assets/img/services/home-3/icon-1.png";
import service_icon_2 from "@assets/img/services/home-3/icon-2.png";
import service_icon_3 from "@assets/img/services/home-3/icon-3.png";
import service_icon_4 from "@assets/img/services/home-3/icon-4.png"; 

// service data
const service_data = [
    {
        id: 1,
        img: service_icon_1,
        title: <>2016</>,
        description: <>Research group in AI for Healthcare: Computer tomography CV, ECG Analysis, Seasonal population predictions (23mln patients data) <br />
            <br />
        Open Sources: Batchflow, BF Research, CardIO+RadIO </>
    },
    {
        id: 2,
        img: service_icon_2,
        title: <>2019</>,
        description: <>Knowledge transfer of technolgy stack into Oil&Gas domain: Seismic processing, Interpretation, Petrophysics, Lithology <br />
            <br />
        Open Sources: SeismicPro, SeismiQB, PyDENs </>
    },
    {
        id: 3,
        img: service_icon_3,
        title: <>2021</>,
        description: <>Launch of US DAC Inc., Expanded Nvidia partnership (scaling tests, NGC validation), 
        AWS collaboration <br />
        Establishing Omniverse-like visusalisation solution for scientific data</>
    },
    {
        id: 4,
        img: service_icon_4,
        title: <>2023</>,
        description: <>Scaling within MENA Dubai office (waiw LLC)<br />
        Partners demanded simplier naming</>
    },
]


const ServiceArea = () => {
    return (
        <>
            <section className="tp-service-3-area p-relative pt-120 pb-60" 
                style={{backgroundImage: `url(/assets/img/services/home-3/service-bg.png)`}}>
                    <div className="container">

                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <div className="tp-service-3-title-wrapper">
                                <span className="tp-section-title__pre">
                                service <span className="title-pre-color">AI Solutions</span>
                                <AngleArrow /> 
                                </span>
                                <h3 className="tp-section-title">
                                    WAIW (Data Analysis Center): <span className="title-color">history </span> <br /> and open source legacy
                                </h3>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="tp-service-3-title-wrapper justify-content-start justify-content-xl-end d-flex">
                                <p>Through continuous research, collaboration we aim to be at the forefront of the AI revolution,
                                    delivering reliable, transparent, and impactful results that contribute to a smarter, more connected future
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        {service_data.map((item, i) => 
                            <div key={i} className="col-xl-3 col-md-6">
                                <div className="tp-service-3-content OneByOne mb-30">
                                    <div className="tp-service-3-content-thumb">
                                    <Image src={item.img} alt="theme-pure" />
                                    </div>
                                    <h4 className="tp-service-3-title">
                                        <Link href="/service-details">
                                        {item.title}
                                        </Link>
                                    </h4>
                                    <p>{item.description}</p>
                                    {/*<div className="tp-service-btn">
                                    <Link href="/service-details">Read More <i className="fa-solid fa-arrow-up-right"></i></Link>
                                    </div>*/}
                                </div>
                            </div>
                        )} 
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-service-3-trend text-center mt-50">
                                <p>
                                    <i className="fa-regular fa-arrow-right-long"></i> 
                                        Get in touch and advance your current explorations. 
                                    <Link href="/contact"> Book a demo - we show our solutions </Link> 
                                    <i className="fa-regular fa-arrow-left-long"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceArea;
