import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.BASE_ENDPOINT,
});

class HttpClient {
  private httpClient: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  get<ResponseData>(url: string, config?: AxiosRequestConfig): Promise<ResponseData> {
    return this.httpClient.get(url, config);
  }

  post<ResponseData, RequestBody>(
    url: string,
    body: RequestBody,
    config?: AxiosRequestConfig,
  ): Promise<ResponseData> {
    return this.httpClient.post(url, body, config);
  }

  patch<ResponseData, RequestBody>(
    url: string,
    body: RequestBody,
    config?: AxiosRequestConfig,
  ): Promise<ResponseData> {
    return this.httpClient.patch(url, body, config);
  }

  delete<ResponseData>(url: string, config?: AxiosRequestConfig): Promise<ResponseData> {
    return this.httpClient.delete(url, config);
  }
}

export const httpClient = new HttpClient(axiosInstance);
