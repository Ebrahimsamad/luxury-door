// Define the base URL for your API
const BASE_URL = "https://luxury-api.vercel.app";

// Utility function to handle errors globally
const handleError = (error) => {
  if (error.response) {
    return error.response.data.message || "An error occurred!";
  }
  return error.message || "An error occurred!";
};

// Utility function for sending requests and handling responses
const sendRequest = async (url, method = "GET", body = null) => {
  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      options.body = JSON.stringify(body); // Add body if needed
    }

    const response = await fetch(url, options);

    // Handle non-2xx responses
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "Something went wrong!");
    }

    // Parse the JSON response
    return await response.json();
  } catch (error) {
    throw new Error(handleError(error));
  }
};

// ProductService Class to handle API calls
class ProductService {
  // Get all products
  static async getAllProducts() {
    const url = `${BASE_URL}/product`;
    return sendRequest(url);
  }

  // Get product by ID
  static async getProductById(id) {
    const url = `${BASE_URL}/product/${id}`;
    return sendRequest(url);
  }

  // Get products by filter (colorId, sharpId, categoryId)
  static async getProductsByFilter(filters) {
    const url = `${BASE_URL}/product/custom`;
    return sendRequest(url, "POST", filters);
  }

  // Create a new product
  static async createProduct(productData) {
    const url = `${BASE_URL}/product`;
    return sendRequest(url, "POST", productData);
  }

  // Update an existing product
  static async updateProduct(id, updateData) {
    const url = `${BASE_URL}/product/${id}`;
    return sendRequest(url, "PUT", updateData);
  }

  // Delete a product
  static async deleteProduct(id) {
    const url = `${BASE_URL}/product/${id}`;
    return sendRequest(url, "DELETE");
  }
}

export default ProductService;
