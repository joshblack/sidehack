import React from 'react';

import from './Search.scss';

export class Search extends React.Component {
  constructor() {
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    let { target: { value } } = e,
        trigger = !!value,
        query = value || null;

    this.props.queryUpdate(trigger, query);
  }

  render () {
    return (
      <div className="search-container">
        <input
          ref="search-input"
          className="search-input"
          placeholder="Search"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
