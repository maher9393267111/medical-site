"use client";
import CountUp from "react-countup";
import React from "react";
import urlFor from '../../lib/urlFor';
import Image from 'next/image';
import { InlineSvgPreviewComponent } from '../../lib/InlineSvgPreviewComponent'
import { useLanguageContext } from '../../app/languageContext'




const Home1About = ({data}) => {

  const { language :lang } = useLanguageContext()

  const dir = lang === 'ar' && 'rtl'



  return (
    <>


<div
        className="home1-about-section scroll-margin pt-120 mb-120"
        id="about-section"
      >
        <div className="container">
          <div dir={dir} className="row mb-90 arabic">
            <div
              className="col-lg-9 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="2000ms"
            >
              <div  className="about-content">
                <div className="about-section-title">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                    >
                      <g>
                        <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                      </g>
                    </svg>
                    {/* {lang === 'en' ? data.heading : data?.headingar} */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                    >
                      <g>
                        <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                      </g>
                    </svg>
                  </span>
                  <h2>
                  {lang === 'en' ? data.heading : data?.headingar}
                  
                  </h2>
                  <p className="arabic">
                  {lang === 'en' ? data.desc : data?.descar}
              
                  </p>
                </div>
              </div>
            </div>
            {/* <div
              className="col-lg-3 d-flex justify-content-lg-end wow animate fadeInRight"
              data-wow-delay="200ms"
              data-wow-duration="2000ms"
            >
              <div className=
              "about-countdown-area">
                <ul>

                {data?.achivments?.map((achive, index) => {
                  
                  return (
                  <li key={index} className="single-countdown">
                    <div className="icon">
                 


<InlineSvgPreviewComponent
style={{   width: "42px !important" ,
     height: "42px",
     marginRight: "8px",
     flexShrink: "0"}}

value={achive?.Icon} /> 




     


                    </div>
                    <div className="content">
                      <div className="number">
                        <h5 className="counter">
                      
                        </h5>
                     
                      </div>
                      <p>{achive?.title}</p>
                    </div>
                  </li>


                    )})}
                
                </ul>
              </div>
            </div> */}





{/* <div
              className="col-lg-3 d-flex justify-content-lg-end wow animate fadeInRight"
              data-wow-delay="200ms"
              data-wow-duration="2000ms"
            >
              <div className="about-countdown-area">
                <ul>


                {data?.achivments?.map((achive, index) => {
                  
                  return (

                  <li key={index} className="single-countdown">
                    <div className="icon">
                    <InlineSvgPreviewComponent
style={{   width: "42px !important" ,
     height: "42px",
     marginRight: "8px",
     flexShrink: "0"}}

value={achive?.Icon} /> 


                    </div>
                    <div className="content">
                      <div className="number">
                        <h5 className="counter">
                          <CountUp end={achive?.number} delay={5} />
                        </h5>
                        <span>{achive?.numbertitle}</span>
                      </div>
                      <p>{achive?.title}</p>
                    </div>
                  </li>
                

                  )})}
                
                </ul>
              </div>
            </div>

 */}



          </div>



        </div>


        {/* <div className="about-bottom-area">
          <div className="container-fluid">
            <div className="row g-5">

            {data?.features?.map((feature, index) => {
                  
                  return (

              <div
              key={index}
                className="col-lg-3 col-md-6 wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="feature-card">
                  <div className="icon">
                    <img
                      src="assets/img/home1/icon/about-feature-card-icon1.svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h4>{feature?.title}</h4>
                    <p>
                      {feature?.desc}
                    </p>
                  </div>
                </div>
              </div>
            

                  )})}

            </div>
          </div>
        </div> */}



      </div>


    </>
  );
};

export default Home1About;
