import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'

export interface ApiConfig extends AxiosRequestConfig { }

export interface ApiResponse<T = any> extends AxiosResponse<T> { }

export interface ApiError extends AxiosError { }

export interface Api {
    request<T = any>(config: ApiConfig): Promise<ApiResponse<T>>
    get<T = any>(url: string, config?: ApiConfig): Promise<ApiResponse<T>>
    delete<T = any>(url: string, config?: ApiConfig): Promise<ApiResponse<T>>
    head<T = any>(url: string, config?: ApiConfig): Promise<ApiResponse<T>>
    options<T = any>(url: string, config?: ApiConfig): Promise<ApiResponse<T>>
    post<T = any>(url: string, data?: any, config?: ApiConfig): Promise<ApiResponse<T>>
    put<T = any>(url: string, data?: any, config?: ApiConfig): Promise<ApiResponse<T>>
    patch<T = any>(url: string, data?: any, config?: ApiConfig): Promise<ApiResponse<T>>
}

export class ApiClient implements Api {
    private client = axios.create()
    
    constructor(config?: ApiConfig) {
        if (config) this.client = axios.create(config);
    }

    async request<T = any>(config: ApiConfig): Promise<ApiResponse<T>> {
        try {
            const response = await this.client.request(config)
            return response
        } catch (error) {
            throw this.handleError(error)
        }
    }

    async get<T = any>(url: string, config?: ApiConfig): Promise<ApiResponse<T>> {
        try {
            const response = await this.client.get(url, config)
            return response
        } catch (error) {
            throw this.handleError(error)
        }
    }

    async delete<T = any>(url: string, config?: ApiConfig): Promise<ApiResponse<T>> {
        try {
            const response = await this.client.delete(url, config)
            return response
        } catch (error) {
            throw this.handleError(error)
        }
    }

    async head<T = any>(url: string, config?: ApiConfig): Promise<ApiResponse<T>> {
        try {
            const response = await this.client.head(url, config)
            return response
        } catch (error) {
            throw this.handleError(error)
        }
    }

    async options<T = any>(url: string, config?: ApiConfig): Promise<ApiResponse<T>> {
        try {
            const response = await this.client.options(url, config)
            return response
        } catch (error) {
            throw this.handleError(error)
        }
    }

    async post<T = any>(url: string, data?: any, config?: ApiConfig): Promise<ApiResponse<T>> {
        try {
            const response = await this.client.post(url, data, config)
            return response
        } catch (error) {
            throw this.handleError(error)
        }
    }

    async put<T = any>(url: string, data?: any, config?: ApiConfig): Promise<ApiResponse<T>> {
        try {
            const response = await this.client.put(url, data, config)
            return response
        } catch (error) {
            throw this.handleError(error)
        }
    }

    async patch<T = any>(url: string, data?: any, config?: ApiConfig): Promise<ApiResponse<T>> {
        try {
            const response = await this.client.patch(url, data, config)
            return response
        } catch (error) {
            throw this.handleError(error)
        }
    }

    private handleError(error: any): ApiError {
        // check error
        const apiError = error as ApiError
        // Handle error here
        return apiError
    }
}
