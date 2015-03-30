import React from 'react';

export class Image extends React.Component {
  static propTypes = {
    alt: React.PropTypes.string.isRequired,
    src: React.PropTypes.string.isRequired,
    height: React.PropTypes.number,
    width: React.PropTypes.number,
    style: React.PropTypes.object
  }

  render () {
    return (
      <img alt={this.props.alt}
           src={this.props.src}
           height={this.props.height}
           width={this.props.width}
           style={this.props.style}
      />
    );
  }
}
