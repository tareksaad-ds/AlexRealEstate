import React from 'react';
import { Avatar, CssBaseline , Paper , Grid ,   Typography , Button} from '@material-ui/core'
import HomeWorkTwoToneIcon from '@material-ui/icons/HomeWorkTwoTone';
import useStyles from './styles'


const Landing = () => {
  const classes = useStyles();




  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image2} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
         <Typography variant="h2" className={classes.header} >
            Alex Real Estate
         </Typography>
          <Avatar className={classes.avatar}>
            <HomeWorkTwoToneIcon />
          </Avatar>
          <Typography variant="h6" className={classes.about}>
          Alex RE's mission is to modernize and progress the experience of buying and selling real estate by cultivating a spirit of collaboration, innovation, and integrity.
          </Typography>
          <br />
          <Typography variant="h6" className={classes.quote}>
          “Alex RE fosters a culture of partnership in which all clients and listings are represented in a cooperative environment by all its agents, thereby ensuring its clients and listings have the competitive edge.” Ahmed Saad, CEO and co-founder.
          </Typography>
          <br />
          <Typography variant="h6" className={classes.quote}>
          “Leveraging the most emergent technologies and social media strategies, Alex RE envisions itself as more than just a real estate brokerage; it is a lifestyle company committed to informing and connecting global communities.” Tarek Saad, President and co-founder.
          </Typography>
          <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              fullWidth
              href="/projects"
            >
              Our Projects
            </Button>
           
        </div>
      </Grid>
    </Grid>
  );
}

export default Landing;