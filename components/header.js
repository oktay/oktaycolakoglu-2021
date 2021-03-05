import {
  Avatar,
  Box,
  Container,
  Flex,
  Link,
  useColorMode,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { BiLinkExternal, BiSun, BiMoon, BiChevronDown } from 'react-icons/bi';
import RouterLink from 'next/link';
import { socials } from '@lib/socials';

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      bg={colorMode === 'dark' ? '#13141a' : '#fff'}
      borderBottom="1px solid"
      borderColor={colorMode === 'dark' ? 'gray.900' : 'gray.100'}
      zIndex="sticky"
    >
      <Container py="4" maxWidth="container.lg" display="flex" justifyContent="space-between">
        <Menu>
          <MenuButton
            as={Button}
            leftIcon={<Avatar src="/avatar.jpg" size="xs" />}
            rightIcon={<BiChevronDown />}
            fontWeight="medium"
          >
            Home
          </MenuButton>
          <MenuList background={colorMode === 'dark' ? '#13141a' : '#fff'}>
            <RouterLink href="/">
              <MenuItem as={Link}>
                <Flex alignItems="center">Home</Flex>
              </MenuItem>
            </RouterLink>
            {socials.map(({ url, label }) => (
              <MenuItem as={Link} href={url} key={url} icon={<BiLinkExternal />} isExternal>
                {label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <IconButton
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <BiMoon /> : <BiSun />}
          aria-label="Toggle theme"
          title="Toggle theme"
        />
      </Container>
    </Box>
  );
}

export default Header;
