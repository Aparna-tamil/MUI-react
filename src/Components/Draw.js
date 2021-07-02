import React from 'react';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import {useEffect,useState} from "react";
import { makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) =>({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
  
    table:{
        minWidth: 650,
    },
  }));
 const Draw=()=>{
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
        top: false,
        right: false,
        bottom: false,
      });
      
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
      
        setState({ ...state, [anchor]: open });
      };

      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >    <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap><p>Product Name</p>
        <h3>French Fries</h3></Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs>
              <Typography noWrap><p>Quantity: 1</p></Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs>
              <Typography><p>Flexible price and quantity</p></Typography>
            </Grid>
          </Grid>
        </Paper>
      
      </div>
  
      </div>
        );
 return(
  

    <div>
    {['left', 'right', 'top', 'bottom'].map((anchor) => (
      <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    ))}
  </div>
 );      
 } 
 
 export default Draw;