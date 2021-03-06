import React from 'react';
import { assign, css, rem } from '../../helpers';
import { text } from '../base';

const { color, font } = text.get('body');

const style = css`
  font-family: ${font};
  font-weight: normal;
  font-size: 18px;
  color: ${color};
  line-height: ${rem(26)}rem;
`;

export class Intro extends React.Component{
  render () {
    return (
      <p style={assign(style, this.props.style)}>
        {this.props.children}
      </p>
    );
  }
}

Intro.propTypes = {
  children: React.PropTypes.string,
  style: React.PropTypes.object
}
