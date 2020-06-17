import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { Contents , Details} from './components';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { selectNumber } from '../../store/gameReducer';
import { findByGame, save } from '../../store/gameUserReducer';
import { hideMessage } from '../../store/messageReducer';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }, item: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const Game = (props) => {
  const classes = useStyles();
  const { idGame } = props.location.state;
  return (
    <div className={classes.root}>
      <Grid container
           spacing={4}>
        <Grid item
            md={4}
            xs={12}>
            <Details item={props.item} 
                    idGame={idGame} 
                    selectNumber={props.selectNumber} 
                    save={props.save} />
        </Grid>
        <Grid item
            md={8}
            xs={12}>
            <Contents item={props.item} 
                  selectNumber={props.selectNumber} 
                  idGame={idGame} 
                  gameUser={props.gameUser} 
                  find={findByGame} />
       </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => ({
  item: state.item.item,
  gameUser: state.gameUser.gameUser,
  game: state.gameUser.game,
  messages: state.messages.message,
  openDialog: state.messages.showMessage
})
const mapDispatchProps = dispatch => bindActionCreators({selectNumber,findByGame, save, hideMessage},dispatch)
export default connect(mapStateToProps,mapDispatchProps) (Game);