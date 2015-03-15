import React from 'react';

const Strong = React.createClass({
  propTypes: {
    'fontFamily': React.PropTypes.string.isRequired,
    'fontSize': React.PropTypes.number.isRequired,
    'color': React.PropTypes.string.isRequired
  },

  render () {
    let style = {
      'color': this.props.color,
      'fontFamily': this.props.fontFamily,
      'fontSize': this.props.fontSize,
      'fontWeight': 'bold'
    };

    return (
      <strong style={style}>{this.props.children}</strong>
    );
  }
});

export default Strong;
