import React from 'react';
import { BrowserRouter, Switch, Redirect , Route} from 'react-router-dom';

import { RouteWithLayout, RouteWithLayoutPrivate } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  ProductList as ProductListView,
  UserList as UserListView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
  Game as GameView,
  MyGames as MyGamesView
} from './views';

const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Redirect
        exact
        from="/"
        to="/products"
      />
      
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />

      <RouteWithLayoutPrivate
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
       <RouteWithLayoutPrivate
        component={MyGamesView}
        exact
        layout={MainLayout}
        path="/myGames"
      />
      <RouteWithLayoutPrivate
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayoutPrivate
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayoutPrivate
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayoutPrivate
        component={SettingsView}
        exact
        layout={MinimalLayout}
        path="/settings"
      />
    
       <RouteWithLayoutPrivate
        component={GameView}
        exact
        layout={MinimalLayout}
        path="/game"
      />
     <RouteWithLayoutPrivate
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
    </BrowserRouter>
  );
};

export default Routes;
