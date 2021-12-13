import { signIn, signOut, useSession } from 'next-auth/react';
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
];

export default function Nav() {
  const { data: session } = useSession();

  const renderLogin = () => {
    if (!session) {
      return (
        <Link
          href={'/api/auth/signin'}
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          Log in
        </Link>
      );
    }
    return (
      <Link
        href={'/api/auth/signout'}
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
      >
        Log out
      </Link>
    );
  };

  return (
      <AppBar position="static" elevation={0} sx={{ background: 'none', color: 'grey', px: 5 }}>
        <Toolbar>
          <Box component="img"
            src="/images/aai-logo-black.svg"
            alt="alwaysAI Logo"
            width={170}
            sx={{
              px: 3, py: 1,
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {renderLogin()}
          </Typography>
        </Toolbar>
      </AppBar>
  );
}
