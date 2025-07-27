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

//Unncessary array mutation
let flatArr = board.array2D

//Board display and dom manipulation
const displayBoard = (function(){
const myDiv = document.querySelector('.main-div')

function update(){
    myDiv.replaceChildren()
for (let i = 0; i < flatArr.length; i++){
    for (let j in flatArr[i]){
        const content = document.createElement('button')
        content.textContent = flatArr[i][j]
        content.addEventListener('click', function(){
            playRound.play(flatArr[i][j])
            console.log(flatArr)
        })
        myDiv.appendChild(content)
    } 
    }
} return {update}
})();
displayBoard.update()


//Win conditions
const win = (function (){
    const message = document.createElement('h1')
    const winDiv = document.querySelector('.win-div')

      function check (){
        //Check rows
        for(let i = 0; i < 3; i++){
            if(flatArr[i][0] === flatArr[i][1] && flatArr[i][1] === flatArr[i][2] && 
               typeof flatArr[i][0] === 'string'){
                message.textContent = `${flatArr[i][0]} wins!`
                winDiv.append(message)
                return true;
            }
        }
        //Check columns
        for(let j = 0; j < 3; j++){
            if(flatArr[0][j] === flatArr[1][j] && flatArr[1][j] === flatArr[2][j]
                && typeof flatArr[0][j] === 'string'){
                    message.textContent = `${flatArr[0][j]} wins!` 
                    winDiv.append(message)
                    return true
                }
        }
        //Check diagonal
        if(flatArr[0][0] === flatArr[1][1] && flatArr[1][1] === flatArr[2][2]
            && typeof flatArr[0][0] === 'string'){
                message.textContent = `${flatArr[0][0]} wins!`
                winDiv.append(message)
                return true
            }
        //Check inverse diagonal
        if(flatArr[2][0] === flatArr[1][1] && flatArr[1][1] === flatArr[0][2]
             && typeof flatArr[2][0] === 'string'){
                message.textContent = `${flatArr[2][0]} wins!`
                winDiv.append(message)
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
                    displayBoard.update()
                    if(win.check()) return; // Stop if someone wins
                    switchTurn()
                    return;
                    
                }
            } 
        }
    } 
    return {play}
})();

console.log(board.array2D)
console.log(flatArr)

