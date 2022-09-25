import axios from "axios"
import Interceptors from "@/services/core/interceptors/index";

const instanceGenerator = (baseUrl: string) => {
    const interceptors = new Interceptors()
    const _axios = axios.create({
        baseURL: baseUrl
    })
    _axios.interceptors.request.use(interceptors.requestResolve, interceptors.requestReject)
    _axios.interceptors.response.use(interceptors.responseResolve, interceptors.responseReject)
    return _axios
}

export const BASE_API_V1_URL = instanceGenerator(import.meta.env.VITE_API_URL_V1)