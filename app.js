import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import Slogan from './src/slogan';
import Menu from './src/menu';
import tree from './src/state'
import {root} from 'baobab-react/higher-order';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './src/theme';

class App extends React.Component {

  render() {
    return <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Slogan />
      <Menu />
    </MuiThemeProvider>;
  }

}

const RootedApp = root(tree, App);

let mountNode = document.getElementById('app');
ReactDOM.render(<RootedApp />, mountNode);
