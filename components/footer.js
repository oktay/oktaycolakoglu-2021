const { Container, Text, Link } = require('@chakra-ui/react');

function Footer() {
  return (
    <Container py="4" mt="36" color="GrayText">
      <Text align="center" fontSize="sm">
        &copy; 2021 Oktay Çolakoğlu
      </Text>
      <Text align="center" fontSize="xs">
        Made with{' '}
        <Link href="https://nextjs.org" textDecoration="underline" isExternal>
          Next.js
        </Link>{' '}
        &amp;{' '}
        <Link href="https://chakra-ui.com" textDecoration="underline" isExternal>
          Chakra UI
        </Link>
        ・Source code shared on{' '}
        <Link
          href="https://github.com/oktay/oktaycolakoglu-2021"
          textDecoration="underline"
          isExternal
        >
          Github
        </Link>
      </Text>
    </Container>
  );
}

export default Footer;
