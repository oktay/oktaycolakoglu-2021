import { Box, Text, Badge, Grid, Link, Circle, Stack } from "@chakra-ui/react";
import { BiBook } from "react-icons/bi";
import { colors } from "@lib/colors";

function Repos({ repos }) {
  return (
    <Grid gridTemplateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap="16">
      {repos.map((repo) => {
        const color = colors[repo.language]
          ? colors[repo.language].color
          : "#000";
        return (
          <Box
            key={repo.id}
            boxShadow="xs"
            p="6"
            bg="whiteAlpha.50"
            border="GrayText"
            borderRadius="md"
          >
            <Link
              href={repo.html_url}
              fontWeight="medium"
              display="flex"
              alignItems="center"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              isExternal
            >
              <BiBook />
              <Text ml="1">{repo.name}</Text>
              {repo.fork && <Badge ml="2" variant="outline" colorScheme="purple" fontSize="xx-small">Fork</Badge>}
            </Link>
            <Text as="p" color="GrayText" mt="2">
              {repo.description}
            </Text>
            {repo.homepage && (
              <Link
                href={repo.homepage}
                display="block"
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
              >
                {repo.homepage}
              </Link>
            )}
            {repo.language && (
              <Box display="inline-flex" alignItems="center" mt="4">
                <Circle size="2" bg={color} mr="2" />
                <Text as="span" fontSize="xs">
                  {repo.language}
                </Text>
              </Box>
            )}
          </Box>
        );
      })}
    </Grid>
  );
}

export default Repos;
