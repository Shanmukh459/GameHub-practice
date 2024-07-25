import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

const PlatformSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        <MenuItem>option 1</MenuItem>
        <MenuItem>option 2</MenuItem>
        <MenuItem>option 3</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
