import React from 'react';

export class UnorderedList extends React.Component {
  render () {
    return (
      <ul>{this.props.children}</ul>
    );
  }
}
