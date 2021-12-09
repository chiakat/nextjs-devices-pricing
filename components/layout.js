import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Nav from './Nav';
import Footer from './Footer';

const name = 'User';
export const siteTitle = 'alwaysAI Manage Devices';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="view and manage your devices"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
