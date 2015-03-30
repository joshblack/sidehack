import React from 'react';
import from './Search.scss';

export class Search extends React.Component {
  render () {
    return (
      <div className="search--container">
        <input className="search--input" placeholder="Search" />
      </div>
    );
  }
}
