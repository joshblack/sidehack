import React from 'react';
import moment from 'moment';
import { FeedListItem } from '../FeedListItem';
import from './FeedList.scss';

const activity = {
    type: 'comment',
    'user': { name: 'Josh Black' },
    'project_id': 1,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    time: '2 hours ago'
  };

const items = Array(...Array(7)).map(() => activity);

export class FeedList extends React.Component {

  static contextTypes = {
    user: React.PropTypes.object
  }

  render () {
    const Items = items.map((item, i) => {
      return <FeedListItem key={i} activity={item} />
    });

    return (
      <section className="feed-list">
        <header className="feed-list__header">
          <h1 className="feed-list__header-title">Feed</h1>
        </header>
        {Items}
      </section>
    );
  }
}
