let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//UI Elements

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

//Play again listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

guessBtn.addEventListener('click',function(){
  let guess = parseInt(guessInput.value);
  console.log(guess);
  if(isNaN(guess)|| guess<min || guess>max){
    setMessage(`Please enter a number ${min} and ${max}`,'red');
  }

  //check if won

  if(guess === winningNum){
    //Disable input
    guessInput.disabled = true;
    gameOver(true, `${winningNum} is correct, you won!`);
  } else {
    guessesLeft-= 1;
    if(guessesLeft === 0){
        //game over - lost
        
        //Disable input
        guessInput.disabled = true;
        gameOver(false,`Game over, you lost. The correct number was ${winningNum}` )
        //Play again?
        guessBtn.value = 'Play again';
        guessBtn.className += 'play-again';
      }
    else{
      //Game Continues - answer wrong
      guessInput.value='';
      gameOver(false, `${guess} is not correct, ${guessesLeft} guesses left.`);
    }
  }

});


function gameOver(won, msg){
  let color;
  won === true? color = 'green' : color = 'red';
  setMessage(msg, color);

 
}

function setMessage(msg, color){
  message.style.color=color;
  guessInput.style.borderColor = color;
  message.textContent = msg;
}

function getRandomNum(min, max){
  let random = Math.floor(Math.random()*(max-min+1)+min);
  return random;
}

