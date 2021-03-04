import {
  Container,
  Heading,
  Link,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorMode,
} from '@chakra-ui/react';
import { BiStar, BiBookmark, BiGitBranch } from 'react-icons/bi';
import Head from 'next/head';
import Layout from '@comp/layout';
import Experiences from '@comp/experiences';
import Repos from '@comp/repos';
import { getExperiences } from '@lib/contentful';
import { getRepos } from '@lib/github';

export default function Home({ experiences, repos }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Head>
        <title>Oktay Çolakoğlu</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Frontend developer who lives in Istanbul, Graphic Designer and UI Design enthusiast. Currently frontend team lead at Akinon"
        />
      </Head>

      <Layout>
        <Container maxWidth="container.lg" mt="56">
          <Heading as="h1">Hello I'm Oktay 🖐</Heading>
          <Heading as="p" maxWidth="container.md" mt="4" color="GrayText">
            Frontend developer who lives in Istanbul, Graphic Designer and UI Design enthusiast.
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

          <Tabs variant="soft-rounded" mt="36" colorScheme="yellow">
            <TabList>
              <Tab fontWeight="medium">
                <BiStar /> <Text ml="2">Experiences</Text>
              </Tab>
              <Tab fontWeight="medium">
                <BiGitBranch /> <Text ml="2">Repostroies</Text>
              </Tab>
              <Tab fontWeight="medium">
                <BiBookmark /> <Text ml="2">Bookmarks</Text>
              </Tab>
            </TabList>
            <TabPanels py="8">
              <TabPanel>
                <Experiences experiences={experiences} />
              </TabPanel>
              <TabPanel>
                <Repos repos={repos} />
              </TabPanel>
              <TabPanel>Bookmarks</TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const experiences = await getExperiences();
  const sortedExperiences = experiences.sort(function compare(a, b) {
    var dateA = new Date(a.fields.startDate);
    var dateB = new Date(b.fields.startDate);
    return dateB - dateA;
  });
  const repos = await getRepos();

  return {
    props: {
      experiences: sortedExperiences,
      repos,
    },
    revalidate: 600,
  };
}
