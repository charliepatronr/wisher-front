
import React, {useEffect, useState}from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createGenerateClassName, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';





const Wish = (props) => {
    const {id, name, img, description, price, user} = props.wish
    // const useStyles = makeStyles((theme) => ({
    //     icon: {
    //       marginRight: theme.spacing(2),
    //     },
    //     heroContent: {
    //       backgroundColor: theme.palette.background.paper,
    //       padding: theme.spacing(8, 0, 6),
    //     },
    //     heroButtons: {
    //       marginTop: theme.spacing(4),
    //     },
    //     cardGrid: {
    //       paddingTop: theme.spacing(8),
    //       paddingBottom: theme.spacing(8),
    //     },
    //     card: {
    //       height: '100%',
    //       display: 'flex',
    //       flexDirection: 'column',
    //     },
    //     cardMedia: {
    //       paddingTop: '56.25%', // 16:9
    //     },
    //     cardContent: {
    //       flexGrow: 1,
    //     },
    //     footer: {
    //       backgroundColor: theme.palette.background.paper,
    //       padding: theme.spacing(6),
    //     },
    //   }));
    //   const classes = useStyles();

    // return (
    //     <Grid item xs={12} sm={6} md={4}>
    //     <Card className={classes.card}>
    //       <CardMedia
    //         className={classes.cardMedia}
    //         image={img}
    //         title={name}
    //       />
    //       <CardContent className={classes.cardContent}>
    //         <Typography gutterBottom variant="h5" component="h2">
    //           {name}
    //         </Typography>
    //         <Typography variant="body2" color="textSecondary" component="p">
    //          {description}
    //         </Typography>
    //       </CardContent>
    //       <CardActions>
    //         <Button size="small" color="primary">
    //           View
    //         </Button>
    //         <Button size="small" color="primary">
    //           Edit
    //         </Button>
    //       </CardActions>
    //     </Card>
    //   </Grid>

    // )

    const useStyles = makeStyles((theme) => ({
      root: {
        maxWidth: 345,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: red[500],
      },
    }));

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = (id) => {
    console.log(id, 'ID HANDLE DELETE')

    props.deleteWish(id)
    handleClose()
  }



  return (
    <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="user" className={classes.avatar}>
            {user.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick = {handleMenuClick}>
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader="September 14, 2016"
      />
        <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        >
          <MenuItem onClick={() => handleDelete(id)}>Delete</MenuItem> 
          <MenuItem onClick={handleClose}>Email</MenuItem>
        </Menu>
      <CardMedia
        className={classes.media}
        image={img}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description ? description.substring(0, 20) + '...' : null}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description / Notes</Typography>
          <Typography paragraph>
            {description}
          </Typography>
          <Typography paragraph>
            ${price}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
  );



}


export default Wish