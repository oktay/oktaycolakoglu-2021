import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  fonts: {
    heading: 'DM Sans',
    body: 'DM Sans',
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode('blackAlpha.900', 'whiteAlpha.900')(props),
        bg: mode('white', '#13141a')(props),
      },
    }),
  },
  components: {
    Heading: {
      baseStyle: (props) => {
        return {
          fontWeight: 'normal',
        };
      },
    },
  },
});

export default theme;
