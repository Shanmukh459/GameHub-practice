import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { AxiosRequestConfig, CanceledError } from "axios"

interface FetchResponse<T> {
  results: T[]
  count: number
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState()
  const [isLoading, setLoading] = useState(false)

  useEffect(
    () => {
      const controller = new AbortController()
      setLoading(true)
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setLoading(false)
          setData(res.data.results)
        })
        .catch((err) => {
          if (err instanceof CanceledError) return
          setLoading(false)
          setError(err.message)
        })

      return () => controller.abort()
    },
    deps ? [...deps] : []
  )

  return { data, error, isLoading }
}

export default useData
