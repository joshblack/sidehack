import React from 'react';
import sx from 'classnames';
import from './Input.scss';

// TODO: Change color of underline element for meeting validation rule
// for type of input

export class Input extends React.Component {
  constructor () {
    this.state = { filled: false };

    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  static propTypes = {
    type: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired
  }

  handleOnFocus () {
    this.setState({ filled: true });
  }

  handleOnBlur (e) {
    if (!e.target.value) {
      this.setState({ filled: false });
    }
  }

  render () {
    let containerClasses = sx({
      'input': true,
      'input--hoshi': true,
      'input--filled': this.state.filled
    });

    return (
      <span className={containerClasses}>
        <input name={this.props.name}
               type={this.props.type}
               className="input__field input__field--hoshi"
               onFocus={this.handleOnFocus}
               onBlur={this.handleOnBlur}
        />
        <label htmlFor={this.props.name}
               className="input__label input__label--hoshi input__label--hoshi-color-2"
        >
          <span className="input__label-content input__label-content--hoshi">
            {this.props.label}
          </span>
        </label>
      </span>
    );
  }
}
