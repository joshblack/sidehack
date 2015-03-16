import React from 'react';
import { css, rem } from '../../helpers';
import { colors, fonts } from './styles';

export const Emphasis = React.createClass({
  propTypes: {
    children: React.PropTypes.string.isRequired
  },

  getDefaultProps () {
    return {
      style: css`
        font-family: ${fonts.em};
        font-style: italic;
        font-size: ${rem(14)}rem;
        color: ${colors.body};
      `
    }
  },

  render () {
    return (
      <em style={this.props.style}>{this.props.children}</em>
    );
  }
});
