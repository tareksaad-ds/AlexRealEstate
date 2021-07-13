import React , {useEffect} from 'react';
import useStyles from './styles'
import { Typography, Toolbar, AppBar , CssBaseline, Grid, Paper , TextField , Button } from '@material-ui/core';
import BusinessTwoToneIcon from '@material-ui/icons/BusinessTwoTone';
import { useDispatch, useSelector } from 'react-redux';
import { getProject } from '../actions/projectActions';
import { useParams } from 'react-router';
import {useFormik} from 'formik'
import { contactUsAction } from '../actions/contactAction';
import { Logout } from '../actions/authAction';
import { Container } from '@material-ui/core';


const PPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();   
  const {id} = useParams() as any;
  const project = useSelector((state:any) => state.ProjectR?.project?.project)
  useEffect(()=> {
     
     dispatch(getProject(id))
  },[dispatch, id])
  const formik = useFormik({
   initialValues: {
     message: "",
   },
   onSubmit: (values) => {
     dispatch(contactUsAction(id, formik.values.message));
     
   },
 });
 const logout = () => {
   dispatch(Logout())
 }
   return (
      <React.Fragment>
         <CssBaseline />
         <AppBar position="sticky">
            <Toolbar>
               <BusinessTwoToneIcon className={classes.icon} />
               <Typography variant="h6" color="inherit" >
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
         <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image3} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
           <Typography className={classes.header} variant="h3">{project?.name}</Typography>
            <Typography className={classes.quote} variant="h5"><span style={{color: 'goldenrod'}}>{project?.apartment}</span> {" "} Avaliable Aparments</Typography>
            <Typography className={classes.quote} variant="h5">Area: {" "}<span style={{color: 'goldenrod'}}>{project?.area}</span> m<sub>2</sub> </Typography>
            <Typography className={classes.quote} variant="h5">price: {" "}<span style={{color: 'goldenrod'}}>{project?.price}L.E</span> </Typography>
            <Typography className={classes.quote} variant="h5">instalment method: {" "}<span style={{color: 'goldenrod'}}>{project?.instalments}</span></Typography>
            <br />
            <form onSubmit={formik.handleSubmit}>
               <Typography variant="h6">Contact Us</Typography>
               <TextField
                  id="message"
                  label="Your Comment"
                  fullWidth
                  rows={20}
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.message}
               />
                <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Send Your Message
            </Button>
      </form>
         </div>
      
    </Grid>
    </Grid>
      </React.Fragment>
   )
}

export default PPage;
