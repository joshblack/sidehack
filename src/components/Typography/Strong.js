import React from 'react';
import { css, rem } from '../../helpers';
import { colors, text } from '../base';

const { font, size } = text.get('body');
const color = colors.get('text');

let style = css`
  font-family: ${font};
  font-weight: bold;
  font-size: ${size}rem;
  color: ${color};
`;

export class Strong extends React.Component {
  render () {
    return (
      <strong style={Object.assign(style, this.props.style)}>
        {this.props.children}
      </strong>
    );
  }
};

Strong.propTypes = {
  children: React.PropTypes.string.isRequired,
  style: React.PropTypes.object
};
