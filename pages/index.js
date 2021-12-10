import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <h1>Welcome Home</h1>
      </Head>
    </Layout>
  );
}
