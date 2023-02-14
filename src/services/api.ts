import axios, {AxiosInstance} from 'axios';

class Api {
  private apiInstance: AxiosInstance;

  constructor() {
    this.apiInstance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      withCredentials: true,
    });
  }
}

export default new Api();
