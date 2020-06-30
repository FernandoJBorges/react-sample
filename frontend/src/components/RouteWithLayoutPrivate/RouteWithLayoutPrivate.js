import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Minimal as MinimalLayout } from './../../layouts';
import {SignIn as SignInView
} from './../../views';
const RouteWithLayoutPrivate = props => {
  const { layout: Layout, component: Component, ...rest } = props;
   return (
    <Route {...rest} render={matchProps => 
        localStorage.getItem('users')  ? (<Layout><Component {...matchProps} /></Layout>) :
       (<MinimalLayout><SignInView {...matchProps} /></MinimalLayout>)
      }
    />
  );
};

RouteWithLayoutPrivate.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default RouteWithLayoutPrivate;
