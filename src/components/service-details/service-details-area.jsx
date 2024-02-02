import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import VideoPopup from '@/src/modals/video-popup';
import ServiceContactForm from '@/src/forms/service-contact-form';
import service_details_thumb from  "@assets/img/services/service-details/img-1.jpg";
import service_video_thumb from  "@assets/img/services/service-details/img-2.jpg";
import RightSymbol from '@/src/svg/right-symbol';
import accordion from '@/src/data/accordion';

const service_details_content = {
    service_details_tab: [
        {id: 1, title: "Based on open source solutions for AI", active: "active"},
        {id: 2, title: "Utilizing GPU with utmost parallelism", active: ""},
        {id: 3, title: "(therefore) absolutely unbeatable performance", active: ""},
        {id: 4, title: "Quality control and visualization on each step", active: ""},
        {id: 5, title: "Multi-user environment", active: ""},
        {id: 6, title: "Cloud agnostic and deployable on prem as well", active: ""},
    ],
    title: <>Based on open source solutions for AI</>,
    description: <> </>,
    title_2: <>Why is it important ?</>,
    description_2: <>Open-source AI software solutions offer several advantages over closed-source ones, benefiting customers in various ways: </>,
    feture_list: [
        <>Transparency and Trust</>,
        <>Security</>,
        <>Customization and Flexibility</>,
        <>Cost-Effectiveness</>,
        <>Community Support and Collaboration</>,
        <>Avoidance of Vendor Lock-in</>,
        <>Innovation and Speed of Development</>,
        <>Quality and Reliability</>,
    ],
    description_3: <>1. **Transparency and Trust**: Open-source software's code is accessible for review, modification, and distribution. This transparency allows users to understand how the software operates, potentially increasing trust, especially in sensitive applications like AI where understanding the decision-making process or data handling is crucial.
<br |> 2. **Security**: While open-source software is exposed to everyone, this can be a strength. More eyes on the code mean that security vulnerabilities can be identified and fixed rapidly by the community, as opposed to closed-source software, where vulnerabilities might go unnoticed or unaddressed until the company decides to act.
<br |> 3. **Customization and Flexibility**: Open-source AI software can be freely modified to meet specific user needs. This adaptability can be particularly beneficial for businesses with unique requirements that off-the-shelf closed-source solutions cannot meet without expensive custom development.
<br |> 4. **Cost-Effectiveness**: Open-source software is generally free to use, modify, and distribute. This can significantly reduce costs for businesses, especially startups or those looking to scale up, as there are no licensing fees or costs associated with product changes.
<br |> 5. **Community Support and Collaboration**: Open-source projects often have active communities. Users can benefit from the collective knowledge and experience of a vast community of developers and users. This can lead to better support, more robust features, and faster resolution of issues compared to relying solely on a single vendor's support team.
<br |> 6. **Avoidance of Vendor Lock-in**: With closed-source software, customers are often tied to one vendor's ecosystem, subject to their pricing, updates, and the future direction of the software. Open-source software offers an escape from vendor lock-in, providing the freedom to switch service providers or customize the software without contractual restrictions or the risk of obsolescence.
<br |> 7. **Innovation and Speed of Development**: Open-source projects can evolve more quickly than their closed-source counterparts due to contributions from a global community. Diverse perspectives lead to innovative features and solutions, driving the rapid advancement of technology in ways that a single company might not achieve on its own.
<br |> 8. **Quality and Reliability**: A common misconception is that open-source software is less reliable. However, with many users and contributors, issues are quickly identified and resolved. The collaborative nature of open-source development often leads to high-quality, well-tested, and reliable software solutions.
</>,
}
const {service_details_tab, title, desciption, title_2, description_2, feture_list, description_3} = service_details_content

const ServiceDetailsArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isActive, setIsActive] = useState(1)

    return (
        <>
            <section className="tp-service-details-area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-lg-4">
                     <div className="tp-service-widget">

                        <div className="tp-service-widget-item mb-40">
                           <div className="tp-service-widget-tab">
                              <ul>
                                   {service_details_tab.map((item, i)  => 
                                    <li key={i}>
                                        <Link className={item.active} href="/service-details">
                                        {item.title} <i className="fa-regular fa-arrow-right-long"></i>
                                        </Link>
                                    </li>
                                    )}
                              </ul>
                           </div>
                        </div>

                        <div className="tp-service-widget-item mb-40">
                           <div className="tp-service-contact">
                              <div className="tp-service-contact-form">
                                <ServiceContactForm />
                                 <p className="ajax-response"></p>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className="col-lg-8">
                     <div className="tp-service-details-wrapper">
                        <div className="tp-service-details-thumb">
                           <Image src={service_details_thumb} alt="theme-pure" />
                        </div>
                        <h3 className="tp-service-details-title">{title}</h3>
                        <p>{description}</p>
                        <div className="row">
                           <div className="col-lg-6">
                              <div className="tp-service-details-thumb p-relative">
                                 <Image src={service_video_thumb} alt="theme-pure" />
                                 <div className="tp-video-play text-center">
                                    <a className="popup-video effect-1 effect-2" 
                                        onClick={() => setIsVideoOpen(true)}  
                                        ><i className="fa-sharp fa-solid fa-play"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="tp-service-details-list">
                                 <h3 className="tp-service-details-title">{title_2}</h3>
                                 <p>{description_2}</p>
                                 <ul>
                                    {feture_list.map((item, i) => 
                                    <li key={i}><span> <RightSymbol /></span>{item}</li> 
                                    )} 
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <p>{description_3}</p>

                        <div className="tp-service-details-faq faq-style-1">
                           <div className="tp-faq-tab-content tp-accordion">
                              <div className="accordion" id="general_accordion">
                                {accordion.map((item, i) => 
                                <div key={i} onClick={() => setIsActive(item.id)} className={`accordion-item ${isActive === item.id && "tp-faq-active"}`}>
                                    <h2 className="accordion-header" id={`heading${item.accordion_id}`}>
                                    <button 
                                        className={`accordion-button ${item.collapsed}`} 
                                        type="button" 
                                        data-bs-toggle="collapse" 
                                        data-bs-target={`#collapse${item.accordion_id}`} 
                                        aria-expanded={item.aria_expanded}
                                        aria-controls={`collapse${item.accordion_id}`}>
                                        {item.question}
                                    </button>
                                    </h2>
                                    <div id={`collapse${item.accordion_id}`} 
                                        className={`accordion-collapse collapse ${item?.active && "show"}`} 
                                        aria-labelledby={`heading${item.accordion_id}`} 
                                        data-bs-parent="#general_accordion">
                                        <div className="accordion-body">
                                            <p>{item.answer}</p>
                                        </div>
                                    </div>
                                </div> 
                                )} 
                               </div>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </section>

            {/* video modal start */}
            <VideoPopup 
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={"csnD5EVL5z8"}
            />
            {/* video modal end */}
        </>
    );
};

export default ServiceDetailsArea;
