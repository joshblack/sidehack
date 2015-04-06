import React from 'react';
import sx from 'classnames';

import from './Button.scss';

let style = `
  background: white;
  border: 1px solid #ADADAD;
  border-radius: 8px;
  padding: 12px 25px;
  margin: 25px;
  font-size: 16px;
  color: #8B8A8A;
  font-weight: normal;
`;

export class Button extends React.Component {

  static defaultProps = {
      'className': ''
  }

  render () {
    return (
      <button className={sx('btn', this.props.className)}>
        {this.props.children}
      </button>
    );
  }
}
