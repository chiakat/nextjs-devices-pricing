import { Container } from '@mui/material';
import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

export const siteTitle = 'alwaysAI';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="view and manage your devices"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Nav />
      <main>
        <Container sx= {{ width: '100%', px: 3 }}> {children} </Container>
      </main>
      <Footer />
    </div>
  );
}
