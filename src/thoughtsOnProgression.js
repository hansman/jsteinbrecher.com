import React from 'react';
import imageURL1 from '../assets/aest1.jpg';
import imageURL2 from '../assets/aest2.jpg';
import imageURL3 from '../assets/aest3.png';
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

class ThoughtsOnProgression extends React.Component {

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
      <Grid item xs={5}>
        <Image
          className={classes.img}
          src={imageURL1}
          color='rgba(0,0,0,0.8)'
          aspectRatio={1.4855}
        />
      </Grid>
      <Grid item xs={xs}>
        <Typography gutterBottom variant='title' className={classes.font}>
          {`
            Thoughts on Our Progression
          `}
        </Typography>
      </Grid>
      <Grid item xs={xs}>
        <Typography gutterBottom variant='body2' className={classes.font}>
          {`
            Often we find ourselves asking how will our time be remembered by future generations? We have the internet, electric cars, artificial intelligence, the blockchain, global warming, natural resource depletion, all crazy things pop culture brought us and we are about to colonize mars. Yet, we struggle identifying the underlying concept of our time. Like the 17th and 18th century is not primarily remembered for its technological advances (Leibniz invented the calculator) and political issues (America got colonized) but for the intellectual enlightenment as the underlying scheme which brought irreversible structural change to our societies. I am excited that I learned a term that will play an important role describing our time: "aestheticization".
          `}
        </Typography>
        <Typography gutterBottom variant='body2' className={classes.font}>
          {`
            "There is no doubt that we are living in a time of total aestheticization." says Boris Groys in his writeup On Art Activism. a-e-s-t-h-e-t-i-c-i-z-a-t-i-o-n. A rather unhandy word, a bit long and hard to spell. Don't worry it is quite simple to explain. It describes everything you touch, watch, consume as having been explicitly designed. In politics every image we consume is professionally made and artists bend aestheticization to a degree that they actually defunctionalize technological modernity to "reveal the ideology of progress as phantasmal and absurd". Aestheticization in design is not about prettiness or beauty of an object though. It is about intentional man made modification and retouching of everything. Say an apple on a tree is beautiful but not aestheticizised assuming it is truly organic. However, if the apple tree has been genetically modified to grow apples of bright color and glossy skin it is a case of aestheticization. I believe we have gotten used to living in an almost exclusively aestheticizised world and have internalized it to a degree that we stopped thinking about what this means to us. We forgot that the world was ever different and haven't found words for what changed. So I will do the effort.
          `}
        </Typography>
        <Typography gutterBottom variant='body2' className={classes.font}>
          {`
            I have been doubtlessly suffering from total aestheticization. My nature constantly defends itself against the factitiousness of the world surrounding me. I consider most of our world as plastic nonsense made pretty and am searching for islands of realness and rawness. Whilst this has been a feeling that I have carried inside myself I have not found any formalization of that condition before. Thanks to Boris Groys for formalizing it: aestheticization. I think my sense of being surrounded by so much of it gave me a feeling of being surrounded by a lot of nonsense. I grew up in a world that got more and more replaced by a designed one. It made the increasing level of aestheticization very perceptible to me. Clearly, not everything professionally designed is nonsense. Yet, detecting that aestheticization has put a distance between all function and appearance gave me a sense of overwhelming nonsense. I developed this feeling as early as in elementary school. I remember being annoyed on my first day at school by my teacher's designed-for-kids-like guitar playing. I sensed that it was not a genuine way of enjoying music but curated in its appearance and tone for new to school kids. As a reaction I decided that rawness, straightness and truth, and even if its just an incorrect attempt to formulate it, is always better than some mediation, aestheticization, around it. A backlash. This is one reason why I chose engineering as my profession as it felt like a promising path to detach from layers of aestheticization, abstraction from the origins. Unfortunately, not many of my contemporaries seem to have made a similar decision towards realness. With an increasingly aestheticizised world our society lost more and more capacity of acknowledging raw truth. "We can't handle much more bad news." says Michael Moore in 5 Reasons Why Trump Will Win. Further he says "Our mental state goes to default when something scary is actually, truly happening." People living in the aestheticized era appear to be very exhausted. I feel the constant need in daily interactions that everything has to be cute, awesome or great for others. It stands out to me that every sentence that starts with "I feel" ends with "but in a good way". Why so much effort? Honesty and straightness will always feel better to me than crampedness that everything has to be great or awesome. Not that I don't enjoy good vibes but I actually prefer non fake good vibes and prefer non good vibes over fake good ones. This precondition erodes the basics of communication. The permanent need to retouch and design feelings, pictures, job titles, relationships, short everything, is an example of aestheticization and a sign of hopelessness to which I can not relate. The feeling of not relating to many people because so many interactions are encumbered by the need of permanent aestheticization is probably the most regrettable result of the "time of total aestheticization" for me. I believe many decisions that formed my personality, such as the decision towards explicit straightness, are responses to growing up in a time of total aestheticization. Ironically, I do have a very strong sense for actual aesthetics and have found different ways to channel this part of me in music, spirituality, mathematics, fashion, nature, sport, food, literature, romance. I wonder if this love and need for actual aesthetics escalated the issue so early in my live.
          `}
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <Image
          className={classes.img}
            src={imageURL2}
            aspectRatio={1.33333}
        />
      </Grid>
      <Grid item xs={xs}>
        <Typography gutterBottom variant='body2' className={classes.font}>
          {`
            Boris Groys summarizes our perspective as individuals in an almost perfectly aestheticizised world. Speaking of total aestheticization he says "This fact is often interpreted as a sign that we have reached a state after the end of history, or a state of total exhaustion that makes any further historical action impossible. However, as I have tried to show, the nexus between total aestheticization, the end of history, and the exhaustion of vital energies is illusionary. Using the lessons of modern and contemporary art, we are able to totally aestheticize the world - i.e., to see it as being already a corpse - without being necessarily situated at the end of history or at the end of our vital forces. One can aestheticize the world - and at the same time act within it". Apparently a common take on our perspective as individuals in a perfectly aestheticized world is that we live in a state after the end history in which no further historical action is possible. Groys is taking a stance against such powerlessness arguing that one can aestheticize the world and at the same time act within it.
          `}
        </Typography>
        <Typography gutterBottom variant='body2' className={classes.font}>
          {`
            Whilst total aestheticization added significant extra load, I don't feel totally exhausted. For the longest time I felt that all history has been written and there is no further historical action possible. I could not do better than explaining this by the aftermath of two world wars. In recent years I learned that this is not the case though and that every action I take and every interaction I make is very much historically impactful. However, I feel this is a privilege for those who were willing to walk that path of accepting the status quo as already dead and finding ways of responding to it. The general society is left with a feeling of numbness and is busy with coloring everything rosy which made our society very vulnerable. Art activists find new paths of reacting to an aestheticized world but since they live in a "postmetaphysical age" while the vast majority of the society does not or does not know about it, their disconnect will make their activism of less effect. It should not be overseen that Boris Groys required a two hour read full of academic concepts to make the point "One can aestheticize the world - and at the same time act within it". But I might be wrong on this one because the enlightenment also grew out of an intellectual elite before it reached the masses.
          `}
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <Image
          className={classes.img}
            src={imageURL3}
            aspectRatio={1.7777}
        />
      </Grid>
      <Grid item xs={xs}>
        <Typography gutterBottom variant='body2' className={classes.font}>
          {`
            I see a push to reduce aestheticization in contemporary culture. Hipsters ride bicycles with wooden handlebars to make its design appear more raw and natural. This however is not a reversal of aestheticization but a further extrema of it. Even highly designed fixie bicycles are retouched in form of an organic looking handlebar. I believe aestheticization is irreversible and I am wondering what levels it will reach. I believe it will not stop with the objects and services that surround us but aestheticization will grow into our personalities. We will become part of a designed world. Not only the fashion industry is forming us towards an aestheticizised version of ourselves but also politics do. The case of cambridge analytica which influenced individuals' sentiment towards wedge issues by micro targeting via social media is a warning case. While we have been anxiously looking forward to the point when machines will be smarter than humans, I believe the more scary point in time will be when the human mind is perfectly aestheticizised and humans become homogenous agents in an aestheticizised world. I feel this is already happening "but in a good way" ;). The Man that drives car onto walkway after being instructed by his Uber app is an accessible example for it.
          `}
        </Typography>
        <Typography gutterBottom variant='body2' className={classes.font}>
          {`
            I believe our time will be remembered as the age of aestheticization. Its effects are structural and irreversible to us. We have to acknowledge our world as aestheticizised and find new ways of configuring ourselves within it. This will allow us to be playful with it and grow beyond it, growing beyond the state after the end of history so to speak. Learning the term helped me to understand my history and allows me to refine my strategies on responding to it beyond bare intuition. This post is the start of reconfiguring myself in the age of aestheticization.
          `}
        </Typography>
        <Typography gutterBottom variant='body2' className={classes.font}>
          {`
            This writeup has been inspired by the Critical Theory class on technology taught by Moreshin Allahyari at the School for Poetic Computation in NYC which I am currently attending as a student in the spring term 2018.
          `}
        </Typography>
      </Grid>

    </Grid>;
  }

}


export default withStyles(styles)(ThoughtsOnProgression);
