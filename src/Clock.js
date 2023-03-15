import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      timer: null
    }
  }

  componentDidMount() {
    let timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 10)

    this.setState({
      timer: timer
    })
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        <h1>{this.props.prefix} {this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Clock