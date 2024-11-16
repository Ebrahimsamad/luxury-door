const API_URL = "https://luxury-api.vercel.app/color";

const ColorService = {
  async createColor(colorData) {
    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(colorData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Could not create color");
      }
      return data;
    } catch (error) {
      console.error("Error creating color:", error);
      throw error;
    }
  },

  async getAllColors() {
    try {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Could not fetch colors");
      }
      return data.colors;
    } catch (error) {
      console.error("Error fetching colors:", error);
      throw error;
    }
  },

  async editColor(colorId, colorData) {
    try {
      const response = await fetch(`${API_URL}/${colorId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(colorData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Could not update color");
      }
      return data;
    } catch (error) {
      console.error("Error updating color:", error);
      throw error;
    }
  },

  async deleteColor(colorId) {
    try {
      const response = await fetch(`${API_URL}/${colorId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Could not delete color");
      }
      return data;
    } catch (error) {
      console.error("Error deleting color:", error);
      throw error;
    }
  },
};

export default ColorService;
