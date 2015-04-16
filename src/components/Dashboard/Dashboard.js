import React from 'react';
import { Header } from '../Header';
import { Menu } from '../Menu';

export class Dashboard extends React.Component {

  static contextTypes = {
    router: React.PropTypes.func
  }

  static childContextTypes = {
    user: React.PropTypes.object
  }

  getChildContext () {
    return { user: this.props.user };
  }

  render () {
    const { user } = this.props;

    return (
      <div>
        <Header />

        <section>
          <h1>Hello from Dashboard!</h1>
          <p>The current user id is: {user.id}</p>
          <Menu />
        </section>
      </div>
    );
  }
}
