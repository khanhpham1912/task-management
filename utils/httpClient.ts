import axios, { AxiosRequestConfig } from "axios"
axios.defaults.withCredentials = true
axios.defaults.headers["Access-Control-Allow-Origin"] = "*"

axios.interceptors.request.use(
  (config) => {
    // config request
    return config
  },
  (error) => Promise.reject(error),
)

async function httpClient<T>(
  path: string,
  config?: AxiosRequestConfig & { internal?: boolean },
): Promise<T> {
  const apiUrl = process.env.API_URL + path

  try {
    const result = await axios({ url: apiUrl, ...config })
    return result.data
  } catch (error) {
    throw error
  }
}

export default httpClient
