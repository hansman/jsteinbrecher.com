import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlayCircle from '@fortawesome/fontawesome-free-solid/faPlayCircle';
import faGem from '@fortawesome/fontawesome-free-solid/faGem';
import Actions from './actions'
import { yellowColors } from './colors';


const highlightColor = yellowColors[1].toCSS();

class Controls extends React.Component {

  constructor(props) {
    super(props);
    this.onResolution = this.onResolution.bind(this);
    this.onAnimate = this.onAnimate.bind(this);
  }

  onResolution() {
    const {resolution} = this.props;
    Actions.setState(['slogan', 'resolution'], resolution == 2 ? 3 : 2);
  }

  onAnimate() {
    const {animate} = this.props;
    Actions.setState(['slogan', 'animate'], !animate);
  }

  render() {
    return <div className='controls'>
      <FontAwesomeIcon
        icon={faPlayCircle}
        color={this.props.animate ? highlightColor : ''}
        size='2x'
        onClick={this.onAnimate}
      />
      <FontAwesomeIcon
        icon={faGem}
        color={this.props.resolution == 2 ?  highlightColor : ''}
        onClick={this.onResolution}
        size='2x'
      />
    </div>
  }

}

export default Controls;
