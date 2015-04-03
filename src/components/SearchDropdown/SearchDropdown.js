import React from 'react';

import from './SearchDropdown.scss';

export class SearchDropdown extends React.Component {
  constructor () {
    this.state = { loading: true };

    this.fetchResults = this.fetchResults.bind(this);
  }

  fetchResults (query) {
    return (
      <ul className="search-dropdown__results">
        <li className="search-dropdown__result">hi</li>
        <li className="search-dropdown__result">hi</li>
        <li className="search-dropdown__result">hi</li>
        <li className="search-dropdown__result">hi</li>
        <li className="search-dropdown__result">hi</li>
        <li className="search-dropdown__result">hi</li>
      </ul>
    );
  }

  render () {

    return this.props.query
      ? <div className="search-dropdown">{this.fetchResults(this.props.query)}</div>
      : <div></div>;
  }
}
