import React from 'react';
import { assign, css, rem } from '../../helpers';
import { text } from '../base';

const { color, font } = text.get('title');

const style = css`
  font-family: ${font};
  font-weight: bold;
  font-size: 24px;
  color: ${color};
  line-height: ${rem(32)}rem;
`;

export class SectionTitle extends React.Component{
  render () {
    return (
      <h3 style={assign(style, this.props.style)}>
        {this.props.children}
      </h3>
    );
  }
}

SectionTitle.propTypes = {
  style: React.PropTypes.object
}
