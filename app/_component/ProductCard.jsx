import React from "react";
import Image from "next/image";

/**
 * Component for rendering a product card with an image and title.
 *
 * @param {string} id Unique identifier for the product (used as a key).
 * @param {string} title The title or name of the product.
 * @param {string} image The URL of the product image.
 * @returns {JSX.Element} JSX representation of a product card with an image and title.
 */
const ProductCard = ({ id, title, image }) => {
  return (
    <div className="product-card" key={id}>
      <Image src={image} alt={title} width={150} height={150} />
      <span>{title}</span>
    </div>
  );
};

export default ProductCard;
