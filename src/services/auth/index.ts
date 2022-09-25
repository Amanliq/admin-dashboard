import Core from '@/services/core'
import { BASE_API_V1_URL } from "@/services/core/base/index";



class Auth extends Core {
    constructor(axios = BASE_API_V1_URL) {
        super(axios)
    }

    login(requestData: any) {
        return this.post(`auth/login/`, requestData)
    }
    // refreshToken(token:string) {

    // }


}

export default Auth