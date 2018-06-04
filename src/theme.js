import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffff60',
      main: '#e5e222',
      dark: '#afb000',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#ad6389',
      main: '#7c365c',
      dark: '#4d0733',
      contrastText: '#000'
    }
  },
  typography: {
    fontFamily: [
      'Helvetica Neue',
      'Helvetica',
      'sans-serif'
    ].join(',')
  }
});

export default theme;
