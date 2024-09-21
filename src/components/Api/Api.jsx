import axios from "axios";

// https://api.unsplash.com/search/photos?page=1&query=office

const BASE_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "jwVCJI0N_zw5LuVuX1p6Gjswiefo7xOd2WCvT7ETsD0";
export const fetchPictures = async (query, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        // client_id: ACCESS_KEY,
        query,
        page,
        per_page: 12,
      },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
