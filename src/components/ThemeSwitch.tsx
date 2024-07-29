import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react"

const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack>
      <Switch
        colorScheme="purple"
        onChange={toggleColorMode}
        isChecked={colorMode === "dark"}
      />
      <Text whiteSpace="nowrap">
        {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
      </Text>
    </HStack>
  )
}

export default ThemeSwitch
