import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider,
} from '@material-ui/core';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

const useStyles = makeStyles(theme => ({
  root: {},
  imageContainer: {
    height: 64,
    width: 64,
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: 'red',
    marginRight: theme.spacing(1),
    fontSize:50
  }
}));

const ProductCard = props => {
  const { className, product, ...rest } = props;
  const classes = useStyles();

  function currencyFormat(num) {
    return 'R$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, 'R$1,')
 }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.imageContainer}>
          <img
            alt="Product"
            className={classes.image}
            src={product.image}
          />
        </div>
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          {product.name}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
         {product.title}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Grid
          container
          justify="space-between"
        >
          <Grid
            className={classes.statsItem}
            item
          >
             <Link className="back-link" to={{pathname: '/game', state: {idGame: product.id}}} >
                <SportsEsportsIcon className={classes.statsIcon} />
             </Link>
              <Typography
              display="inline"
              variant="body2"
            >
             Aposte Já apena  {currencyFormat(product.price)}
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
