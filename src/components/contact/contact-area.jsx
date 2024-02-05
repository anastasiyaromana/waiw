import ContactForm from '@/src/forms/contact-form'; 
import EmailIconOne from '@/src/svg/email-icon-1';
import PhoneIcon from '@/src/svg/phone-icon';
import React from 'react';

const ContactArea = () => {
    return (
        <>
            <section className="tp-contact-area pt-120 pb-90">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-contact-wrapper">
                            <div className="tp-contact-title-wrapper">
                            <h3 className="tp-contact-title">Contact <span className="title-color">with us</span></h3> 
                            <p>Email, call, or complete the form to learn how wAIw can <br /> 
                             solve your subsurface challenges or book a demo <br />
                             with our AI-specialists and business manager.</p>
                            </div>
                            <div className="tp-contact-content">
                            <div className="tp-contact-content-mail d-flex align-items-center">
                                <div className="tp-contact-content-mail-icon">
                                    <span> 
                                        <EmailIconOne /> 
                                    </span>
                                </div>
                                <h3 className="tp-contact-item-title"><a href="mailto:@partners.waiw.org">partners@waiw.org</a></h3>
                            </div>
                            <div className="tp-contact-content-phone d-flex align-items-center">
                                <div className="tp-contact-content-phone-icon">
                                    <span>
                                        <PhoneIcon /> 
                                    </span>
                                </div>
                                <h3 className="tp-contact-item-title">
                                    <a href="tel:971566842766">+971-566842766</a>
                                </h3>
                            </div>
                            <div className="tp-contact-location-wrapper d-flex">
                                <div className="tp-contact-location">
                                    <h3 className="tp-contact-location-title">
                                        WAIW COMPUTER SYSTEMS & COMMUNICATION EQUIPMENT SOFTWARE DESIGN
                                        <i className="fa-regular fa-arrow-down"></i>
                                    </h3>
                                    <p>Al Fahidi Dubai Municipality King 44-43 office number</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-contact-form">
                            <h3 className="tp-contact-form-title">Book a demo-call or Contact us</h3>
                            <p>Your email address will not be published. Required fields <br  /> are marked *</p>
                            <ContactForm /> 
                            <p className="ajax-response"></p>
                        </div>
                        <p></p>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};

export default ContactArea;
