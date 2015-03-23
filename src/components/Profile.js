import React from 'react';
import { Header } from './Header';
import { ProfileHeader } from './ProfileHeader';

export class Profile extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <ProfileHeader/>
      </div>
    );
  }
}
