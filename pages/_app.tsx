import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material';


export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme ({
    typography: {
      fontFamily: [
        'Montserrat',
      ].join(','),
      h1: {
        fontSize: 48,
        fontWeight: 700,
      },
      h2: {
        fontSize: 36,
        fontWeight: 700,
      },
      body1: {
        fontSize: 18,
        fontWeight: 500,
      },
      button: {
        fontSize: 18,
        fontWeight: 700,
      },
      subtitle1: {
        fontSize: 24,
        fontWeight: 500,
      },
      subtitle2: {
        fontSize: 15,
        fontWeight: 500,
        color: '#FFFFFF',
        '@media (min-width:600px)': {
          fontSize: '24px',
          lineHeight: '1.2',
        },
      },
    },
    palette: {
      primary: {
        main: '#291507',
      },
    },
  });
  return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
}
