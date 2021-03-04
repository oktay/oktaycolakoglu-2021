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
    {
      url: 'https://dribbble.com/oktaycolakoglu',
      label: 'Dribbble',
    },
  ];
  return (
    <Box
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
            {menu.map(({ url, label }) => (
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
