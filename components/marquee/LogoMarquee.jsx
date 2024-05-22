import React from "react";
import Marquee from "react-fast-marquee";
import urlFor from "../../lib/urlFor";
const LogoMarquee = ({brandsData}) => {

// console.log(">>>ASASAS<<<<<" , brandsData)


  return (
    <div
      className="logo-section mb-110 wow animate fadeInUp"
      data-wow-delay="200ms"
      data-wow-duration="1500ms"
    >
      <div className="container-fluid">
        <div className="logo-wrap">
          <div className="logo-title">
            <h6>We Worked With Global Largest Brand</h6>
          </div>
          <div className="logo-area">
            <div className="marquee_text2">
              <Marquee>

              {brandsData?.images?.map((item, index) => {
                  
                  return (
                
                  <img key={index}      src={urlFor(item)?.url()}  alt="" />
              
              
                  )})}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
