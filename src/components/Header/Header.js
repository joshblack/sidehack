import React from 'react';
import { Link } from 'react-router';

import { SearchDropdown } from '../SearchDropdown';
import { Avatar } from '../Avatar';
import { Search } from '../Search';
import { Logo } from '../Typography';

import from './Header.scss';

export class Header extends React.Component {
  constructor () {
    this.state = {
      trigger: false,
      query: null
    };

    this.queryUpdate = this.queryUpdate.bind(this);
  }

  static contextTypes = {
    user: React.PropTypes.object
  }

  static childContextTypes = {
    user: React.PropTypes.object
  }

  getChildContext () {
    return { user: this.context.user };
  }

  queryUpdate (trigger, query ) {
    this.setState({ trigger, query });
  }

  render () {
    let Dropdown = this.state.query
      ? <SearchDropdown query={this.state.query} />
      : '';

    return (
      <header className="site-header">
        <ul className="site-header__list">
          <li className="site-header__list-item site-header__list-item--logo">
            <Link to="/"><Logo /></Link>
          </li>
          <li className="site-header__list-item site-header__list-item--link">
            <Link to="/">Discover</Link>
          </li>
          <li className="site-header__list-item site-header__list-item--link">
            <Link to="new-project">Start</Link>
          </li>
          <li className="site-header__list-item site-header__list-item--search">
            <Search queryUpdate={this.queryUpdate} />
          </li>
          <li className="site-header__list-item">
            <Avatar />
          </li>
        </ul>
        {Dropdown}
      </header>
    );
  }
}
