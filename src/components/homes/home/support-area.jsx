import Count from '@/src/common/count';
import React from 'react';


// support data  
const support_content = [
    {
        id: 1, 
        count: 20, 
        symbol: "х",
        cls: "fadeLeft",
        title: "Boost process",
        info: <>AI greatly speeds up processing <br /> of certain stages.</>
    },
    {
        id: 1, 
        count: 3, 
        symbol: "hr",
        cls: "",
        title: "Quick Results",
        info: <>To obtain stacked seismic cube compared with months  <br /> for conventional tools.</>
    },
    {
        id: 3, 
        count: 98.6, 
        symbol: "%",
        cls: "fadeRight",
        title: "Horizon coverage area",
        info: <>Detects and visualises complex geological structures <br /> in high resolution.</>
    },
]

const SupportArea = () => {
    return (
        <>
            <section className="tp-support-feature-area pb-100">
            <div className="container container-large">
               <div className="row">
                {support_content.map((item, i) =>
                    <div key={i} className="col-lg-4">
                        <div className="tp-support-feature-item d-flex p-relative fadeRight">
                        <div className="tp-support-feature-counter">
                            <div className="tp-support-feature-thumb">
                                <img src="/assets/img/brand/shape-2.png" alt="theme-pure" />
                            </div>
                            <h3 className="support-feature-title"><span data-purecounter-duration="4" className="purecounter">
                                <Count number={item.count}  text={item.symbol}  />
                            </span></h3>
                        </div>
                        <div className="tp-support-feature-content">
                            <h4 className="tp-support-feature-content-title">{item.title}</h4>
                            <p>{item.info}</p>
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

export default SupportArea;
