import React from 'react';
import { Image } from '../Image';
import API from '../../../lib/sidehack-client-api';
import from './Avatar.scss';

export class Avatar extends React.Component {
  constructor () {
    this.state = { loading: true, url: '' };
  }

  static contextTypes = {
    user: React.PropTypes.object.isRequired
  }

  static defaultProps = {
    placeholder: 'http://placehold.it/35x35'
  }

  static propTypes = {
    placeholder: React.PropTypes.string
  }

  async componentDidMount () {
    const { user } = this.context;
    const { url } = await API.get('users', user.id, 'picture');

    this.setState({ loading: false, url });
  }

  render () {
    const src = this.state.loading ? this.props.placeholder : this.state.url;

    return (
      <div className="avatar">
        <Image
          alt="User Profile Picture"
          src={src}
          height={35}
          width={35}
          classNames="avatar__img"
        />
      </div>
    );
  }
}
