import React from 'react';

import { Image } from '../Image';

import from './ProjectImage.scss';

export class ProjectImage extends React.Component {
  static propTypes = {
    alt: React.PropTypes.string,
    src: React.PropTypes.string,
    width: React.PropTypes.number,
    height: React.PropTypes.number
  }

  render () {
    return (
      <Image
        alt="Project Image"
        src={this.props.src}
        width={this.props.width}
        height={this.props.height}
        classNames="project-image"
      />
    );
  }
}
