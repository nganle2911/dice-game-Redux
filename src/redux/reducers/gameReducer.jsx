const stateDefault = {
    arrDice: [
        {img: "./image/1.png", point: 1},
        {img: "./image/1.png", point: 1},
        {img: "./image/1.png", point: 1}
    ],
    valueOfBet: true, //true = dai, false = siu
    sumOfPlay: 0,
    sumOfWin: 0
}

export const gameReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'BET': {
            // console.log(state) 
            // state.valueOfBet = action.payload;
            // return {...state};

            // * Immutability 
            return {
                ...state, //copy lại state  
                valueOfBet : action.payload //sau đó mới thay đổi state dựa trên state đã copied, chứ không được thay đổi state trực tiếp như cách trên được 
            }
        };

        case 'PLAY_GAME': {
            // ? When click on the button "play game" => dice will be changed randomly 
            let newArrDice = []; 
            for (let i = 1; i <= 3; i++) {
                // Create a random number run from 1-6 
                let randomNum = Math.floor(Math.random() * 5) + 1;

                // Assign randomNum for dice
                let randomDice = {
                    img: `/image/${randomNum}.png`,
                    point: randomNum
                }
                
                // Put assigned dice into newArrDice
                newArrDice.push(randomDice);
            }

            // ? After dice will be changed => update totalOfWins & totalOfPlays 
            // Update totalOfPlays after each click on button "play game"
            let totalOfPlay = state.sumOfPlay;
            totalOfPlay += 1; 
            
            /**
             * Calculate total of wins for player
             *  - If "Dai" & sumOfPoints > 11 -> win 
             *  - If "Siu" & sumOfPoints <= 11 -> win 
             */

            // Calculate sumOfPoints of three dice from newArrDice
            // console.log(newArrDice)
            let sumOfPoints = newArrDice.reduce((sum, dice) => {
                // console.log("sum", sum);
                // console.log("dice", dice.point)
                return sum + dice.point;
            }, 0);
            
            // Handle win
            let totalOfWin = state.sumOfWin;
            if ((state.valueOfBet && sumOfPoints > 11) || (!state.valueOfBet && sumOfPoints <= 11)) {
                totalOfWin += 1; 
            }
            
            return {
                ...state,
                arrDice: newArrDice, // Update state arrDice to newArrDice 
                sumOfPlay: totalOfPlay,
                sumOfWin: totalOfWin
            }
        }
    
        default:
            return state;
    }
}