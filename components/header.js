import { Box, Container, Flex, Link, Stack, useColorMode, IconButton } from '@chakra-ui/react';
import { BiLinkExternal, BiSun, BiMoon } from 'react-icons/bi';

import RouterLink from 'next/link';

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const menu = [
    {
      url: 'https://github.com/oktay',
      label: 'Github',
    },
    {
      url: 'https://twitter.com/oktaycolakoglu',
      label: 'Twitter',
    },
    {
      url: 'https://www.linkedin.com/in/oktaycolakoglu/',
      label: 'Linkedin',
    },
  ];
  return (
    <Container py="4" maxWidth="container.lg" display="flex" justifyContent="space-between">
      <Stack direction="row" spacing="6">
        <RouterLink href="/">
          <Flex
            as={Link}
            alignItems="center"
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
            color="GrayText"
            href="/"
          >
            Home
          </Flex>
        </RouterLink>
        {menu.map(({ url, label }) => (
          <Flex
            key={url}
            as={Link}
            href={url}
            isExternal
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
            alignItems="center"
          >
            {label} <Box children={<BiLinkExternal />} ml="2" />
          </Flex>
        ))}
      </Stack>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        icon={colorMode === 'light' ? <BiMoon /> : <BiSun />}
        aria-label="Toggle Theme"
      >
        Toggle Theme
      </IconButton>
    </Container>
  );
}

export default Header;
