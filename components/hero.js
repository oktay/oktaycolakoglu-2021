import { Container, Heading, Link, useColorMode } from '@chakra-ui/react';

function Hero() {
  const { colorMode } = useColorMode();

  return (
    <Container as="article" maxWidth="container.lg" mt="56">
      <Heading as="h1">Hello I'm Oktay 🖐</Heading>
      <Heading as="p" maxWidth="container.md" mt="4" color="GrayText">
        Frontend developer who lives in Istanbul, also Graphic Designer and UI Design enthusiast.
        Currently frontend team lead at{' '}
        <Link
          href="https://akinon.com"
          color={colorMode === 'light' ? 'black' : 'white'}
          textDecoration="underline"
          isExternal
        >
          Akinon
        </Link>
      </Heading>
    </Container>
  );
}

export default Hero;
