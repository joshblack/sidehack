import React from 'react';
import { css } from '../helpers';
import { fonts, text } from './Typography';

let buttonStyle = css`
  background: white;
  border: 1px solid #ADADAD;
  border-radius: 8px;
  padding: 12px 25px;
  margin: 25px;
  font-family: ${fonts.button};
  font-size: 16px;
  color: #8B8A8A;
  font-weight: normal;
`;

export const Button = React.createClass({
  propTypes: {
    'children': React.PropTypes.string,
    'action': React.PropTypes.func,
    'style': React.PropTypes.object
  },

  getDefaultProps () {
    return {
      'children': 'Button',
      'action': () => {},
      'style': buttonStyle
    }
  },

  render () {
    let style = Object.assign({}, buttonStyle, this.props.style);

    return (
      <button style={style}
              onClick={this.props.action}
      >
        {this.props.children}
      </button>
    );
  }
});
