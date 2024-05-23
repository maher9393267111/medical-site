import Link from "next/link";
import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaRegClock,
  FaAngleRight,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneSquareAlt,
  FaVoicemail,
  FaCalendarWeek,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = ({ data }) => {
  console.log("CONTACTINFO-->", data);

  return (
    <>
      <div className="py-8 arabic container mx-auto flex flex-row justify-between">
        <p className="arabic font-semibold text-xl md:text-xl">
          Copyright 2024
        </p>
        <div className="flex flex-row space-x-3">
          <a href={data?.whatsapp}>
            <FaWhatsapp className="w-8 h-8 text-green-500" />
          </a>

          <a href={data?.facebook}>
            <FaFacebook className="w-8 h-8 text-blue-500" />
          </a>

          <a href={data?.instagram}>
            <FaInstagram className="w-8 h-8 text-gray-500" />
          </a>

          <a href={data?.twitter}>
            <FaTwitter className="w-8 h-8 text-blue-300" />
          </a>

          <a href={data?.linkden}>
            <FaLinkedin className="w-8 h-8 text-blue-400" />
          </a>

          {/* <FaWhatsapp className="w-8 h-8 text-gray-500" /> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
