import React from 'react';
import { Loader } from '../Loader';
import { css } from '../../helpers';
import from 'whatwg-fetch';

import from './PromoUser.scss';

export class PromoUser extends React.Component {
  constructor () {
    this.state = { loading: true, url: '' };
    this.color = rand();
  }

  componentDidMount() {
    fetch(`https://uifaces.com/api/v1/user/${this.props.user}`)
      .then((response) => response.json())
      .then((json) => {
        let { epic: url } = json.image_urls;
        this.setState({ loading: false, url: url });
        this.props.finishedLoading();
      });
  }

  render () {
    let width = Math.floor(window.innerWidth / 5),
        height = width,
        color = this.color,
        background = `rgb(${color}, ${color}, ${color})`;

    let content = this.state.loading
      ? <div style={{ width, height, background }} className="mock-tile" />
      : <img src={this.state.url}
             className="promo-user__img" />;

    return (
      <li className="promo-user">
        {content}
      </li>
    );
  }
};

function rand() {
  return 220 + Math.floor(20 * Math.random());
}
