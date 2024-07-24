import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { CanceledError } from "axios"

interface FetchGamesResponse {
  results: Game[]
  count: number
}

export interface Platform {
  id: number
  slug: string
  name: string
}

export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState("")

  useEffect(() => {
    const controller = new AbortController()
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
      })

    return () => controller.abort()
  }, [])

  return { games, error }
}

export default useGames
