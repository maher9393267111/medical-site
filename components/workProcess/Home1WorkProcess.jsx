"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
import { InlineSvgPreviewComponent } from "../../lib/InlineSvgPreviewComponent";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home1WorkProcess = ({ data }) => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      loop: true,
      navigation: {
        nextEl: ".process-slider-next",
        prevEl: ".process-slider-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="home1-process-section mb-110">
        <div className="container">
          <div className="row mb-60">
            <div
              className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="section-title">
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
                  How we do
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
                <h2>Our Operational Blueprint</h2>
              </div>
              <div className="slider-btn-grp d-md-flex d-none">
                <div className="slider-btn process-slider-prev">
                  <i className="bi bi-arrow-left" />
                </div>
                <div className="slider-btn process-slider-next">
                  <i className="bi bi-arrow-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="process-slider-area">
            <div className="row">
              <div className="col-lg-12">
                <Swiper
                  {...settings}
                  className="swiper process-slider wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  {data.map((item, index) => {
                    return (
                      <div key={index} className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                          <div className="feature-card two">
                            <div className="icon">
                              <div className="icon-bg">
                                <InlineSvgPreviewComponent
                                  style={{
                                    width: "42px !important",
                                    height: "42px",
                                    marginRight: "8px",
                                    flexShrink: "0",
                                  }}
                                  value={item?.sidebarIcon}
                                />
                              </div>

                              <InlineSvgPreviewComponent
                                style={{
                                  width: "42px !important",
                                  height: "42px",
                                  marginRight: "8px",
                                  flexShrink: "0",
                                }}
                                value={item?.sidebarIcon}
                              />
                            </div>
                            <div className="content">
                              <h4>{item?.heading}</h4>
                              <p>{item?.desc}</p>
                              <ul>
                                {item?.list?.map((listitem, index) => {
                                  return (
                                    <li key={index}>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                      >
                                        <g>
                                          <path d="M6.84173 14.1066C6.79635 14.1066 6.75147 14.0972 6.7099 14.079C6.66833 14.0609 6.63098 14.0343 6.60018 14.0009L0.0873947 6.95598C0.0439788 6.90901 0.0151968 6.85041 0.00457124 6.78733C-0.00605429 6.72426 0.00193752 6.65946 0.0275687 6.60086C0.0531998 6.54226 0.0953585 6.49241 0.148885 6.4574C0.202411 6.42239 0.264983 6.40374 0.328943 6.40374H3.46384C3.51091 6.40374 3.55743 6.41385 3.60026 6.43336C3.64309 6.45288 3.68124 6.48135 3.71213 6.51686L5.88873 9.02096C6.12396 8.51813 6.57933 7.68089 7.37841 6.66068C8.55974 5.15244 10.7571 2.9343 14.5164 0.931913C14.5891 0.893219 14.6736 0.883176 14.7533 0.903768C14.833 0.92436 14.9021 0.974089 14.947 1.04314C14.9918 1.11218 15.0091 1.19553 14.9955 1.27672C14.9818 1.3579 14.9383 1.43103 14.8733 1.48165C14.859 1.49287 13.4095 2.63433 11.7413 4.7251C10.2061 6.64913 8.16519 9.79521 7.16094 13.8568C7.1433 13.9281 7.10227 13.9915 7.04439 14.0368C6.98652 14.0821 6.91513 14.1068 6.84163 14.1068L6.84173 14.1066Z" />
                                        </g>
                                      </svg>

                                      {listitem?.title}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1WorkProcess;
