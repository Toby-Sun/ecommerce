import React from "react";
import { client } from "../lib/client";
import {
  Product,
  FooterBanner,
  HeroBanner,
  ProductCategory,
} from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="maylike-products-wrapper">
        <h1>Best Selling Products</h1>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products
              ?.filter((product) => product.isBestSelling)
              .map((product) => (
                <Product key={product._id} product={product} />
              ))}
          </div>
        </div>
      </div>
      {/* headphones, earphones, speaker product list */}
      <ProductCategory products={products} />
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
