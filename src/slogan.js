/**
 * Hans Steinbrecher 2018
 * Inspired by Dimitri Likissas 'DESIRE'
 */
import React from 'react';
import ReactDOM from 'react-dom';
import paper from 'paper';
import { redColors, yellowColors } from './colors';
import Controls from './controls';
import {branch} from 'baobab-react/higher-order';
import { withStyles } from '@material-ui/core/styles';
import { debounce } from 'lodash';
import Actions from './actions'
import ReactGA from 'react-ga';


const styles = theme => ({
  root: {
    position: 'relative',
    top: 0,
    left: 0
  }
});

let maxWidth = 0;

let width, height;

class Slogan extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      textDs: [],
      textPaths: [],
      rasterItems: [],
      redDots: [],
      yellowDots: [],
      fontSize: 300
    };

    this.renderFrame = this.renderFrame.bind(this);
    this.updateWindowDimensions = debounce(this.updateWindowDimensions.bind(this), 100);
    this.setup = this.setup.bind(this);
    this.onAnimate = this.onAnimate.bind(this);
  }

  onAnimate() {
    const {animate} = this.props.slogan;
    Actions.setState(['slogan', 'animate'], !animate);
    ReactGA.event({
      category: 'User',
      action: 'Clicked Animate',
      label: animate
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    window.removeEventListener('orientationchange', this.updateWindowDimensions);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.slogan.animate != this.props.slogan.animate) {
      if (nextProps.slogan.animate) {
        paper.view.onFrame = this.renderFrame.bind(this);
      } else {
        paper.view.onFrame = undefined;
      }
    }

    if (nextProps.slogan.resolution != this.props.slogan.resolution) {
      this.setup(nextProps.slogan.resolution);
    }

  }

  componentDidUpdate() {
    this.renderFrame();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions, false);
    window.addEventListener('orientationchange', this.updateWindowDimensions);
    this.setup();
    paper.view.onFrame = this.renderFrame.bind(this);
  }

  updateWindowDimensions() {
    if (window.innerWidth > maxWidth) {
      maxWidth = window.innerWidth;
      this.forceUpdate();
    }
    width = window.innerWidth;
    height = window.innerHeight;
    this.setState({
      width: width,
      height: height
    }, this.setup);
  }

  containsDot(textItems, point) {
    for (let textItem of textItems) {
      if (textItem.contains(point)) {
        return true;
      }
    }
    return false;
  }

  setup(resolution = this.props.slogan.resolution) {

    const yellowDots = [];
    const redDots = [];

    const stride = resolution * 2.5;
    const radius = resolution;
    let fontSize = this.state.fontSize;

    let textItems = [];
    let rasterItems = [];

    console.log('state', this.state);

    let canvas = ReactDOM.findDOMNode(this.refs.canvas);
    canvas.width = this.state.width;
    canvas.height = this.state.height;
    canvas.style.background = 'black';

    let onFrame;

    if (paper.view) {
      onFrame = paper.view.onFrame;
      paper.view.remove();
    }

    paper.setup(canvas);
    paper.view.onFrame = onFrame;

    let { width, height } = paper.view.size;

    while ((rasterItems.length == 0) || rasterItems[0].width > 0.9 * width || 2 * rasterItems[0].height > 0.9 * height ) {
      
      if (rasterItems.length != 0) {  
        fontSize = fontSize - 40;
      }
      textItems = [];
      textItems.push(new paper.PointText({
          content: 'CODE',
          point: new paper.Point(width / 2, 0),
          fillColor: 'black',
          fontSize
      }));

      textItems.push(new paper.PointText({
          content: 'LOVE',
          point: new paper.Point(width / 2, 0),
          fillColor: 'black',
          fontSize
      }));

      rasterItems = textItems.map((textItem) => {
        textItem.fontFamily = 'Courier'
        return textItem.rasterize();
      });
    }

    let lineHeight = rasterItems[0].height;
    let xPos = width / 2 - rasterItems[0].width / 2;
    let yPos = (height - 2 * lineHeight) / 2
    rasterItems[0].position = new paper.Point(xPos, yPos); 
    rasterItems[0].visible = true;

    rasterItems[1].position = new paper.Point(xPos, yPos + lineHeight); 
    rasterItems[1].visible = true;


    for (let x = 0; x < width; x += stride) {
      for (let y = 0; y < height; y += stride) {
        let pointContained = false;
        let point = new paper.Point(x, y);
        let myCircle = new paper.Path.Circle(point, radius);

        for (let i = 0; i < rasterItems.length; i++) {
          let raster = rasterItems[i];

          let lineHeight = raster.height;
          let lineSpace = (height - 4 * lineHeight) / 5;

          let rasterX = x - raster.position.x;
          let rasterY = y - raster.position.y;

          if (!(rasterX > 0 && rasterX < raster.width && rasterY > 0 && rasterY < raster.height)) {
            continue;
          }

          pointContained = true;

          let color = raster.getPixel(rasterX, rasterY);
          let value = color.components[0] + color.components[1] + color.components[2] + color.components[3];

          if (value > 0) {
            yellowDots.push(myCircle);
          } else {
            redDots.push(myCircle);
          }
        }

        if (!pointContained) {
          redDots.push(myCircle);
        }

      }
    }

    textItems.forEach((textItem) => {
      textItem.sendToBack();
    });

    this.setState({redDots, yellowDots});
  }

  renderFrame() {
    this.state.redDots.forEach((redDot) => {
      redDot.fillColor = redColors[parseInt(Math.random() * 100) % redColors.length];
    });
    this.state.yellowDots.forEach((yellowDot) => {
      yellowDot.fillColor = yellowColors[parseInt(Math.random() * 100) % yellowColors.length];
    });
  }

  render() {
    const { classes } = this.props;
    return <div className={classes.root} style={{width: this.state.width, height: this.state.height}}>
      <canvas ref='canvas' style={{width: this.state.width, height: this.state.height}} onClick={this.onAnimate} />
      <Controls {...this.props.slogan} />
    </div>
  }
}

export default branch({
  slogan: ['slogan']
}, withStyles(styles)(Slogan));
