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
    padding: theme.spacing.unit * 25
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

class About extends React.Component {

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
      <Grid item xs={3}>
        <Image
          className={classes.img}
            src={imageURL}
        />
        <div style={{paddingTop: 15}}>
          <a href="mailto:steinbrecher.johann@gmail.com" target="_top" style={{paddingRight: 5}}>
            <EmailIcon color={color} size={size} />
          </a>
          <a href='https://twitter.com/jsteinbrechr' style={{paddingRight: 5}}>
            <TwitterIcon color={color} size={size} />
          </a>
          <a href='https://github.com/hansman' style={{paddingRight: 5}}>
            <GithubCircleIcon color={color} size={size} />
          </a>
          <a href='https://www.instagram.com/jsteinbrechr' style={{paddingRight: 5}}>
            <InstagramIcon color={color} size={size} />
          </a>
        </div>
      </Grid>
      <Grid item xs={6}>
        <Typography gutterBottom className={classes.font}>
          {`
            I am an engineer and applied scientist from a remote town in the Alps, located on the German - Austrian border. Through algorithms, protocols, sound and motion I demystify the systems that structure the world we live in. My practice makes the layers of invisible analog and digital transformations that surround us accessible and tangible. I wonder how new spontaneity can grow out of those binding constructs? Born in 1985, my work is based on my history as a human growing up in a world that got more and more replaced by an engineered and designed one. I work in San Francisco, Munich and New York City.
          `}
        </Typography>
      </Grid>
      <Modal
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        open={this.state.modal}
        onClose={this.toggleModal}
      >
        <div className={classes.paper}>
          <Typography variant="title" id="modal-title">
            steinbrecher.johann@gmail.com
          </Typography>
        </div>
      </Modal>

    </Grid>;
  }

}


export default withStyles(styles)(About);
