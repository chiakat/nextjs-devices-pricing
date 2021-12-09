import * as React from 'react';
import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function HelpCard() {
  return (
    <Box sx={{
      backgroundColor: 'white',
      boxShadow: 3,
      borderRadius: 2,
      minWidth: 250,
      maxWidth: 500,
      p: 3,
    }}>
      <Typography sx={{ mb: 1.5 }}>
        We can help!
      </Typography>
      <Typography variant="body2" sx={{
        color: '#666',
        fontSize: 14,
        lineHeight: 1.5,
        mb: 3,
        mr: 1,
      }}>
        If you need additional devices or collaborators on your project,
        give us a call and we'll craft a plan together to fit your needs.
      </Typography>
      <Link href="https://alwaysai.co/" underline='hover' color='primary.dark'>
        Contact sales
      </Link>
    </Box>
  );
}
