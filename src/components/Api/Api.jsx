import axios from "axios";

// export const fetchPictures = async () => {
//     ;
//     const { data } = await axios.get(
//         "https://hn.algolia.com/api/v1/search?query=react"
//     );
//     return data
// };
const BASE_URL = "https://api.unsplash.com/";
const ACCESS_KEY = "jwVCJI0N_zw5LuVuX1p6Gjswiefo7xOd2WCvT7ETsD0";
export const fetchPictures = async (query, page = 1) => {
  const response = await axios.get(BASE_URL, {
    params: {
      client_id: ACCESS_KEY,
      query: query,
      page: page,
      per_page: 12,
    },
  });
  return response.data;
};
