import React from 'react';
import { css, rem } from '../../helpers';
import { colors, text } from '../base';

const { font, size } = text.get('em');
const color = colors.get('text');

let style = css`
  font-family: ${font};
  font-style: italic;
  font-size: ${size}rem;
  color: ${color};
`;

export class Emphasis extends React.Component {
  render () {
    return (
      <em style={Object.assign(style, this.props.style)}>
        {this.props.children}
      </em>
    );
  }
}

Emphasis.propTypes = {
  children: React.PropTypes.string.isRequired,
  style: React.PropTypes.object
}
