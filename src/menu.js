import React from 'react';
import { Grid, List, ListItem, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import theme from './theme';
import {Link, withRouter } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const PUBLIC_URL = '/jsteinbrecher.com/';

const styles = theme => ({
  root: {
    position: 'fixed',
    top: 40,
    left: 40,
    color: theme.palette.primary.light,
    fontSize: 18,
    'z-index': 2
  },
  listSection: {
    backgroundColor: 'transparent',
    cursor: 'hand'
  },
  li: {
    color: theme.palette.primary.light,
    width: 'inherit',
    'text-decoration': 'none',
    '&:hover': {
      'text-decoration': 'underline'
    }
  }
});



class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: 0 };
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      scroll.scrollTo(0);
    }
  }

  render() {

    const {classes} = this.props;

    return (
      <Grid item xs={2} className={classes.root}>
        <List component='nav'>
          <ListItem button className={classes.listSection}><Link to={`${PUBLIC_URL}about`} className={classes.li}><Typography variant='title' gutterBottom className={classes.li}>HANS ST</Typography></Link></ListItem>
          <ListItem button className={classes.listSection}><Link to={`${PUBLIC_URL}thoughtsOnProgression`} className={classes.li}><Typography variant='title' gutterBottom className={classes.li}>THOUGHTS ON OUR PROGRESSION</Typography></Link></ListItem>
          <ListItem button className={classes.listSection}><Link to={`${PUBLIC_URL}physicalTransformations`} className={classes.li}><Typography variant='title' gutterBottom className={classes.li}>PHYSICAL INTERFACES</Typography></Link></ListItem>
          <ListItem button className={classes.listSection}><Link to={`${PUBLIC_URL}gallery`} className={classes.li}><Typography variant='title' gutterBottom className={classes.li}>GALLERY</Typography></Link></ListItem>
        </List>
      </Grid>
    );

  }

}

export default withStyles(styles)(withRouter(Menu));
