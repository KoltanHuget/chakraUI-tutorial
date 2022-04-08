import {
  ChakraProvider,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import customTheme from "./extendTheme"
import Banner from "./components/Banner"

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Banner/>
  </ChakraProvider>
)
