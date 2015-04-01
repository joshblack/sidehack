import React from 'react';

import { Tag } from '../Tag';

import from './TagList.scss';

export class TagList extends React.Component {
  render () {
    const Tags = this.props.tags.map((tag, i) => {
      return <Tag className="tag-list__item" key={i} title={tag} />;
    });

    return (
      <ul className="tag-list">{Tags}</ul>
    );
  }
}
