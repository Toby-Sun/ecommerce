import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="logo-container">
        <Image src={logo} />
      </div>
      <p className="footer-copyright">
        Copyright &copy; 2023 Kali Soundbox. All rights reserverd
      </p>
    </div>
  );
};

export default Footer;
