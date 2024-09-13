import axios from "axios";
import { Image } from "../types/types";

const API_KEY = "St9AFIrYU0aQI09YxF_W4IuWImTsr6Veu_assiJTOiE";
const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query: string, page: number) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        query,
        page,
        per_page: 12,
        client_id: API_KEY,
      },
    });

    return {
      images: response.data.results as Image[],
      hasMore: response.data.total_pages > page,
    };
  } catch (error) {
    throw new Error("Error fetching images");
  }
};
