import React from 'react';

const Searchbar = React.createClass({
  render () {
    let base = {
      'display': 'inline-block',
      'height': '100%',
      'width': '100%',
      'borderLeft': '1px solid #D9D9DE',
      'borderRight': '1px solid #D9D9DE'
    };

    let inputStyle = {
      'height': '100%',
      'border': 'none',
      'paddingLeft': '50px',
      'fontFamily': 'DroidSans',
      'fontSize': 16,
      'color': '#AFAFAF'
    };

    return (
      <div style={base}>
        <input style={inputStyle} placeholder="Search" />
      </div>
    );
  }
});

export default Searchbar;
