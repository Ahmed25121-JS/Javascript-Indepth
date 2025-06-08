const randomNumber =Math.floor(Math.random()*100+1)

const Submit =document.querySelector("#subt")
const userInput =document.querySelector("#guessField")
const guessSlot =document.querySelector(".guesses")
const remainingGuesses =document.querySelector(".lastResult")
const lowOrHi =document.querySelector(".lowOrHi")
const StartOver =document.querySelector(".resultParas")

const p =document.createElement("p")

let prevGuess=[]

let numGuess=1
let playGame=true 

if(playGame){
Submit.addEventListener('click',(e)=>{
  e.preventDefault()
  const guess =parseInt(userInput.value)
  console.log(guess)
  validateGuess(guess)
})
}


function validateGuess(guess){
  if(guess == '' || guess == 0 ||  isNaN(guess)){
alert('please enter a valid number')
  }  else if( guess < 1){
  alert("please enter a number greater than 1")
  } else if(guess>100){
alert(`guess is greather than 100`)}
else {
  prevGuess.push(guess)
  if (numGuess== 11){
  displayGuess(guess)
  displayMsg(`Game over.Random number was ${randomNumber}`)
  endGame()
  } else{
    displayGuess(guess)
    checkGuess(guess)
  }
}
  }



function checkGuess(guess){
  if(guess === randomNumber){
displayMsg(`You guessed it right`)
endGame()
  } else if( guess<randomNumber){
    displayMsg(`Number is too low`)
  } else if(guess > randomNumber){
    displayMsg(`Number is too high`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess},`/*It is appending values here */
  numGuess++;
  remainingGuesses.innerHTML = `${10-numGuess}`
}


function displayMsg(msg){
lowOrHi.innerHTML = ` <h2>${msg} </h2>`
}
function endGame(){
  userInput.value =''
  userInput.setAttribute('disabled', '' ) /* we are putting empty string here because we need to pass values as key value pairs */
  p.classList.add('button')
  p.innerHTML =`<h2 id = 'newGame'> start new game</h2>`
  StartOver.appendChild(p)
  playGame =false
  newGame()
}

function newGame(){
const newGameBtn= document.querySelector('#newGame').addEventListener('click',()=>{
  prevGuess =[]
  numGuess =1
  guessSlot.innerHTML = ''
  userInput.removeAttribute('disabled')
  remainingGuesses.innerHTML =`${10-numGuess}`
  StartOver.removeChild(p)
  playGame=true;
})
}



