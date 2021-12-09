import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import {
  Box, Typography, Grid, Container, List, ListItem, ListItemText, ListItemIcon,
} from '@mui/material';

const options = [
  {
    name: 'Free',
    regMonthPrice: '0',
    regYearPrice: '',
    saveMonthPrice: '0',
    saveYearPrice: '',
    features: [
      'Single user only',
      'Up to 3 devices',
      'Public models only',
    ],
    supportType: 'Community support',
    supportDesc: 'Access to our community of developers for support issues.',
    cardColor: 'white',
  },
  {
    name: 'Developer',
    regMonthPrice: '99',
    regYearPrice: '$1,188/yr',
    saveMonthPrice: '89',
    saveYearPrice: '$1,068/yr',
    features: [
      'Single user only',
      'Up to 10 devices',
      'Public & private models',
    ],
    supportType: 'Basic support',
    supportDesc: 'Lorem ipsum dolor sit arnet consectetuer adipsising elit.',
    cardColor: 'white',
  },
  {
    name: 'Team',
    regMonthPrice: '299',
    regYearPrice: '$3,788/yr',
    saveMonthPrice: '269',
    saveYearPrice: '$3,228/yr',
    features: [
      'Up to 3 collaborators',
      'Up to 50 devices',
      'Public & private models',
    ],
    supportType: 'Premium support',
    supportDesc: 'Access to private support with alwaysAI engineers.',
    cardColor: 'secondary.light',
  },
  {
    name: 'Enterprise',
    regMonthPrice: '549',
    regYearPrice: '$7,188/yr',
    saveMonthPrice: '499',
    saveYearPrice: '$5,988/yr',
    features: [
      'Dedicated account management',
      '24/7 support',
      'On-prem solutions',
      'Onboarding and training',
      'Quarterly product reviews',
    ],
    tagline: 'Each project is unique',
    subheader: 'Let\'s discuss your use case and craft a plan together and talk about:',
  },
];

function cardHeader(option, view) {
  return (
    <Grid item sx={{ height: 140, m: 3 }} >
      <Typography color="primary.dark" align="center" sx={{
        p: 1, mb: 2, fontSize: 18, letterSpacing: 2,
      }}>
        {option.name}
      </Typography>
      <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
        <Grid item sx={{ mr: 3 }}> $ </Grid>
        <Typography variant="h3" color="primary.main">
          {view === 'monthly' ? option.regMonthPrice : option.saveMonthPrice}
        </Typography>
        <Grid item sx={{ ml: 3 }}> /mo </Grid>
      </Grid>
      <Typography variant="body1" align="center" sx={{ p: 1, mb: 3, mt: 0.8 }}>
        {view === 'monthly' ? option.regYearPrice : option.saveYearPrice}
      </Typography>
    </Grid>
  );
}

function cardContent(option) {
  if (option.name === 'Enterprise') {
    return (
      <Grid item sx={{
        borderTop: 1,
        borderColor: '#cfd4da',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: 'primary.dark',
        p: 3,
        height: 380,
      }} >
        <List disablePadding>
          <Typography color='white' sx={{ lineHeight: 3, fontWeight: 'bold', pb: 1 }}>
            {option.tagline}
          </Typography>
          <Typography color='white' sx={{ lineHeight: 1.25, pb: 3 }}>
            {option.subheader}
          </Typography>
          <ul>
            {option.features.map((feature) => (
              <Typography component="li"
                key={feature}
                color='white'
                sx={{ lineHeight: 2, fontWeight: 'bold' }}
                >
                {feature}
              </Typography>
            ))}
          </ul>
        </List>
      </Grid>
    );
  }
  return (
    <Grid container>
      <Grid item sx={{
        height: 200,
        borderTop: 1,
        borderColor: '#cfd4da',
        py: 3,
        px: 1,
      }}>
        <List disablePadding>
          {option.features.map((feature) => (
            <ListItem key={feature}>
              <ListItemIcon>
                <CheckIcon style={{ color: '#C92C56' }} />
              </ListItemIcon>
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item sx={{
        height: 180,
        borderTop: 1,
        borderColor: '#cfd4da',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        py: 3,
        px: 1,
        backgroundColor: option.cardColor,
      }}>
        <List disablePadding>
          <ListItem>
            <ListItemIcon>
              <CheckIcon style={{ color: '#C92C56' }} />
            </ListItemIcon>
            <ListItemText primary={option.supportType} />
          </ListItem>
          <Typography sx={{
            color: '#666',
            pl: 9,
            pr: 3,
            fontSize: 15,
            lineHeight: 1.5,
          }}>
           {option.supportDesc}
          </Typography>
        </List>
      </Grid>
    </Grid>
  );
}

export default function OptionCards({ view }) {
  return (
    <Container disableGutters sx={{
      mx: 1, mt: 7, mb: 5, display: 'flex',
    }}>
      <Grid container spacing={3} alignItems="flex-end">
        {options.map((option) => (
          <Grid container item key={option.name} xs={12} sm={6} md={3}>
            <Box sx={{
              backgroundColor: 'white',
              boxShadow: 3,
              borderRadius: 2,
              minWidth: 250,
            }}>
              {cardHeader(option, view)}
              {cardContent(option)}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
