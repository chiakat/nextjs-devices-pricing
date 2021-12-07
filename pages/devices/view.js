import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Devices from '../../components/devices';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import styles from '../../styles/home.module.css';

export default function ViewAll({ devices }) {
  return (
    <Layout>
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
    </Layout>
  );
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
