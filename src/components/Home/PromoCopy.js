import React from 'react';
import { css } from '../../helpers';

export const PromoCopy = React.createClass({
  getDefaultProps () {
    return {
      style: css`
        font-family: 'DroidSans';
        font-weight: normal;
        font-size: 18px;
        color: #7F7F7F;
        text-align: center;
      `
    }
  },

  render () {
    return (
      <div style={css`width: 415px;`}>
        <p style={this.props.style}>
          For new programmers looking to start their careers by building
          products they believe in.
        </p>
      </div>
    );
  }
});
