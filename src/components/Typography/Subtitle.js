import React from 'react';
import { assign, css, rem } from '../../helpers';
import { colors, text } from '../base';

const { font, color } = text.get('title');

let style = css`
  font-family: ${font};
  font-weight: 200;
  font-size: 30px;
  color: ${color};
  line-height: ${rem(41)}rem;
`;

export class Subtitle extends React.Component {
  render () {
    return (
      <h2 style={assign(style, this.props.style)}>
        {this.props.children}
      </h2>
    );
  }
};

Subtitle.propTypes = {
  style: React.PropTypes.object
};
