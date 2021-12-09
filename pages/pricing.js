import Button from '@mui/material/Button';
import Image from 'next/image';
import {
  Box, Grid, Link, Container,
} from '@mui/material';
import Layout from '../components/Layout';
import OptionCards from '../components/pricing/OptionCards';
import HelpCard from '../components/pricing/HelpCard';
import Typography from '../theme/typography';

export default function Pricing() {
  return (
    <Layout>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        spacing={2}
        sx={{ my: 8, display: 'flex', width: '100%' }}
        >
        <Grid container justifyContent="center" item sx={{ my: 2 }} xs={12} sm={6} md={3}>
          <Grid item align="center">
            <h1>Your first five devices are always free.</h1>
            <Button>Sign up for free plan</Button>
          </Grid>
        </Grid>
        <Grid item sx={{ my: 2 }}>
          <div>
            <span>I want my plan to be billed &nbsp; &nbsp; &nbsp; </span>
            <Button variant="outlined">Monthly</Button>
            <Button variant="outlined">Yearly</Button>
          </div>
          <OptionCards />
          <Typography variant="body2" color="text.secondary" sx={{ my: 4 }}>A device is defined as lorem ipsum dolor sit amet consectatuer adipsicing elit.</Typography>
        </Grid>
        <Grid item sx={{ my: 2 }}>
          <h2>Can't find a plan that works for you?</h2>
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            spacing={2}
            sx={{ height: 200 }}
          >
            <Grid item>
              <HelpCard />
            </Grid>
            <Grid item>
              <Image src="/images/cartoon.png" alt="Cartoon" width={400} height={200}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
