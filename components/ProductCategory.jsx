import React, { useState } from "react";
import Product from "./Product";

const ProductCategory = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState("Earphones");

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <>
      <div className="product-category-button">
        <button
          className={selectedCategory === "Earphones" ? "active" : ""}
          onClick={() => setSelectedCategory("Earphones")}
        >
          Earphones
        </button>
        <button
          className={selectedCategory === "Headphones" ? "active" : ""}
          onClick={() => setSelectedCategory("Headphones")}
        >
          Headphones
        </button>
        <button
          className={selectedCategory === "Speaker" ? "active" : ""}
          onClick={() => setSelectedCategory("Speaker")}
        >
          Speaker
        </button>
      </div>
      <div className="products-outer-container">
        <div className="products-container">
          {filteredProducts.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
