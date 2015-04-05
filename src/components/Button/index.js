import React from 'react';

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

  getDefaultProps () {
    return {
      'children': 'Button',
      'action': () => {}
    }
  }

  render () {
    return (
      <button className="btn--default">
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
