import React from 'react';

import from './Icons.scss';

export class FeedIcon extends React.Component {
  render () {
    return (
      <span className={`${this.props.className} icon icon-feed`}/>
    );
  }
}

export class TasksIcon extends React.Component {
  render () {
    return (
      <span className={`${this.props.className} icon icon-tasks`}/>
    );
  }
}
