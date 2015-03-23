import { Component } from 'react';
import { css } from '../../helpers';

import { Logo } from './Logo';
import { Paragraph } from './Paragraph';
import { Emphasis } from './Emphasis';
import { Strong } from './Strong';

const container = css`
  width: 500px;
  margin: 100px auto;
`;

const logo = css`
  display: block;
  text-align: center;
  font-size: 48px;
`;

export class Typography extends Component {
  render() {
    return (
      <div style={container}>
        <Logo style={logo}>Sidehack Typography</Logo>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <Strong>eiusmod tempor</Strong> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse <Emphasis>cillum dolore</Emphasis> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Paragraph>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <Strong>eiusmod tempor</Strong> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse <Emphasis>cillum dolore</Emphasis> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Paragraph>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <Strong>eiusmod tempor</Strong> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse <Emphasis>cillum dolore</Emphasis> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Paragraph>
      </div>
    );
  }
}

export {
  Logo,
  Paragraph,
  Emphasis,
  Strong
};
