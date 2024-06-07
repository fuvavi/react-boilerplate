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
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const currentRefreshToken = authStorageService().getRefreshToken();
            const response = await this.post('/auth/refresh', {
              refreshToken: currentRefreshToken,
            });
            const { token, refreshToken } = response;
            token && authStorageService().setToken(token);
            refreshToken && authStorageService().setRefreshToken(refreshToken);

            // Retry the original request with the new token
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axios(originalRequest);
          } catch (error) {
            // Redirect to login if refresh token is invalid
            window.location.href = '/login';
          }
        }
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
