import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
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
  },
  cellDelete: {
    width: 10
  }
}));

const MyGamesTable = props => {
  const { className, confirmDeleteItem, myGames, ...rest } = props;
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
                  <TableCell>Jogo</TableCell>
                  <TableCell>Numero</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {myGames.map(myGame => {
                return(
                  <TableRow key={myGame.id}>
                      <TableCell>{myGame.game_id}</TableCell>
                      <TableCell>{myGame.number}</TableCell>
                      <TableCell className={classes.cellDelete}>
                        <IconButton onClick={e => props.confirmDeleteItem(myGame.id)} color="secondary">
                            <DeleteIcon color="primary" />
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

MyGamesTable.propTypes = {
  className: PropTypes.string,
  myGames: PropTypes.array.isRequired
};

export default MyGamesTable;
