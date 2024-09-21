import { Box } from "@mui/material";
import React from "react";
import ProductCard from "../components/ProductCard";

const Homepage = () => {
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
      <ProductCard />
    </Box>
  );
};

export default Homepage;
