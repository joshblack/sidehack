import React from 'react';
import { assign, css, rem } from '../../helpers';
import { text } from '../base';

const { color, font } = text.get('title');

const style = css`
  font-family: ${font};
  font-weight: bold;
  font-size: 20px;
  color: ${color};
  line-height: ${rem(27)}rem;
`;

export class SectionSubheading extends React.Component{
  render () {
    return (
      <h3 style={assign(style, this.props.style)}>
        {this.props.children}
      </h3>
    );
  }
}

SectionSubheading.propTypes = {
  style: React.PropTypes.object
}
