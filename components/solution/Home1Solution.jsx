"use client"
import Link from 'next/link'
import React from 'react'
//  import { InlineSvgPreviewComponent } from '@focus-reactive/sanity-plugin-inline-svg-input'
 import styled, { css } from 'styled-components'
  import { InlineSvgPreviewComponent } from '../../lib/InlineSvgPreviewComponent'

const Home1Solution = ({data}) => {

//   const IconStyle = css`
//   width: 42px;
//   height: 42px;
//   margin-right: 8px;
//   flex-shrink: 0;
// `


//   const Icon = styled(InlineSvgPreview)`
//   ${IconStyle}
// `


// const InlineSvgPreview = styled.div`
//   svg {
//     width: 100%;
//     height: 100%;
//   }
// `


  return (
    <>
      <div className="home1-solution-section mb-110">
  <div className="container">
    <div className="row mb-60">
      <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
        <div className="section-title wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
              <g>
                <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
              </g>
            </svg>
            Expertise You Can Trust
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
              <g>
                <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
              </g>
            </svg>
          </span>
          <h2>Explore Our Solutions</h2>
        </div>
        <Link href="/service" className="primary-btn2 wow animate fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms" data-text="Explore More"><span>Explore More</span></Link>
      </div>
    </div>
    <div className="row g-4">

                   
    {data?.map((item, index) => {
                  
                  return (

      <div key={index} className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="service-card">
          <div className="content">
            <h4><Link href={`/service/${item?.slug?.current}`}>{item?.heading}</Link></h4>
      
      <h4 className='!h-[18px] !w-[18px]'>

      <InlineSvgPreviewComponent
      style={{   width: "42px !important" ,
           height: "42px",
           marginRight: "8px",
           flexShrink: "0"}}
      
      value={item?.sidebarIcon} /> 
 
{/* <Icon value={item?.sidebarIcon} /> */}

      </h4>
           


            <p>
            {item?.desc}
              </p>
          </div>
          <Link 
          href={`/service/${item?.slug?.current}`}
          className="explore-btn"> EXPLORE MORE 
            <svg xmlns="http://www.w3.org/2000/svg" width={17} height={9} viewBox="0 0 17 9">
              <path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z" />
              <path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z" />
            </svg>
          </Link>
        </div>
      </div>


                  )})}    

    </div>
  </div>
</div>

    </>
  )
}

export default Home1Solution
