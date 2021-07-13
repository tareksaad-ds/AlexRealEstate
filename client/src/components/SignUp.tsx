import React from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, CssBaseline , TextField  , Link , Paper , Grid ,   Typography , Button} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import {useFormik} from 'formik'
import { useHistory } from 'react-router-dom';
import { Register } from '../actions/authAction';

const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password:"",
    },
    onSubmit: (values) => {
      dispatch(Register(values));
      window.setTimeout(() => {
        history.push("/login");
      }, 3000);
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
            Sign Up
          </Typography>
          <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.name}
            />
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
              variant="contained"
              color="primary"
              className={classes.submit}
              fullWidth
            >
              Sign Up
            </Button>
            <Grid container>
             
              <Grid item>
                <Link href="/login" variant="body2">
                  {"if you have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
            
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default SignUp;