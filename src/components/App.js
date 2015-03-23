import React from 'react';
import { RouteHandler } from 'react-router';
import { Home } from './Home';
import { css } from '../helpers';

let style = css`
    width: 100%;
    height: 100%;
`;

export const App = React.createClass({
  render () {
    return (
      <div style={style}>
        <RouteHandler/>
      </div>
    );
  }
});
