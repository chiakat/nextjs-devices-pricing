import { Grid, Button } from '@mui/material';
import DeviceTable from '../../components/DeviceTable';
import Layout from '../../components/Layout';

export default function ViewAll({ devices }) {
  return (
    <Layout>
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
          <DeviceTable devices={devices} />
        )}
      </Grid>
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
