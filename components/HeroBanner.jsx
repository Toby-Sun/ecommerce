import React from "react";
import Link from "next/link";
import Image from "next/image";
import bannerImg from "../images/banner-img2.png";

const HeroBanner = ({ heroBanner, productCategoryRef }) => {
  const handleShopNowClick = (e) => {
    e.preventDefault();
    if (productCategoryRef.current) {
      productCategoryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-banner-container">
      <div className="hero-banner-wrapper">
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <h1>{heroBanner.largeText2}</h1>
        <div className="hero-banner-image">
          <Image src={bannerImg} className="" />
        </div>
      </div>

      <div>
        <Link href="">
          <button type="button" onClick={handleShopNowClick}>
            {heroBanner.buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
