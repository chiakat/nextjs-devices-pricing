import Link from 'next/link';
import {
  AppBar, Box, Toolbar, Typography, Button,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'white', color: 'grey', fontSize: '12px' }}>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/">
            <a>Home</a>
          </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/devices/view">
            <a>View Devices</a>
          </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/devices/add">
            <a>Add Device</a>
          </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/devices/edit">
            <a>Edit</a>
          </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/pricing">
            <a>Pricing</a>
          </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Models
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Docs
          </Typography>
          <Button color="inherit">Log In</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
