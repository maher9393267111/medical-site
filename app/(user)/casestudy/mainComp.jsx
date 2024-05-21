"use client"
import MainLayout from "../../../components/layout/MainLayout";
import useWow from "../../../hooks/useWow";
import Link from "next/link";
import React from "react";
import urlFor from '../../../lib/urlFor';

const CaseStudyPage = ({cases ,contact , loadMore}) => {
  useWow()
  return (
    <MainLayout contact={contact}>
      <div
        className="case-study-card-section scroll-margin pt-120 mb-120"
        id="case-study-card-section"
      >
        <div className="container">
          <div className="row g-4 mb-50">

            

            {cases?.map((item, index) => {
return (
            <div
            key={index}
              className="col-xl-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="case-study-card style-2">
                <div className="card-img">
                  <img 
                  src={urlFor(item.mainImage)?.url()}
                  
                  alt="" />
                </div>
                <div className="card-content">
                  <Link href={`/casestudy/${item?.slug.current}`}>{item?.category?.title}</Link>
                  <h4>
                    <Link href={`/casestudy/${item?.slug.current}`}>
                      {item?.title}
                    </Link>
                  </h4>
                  <p>
                  {item?.desc}.
                  </p>
                  <Link
                href={`/casestudy/${item?.slug.current}`}
                    className="learn-more-btn"
                  >
                    Learn MORE
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={17}
                      height={9}
                      viewBox="0 0 17 9"
                    >
                      <path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z" />
                      <path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>


)})}

        </div>
        <div className="row mtt !mt-[44px]">
            <div
              className="col-lg-12 d-flex justify-content-center wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <button onClick={loadMore}  className="load-btn">
                <span>
                  Load More
                  <svg viewBox="0 0 13 20">
                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CaseStudyPage;
