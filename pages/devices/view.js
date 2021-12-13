import Head from 'next/head';
import { useSession, getSession } from 'next-auth/react';
import { Grid, Button } from '@mui/material';
import DeviceTable from '../../components/DeviceTable';
import Layout from '../../components/Layout';
import AccessDenied from '../../components/AccessDenied';

export default function ViewAll({ devices }) {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  if (typeof window !== 'undefined' && loading) return null;

  // If no session exists, display access denied message
  if (!session) { return <Layout><AccessDenied/></Layout>; }

  return (
    <Layout>
       <Head>
        <title>Your Devices</title>
      </Head>
      <Grid container alignItems="center" sx={{ mx: 2, mb: 10 }}>
      <h2>Your Devices</h2>
      <Grid container item justifyContent="flex-end">
        <Button variant="contained" href="/devices/add" sx={{ mb: 3 }}>
          Add Device
        </Button>
      </Grid>
        {devices.length === 0 ? (
          <h2>No added devices</h2>
        ) : (
          <DeviceTable devices={devices} session={session}/>
        )}
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // get the current environment
  const dev = process.env.NODE_ENV !== 'production';
  const { DEV_URL, PROD_URL } = process.env;
  const res = await fetch(`${dev ? DEV_URL : PROD_URL}/api/devices`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      session: await getSession(context),
      devices: data,
    },
  };
}
