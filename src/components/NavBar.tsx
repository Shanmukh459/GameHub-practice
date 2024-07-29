import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ThemeSwitch from "./ThemeSwitch"
import SearchBar from "./SearchBar"

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image boxSize="60px" src={logo} />
      <SearchBar />
      <ThemeSwitch />
    </HStack>
  )
}

export default NavBar
