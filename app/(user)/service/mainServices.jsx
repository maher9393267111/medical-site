"use client";
import MainLayout from "../../../components/layout/MainLayout";
import useWow from "../../../hooks/useWow";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useLanguageContext } from "../../languageContext";
import { InlineSvgPreviewComponent } from "../../../lib/InlineSvgPreviewComponent";
import urlFor from "../../../lib/urlFor";
const ServicesPage = ({ services, contact }) => {
  const { language: lang } = useLanguageContext();

  const dir = lang === "ar" && "rtl";

  useWow();
  return (
    <MainLayout
      page={lang === "en" ? "Services" : "الخدمات"}
      title={lang === "en" ? "Services" : "الخدمات"}
      contact={contact}
    >
      <div
        className="service-card-section scroll-margin pt-120 mb-120"
        id="service-section"
      >
        <div className="container">
          <div className="row g-4">
            {services?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-lg-4 col-md-6 wow animate fadeInDown"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <Image className="!object-cover" width={700} height={700} src={urlFor(item?.image1)?.url()} />
                  <div className="service-card two">
                 

                    <div className="content">






                      <h4 dir={dir}>
                        <Link
                          className="arabic"
                          href={`/service/${item?.slug?.current}`}
                        >
                          {lang === "en" ? item?.heading : item?.headingar}
                        </Link>
                      </h4>

                      <h4 className="!h-[18px] !w-[18px]">
                        <InlineSvgPreviewComponent
                          style={{
                            width: "42px !important",
                            height: "42px",
                            marginRight: "8px",
                            flexShrink: "0",
                          }}
                          value={item?.sidebarIcon}
                        />

                        {/* <Icon value={item?.sidebarIcon} /> */}
                      </h4>

                      {/* <p dir={dir} className="arabic">
                        {lang === "en" ? item?.desc : item?.descar}
                      </p> */}
                    </div>

                    <div dir={dir}>
                      <Link
                        dir={dir}
                        href={`/service/${item?.slug?.current}`}
                        className="explore-btn arabic !text-lg"
                      >
                        {lang === "en" ? "  EXPLORE MORE " : "تصفح المزيد"}

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
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ServicesPage;
