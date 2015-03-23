import React from 'react';

import { GitHubIcon } from './GitHubIcon';

export const Icons = React.createClass({
  render () {
    return (
      <div>
        <h1>Hello icons</h1>
        <GitHubIcon />
      </div>
    );
  }
});

export { GitHubIcon };
