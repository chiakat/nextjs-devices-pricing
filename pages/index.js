import Head from 'next/head';

import Nav from '../components/Nav';
import UpdateDevice from '../components/UpdateDevice';
import styles from '../styles/Home.module.css';

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
                <UpdateDevice device={device} key={i} />
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
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  // get the current environment
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;

  // request devices from api
  let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/devices`);
  // extract the data
  let data = await response.json();

  return {
    props: {
      // devices: ['device']
      devices: data['device'],
    },
  };
}