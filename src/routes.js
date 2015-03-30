import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import { App } from './components/App';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { Profile } from './components/Profile';

// Developer Related
import { Typography } from './components/Typography';

export default (
  <Route path="/" handler={App}>
    <Route name="dashboard" path="/dashboard" handler={Dashboard}/>
    <Route name="profile" path="/profile" handler={Profile}/>

    <Route name="typography" path="/typography" handler={Typography}/>
    <DefaultRoute handler={Home}/>
  </Route>
);
