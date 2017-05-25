var wins=0; 
var guessesRemaining;
var wordArray;
var blankWord;
var lettersGuessed;
var word;
var userInput;

	function startGame(){

		//Display wins on the page
		document.getElementById("wins").innerHTML= ("<p>Win: " + wins);

		//number of guesses the user has left. Starts at 15
		guessesRemaining=15;
		document.querySelector("#guessesRemaining").innerHTML= ("<p> Guesses Remaining: " + guessesRemaining + "</p>");


		//words that will be used in the game
		wordArray=["react", "nodejs", "html", "css", "javascript"];

		//make blankWord an array
		blankWord=[];

		//letters the user already guessed
		lettersGuessed=[];
		document.querySelector("#lettersGuessed").innerHTML= "<p>Letters Guessed: " + lettersGuessed + "</p>";		

		//pick a random word from the wordArray
		wordIndex= Math.floor(Math.random() * wordArray.length);
		word= wordArray[wordIndex];
		console.log("New Word :" + word);


		for(var i=0; i<word.length; i++){
			//blankWord array
			blankWord[i]= "_ ";
		}
		console.log("Blank Word: " + blankWord);

		document.getElementById('blankWord').innerHTML = blankWord.join("");

	}//end startGame function


startGame();	


	document.onkeyup=function(event){

		userInput= event.key;
		checkLetter(word, blankWord, userInput, lettersGuessed);

		console.log(guessesRemaining);

		if(guessesRemaining==0){
			console.log("You loose the game!")
			
			console.log("Wins: " + wins);
			console.log(guessesRemaining);

			startGame();
		}

		if(blankWord.join("")== word){
			console.log("You win the game");
			
			wins++;
			console.log("Wins: " + wins);
			console.log(guessesRemaining);

			startGame();
		}
	}



	//check if the letter guessed matches any letter in the array
	function checkLetter(word, blankWord, letter, lettersGuessed){
		for(var i=0; i<word.length; i++){
			if(word.charAt(i)==letter.toLowerCase()){
				blankWord[i]=letter.toLowerCase();
				console.log(blankWord);
			}
			document.getElementById("blankWord").innerHTML=blankWord.join("");
		}

		if(lettersGuessed.indexOf(letter)===-1){
			guessesRemaining--;
			lettersGuessed.push(letter);

			for(var i=0; i<lettersGuessed.length; i++){
				document.querySelector("#lettersGuessed").innerHTML= "<p>Letters Guessed: " + lettersGuessed + "</p>";	
			}
		}
		
		document.querySelector("#guessesRemaining").innerHTML= ("<p> Guesses Remaining: " + guessesRemaining + "</p>");
		console.log(lettersGuessed);

}
