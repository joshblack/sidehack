import React from 'react';
import { RouteHandler } from 'react-router';
import from './app.scss';
import from './fonts.scss';

export const App = React.createClass({
  render () {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
});
