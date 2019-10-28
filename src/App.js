import React, { Component } from "react"
import "./App.css"

class button3 extends Component {
  state = {
    counter: 0,
    lik: "likes"
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 })
    this.setState({ lik: this.state.counter === 0 ? "like" : "likes" })
  }

  render() {
    return (
      <div className="click">
        <button onClick={this.handleClick} className="button1">
          {this.state.counter} {this.state.lik}
        </button>
      </div>
    )
  }
}

export default button3
