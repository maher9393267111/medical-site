"use client";
import React from "react";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import Header2 from "../header/Header2";
import Breadcrumb from "./Breadcrumb";
import Footer from "../footer/Footer";
import Home1Contact from "../contact/Home1Contact";

const MainLayout = ({ children , contact }) => {
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
      <Breadcrumb />
      {children}

      {shouldRenderBreadcrumb && <Home1Contact contact={contact} />}
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
