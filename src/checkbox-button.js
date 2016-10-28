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
  input: {},
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
    const { label, type, input, checked, className, value, id, bootstrap } = this.props

    const html = (
      <label
        className={`cnr-as-button ${(input.checked || checked) ? 'checked' : ''} ${className}`}
        htmlFor={id}
        role="button">

        <input
          type={type}
          onChange={input.onChange || this.handleOnChange}
          value={input.value || value}
          checked={input.checked || checked}
          {...input}
          id={id}
        />
        {label}
      </label>
    )

    if(bootstrap) {
      return <div className="btn-group">{html}</div>
    }

    return html
  }
}

CheckboxButton.propTypes = propTypes
CheckboxButton.defaultProps = defaultProps

export default CheckboxButton
