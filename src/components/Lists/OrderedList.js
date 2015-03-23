import React from 'react';

export class OrderedList extends React.Component {
  render () {
    return (
      <ol>{this.props.children}</ol>
    );
  }
}
