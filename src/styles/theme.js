import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

const theme = createTheme({
  palette: {
    colors: {
      blue400: '#3366FF'
    },
    background: {
      primary: '#fff',
      secondary: colors.black100,
      tHead: colors.black100
    },
    text: {
      primary: 'rgb(18, 24, 40)',
      secondary: 'white',
      tHead: 'white'
    },
    border: {
      primary: colors.gray900
    }
  },
  typography: {
    fontFamily: [
      'roboto',
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
    },
    h2: {
      fontSize: '24px',
      fontWeight: 'bold'
    },
    normal: {
      fontSize: '14px'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {}
    },
    MuiButton: {
      large: {
        height: '50px'
      },
      styleOverrides: {
        root: {
          color: 'white',
          backgroundColor: colors.gray900,
          textAlign: 'center',
          '&:hover': {
            backgroundColor: colors.gray800
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          // border: '1px solid red'
        })
      }
    }
  }
});

// const theme = {
//   colors
// };

export default theme;
