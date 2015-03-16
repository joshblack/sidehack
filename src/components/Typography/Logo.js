import React from 'react';
import { css } from '../../helpers';
import { colors, fonts } from './styles';

export const Logo = React.createClass({
  getDefaultProps() {
    return {
      size: 24
    };
  },

  render () {
    let style = css`
      display: inline-block;
      font-family: ${fonts.title};
      font-weight: 600;
      font-size: ${this.props.size};
      color: ${colors.default};
    `;

    return (
      <h1 style={style}>
        <span>SIDE</span>
        <span style={{ color: '#6AEC7B' }}>HACK</span>
      </h1>
    );
  }
});
