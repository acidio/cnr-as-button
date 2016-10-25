import React, { Component } from 'react'
import './sass/main.scss'

const propTypes = {
  label: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  input: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.bool,
      React.PropTypes.Number
    ])
  }),
  checked: React.PropTypes.bool,
  onChange: React.PropTypes.func
}

const defaultProps = {
  type: 'checkbox',
  checked: false,
  input: {
    value: false
  },
  className: ''
}

class CheckboxButton extends Component {
  constructor(props) {
    super(props)

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(e) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(e, e.target.checked, e.target.value)
    }
  }

  render() {
    const { label, type, input, checked, className, value, id } = this.props

    return (
      <label
        className={`cnr-as-button ${checked ? 'checked' : ''} ${className}`}
        htmlFor={id}
        role="button">

        <input
          type={type}
          onChange={this.handleOnChange}
          {...input}
          id={id}
          value={input.value || value}
          checked={input.checked || checked}
        />
        {label}
      </label>
    )
  }
}

CheckboxButton.propTypes = propTypes
CheckboxButton.defaultProps = defaultProps

export default CheckboxButton
