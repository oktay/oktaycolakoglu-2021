import Head from 'next/head';

function SEO({ title }) {
  return (
    <Head>
      <title>{title || 'Oktay Çolakoğlu'}</title>
      <link rel="icon" href="/favicon.png" />
      <meta
        name="description"
        content="Frontend developer who lives in Istanbul, also Graphic Designer and UI Design enthusiast. Currently frontend team lead at Akinon"
      />
    </Head>
  );
}

export default SEO;
