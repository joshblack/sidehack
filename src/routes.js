import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import { App } from './components/App';
import { Auth } from './components/Auth';
import { Dashboard } from './components/Dashboard';
import { Feed } from './components/Feed';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { Project } from './components/Project';
import { ProjectForm } from './components/ProjectForm';
import { Tasks } from './components/Tasks';


export default (
  <Route path="/" handler={App}>

    <Route name="auth" path="auth" handler={Auth}>
      <Route name="dashboard" path="dashboard" handler={Dashboard} />

      <Route name="feed" path="feed" handler={Feed} />
      <Route name="tasks" path="tasks" handler={Tasks} />

      <Route name="new-project" path="projects/new" handler={ProjectForm} />
      <Route name="project" path="projects/:id" handler={Project} />
    </Route>

    <Route name="profile" path="/user/:userId/" handler={Profile} />
    <DefaultRoute handler={Home}/>
  </Route>
)
