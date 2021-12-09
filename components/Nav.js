import Link from 'next/link';
import {
  AppBar, Box, Toolbar, Typography,
} from '@mui/material';

const mainNav = [
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
  {
    label: 'Support',
    path: '/',
  },
];

const rightNav = [
  {
    label: 'Devices',
    path: '/devices/view',
  },
  {
    label: 'Models',
    path: '/',
  },
  {
    label: 'Docs',
    path: '/',
  },
  {
    label: 'Log In',
    path: '/',
  },
];

export default function Nav() {
  return (
      <AppBar position="static" elevation={0} sx={{ background: 'none', color: 'grey', px: 5 }}>
        <Toolbar>
          <Box component="img"
            src="/images/aai-logo-black.svg"
            alt="alwaysAI Logo"
            width={120}
            height={40}
            sx={{
              minHeight: 50, flexGrow: 3, px: 3, py: 1, mr: 8,
            }}
          />
          <Box sx={{ flexGrow: 1 }} />
          {mainNav.map((item, i) => (
          <Typography key={i} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href={item.path}>
              {item.label}
            </Link>
          </Typography>
          ))}
          <Box sx={{ flexGrow: 1 }} />
          {rightNav.map((item, i) => (
          <Typography key={i} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href={item.path}>
              {item.label}
            </Link>
          </Typography>
          ))}
        </Toolbar>
      </AppBar>
  );
}
