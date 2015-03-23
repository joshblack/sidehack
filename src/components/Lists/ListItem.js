import React from 'react';
import { assign, css, rem } from '../../helpers';
import { text } from '../base';

const { font, color } = text.get('body');

const style = css`
  font-family: ${font};
  font-size: 16px;
  line-height: ${rem(23)}rem;
  color: ${color};
`;

export class ListItem extends React.Component {
  render () {
    return (
      <li style={assign(style, this.props.style)}>
        {this.props.children}
      </li>
    );
  }
}

ListItem.propTypes = {
  children: React.PropTypes.string,
  style: React.PropTypes.object
};
