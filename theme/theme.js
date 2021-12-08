import { createTheme } from '@mui/material/styles';
import { green, grey, red } from '@mui/material/colors';
import HeeboBold from '../public/fonts/Heebo/Heebo-Bold.ttf';
import Heebo from '../public/fonts/Heebo/Heebo-Regular.ttf';
import HeeboMedium from '../public/fonts/Heebo/Heebo-Medium.ttf';
import KarlaBold from '../public/fonts/Karla/Karla-Bold.ttf';
import Karla from '../public/fonts/Karla/Karla-Regular.ttf';
import KarlaMedium from '../public/fonts/Karla/Karla-Medium.ttf';

const rawTheme = createTheme({
  palette: {
    primary: {
      light: '#F2303A',
      main: '#C92C56',
      dark: '#740C32',
    },
    secondary: {
      light: '#fff5f8',
      main: '#ff3366',
      dark: '#4a051e',
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: "'Heebo', 'Karla', 'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: "'Heebo', 'Karla', sans-serif",
  textTransform: 'uppercase',
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
  },
};

export default theme;