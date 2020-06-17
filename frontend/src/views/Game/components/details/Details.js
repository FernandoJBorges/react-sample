import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Divider,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    color: '#F44336',
    fontSize:20,
  }
}));

const Details = props => {
  const { className, idGame, save, selectNumber, ...rest } = props;

  const classes = useStyles();
  const history = useHistory();

  const cancel = (event) =>{
    event.preventDefault();
    history.push('/products');  
    props.selectNumber(0);
  }

  const submitValue = (event) => {
    event.preventDefault();
    let usr = JSON.parse(localStorage.getItem('users')) || [];
    const gameUser = {
      user_id: usr[0].id, 
      game_id: idGame,
      number: props.item
     }
     
     save(gameUser)
     history.push('/products');  
     selectNumber(0);
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form>
        <CardHeader
          subheader="Selecione um número"
          title="Jogar"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={6}
            wrap="wrap"
          >
            <Grid
              className={classes.item}
              item
              md={4}
              sm={6}
              xs={12}
            >
              <label className={classes.label}>
                {`Número: ${props.item}`}
              </label>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="outlined"
            onClick={submitValue}
            >
            Salvar
          </Button>
          <Button
            color="primary"
            variant="outlined"
            onClick={cancel}
          >
            Cancelar
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

Details.propTypes = {
  className: PropTypes.string
};

export default Details;
