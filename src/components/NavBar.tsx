import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ThemeSwitch from "./ThemeSwitch"
import SearchBar from "./SearchBar"

interface Props {
  onSearch: (searchText: string) => void
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image boxSize="60px" src={logo} />
      <SearchBar onSearch={onSearch} />
      <ThemeSwitch />
    </HStack>
  )
}

export default NavBar
