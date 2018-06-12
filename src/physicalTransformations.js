import React from 'react';
import imageURL1 from '../assets/phys5.gif';
import imageURL2 from '../assets/phys2.JPG';
import imageURL3 from '../assets/phys3.JPG';
import imageURL4 from '../assets/phys6.JPG';
import { Grid, Modal, Typography } from '@material-ui/core';
import Image from 'material-ui-image';
import { withStyles } from '@material-ui/core/styles';
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
    'bacground-color': 'rgba(0,0,0,0.8)',
    'object-fit': 'contain'
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

class PhysicalTransformations extends React.Component {

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
    const xs = 8;

    const { classes } = this.props;

    return <Grid container justify='center' spacing={24} className={classes.root}>
      <Grid item xs={xs}>
        <Image
          className={classes.img}
            src={imageURL2}
            aspectRatio={1.7802}
        />
      </Grid>
      <Grid item xs={xs}>
        <Typography gutterBottom variant='caption' className={classes.font}>
          {`
            May 2018
          `}
        </Typography>
        <Typography gutterBottom variant='title' className={classes.font}>
          {`
            Physical Interfaces
          `}
        </Typography>
      </Grid>
      <Grid item xs={xs}>
        <Typography gutterBottom variant='body2' className={classes.font}>
          {`
            'Physical Interfaces' is an interactive art installation that allows a visitor to get transparency on the system it interacts with. The installation rebels against all abstraction, demystifies all transformations. It is an attempt to break down in-transparencies. It offers maximum honesty to the visitor by unhiding the analog and the digital. It says what it is, what it does and what it will do. Exhibited at the SFPC showcase spring 2018, most visitors described their experience as satisfying, smooth, fun, playful, relaxing, mirroring. The installation contains three sliders on linear bearings. The first slider is operated by the visitor. The other two slider are operated by dc motors based on closed loop control. The second slider followers the users slide and tries to constantly catch up with its position. The third slider followers the second slide in the same way. The position is determined using optical and acoustic distance sensors.
          `}
        </Typography>
        <Typography gutterBottom variant='body2' className={classes.font}>
          {`
            The installation responds to a feeling of oppression by technology. What does it mean that objects full of software and electronics define our daily routine? The way we communicate, move, learn, play, document, work, celebrate, relax, date, travel are shaped by the analog and digital infrastructure we have put in place. The services we rely on define our behavior and shape our growth. They generate and deliver feedback on our actions that forms our habits and establishes a normativ culture. One could argue that those services have been designed for consumers. They are the result of a market that demands them. But user centered design played very little role at the origin and evolution of our analog and digital infrastructure including computation and new media. As Alex Galloway writes in 'The Interface Effect': 'both (analog) complex dynamical systems and (digital) software engineering have been failures at even recognizing the scope of the problem of biological complexity'.
          `}
        </Typography>
      </Grid>
      <Grid item xs={xs}>
        <Image
          className={classes.img}
          src={imageURL1}
          color='rgba(0,0,0,0.8)'
          aspectRatio={1.855}
        />
      </Grid>
      <Grid item xs={xs}>
        <Typography gutterBottom variant='body2' className={classes.font}>
          {`
            In fact science and its manifestation in technology, started out monolithic, with just a few deep ideas. Previous generations could master all those ideas. But as time passed that monolithic character changed. We discovered many deep new ideas, too many for any one person to really master. As a result, the social structure of scientists, engineers, designers, developers, architects, divided around those ideas. Instead of a monolith, we have had ideas within ideas within ideas, an 'outside that leads to an inside which leads to another inside, and on and on' (A. Galloway), a complex, recursive, self-referential structure, whose organization mirrors the connections between our deepest insights. And so the structure of our ideas and technology shapes the social organization behind it and that social shape in turn constrains what we can discover. It defines our possible futures. This social shape is self referrential. It is the result and origin of our analog and digital infrastructure at the same time. Those layers within branches of ideas, expertise and insight are often considered a privilege that restricts the access and insight that humans can have. An analog of this dynamic has been first described by Michael Nielsen in 'Neural Networks and Deep Learning'. So not only do the services, products, the analog and digital infrastructure we consume shape us but also technology shapes technology. It is as if this civilization has been put on rails. Alex Galloway describes in 'The Interface Effect': 'The point is not simply that software is functional, but that software's mock resolution of the tension between the machinic and the narrative, the functional and the disciplinary, the fluid and the fixed, the digital and the analog, is an allegorical figure for the way in which these same political and social realities are "resolved" today: not through oppression or false consciousness, as in the orthodox ideological critique, but through the ruthless rule of code, which proposes that the analog should live on to the end, only to show that the analog never existed in the first place'. This is often seen as a state after the end of history. A scenario in which there is little room for spontaneousness left to actually influence history.
          `}
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <Image
          className={classes.img}
            src={imageURL3}
            aspectRatio={1 / 1.777}
        />
      </Grid>
      <Grid item xs={xs}>
        <Typography gutterBottom variant='body2' className={classes.font}>
          {`
            Without fully grasping their political and social realities, I have always felt uncomfortable consuming services and products that hide their core ideas and functionality from me. I have had an urgency to get close to their inner most layers. I felt the intransperency of the systems that inform the reality we grew into limits our growth as humans and limits the technology we can create. I chose to learn as many layers of our technology stack as I could and got specifically excited at their zones of transition, their interface to each other. Just as touch displays are a common interface for human-machine interaction so is source code a kind of interface, an interface into a lower level set of libraries and operation codes an so are operation codes an interface to actual physical state and momentum. Interdisciplinary is not an ambition anymore, it is a prerequisite for independence. Reflecting on this arduous and rewarding choice I realize: My nature has been rebelling against an invisible new order of the world. The rule of protocols and code. Chun claims "software is a functional analog to ideology.". In contemporary culture this code is very strong. Born in 1985 I have been growing into a world that got more and more replaced by a designed one. Everything we touch, watch, consume has been explicitly designed. I believe we have gotten used to living in an almost exclusively aestheticizised and designed world and have internalized it to a degree that we stopped thinking about what this means to us. We forgot that the world was ever different and haven't found words for what changed. 'Physical Interfaces' offers help to access this problematic not by analyzing but playing with it.
          `}
        </Typography>
      </Grid>
      <Grid item xs={xs}>
        <Image
          className={classes.img}
            src={imageURL4}
            aspectRatio={1.5}
        />
      </Grid>

    </Grid>;
  }

}


export default withStyles(styles)(PhysicalTransformations);
