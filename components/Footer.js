import * as React from 'react';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  Box, Grid, Link, Container,
} from '@mui/material';
import Typography from '../theme/typography';

const iconStyle = {
  width: 40,
  height: 40,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: 2,
  mr: 3,
  '&:hover': {
    bgcolor: 'secondary.light',
  },
};

function Logo() {
  return (
    <React.Fragment>
      <Image src="/images/aai-logo.svg" alt="alwaysAI Logo" width={200} height={75} />
      <Typography fontSize="sm" color="white">
        2019 All rights reserved.
      </Typography>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        spacing={2}
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
          <Grid item sx={{ width: 300 }} xs={6} sm={4} md={3}>
            <Logo />
          </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Typography variant="h6" marked="left" color="white" gutterBottom>
                Overview
              </Typography>
              <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' color='pink'>Products</Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' color='pink'>Use Cases</Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' color='pink'>Pricing</Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' color='pink'>Blog</Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Typography variant="h6" marked="left" color="white" gutterBottom>
                Resources
              </Typography>
              <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' color='pink'>Docs</Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' color='pink'>Model Catalog</Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' color='pink'>Dashboard</Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' color='pink'>Terms of Use</Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Typography variant="h6" marked="left" color="white" gutterBottom>
                Company
              </Typography>
              <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' color='pink'>About</Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' color='pink'>Careers</Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' color='pink'>Press</Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="https://alwaysai.co/" underline='hover' color='pink'>Privacy</Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Typography variant="h6" marked="left" color="white" gutterBottom>
                Contact
              </Typography>
              <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Typography color="pink">Support</Typography>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Typography color="pink">555-555-5555</Typography>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="mailto:support@alwaysai.co" underline='hover' color='pink'>support@alwaysai.co</Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Typography color="pink">720 Stevens Ave #270</Typography>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Typography color="pink">Solana Beach, Ca 92075</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
      </Container>
    </Typography>
  );
}
