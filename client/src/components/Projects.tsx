import React , {useEffect} from 'react';
import { AppBar, CssBaseline ,  Toolbar, Typography ,Container, Grid ,Button } from '@material-ui/core';
import BusinessTwoToneIcon from '@material-ui/icons/BusinessTwoTone';
import useStyles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../actions/projectActions';
import Project from './Project'
import { Logout } from '../actions/authAction';



const Projects = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const projects = useSelector((state: any) => state.ProjectR?.projects?.projects)
  useEffect(() => {
     dispatch(getProjects())
  },[dispatch]) 

  const logout = () => {
    dispatch(Logout())
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <BusinessTwoToneIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
               Projects
          </Typography>  
          <Container className={classes.btn}>
               <Button
               type="submit"
               size="large"
               variant="outlined"
               color="primary"
               className={classes.btn}
               onClick={logout}
               href="/login"
               >
              Logout
            </Button>
            </Container>       
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Our Projects 
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Now Take a look for each one, Hit View More button to compare with the other projects finally you can send us a message to contact us about any project or something else and we are going to reply and solve your problem
            </Typography>
            
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={8}>
            {projects && projects.map((project:any) => (
               <Project key={project.id} project={project}/>
            ))}
       </Grid>
        </Container>
      </main>
        </React.Fragment>
  )}
export default Projects;