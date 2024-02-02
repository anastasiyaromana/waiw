import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import headphone from "@assets/img/footer/headphone.png";
import footer_logo from "@assets/img/logo/footer-logo.png";
import user from "@assets/img/footer/user.png";
import EmailAeroplan from '@/src/svg/email-aeroplan';
import SocialLinks, { CopyRight } from '@/src/common/social-links';

const footer_content = { 
    contact_us: <> Contact us at <span>partners@waiw.org </span></>,
    mail: "@partners.waiw.org",
    contact_text: "Book a demo with IT Advisor",
    phone: "92 666 888 0000",
    map: "https://www.google.com/maps/search/86+Road+Broklyn+Street,+600+New+York,+USA/@40.6897806,-74.0278086,12z/data=!3m1!4b1",
    address: <>Al Fahidi Dubai Municipality King 44-43 office number <br /> Emirate of Dubai, UAE</>,


    service_links: [
        "Parking permission",
    ]



}
const {contact_us, mail, contact_text, phone, map, address, mail_2, mail_phone, service_links} = footer_content


const Footer = () => {
    return (
        <>
            <footer className="tp-footer-area p-relative">
                <div className="tp-footer-bg" style={{backgroundImage: `url(/assets/img/footer/footer-bg.jpg)`}}></div>
                <div className="tp-footer-top-shape" style={{backgroundImage: `url(/assets/img/footer/footer-top-bg.png)`}}></div>
                
                <div className="container container-large">

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-footer-top-area">
                                <div className="row align-items-center">
                                <div className="col-lg-6">  
                                    <div className="tp-footer-top-contact">
                                        <a href={`mailto:${mail}`}>{contact_us}</a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="tp-footer-top-right d-flex justify-content-start justify-content-lg-end">
                                        <div className="tp-footer-top-right-headphone">
                                            <Image src={headphone} alt="theme-pure" />
                                        </div>
                                        <div className="tp-footer-top-right-content">
                                            <p>{contact_text}</p>
                                            <a href={`tel:${phone}`}>+92 666 888 0000</a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tp-footer-main-area">
                        <div className="row">
                            <div className="col-xl-3 col-lg-2 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-1">
                                <div className="tp-footer-logo">
                                <a href="index.html"> <Image src={footer_logo} alt="theme-pure" /></a>
                                </div>
                                <div className="tp-footer-widget-content">
                                    <div className="tp-footer-info">
                                        <div className="tp-footer-main-location">
                                            <a target='_blank' href={map}> <i className="fa-sharp fa-light fa-location-dot"></i> 
                                            {address}</a>
                                        </div>
                                        <div className="tp-footer-main-mail">
                                            <a href={`mailto:${mail_2}`}>
                                                <i className="fa-light fa-message-dots"></i>{mail_phone}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="tp-footer-copyright-area p-relative">
                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <div className="tp-footer-copyright-inner">
                                <p><CopyRight /> </p>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className="tp-footer-copyright-inner text-lg-end">
                                <Link href="#">Terms and conditions</Link>
                                <Link className="ml-50" href="#"> Privacy policy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
