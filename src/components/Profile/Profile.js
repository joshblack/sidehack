import React from 'react';

import { Header } from '../Header';
import { Banner } from '../Banner';
import { Menu } from '../Menu';
import { ProfileHeader } from './ProfileHeader';
import { ProfileSection } from './ProfileSection';

import from './Profile.scss';

export class Profile extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <div className="profile-container">
          <Menu/>
          <div className="profile">
            <ProfileHeader/>
            <ProfileSection/>
          </div>
        </div>
      </div>
    );
  }
}
