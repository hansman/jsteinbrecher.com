import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

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
  status: {
    danger: orange,
  }
});

export default theme;
