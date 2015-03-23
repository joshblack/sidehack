import React from 'react';
import { assign, css, rem } from '../../helpers';
import { colors, text } from '../base';

const { font, color } = text.get('title');

let style = css`
  font-family: ${font};
  font-weight: bold;
  font-size: 32px;
  color: ${color};
  line-height: ${rem(49)}rem;
`;

export class MainTitle extends React.Component {
  render () {
    return (
      <h1 style={assign(style, this.props.style)}>
        {this.props.children}
      </h1>
    );
  }
};

MainTitle.propTypes = {
  style: React.PropTypes.object
};
