import React from 'react';
import painting1 from '../assets/painting1.jpg';
import painting2 from '../assets/painting2.jpg';
import puppet1 from '../assets/puppet1.jpg';
import puppet2 from '../assets/puppet2.jpg';
import puppet3 from '../assets/puppet3.jpg';
import molnarSquares from '../assets/molnarSquares.gif';
import whitneyCircles from '../assets/whitneyCircles.gif';
import walkingMan from '../assets/walkingMan.gif';
import redDots from '../assets/redDots.gif';
import loveCode from '../assets/loveCode.gif';
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

class More extends React.Component {

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
    const xs = 8;

    const { classes } = this.props;

    return <Grid container justify='center' spacing={40} className={classes.root}>
      <Grid item xs={xs} spacing={24}>
        <Image
          className={classes.img}
          src={puppet1}
          color='rgba(0,0,0,0.8)'
          aspectRatio={1.855}
        />
      </Grid>
      <Grid item xs={xs} spacing={24}>
        <Image
          className={classes.img}
          src={puppet2}
          color='rgba(0,0,0,0.8)'
          aspectRatio={1.855}
        />
      </Grid>
      <Grid item xs={xs}>
        <Image
          className={classes.img}
          src={puppet3}
          color='rgba(0,0,0,0.8)'
          aspectRatio={1.855}
        />
      </Grid>
      <Grid item xs={8}>
        <Image
          className={classes.img}
          src={whitneyCircles}
          color='rgba(0,0,0,0.8)'
          aspectRatio={1.5}
        />
      </Grid>
      <Grid item xs={8}>
        <Image
          className={classes.img}
          src={walkingMan}
          color='rgba(0,0,0,0.8)'
          aspectRatio={1}
        />
      </Grid>
      <Grid item xs={8}>
        <Image
          className={classes.img}
          src={molnarSquares}
          color='rgba(0,0,0,0.8)'
          aspectRatio={1}
        />
      </Grid>
      <Grid item xs={8}>
        <Image
          className={classes.img}
          src={redDots}
          color='rgba(0,0,0,0.8)'
          aspectRatio={2}
        />
      </Grid>
      <Grid item xs={8}>
        <Image
          className={classes.img}
          src={loveCode}
          color='rgba(0,0,0,0.8)'
          aspectRatio={2}
        />
      </Grid>
      <Grid item xs={8}>
        <Image
          className={classes.img}
          src={painting1}
          color='rgba(0,0,0,0.8)'
          aspectRatio={0.8}
        />
      </Grid>
      <Grid item xs={8}>
        <Image
          className={classes.img}
          src={painting2}
          color='rgba(0,0,0,0.8)'
          aspectRatio={0.8}
        />
      </Grid>


    </Grid>;
  }

}


export default withStyles(styles)(More);
