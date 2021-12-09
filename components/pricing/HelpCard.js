import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function OptionCard() {
  return (
    <Card sx={{ minWidth: 100, maxWidth: 500 }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }}>
        We can help!
        </Typography>
        <Typography variant="body2">
          If you need additional devices or collaborators on your project, give us a call and we'll craft a plan together to fit your needs.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">Contact sales</Button>
      </CardActions>
    </Card>
  );
}
