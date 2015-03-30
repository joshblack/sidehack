import { Component } from 'react';
import { Avatar } from '../Avatar';
import { Search } from '../Search';
import { Logo } from '../Typography';
import { Link } from 'react-router';

import from './Header.scss';

export class Header extends Component{
  render () {
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
            <Link to="/">Start</Link>
          </li>
          <li className="site-header__list-item site-header__list-item--search">
            <Search/>
          </li>
          <li className="site-header__list-item">
            <Avatar url="//www.gravatar.com/avatar/def8d17129bf0913c9f0f133acc0f631.png?large" />
          </li>
        </ul>
      </header>
    );
  }
}
