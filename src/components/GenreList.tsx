import { Spinner, Text } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"

const GenreList = () => {
  const { data, isLoading, error } = useGenres()

  if (isLoading) return <Spinner />

  return (
    <ul>
      {data.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  )
}

export default GenreList
