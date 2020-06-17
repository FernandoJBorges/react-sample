import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import { UsersToolbar, UsersTable } from './components';
import {bindActionCreators} from 'redux';
import {connect,useDispatch} from 'react-redux';
import { findByAll } from '../../store/userReducer';
import { hideMessage } from '../../store/messageReducer';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findByAll())
 },[dispatch])


  return (
    <div className={classes.root}>
      <UsersToolbar findByAll={props.findByAll} />
      <div className={classes.content}>
        <UsersTable users={props.users}  />
      </div>
    </div>
  );
};


const mapStateToProps = state => ({
  users: state.users.users,
  messages: state.messages.message,
  openDialog: state.messages.showMessage
})
const mapDispatchProps = dispatch => bindActionCreators({findByAll, hideMessage},dispatch)


export default connect(mapStateToProps,mapDispatchProps) (UserList);


