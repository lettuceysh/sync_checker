import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    colors: {
      blue400: '#3366FF'
    },
    background: {
      default: '#fff'
    },
    text: {
      primary: 'rgb(18, 24, 40)',
      secondary: 'rgb(101, 116, 139)',
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    button: {
      default: 'red'
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
        root: ({ ownerState }) => ({
          // ...(ownerState.variant === 'contained' &&
          //   ownerState.color === 'primary' && {
          //     backgroundColor: 'red',
          //     color: '#fff'
          //   }),
          color: 'white'
        })
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
