import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Wish from './Wish'
import NewWish from './NewWish'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
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
}));


export default function WishContainer() {
  const classes = useStyles();
  const [wishes, setWishes] = useState([])
  const [open, setOpen] = useState(false)

  const url = 'http://localhost:3000/wishes'

  useEffect( () => {
    fetch(`${url}`)
    .then(response => response.json())
    .then(response => {
        let userWishes = filterWishesByUser(response)
        setWishes(userWishes)
        // renderWishes(wishes)
    })
  }, [])

  // useEffect( () => {
  //   fetch(`${url}`)
  //   .then(response => response.json())
  //   .then(response => {
  //       let userWishes = filterWishesByUser(response)
  //       setWishes(userWishes)
  //       // renderWishes(wishes)
  //   })
  // }, [])




  const filterWishesByUser = (data) => {
      let userId = 1
      return data.filter((data) => data.user.id === userId )
  }

  const viewWish = (wishId) => {
      
  }

  const handleOpen = () => {
      setOpen(true);
  }

  const handleClose = () => {
      setOpen(false);
  }

  const addWish = (data) => {

    const reqObj = {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json', 
          'Accept' : 'application/json'
        }, 
        body: JSON.stringify(data)
    }

    fetch(url, reqObj)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setWishes(state => ([...state, response]))
    });

  }

  const filterDeletedWishes = (id, state) => {
    return state.filter( (wish) => wish.id !== id)
  }
  
  const deleteWish = (id) => {
    console.log(id, 'ID')
    const configObj = {
      method : 'DELETE'
    }

    fetch(`${url}/${id}`, configObj)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      let newWishState = filterDeletedWishes(id, wishes)
      setWishes(newWishState)
    })
  }


  

  const renderWishes = (state) => {
      return state.map((wish, idx) => {
        console.log(wish, 'WISH IN RENDER WISHES')
          return <Wish key= {idx} wish={wish} deleteWish={deleteWish}/>
      })
  }

//   key={card}


  

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CardGiftcardIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Wisher
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Wishes
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                List of your wishes!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={handleOpen}>
                    Add wish
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Search
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            { renderWishes(wishes) }
          </Grid>
        </Container>

        <NewWish open = {open} handleClose={handleClose} addWish={addWish}/>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Wisher
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          List your wishes and find your friends!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}