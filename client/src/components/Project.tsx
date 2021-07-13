import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Grid ,Typography ,Button } from '@material-ui/core';
import useStyles from './styles'
import { useHistory } from 'react-router';

const Project = ({project}: any) => {
  const classes = useStyles();
  const history = useHistory();
  const Redirct = () => {
    history.push(`/projects/${project.id}`)
  }
   return ( 
          <Grid item xs={12} sm={6} md={4}>
                <Card >
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    title="projects"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h4" component="h2">
                      {project.name}
                    </Typography>
                    
                  </CardContent>
                  <CardActions>
                    <Button size="large" color="primary" onClick={Redirct}>
                      View More Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
          
   )
}

export default Project
