import React, { Component } from 'react';
import { css } from '../../helpers';
import { colors, text } from '../base';

const { font } = text.get('title');
const color = colors.get('text');

let style = css`
  display: inline-block;
  font-family: ${font};
  font-weight: 600;
  font-size: 24px;
  color: ${color};
`;

export class Logo extends Component {
  render () {
    return (
      <h1 style={Object.assign(style, this.props.style)}>
        <span>SIDE</span>
        <span style={{ color: '#6AEC7B' }}>HACK</span>
      </h1>
    );
  }
}

Logo.propTypes = {
  style: React.PropTypes.object
};
