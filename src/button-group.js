import React, { Component } from 'react'

class ButtonGroup extends Component {
  render() {
    return <div className="btn-group">{this.props.children}</div>
  }
}

export default ButtonGroup
