import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import Slogan from './src/slogan';
import Menu from './src/menu';
import tree from './src/state'
import {root} from 'baobab-react/higher-order';

class App extends React.Component {

  render() {
    return <div className='app'>
      <Slogan />
      <Menu />
    </div>;
  }


}

const RootedApp = root(tree, App);

let mountNode = document.getElementById('app');
ReactDOM.render(<RootedApp />, mountNode);
