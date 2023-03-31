import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
  render() {
    // console.log(this.props)
    const {gameReducer} = this.props;
    return (
      <div className='pt-4 text-center'>
        <div className='display-3'>
            Your Bet: <span className='text-primary'>{gameReducer.valueOfBet ? "Dai" : "Siu"}</span>
        </div>
        <div className='display-3'>
            Total of your Wins: <span className='text-success'>{gameReducer.sumOfWin}</span>
        </div>
        <div className='display-3'>
            Total of your Plays: <span className='text-warning'>{gameReducer.sumOfPlay}</span>
        </div>
        <div className='display-3 mt-4'>
            <button className='btn btn-success play' onClick={() => {
              const action = {
                type: "PLAY_GAME"
              }
              this.props.dispatch(action);
            }}>Play game</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    gameReducer: state.gameReducer
})

export default connect(mapStateToProps)(Result)