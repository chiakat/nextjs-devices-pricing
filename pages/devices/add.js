import Head from 'next/head';
import { useSession } from 'next-auth/react';
import Layout from '../../components/Layout';
import DeviceForm from '../../components/DeviceForm';
import AccessDenied from '../../components/AccessDenied';

export default function AddDevice() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  if (typeof window !== 'undefined' && loading) return null;

  // If no session exists, display access denied message
  if (!session) { return <Layout><AccessDenied/></Layout>; }

  return (
    <Layout>
      <Head>
        <title>Add Device</title>
      </Head>
      <h2>Add Device</h2>
      <DeviceForm />
    </Layout>
  );
}
