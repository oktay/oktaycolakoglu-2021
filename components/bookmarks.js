import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  Grid,
  Link,
  AspectRatio,
  Badge,
  StackDivider,
} from '@chakra-ui/react';
import { formatDistanceToNowStrict, parseISO } from 'date-fns';

function BookmarkCard({ bookmark }) {
  const date = formatDistanceToNowStrict(parseISO(bookmark.created), { addSuffix: true });

  return (
    <Grid gridTemplateColumns={{ base: '1fr', md: '250px 1fr' }} gap="8" alignItems="stretch">
      <AspectRatio ratio={{ base: 16 / 9, md: 4 / 3 }}>
        <Link href={bookmark.link} isExternal>
          <Image
            src={bookmark.cover}
            width="100%"
            height="100%"
            objectFit="cover"
            borderRadius="md"
            transition="opacity 150ms ease-out"
            _hover={{ opacity: 0.6 }}
            loading="lazy"
          />
        </Link>
      </AspectRatio>
      <Box>
        <Stack direction="row" divider={<StackDivider />}>
          <Text color="GrayText">{bookmark.domain}</Text>
          <Text color="GrayText">{date}</Text>
        </Stack>
        <Heading as={Link} href={bookmark.link} size="md" mt="2" noOfLines={2} isExternal>
          {bookmark.title}
        </Heading>
        <Text noOfLines={2} color="GrayText" mt="2">
          {bookmark.excerpt}...
        </Text>
        <Stack direction="row" spacing="2" mt="4">
          {bookmark.tags.map((tag) => (
            <Badge key={tag} colorScheme="yellow" variant="outline" userSelect="none">
              #{tag}
            </Badge>
          ))}
        </Stack>
      </Box>
    </Grid>
  );
}

function Bookmarks({ bookmarks }) {
  return (
    <Stack spacing="16" divider={<StackDivider />}>
      {Object.keys(bookmarks).map((date) => {
        return (
          <Box key={date}>
            <Heading as="h4" color="GrayText" fontSize="md" fontWeight="medium" mb="8">
              {date}
            </Heading>
            <Stack spacing="8">
              {bookmarks[date].map((bookmark) => {
                return <BookmarkCard key={bookmark._id} bookmark={bookmark} />;
              })}
            </Stack>
          </Box>
        );
      })}
    </Stack>
  );
}

export default Bookmarks;
