import { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Text, Container } from '@chakra-ui/react';
import { BiStar, BiGitBranch, BiBookmark } from 'react-icons/bi';

import Experiences from '@comp/experiences';
import Repos from '@comp/repos';
import Bookmarks from '@comp/bookmarks';

function HomeTabs({ experiences, repos, bookmarks }) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Container maxWidth="container.lg" mt="36">
      <Tabs variant="soft-rounded" colorScheme="yellow" onChange={(index) => setTabIndex(index)}>
        <TabList>
          <Tab fontWeight="medium">
            <BiStar />{' '}
            <Text ml="2" display={{ base: tabIndex === 0 ? 'block' : 'none', md: 'block' }}>
              Experiences
            </Text>
          </Tab>
          <Tab fontWeight="medium">
            <BiGitBranch />{' '}
            <Text ml="2" display={{ base: tabIndex === 1 ? 'block' : 'none', md: 'block' }}>
              Repositories
            </Text>
          </Tab>
          <Tab fontWeight="medium">
            <BiBookmark />{' '}
            <Text ml="2" display={{ base: tabIndex === 2 ? 'block' : 'none', md: 'block' }}>
              Bookmarks
            </Text>
          </Tab>
        </TabList>
        <TabPanels py="8">
          <TabPanel padding={{ base: '0', md: '1' }}>
            <Experiences experiences={experiences} />
          </TabPanel>
          <TabPanel padding={{ base: '0', md: '1' }}>
            <Repos repos={repos} />
          </TabPanel>
          <TabPanel padding={{ base: '0', md: '1' }}>
            <Bookmarks bookmarks={bookmarks} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}

export default HomeTabs;
