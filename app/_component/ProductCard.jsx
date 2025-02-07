import React from "react";
import Image from "next/image";
const ProductCard = ({ id, title, image }) => {
  return (
    <div className="product-card" key={id}>
      <Image src={image} alt={title} width={150} height={150} />
      <span>{title}</span>
    </div>
  );
};

export default ProductCard;
