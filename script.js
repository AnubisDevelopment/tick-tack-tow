// 1,2,3
// 4,5,6
// 7,8,9


//Define players
const players = (function(){
    let players = {
        player1: 'X',
        player2: 'O'
    }
    return players
})();


//Define gameboard
const board = (function(){
    const rows = 3;
    const columns = 3;
    const array2D = [];
    for (let i = 0; i < rows; i++){
        array2D[i] = [];
        for (let j = 0; j < columns; j++){
            array2D[i][j] = i * columns + j + 1;
        }
    }
    return {array2D}
})();


//console.log(board.array2D)
//Play Round
//define var turn = 1
//define currentPlayer = players.player1
//type number in console to pick index
//change number of index to currentPlayer
//call switch turn which switches player
//depending on function call if/else based on turn num.
let flatArr = board.array2D
let firstOne = flatArr[0][0]
    let secondOne = flatArr[1][0]
    let thirdOne = flatArr[2][0]
const win = (function (){
    
      function check (){
        for(let i = 0; i < 3; i++){
            if(flatArr[i][0] === flatArr[i][1] && flatArr[i][1] === flatArr[i][2] && 
               typeof flatArr[i][0] === 'string'){
                console.log(`${flatArr[i][0]} wins!`);
                return true;
            }
        }
        for(let j = 0; j < 3; j++){
            if(flatArr[0][j] === flatArr[1][j] && flatArr[1][j] === flatArr[2][j]
                && typeof flatArr[0][j] === 'string'){
                    console.log(`${flatArr[0][j]} wins!`)
                    return true
                }
        }
        
        if(flatArr[0][0] === flatArr[1][1] && flatArr[1][1] === flatArr[2][2]
            && typeof flatArr[0][0] === 'string'){
                console.log(`${flatArr[0][0]} wins!`)
                return true
            }

        if(flatArr[2][0] === flatArr[1][1] && flatArr[1][1] === flatArr[0][2]
             && typeof flatArr[2][0] === 'string'){
                console.log(`${flatArr[2][0]} wins!`)
                return true
            }
        
        return false
        //console.log(flatArr)
  } return {check}
  })();
  

//Play A Turn Logic
const playRound = (function(){
    //Switch Turn
    let currentPlayer = players.player1
    function switchTurn (){
        currentPlayer === players.player1? currentPlayer = players.player2: currentPlayer = players.player1
    }
    //Play Turn
    function play (input){
        for (let i = 0; i < flatArr.length; i++){
            for(let j = 0; j < flatArr[i].length; j++){
                if (flatArr[i][j] === input){
                    flatArr[i].splice(j,1,currentPlayer)
                    if(win.check()) return; // Stop if someone wins
                    switchTurn()
                    return;
                    
                }
            } 
        }
    } 
    return {play}
})();
playRound.play(1)
playRound.play(2)
playRound.play(5)
playRound.play(6)
playRound.play(9)

console.log(board.array2D)
console.log(flatArr)
//flatten array first then worry about chaning
//index to 'X' or 'O'

/*
function switchTurn (){
    playRound.currentPlayer === players.player1? playRound.currentPlayer = players.player2: playRound.currentPlayer = players.player1
}
*/
//to-do:
/* DONE-might need to rewrite program to work with flat array
instead of matrix. From flat array, css can make tictactoe
format. THEN WIN CONDITIONS DONT WORK
1,2,3,4,5,6,7,8,9

new idea 6/28:
DONE -im having trouble accessing the value through that would
change to an x or 0 through console logs since the input
would be easier typed through an index rather than finding
through a value. Workaround is clicking with mouse on dom
element which is linked to a specific index which would
then update the array to x or 0.

7/4
DONE-Would like to figure out how to switch between players x
and O when called through the play function.


*/







//Render Screen


//Win Condition Check
//if all indices of array 0, 1, or 2 (rows)
//equal x or o, stop game, current player equals winner.
//loop through array for all 0th indices of each array, if same current player equals winner
//loop through array for all 1st indices of each array, if same current player equals winner
//loop through array for all 2nd indices of each array, if same current player equals winner
//else return 

/*
const win = (function (){
    function check (){
        for (let i = 0; i < flatArr.length; i++){
            for(let j = 0; j < flatArr[i].length; j++){
                if (flatArr[i][0] === "x"){
                    console.log('done x wins')
                } 
            } 
    }
} return {check}
})();
*/
//Click Events

