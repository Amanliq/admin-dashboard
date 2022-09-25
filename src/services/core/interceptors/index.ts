import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"

import { getAuthToken, removeAuthToken, removeRefreshToken } from "@/utils/auth-handler";


export default class Interceptors {
    requestResolve(config: AxiosRequestConfig): AxiosRequestConfig {
        config.headers = {
            Authorization: `Bearer ${getAuthToken()}`
        }
        return config
    }

    requestReject(error: AxiosError): AxiosError {
        return error
    }

    responseResolve(response: AxiosResponse): AxiosResponse {
        return response
    }

    async responseReject(error: AxiosError) {
        if (error.response && error.response.status === 401) {

            removeAuthToken()
            removeRefreshToken()

            setTimeout(() => {
                window.location.replace('/')
            }, 300)
            return error
        } else {
            error
        }
        return error

    }
}
