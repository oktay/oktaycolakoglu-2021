import { groupBy } from 'lodash';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';

import SEO from '@comp/seo';
import Layout from '@comp/layout';
import Hero from '@comp/hero';
import Tabs from '@comp/tabs';
import Contact from '@comp/contact';

import { getExperiences, getBookmarks, getRepos } from '@lib/data';

export default function Home({ experiences, repos, bookmarks }) {
  return (
    <div>
      <SEO />
      <Layout>
        <Hero />
        <Tabs experiences={experiences} repos={repos} bookmarks={bookmarks} />
        <Contact />
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
  const bookmarks = await getBookmarks();
  const bookmarksGrouped = groupBy(bookmarks, (item) => {
    return format(parseISO(item.created), 'd MMMM yyyy');
  });

  return {
    props: {
      experiences: sortedExperiences,
      repos,
      bookmarks: bookmarksGrouped,
    },
    revalidate: 600,
  };
}
