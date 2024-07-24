import { Spinner, Text } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"

const GenreList = () => {
  const { genres, isLoading, error } = useGenres()

  if (isLoading) return <Spinner />

  return (
    <ul>
      {genres.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  )
}

export default GenreList
