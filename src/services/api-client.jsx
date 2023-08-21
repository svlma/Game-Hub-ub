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
  get = (id) => {
    return axiosInstance.get(this.endpoint + "/" + id).then((res) => res.data);
  };
  getMovies = (id) => {
    return axiosInstance
      .get(this.endpoint + "/" + id + "/movies")
      .then((res) => res.data);
  };
}

export default APIClient;
