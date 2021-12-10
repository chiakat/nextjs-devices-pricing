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

const externalSites = [
  {
    link: 'https://facebook.com/',
    icon: <FacebookIcon />,
  },
  {
    link: 'https://twitter.com/',
    icon: <TwitterIcon />,
  },
  {
    link: 'https://github.com/',
    icon: <GitHubIcon />,
  },
  {
    link: 'https://facebook.com/',
    icon: <FacebookIcon />,
  },
  {
    link: 'https://github.com/',
    icon: <GitHubIcon />,
  },
];

const footerLinks = [
  {
    header: 'Overview',
    subHeaders: [
      {
        label: 'Products',
        path: '/',
      },
      {
        label: 'Use Cases',
        path: '/',
      },
      {
        label: 'Pricing',
        path: '/pricing',
      },
      {
        label: 'Blog',
        path: '/',
      },
    ],
  },
  {
    header: 'Resources',
    subHeaders: [
      {
        label: 'Docs',
        path: '/',
      },
      {
        label: 'Model Catalog',
        path: '/',
      },
      {
        label: 'Dashboard',
        path: '/',
      },
      {
        label: 'Terms of Use',
        path: '/',
      },
    ],
  },
  {
    header: 'Company',
    subHeaders: [
      {
        label: 'About',
        path: 'https://alwaysai.co/',
      },
      {
        label: 'Careers',
        path: '/',
      },
      {
        label: 'Press',
        path: '/',
      },
      {
        label: 'Privacy',
        path: '/',
      },
    ],
  },
];

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
          {externalSites.map((site) => (
            <Box component="a" key={site.link} href={site.link} sx={iconStyle}>
              {site.icon}
            </Box>
          ))}
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
          {footerLinks.map((link) => (
            <Grid key={link.header} item xs={6} sm={4} md={2}>
              <Typography variant="h5" marked="left" color="white" gutterBottom>
                {link.header}
              </Typography>
              <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              {link.subHeaders.map((subHeader) => (
                <Box key={subHeader.label} component="li" sx={{ py: 0.5 }}>
                  <Link href={subHeader.path} underline='hover' sx={{ color: '#ffbebe' }}>
                    {subHeader.label}
                  </Link>
                </Box>
              ))}
              </Box>
            </Grid>
          ))}
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
