import Head from 'next/head';
import Link from 'next/link';
import Devices from '../components/devices';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/home.module.css';
import { userService } from 'services';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="p-4">
            <div className="container">
                <h1>Hi {userService.userValue?.firstName}!</h1>
                <p>You&apos;re logged in with Next.js & JWT!!</p>
                <p><Link href="/users">Manage Users</Link></p>
            </div>
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
