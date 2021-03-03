import { Container, Heading, Link, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "@comp/layout";
import Experiences from "@comp/experiences";
import Repos from "@comp/repos";
import { getExperiences } from "@lib/contentful";
import { getRepos } from "@lib/github";

export default function Home({ experiences, repos }) {
  return (
    <div>
      <Head>
        <title>Oktay Çolakoğlu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Container maxWidth="container.lg" mt="56">
          <Heading as="h1" fontWeight="medium">
            Hello I'm Oktay 🖐
          </Heading>
          <Heading as="p" fontWeight="regular" mt="4" color="GrayText">
            I'm currently frontend team lead at{" "}
            <Link href="https://akinon.com" target="_blank">
              Akinon
            </Link>
          </Heading>

          <Tabs variant="soft-rounded" mt="36" colorScheme="yellow">
            <TabList>
              <Tab>Experiences</Tab>
              <Tab>Repostories</Tab>
            </TabList>
            <TabPanels py="8">
              <TabPanel>
                <Experiences experiences={experiences} />
              </TabPanel>
              <TabPanel>
                <Repos repos={repos} />
              </TabPanel>
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
