import React from 'react';
import { css, rem } from '../../helpers';
import { colors, fonts, text } from './styles';

export const Paragraph = React.createClass({
  getDefaultProps () {
    return {
      style: css`
        width: 500px;
        font-family: ${fonts.body};
        font-weight: normal;
        font-size: ${text.size}rem;
        color: ${colors.paragraph};
        line-height: ${rem(23)}rem;
      `
    };
  },

  render () {
    return (
        <p style={this.props.style}>{this.props.children}</p>
    );
  }
});
