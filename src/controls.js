import React from 'react';
import Actions from './actions'
import { IconButton, Button} from '@material-ui/core';
import { PlayArrow, BorderClear } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

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
    const { classes } = this.props;

    return <div className='controls'>
      <Button variant='fab' color='primary' size='medium' onClick={this.onAnimate} className={classes.button}>
        <PlayArrow />
      </Button>
      <Button variant='fab' color='primary' size='medium' onClick={this.onResolution} className={classes.button}>
        <BorderClear />
      </Button>
    </div>
  }

}

export default withStyles(styles)(Controls);
