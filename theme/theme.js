import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const rawTheme = createTheme({
  palette: {
    primary: {
      light: '#F2303A',
      main: '#C92C56',
      dark: '#740C32',
    },
    secondary: {
      light: '#ffe5e5',
      main: '#ff3366',
      dark: '#4a051e',
    },
  },
  typography: {
    fontFamily: "'DM Sans','Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: grey[400],
          color: grey[700],
          backgroundColor: 'white',
          '&:hover':
            {
              backgroundColor: 'primary.light',
              borderColor: 'primary',
              color: '#C92C56',
            },
        },
      },
    },
    // MuiToggleButtonGroup: {
    //   styleOverrides: {
    //     backgroundColor: 'primary.dark',
    //     borderColor: 'primary',
    //     color: '#primary',
    //     '&.Mui-disabled': {
    //       border: 0,
    //     },
    //   },
    // },
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: "'DM Sans', sans-serif",
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: '#f7f9fa',
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
      fontSize: 30,
      color: 'black',
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 18,
      fontColor: 'white',
      fontWeight: rawTheme.typography.fontWeightMedium,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 14,
      fontWeight: rawTheme.typography.fontWeightLight,
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
