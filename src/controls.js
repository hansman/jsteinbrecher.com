import React from 'react';
import Actions from './actions'
import { IconButton, Button} from '@material-ui/core';
import { PlayArrow, BorderClear } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { FaInstagram } from 'react-icons/fa';

import '../index.scss'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  root: {
    position: 'absolute',
    bottom: 40,
    right: 40
  }
});

class Controls extends React.Component {

  constructor(props) {
    super(props);
    this.onResolution = this.onResolution.bind(this);
  }

  onResolution() {
    const {resolution} = this.props;
    Actions.setState(['slogan', 'resolution'], resolution == 2 ? 3 : 2);
  }

  render() {
    const { classes } = this.props;

    return <div className={classes.root}>
      <IconButton
        aria-label="Instagram"
        onClick={() => window.open('https://www.instagram.com/jsteinbrechr', '_blank')}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          opacity: 0.9,
          padding: '10px',
        }}
      >
        <FaInstagram size={24} style={{ color: 'white' }} /> {/* Instagram icon */}
      </IconButton>
    </div>
  }

}

export default withStyles(styles)(Controls);
