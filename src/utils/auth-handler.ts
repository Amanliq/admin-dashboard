
export const getAuthToken = () => {
    return localStorage.getItem('auth_token')
}

export const saveAuthToken = (token: string) => {
    localStorage.setItem('auth_token', token)
}

export const removeAuthToken = () => {
    localStorage.removeItem('auth_token')
}


export const getRefreshToken = () => {
    return localStorage.getItem('refresh_token')
}

export const saveRefreshToken = (token: string) => {
    localStorage.setItem('refresh_token', token)
}

export const removeRefreshToken = () => {
    localStorage.removeItem('refresh_token')
}