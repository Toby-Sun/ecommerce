import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const FooterBanner = ({ footerBanner }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <img src={urlFor(footerBanner.image)} className="footer-banner-image" />
        <div className="right">
          <h3>{footerBanner.midText2}</h3>
          <h3>{footerBanner.midText3}</h3>
          <h1>{footerBanner.largeText3}</h1>
          <Link href={`/product/${footerBanner.slug.current}`}>
            <button type="button">{footerBanner.buttonText2}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
