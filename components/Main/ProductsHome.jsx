"use client"

import React from 'react'
import { useLanguageContext } from '../../app/languageContext'
import Link from 'next/link'
import urlFor from '../../lib/urlFor'
export default function ProductsHome({products}) {

    const { language :lang } = useLanguageContext()

    const dir = lang === 'ar' && 'rtl'
  



  return (
    <div className="shop-page scroll-margin pt-120 pb-120" id="shop">
    <div className="container">
    <div
              className="col-lg-12 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="section-title text-center">
                <span className="arabic">
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
                 {lang === 'en' ? "Our Products" : "منتجاتنا"}
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
                <h2 className="arabic"> 
                {lang === 'en' ? "Our Products" : "منتجاتنا"}
                 </h2>
              </div>
            </div>





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



   
    </div>
  </div>
  )
}
