import React from 'react';

import from './ProfilePicture.scss';

export class ProfilePicture extends React.Component {
  constructor() {
    this.state = {
      loading: true,
      avatarURI: ''
    }
  }

  componentDidMount() {
    fetch('https://uifaces.com/api/v1/user/lady_katherine')
      .then((response) => response.json())
      .then((json) => {
        let { epic: url } = json.image_urls;

        this.setState({
          loading: false,
          avatarURI: url
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render () {
    return this.state.loading
      ? <div className="profile-picture" />
      : <img className="profile-picture" src={this.state.avatarURI} />;
  }
}
