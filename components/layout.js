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
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{name} Devices</h1>
          </>
        ) : (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name} Devices</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
