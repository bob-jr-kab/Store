import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Homepage = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the backend
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products"); // Your backend URL
      const data = await response.json();
      if (response.ok) {
        setProducts(data.data); // Assuming `data.data` contains the array of products
      } else {
        console.error("Error fetching products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // useEffect to fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Box
      maxWidth="1140px"
      mx="auto"
      width="100%"
      display="flex"
      sx={{ alignItems: { xs: "center" } }}
      justifyContent="space-evenly"
      flexWrap="wrap"
    >
      {/* Map through products and render a ProductCard for each */}
      {products.map((product) => (
        <ProductCard key={product._id} product={product} /> // Assuming product._id exists
      ))}
    </Box>
  );
};

export default Homepage;
