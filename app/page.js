"use client"; // Ensures this file is treated as a client-side component

import { useEffect, useState } from "react"; // Import React hooks for state and effects
import "./style.css"; // Import CSS for styling
import { PAGE_SIZE } from "./constant"; // Import constant for page size
import ProductCard from "./_component/ProductCard"; // Import the ProductCard component
import Pagination from "./_component/Pagination"; // Import the Pagination component
import { fetchProducts } from "./utils/api";

export default function Home() {
  // State hooks to store the list of products and the current page number
  const [product, setProduct] = useState([]); // State to hold products fetched from API
  const [currentPage, setCurrentPage] = useState(0); // State to track current page for pagination

  // Calculate the total number of products and the total number of pages
  const totalProduct = product.length; // Get the total number of products
  const noOfPage = Math.ceil(totalProduct / PAGE_SIZE); // Calculate number of pages required

  // Calculate the start and end index for products to be displayed on the current page
  const start = currentPage * PAGE_SIZE; // Starting index of products for the current page
  const end = start + PAGE_SIZE; // Ending index of products for the current page

  // Function to handle page change by clicking on a page number
  const handleCurrentPage = (n) => {
    setCurrentPage(n); // Set the current page to the clicked page number
  };

  // Function to go to the next page
  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1); // Increment the page number by 1
  };

  // Function to go to the previous page
  const goToPreviousPage = () => {
    setCurrentPage((prev) => prev - 1); // Decrement the page number by 1
  };

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts(); // Use the utility function to fetch products
      setProduct(products); // Set the fetched products into state
    };

    getProducts(); // Call the async function to fetch products
  }, []);

  // If there are no products, display a "No Product Found" message
  return !product.length ? (
    <h2>No Product Found</h2> // Display this message if no products are available
  ) : (
    <>
      {/* Render the product cards */}
      <div className="product-container">
        {product.slice(start, end).map((e) => (
          <ProductCard
            key={e.id} // Use product ID as the unique key for each product card
            id={e.id} // Pass the product ID to the ProductCard component
            title={e.title} // Pass the product title to the ProductCard component
            image={e.thumbnail} // Pass the product image thumbnail to the ProductCard component
          />
        ))}
      </div>

      {/* Render the pagination component */}
      <Pagination
        currentPage={currentPage} // Pass the current page to the Pagination component
        goToNextPage={goToNextPage} // Pass the function to go to the next page
        goToPreviousPage={goToPreviousPage} // Pass the function to go to the previous page
        noOfPage={noOfPage} // Pass the total number of pages
        handleCurrentPage={handleCurrentPage} // Pass the function to handle the page change on click
      />
    </>
  );
}
