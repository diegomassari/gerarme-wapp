export const TOKEN_KEY = "@airbnb-Token"
export const USER_ID = 0

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const getUser = () => localStorage.getItem(USER_ID)

export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const user = (user) => {
  localStorage.setItem(USER_ID, user)
}

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
}