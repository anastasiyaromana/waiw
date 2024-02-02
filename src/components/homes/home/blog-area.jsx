import blog_data from '@/src/data/blog-data';
import AngleArrow from '@/src/svg/angle-arrow';
import LineArrowThree from '@/src/svg/line-arrow3';
import RightArrow from '@/src/svg/right-arrow';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogArea = () => {
    return (
        <>
            <section className="tp-blog-area pt-80 pb-60">
                <div className="container container-large">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                            <div className="tp-blog-title-wrapper">
                                <span className="tp-section-title__pre">
                                    Articles <span className="title-pre-color"> & Resources </span>
                                    <AngleArrow /> 
                                </span>
                                <h3 className="tp-section-title">Technical Blog on Medium & <span className="title-color"> Resources on GitHub</span>
                                 <span className="title-right-shape"> 
                                       
                                    </span>
                                </h3>
                            </div>
                            </div>
                            <div className="col-lg-6">
                            <div className="tp-blog-text justify-content-start justify-content-lg-end d-flex">
                                <p>We actively share our expertise and insights through our Medium blog, " 
                                    <br /> including guides like "Cook Your Own AI for Subsurface.
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>

                    {blog_data.slice(0, 6).map((item, i)  => 
                    <div key={i} className="col-lg-4 col-md-6">
                        <div className="tp-blog-wrapper mb-30">
                            <div className="tp-blog-thumb">
                            <Link href="https://medium.com/data-analysis-center"><Image src={item.img} alt="theme-pure" /></Link>
                            <div className="tp-blog-tag">
                                <p>{item.category}</p>
                            </div>
                            </div>
                            <div className="tp-blog-content">
                            <div className="tp-blog-details ">
                                <div className="tp-blog-date">
                                    <span><i className="fa-light fa-calendar-days"></i> {item.date} </span>
                                </div>
                            </div>
                            <h3 className="tp-blog-title">
                                <Link href="https://medium.com/data-analysis-center">{item.title}</Link>
                            </h3>
                            <div className="tp-blog-btn d-flex justify-content-between">
                                <div className="read-more p-relative">
                                    <Link href="https://medium.com/data-analysis-center">Read More <span> <RightArrow /> </span></Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    )} 
                </div>
                </div>
            </section>
        </>
    );
};

export default BlogArea;
