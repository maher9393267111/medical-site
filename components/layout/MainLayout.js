"use client";
import React from "react";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import Header2 from "../header/Header2";
import Breadcrumb from "./Breadcrumb";
import Footer from "../footer/Footer";
import Home1Contact from "../contact/Home1Contact";

const MainLayout = ({ children , contact ,page ,title ,iscontact=false }) => {
  const pathname = usePathname(); // Get the current pathname

  const hideBreadcrumbRoutes = [
    "/shop",
    "/cechkout",
    "/cart",
    "/product-details",
  ]; // Add the routes where you want to hide the breadcrumb

  const shouldRenderBreadcrumb = !hideBreadcrumbRoutes.some(
    (route) => route === pathname
  );

  return (
    <>
      <Header2 data={contact} />
      <Breadcrumb page ={page}  title={title} />
      {children}

{iscontact &&  <Home1Contact contact={contact} />}



      {/* {shouldRenderBreadcrumb && <Home1Contact contact={contact} />} */}


      <Footer data={contact} />



      {/* <div
                  className="social-area wow animate fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <h6>Social Just You Connected Us!</h6>
                  <ul className="social-list flex gap-14">
                    <li>
                      <a href={contact?.linkden}>
                        <i className="bi bi-linkedin" />
                        <span>LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href={contact?.facebook}>
                        <i className="bi bi-facebook" />
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href={contact?.twitter}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          fill="currentColor"
                          className="bi bi-twitter-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                        </svg>
                        <span>Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href={contact?.instagram}>
                        <i className="bi bi-instagram" />
                        <span>Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div> */}




    </>
  );
};

export default MainLayout;
