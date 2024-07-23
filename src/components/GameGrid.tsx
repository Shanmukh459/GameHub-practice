import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { Text } from "@chakra-ui/react"

interface Game {
  id: number
  name: string
}

interface FetchGamesResponse {
  results: Game[]
  count: number
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState("")

  useEffect(() => {
    // const controller = new AbortController()
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message))

    // return controller.abort()
  }, [])

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  )
}

export default GameGrid
