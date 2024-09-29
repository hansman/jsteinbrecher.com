import About from './src/about';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import Slogan from './src/slogan';
import tree from './src/state'
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './src/theme';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import 'typeface-roboto';
import { root } from 'baobab-react/higher-order';

const PUBLIC_URL = '/codelove.site/';

import ReactGA from 'react-ga';

ReactGA.initialize('G-YGJX8W3YMC');
ReactGA.pageview(window.location.pathname + window.location.search);

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Home extends React.Component {
  render () {
    return null;
  }
}


class App extends React.Component {


  render() {

    const { classes } = this.props;

    return <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Slogan forceRerender={this.forceUpdate.bind(this)} />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </BrowserRouter>;

  }

}

const RootedApp = root(tree, withStyles(styles)(App));

let mountNode = document.getElementById('app');
ReactDOM.render(<RootedApp />, mountNode);
