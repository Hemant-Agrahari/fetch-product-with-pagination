// Fetch products from the API
export const fetchProducts = async () => {
  const data = await fetch("https://dummyjson.com/products?limit=500"); // Fetch products with a limit of 500
  const json = await data.json(); // Parse the response JSON
  return json.products; // Return the products
};
