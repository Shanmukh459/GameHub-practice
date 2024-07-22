import { Button, Grid, GridItem, Show } from "@chakra-ui/react"

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "sidebar main"` }}
    >
      <GridItem area="nav" bg="coral">
        NavBar
      </GridItem>
      <Show above="lg">
        <GridItem area="sidebar" bg="gold">
          SideBar
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  )
}

export default App
