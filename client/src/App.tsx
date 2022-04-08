import * as React from "react"
import {
  ChakraProvider,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import customTheme from "./extendTheme"

export const App = () => (
  <ChakraProvider theme={customTheme}>
    Hello
  </ChakraProvider>
)
