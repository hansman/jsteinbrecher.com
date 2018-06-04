import About from './src/about';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import Slogan from './src/slogan';
import Menu from './src/menu';
import tree from './src/state'
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Gallery from './src/gallery';
import { root } from 'baobab-react/higher-order';
import theme from './src/theme';
import ThoughtsOnProgression from './src/thoughtsOnProgression';
import 'typeface-roboto';


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


class App extends React.Component {


  render() {

    const { classes } = this.props;

    return <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Menu />
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route path='/thoughtsOnProgression' component={ThoughtsOnProgression}/>
              <Route path='/gallery' component={About}/>
            </Switch>
          </Grid>
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
