import React, { Component } from 'react'
import ButtonGroup from './button-group'
import CheckboxButton from './checkbox-button'

const propTypes = {
  options: React.PropTypes.array.isRequired
}

class RadioButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: props.input.options
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e, checked, value) {
    this.setState(() => {
      let newState = []
      this.state.options.filter((option) => {
        option.checked = false
        if(option.value === value) {
          option.checked = true
        }
        newState.push(option)
      })
      return { options: newState }
    })
  }

  render() {
    const { name, input, ...props } = this.props

    const htmlOptions = input.options.map((option, index) => {
      return (
        <CheckboxButton
          key={`${name}-${index}`}
          type="radio"
          id={`${name}-${index}`}
          onChange={this.handleChange}
          checked={this.state.options[index].checked}
          {...props}
          name={name}
          value={option.value}
          label={option.label}
        />
      )
    })

    return <ButtonGroup>{htmlOptions}</ButtonGroup>
  }
}

RadioButton.propTypes = propTypes

export default RadioButton
