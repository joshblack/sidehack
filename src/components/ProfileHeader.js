import React from 'react';
import { ProfilePicture } from './ProfilePicture';
import { ProfileTitle } from './ProfileTitle';

import { css } from '../helpers';

const container = css`
  background: #F04665;
  width: 100%;
  height: 150px;
`;

const section = css`
  position: relative;
  top: 50px;
  display: flex;
  justify-content: center;
`;

export class ProfileHeader extends React.Component {
  render () {
    return (
      <div style={container}>
        <section style={section}>
          <ProfilePicture/>
          <ProfileTitle/>
        </section>
      </div>
    );
  }
}
