import React from 'react';

import from './ProjectFeed.scss';

export class ProjectFeed extends React.Component {
  static propTypes = {
    id: React.PropTypes.number.isRequired
  }

  fetchFeed() {
    // uses this.props.id to fetch data
    return [
      'item #1',
      'item #2',
      'item #3'
    ];
  }

  render () {
    const FeedItems = this.fetchFeed().map((item, i) => {
      return (
        <li className="project-feed__list-item">
          {item}
        </li>
      );
    });

    return (
      <section className="project-feed">
        <header className="project-feed__header">Activity Feed</header>
        <ul className="project-feed__list">{FeedItems}</ul>
      </section>
    );
  }
}
