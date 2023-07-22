// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mCount: 0, bCount: 0}

  onMango = () => {
    this.setState(prevState => ({mCount: prevState.mCount + 1}))
  }

  onBanana = () => {
    let {bananasFinished} = this.state
    this.setState(prevState => {
      console.log(`Bananas finished un-till is ${prevState.bCount}`)
      bananasFinished = {bCount: prevState.bCount + 1}
      return bananasFinished
    })
  }

  render() {
    const {mCount, bCount} = this.state
    return (
      <div className="container">
        <div className="items-container">
          <h1>
            Bob ate <span className="fruit-count">{mCount}</span> mangoes{' '}
            <span className="fruit-count">{bCount}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="mango-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button type="button" className="button" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div className="banana-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button type="button" className="button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
