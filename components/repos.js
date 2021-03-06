import { Box, Text, Badge, Grid, Link, Circle } from '@chakra-ui/react';
import { BiBook } from 'react-icons/bi';
import { colors } from '@lib/colors';

function RepoTitle({ url, isFork, children }) {
  return (
    <Link
      href={url}
      isExternal
      fontWeight="medium"
      display="flex"
      alignItems="center"
      _hover={{ textDecoration: 'none' }}
    >
      <BiBook />
      <Text ml="1">{children}</Text>
      {isFork && (
        <Badge ml="2" variant="outline" colorScheme="purple" fontSize="xx-small">
          Fork
        </Badge>
      )}
    </Link>
  );
}

function RepoLang({ lang }) {
  const color = colors[lang] ? colors[lang].color : '#000';
  return (
    <Box display="inline-flex" alignItems="center" mt="4">
      <Circle size="2" bg={color} mr="2" />
      <Text as="span" fontSize="xs">
        {lang}
      </Text>
    </Box>
  );
}

function RepoCard({ repo }) {
  return (
    <Box
      key={repo.id}
      boxShadow="xs"
      p={{ base: 4, md: 6 }}
      bg="whiteAlpha.50"
      border="GrayText"
      borderRadius="md"
    >
      <RepoTitle url={repo.html_url} isFork={repo.fork}>
        {repo.name}
      </RepoTitle>
      <Text as="p" color="GrayText" mt="2">
        {repo.description}
      </Text>
      {repo.homepage && (
        <Link href={repo.homepage} display="block" isExternal>
          {repo.homepage}
        </Link>
      )}
      {repo.language && <RepoLang lang={repo.language} />}
    </Box>
  );
}

function Repos({ repos }) {
  return (
    <Grid gridTemplateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={{ base: '8', md: '12' }}>
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </Grid>
  );
}

export default Repos;
