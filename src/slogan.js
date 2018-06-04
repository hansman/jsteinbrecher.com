/**
 * Hanst Steinbrecher 2018
 * Inspired by Dimitri Likissas 'DESIRE'
 */
import React from 'react';
import ReactDOM from 'react-dom';
import paper from 'paper';
import fonts from '../fonts/*'
import { redColors, yellowColors } from './colors';
import Controls from './controls';
import {branch} from 'baobab-react/higher-order';
import { withStyles } from '@material-ui/core/styles';
import { debounce } from 'lodash';


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
      stride: 8,
      textDs: [],
      textPaths: [],
      rasterItems: [],
      redDots: [],
      yellowDots: []
    };

    this.renderFrame = this.renderFrame.bind(this);
    this.updateWindowDimensions = debounce(this.updateWindowDimensions.bind(this), 100);
    this.setup = this.setup.bind(this);
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
    const fontSize = this.state.height / 9;
    const offset = 150;

    const textItems = [];
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

    textItems.push(new paper.PointText({
        content: 'HANS',
        point: new paper.Point(width / 2, offset),
        fillColor: 'black',
        fontWeight: 20,
        fontSize
    }));

    textItems.push(new paper.PointText({
        content: 'STE I',
        point: new paper.Point(width / 2, offset + offset),
        fillColor: 'black',
        fontWeight: 20,
        fontSize
    }));

    textItems.push(new paper.PointText({
        content: 'NBRE',
        point: new paper.Point(width / 2, offset + offset + offset),
        fillColor: 'black',
        fontWeight: 20,
        fontSize
    }));

    textItems.push(new paper.PointText({
      content: 'CHER',
      point: new paper.Point(width / 2, offset + offset + offset + offset),
      fillColor: 'black',
      fontWeight: 20,
      fontSize
    }));
    paper.view.draw();

    rasterItems = textItems.map((textItem) => {
      return textItem.rasterize();
    });

    rasterItems.forEach((raster, index) => {

      let lineHeight = raster.height;
      let lineSpace = (this.state.height - 4 * lineHeight) / 5;

      raster.position = new paper.Point(this.state.width / 2 - raster.width / 2, index * (lineHeight + lineSpace));
      raster.visible = true;

    });

    for (let x = 0; x < this.state.width; x += stride) {
      for (let y = 0; y < this.state.height; y += stride) {
        let pointContained = false;
        let point = new paper.Point(x, y);
        let myCircle = new paper.Path.Circle(point, radius);

        for (let i = 0; i < rasterItems.length; i++) {
          let raster = rasterItems[i];

          let lineHeight = raster.height;
          let lineSpace = (this.state.height - 4 * lineHeight) / 5;

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
      <canvas ref='canvas' style={{width: this.state.width, height: this.state.height}} />
      <Controls {...this.props.slogan} />
    </div>
  }
}

export default branch({
  slogan: ['slogan']
}, withStyles(styles)(Slogan));
