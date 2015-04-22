import React from 'react';
import { Header } from '../Header';
import { Menu } from '../Menu';
import { FeedList } from '../FeedList';
import from './Feed.scss';

export class Feed extends React.Component {

  static childContextTypes = {
    user: React.PropTypes.object
  }

  getChildContext () {
    return { user: this.props.user };
  }

  render () {
    return (
      <section>
        <Header />
        <section className="feed-layout">
          <Menu/>
          <FeedList/>
        </section>
      </section>
    );
  }
}
