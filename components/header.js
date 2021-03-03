import { Box, Container, Flex, Link, Stack } from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";

import RouterLink from "next/link";

function Header() {
  const menu = [
    {
      url: "https://github.com/oktay",
      label: "Github",
    },
    {
      url: "https://twitter.com/oktaycolakoglu",
      label: "Twitter",
    },
    {
      url: "https://www.linkedin.com/in/oktaycolakoglu/",
      label: "Linkedin",
    },
  ];
  return (
    <Container py="4" maxWidth="container.lg">
      <Stack direction="row" spacing="6">
        <RouterLink href="/">
          <Link
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            color="GrayText"
            href="/"
          >
            Home
          </Link>
        </RouterLink>
        {menu.map(({url, label}) => (
          <Flex
            key={url}
            as={Link}
            href={url}
            isExternal
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            alignItems="center"
          >
            {label} <Box children={<BiLinkExternal />} ml="2" />
          </Flex>
        ))}
      </Stack>
    </Container>
  );
}

export default Header;
