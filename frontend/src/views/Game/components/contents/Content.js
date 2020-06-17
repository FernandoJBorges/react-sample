import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper, Button} from '@material-ui/core';

import {useDispatch} from 'react-redux';
import { numeros } from "./../utils";
const useStyles = makeStyles(theme => ({
  root: {
   background:'#fff',
  },
  content: {
    paddingTop: 150,
    textAlign: 'center'
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  },
  gridContainer:{
      display: 'grid',
      alignItems: 'center',
      gridTemplateColumns: 'auto auto auto auto auto auto auto auto auto auto',
      background:'#FEFDDE',
      padding: theme.spacing(5),
      maxWidth: 950
  },
  gridItem:{
        background:'#FEFDDE',
        border: 'solid #F44336 1px',
        fontSize:30,
        textAlign:'center',
        color: '#F44336'
    },
    paper: {
        height: 50,
        width: 70,
        fontSize:30,
        textAlign:"center",
        display: 'grid',
        alignItems: 'center',
      },
      uploadButton:{
          fontSize:19
        }
    }));
const Content = (props) => {
  const classes = useStyles();
  const {idGame, gameUser, find, selectNumber} = props;

  const dispatch = useDispatch()
   useEffect(() => {
      dispatch( find(idGame))
   },[dispatch, find ,idGame ])
 
   var tifOptions = [];
   gameUser.forEach(key => tifOptions.push(key.number));
   var myMumeros = new Set(tifOptions);

    const selectEvent = (event) => {
        event.preventDefault();
        selectNumber(event.currentTarget.textContent);
        window.scrollTo({top: 0, behavior: 'smooth'});   
    }

   
    return (
        <>
           <Grid container className={classes.root} spacing={2}>
                <Grid item>
                    <Grid container justify="center" spacing={2}>
                        {numeros.map((value) => (
                            <Grid key={value} item>
                                <Paper className={classes.paper}>
                                        <Button
                                            className={classes.uploadButton}
                                            color="primary"
                                            variant="outlined"
                                            onClick={selectEvent}
                                            disabled={myMumeros.has(value)}
                                            >{value}</Button>
                                       
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
         </>
    );
};



export default Content;