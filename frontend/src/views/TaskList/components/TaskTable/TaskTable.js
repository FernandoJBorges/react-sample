import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import TimerIcon from '@material-ui/icons/Timer';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const TaskTable = props => {
  const { className, tasks, ...rest } = props;
  const classes = useStyles();
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>

          <Table>
             <TableHead>
               <TableRow>
                 <TableCell>Código</TableCell>
                 <TableCell>Descrição</TableCell>
                 <TableCell>Categoria</TableCell>
                 <TableCell>Status</TableCell>
                 <TableCell></TableCell>
                 <TableCell></TableCell>
                </TableRow>
             </TableHead>
             <TableBody>
              {tasks.map(task => {
                return(
                  <TableRow key={task.id}>
                  <TableCell>{task.id}</TableCell>
                  <TableCell>{task.descricao}</TableCell>
                  <TableCell>{task.categoria}</TableCell>
                  <TableCell>{task.done ? 'Realizado' :'Pendente'}</TableCell>
                  <TableCell>
                    <IconButton onClick={e => props.updateStatus(task.id)} color="secondary">
                        {task.done ? 
                          (
                              <DoneAllIcon color="secondary" />
                          ) :
                          (
                              <TimerIcon color="secondary" />
                          )
                        }
                    </IconButton>
                    
                  </TableCell>
                  <TableCell>
                      <IconButton onClick={e => props.deleteItem(task.id)} color="secondary">
                          <DeleteIcon color="secondary" />
                      </IconButton>
                    </TableCell>
                 </TableRow>
                )
              })
              }
             </TableBody>
           </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      </Card>
  );
};

TaskTable.propTypes = {
  className: PropTypes.string,
  tasks: PropTypes.array.isRequired
};

export default TaskTable;
