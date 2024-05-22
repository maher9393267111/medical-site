"use client"
import React from 'react'
import urlFor from '../../../../lib/urlFor';
import MainLayout from "../../../../components/layout/MainLayout";
import Home5Workprocess from "../../../../components/workProcess/Home5Workprocess";

import { useLanguageContext } from '../../../languageContext'

export default function MainService({data ,contact}) {

  const { language :lang } = useLanguageContext()

  const dir = lang === 'ar' && 'rtl'


  // console.log("INNNNNNNNNNSASASAS" ,data)

  return (
    <MainLayout
    
    page={lang === 'en' ? 'Service details' :  'تفاصيل الخدمة' } title={lang === 'en' ? 'Service details' :  'تفاصيل الخدمة'}
    
    contact={contact}>
    <div
      className="service-details-page pt-120 mb-120"
      id="service-details-section"
    >
      <div className="container">
        <div className="service-details-top-area mb-80">
          <div className="row g-lg-4 gy-5 align-items-center">
            <div
              className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div dir={dir} className="service-details-top-content">
                <h2 className='arabic'>
                   { lang === 'en' ? data?.heading : data?.headingar}
                  {/* Software <span>Development.</span> */}
                </h2>
                <p  className=' arabic  md:mx-4'>
          { lang === 'en' ? data?.desc : data?.descar}
                </p>
               
              </div>
            </div>
            <div
              className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="service-details-img">
                <img
                  src={urlFor(data?.image1)?.url()} 
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>

  </MainLayout>
  )
}
