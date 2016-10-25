import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { RadioButton, CheckboxButton } from '../index'

const CheckboxInputElement = {
  name: 'option-1'
}

const RadioInputElement = {
  name: 'simple-radio-example',
  options: [
    { label: 'Option 1', value: 'radio1' },
    { label: 'Option 2', value: 'radio2', checked: true },
    { label: 'Option 3', value: 'radio3' },
    { label: 'Option 4', value: 'radio4' }
  ]
}

class DemoPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      simpleCheckbox1: false,
      simpleCheckbox2: true
    }

    this.handleSimpleCheckboxChange1 = this.handleSimpleCheckboxChange1.bind(this)
    this.handleSimpleCheckboxChange2 = this.handleSimpleCheckboxChange2.bind(this)
  }

  handleSimpleCheckboxChange1(e, checked) {
    this.setState({ simpleCheckbox1: checked })
  }

  handleSimpleCheckboxChange2(e, checked) {
    this.setState({ simpleCheckbox2: checked })
  }

  render() {
    return (
      <div>
        <h1>Demo Page</h1>
        <h2>Simple Checkbox example</h2>
        <CheckboxButton
          input={CheckboxInputElement}
          onChange={this.handleSimpleCheckboxChange1}
          checked={this.state.simpleCheckbox1}
          label="Option 1"
        />
        <CheckboxButton
          input={CheckboxInputElement}
          onChange={this.handleSimpleCheckboxChange2}
          checked={this.state.simpleCheckbox2}
          label="Option 2"
        />

        <h2>Simple Radio example</h2>
        <RadioButton
          input={RadioInputElement}
        />

        <h2>Using Checkbox with redux-form</h2>
        <CheckboxButton
          input={CheckboxInputElement}
          checked={true}
          label="Option 1"
        />

        <h2>Using Radio with redux-form</h2>
        <CheckboxButton
          type="radio"
          input={CheckboxInputElement}
          checked={true}
          label="Option 1"
        />
      </div>
    )
  }
}

ReactDOM.render(React.createElement(DemoPage), document.querySelector('.main'))
