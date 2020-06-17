import React, { useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import { MyGamesTable } from './components';
import {bindActionCreators} from 'redux';
import {connect,useDispatch} from 'react-redux';
import { getGameByUser, deleteItem , confirmDeleteItem} from '../../store/myGamesReducer';
import { hideMessage } from '../../store/messageReducer';

import { 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const MyGames = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  let users = JSON.parse(localStorage.getItem('users')) || [];
  useEffect(() => {
    dispatch(getGameByUser(users[0].id))
 },[dispatch])

 const confirm = (e) => {
    e.preventDefault();
    props.deleteItem(props.myGame);
    props.hideMessage('');
 }

 const cancel = (e) => {
    e.preventDefault();
    props.hideMessage('');
 }

return (
    <div className={classes.root}>
      <div className={classes.content}>
        <MyGamesTable myGames={props.myGames} confirmDeleteItem={props.confirmDeleteItem} />
      </div>
      <Dialog open={props.openDialog} onClose={cancel}>
            <DialogTitle>Atenção</DialogTitle>
            <DialogContent>{props.messages}</DialogContent>
            <DialogActions>
              <Button onClick={confirm} color="primary">Sim</Button>
              <Button onClick={cancel}>Cancelar</Button>
            </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => ({
  myGames: state.myGames.myGames,
  myGame: state.myGames.myGame,
  messages: state.messages.message,
  openDialog: state.messages.showMessage
})

const mapDispatchProps = dispatch => bindActionCreators({getGameByUser,confirmDeleteItem, deleteItem, hideMessage},dispatch)
export default connect(mapStateToProps,mapDispatchProps) (MyGames);