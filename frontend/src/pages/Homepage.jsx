import { Box, Typography } from "@mui/material";
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
  // Handle delete product
  const handleDeleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        console.error("Failed to delete product");
        return;
      }

      // Use the filter method to remove the deleted product from the state
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
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
      {/* Conditionally render content */}
      {products.length === 0 ? (
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          No products available.
        </Typography>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onDelete={() => handleDeleteProduct(product._id)} // Pass delete handler to ProductCard
          />
        ))
      )}
    </Box>
  );
};

export default Homepage;
