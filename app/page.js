"use client";

import { useEffect, useState } from "react";
import "./style.css";
import { PAGE_SIZE } from "./constant";
import ProductCard from "./_component/ProductCard";
import Pagination from "./_component/Pagination";

export default function Home() {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const totalProduct = product.length;
  const noOfPage = Math.ceil(totalProduct / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handleCurrentPage = (n) => {
    setCurrentPage(n);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const goToPreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const fetchProduct = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProduct(json.products);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

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
      <Pagination
        currentPage={currentPage}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
        noOfPage={noOfPage}
        handleCurrentPage={handleCurrentPage}
      />
    </>
  );
}
