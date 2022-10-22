import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

const theme = createTheme({
  palette: {
    ...colors,
    background: {
      primary: colors.green100,
      secondary: colors.white100,
      tHead: colors.gray800
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
      fontWeight: 'bold',
      color: colors.white100
    },
    h2: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: colors.white100
    },
    normal: {
      fontSize: '14px',
      color: colors.white100
    },
    normalGray: {
      fontSize: '14px',
      color: colors.gray900
    },
    normalGreen: {
      fontSize: '14px',
      color: colors.green100
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
          backgroundColor: colors.gray600,
          boxShadow: `rgb(0 0 0 / 70%) 0px 4px 10px`,
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
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: colors.black100
        }
      }
    }
  }
});

// const theme = {
//   colors
// };

export default theme;

7;
