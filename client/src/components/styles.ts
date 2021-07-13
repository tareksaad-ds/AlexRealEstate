import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  quote: {
    fontSize: "26px",
    fontFamily: "Montserrat, sans-serif"
  },
  about: {
    fontFamily: "Encode Sans SC, sans-serif",
    fontSize: "26px"
  },
  image2: {
    backgroundImage: 'url(https://images.pexels.com/photos/4270292/pexels-photo-4270292.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  header: {
    fontFamily: "Encode Sans SC, sans-serif",
    fontWeight: 600
  },
   root: {
     height: '100vh',
   },
   image: {
     backgroundImage: 'url(https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
     backgroundRepeat: 'no-repeat',
     backgroundColor:
       theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
     backgroundSize: 'cover',
     backgroundPosition: 'center',
   },
  btn: {
    color: "white",
    alignSelf: "right",
    float: "right"
  },
   paper: {
     margin: theme.spacing(8, 4),
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
   },
   avatar: {
     margin: theme.spacing(1),
     backgroundColor: theme.palette.secondary.main,
   },
  
   form: {
     width: '100%', // Fix IE 11 issue.
     marginTop: theme.spacing(1),
   },
   submit: {
     margin: theme.spacing(3, 0, 2),
   },
   icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
 
   cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  image3: {
    backgroundImage: 'url(https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
     backgroundRepeat: 'no-repeat',
     backgroundColor:
       theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
     backgroundSize: 'cover',
     backgroundPosition: 'center',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  link: {
    color: "white",
    fontSize: "1.2rem",
    float: "right",
    display: "inline-block",
  }
 }));

 export default useStyles;