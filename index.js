import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import paper from 'paper';
import fonts from 'fonts/*'
import { redColors, yellowColors } from './colors';

/**
 * Design inspired by Dimitri Likissas 'DESIRE'
 */

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
      yellowDots: [],
      resolution: 3
    };

    this.renderFrame = this.renderFrame.bind(this);
    this.handleAnimate = this.handleAnimate.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.setup = this.setup.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  componentDidUpdate() {
    this.renderFrame();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
    this.setup();
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
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

  setup() {

    const yellowDots = [];
    const redDots = [];

    const stride = this.state.resolution * 2.5;
    const radius = this.state.resolution;
    const fontSize = this.state.height / 9;
    const offset = 150;

    const textItems = [];
    let rasterItems = [];


    let canvas = ReactDOM.findDOMNode(this.refs.canvas);
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

  handleAnimate(event) {
    if (!paper.view.onFrame) {
      paper.view.onFrame = this.renderFrame.bind(this);
    } else {
      paper.view.onFrame = undefined;
    }
  }

  renderFrame() {
    this.state.redDots.forEach((redDot) => {
      redDot.fillColor = redColors[parseInt(Math.random() * 100) % redColors.length];
    });
    this.state.yellowDots.forEach((yellowDot) => {
      yellowDot.fillColor = yellowColors[parseInt(Math.random() * 100) % yellowColors.length];
    });
  }

  handleOnChange(event) {
    this.setState({
      resolution: event.target.value
    }, this.setup);
  }

  render() {
    return <div id='root'>
      <canvas ref='canvas' />
      <label className='animation' style={{fontSize: this.state.height / 30 }}>
        <input
          type='checkbox'
          style={{with: this.state.height / 30, height: this.state.height / 30}}
          onChange={this.handleAnimate}
        />
        animate
      </label>
      <div className='slider'>
        <input
          type='range'
          min={2}
          max={8}
          step={1}
          value={this.state.resolution}
          onChange={this.handleOnChange}
        />
      </div>

    </div>
  }
}

let mountNode = document.getElementById('app');
ReactDOM.render(<Slogan />, mountNode);
