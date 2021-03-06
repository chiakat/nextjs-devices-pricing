import { useState } from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';
import {
  Grid, ToggleButton, ToggleButtonGroup, Typography,
} from '@mui/material';
import Layout from '../components/Layout';
import OptionCards from '../components/pricing/OptionCards';
import HelpCard from '../components/pricing/HelpCard';

export default function Pricing() {
  const [view, setView] = useState('monthly');

  const handleChange = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

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
            <Typography variant="h4" sx={{ p: 3 }}>
              Your first five devices are always free.
            </Typography>
            <Button variant="outlined" sx={{
              borderSize: 1,
              borderColor: '#bfbfbf',
              color: '#666',
              px: 2.5,
              py: 1.5,
              mb: 3,
            }}>
              Sign up for free plan
            </Button>
          </Grid>
        </Grid>
        <Grid item sx={{ my: 2 }}>
          <div>
            <span>I want my plan to be billed &nbsp; &nbsp; &nbsp; </span>
            <ToggleButtonGroup
              color="primary"
              value={view}
              exclusive
              onChange={handleChange}
            >
              <ToggleButton value="monthly">Monthly</ToggleButton>
              <ToggleButton value="yearly">Yearly</ToggleButton>
            </ToggleButtonGroup>
          </div>
          <OptionCards view={view} />
          <Typography variant="body2" color="text.secondary">A device is defined as lorem ipsum dolor sit amet consectatuer adipsicing elit.</Typography>
        </Grid>
        <Grid item sx={{ my: 2 }}>
          <h2>Can&apos;t find a plan that works for you?</h2>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            spacing={2}
            sx={{ height: 225 }}
          >
            <Grid item sx={{ mt: 2 }}>
              <HelpCard />
            </Grid>
            <Grid item align="right">
              <Image src="/images/cartoon.png" alt="Cartoon" width={450} height={225}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
