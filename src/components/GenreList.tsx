import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import getCroppedImage from "../services/imageUrl"

const GenreList = () => {
  const { data, isLoading, error } = useGenres()

  if (isLoading) return <Spinner />

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              src={getCroppedImage(genre.image_background)}
              borderRadius={8}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
