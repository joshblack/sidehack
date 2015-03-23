import React from 'react';
import { assign, css, rem } from '../../helpers';
import { text } from '../base';

let { color, font, size  } = text.get('quote');

const style = css`
  font-family: ${font};
  font-style: italic;
  font-size: ${size}rem;
  text-align: center;
  color: ${color};
  line-height: ${rem(34)}rem;
`;

export class Quote extends React.Component{
  render () {
    return (
      <blockquote style={assign(style, this.props.style)}>
        {this.props.children}
      </blockquote>
    );
  }
};

Quote.propTypes = {
  children: React.PropTypes.string,
  style: React.PropTypes.object
};
