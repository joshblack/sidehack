import React from 'react';
import { Header } from './Header';
import { css } from '../helpers';

let style = css`
  width: 100%;
  height: 100%;
`;

export const Dashboard = React.createClass({
  render () {
    return (
      <div style={style}>
        <Header/>
        <h1>Hello from Dashboard</h1>
      </div>
    );
  }
});
