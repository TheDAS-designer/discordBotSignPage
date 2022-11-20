const TOKEN_KEY = 'token'
const REGRESH_TOKEN_KEY = 'rtoken'

export const getToken = () => {
    console.log("localStorage:", localStorage)
    return localStorage.getItem(TOKEN_KEY)
}
export const getRefreshToken = () => localStorage.getItem(REGRESH_TOKEN_KEY)

export const setToken = (token: any, params = {}) => {
    localStorage.setItem(TOKEN_KEY, token)
}

export const setRefreshToken = (token: any) => {
    localStorage.setItem(REGRESH_TOKEN_KEY, token)
}