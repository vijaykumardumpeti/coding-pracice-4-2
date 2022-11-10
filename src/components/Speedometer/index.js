// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelarate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onApplyBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="content-container">
        <h1 className="heading-1">SPEEDOMETER</h1>
        <img
          className="image"
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h1 className="heading-2">Speed is {speed}mph</h1>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            onClick={this.onAccelarate}
            className={`btn-style ${'button1'}`}
            type="button"
          >
            Accelerate
          </button>
          <button
            onClick={this.onApplyBrake}
            className={`btn-style ${'button2'}`}
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
