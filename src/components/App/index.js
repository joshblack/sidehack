import React from 'react';
import { RouteHandler } from 'react-router';
import from './app.css';
import from './fonts.css';

export const App = React.createClass({
  render () {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
});
