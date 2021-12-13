import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import CircularProgress from '@mui/material/CircularProgress';
import Layout from '../../components/Layout';
import DeviceForm from '../../components/DeviceForm';
import AccessDenied from '../../components/AccessDenied';

export default function EditDevice({ id }) {
  const [device, setDevice] = useState(null);

  const getDeviceInfo = async () => {
    const response = await fetch(
      `/api/devices?id=${id}`,
      {
        method: 'GET',
      },
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    // fetch device and set default form values if in edit mode
    getDeviceInfo(id)
      .then((result) => setDevice(result[0]))
      .catch(console.log('No Device Info Found'));
  }, []);

  const { data: session, status } = useSession();
  const loading = status === 'loading';

  if (typeof window !== 'undefined' && loading) return null;

  // If no session exists, display access denied message
  if (!session) { return <Layout><AccessDenied/></Layout>; }

  return (
    <Layout>
      <Head>
        <title>Edit Device</title>
      </Head>
      <h2>Edit Device</h2>
      {device ? <DeviceForm device={device} /> : <CircularProgress />}
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  return {
    props: { id: query.id },
  };
}
