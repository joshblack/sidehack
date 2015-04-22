import React from 'react';
import { Link } from 'react-router';
import { ProjectImage } from '../ProjectImage';

import from './SearchDropdown.scss';

export class SearchDropdown extends React.Component {

  static propTypes = {
    query: React.PropTypes.string.isRequired
  }

  constructor () {
    this.state = { results: null };

    this.fetchResults = this.fetchResults.bind(this);
  }

  fetchResults (query) {
    // fetch(`/search?query=${query}`)
    setTimeout(() => {
      let results = [
        { id: 1, name: 'Hello Ruby', url: '/', description: "Teaching children the magic of programming.", avatar: 'http://www.helloruby.com/assets/header-home-c9616f3bf5cf396ff04892be05eaa8b5.jpg' },
        { id: 2, name: 'React', url: '/', description: "A JavaScript Library for building User Interfaces", avatar: 'https://facebook.github.io/react/img/logo.svg' },
        { id: 3, name: 'Flux', url: '/', description: "An Application Architecture for React", avatar: 'http://facebook.github.io/flux/img/flux_logo.svg' },
        { id: 4, name: 'Test #4', url: '/', description: "This is a description.", avatar: 'http://placehold.it/150x150' }
      ];

      this.setState({ results });
    }, 2000);
  }

  componentDidMount () {
    this.fetchResults(this.props.query);
  }

  render () {

    let content =
      this.state.results || <li className="search-dropdown__result"><Link to="/">Loading...</Link></li>;

    return (
      <div className="search-dropdown">
        <ul className="search-dropdown__results">
          {
            !this.state.results
            ? <li className="search-dropdown--loading" />
            : this.state.results.map((result) => {
              return (
                <Link key={result.id} to={result.url} className="search-dropdown__result-link">
                  <li className="search-dropdown__result">
                    <ProjectImage
                      src={result.avatar}
                      alt="Project Avatar"
                      width={150}
                      height={150}
                    />
                    <div className="search-dropdown__result-info">
                      <h3 className="search-dropdown__result-title">
                        {result.name}
                      </h3>
                      <p className="search-dropdown__result-desc">
                        {result.description}
                      </p>
                    </div>
                  </li>
                </Link>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
