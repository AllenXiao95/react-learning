import React from 'react'

class ConditionComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPass: false
    }
  }

  // 切换状态
  toggle = () => {
    this.setState({
      isPass: !this.state.isPass
    })
  }

  // common element
  commonElement = () => {
    return (
      <div>Hello, World</div>
    )
  }

  // byeElement
  byeElement = () => {
    return (
      <div>Bye, World</div>
    )
  }

  // buttonElement
  buttonElement = () => {
    return (
      <button onClick={this.toggle}>Toggle</button>
    )
  }

  // if 方式
  render() {
    let element;
    if (this.state.isPass) {
      element = this.commonElement()
    } else {
      element = this.byeElement()
    }

    return (
      <div>
        {this.buttonElement()}
        {element}
      </div>
    )
  }

  // 三元表达式 方式
  // render() {
  //   return (
  //     <div>
  //       {this.buttonElement()}
  //       {this.state.isPass ? this.commonElement() : this.byeElement()}
  //     </div>
  //   )
  // }

  // && 方式
  // render() {
  //   return (
  //     <div>
  //       {this.buttonElement()}
  //       {this.state.isPass && this.commonElement()}
  //     </div>
  //   )
  // }
}

export default ConditionComponent;