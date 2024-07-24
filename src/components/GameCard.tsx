import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIcons from "./PlatformIcons"
import CriticScore from "./CriticScore"
import getCroppedImage from "../services/imageUrl"

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard
