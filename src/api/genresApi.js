import axios from "axios";
import { BASE_URL } from "../constants.js";

export const getGenres = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/genres`);
  return data;
}