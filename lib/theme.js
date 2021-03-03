import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode('blackAlpha.900', 'whiteAlpha.900')(props),
        bg: mode('white', '#13141a')(props)
      }
    })
  },
  components: {
    Link: {
      baseStyle: (props) => {
        return {
          textDecoration: "underline",
          textDecorationColor: "rgba(255, 255, 255, 0.24)",
          _hover: {
            textDecorationColor: "#FAF089"
          },
        };
      },
    },
    Heading: {
      baseStyle: (props) => {
        return {
          fontWeight: "medium",
        }
      }
    }
  },
});

export default theme;
