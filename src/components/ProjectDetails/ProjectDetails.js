import React from 'react';

import from './ProjectDetails.scss';

export class ProjectDetails extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    startDate: React.PropTypes.string,
    endDate: React.PropTypes.string
  }

  constructor() {
    this.formatDateRange.bind(this);
  }

  formatDateRange(start, end) {
    return `${start} - ${end}`;
  }

  render () {
    return (
      <div className="project-details">
        <h3 className="project-details__name">{this.props.name}</h3>
        <p className="project-details__date">
          {this.formatDateRange(this.props.startDate, this.props.endDate)}
        </p>
      </div>
    );
  }
}
