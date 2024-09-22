import {
  Box,
  Button,
  styled,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
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
  margin: "5px",
  marginTop: "10px",
  textTransform: "capitalize",
  backgroundColor: "blue",
  color: "white",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "#45a049",
  },
}));

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [product, setProduct] = useState(null);

  const [openSnackbar, setOpenSnackbar] = useState(false); // Snackbar state
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Snackbar message
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // 'success' or 'error'

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

      const result = await response.json();

      return {
        success: result.success,
        data: result.data,
      };
    } catch (error) {
      console.error("Error creating product:", error);
      return { success: false, message: "can not add product" };
    }
  };

  const handleAddProduct = async () => {
    // Validate if all fields are filled
    if (
      !newProduct.name.trim() ||
      !newProduct.price.trim() ||
      !newProduct.image.trim()
    ) {
      setSnackbarMessage("Please provide all fields");
      setSnackbarSeverity("error");
      setOpenSnackbar(true); // Open Snackbar for error
      return;
    }

    const { success, message } = await createProduct(newProduct);

    if (success) {
      setProduct(newProduct);
      setSnackbarMessage("Product added successfully");
      setSnackbarSeverity("success");
      setOpenSnackbar(true); // Open Snackbar for success
    } else {
      setSnackbarMessage(message || "Failed to add product");
      setSnackbarSeverity("error");
      setOpenSnackbar(true); // Open Snackbar for failure
    }

    setNewProduct({ name: "", price: "", image: "" });
  };

  // Function to close the Snackbar
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
          <Typography variant="h4">Create Product</Typography>
          <br />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            required
            id="name"
            fullWidth
            label="Product Name"
          />
          <br /> <br />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            required
            id="price"
            fullWidth
            label="Enter Price"
          />
          <br />
          <br />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            required
            id="image"
            fullWidth
            label="Picture URL"
          />
          <br /> <br />
          <StyledButton onClick={handleAddProduct}>Add</StyledButton>
          <StyledButton
            onClick={() => {
              setNewProduct({ name: "", price: "", image: "" });
            }}
          >
            Cancel
          </StyledButton>
        </StyledForm>
      </Box>

      {/* Snackbar for notifications */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CreatePage;
