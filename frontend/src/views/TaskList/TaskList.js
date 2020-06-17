import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogTitle, 
    Button
} from '@material-ui/core';

import {bindActionCreators} from 'redux';
import {connect,useDispatch} from 'react-redux';
import { TaskToolbar, TaskTable } from './components';
import { findByAll, save, deleteItem, updateStatus } from '../../store/taskReducer';
import { hideMessage } from '../../store/messageReducer';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const TaskList = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  useEffect(() => {
     dispatch(findByAll())
  },[dispatch])

  return (
    <div className={classes.root}>
      <TaskToolbar save={props.save} findByAll={props.findByAll} />
      <div className={classes.content}>
        <TaskTable deleteItem={props.deleteItem} tasks={props.tasks} updateStatus={props.updateStatus} />
      </div>
      <Dialog open={props.openDialog} onClose={props.hideMessage}>
            <DialogTitle>Atenção</DialogTitle>
            <DialogContent>{props.messages}</DialogContent>
            <DialogActions>
              <Button onClick={props.hideMessage}>Sair</Button>
            </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
  messages: state.messages.message,
  openDialog: state.messages.showMessage
})
const mapDispatchProps = dispatch => bindActionCreators({findByAll, save, deleteItem, updateStatus, hideMessage},dispatch)


export default connect(mapStateToProps,mapDispatchProps) (TaskList);