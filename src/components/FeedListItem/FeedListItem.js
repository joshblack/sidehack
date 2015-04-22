import React from 'react';
import { Image } from '../Image';
import from './FeedListItem.scss'

export class FeedListItem extends React.Component {
  static propTypes = {
    activity: React.PropTypes.object
  }

  render () {
    const { activity } = this.props,
          { user } = activity;

    return (
      <article className="feed-item">
        <header className="feed-item__header">
          <Image
            src="http://placehold.it/50x50"
            alt="Activity User"
            width={50}
            height={50}
          />
          <section className="feed-item__header-title">
            <h3 className="feed-item__header-title__name">{user.name}</h3>
            <p className="feed-item__header-title__date">{activity.time}</p>
          </section>
        </header>
        <p><span className="feed-item__action">{user.name}</span> said the following...</p>
        <section className="feed-item__comment">
          <p className="feed-item__comment-text">{activity.content}</p>
        </section>
        <p>on Sidehack</p>
      </article>
    );
  }
}
