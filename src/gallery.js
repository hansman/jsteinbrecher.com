import React from 'react';
import imageURL from '../assets/portrait1.jpg';
import { Grid, Modal, SimpleModalWrapped, Typography } from '@material-ui/core';
import Image from 'material-ui-image';
import { withStyles } from '@material-ui/core/styles';
import { PlayArrow, BorderClear } from '@material-ui/icons';
import { TwitterIcon, InstagramIcon, GithubCircleIcon, EmailIcon, LinkedinIcon } from 'mdi-react';
import { Link } from 'react-router-dom';
import theme from './theme';

const styles = theme => ({
  root: {
    color: 'white',
    'background-color': 'rgba(0,0,0,0.8)',
    padding: theme.spacing.unit * 15
  },
  font: {
    color: 'white'
  },
  img: {
    'background-color': 'rgba(0,0,0,0.8)',
    'object-fit': 'cover'
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 4,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  }
});

class Gallery extends React.Component {

  constructor (props) {
    super(props);
    this.state = {modal: false};
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render () {
    const size = 18;
    const color = '#fff';

    const { classes } = this.props;

    return <Grid container justify='center' spacing={24} className={classes.root}>
      <Grid item xs={10}>
        <Typography gutterBottom className={classes.font}>
          {`
            I am an engineer and artist from a remote town in the Alps, located on the German - Austrian border. Through algorithms, protocols, sound and motion I demystify the systems that structure the world we live in. My practice makes the layers of invisible analog and digital transformations that surround us accessible and tangible. I wonder how new spontaneity can grow out of those binding constructs? Born in 1985, my work is based on my history as a human growing up in a world that got more and more replaced by an engineered and designed one. I work in San Francisco, Munich and New York City.
          `}
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Image
          className={classes.img}
            src={imageURL}
        />
      </Grid>
      <Grid item xs={10}>
        <Typography gutterBottom className={classes.font}>
          {`
            I am an engineer and artist from a remote town in the Alps, located on the German - Austrian border. Through algorithms, protocols, sound and motion I demystify the systems that structure the world we live in. My practice makes the layers of invisible analog and digital transformations that surround us accessible and tangible. I wonder how new spontaneity can grow out of those binding constructs? Born in 1985, my work is based on my history as a human growing up in a world that got more and more replaced by an engineered and designed one. I work in San Francisco, Munich and New York City.
          `}
        </Typography>
      </Grid>

    </Grid>;
  }

}


export default withStyles(styles)(Gallery);
