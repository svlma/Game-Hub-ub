import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "15214e9427ba4681a9a1d97344cdac65",
  },
});

class APIClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }
  getAll = (config) => {
    return axiosInstance.get(this.endpoint, config).then((res) => res.data);
  };
}

export default APIClient;
