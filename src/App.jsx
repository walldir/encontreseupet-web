import React from 'react';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";

// Pages
import Home from './containers/Home/Home';
import PetsList from './containers/Pets/List/PetsList';
import PetsDetails from './containers/Pets/Details/PetDetails';
import ScrollToTop from 'react-router-scroll-top';

// Global modals
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';

export const history = require('history').createBrowserHistory();

export function Application() {

  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/pets' exact component={PetsList} />
        <Route path='/pets/:id' exact component={PetsDetails} />
      </Switch>
      <Login />
      <Register />
      <ScrollToTop />
    </Router>
  );
}