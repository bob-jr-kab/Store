import Product from "../models/product.model.js"; // Import the Product model

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from the database
    res.status(200).json({ success: true, data: products }); // Use the fetched 'products' data
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Create a new product
export const createProduct = async (req, res) => {
  const product = req.body;

  // Check if all required fields are provided
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  // Create a new instance of the Product model
  const newProduct = new Product(product); // Pass 'product' instead of 'Product'

  try {
    await newProduct.save(); // Save the new product to the database
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Update an existing product
export const updateProduct = async (req, res) => {
  const { id } = req.params; // Extract the product ID from the request parameters
  const updatedProductData = req.body; // Extract the new product data from the request body

  try {
    // Find the product by ID and update it with the new data
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      updatedProductData,
      {
        new: true, // Return the updated document
        runValidators: true, // Validate the updated data before saving
      }
    );

    // If the product is not found, return a 404 response
    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // Return the updated product
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  const { id } = req.params; // Extract the product ID from the request parameters

  try {
    // Find the product by ID and delete it
    const deletedProduct = await Product.findByIdAndDelete(id);

    // If the product is not found, return a 404 response
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // Return a success message
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
