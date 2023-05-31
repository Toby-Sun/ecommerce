import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div className="hero-banner-wrapper">
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} className="hero-banner-image" />
      </div>

      <div>
        {/* unsolved Link */}
        <Link href={`/product/${heroBanner.slug.current}`}>
          <button type="button">{heroBanner.buttonText}</button>
        </Link>
        <div className="desc">
          <h5>{heroBanner.desc}</h5>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
