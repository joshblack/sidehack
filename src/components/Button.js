import React from 'react';
import { css } from '../helpers';
import { colors, text } from './base';

const { font } = text.get('button');

let style = css`
  background: white;
  border: 1px solid #ADADAD;
  border-radius: 8px;
  padding: 12px 25px;
  margin: 25px;
  font-family: ${font};
  font-size: 16px;
  color: #8B8A8A;
  font-weight: normal;
`;

export class Button extends React.Component {

  getDefaultProps () {
    return {
      'children': 'Button',
      'action': () => {},
      'style': style
    }
  }

  render () {
    return (
      <button style={Object.assign(style, this.props.style)}
              onClick={this.props.action}
      >
        {this.props.children}
      </button>
    );
  }
};

Button.propTypes = {
  'children': React.PropTypes.string,
  'action': React.PropTypes.func,
  'style': React.PropTypes.object
};
