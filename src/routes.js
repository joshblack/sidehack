import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import { App } from './components/App';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { Profile } from './components/Profile';
import { Project } from './components/Project';
import { Auth } from './components/Auth';


export default (
  <Route path="/" handler={App}>

    <Route name="auth" path="auth" handler={Auth}>
      <Route name="dashboard" path="dashboard" handler={Dashboard} />
    </Route>

    <Route name="profile" path="/user/:userId/" handler={Profile} />

    <Route name="project" path="/project" handler={Project} />
    <DefaultRoute handler={Home}/>
  </Route>
)

// <Route name="dashboard" path="/user/:userId/dashboard" handler={Dashboard} />
