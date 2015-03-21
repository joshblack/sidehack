import React from 'react';
import { css } from '../helpers';

export const Dashboard = React.createClass({
  getDefaultProps () {
    return {
      style: css`
        width: 100%;
        height: 100%;
      `
    };
  },

  render () {
    return (
      <div style={this.props.style}>
        <Header/>
        <h1>Hello from Dashboard</h1>
      </div>
    );
  }
});
