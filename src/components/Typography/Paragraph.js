import React from 'react';
import { css, rem } from '../../helpers';
import { colors, fonts } from './styles';

export const Paragraph = React.createClass({
  getDefaultProps () {
    return {
      style: css`
        width: 500px;
        font-family: ${fonts.body};
        font-weight: normal;
        font-size: ${rem(14)}rem;
        color: ${colors.body};
        line-height: ${rem(23)}rem;
      `
    }
  },

  render () {
    return (
        <p style={this.props.style}>{this.props.children}</p>
    );
  }
});
