import React from 'react';

const Strong = React.createClass({
  propTypes: {
    fontSize: React.PropTypes.number
  },

  getDefaultProps () {
    return { fontSize: 16 };
  },

  render () {
    let style = {
      'fontFamily': 'DroidSans',
      'fontWeight': 'bold',
      'fontSize': this.props.fontSize
    };

    return (
      <strong style={style}>{this.props.children}</strong>
    );
  }
});

export default Strong;
