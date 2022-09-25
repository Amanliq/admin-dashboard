import Core from '@/services/core'
import { BASE_API_V1_URL } from "@/services/core/base/index";



class Sponsor extends Core {
    constructor(axios = BASE_API_V1_URL) {
        super(axios)
    }

    getSponsors(page: number, pageSize: number, search: string) {
        return this.get(`sponsor-list/?page=${page}&page_size=${pageSize}&search=${search}`)
    }



}

export default Sponsor