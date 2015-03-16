import React from 'react';
import Header from './Header';
import { css } from '../helpers';

export const App = React.createClass({
  render () {
    let baseStyles = css`
      width: 100%;
      height: 100%;
    `;

    return (
      <div style={baseStyles}>
        <Header/>
      </div>
    );
  }
});
