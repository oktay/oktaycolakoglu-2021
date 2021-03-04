import { ChakraProvider } from '@chakra-ui/react';
import Fonts from '@comp/font-face';
import theme from '@lib/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Fonts />
    </ChakraProvider>
  );
}

export default MyApp;
