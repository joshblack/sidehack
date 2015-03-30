import React from 'react';
import { css } from '../../helpers';

const size = '175px';

let dummy = css`
  background: #B1B1B2;
  width: ${size};
  height: ${size};
  border: 5px solid white;
`;

let img = css`
  background: #B1B1B2;
  width: ${size};
  height: ${size};
  border: 5px solid white;
`;

export class ProfilePicture extends React.Component {
  constructor() {
    this.state = { loading: true, avatarURI: '' }
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
      ? <div style={dummy} />
      : <img style={img} src={this.state.avatarURI} />;
  }
}
