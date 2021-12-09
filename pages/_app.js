import '../styles/globals.css';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyles, CssBaseline } from '@mui/material';
import '../theme/fonts.css';
import theme from '../theme/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
