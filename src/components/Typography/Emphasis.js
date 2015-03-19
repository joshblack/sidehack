import React from 'react';
import { css, rem } from '../../helpers';
import { colors, fonts, text } from './styles';

export const Emphasis = React.createClass({
  propTypes: {
    children: React.PropTypes.string.isRequired
  },

  getDefaultProps () {
    return {
      style: css`
        font-family: ${fonts.em};
        font-style: italic;
        font-size: ${text.size}rem;
        color: ${colors.paragraph};
      `
    };
  },

  render () {
    return (
      <em style={this.props.style}>{this.props.children}</em>
    );
  }
});
