import { getAuthToken, getRefreshToken, saveAuthToken, saveRefreshToken } from '@/utils/auth-handler'
import { AuthResponse } from '@/utils/type-helper'
import { defineStore } from 'pinia'


export const useAuthStore = defineStore('auth', {
    state() {
        return {
            access: getAuthToken() || "",
            refresh: getRefreshToken() || "",
            
        }
    },

    actions: {
        saveAuthResponse(obj: AuthResponse) {
            saveAuthToken(obj.access)
            saveRefreshToken(obj.refresh)
            this.access = obj.access
            this.refresh = obj.refresh

        }
    },
})


