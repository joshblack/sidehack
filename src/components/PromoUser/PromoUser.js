import React from 'react';
import { Loader } from '../Loader';
import { css } from '../../helpers';
import from 'whatwg-fetch';

import from './PromoUser.scss';

export const PromoUser = React.createClass({
  getInitialState() {
    return {
      'loading': true,
      'url': ''
    }
  },

  getDefaultProps() {
    return {
      styles: {
        'image': css`
          width: 100%;
          height: 100%;
        `,
        'item': css`
          display: flex;
          justify-content: center;
          align-items: center;
          list-style: none;
          width: 240px;
          height: 240px;
          transition: 0.3s all;
        `
      }
    }
  },

  componentDidMount() {
    fetch(`https://uifaces.com/api/v1/user/${this.props.user}`)
      .then((response) => response.json())
      .then((json) => {
        let { epic: url } = json.image_urls;
        if (this.isMounted()) {
          this.setState({ loading: false, url: url });
        }
      });
  },

  render () {
    let content = this.state.loading
      ? <Loader/>
      : <img src={this.state.url}
             className="promo-user__img" />;

    return (
      <li className="promo-user">
        {content}
      </li>
    );
  }
});
