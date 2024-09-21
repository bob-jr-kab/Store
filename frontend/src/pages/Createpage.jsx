import { Box, Button, styled, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

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
  // State to handle form inputs
  const [name, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setPictureUrl] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    // e.preventDefault();
    console.log("Form submitted");
    const productData = {
      name: name,
      price: price,
      image: image,
    };

    try {
      const response = await fetch("http://localhost:5000/api/products", {
        // Replace with your actual backend endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Product added:", result);
        // Optionally clear the form after success
        setProductName("");
        setPrice("");
        setPictureUrl("");
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
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
        <StyledForm
          sx={{ width: 800, maxWidth: "100%" }}
          onSubmit={handleSubmit}
        >
          <Typography variant="h4">Crete Product</Typography> <br />
          <TextField
            onChange={(e) => setProductName(e.target.value)}
            required
            id="name"
            fullWidth
            label="product name"
          />
          <h1></h1>
          <TextField
            onChange={(e) => setPrice(e.target.value)}
            required
            id="price"
            fullWidth
            label=" Enter Price"
          />
          <h1></h1>
          <TextField
            onChange={(e) => setPictureUrl(e.target.value)}
            required
            id="image"
            fullWidth
            label=" picture url"
          />
          <StyledButton type="submit">add</StyledButton>
          <StyledButton
            onClick={() => {
              {
                setProductName("");
                setPrice("");
                setPictureUrl("");
              }
            }}
          >
            Cancel
          </StyledButton>
        </StyledForm>
      </Box>
    </div>
  );
};

export default createpage;
