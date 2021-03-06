import React from 'react';
import { RouteHandler } from 'react-router';
import API from '../../../lib/sidehack-client-api';
import from './Auth.scss';

export class Auth extends React.Component {
  constructor () {
    this.state = { loggedIn: false, user: {} };
  }

  static contextTypes = {
    router: React.PropTypes.func
  }

  static login = async function login() {
    const { user } = await API.get('me');

    return user;
  }

  async componentDidMount () {
    const { router } = this.context;
    try {
      const user = await Auth.login();

      setTimeout(() => {
        if (!user ) {
          router.transitionTo('/');
        }
        else {
          this.setState({ loggedIn: true, user });
        }
      }, 1000);
    }
    catch (e) {
      console.error(e);
    }
  }

  render () {
    if (this.state.loggedIn) {
      return <RouteHandler user={this.state.user} />;
    }
    else {
      return (
        <div className="auth-login">
          <div className="center">
            <div className="auth-loading" />
          </div>
        </div>
      );
    }
  }
}
