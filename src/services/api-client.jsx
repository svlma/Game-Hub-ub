import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "15214e9427ba4681a9a1d97344cdac65",
  },
});
