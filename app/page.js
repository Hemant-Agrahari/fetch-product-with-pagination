"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./style.css";

export default function Home() {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  console.log(product);

  const PAGE_SIZE = 10;
  const totalProduct = product.length;
  const noOfPage = Math.ceil(totalProduct / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const fetchProduct = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProduct(json.products);
  };

  // Properly define the ProductCard component
  const ProductCard = ({ id, title, image }) => {
    return (
      <div className="product-card" key={id}>
        <Image src={image} alt={title} width={150} height={150} />
        <span>{title}</span>
      </div>
    );
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleCurrentPage = (n) => {
    setCurrentPage(n);
  };

  return !product.length ? (
    <h2>No Product Found</h2>
  ) : (
    <>
      <div className="product-container">
        {product.slice(start, end).map((e) => (
          <ProductCard
            key={e.id}
            id={e.id}
            title={e.title}
            image={e.thumbnail}
          />
        ))}
      </div>
      <div className="pagination">
        {[...Array(noOfPage).keys()].map((e) => (
          <span
            key={e}
            className="page-number"
            onClick={() => handleCurrentPage(e)}
          >
            {e}
          </span>
        ))}
      </div>
    </>
  );
}
