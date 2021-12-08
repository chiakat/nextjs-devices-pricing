import DeviceTable from '../../components/DeviceTable';
import Layout from '../../components/Layout';
import styles from '../../styles/home.module.css';

export default function ViewAll({ devices }) {
  return (
    <Layout>
      <div className={styles.container}>
        {devices.length === 0 ? (
          <h2>No added devices</h2>
        ) : (
          <DeviceTable devices={devices} />
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

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      devices: data,
    },
  };
}
