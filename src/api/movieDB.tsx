import axios from "axios";
import Config from "react-native-config";

const movieDB = axios.create({
  // timeout: 5000,
  baseURL: Config.BASE_API_URL,
  params: {
    language: "es-ES",
  },
  headers: {
    Authorization: `Bearer ${Config.API_TOKEN}`,
  },
});

export default movieDB;
