import React from 'react';
import { css, rem } from '../../helpers';
import { colors, fonts } from './styles';

export const Strong = React.createClass({
  propTypes: {
    children: React.PropTypes.string.isRequired
  },

  getDefaultProps () {
    return {
      style: css`
        font-family: ${fonts.body};
        font-weight: bold;
        font-size: ${rem(14)}rem;
        color: ${colors.paragraph};
      `
    }
  },

  render () {
    return (
      <strong style={this.props.style}>{this.props.children}</strong>
    );
  }
});
