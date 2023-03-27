import { SessionProvider } from "next-auth/react"
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '/styles/theme'

export default function App({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <SessionProvider session={session}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraBaseProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraBaseProvider>
    </SessionProvider>
  )
}
