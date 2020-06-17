import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {bindActionCreators} from 'redux';
import {connect,useDispatch} from 'react-redux';
import { findByAll } from '../../store/productReducer';
import { hideMessage } from '../../store/messageReducer';
import { ProductsToolbar, ProductCard } from './components';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const ProductList = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findByAll())
 },[dispatch])

  const {products} = props;

  return (
    <div className={classes.root}>
      <ProductsToolbar find={props.findByAll} />
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {products.map((product, index)  => (
            <Grid
              item
              key={index}
              lg={4}
              md={6}
              xs={12}
            >
             
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.pagination}>
        <Typography variant="caption">1-6 of 20</Typography>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products.products,
  messages: state.messages.message,
  openDialog: state.messages.showMessage
})
const mapDispatchProps = dispatch => bindActionCreators({findByAll, hideMessage},dispatch)


export default connect(mapStateToProps,mapDispatchProps) (ProductList);
