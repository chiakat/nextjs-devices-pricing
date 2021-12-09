import * as React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  Box, Grid, Link, Container,
} from '@mui/material';
import Typography from '../theme/typography';

const iconStyle = {
  width: 30,
  height: 30,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: 2,
  mr: 2,
  '&:hover': {
    bgcolor: 'secondary.light',
  },
};

function Logo() {
  return (
    <React.Fragment>
      <Box component="img" src="/images/aai-logo-white.svg" alt="alwaysAI Logo" width={200} height={75} />
      <Typography fontSize="sm" sx={{ color: '#f7f9fa' }}>
        2019 All rights reserved.
      </Typography>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        spacing={1}
        sx={{ height: 100 }}
      >
        <Grid item sx={{ display: 'flex' }}>
          <Box component="a" href="https://facebook.com/" sx={iconStyle}>
            <FacebookIcon />
          </Box>
          <Box
            component="a"
            href="https://twitter.com/"
            sx={iconStyle}
          >
            <TwitterIcon />
          </Box>
          <Box
            component="a"
            href="https://github.com/"
            sx={iconStyle}
          >
            <GitHubIcon />
          </Box>
          <Box component="a" href="https://facebook.com/" sx={iconStyle}>
            <FacebookIcon />
          </Box>
          <Box
            component="a"
            href="https://github.com/"
            sx={iconStyle}
          >
            <GitHubIcon />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default function Footer() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'secondary.dark' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item sx={{ minWidth: 200, mr: 1 }} xs={6} sm={4} md={3}>
            <Logo />
          </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Typography variant="h5" marked="left" color="white" gutterBottom>
                Overview
              </Typography>
              <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' sx={{ color: '#ffbebe' }}>Products</Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' sx={{ color: '#ffbebe' }}>Use Cases</Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' sx={{ color: '#ffbebe' }}>Pricing</Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' sx={{ color: '#ffbebe' }}>Blog</Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Typography variant="h5" marked="left" color="white" gutterBottom>
                Resources
              </Typography>
              <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' sx={{ color: '#ffbebe' }}>Docs</Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' sx={{ color: '#ffbebe' }}>Model Catalog</Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' sx={{ color: '#ffbebe' }}>Dashboard</Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' sx={{ color: '#ffbebe' }}>Terms of Use</Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Typography variant="h5" marked="left" color="white" gutterBottom>
                Company
              </Typography>
              <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' sx={{ color: '#ffbebe' }}>About</Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' sx={{ color: '#ffbebe' }}>Careers</Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' sx={{ color: '#ffbebe' }}>Press</Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' sx={{ color: '#ffbebe' }}>Privacy</Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Typography variant="h5" marked="left" color="white" gutterBottom>
                Contact
              </Typography>
              <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Typography color="#ffbebe">Support</Typography>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Typography color="#ffbebe">555-555-5555</Typography>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="mailto:support@alwaysai.co" underline='hover' sx={{ color: '#ffbebe' }}>support@alwaysai.co</Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Typography color="#ffbebe">720 Stevens Ave #270</Typography>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Typography color="#ffbebe">Solana Beach, Ca 92075</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
      </Container>
    </Typography>
  );
}
