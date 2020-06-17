import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button,
        TextField,
        Grid, 
        Select, 
        MenuItem,
        FormControl, 
        InputLabel
      } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const TaskToolbar = props => {

  const { className, ...rest } = props;
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const classes = useStyles();

  const submitValue = (event) => {
    
   const task = {
      descricao: description, 
      categoria: category
    }
    props.save(task)
    setDescription('')
    setCategory('')
  }

  const findByAll = (event) => {
    event.preventDefault();
    props.findByAll()
  }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
      </div>
      <div className={classes.row}>
        <Grid container>
          <Grid item md={6}>
              <TextField
                className={classes.searchInput}
                placeholder="Descricao da Tafera"
                fullWidth
                value={description}
                onChange={e => setDescription(e.target.value)}
                label="Descrição" />
          </Grid>
          <Grid item md={4}>
            <FormControl fullWidth>
              <InputLabel>Categoria</InputLabel>
              <Select onChange={e => setCategory(e.target.value)} value={category}>
                <MenuItem value="">Selecione...</MenuItem>
                <MenuItem value="ESTUDOS">Estudos</MenuItem>
                <MenuItem value="TRABALHO">Trabalho</MenuItem>
                <MenuItem value="OUTROS">Outros</MenuItem>
              </Select>
            </FormControl>
            </Grid>
           <Grid item md={2}>
            <Button variant="contained"  color="secondary" onClick={submitValue}>Adicionar</Button>
            <Button variant="contained"  color="secondary" onClick={findByAll}>Pesquisar</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

TaskToolbar.propTypes = {
  className: PropTypes.string
};

export default TaskToolbar;
