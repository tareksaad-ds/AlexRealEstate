import React from 'react';
import { Avatar, CssBaseline , TextField ,  Link , Paper , Grid ,   Typography , Button} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import {useFormik} from 'formik'
import { useDispatch } from 'react-redux';
import {SignIn} from '../actions/authAction'
import { useHistory } from 'react-router-dom';



const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password:"",
    },
    onSubmit: (values) => {
      dispatch(SignIn(values , history));
      
    },
  });

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
         <Typography variant="h2" className={classes.header} >
            Alex Real Estate
         </Typography>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
             
              <Grid item>
                <Link href="/" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login;