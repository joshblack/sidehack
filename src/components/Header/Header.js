import React from 'react';
import Avatar from '../Avatar';
import Searchbar from '../Searchbar';
import { Logo } from '../Typography';
import { Link } from 'react-router';

import {
  base,
  listStyle,
  logoItemStyle,
  linkStyle,
  linkItemStyle,
  searchItemStyle,
  avatarItemStyle } from './styles';

const Header = React.createClass({
  render () {
    return (
      <header style={base}>
        <ul style={listStyle}>
          <li style={logoItemStyle}>
            <Logo />
          </li>
          <li style={linkItemStyle}>
            <Link to="/" style={linkStyle}>Discover</Link>
          </li>
          <li style={linkItemStyle}>
            <Link to="/" style={linkStyle}>Start</Link>
          </li>
          <li style={searchItemStyle}>
            <Searchbar/>
          </li>
          <li style={avatarItemStyle}>
            <Avatar/>
          </li>
        </ul>
      </header>
    );
  }
});

export default Header;
