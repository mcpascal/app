const key = 'access_token'
const getToken = () => {
  return window.localStorage.getItem(key)
}

const setToken = (token: string) => {
  return window.localStorage.setItem(key, token)
}

const removeToken = () => {
  return window.localStorage.removeItem(key)
}

export { getToken, setToken, removeToken }