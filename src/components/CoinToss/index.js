// Write your code here

import {useState} from 'react'

import './index.css'

const CoinToss = () => {
  const [coinTossBtnCount, setCoinTossBtnCount] = useState(0)
  const [headsCount, setHeadsCount] = useState(0)
  const [tailsCount, setTailsCount] = useState(0)
  const [tossImage, setTossImage] = useState(true)

  const onClickBtn = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      setTossImage(true)
      setHeadsCount(headsCount + 1)
    } else {
      setTossImage(false)
      setTailsCount(tailsCount + 1)
    }
    setCoinTossBtnCount(coinTossBtnCount + 1)
  }

  const image = tossImage
    ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

  return (
    <div className="container">
      <div className="card">
        <h1 className="head">Coin Toss Game</h1>
        <p className="para">Heads (or) Tails</p>
        <img src={image} alt="toss result" className="image-coin" />
        <button type="button" onClick={onClickBtn} className="button">
          Toss Coin
        </button>
        <div className="result-bar">
          <p className="total">Total Tosses: {coinTossBtnCount}</p>
          <p className="total">Heads: {headsCount}</p>
          <p className="total">Tails: {tailsCount}</p>
        </div>
      </div>
    </div>
  )
}
export default CoinToss
