import { defineStore } from 'pinia'


export const useSponsorsStore = defineStore('sponsors', {
    state() {
        return {
            search: ""
        }
    },
    actions: {
        setSearchValue(v: string) {
            this.search = v
        }
    },
})


