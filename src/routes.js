import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import { App } from './components/App';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';

// Developer Related
import { Icons } from './components/Icons';
import { Typography } from './components/Typography';

export default (
  <Route path="/" handler={App}>
    <Route name="dashboard" path="/dashboard" handler={Dashboard}/>
    <Route name="icons" path="/icons" handler={Icons}/>
    <Route name="typography" path="/typography" handler={Typography}/>
    <DefaultRoute handler={Home}/>
  </Route>
);
