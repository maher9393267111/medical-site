"use client"
import MainLayout from "../../../components/layout/MainLayout";
import useWow from "../../../hooks/useWow";
import Link from "next/link";
import React from "react";
import { useLanguageContext } from '../../languageContext'

import urlFor from "../../../lib/urlFor";

const ShopPageMain = ({products , loadMore , contact} ) => {


    const { language :lang } = useLanguageContext()

    const dir = lang === 'ar' && 'rtl'
  

  useWow()
  return (
    <MainLayout
    contact ={contact}
        
    page={lang === 'en' ? 'Products' :  'المنتجات' } title={lang === 'en' ? 'Products' :  'المنتجات'}
    
    >
      <div className="shop-page scroll-margin pt-120 pb-120" id="shop">
        <div className="container">
          <div className="row g-4 mb-50">


          {products?.map((item, index) => {

return (

            <div
            key={index}
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card !border !border-black">
                <div className="product-card-img">
                  <Link href={`/shop/${item?.slug.current}`}>
                    <img 
                     src={urlFor(item?.images[0])?.url()}
                    // src="/assets/img/innerpage/product-img1.jpg"
                    
                    
                    alt="" />
                    {/* <div className="batch">
                      <span>-15%</span>
                    </div> */}
                  </Link>
                  {/* <div className="cart-area">
                    <Link href="/cart" className="add-cart-btn">
                      <i className="bi bi-bag-check" /> Add To Cart
                    </Link>
                  </div> */}
                </div>
                <div className="product-card-content">
                  <h6>
                    <Link className="arabic" href={`/shop/${item?.slug.current}`}>
                        {lang === 'en' ?  item?.title : item?.titlear}
                    </Link>
                  </h6>
                  <span className="arabic">

                    {item?.price}TL
                    {/* $150.00 <del>$200.00</del> */}
                  </span>
                  <div className="rating">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                    <span>(50)</span>
                  </div>
                </div>
                <span className="for-border" />
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

export default ShopPageMain;
