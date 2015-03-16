import React from 'react';
import { css, rem } from '../../helpers';
import { colors, fonts, text } from './styles';

export const Strong = React.createClass({
  propTypes: {
    children: React.PropTypes.string.isRequired
  },

  getDefaultProps () {
    return {
      style: css`
        font-family: ${fonts.body};
        font-weight: bold;
        font-size: ${text.size}rem;
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
