const API_URL = "https://luxury-api-2.vercel.app/sharp";

const SharpService = {
  async createSharp(sharpData) {
    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sharpData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Could not create sharp");
      }
      return data;
    } catch (error) {
      console.error("Error creating sharp:", error);
      throw error;
    }
  },

  async getAllSharps() {
    try {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Could not fetch sharps");
      }
      return data.sharps;
    } catch (error) {
      console.error("Error fetching sharps:", error);
      throw error;
    }
  },

  async editSharp(sharpId, sharpData) {
    try {
      const response = await fetch(`${API_URL}/${sharpId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sharpData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Could not update sharp");
      }
      return data;
    } catch (error) {
      console.error("Error updating sharp:", error);
      throw error;
    }
  },

  async deleteSharp(sharpId) {
    try {
      const response = await fetch(`${API_URL}/${sharpId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Could not delete sharp");
      }
      return data;
    } catch (error) {
      console.error("Error deleting sharp:", error);
      throw error;
    }
  },
};

export default SharpService;
