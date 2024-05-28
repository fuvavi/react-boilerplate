/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL } from '@/utils/constant';
import { HttpMethod } from '@/types/http.enum';
import authStorageService from './authStorage.service';

export class ApiService {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  setupInterceptors() {
    this.axiosInstance.interceptors.request.use(
      async (config: any) => {
        const accessToken = authStorageService().getToken();
        if (accessToken) {
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error) => {
        this.handleError(error);
        return Promise.reject(error);
      },
    );
  }

  handleError(error: any) {
    console.error(error.response ? error.response.data.message : error.message);
  }

  async request(
    method: HttpMethod,
    url: string,
    data?: any,
    config: AxiosRequestConfig = {},
  ): Promise<any> {
    try {
      const response = await this.axiosInstance[method](url, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  get(url: string, config: AxiosRequestConfig = {}) {
    return this.request(HttpMethod.GET, url, null, config);
  }

  post(url: string, data: any, config: AxiosRequestConfig = {}) {
    return this.request(HttpMethod.POST, url, data, config);
  }

  put(url: string, data: any, config: AxiosRequestConfig = {}) {
    return this.request(HttpMethod.PUT, url, data, config);
  }

  delete(url: string, config: AxiosRequestConfig = {}) {
    return this.request(HttpMethod.DELETE, url, null, config);
  }
}
