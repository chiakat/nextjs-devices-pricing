import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import Nav from '../components/nav';
import Devices from '../components/devices';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/Home.module.css';
// import { getSortedPostsData } from '../lib/posts'

// export async function getStaticProps() {
//   const allDevicesData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

export default function Home({ devices }) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Nav />

      <main>
        <div className={styles.container}>
          {devices.length === 0 ? (
            <h2>No added devices</h2>
          ) : (
            <ul>
              {devices.map((device, i) => (
                <Devices device={device} key={i} />
              ))}
            </ul>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  // get the current environment
  const dev = process.env.NODE_ENV !== 'production';
  const { DEV_URL, PROD_URL } = process.env;
  const res = await fetch(`${dev ? DEV_URL : PROD_URL}/api/devices`);
  const data = await res.json();

  return {
    props: {
      devices: data,
    },
  };
}
