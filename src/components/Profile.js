import React from 'react';
import { Header } from './Header';
import { Banner } from './Banner';
import { Menu } from './Menu';
import { ProfileHeader } from './ProfileHeader';
import { css } from '../helpers';

const layout = css`
  display: flex;
  justify-content: center;
`;

export class Profile extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <Banner/>
        <div style={layout}>
          <Menu/>
          <ProfileHeader/>
        </div>
      </div>
    );
  }
}
