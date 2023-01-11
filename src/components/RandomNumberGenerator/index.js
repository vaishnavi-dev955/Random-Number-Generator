import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="card1">
        <div className="card2">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the <br />
            range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Generate
          </button>
          <p className="count-style"> {count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
