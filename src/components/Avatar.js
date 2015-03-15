import React from 'react';

const Avatar = React.createClass({
  render () {
    let base = {
      'display': 'flex',
      'alignItems': 'center',
      'height': '100%',
      'marginRight': 25
    };

    let style = {
      'width': 35,
      'height': 35,
      'borderRadius': '100%'
    };

    return (
      <div style={base}>
        <img style={style} src="//www.gravatar.com/avatar/def8d17129bf0913c9f0f133acc0f631.png?large" />
      </div>
    );
  }
});

export default Avatar;
