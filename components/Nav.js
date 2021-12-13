import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import {
  AppBar, Box, Toolbar, Typography, Button,
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
];

export default function Nav() {
  const { data: session } = useSession();

  const renderLogin = () => {
    if (!session) {
      return (
        <Button
          href={'/api/auth/signin'}
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          Log in
        </Button>
      );
    }
    return (
      <Button
        href={'/api/auth/signout'}
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
      >
        Log out
      </Button>
    );
  };

  return (
      <AppBar position="static" elevation={0} sx={{ background: 'none', color: 'grey', px: 5 }}>
        <Toolbar>
          <Box component="img"
            src="/images/aai-logo-black.svg"
            alt="alwaysAI Logo"
            width={120}
            height={40}
            sx={{
              minHeight: 50, flexGrow: 2, px: 3, py: 1,
            }}
          />
          <Box sx={{ flexGrow: 5 }} />
          {mainNav.map((item, i) => (
          <Typography key={i + item} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href={item.path}>
              {item.label}
            </Link>
          </Typography>
          ))}
          <Box sx={{ flexGrow: 3 }} />
          {rightNav.map((item, i) => (
          <Typography key={i + item} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href={item.path}>
              {item.label}
            </Link>
          </Typography>
          ))}
          {renderLogin()}
        </Toolbar>
      </AppBar>
  );
}
