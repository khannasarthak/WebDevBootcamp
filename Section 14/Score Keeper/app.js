h1 = document.querySelector('h1');

buttons = document.querySelectorAll('button');
playerOne = buttons[0];
playerTwo = buttons[1];
reset = buttons[2];
var playerOneScore = 0;
var playerTwoScore = 0;
// getting playing till
var playing = document.querySelector("#playing");
var playingTill = 5;
var gameOver = false;
var userInput = document.querySelector('input');

playerOneText = document.querySelector("#playerOne");
playerTwoText = document.querySelector("#playerTwo");
console.log(playerOneText);





reset.addEventListener('click', function(){
	resetButton();
});

userInput.addEventListener('change', function() {
	playing.textContent = this.value;
	playingTill = this.value;
	
	

});

function resetButton(){
	playerOneText.classList.remove('green');
	playerTwoText.classList.remove('green');
	userInput.value = '0';
	playerOneScore = 0;
	playerTwoScore = 0;
	playerOneText.textContent = playerOneScore;
	playerTwoText.textContent = playerTwoScore;
	playing.textContent = '5'
	playingTill = 5;
	gameOver = false;
}




playerOne.addEventListener('click', function(){	
	if (!gameOver){
	playerOneScore +=1 ;
	playerOneText.textContent = playerOneScore;
	if (playerOneScore==playingTill){
		console.log("P1 won")
		playerOneText.classList.toggle('green');
		gameOver = true;
	}
}
	
});

playerTwo.addEventListener('click', function(){
	if (!gameOver){
	playerTwoScore +=1 ;
	playerTwoText.textContent = playerTwoScore;
	console.log(playerTwoScore+playingTill);
if (playerTwoScore==playingTill){
		console.log("P2 won")
		playerTwoText.classList.toggle('green');
		gameOver = true;
	}

}
});



