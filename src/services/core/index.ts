import { Axios, AxiosRequestConfig } from "axios"

class Core {
    protected _axios: Axios;
    constructor(axios: Axios) {
        this._axios = axios
    }

    get(url: string, config?: AxiosRequestConfig) {
        return this._axios.get(url, config)
    }

    post(url: string, body: any, config?: AxiosRequestConfig) {
        return this._axios.post(url, body, {
            ...config
        })
    }

    put(url: string, body: any) {
        return this._axios.put(url, body)
    }

    delete(url: string) {
        return this._axios.delete(url)
    }

}

export default Core;