import React from 'react';
import { css } from '../helpers';

let container = css`
  margin-left: 25px;
`;

export class ProfileTitle extends React.Component {
  render () {
    return (
      <div style={container}>
        <h1>Elizabeth Rose</h1>
        <p>Aspiring Front-End Developer</p>
      </div>
    );
  }
};
