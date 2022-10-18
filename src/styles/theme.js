import { createTheme } from '@mui/material/styles';
// import { colors } from './colors';

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%'
        },
        body: {
          background: 'red'
        }
      }
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    h1: {
      fontSize: '30px',
      fontWeight: 'bold'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      html  {

      }
      `
    }
  }
});

// const theme = {
//   colors
// };

export default theme;
