const BASE_URL = "https://luxury-api-2.vercel.app/category";

export const categoryService = {
  async createCategory(data) {
    const response = await fetch(`${BASE_URL}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  },

  async addColor(categoryId, colorId) {
    const response = await fetch(`${BASE_URL}/${categoryId}/addColor`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ colorId }),
    });
    return await response.json();
  },

  async addSharp(categoryId, sharpId) {
    const response = await fetch(`${BASE_URL}/${categoryId}/addSharp`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sharpId }),
    });
    return await response.json();
  },

  async removeColor(categoryId, colorId) {
    const response = await fetch(`${BASE_URL}/${categoryId}/removeColor`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ colorId }),
    });
    return await response.json();
  },

  async removeSharp(categoryId, sharpId) {
    const response = await fetch(`${BASE_URL}/${categoryId}/removeSharp`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sharpId }),
    });
    return await response.json();
  },

  async updateCategory(categoryId, data) {
    const response = await fetch(`${BASE_URL}/${categoryId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  },

  async deleteCategory(categoryId) {
    const response = await fetch(`${BASE_URL}/${categoryId}`, {
      method: "DELETE",
    });
    return await response.json();
  },

  async getAllCategories() {
    const response = await fetch(`${BASE_URL}/`);
    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }

    const data = await response.json();

    // If data is not an array, extract categories array if it exists
    if (Array.isArray(data)) {
      return data;
    } else if (data && Array.isArray(data.categories)) {
      return data.categories;
    } else {
      throw new Error("Unexpected response format");
    }
  },

  async getCategoryById(categoryId) {
    const response = await fetch(`${BASE_URL}/${categoryId}`);
    return await response.json();
  },
};
