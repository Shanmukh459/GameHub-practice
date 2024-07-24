import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { CanceledError } from "axios"

interface FetchGenresResponse {
  count: number
  results: Genre[]
}

export interface Genre {
  id: number
  name: string
  image_background: string
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([])
  const [error, setError] = useState("")
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setLoading(false)
        setGenres(res.data.results)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setLoading(false)
        setError(err.message)
      })

    return () => controller.abort()
  }, [])

  return { genres, error, isLoading }
}

export default useGenres
