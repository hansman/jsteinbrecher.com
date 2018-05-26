import React from 'react';
import { List, ListItem, ListItemText, ListSubheader, Collapse } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import theme from './theme';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    position: 'fixed',
    top: 40,
    left: 40,
    color: 'white',
    fontSize: 18,
    fontFamily: 'helvetica'
  },
  listSection: {
    textDecorationLine: 'underline',
    backgroundColor: 'transparent',
    cursor: 'hand'
  },
  li: {
    fontSize: 25,
    fontWeight: 540
  },
});

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: 0 };
  }

  handleClick(value) {
    value = (this.state.open == value) ? 0 : value;
    this.setState({ open: value });
  }

  render() {

    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem button className={classes.listSection}>HANS ST</ListItem>
          <ListItem button className={classes.listSection} divider={true} onClick={this.handleClick.bind(this, 1)}>WORKS</ListItem>
          <Collapse in={this.state.open == 1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.li}>physical transformations</ListItem>
            </List>
          </Collapse>
          <ListItem button className={classes.listSection} divider={true} onClick={this.handleClick.bind(this, 2)}>WORDS</ListItem>
          <Collapse in={this.state.open == 2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.li}>thoughts on our progression</ListItem>
            </List>
          </Collapse>
          <ListItem button className={classes.listSection} onClick={this.handleClick.bind(this, 3)}>LABS</ListItem>
          <Collapse in={this.state.open == 3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.li}>bells and wistls</ListItem>
              <ListItem button className={classes.li}>works @sfpc</ListItem>
              <ListItem button className={classes.li}>ok google vs hey siri</ListItem>
              <ListItem button className={classes.li}>hardware synthesizers</ListItem>
              <ListItem button className={classes.li}>tshirt making</ListItem>
            </List>
          </Collapse>
          <ListItem button className={classes.listSection}>LIVE</ListItem>
        </List>
      </div>
    );

  }

}

export default withStyles(styles)(Menu);
