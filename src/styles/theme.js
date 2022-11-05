import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

const theme = createTheme({
  palette: {
    ...colors,
    background: {
      primary: colors.green100,
      secondary: colors.white100,
      tHead: colors.bluegray500,
      dashboard1: colors.dashboard1,
      dashboard2: colors.dashboard2
    },
    text: {
      primary: colors.gray900,
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
      fontSize: '28px',
      fontWeight: 'bold',
      color: colors.gray900
    },
    h2: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: colors.white100
    },
    normal: {
      fontSize: '14px',
      color: colors.gray900
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
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: colors.gray900,
          width: '15px',
          height: '15px'
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: colors.green100,
          width: '15px',
          height: '15px'
        }
      }
    },
    MuiButton: {
      large: {
        height: '50px'
      },
      styleOverrides: {
        root: {
          color: colors.green100,
          backgroundColor: colors.white100,
          border: `1px solid ${colors.bluegray500}`,
          borderRadius: '50px',
          textAlign: 'center',
          // boxShadow: 'rgb(100 116 139 / 15%) 0px 10px 15px',
          '&:hover': {
            backgroundColor: colors.white100
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '.Mui-disabled': {
            background: colors.bluegray150
          }
        }
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
