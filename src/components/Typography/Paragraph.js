import React from 'react';

const Paragraph = React.createClass({
  render () {
    let style = {
      'fontFamily': 'DroidSans',
      'fontWeight': 'normal',
      'fontSize': 16
    };

    return (
      <div>
        <p style={style}>{this.props.children}</p>
      </div>
    );
  }
});

export default Paragraph;
