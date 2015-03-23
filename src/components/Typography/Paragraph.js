import React from 'react';
import { assign, css, rem } from '../../helpers';
import { colors, text } from '../base';

const { font, size } = text.get('body');
const lineHeight = text.get('lineHeight');
const color = colors.get('text');

let style = css`
  width: 500px;
  font-family: ${font};
  font-weight: normal;
  font-size: ${size}rem;
  color: ${color};
  line-height: ${lineHeight.rem};
`;

export class Paragraph extends React.Component {
  render () {
    return (
        <p style={assign(style, this.props.style)}>
          {this.props.children}
        </p>
    );
  }
}

Paragraph.propTypes = {
  style: React.PropTypes.object
}
