import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dice extends Component {
  // This function helps to handle button "Dai" - "Siu"
  handleButton = (val) => {
    const action = {
      type: "BET",
      payload: val,
    };
    this.props.dispatch(action);
  };

  // Calculate points of dice
  sumOfDice = () => {
    let {arrDice} = this.props; 
    console.log("arrDice", arrDice);
    let sumOfPoints = 0; 
    for (let dice of arrDice) {
        sumOfPoints += dice.point;
    }
    return `${sumOfPoints}`; 
  }

  render() {
    // console.log(this.props);
    const { arrDice } = this.props;
    console.log(arrDice)
    return (
      <div className="container">
        <div className="row text-center pt-4">
          <div className="col-4">
            <button
              className="btn btn-danger"
              onClick={() => {
                this.handleButton(true);
              }}
            >
              <div className="display-4 p-5">Dai</div>
            </button>
          </div>
          <div className="col-4">
            <div>
              {/* <img src='./image/1.png' alt='...' width={50} height={50} />
                    <img src='./image/1.png' alt='...' width={50} height={50} />
                    <img src='./image/1.png' alt='...' width={50} height={50} /> */}
              {arrDice.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item.img}
                    alt="..."
                    width={50}
                    height={50}
                  />
                );
              })}
            </div>
            <div className="display-6 mt-3">
              Total: <span className="text-primary">{this.sumOfDice()}</span>
            </div>
          </div>
          <div className="col-4">
            <button
              className="btn btn-danger"
              onClick={() => {
                this.handleButton(false);
              }}
            >
              <div className="display-4 p-5">Siu</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    arrDice: state.gameReducer.arrDice 
})

export default connect(mapStateToProps)(Dice)