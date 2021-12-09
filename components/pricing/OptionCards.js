import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import {
  Paper, Typography, Grid, Container, List, ListItem, ListItemText, ListItemIcon,
} from '@mui/material';

const options = {
  free: {
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
  },
  developer: {
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
  },
  team: {
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
  },
  enterprise: {
    name: 'Enterprise support',
    regMonthPrice: '549',
    regYearPrice: '$7,188/yr',
    saveMonthPrice: '499',
    saveYearPrice: '$5,988/yr',
  },
};

export default function OptionCards() {
  return (
    <Container sx={{ my: 8, display: 'flex' }}>
      <Grid container spacing={5} direction="row">
        <Grid container item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ minWidth: 250 }}>
            <Grid item sx={{ height: 120, m: 3 }} >
            <Typography color="primary.dark" align="center" sx={{ p: 1 }}>
                {options.free.name}
              </Typography>
              <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                <Grid item sx={{ mr: 3 }}> $ </Grid>
                <Typography variant="h3" color="primary.main">
                  {options.free.regMonthPrice}
                </Typography>
                <Grid item sx={{ ml: 3 }}> /mo </Grid>
              </Grid>
              <Typography variant="body1" align="center" sx={{ p: 1, mb: 3 }}>
                {options.free.regYearPrice}
              </Typography>
            </Grid>
            <Grid item sx={{
              height: 220, borderTop: 1, borderColor: '#cfd4da', py: 2, px: 1,
            }} >
              <List disablePadding>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon style={{ color: 'red' }} />
                  </ListItemIcon>
                  <ListItemText primary={options.free.features[0]} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon style={{ color: 'red' }} />
                  </ListItemIcon>
                  <ListItemText primary={options.free.features[1]} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon style={{ color: 'red' }} />
                  </ListItemIcon>
                  <ListItemText primary={options.free.features[2]} />
                </ListItem>
              </List>
            </Grid>
            <Grid item sx={{
              height: 150, borderTop: 1, borderColor: '#cfd4da', py: 2, px: 1,
            }} >
              <List disablePadding>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon style={{ color: 'red' }} />
                  </ListItemIcon>
                  <ListItemText primary={options.free.supportType}
                    secondary={options.free.supportDesc} />
                </ListItem>
              </List>
            </Grid>
          </Paper>
        </Grid>

        <Grid container item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ minWidth: 250 }}>
            <Grid item sx={{ height: 120, m: 3 }} >
              <Typography color="primary.dark" align="center" sx={{ p: 1 }}>
                {options.developer.name}
              </Typography>
              <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                <Grid item sx={{ mr: 3 }}> $ </Grid>
                <Typography variant="h3" color="primary.main">
                  {options.developer.regMonthPrice}
                </Typography>
                <Grid item sx={{ ml: 3 }}> /mo </Grid>
              </Grid>
              <Typography variant="body1" align="center" sx={{ p: 1, mb: 3 }}>
                {options.developer.regYearPrice}
              </Typography>
            </Grid>
            <Grid item sx={{
              height: 220, borderTop: 1, borderColor: '#cfd4da', py: 2, px: 1,
            }} >
              <List disablePadding>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon style={{ color: 'red' }} />
                  </ListItemIcon>
                  <ListItemText primary={options.developer.features[0]} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon style={{ color: 'red' }} />
                  </ListItemIcon>
                  <ListItemText primary={options.developer.features[1]} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon style={{ color: 'red' }} />
                  </ListItemIcon>
                  <ListItemText primary={options.developer.features[2]} />
                </ListItem>
              </List>
            </Grid>
            <Grid item sx={{
              height: 150, borderTop: 1, borderColor: '#cfd4da', py: 2, px: 1,
            }} >
              <List disablePadding>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon style={{ color: 'red' }} />
                  </ListItemIcon>
                  <ListItemText primary={options.developer.supportType}
                    secondary={options.developer.supportDesc} />
                </ListItem>
              </List>
            </Grid>
          </Paper>
        </Grid>

        <Grid container item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ minWidth: 250 }}>
            <Grid item sx={{ height: 120, m: 3 }} >
              <Typography color="primary.dark" align="center" sx={{ p: 1 }}>
                {options.team.name}
              </Typography>
              <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                <Grid item sx={{ mr: 3 }}> $ </Grid>
                <Typography variant="h3" color="primary.main">
                  {options.team.regMonthPrice}
                </Typography>
                <Grid item sx={{ ml: 3 }}> /mo </Grid>
              </Grid>
              <Typography variant="body1" align="center" sx={{ p: 1, mb: 3 }}>
                {options.team.regYearPrice}
              </Typography>
            </Grid>
            <Grid item sx={{
              height: 220, borderTop: 1, borderColor: '#cfd4da', py: 2, px: 1,
            }} >
              <List disablePadding>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon style={{ color: 'red' }} />
                  </ListItemIcon>
                  <ListItemText primary={options.team.features[0]} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon style={{ color: 'red' }} />
                  </ListItemIcon>
                  <ListItemText primary={options.team.features[1]} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon style={{ color: 'red' }} />
                  </ListItemIcon>
                  <ListItemText primary={options.team.features[2]} />
                </ListItem>
              </List>
            </Grid>
            <Grid item sx={{
              height: 150, borderTop: 1, borderColor: '#cfd4da', py: 2, px: 1, backgroundColor: 'secondary.light',
            }} >
              <List disablePadding>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon style={{ color: 'red' }} />
                    </ListItemIcon>
                    <ListItemText primary={options.team.supportType}
                      secondary={options.team.supportDesc} />
                  </ListItem>
                </List>
            </Grid>
          </Paper>
        </Grid>

        <Grid container item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ minWidth: 250 }}>
            <Grid item sx={{ height: 120, m: 3 }} >
              <Typography color="primary.dark" align="center" sx={{ p: 1 }}>
                {options.enterprise.name}
              </Typography>
              <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                <Grid item sx={{ mr: 3 }}> $ </Grid>
                <Typography variant="h3" color="primary.main">
                  {options.enterprise.regMonthPrice}
                </Typography>
                <Grid item sx={{ ml: 3 }}> /mo </Grid>
              </Grid>
              <Typography variant="body1" align="center" sx={{ p: 1, mb: 3 }}>
                {options.enterprise.regYearPrice}
              </Typography>
            </Grid>
            <Grid item sx={{
              borderTop: 1, borderColor: '#cfd4da', backgroundColor: 'primary.dark', p: 2, height: 370,
            }} >
              <List disablePadding>
                <Typography color='white' sx={{ lineHeight: 3 }}>
                  <b>Each project is unique</b>
                </Typography>
                <Typography color='white' sx={{ lineHeight: 1.25 }}>
                  Let's discuss your use case and craft a plan together and talk about:<br /><br />
                </Typography>
                <Typography color='white' sx={{ lineHeight: 2 }}>
                  <b>Dedicated account management</b><br />
                  <b>24/7 support</b><br />
                  <b>On-prem solutions</b><br />
                  <b>Onboarding and training</b><br />
                  <b>Quarterly product reviews</b>
                </Typography>
              </List>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
