"use client";
import React, { useMemo } from "react";
import Home4award from "../../../components/award/Home4award";
import Home5Blog from "../../../components/blog/Home5Blog";
import CountUp from "react-countup";
import MainLayout from "../../../components/layout/MainLayout";
import Home5Team from "../../../components/team/Home5Team";
import Home1About from "../../../components/about/Home1About";
import Home5whyChoose from "../../../components/why-choose/Home5whyChoose";
import { InlineSvgPreviewComponent } from '../../../lib/InlineSvgPreviewComponent'
import urlFor from '../../../lib/urlFor';
import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguageContext } from '../../languageContext'

import { useTranslation } from '../../useTranslation'



import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
import useWow from "../../../hooks/useWow";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const AboutpageMain = ({ aboutOneData ,contact,steps  , partners ,awards ,discover}) => {
    console.log(">>>>>>>>>>" ,aboutOneData?.heading)


    // const { translation, language } = useTranslation()

    // const t = useMemo(() => translation?.about?.hero ?? {}, [translation])

    const { language :lang } = useLanguageContext()

    const dir = lang === 'ar' && 'rtl'
  


  useWow();
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 30,
      grabCursor: true,
      navigation: {
        nextEl: ".home2-process-next",
        prevEl: ".home2-process-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <MainLayout page={lang === 'en' ? 'about' :  'من نحن' } title={lang === 'en' ?  'About Page' : 'من نحن'} contact={contact}>




<div className=" mb-12 md:mb-24">


    <Home1About data={aboutOneData}/>

</div>



     


   

    </MainLayout>
  );
};

export default AboutpageMain;
