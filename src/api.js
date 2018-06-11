import Axios from 'axios'
const clientId = '0db2bf578074e1f';

class API {
  constructor() {
    this.axios = Axios.create({baseURL: 'https://api.imgur.com/3'});

    this.axios.interceptors.request.use((config) => {
      config.headers.Authorization = `Client-ID ${clientId}`;
      return config;
    })
  }

  getImages(query) {
    return this.axios.get(`/gallery/search/time/top/1?q=${query}`)
  }
}

const api = new API();

export default api
