import { Box, Button, styled, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const StyledForm = styled(Box)(() => ({
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  alignItems: "center",
  margin: " 20%  auto 0 auto",

  "& label": {
    fontSize: "14px",
    marginBottom: "5px",
  },
  "& input": {
    fontSize: "20px",
    padding: "10px",
  },
}));

const StyledButton = styled(Button)(() => ({
  fontSize: "16px",
  padding: "10px 20px",
  marginTop: "10px",
  textTransform: "capitalize",
  backgroundColor: "blue",
  color: "white",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "#45a049",
  },
}));

const createpage = () => {
  const [newProduct, setnewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [product, setProduct] = useState(null);
  const createProduct = async (product) => {
    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        return { success: false, message: "Failed to add product" };
      }

      // Parse the response from the server
      const result = await response.json();

      // Return the result to the caller (success message or created product data)
      return {
        success: result.success,
        data: result.data,
        message: result.message,
      };
    } catch (error) {
      // Handle errors (network issues, bad requests, etc.)
      console.error("Error creating product:", error);
      return { success: false, message: "Failed to create product" };
    }
  };
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);

    setProduct(newProduct);

    if (success) {
      console.log("Product created successfully:", message);
    } else {
      console.log("Failed to create product:", message);
    }
  };
  return (
    <div>
      <Box
        maxWidth="1140px"
        mx="auto"
        width="100%"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <StyledForm sx={{ width: 800, maxWidth: "100%" }}>
          <Typography variant="h4">Crete Product</Typography> <br />
          <TextField
            onChange={(e) =>
              setnewProduct({ ...newProduct, name: e.target.value })
            }
            required
            id="name"
            fullWidth
            label="product name"
          />
          <h1></h1>
          <TextField
            onChange={(e) =>
              setnewProduct({ ...newProduct, price: e.target.value })
            }
            required
            id="price"
            fullWidth
            label=" Enter Price"
          />
          <h1></h1>
          <TextField
            onChange={(e) =>
              setnewProduct({ ...newProduct, image: e.target.value })
            }
            required
            id="image"
            fullWidth
            label=" picture url"
          />
          <StyledButton onClick={handleAddProduct}>add</StyledButton>
          <StyledButton
            onClick={() => {
              {
                setnewProduct("");
              }
            }}
          >
            Cancel
          </StyledButton>
        </StyledForm>
      </Box>
      {product && <ProductCard product={product} />}
    </div>
  );
};

export default createpage;
