import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../assets/css/style.css'
import Dice from './Dice'
import Result from './Result'

class DiceGame extends Component {
  render() {
    return (
      <div className='bg-game'>
        <h2 className='text-center pt-4 display-1'>Sic Bo Game</h2>
        <Dice />
        <Result />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(DiceGame)