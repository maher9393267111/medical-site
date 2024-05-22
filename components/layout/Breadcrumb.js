"use client"
import React from "react";
import breadcrumbData from "../../data/mainBreadCrumb.json";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLanguageContext } from '../../app/languageContext'
const Breadcrumb = ({page ,title}) => {
  const currentSlug = usePathname(); // Get the current route's slug





   const { language :lang } = useLanguageContext()

  const dir = lang === 'ar' && 'rtl'


  

  return (
    <>
      <div
        className="breadcrumb-section"
        style={{
          backgroundImage:
            "url(/assets/img/innerpage/breadcrumb-bg1.png), linear-gradient(180deg, #121212 0%, #121212 100%)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-wrapper">
                <div dir={dir} className="banner-content">
                  <ul className="breadcrumb-list arabic">
                    <li className="arabic">
                      <Link className="arabic" href="/">{lang === 'en' ? 'Home' :'الرئيسية'}  </Link>
                    </li>
                    <li>{page}</li>
                  </ul>
                  <h1 className="arabic">{title}</h1>
                </div>
                {/* <div className="scroll-down-btn">
                  <a href={currentBreadcrumb.section_down_scroll}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={29}
                      viewBox="0 0 19 29"
                    >
                      <path d="M9.5 0V28M9.5 28C10 24.3333 12.4 17.1 18 17.5M9.5 28C8.5 24.1667 5.4 16.7 1 17.5" />
                    </svg>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
