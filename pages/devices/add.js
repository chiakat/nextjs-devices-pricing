import Head from 'next/head';
import Layout from '../../components/Layout';
import DeviceForm from '../../components/DeviceForm';

export default function AddDevice() {
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
